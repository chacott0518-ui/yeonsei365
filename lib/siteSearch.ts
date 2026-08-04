import { posts } from '@/lib/posts'
import { ALL_FAQS } from '@/lib/faqData'
import { HEALTH_ARTICLES, CATEGORIES } from '@/lib/healthHub'
import type { ArticleSection, CategoryKey } from '@/lib/healthHub'
import { COLUMNS } from '@/lib/columns'
import type { ColumnSection } from '@/lib/columns'
import { EXACT_INTENT_PAGES, SYNONYM_GROUPS } from '@/lib/homeSearchData'

export type SiteSearchResult = {
  title: string
  url: string
  description: string
  category: string
}

type SearchDocument = {
  title: string
  url: string
  description: string
  category: string
  aliases: string[]
  keywords: string[]
  summary: string
  body: string
  slug: string
  publishedAt: string
  priority: number
}

type ScoredDoc = {
  doc: SearchDocument
  score: number
  titleMatchRatio: number
  andMatch: boolean
}

const MAX_DESC = 100
const MAX_RESULTS = 5
const MAX_BODY_CHARS = 4000
const MIN_SCORE_AND = 70
const MIN_SCORE_OR = 85

let catalogCache: SearchDocument[] | null = null

function truncate(text: string, max = MAX_DESC): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return `${t.slice(0, max - 1).trim()}…`
}

export function normalizeQuery(raw: string): string {
  return raw
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/[·•|/\\]+/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function compactText(text: string): string {
  return normalizeQuery(text).replace(/\s+/g, '')
}

export function tokenize(normalized: string): string[] {
  return normalized
    .split(' ')
    .map((t) => t.trim())
    .filter((t) => t.length >= 1)
}

function matchedSynonymGroups(phrase: string, phraseC: string, tokens: string[]): string[][] {
  const groups: string[][] = []
  for (const group of SYNONYM_GROUPS) {
    const norms = group.map((g) => normalizeQuery(g))
    const comps = group.map((g) => compactText(g))
    const hit =
      norms.includes(phrase) ||
      comps.includes(phraseC) ||
      tokens.some(
        (t) =>
          norms.includes(t) ||
          comps.includes(compactText(t)) ||
          norms.some((g) => g.includes(t) || t.includes(g)) ||
          comps.some((g) => g.includes(compactText(t)) || compactText(t).includes(g))
      )
    if (hit) groups.push(group)
  }
  return groups
}

function expandTokens(tokens: string[], phrase: string, phraseC: string): string[] {
  const out = new Set<string>()
  for (const token of tokens) {
    out.add(token)
    out.add(compactText(token))
  }
  for (const group of matchedSynonymGroups(phrase, phraseC, tokens)) {
    for (const g of group) {
      out.add(normalizeQuery(g))
      out.add(compactText(g))
    }
  }
  return [...out].filter(Boolean)
}

function sectionsToText(sections: ArticleSection[] | ColumnSection[]): string {
  const parts: string[] = []
  for (const section of sections) {
    if (section.title) parts.push(section.title)
    if (section.content) parts.push(section.content)
    if (section.items) parts.push(section.items.join(' '))
    if ('steps' in section && section.steps) {
      parts.push(section.steps.map((s) => `${s.title} ${s.desc}`).join(' '))
    }
  }
  return parts.join(' ').slice(0, MAX_BODY_CHARS)
}

function resolveExactIntentUrl(normalized: string): string | null {
  const compactQ = compactText(normalized)
  for (const intent of EXACT_INTENT_PAGES) {
    for (const q of intent.exactQueries) {
      const n = normalizeQuery(q)
      const c = compactText(q)
      if (normalized === n || compactQ === c) return intent.url
    }
  }
  return null
}

function categoryLabel(key: CategoryKey): string {
  return CATEGORIES[key]?.label ?? key
}

function buildCatalog(): SearchDocument[] {
  const docs: SearchDocument[] = []

  docs.push({
    title: '임신중절수술 FAQ',
    url: '/abortion/faq',
    description: '임신중절수술 비용, 시기, 방법, 회복에 대한 자주 묻는 질문을 확인합니다.',
    category: 'FAQ',
    aliases: ['자주 묻는 질문', 'faq'],
    keywords: ['FAQ', '자주 묻는 질문'],
    summary: '임신중절수술 관련 자주 묻는 질문 모음',
    body: '임신중절수술 FAQ 비용 시기 방법 회복 병원',
    slug: 'faq',
    publishedAt: '2026-05-22',
    priority: 90,
  })

  for (const post of posts) {
    const url = post.slug.startsWith('/') ? post.slug : `/${post.slug}`
    docs.push({
      title: post.title,
      url,
      description: truncate(post.description),
      category: '안내',
      aliases: post.keywords ?? [],
      keywords: post.keywords ?? [],
      summary: post.description,
      body: `${post.title} ${post.description} ${(post.keywords ?? []).join(' ')}`,
      slug: post.slug.replace(/^\//, ''),
      publishedAt: post.date,
      priority: post.priority ?? 10,
    })
  }

  for (const faq of ALL_FAQS) {
    docs.push({
      title: faq.question,
      url: `/abortion/faq/${faq.slug}`,
      description: truncate(faq.answer),
      category: 'FAQ',
      aliases: [],
      keywords: [faq.category, 'FAQ', '자주 묻는 질문'],
      summary: truncate(faq.answer, 160),
      body: faq.answer.slice(0, MAX_BODY_CHARS),
      slug: faq.slug,
      publishedAt: '2026-01-01',
      priority: 20,
    })
  }

  for (const article of HEALTH_ARTICLES) {
    const faqText = article.faq.map((f) => `${f.q} ${f.a}`).join(' ').slice(0, MAX_BODY_CHARS)
    const body = `${sectionsToText(article.sections)} ${faqText}`.slice(0, MAX_BODY_CHARS)
    docs.push({
      title: article.title,
      url: `/health-hub/${article.category}/${article.slug}`,
      description: truncate(article.description),
      category: categoryLabel(article.category),
      aliases: [],
      keywords: article.keywords ?? [],
      summary: article.description,
      body,
      slug: article.slug,
      publishedAt: article.lastModified || article.approvedAt || '2025-01-01',
      priority: 15,
    })
  }

  for (const col of COLUMNS) {
    const faqText = col.faq.map((f) => `${f.q} ${f.a}`).join(' ').slice(0, MAX_BODY_CHARS)
    const body = `${sectionsToText(col.sections)} ${faqText}`.slice(0, MAX_BODY_CHARS)
    docs.push({
      title: col.title,
      url: `/health-magazine/column/${col.slug}`,
      description: truncate(col.description),
      category: col.category || '칼럼',
      aliases: [],
      keywords: col.keywords ?? [],
      summary: col.description,
      body,
      slug: col.slug,
      publishedAt: col.date.replace(/\./g, '-'),
      priority: 15,
    })
  }

  return docs
}

function getCatalog(): SearchDocument[] {
  if (!catalogCache) catalogCache = buildCatalog()
  return catalogCache
}

function fieldHasPhrase(field: string, phrase: string, phraseC: string): boolean {
  const n = normalizeQuery(field)
  const c = compactText(field)
  return Boolean(phrase && (n.includes(phrase) || c.includes(phraseC)))
}

function fieldEquals(field: string, phrase: string, phraseC: string): boolean {
  const n = normalizeQuery(field)
  const c = compactText(field)
  return n === phrase || c === phraseC
}

function fieldHasAllTokens(field: string, tokens: string[]): boolean {
  if (tokens.length === 0) return false
  const n = normalizeQuery(field)
  const c = compactText(field)
  return tokens.every((t) => n.includes(t) || c.includes(compactText(t)))
}

function fieldHasAnyToken(field: string, tokens: string[]): number {
  const n = normalizeQuery(field)
  const c = compactText(field)
  let hits = 0
  for (const t of tokens) {
    if (n.includes(t) || c.includes(compactText(t))) hits += 1
  }
  return hits
}

function titleMatchRatio(title: string, phrase: string, phraseC: string): number {
  const tC = compactText(title)
  if (!tC || !phraseC) return 0
  if (tC === phraseC) return 1
  if (tC.includes(phraseC)) return phraseC.length / tC.length
  return 0
}

/** 동의어가 제목/본문에 걸린 경우의 티어 점수 (원문 제목 일치보다 낮음) */
function synonymFieldScore(
  field: string,
  groups: string[][],
  exactScore: number,
  phraseScore: number
): number {
  let best = 0
  for (const group of groups) {
    for (const syn of group) {
      const sn = normalizeQuery(syn)
      const sc = compactText(syn)
      if (!sn) continue
      if (fieldEquals(field, sn, sc)) best = Math.max(best, exactScore)
      else if (fieldHasPhrase(field, sn, sc)) best = Math.max(best, phraseScore)
    }
  }
  return best
}

function documentMatchesSynonym(doc: SearchDocument, groups: string[][]): boolean {
  const hay = `${doc.title} ${doc.summary} ${doc.description} ${doc.body} ${doc.aliases.join(' ')} ${doc.keywords.join(' ')}`
  for (const group of groups) {
    for (const syn of group) {
      const sn = normalizeQuery(syn)
      const sc = compactText(syn)
      if (fieldHasPhrase(hay, sn, sc)) return true
    }
  }
  return false
}

function scoreDocument(
  doc: SearchDocument,
  phrase: string,
  phraseC: string,
  tokens: string[],
  expanded: string[],
  synonymGroups: string[][],
  intentUrl: string | null
): ScoredDoc {
  const title = doc.title
  const aliases = doc.aliases
  const keywords = doc.keywords
  const summary = `${doc.summary} ${doc.description}`
  const body = doc.body
  const category = doc.category
  const haystack = `${title} ${summary} ${body} ${keywords.join(' ')} ${aliases.join(' ')}`

  const titleExact = fieldEquals(title, phrase, phraseC)
  const titlePhrase = fieldHasPhrase(title, phrase, phraseC)
  const titleAll = fieldHasAllTokens(title, tokens)
  const aliasExact = aliases.some((a) => fieldEquals(a, phrase, phraseC))
  const aliasPhrase = aliases.some((a) => fieldHasPhrase(a, phrase, phraseC))
  const keywordExact = keywords.some((k) => fieldEquals(k, phrase, phraseC))
  const keywordPhrase = keywords.some((k) => fieldHasPhrase(k, phrase, phraseC))
  const summaryPhrase = fieldHasPhrase(summary, phrase, phraseC)
  const bodyPhrase = fieldHasPhrase(body, phrase, phraseC)
  const categoryHit = fieldHasPhrase(category, phrase, phraseC)
  const slugHit =
    fieldHasPhrase(doc.slug, phrase, phraseC) ||
    fieldHasAllTokens(doc.slug.replace(/-/g, ' '), tokens)

  // 원문 제목 일치가 없을 때만 동의어 제목 점수 사용
  const synonymTitle = titleExact || titlePhrase || titleAll
    ? 0
    : synonymFieldScore(title, synonymGroups, 95, 92)
  const synonymAlias =
    aliasExact || aliasPhrase ? 0 : synonymFieldScore(aliases.join(' '), synonymGroups, 85, 72)
  const synonymKeyword =
    keywordExact || keywordPhrase
      ? 0
      : synonymFieldScore(keywords.join(' '), synonymGroups, 80, 68)
  const synonymSummary =
    summaryPhrase ? 0 : synonymFieldScore(summary, synonymGroups, 58, 55)
  const synonymBody = bodyPhrase ? 0 : synonymFieldScore(body, synonymGroups, 38, 35)

  const originalTokenHits = fieldHasAnyToken(haystack, tokens)
  const expandedTitleHits = fieldHasAnyToken(title, expanded)
  const partialTokenScore =
    !titleExact && !titlePhrase && !titleAll && originalTokenHits > 0
      ? Math.min(30, 10 + originalTokenHits * 8)
      : 0

  // 우선순위 티어: 합산하지 않고 최댓값만 사용
  const tierScores = [
    titleExact ? 120 : 0,
    titlePhrase ? 100 : 0,
    titleAll ? 90 : 0,
    synonymTitle,
    aliasExact ? 85 : 0,
    aliasPhrase ? 70 : 0,
    synonymAlias,
    keywordExact ? 80 : 0,
    keywordPhrase ? 65 : 0,
    synonymKeyword,
    summaryPhrase ? 60 : 0,
    synonymSummary,
    bodyPhrase ? 40 : 0,
    synonymBody,
    categoryHit ? 15 : 0,
    slugHit ? 20 : 0,
    partialTokenScore,
    !titlePhrase && expandedTitleHits > 0 ? Math.min(28, expandedTitleHits * 7) : 0,
  ]

  let score = Math.max(...tierScores, 0)

  const originalAnd =
    tokens.length > 0 &&
    (fieldHasAllTokens(title, tokens) ||
      fieldHasAllTokens(summary, tokens) ||
      fieldHasAllTokens(body, tokens) ||
      tokens.every((t) => fieldHasAnyToken(haystack, [t]) > 0))

  const synonymAnd = synonymGroups.length > 0 && documentMatchesSynonym(doc, synonymGroups)
  const andMatch = originalAnd || synonymAnd

  const originalLiteralHit =
    titleExact ||
    titlePhrase ||
    titleAll ||
    aliasExact ||
    aliasPhrase ||
    keywordExact ||
    keywordPhrase ||
    summaryPhrase ||
    bodyPhrase

  // 정확한 핵심 탐색어 → 대표 URL 가산.
  // 검색어 원문이 제목·키워드·요약·본문에 있을 때만 강하게 가산해
  // 동의어만 맞은 페이지가 실제 제목 일치 결과를 덮지 않게 한다.
  if (intentUrl && doc.url === intentUrl) {
    if (originalLiteralHit) {
      score += 28
    } else {
      // 동의어만 일치한 대표 페이지: 제목 원문 일치(100)보다는 낮고,
      // 다른 동의어 결과(92)보다는 높게 유지
      score = Math.max(score, 98)
    }
  }

  // 동점 보조: 제목 일치율·priority
  score += titleMatchRatio(title, phrase, phraseC) * 4
  score += Math.min(doc.priority, 100) * 0.02

  return {
    doc,
    score,
    titleMatchRatio: titleMatchRatio(title, phrase, phraseC),
    andMatch,
  }
}

function dedupeResults(rows: ScoredDoc[]): ScoredDoc[] {
  const byUrl = new Map<string, ScoredDoc>()
  const byTitle = new Map<string, ScoredDoc>()

  for (const row of rows) {
    const urlKey = row.doc.url
    const titleKey = compactText(row.doc.title)
    const existingUrl = byUrl.get(urlKey)
    if (existingUrl && existingUrl.score >= row.score) continue

    const existingTitle = byTitle.get(titleKey)
    if (existingTitle && existingTitle.doc.url !== urlKey && existingTitle.score >= row.score) {
      continue
    }

    if (existingUrl) byTitle.delete(compactText(existingUrl.doc.title))
    if (existingTitle && existingTitle.doc.url !== urlKey) byUrl.delete(existingTitle.doc.url)

    byUrl.set(urlKey, row)
    byTitle.set(titleKey, row)
  }

  return [...byUrl.values()]
}

function sortRows(a: ScoredDoc, b: ScoredDoc): number {
  if (b.score !== a.score) return b.score - a.score
  if (b.titleMatchRatio !== a.titleMatchRatio) return b.titleMatchRatio - a.titleMatchRatio
  return b.doc.publishedAt.localeCompare(a.doc.publishedAt)
}

function rankDocuments(query: string): ScoredDoc[] {
  const raw = query.trim()
  if (!raw) return []

  const phrase = normalizeQuery(raw)
  if (!phrase) return []

  const phraseC = compactText(phrase)
  if (phraseC.length < 2) return []

  const tokens = tokenize(phrase).filter((t) => compactText(t).length >= 1)
  if (tokens.length === 0) return []

  const synonymGroups = matchedSynonymGroups(phrase, phraseC, tokens)
  const expanded = expandTokens(tokens, phrase, phraseC)
  const intentUrl = resolveExactIntentUrl(phrase)
  const catalog = getCatalog()

  const scored = catalog.map((doc) =>
    scoreDocument(doc, phrase, phraseC, tokens, expanded, synonymGroups, intentUrl)
  )

  const andRows = scored.filter((r) => r.andMatch && r.score >= MIN_SCORE_AND)
  let selected = andRows

  if (selected.length < 2) {
    const orRows = scored.filter((r) => !r.andMatch && r.score >= MIN_SCORE_OR)
    selected = [...andRows, ...orRows]
  }

  selected = selected.filter((r) => r.score >= MIN_SCORE_AND)
  return dedupeResults(selected).sort(sortRows).slice(0, MAX_RESULTS)
}

export function searchSite(query: string): SiteSearchResult[] {
  return rankDocuments(query).map(({ doc }) => ({
    title: doc.title,
    url: doc.url,
    description: doc.description,
    category: doc.category,
  }))
}

export function isQueryTooShort(query: string): boolean {
  const c = compactText(query)
  return c.length > 0 && c.length < 2
}
