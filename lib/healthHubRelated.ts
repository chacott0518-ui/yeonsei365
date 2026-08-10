/**
 * Health Hub 상세 페이지의 "관련 Q&A" 선택 엔진.
 *
 * 기존 문제: 모든 글의 관련 Q&A가 "같은 category 최신 3개"로 고정되어 있어 서로 다른 글을
 * 열어도 통증/마취/수면마취 같은 동일한 3개가 반복 노출되는 문제가 있었다.
 *
 * 우선순위: 1) 명시된 relatedSlugs → 2) 동일 intent 문서 → 3) 인접 intent 문서
 *          → 4) 동일 category 최신순(최후 폴백)
 *
 * FAQ가 1,000개로 늘어나도 매 요청마다 O(N) 스캔을 반복하지 않도록, intent/category
 * 인덱스는 모듈 최초 호출 시 1회만 계산해 캐시한다(O(N) 1회 + 조회는 인덱스 기반).
 */
import { HEALTH_ARTICLES } from '@/lib/healthHub'
import type { HealthArticle } from '@/lib/healthHub'
import { INTENT_META, INTENT_ADJACENCY, type IntentTag } from '@/lib/healthSearchTaxonomy'
import { compactText } from '@/lib/siteSearch'

type RelatedIndex = {
  slugMap: Map<string, HealthArticle>
  intentsBySlug: Map<string, IntentTag[]>
  articlesByIntent: Map<IntentTag, HealthArticle[]>
  articlesByCategory: Map<string, HealthArticle[]>
}

let cache: RelatedIndex | null = null

function computeIntents(article: HealthArticle): IntentTag[] {
  const hay = compactText(
    `${article.title} ${article.keywords.join(' ')} ${article.faq.map((f) => `${f.q} ${f.a}`).join(' ')}`
  )
  const tags: IntentTag[] = []
  for (const tag of Object.keys(INTENT_META) as IntentTag[]) {
    const hit = INTENT_META[tag].lexicon.some((phrase) => hay.includes(compactText(phrase)))
    if (hit) tags.push(tag)
  }
  return tags
}

function buildIndex(): RelatedIndex {
  const slugMap = new Map<string, HealthArticle>()
  const intentsBySlug = new Map<string, IntentTag[]>()
  const articlesByIntent = new Map<IntentTag, HealthArticle[]>()
  const articlesByCategory = new Map<string, HealthArticle[]>()

  for (const article of HEALTH_ARTICLES) {
    slugMap.set(article.slug, article)
    const tags = computeIntents(article)
    intentsBySlug.set(article.slug, tags)
    for (const tag of tags) {
      const list = articlesByIntent.get(tag)
      if (list) list.push(article)
      else articlesByIntent.set(tag, [article])
    }
    const catList = articlesByCategory.get(article.category)
    if (catList) catList.push(article)
    else articlesByCategory.set(article.category, [article])
  }

  return { slugMap, intentsBySlug, articlesByIntent, articlesByCategory }
}

function getIndex(): RelatedIndex {
  if (!cache) cache = buildIndex()
  return cache
}

export function getRelatedArticles(article: HealthArticle, limit = 3): HealthArticle[] {
  const idx = getIndex()
  const out: HealthArticle[] = []
  const usedSlugs = new Set<string>([article.slug])
  const usedTitles = new Set<string>([compactText(article.title)])

  const tryAdd = (candidate: HealthArticle | undefined) => {
    if (!candidate || out.length >= limit) return
    if (usedSlugs.has(candidate.slug)) return
    const titleKey = compactText(candidate.title)
    if (usedTitles.has(titleKey)) return
    usedSlugs.add(candidate.slug)
    usedTitles.add(titleKey)
    out.push(candidate)
  }

  for (const slug of article.relatedSlugs ?? []) {
    if (out.length >= limit) break
    tryAdd(idx.slugMap.get(slug))
  }

  const myIntents = idx.intentsBySlug.get(article.slug) ?? []

  for (const tag of myIntents) {
    if (out.length >= limit) break
    for (const candidate of idx.articlesByIntent.get(tag) ?? []) {
      if (out.length >= limit) break
      tryAdd(candidate)
    }
  }

  for (const tag of myIntents) {
    if (out.length >= limit) break
    for (const adjTag of INTENT_ADJACENCY[tag] ?? []) {
      if (out.length >= limit) break
      for (const candidate of idx.articlesByIntent.get(adjTag) ?? []) {
        if (out.length >= limit) break
        tryAdd(candidate)
      }
    }
  }

  if (out.length < limit) {
    const pool = [...(idx.articlesByCategory.get(article.category) ?? [])].sort((a, b) => {
      const da = a.lastModified.replace(/[^0-9]/g, '')
      const db = b.lastModified.replace(/[^0-9]/g, '')
      return db.localeCompare(da)
    })
    for (const candidate of pool) {
      if (out.length >= limit) break
      tryAdd(candidate)
    }
  }

  return out
}
