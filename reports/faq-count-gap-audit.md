# 일반 FAQ 목록(217) vs ALL_FAQS(251) 차이 정밀 감사

작성일: 2026-07-06 (2026-07-06 2차 갱신: 내부링크 조치 반영)
범위: 삭제, URL 변경, canonical 변경 없음.

## 2차 조치 요약 (내부링크 보강)

- **ALL_FAQS 전용 70개**: `app/abortion/faq/FAQClient.tsx`에 "더 많은 질문과 답변" 섹션을 신규 추가하여 해결. 기존 lib/faqData.ts의 실제 질문·답변 데이터를 그대로 사용해 카테고리별 `<details>` 접힘 목록으로 렌더링하고, 각 항목은 이미 존재하는 상세 페이지(`/abortion/faq/{slug}`)로 링크됩니다. 기존 217개 목록 UI·카운트·필터는 전혀 변경하지 않았습니다. 신규 콘텐츠 창작 없음.
- **FAQClient 전용 36개**: 지시에 따라 새 상세 페이지를 만들지 않았습니다. 이 36개는 계속 `/abortion/faq` 목록에는 노출되지만 개별 URL이 없는 기존 상태를 그대로 유지합니다(회귀 아님, 기존부터 그랬음). 아래 "확인 필요" 섹션 참고.

## 결론 요약 (단순 숫자 자동화 아님)

251 - 217 = 34는 산술적 차이일 뿐이며, 실제 두 데이터셋은 **동일 집합의 부분집합 관계가 아닙니다.**
질문 문장을 1:1로 정밀 대조(유사도 기반 매칭 + 수작업 검증)한 결과는 다음과 같습니다.

| 구분 | 개수 |
|---|---|
| 두 데이터셋에 공통으로 존재(문구는 다르나 동일 질문/답변으로 판단) | 181개 |
| **`lib/faqData.ts`(ALL_FAQS)에만 존재, `FAQClient.tsx` 목록에는 없음** | **70개** |
| **`FAQClient.tsx` 목록에만 존재, `ALL_FAQS`에는 없음** | **36개** |

검증: 181+70 = 251 ✓ / 181+36 = 217 ✓

즉 "34개가 부족하다"가 아니라, **`ALL_FAQS`에만 있는 70개**와 **`FAQClient` 목록에만 있는 36개**가 각각 별도로 존재하며, 그 순감소분(70-36=34)이 우연히 사용자가 언급한 34와 일치하는 것입니다.

## 데이터소스

- `lib/faqData.ts` → `ALL_FAQS` (251개), 개별 상세 페이지 `/abortion/faq/{slug}` 생성 및 `app/sitemap.ts`가 이 배열을 직접 사용해 sitemap에 포함.
- `app/abortion/faq/FAQClient.tsx` → `FAQS` (217개), `/abortion/faq` 목록 페이지에 실제로 렌더링되는 사람이 보는 카드 목록. `ALL_FAQS`와 독립적인 별도 배열(과거부터 두 파일이 각자 관리되어 온 것으로 추정).

## 핵심 발견: "고아 페이지(orphan page)" 70개

아래 70개는 `lib/faqData.ts`에 존재하므로:
- 개별 URL `/abortion/faq/{slug}` 상세 페이지가 **정상 생성됨**
- `app/sitemap.ts`가 `ALL_FAQS`를 그대로 사용하므로 **sitemap.xml에 포함되어 검색엔진에 제출됨**

하지만 `/abortion/faq` 목록 페이지(`FAQClient.tsx`)에는 노출되지 않아 **사이트 내부 탐색으로는 도달할 수 없는 "고아 페이지"** 상태입니다. 검색엔진이 sitemap을 통해 색인할 수는 있으나, 사용자가 사이트 내에서 클릭으로 찾아갈 수 없고 내부 링크 점수(link equity)도 받지 못합니다.

## 70개 전체 목록 (slug / URL / 목록 누락 여부 / sitemap 포함 여부 / 중복 여부)

모든 항목: **목록 누락 여부 = 예(목록에 없음)**, **sitemap 포함 여부 = 예(포함됨)**. 아래는 slug·URL·중복 여부만 표기합니다.

| slug | URL | 중복 여부 |
|---|---|---|
| privacy-card-history | /abortion/faq/privacy-card-history | 단독 |
| surgery-cost-transparent | /abortion/faq/surgery-cost-transparent | 단독 |
| surgery-cost-early-benefit | /abortion/faq/surgery-cost-early-benefit | 단독 |
| surgery-cost-sunday-same | /abortion/faq/surgery-cost-sunday-same | 단독 |
| surgery-cost-phone-confirm | /abortion/faq/surgery-cost-phone-confirm | 단독 |
| surgery-cost-compare | /abortion/faq/surgery-cost-compare | 단독 |
| surgery-cost-all-included | /abortion/faq/surgery-cost-all-included | 단독 |
| food-after-surgery | /abortion/faq/food-after-surgery | 단독 |
| work-next-day | /abortion/faq/work-next-day | 단독 |
| tampon-after | /abortion/faq/tampon-after | menstrual-cup-after와 유사 주제(중복 아님, 탐폰 vs 생리컵 별개 질문) |
| blood-clot-after | /abortion/faq/blood-clot-after | 단독 (일반 FAQ 대표 문항, 중복 감사 보고서 그룹 E 참고) |
| er-symptoms | /abortion/faq/er-symptoms | 단독 |
| company-checkup | /abortion/faq/company-checkup | 단독 (Health Hub `q-1780028758191`과 A급 중복 — `faq-duplicate-audit.md` 그룹 G 참고) |
| fertility-confirm | /abortion/faq/fertility-confirm | 단독 |
| morning-pill-alone | /abortion/faq/morning-pill-alone | 단독(주제: 사후피임약) |
| morning-pill-breastfeeding | /abortion/faq/morning-pill-breastfeeding | morning-pill-with-regular-pill과 강한 유사(B) — 통합 검토 후보 |
| morning-pill-with-regular-pill | /abortion/faq/morning-pill-with-regular-pill | morning-pill-breastfeeding과 강한 유사(B) — 통합 검토 후보 |
| implant-contraceptive | /abortion/faq/implant-contraceptive | 단독 |
| condom-failure-rate | /abortion/faq/condom-failure-rate | 단독 |
| safe-period | /abortion/faq/safe-period | 단독 |
| natural-family-planning | /abortion/faq/natural-family-planning | 단독 |
| frequent-urination-pregnant | /abortion/faq/frequent-urination-pregnant | 단독 |
| pregnancy-headache | /abortion/faq/pregnancy-headache | 단독 |
| pregnancy-back-pain | /abortion/faq/pregnancy-back-pain | 단독 |
| pregnancy-food-craving | /abortion/faq/pregnancy-food-craving | 단독 |
| minor-abortion-parents | /abortion/faq/minor-abortion-parents | 단독 (중복 감사 그룹 I 인접) |
| teen-abortion-cost | /abortion/faq/teen-abortion-cost | 단독 |
| teen-go-alone | /abortion/faq/teen-go-alone | 단독 |
| teen-boyfriend-older | /abortion/faq/teen-boyfriend-older | 단독 |
| school-absent-abortion | /abortion/faq/school-absent-abortion | 단독 |
| teen-scared-hospital | /abortion/faq/teen-scared-hospital | 단독 |
| seocho-abortion-clinic | /abortion/faq/seocho-abortion-clinic | 지역별 템플릿(서초) — 아래 8개와 문형 동일, 중복 아닌 지역 타겟팅 콘텐츠 |
| mapo-abortion-clinic | /abortion/faq/mapo-abortion-clinic | 지역별 템플릿(마포) |
| yeongdeungpo-abortion | /abortion/faq/yeongdeungpo-abortion | 지역별 템플릿(영등포) |
| guro-abortion-clinic | /abortion/faq/guro-abortion-clinic | 지역별 템플릿(구로) |
| seongnam-abortion | /abortion/faq/seongnam-abortion | 지역별 템플릿(성남) |
| uijeongbu-abortion | /abortion/faq/uijeongbu-abortion | 지역별 템플릿(의정부) |
| hanam-abortion | /abortion/faq/hanam-abortion | 지역별 템플릿(하남·미사) |
| ilsan-abortion | /abortion/faq/ilsan-abortion | 지역별 템플릿(일산) |
| nowon-abortion | /abortion/faq/nowon-abortion | 지역별 템플릿(노원·도봉) |
| pregnant-unmarried | /abortion/faq/pregnant-unmarried | 단독(감정형) |
| pregnant-affair | /abortion/faq/pregnant-affair | 단독(감정형) |
| pregnant-one-night | /abortion/faq/pregnant-one-night | 단독(감정형) |
| pregnant-no-money | /abortion/faq/pregnant-no-money | 단독(감정형) |
| abortion-regret | /abortion/faq/abortion-regret | 단독(감정형) |
| partner-pressure-abortion | /abortion/faq/partner-pressure-abortion | 단독(감정형) |
| hospital-review-trust | /abortion/faq/hospital-review-trust | 단독 |
| suction-or-medical | /abortion/faq/suction-or-medical | 단독 (약물중절 언급 포함 — `medical-legal-conflict-audit.md` 참고) |
| general-anesthesia-vs-sedation | /abortion/faq/general-anesthesia-vs-sedation | 단독 |
| holiday-clinic | /abortion/faq/holiday-clinic | 단독 |
| weekend-reservation | /abortion/faq/weekend-reservation | 단독 |
| period-change-after | /abortion/faq/period-change-after | 단독 |
| sex-drive-after | /abortion/faq/sex-drive-after | uterine-contraction-after와 약한 유사(중복 아님) |
| scar-uterus-after | /abortion/faq/scar-uterus-after | 단독 |
| menstrual-cup-after | /abortion/faq/menstrual-cup-after | tampon-after와 유사 주제(중복 아님) |
| abortion-history-korea | /abortion/faq/abortion-history-korea | 단독 |
| abortion-abroad | /abortion/faq/abortion-abroad | 단독 |
| welfare-center-help | /abortion/faq/welfare-center-help | 단독 |
| medical-record-delete | /abortion/faq/medical-record-delete | privacy-medical-law와 약한 유사(중복 아님, 삭제 vs 공개 별개 질문) |
| privacy-medical-law | /abortion/faq/privacy-medical-law | medical-record-delete와 약한 유사(중복 아님) |
| hcg-level-abortion | /abortion/faq/hcg-level-abortion | 단독 |
| uterine-contraction-after | /abortion/faq/uterine-contraction-after | sex-drive-after와 약한 유사(중복 아님) |
| cervical-dilation | /abortion/faq/cervical-dilation | 단독 |
| retained-tissue | /abortion/faq/retained-tissue | uterine-perforation-risk와 약한 유사(둘 다 합병증 주제지만 별개 질문) |
| anesthesia-fasting-why | /abortion/faq/anesthesia-fasting-why | 단독 (금식 시간 관련 — `medical-legal-conflict-audit.md` 항목 7 참고) |
| uterine-perforation-risk | /abortion/faq/uterine-perforation-risk | retained-tissue와 약한 유사(중복 아님) |
| infection-signs | /abortion/faq/infection-signs | 단독 |
| prostaglandin-use | /abortion/faq/prostaglandin-use | 단독 (약물중절 성분 — `medical-legal-conflict-audit.md` 참고) |
| ovulation-after-abortion | /abortion/faq/ovulation-after-abortion | 단독 |
| rh-blood-type | /abortion/faq/rh-blood-type | 단독 |

## 참고: FAQClient에만 있고 ALL_FAQS에는 없는 36개 (반대 방향 차이)

이 36개는 `/abortion/faq` 목록에는 보이지만, `lib/faqData.ts`에 대응 항목이 없어 **개별 상세 페이지(`/abortion/faq/{slug}`)가 존재하지 않고 sitemap에도 개별 URL로 포함되지 않습니다.** (목록 카드에서 상세 페이지로 연결되는 링크 자체가 없는 구조이므로 즉각적인 깨진 링크는 아니나, 구조적으로 두 데이터셋이 분리되어 있다는 동일한 문제의 반대쪽 증상입니다.)

대표 항목: "다태아 임신일 경우 비용이 추가되나요?", "현금으로 결제하면 할인이 되나요?", "임신 5주/6주/7주/9주/11주 낙태수술 비용" 관련 주수별 질문 다수, "수술 동의서에는 어떤 내용이 포함되나요?" 등 — 전체 목록은 이번 조사 과정에서 별도 생성한 원시 데이터에 기록되어 있으며, 요청 시 추가 제공 가능합니다.

## 확인 필요 (36개, 이번 작업에서 보류)

FAQClient 전용 36개를 ALL_FAQS의 기존 70개 중 일부와 "확실한 유사 중복"으로 재연결할 수 있는지 검토했으나, 유사도 점수가 낮고(대부분 0.5 미만) 질문 의도가 다른 경우가 많아 **확실하다고 판단할 수 있는 자동 매칭은 없었습니다.** 예: "다태아 임신일 경우 비용이 추가되나요?"는 ALL_FAQS 어떤 항목과도 명확히 대응되지 않음. 임의로 연결하거나 새 상세 페이지를 만들지 않았으며, 실제로 동일한 질문이 존재하는지는 병원 측의 콘텐츠 확인이 필요합니다.

## 권고 (이번 작업에서는 실행하지 않음)

1. 두 데이터셋(`lib/faqData.ts`의 `ALL_FAQS`, `FAQClient.tsx`의 `FAQS`)을 하나로 통합하는 것이 근본 해결책이나, 이는 대규모 리팩토링에 해당하여 이번 작업 범위 밖입니다.
2. 지역별 템플릿 9개(서초/마포/영등포/구로/성남/의정부/하남/일산/노원)는 중복이 아니라 로컬 SEO 목적의 정상 콘텐츠로 판단되므로 유지 권장.
