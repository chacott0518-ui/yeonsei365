/**
 * Intent / Entity Layer — 기존 lib/siteSearch.ts 앞단에 얇게 얹는 deterministic 계층.
 *
 * 설계 원칙 (필수 유지):
 * - 새 AI 호출 없음. lib/healthSearchTaxonomy.ts 사전만으로 판단한다.
 * - 기존 siteSearch의 tier 점수/동의어/dedupe 로직은 전혀 건드리지 않는다. 이 파일은
 *   `searchSite()`를 여러 자연어 문구로 재호출해 결과를 조합하는 소비자일 뿐이다.
 * - 실제로 매칭되는 문서가 없으면 빈 슬롯으로 두고, 프론트에서 없는 정보를 지어내지 않는다.
 * - FAQ가 1,000개로 늘어나도 이 파일의 계산량은 검색어 1건당 고정된 소수의 searchSite 호출
 *   (최대 10회 내외)로 유지되어 O(N) 카탈로그 스캔이 반복되는 정도만 늘 뿐, 페이지 수 증가에
 *   따라 늘어나는 것은 카탈로그 빌드(캐시됨) 뿐이다.
 */
import { searchSite, normalizeQuery, compactText, tokenize, type SiteSearchResult } from '@/lib/siteSearch'
import { FEATURED_QUESTIONS } from '@/lib/homeSearchData'
import {
  INTENT_META,
  INTENT_PRIORITY,
  INTENT_ADJACENCY,
  WEEK_PRIMARY_GRID,
  WEEK_COMPANION_GRID,
  WEEK_ENTITY_REGEX,
  MIN_PREGNANCY_WEEK,
  MAX_PREGNANCY_WEEK,
  REPRESENTATIVE_PAGE_URLS,
  INTENT_FALLBACK_PAGE,
  type IntentTag,
} from '@/lib/healthSearchTaxonomy'

export type GridItem = {
  tag: IntentTag
  label: string
  item: SiteSearchResult
}

export type SearchExperience = {
  status: 'success' | 'empty'
  message: string | null
  /** 하위호환: 기존 UI/회귀 테스트가 기대하는 flat 결과 (기존 searchSite 결과 그대로) */
  results: SiteSearchResult[]
  /** 가장 관련 있는 안내 */
  primary: SiteSearchResult | null
  weekEntity: number | null
  detectedIntent: IntentTag | null
  /** 지금 같이 확인하세요 (최대 4) */
  checklist: GridItem[]
  /** 함께 확인하면 좋은 정보 (최대 4, week 검색 전용 2번째 그리드에도 사용) */
  companion: GridItem[]
  /** 관련 Q&A (3~5) */
  relatedQna: SiteSearchResult[]
  /** 관련 의료정보 (대표 페이지, 1~3) */
  relatedPages: SiteSearchResult[]
}

/** 토큰이 적은 검색어에서 기존 엔진이 OR-match 폴백으로 자주 띄우는 범용 개요 페이지 */
const GENERIC_OVERVIEW_URLS = new Set(['/abortion', '/abortion/surgery', '/abortion/faq'])

function detectWeekEntity(normalized: string): number | null {
  const match = normalized.match(WEEK_ENTITY_REGEX)
  if (!match) return null
  const n = Number(match[1])
  if (!Number.isFinite(n) || n < MIN_PREGNANCY_WEEK || n > MAX_PREGNANCY_WEEK) return null
  return n
}

/** 조사(이/가/은/는/을/를/도/만/의/에)가 어간 뒤에 붙어 정확 매칭을 방해하는 경우를 흡수한다 */
const TRAILING_PARTICLES = ['이', '가', '은', '는', '을', '를', '도', '만', '의', '에']

function stripTrailingParticle(token: string): string {
  if (token.length <= 1) return token
  const last = token.slice(-1)
  return TRAILING_PARTICLES.includes(last) ? token.slice(0, -1) : token
}

/**
 * 사전 표현이 원문 그대로 없어도, "너무/진짜/정말" 같은 강조어 삽입이나 조사 변형으로
 * 어순·형태만 달라진 경우까지 흡수하는 느슨한 매칭.
 * 두 단어 이상인 사전 문구의 모든 어간이 (조사 제거 후) 쿼리 안에 존재하면 매칭으로 본다.
 * 오탐 방지를 위해 단어 1개짜리 문구에는 적용하지 않는다(이미 위에서 정확/부분일치로 처리됨).
 */
function looseLexiconHit(compact: string, phrase: string): boolean {
  const tokens = tokenize(normalizeQuery(phrase))
  if (tokens.length < 2) return false
  const stems = tokens.map(stripTrailingParticle).map(compactText).filter((t) => t.length > 0)
  if (stems.length < 2) return false
  return stems.every((t) => compact.includes(t))
}

function detectIntent(normalized: string, compact: string): IntentTag | null {
  for (const tag of INTENT_PRIORITY) {
    const lex = INTENT_META[tag].lexicon
    const hit = lex.some((phrase) => {
      const n = normalizeQuery(phrase)
      const c = compactText(phrase)
      if ((n && normalized.includes(n)) || (c && compact.includes(c))) return true
      return looseLexiconHit(compact, phrase)
    })
    if (hit) return tag
  }
  return null
}

/**
 * 검색어 토큰이 적어 기존 엔진이 OR-match 폴백으로 아무 문서(흔히 비용 안내처럼 우선순위가
 * 높은 문서)를 띄우는 경우를 걸러낸다. phrase에 실제로 등장하는 의미 있는 단어가 후보 문서의
 * title/description에 하나도 없다면 "그 intent와 무관한 폴백"으로 보고 채택하지 않는다.
 */
function isTopicallyRelevant(doc: SiteSearchResult, phrase: string): boolean {
  const hay = compactText(`${doc.title} ${doc.description}`)
  const tokens = tokenize(normalizeQuery(phrase))
    .map(stripTrailingParticle)
    .map(compactText)
    .filter((t) => t.length >= 2)
  if (tokens.length === 0) return true
  return tokens.some((t) => hay.includes(t))
}

/**
 * 기존 엔진은 부정 표현을 이해하지 못해 "피가 많이 나요"와 "피가 많이 안 나와도 괜찮나요?"처럼
 * 정반대 의미의 문서를 같은 토큰 매칭으로 착각해 띄울 수 있다. 후보 문서의 title/description에
 * 이런 부정 표현이 있으면 "반대 의미일 가능성"으로 보고 별도로 표시한다.
 */
const NEGATION_MARKERS = ['거의 없', '많이 안', '안 나와', '없어도', '않아도', '없는데', '거의없']

function isNegatedDoc(doc: SiteSearchResult): boolean {
  const hay = `${doc.title} ${doc.description}`
  return NEGATION_MARKERS.some((m) => hay.includes(m))
}

/** 특정 intent(및 선택적으로 주수)에 맞는 실제 문서 1건을 기존 검색엔진으로 조회 */
function lookupIntentDoc(
  tag: IntentTag,
  excludeUrls: Set<string>,
  weekEntity: number | null
): SiteSearchResult | null {
  const phrase = weekEntity ? `${weekEntity}주 ${INTENT_META[tag].phrase}` : INTENT_META[tag].phrase
  const rows = searchSite(phrase)
  const found = rows.find(
    (r) => !excludeUrls.has(r.url) && isTopicallyRelevant(r, INTENT_META[tag].phrase) && !isNegatedDoc(r)
  )
  return found ?? null
}

function buildGrid(
  tags: IntentTag[],
  excludeUrls: Set<string>,
  weekEntity: number | null,
  limit: number
): GridItem[] {
  const out: GridItem[] = []
  for (const tag of tags) {
    if (out.length >= limit) break
    const doc = lookupIntentDoc(tag, excludeUrls, weekEntity)
    if (!doc) continue
    excludeUrls.add(doc.url)
    out.push({ tag, label: INTENT_META[tag].label, item: doc })
  }
  return out
}

function dedupeByTitle(rows: SiteSearchResult[]): SiteSearchResult[] {
  const seen = new Set<string>()
  const out: SiteSearchResult[] = []
  for (const r of rows) {
    const key = compactText(r.title)
    if (seen.has(key)) continue
    seen.add(key)
    out.push(r)
  }
  return out
}

function buildRelatedQna(
  baseResults: SiteSearchResult[],
  excludeUrls: Set<string>,
  detectedIntent: IntentTag | null,
  weekEntity: number | null,
  limit = 5
): SiteSearchResult[] {
  const pool: SiteSearchResult[] = []

  // 1) 인접 intent에서 실제 존재하는 문서를 우선 채운다 (같은 주제 반복 방지)
  const adjacent = detectedIntent ? INTENT_ADJACENCY[detectedIntent] : []
  for (const tag of adjacent) {
    const doc = lookupIntentDoc(tag, excludeUrls, weekEntity)
    if (doc) {
      excludeUrls.add(doc.url)
      pool.push(doc)
    }
    if (pool.length >= limit) break
  }

  // 2) 부족하면 기존 검색 결과(원 검색어 기준)에서 나머지를 채운다
  if (pool.length < 3) {
    for (const r of baseResults) {
      if (excludeUrls.has(r.url)) continue
      excludeUrls.add(r.url)
      pool.push(r)
      if (pool.length >= limit) break
    }
  }

  return dedupeByTitle(pool).slice(0, limit)
}

function buildRelatedPages(
  baseResults: SiteSearchResult[],
  detectedIntent: IntentTag | null
): SiteSearchResult[] {
  const fromResults = baseResults.filter((r) => REPRESENTATIVE_PAGE_URLS.includes(r.url))
  if (fromResults.length > 0) return dedupeByTitle(fromResults).slice(0, 3)

  const fallbackUrl = detectedIntent ? INTENT_FALLBACK_PAGE[detectedIntent] : null
  if (!fallbackUrl) return []
  const featured = FEATURED_QUESTIONS.find((f) => f.href === fallbackUrl)
  if (!featured) return []
  return [
    {
      title: featured.question,
      url: featured.href,
      description: '',
      category: '대표 안내',
    },
  ]
}

export function buildSearchExperience(query: string): SearchExperience {
  const raw = query.trim()
  const normalized = normalizeQuery(raw)
  const compact = compactText(normalized)

  let baseResults = searchSite(raw)
  const weekEntity = detectWeekEntity(normalized)
  const detectedIntent = weekEntity ? null : detectIntent(normalized, compact)

  // 원 검색어 그대로는 0건이지만 intent/주수를 고신뢰로 이해한 경우, 그 대표 자연어 문구로
  // 재검색해 완전히 빈 결과로 끝내지 않는다 (섹션25: 0건 대신 같은 intent 일반 안내 시도).
  if (baseResults.length === 0) {
    if (weekEntity) {
      baseResults = searchSite(normalized.includes('임신') ? `임신 ${weekEntity}주` : `${weekEntity}주`)
    } else if (detectedIntent) {
      baseResults = searchSite(INTENT_META[detectedIntent].phrase)
    }
  }

  if (baseResults.length === 0) {
    return {
      status: 'empty',
      message: null,
      results: [],
      primary: null,
      weekEntity,
      detectedIntent,
      checklist: [],
      companion: [],
      relatedQna: [],
      relatedPages: [],
    }
  }

  let primary: SiteSearchResult = baseResults[0]

  // 검색어 자체가 부정 표현("안", "없", "거의")을 쓰지 않았는데도 결과 문서가 부정 표현을
  // 포함한다면, 기존 엔진이 토큰만 보고 반대 의미 문서를 잘못 올린 것일 수 있다.
  const queryAssertsPositive = !compact.includes('안') && !compact.includes('없') && !compact.includes('거의')
  const primaryLooksReversed = Boolean(detectedIntent) && queryAssertsPositive && isNegatedDoc(primary)

  // 검색어 토큰이 적어 기존 엔진이 범용 개요 페이지(/abortion)를 OR-match 폴백으로 1위에
  // 올리거나, 위처럼 반대 의미 문서를 올린 경우, intent가 고신뢰로 감지됐다면 그 intent의
  // 대표 문구로 재검색해 더 정확한 문서가 있으면 그것을 우선한다. 기존 searchSite 자체의
  // 순위 계산은 건드리지 않는다 — 이미 유효한 두 검색 결과 중 어떤 것을 1번으로 보여줄지만
  // 이 계층에서 결정한다.
  if (!weekEntity && detectedIntent && (GENERIC_OVERVIEW_URLS.has(primary.url) || primaryLooksReversed)) {
    const phrase = INTENT_META[detectedIntent].phrase
    const intentRows = searchSite(phrase)
    const better = intentRows.find(
      (r) => !GENERIC_OVERVIEW_URLS.has(r.url) && isTopicallyRelevant(r, phrase) && !isNegatedDoc(r)
    )
    if (better) {
      primary = better
      baseResults = [better, ...baseResults.filter((r) => r.url !== better.url)]
    }
  }

  // 주수 entity가 있으면 "{주수}주" 자연어로 재검색해, 원 검색어보다 더 정확한 주수별 문서가
  // 있으면 그것을 우선 후보로 사용한다. 없으면(=false) 기존 baseResults[0]을 그대로 쓴다.
  if (weekEntity) {
    const weekPhrase = normalized.includes('임신') ? `임신 ${weekEntity}주` : `${weekEntity}주`
    const weekRows = searchSite(weekPhrase)
    const weekMatch = weekRows.find((r) => compactText(`${r.title} ${r.description}`).includes(`${weekEntity}주`))
    if (weekMatch) primary = weekMatch
  }

  const usedUrls = new Set<string>([primary.url])

  let checklist: GridItem[] = []
  let companion: GridItem[] = []

  if (weekEntity) {
    checklist = buildGrid(WEEK_PRIMARY_GRID, usedUrls, weekEntity, 4)
    companion = buildGrid(WEEK_COMPANION_GRID, usedUrls, weekEntity, 4)
  } else if (detectedIntent) {
    checklist = buildGrid(INTENT_ADJACENCY[detectedIntent], usedUrls, null, 4)
  }

  const relatedQna = buildRelatedQna(baseResults, new Set(usedUrls), detectedIntent, weekEntity, 5)
  for (const r of relatedQna) usedUrls.add(r.url)

  const relatedPages = buildRelatedPages(baseResults, detectedIntent ?? (weekEntity ? 'timing' : null))

  return {
    status: 'success',
    message: null,
    results: baseResults,
    primary,
    weekEntity,
    detectedIntent,
    checklist,
    companion,
    relatedQna,
    relatedPages,
  }
}
