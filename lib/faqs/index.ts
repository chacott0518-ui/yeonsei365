/**
 * lib/faqs/index.ts
 * 전체 FAQ 통합 export
 * ⚠️ 서버 전용 — 클라이언트에 전체 배열 전달 금지
 * ⚠️ 페이지별로 필요한 카테고리만 import해서 사용
 */

export { COST_FAQS } from './faq-cost'
export { RECOVERY_FAQS } from './faq-recovery'
export { MINOR_FAQS } from './faq-minor'

// 전체 합치기 (스키마·검색용)
import { COST_FAQS } from './faq-cost'
import { RECOVERY_FAQS } from './faq-recovery'
import { MINOR_FAQS } from './faq-minor'
import { STANDALONE_FAQS } from '../standaloneFaqs'

export const ALL_FAQS = [
  ...STANDALONE_FAQS,
  ...COST_FAQS,
  ...RECOVERY_FAQS,
  ...MINOR_FAQS,
]
