const MAX_SLUG_LENGTH = 60

function stripToSlugChars(text: string): string {
  const normalized = text.normalize('NFKC')
  let result = ''
  for (const ch of normalized) {
    if (/[가-힣ㄱ-ㆎ]/.test(ch)) {
      result += ch // 한글 유지
    } else if (/[a-z]/.test(ch)) {
      result += ch
    } else if (/[A-Z]/.test(ch)) {
      result += ch.toLowerCase()
    } else if (/[0-9]/.test(ch)) {
      result += ch
    } else if (/\s/.test(ch)) {
      result += '-'
    }
    // 그 외 문장부호/특수문자는 URL path를 깨뜨릴 수 있으므로 제거
  }
  return result.replace(/-+/g, '-').replace(/^-+|-+$/g, '')
}

/**
 * 질문/제목 문자열을 규칙 기반으로만 semantic slug로 변환한다.
 * AI 호출 없음. NFKC 정규화 → 한글/영문(소문자화)/숫자 유지, 공백→하이픈,
 * 문장부호 제거, 중복/양끝 하이픈 정리, 길이 제한 순으로 처리한다.
 */
export function generateSemanticSlug(text: string): string {
  let slug = stripToSlugChars(text)
  if (slug.length > MAX_SLUG_LENGTH) {
    slug = slug.slice(0, MAX_SLUG_LENGTH).replace(/-+$/g, '')
  }
  return slug || 'faq'
}

// 질문 문자열 기반 짧은 deterministic 해시 (충돌 시에만 사용, timestamp 아님)
function shortHash(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash.toString(36).slice(0, 5)
}

/**
 * baseSlug가 이미 존재할 때만 질문 문자열 기반 짧은 deterministic suffix를 붙인다.
 * exists()는 호출 측이 실제 저장소(예: 현재 healthHub.ts 파일 내용)를 기준으로 판단한다.
 */
export function ensureUniqueSlug(baseSlug: string, exists: (slug: string) => boolean): string {
  if (!exists(baseSlug)) return baseSlug
  let attempt = 0
  let candidate = `${baseSlug}-${shortHash(baseSlug)}`
  while (exists(candidate) && attempt < 5) {
    attempt += 1
    candidate = `${baseSlug}-${shortHash(baseSlug + attempt)}`
  }
  return candidate
}
