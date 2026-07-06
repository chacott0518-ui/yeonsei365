# FAQ / AI FAQ(Health Hub) 중복 감사 보고서

작성일: 2026-07-06
범위: 삭제·리다이렉트·canonical 통합·slug/title 변경 없음 (조사 및 권고만 포함)

## 데이터소스

- 일반 FAQ: `lib/faqData.ts` (`ALL_FAQS`, 251개), URL `/abortion/faq/{slug}`
- 일반 FAQ(목록 페이지 실제 렌더링): `app/abortion/faq/FAQClient.tsx` (`FAQS`, 217개) — `lib/faqData.ts`와는 별개의 데이터셋으로, `/abortion/faq` 목록 페이지는 이 파일의 데이터를 사용하고 개별 상세 페이지(`/abortion/faq/[slug]`)와 sitemap은 `lib/faqData.ts`를 사용함. 두 데이터셋이 병존하는 구조 자체가 구조적 중복이며, 통합은 이번 작업 범위 밖(대규모 리팩토링 금지 원칙)이라 우선 병행 유지.
- AI FAQ(Health Hub): `lib/healthHub.ts` (`HEALTH_ARTICLES`, 약 74개 아티클), 아티클당 5개 내외 Q&A 내장 → 약 370개 개별 Q&A, URL `/health-hub/{category}/{slug}`
- 미사용(죽은 코드, 감사 제외): `lib/faqs/index.ts`, `lib/faqs/faq-cost.ts`, `lib/faqs/faq-recovery.ts`, `lib/faqs/faq-minor.ts`, `lib/standaloneFaqs.ts` — 어떤 페이지에서도 import되지 않음.

## 중복 유형 정의

- A. 정확 중복: 질문·답변이 사실상 동일
- B. 강한 유사 중복: 문장은 다르나 검색 의도·답변 요지가 거의 동일
- C. 정상 유사 주제: 같은 주제, 다른 의도/답변 (중복 아님)

---

## 그룹 A — 보호자/파트너 동의·동행 필요 여부 (최대 규모 중복군)

- 일반 FAQ 정본 후보: `guardian-required` (`/abortion/faq/guardian-required`)
- 일반 FAQ 내부 중복(B): `situation-bf-disagree`, `situation-student`, `spouse-consent`, `abortion-partner-rights`
- AI FAQ(Health Hub) 중복(B, 일부 A급): `q-1778840850547`, `q-1779375730626`, `q-1779006554800`, `q-1779443952625`, `q-1780028620771`, `q-1780028639130`, `q-1780028799580`, `q-1780028813873`, `q-1782393790093`, `q-1782393893396`, `q-1782394017786`~`q-1782394326837`, `q-1782807125370`~`q-1782807162204`, `q-1782722353960`, `q-1781849484517` (모두 `/health-hub/{category}/{slug}`)
- 유지 권장: `guardian-required`(일반 FAQ, 답변 간결·정확)
- 내용 차별화/추후 통합 검토: Health Hub 쪽 8~15개 슬러그가 사실상 동일 질문 반복 — 대표 아티클로 통합 검토 필요
- 네이버 노출 보호 위험도: **중~높음** (동일 의도 페이지가 다수라 캐니벌라이제이션 가능성)

## 그룹 B — 임신중절수술 비용 전반

- 일반 FAQ 정본 후보: `abortion-cost-price`
- 일반 FAQ 내부 중복(B): `surgery-cost-transparent`, `surgery-cost-all-included`, `surgery-cost-compare`, `surgery-cost-phone-confirm`
- AI FAQ 중복(A/B): `q-1779375730626`, `q-1779443862703`, `q-1779443965256`, `q-1779443952625`, `q-1779443974674`(제목까지 거의 동일 — A급), `q-1779760820464`, `q-1779760840012`, `q-1779854144174`, `q-1780028639130`, `q-1782394017786`, `q-1782461168998`, `q-1782807125370`
- 유지 권장: `abortion-cost-price`
- 추후 통합 검토: Health Hub 7주/8주/10주 개별 비용 아티클을 "주수별 비용 완전 가이드" 1개로 병합
- 네이버 노출 보호 위험도: **중~높음**

## 그룹 C — 특정 주수(6·7·8·9·10·12·13·14·20주) 가능 여부/방법

- 일반 FAQ 정본 후보: `weekly-5`~`weekly-14`, `weekly-unknown`, `weekly-no-lmp`, `over-12weeks`, `weeks-limit`, `early-4weeks`
- AI FAQ 중복(B): `q-1778648522974`, `q-1778649862207`, `q-1780417389150`, `q-1780205464006`, `q-1779101247507`, `q-1780916798154`, `q-1782394326837`, `q-1782462227239`
- 유지 권장: 일반 FAQ `weekly-*` 시리즈
- 추후 통합 검토: Health Hub 주수별 아티클 통합
- 네이버 노출 보호 위험도: 중간

## 그룹 D — 수술 방법 비교 (흡입술 vs 소파술 vs 약물중절)

- 일반 FAQ 정본 후보: `suction-vs-dilation`, `suction-or-medical`, `drug-vs-surgery-safe`, `drug-vs-surgery-cost`
- AI FAQ 중복(A): `q-1780736446356`(결론이 `drug-vs-surgery-safe`와 사실상 동일), `q-1782461168998`, `q-1782462547500`
- 유지 권장: `suction-vs-dilation`
- 네이버 노출 보호 위험도: 낮음~중간

## 그룹 E — 회복/일상복귀·성관계 재개·출혈·생리 재개 (가장 심각한 중복군)

- 일반 FAQ: `daily-life-return`, `bleeding-duration`, `sex-after-surgery`, `first-period-after`, `future-pregnancy-ok`, `body-change-after`, `period-change-after`, `work-next-day`, `brown-discharge`, `blood-clot-after`
- AI FAQ 30개 이상 슬러그 중복(A/B): `q-1779845620647`, `q-1779444885704`, `q-1779854232855`(`blood-clot-after`와 A급), `q-1779854222647`, `q-1779854243940`(`positive-test-after`와 A급), `q-1779760714761`, `q-1779763265678`(응급 기준 A급), `q-1780731401833`/`q-1780982964454`(서로 A급 + `future-pregnancy-ok`와도 중복), `q-1782807148236`(방향이 반대라 C에 가까움), `q-1783050117855`, `q-1782883522075`, `q-1779843840274` 등
- 유지 권장: 일반 FAQ(간결·명확)
- 추후 통합 검토: Health Hub "수술 후 회복 가이드" 1~2개로 통합, 나머지 슬러그는 canonical/리다이렉트 검토(이번 작업 범위 아님)
- 네이버 노출 보호 위험도: **높음** (아티클 74개 중 절반 이상이 이 주제 포함 — Health Hub 내부 자기 중복도 심각)

## 그룹 F — 마취(수면마취)

- 일반 FAQ: `anesthesia-method`, `general-anesthesia-vs-sedation`, `waking-from-anesthesia`, `pain-during-surgery`
- AI FAQ 중복(B): `q-1779443985031`, `q-1779443862703`, `q-1780736446356`, `q-1782462547500`, `q-1782462508420`
- 유지 권장: `anesthesia-method`
- 네이버 노출 보호 위험도: 낮음

## 그룹 G — 비밀보장/기록 유출

- 일반 FAQ: `record-leak`, `privacy-guarantee`, `health-insurance-record`, `privacy-card-history`, `company-checkup`, `privacy-medical-law`
- AI FAQ 중복(A/B): `q-1780028758191`(`company-checkup`과 질문 문구까지 동일 — A급), `q-1780028774072`, `q-1780028901796`, `q-1780028877798`, `q-1780028906592`(서로 A급), `q-1780028910878`(`health-insurance-record`와 A급)
- 유지 권장: 일반 FAQ
- 추후 통합 검토: Health Hub 비밀보장 테마 3~4개 아티클을 "비밀보장 완전 가이드" 1개로 통합
- 네이버 노출 보호 위험도: 중간

## 그룹 H — 당일수술/예약/금식

- 일반 FAQ: `same-day-surgery`, `same-day-possible`, `walk-in`, `fasting-hours`, `anesthesia-fasting-why`, `ate-before-surgery`
- AI FAQ 중복(B, 최소 6개 슬러그): `q-1779443925840`, `q-1779760645328`, `q-1782393790093`, `q-1782393893396`, `q-1779767154772`, `q-1779843789339`, `q-1782462508420`
- 유지 권장: `same-day-surgery`
- 네이버 노출 보호 위험도: 중간
- 참고: 금식 시간·당일수술 가능 여부 자체에 대한 사실관계 충돌은 `reports/medical-legal-conflict-audit.md` 참조 (본 보고서는 콘텐츠 중복만 다룸)

## 그룹 I — 미성년자/청소년

- 일반 FAQ: `minor-consult`, `minor-documents`, `teen-pregnant-17`, `teen-pregnant-high-school`, `minor-abortion-parents`, `teen-abortion-cost`, `teen-go-alone`
- AI FAQ 중복(B): `q-1781849484517`, `q-1782722353960`
- 유지 권장: 일반 FAQ 시리즈(법정대리인 서류 등 더 체계적)
- 네이버 노출 보호 위험도: 낮음~중간

---

## 정상 유사 주제 (C, 중복 아님 — 참고용)

- `bleeding-duration`(출혈 과다) vs `q-1782807148236`(출혈 거의 없음) — 방향이 반대인 별개 의도
- `pregnancy-no-symptom` vs Health Hub `4weeks-symptoms` 아티클 — 목적(중절 상담 vs 순수 임신 정보)이 다름
- `situation-iud` vs `q-1778661387722`(루프 시술 후 부정출혈) — 키워드는 같으나 의도가 다름

---

## 종합 권고

1. 가장 시급한 캐니벌라이제이션 위험군은 **그룹 E(회복/출혈/재임신)**와 **그룹 A(보호자 동의)** — Health Hub 자동생성 아티클의 절반 이상이 이 두 주제를 반복.
2. 일반 FAQ(`lib/faqData.ts` 또는 `FAQClient.tsx`)를 각 주제의 정본으로 유지하고, Health Hub의 `q-{timestamp}` 자동생성 아티클은 주제별 "완전 가이드" 아티클로 병합하는 방향을 다음 작업에서 검토 권장.
3. `lib/faqs/*`, `lib/standaloneFaqs.ts`는 미사용 죽은 코드로 확인됨 — 별도 확인 후 정리 검토(이번 작업에서는 삭제하지 않음).
4. 이번 작업에서는 삭제·리다이렉트·canonical 통합·slug/title 변경을 하지 않았으며, 위 권고는 모두 **추후 검토 항목**임.
