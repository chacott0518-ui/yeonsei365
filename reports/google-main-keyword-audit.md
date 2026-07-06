# Google 메인 키워드 대표 페이지 보호 감사 보고서

작성일: 2026-07-06
범위: 조사·기록만 포함. URL·slug·canonical·title·H1·대규모 내부링크 수정 없음.

## 대표 페이지와 목표 검색 의도

| 페이지 | 대표 검색 의도 |
|---|---|
| `/abortion` | 임신중절수술, 낙태수술, 인공임신중절 |
| `/abortion/cost` | 낙태비용, 임신중절수술 비용, 금액, 가격 |
| `/abortion/surgery` | 수술 방법, 수술 절차, 마취, 회복 |
| `/abortion/hospital` | 임신중절수술 병원, 사당역, 서울 지역 검색 |

---

## 1. 키워드 캐니벌라이제이션 위험 (경쟁 페이지/포스트)

**`/abortion`과 경쟁:**
- `app/blog/abortion-info/page.tsx` — "인공임신중절수술 비용·시기·가격 완벽 안내"
- `app/blog/abortion-legal/page.tsx` — "낙태수술 합법화 뜻 시기와 비용 | 임신초기중절수술 병원" (`/abortion`과 `/abortion/hospital` 동시 경쟁)
- `app/blog/abortion-surgery/page.tsx` — "임신중절수술 금액·합법기간·방법 안내" (3개 대표 페이지 키워드를 제목에 동시 포함)

**`/abortion/cost`와 경쟁:**
- `app/blog/abortion-cost/page.tsx`, `app/blog/abortion-amount/page.tsx`, `app/blog/abortion-price/page.tsx`, `app/price/page.tsx`(`/abortion/cost`와 거의 동일 제목/의도), `app/blog/abortion-insurance/page.tsx`(비용 인접)

**`/abortion/surgery`와 경쟁:**
- `app/abortion/method/page.tsx`, `app/abortion/recovery/page.tsx`(둘 다 `/abortion/*` 형제 페이지), `app/blog/abortion-process/page.tsx`, `app/blog/abortion-after/page.tsx`, `app/blog/abortion-fasting/page.tsx`, `app/blog/abortion-side/page.tsx`, `app/blog/abortion-guardian/page.tsx`, `app/blog/abortion-insurance/page.tsx`, `app/blog/abortion-menstruation/page.tsx`, `app/blog/abortion-period/page.tsx`, `app/blog/abortion-alone/page.tsx`

**`/abortion/hospital`과 경쟁:**
- `app/blog/hospital-review/page.tsx`("사당역 산부인과 솔직 후기"), `app/abortion/review/page.tsx`, `app/womens-clinic/sadang/page.tsx`(중간 강도), `lib/healthHub.ts` 내 "사당역 근처 임신중절수술 비용과 안전한 병원 선택 가이드" 아티클

**대규모 잠재 캐니벌라이제이션 — `lib/healthHub.ts` (Health Hub, 약 74개 아티클):**
- 그중 57개 제목에 중절/낙태 키워드 포함 (비용 11개, 병원 6개, 수술/방법/절차 57개 — 중복 포함 가능), 예: "임신중절수술 비용과 안전한 수술을 위한 준비사항", "당일 임신중절수술 가능한 병원 - 응급 상황 대처법", "임신 8주 임신중절수술 비용과 안전한 시술 병원 안내"
- 이들은 4개 대표 페이지와 동일한 검색 공간을 두고 경쟁하는 개별 롱테일 페이지이며, 아래 §2에서 보듯 대표 페이지로 연결되는 링크가 없음.

---

## 2. FAQ/AI FAQ에서 대표 페이지로의 내부 링크 현황

**링크가 있는 곳:**
- `app/abortion/faq/[slug]/page.tsx:150` (breadcrumb) → `/abortion`만 연결 (217개 FAQ 상세 페이지 전체 공통), `/abortion/cost`·`/abortion/surgery`·`/abortion/hospital`로는 연결 없음
- `app/health-magazine/column/[slug]/ColumnDetailClient.tsx` 사이드바 → `/abortion/faq`, `/abortion/cost`, `/abortion`(15개 칼럼 공통) — `/abortion/surgery`, `/abortion/hospital` 링크 없음

**링크가 없는 곳:**
- `lib/healthHub.ts` 데이터 자체(101개 항목, 렌더러 `app/health-hub/[category]/[slug]/page.tsx`) — 대표 페이지로 연결되는 href가 전무
- `lib/faqData.ts`(251개 FAQ 콘텐츠 자체) — 답변 본문에 링크 없음, 페이지 템플릿의 breadcrumb만 `/abortion` 연결

---

## 3. 대표 페이지별 인바운드 내부 링크 개수 (근사치)

| 대상 페이지 | 매칭 수 | 콘텐츠성 백링크 출처 | 비고 |
|---|---|---|---|
| `/abortion` | 16 | 블로그 5건 + 형제 breadcrumb + Header + 구URL 301 | 보통 |
| `/abortion/cost` | 25 | `app/price`, `abortion-surgery` 블로그, 칼럼/퀴즈 사이드바 | 양호 |
| `/abortion/surgery` | 31 | 블로그 8건(after/fasting/guardian/insurance/menstruation/period/process/side) | 가장 양호 |
| `/abortion/hospital` | 13 | **콘텐츠성 백링크 0건** — 사이드바/헤더/사이트맵 뿐 | **가장 취약** |

**핵심 발견:** `/abortion/hospital`은 4개 대표 페이지 중 인바운드 링크가 가장 적고, 블로그·Health Hub·Health Magazine 어디에서도 문맥 링크를 받지 못함. `app/blog/hospital-review/page.tsx`와 `lib/healthHub.ts`의 "사당역 근처 병원" 아티클이 동일 키워드를 다루면서도 `/abortion/hospital`로 연결하지 않음.

---

## 4. 추후 최소 수정이 필요한 파일 (이번 작업에서는 미수정)

- `lib/healthHub.ts` — 사당역/병원 의도 아티클(6건), 비용 의도 아티클(11건)에 `/abortion/hospital`, `/abortion/cost` 문맥 링크 추가 검토 (렌더러 `app/health-hub/[category]/[slug]/page.tsx`의 `renderSection`에 인라인 링크 지원 여부 확인 필요)
- `lib/faqData.ts` + `app/abortion/faq/[slug]/page.tsx` — 카테고리별 "관련 페이지" 링크 블록 추가 검토(현재는 `/abortion` 루트만 연결)
- `app/health-magazine/column/[slug]/ColumnDetailClient.tsx` — 사이드바에 `/abortion/surgery`, `/abortion/hospital` 추가 검토
- `app/blog/hospital-review/page.tsx`, `app/abortion/review/page.tsx`, `app/womens-clinic/sadang/page.tsx` — `/abortion/hospital` 링크 추가 검토

## 네이버 노출 영향 위험도

- `/abortion/hospital`: **높음** — 인바운드 링크 취약 + 동일 키워드 페이지(`hospital-review`, Health Hub 사당역 아티클)가 대표 페이지를 지나쳐 자체 순위 경쟁
- `/abortion` 루트: 중간 — 블로그 3개 페이지(`abortion-surgery`, `abortion-legal`, `abortion-info`)가 제목에 유사 의도를 중복 포함
- `/abortion/cost`, `/abortion/surgery`: 낮음~중간 — 인바운드 링크는 양호하나 Health Hub의 롱테일 중복(§1)이 장기적으로 검색 노출을 분산시킬 가능성

이번 작업에서는 위 발견사항의 기록만 수행했으며, title/H1/대규모 내부링크 수정은 진행하지 않았습니다.
