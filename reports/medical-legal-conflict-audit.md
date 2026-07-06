# 의료·법률 내용 충돌 감사 보고서

작성일: 2026-07-06
범위: 조사·기록만 포함. 이번 작업에서 의료/법률 문장을 임의로 새로 작성하거나 수정하지 않았습니다. 가격·진료시간은 사용자가 이미 확정한 공식 기준이므로 별도로 코드에서 직접 수정을 완료했습니다(본 보고서 대상 아님).

## 최상위 경고: 사이트 자체 정책(`config/aiContentPolicy.ts`)과 실제 게시 콘텐츠의 충돌

`config/aiContentPolicy.ts`에는 병원이 실제로 제공하지 않는 서비스와 금지 문구가 명시되어 있으나, 다수의 페이지가 이를 위반하고 있습니다.

- `config/aiContentPolicy.ts:12` — `hasFemaleDoctors: false`
- `config/aiContentPolicy.ts:13` — `performsMedicationAbortion: false`
- `config/aiContentPolicy.ts:82-93` — `medicationAbortionPolicy.notPerformedNotice`: "연세365산부인과의원에서는 약물중절을 시행하지 않습니다."
- `config/aiContentPolicy.ts:62-79` — `prohibitedClinicClaims`: '여의사가 진료'/'여의사 상담'(CLINIC-005), '일요일 수술'(CLINIC-007), '공휴일 수술'(CLINIC-008), '24시간 진료'(CLINIC-009), '입원 가능'(CLINIC-010), '당일 수술 보장'(CLINIC-011), '보험 적용'(CLINIC-016), '수술 성공률'(CLINIC-018)

**확인 필요**: 아래 항목들은 정책과 실제 게시 콘텐츠가 정면으로 충돌하며, 어느 쪽이 사실인지는 병원 측 확인이 필요합니다. 이번 작업에서는 임의로 어느 한쪽에 맞춰 콘텐츠를 재작성하지 않았습니다.

1. **약물중절 제공 여부** — 정책은 "시행하지 않음"이라 명시하나 다수 페이지가 약물중절을 상세 안내:
   - `lib/faqData.ts:155,157,158,261`
   - `lib/healthHub.ts:377,454-455,493-495,1105` (일부 가격 표현은 이번 작업에서 "진료 후 안내"로 수정했으나, 약물중절을 제공한다는 서술 자체는 유지됨 — 확인 필요)
   - `lib/columns.ts:1908,1945,1959,1991` (가격은 "진료 후 안내"로 수정 완료, 제공 여부 서술은 확인 필요)
   - `app/blog/abortion-info/page.tsx:374,382`
   - `app/health-magazine/quiz/QuizClient.tsx:449`

2. **여의사 상담/진료** — `app/blog/abortion-surgery/page.tsx:166`가 배지 문구로 정확히 금지된 "여의사 상담"을 사용. `app/abortion/hospital/HospitalClient.tsx:368,379`는 반대로 "여의사 진료 운영하지 않음"이라 명시 — 같은 사이트 내 정반대 서술. **확인 필요.**

3. **일요일/공휴일 수술** — `components/Booking.tsx:82,170`, `app/about/hours/page.tsx:16,76,113-114`, `app/about/page.tsx:92,141,169`, `lib/faqData.ts:35,40,48,263,264`, `lib/schemas.ts:39`, `lib/standaloneFaqs.ts:147,822`가 핵심 홍보 문구로 반복 사용하는 반면, 정책 파일은 이를 금지 문구로 지정. `lib/healthHub.ts:1040`은 자체적으로 "응급상황이나 특별한 경우에만 제한적으로 가능"이라 다르게 서술. **확인 필요** — 사용자 제공 공식 진료시간에는 "일요일 수술 가능"이 포함되어 있어 정책 파일이 구버전일 가능성이 있음.

4. **당일수술 보장** — `lib/columns.ts:1781,1412`, `components/Abortion.tsx:720` 등 다수가 사실상 보장처럼 서술하는 반면, `lib/healthHub.ts:442,520,584-586`은 "당일 시행이 어려움" 또는 "권장되지 않음"이라 반대로 서술. **확인 필요.**

---

## 1. 숙려기간

- `lib/healthHub.ts:442` — "임신중절수술은 당일 시행이 어려우며, 모자보건법에 따른 숙려기간(24시간)과 사전 검사가 필요합니다."
- 이 문구는 코드베이스 전체에서 유일하게 24시간 숙려기간을 언급하며, 나머지 거의 모든 문서(예: `lib/columns.ts:1781,1412`, `app/abortion/legal/LegalClient.tsx:55`)는 당일 상담·수술이 가능하다고 서술함.
- **확인 필요**: 실제 한국 모자보건법에는 낙태에 대한 별도의 법정 숙려기간 규정이 없는 것으로 알려져 있어, 이 문구가 사실 오류일 가능성이 높음. 병원 확인 후 정정 권장.

## 2. 미성년자 동의

- 파일별로 확신도가 다름:
  - 무조건적 요구(예외 없음): `app/blog/abortion-info/page.tsx:454`, `app/blog/abortion-price/page.tsx:506`, `app/blog/abortion-legal/page.tsx:531`
  - 예외 가능 시사: `app/blog/abortion-surgery/page.tsx:314,520`, `app/blog/abortion-guardian/page.tsx:72,142`, `lib/faqData.ts:119,226`
- **확인 필요**: 동일 법적 요건에 대해 서로 다른 확신도로 서술 — 병원의 실제 운영 기준 확인 후 통일 권장.

## 3. 임신중절 가능 주수

- 대다수 페이지: 14주 이내 본인 동의, 14~24주는 모자보건법 제14조 사유 시 가능 (`components/Abortion.tsx:664-666`, `app/abortion/legal/LegalClient.tsx:51,158,187,389` 등 다수)
- 충돌:
  - `lib/healthHub.ts:389-391` — "24주 이전이라도... 사회경제적 사유"를 법적 근거로 제시(법 제14조의 5개 열거 사유에 없는 개념이나, `app/abortion/legal/LegalClient.tsx:158,206`도 유사 표현 사용 — 사이트 내에서도 통일되지 않음)
  - `lib/healthHub.ts:1227` — 수술 방법 전환 기준을 "10주"로 서술 (다른 대다수 페이지는 "8주" 기준: `app/abortion/method/MethodClient.tsx:141,163-164`, `lib/faqData.ts:145`)
  - `lib/healthHub.ts:611` — "8주 초과 시 합법적 사유 필요"라 서술(다른 페이지의 14주 기준과 불일치)
- **확인 필요**: 8주 vs 10주 수술방법 전환 기준, 사회경제적 사유의 법적 근거 여부.

## 4. 약물중절 가능 여부

- 최상위 경고 섹션 참조. **확인 필요.**

## 5. 보험 적용

- 대체로 일관: 비급여 원칙, 모자보건법 제14조 특수사유 시 일부 가능 (`app/blog/abortion-insurance/page.tsx:32,89-90,97,120`, `app/abortion/cost/CostClient.tsx:69,457,460`, `app/abortion/info/InfoClient.tsx:62,295-306,636`)
- 참고: "보험 적용"이라는 표현 자체가 `config/aiContentPolicy.ts:76`의 금지 문구 목록(CLINIC-016)에 있으나, 실제 내용은 "적용 안 됨"을 설명하는 맥락이라 취지상 문제는 아닐 수 있음. **확인 필요**: 금지어 검증 로직이 부정 문맥까지 구분하는지.

## 6. 당일수술 가능 여부

- 최상위 경고 섹션 참조. **확인 필요.**

## 7. 금식 시간

- 충돌하는 4가지 서술:
  - 6시간(물 포함 완전 금지): `app/blog/abortion-fasting/page.tsx:198,233` (전용 페이지)
  - 6~8시간(고형식) + 2~3시간(물): `lib/standaloneFaqs.ts:265-268`
  - 8~12시간(일반): `lib/healthHub.ts:714-716`
  - 물은 2시간 전까지 허용: `lib/healthHub.ts:676`
- **확인 필요**: 병원의 실제 금식 프로토콜 확인 후 전용 안내 페이지(`/blog/abortion-fasting`) 기준으로 통일 권장.

## 8. 보호자 동반

- 대다수: 성인은 동반자 없이 방문/귀가 가능 (`app/abortion/info/InfoClient.tsx:100,165`, `lib/faqData.ts:118,249`, `app/blog/abortion-alone/page.tsx:82,86,124,244`)
- 충돌: `lib/healthHub.ts:949` — "보호자 동반이 필요"라 서술
- **확인 필요**: 마취 방식(수면마취 vs 국소마취)에 따라 기준이 다를 가능성 — 조건부 서술로 통일 권장.

## 9. 회복 기간

- 8주 이내 기준으로도 서술이 제각각: 1~2일(`AbortionClient.tsx:377`), 2~3일(`lib/columns.ts:970`), 1~3일(`lib/columns.ts:1378`)
- `app/blog/abortion-cost/page.tsx:403` — 같은 표 안에서 "1~2주"와 "3~7일"이 주수 구분 없이 병기되어 자체 모순
- **확인 필요**: 표준 회복 기간 재확인 후 통일 권장.

## 10. 성관계 재개 시점

- 최소 2주(`lib/columns.ts:432`), 2~4주(`lib/faqData.ts:82`, `app/blog/abortion-after/page.tsx:278`), 4주 이상(약물, `lib/columns.ts:1920`)
- `app/abortion/surgery/SurgeryClient.tsx:70`은 조건 없이 "2주" 고정, `app/blog/abortion-after/page.tsx:278`는 "출혈·통증 소실 확인 후" 조건부 2~4주
- **확인 필요**: 조건부 서술(의료진 확인 후)로 통일 권장.

## 11. 운동과 목욕 제한

- 목욕/사우나 금지 기간: 2주(`AbortionClient.tsx:459`, `RecoveryClient.tsx:165,218,311`, `abortion-after/page.tsx:251,331`) vs 1주(`lib/columns.ts:1588,1621`, 다수 블로그 페이지)
- `lib/columns.ts:392` vs `:1621` — 같은 파일 내에서도 2주/1주 불일치
- **확인 필요**: 표준 기간 재확인 후 통일 권장.

## 12. 합병증 수치

- `lib/healthHub.ts:1092` — "합병증 발생률 1% 미만", "90% 이상 정상 임신 가능" (근거 불명)
- `lib/faqData.ts:261` — "흡입술 성공률 거의 100%"(광고성 금지 문구 "100%" 사용, `config/aiContentPolicy.ts:40` ADS-005 위반), "약물중절 불완전 유산 확률 2~5%"
- **확인 필요**: 검증 가능한 통계 출처 없이 게시된 수치 — 근거 확보 또는 삭제 검토 권장. 이번 작업에서는 임의로 수정하지 않음.

## 13. 병원에서 실제 제공하지 않는 의료서비스로 의심되는 서술 (종합)

1. 약물중절/미프진 처방 제공 서술 (다수 페이지) — 정책과 충돌
2. "여의사 상담" 배지 (`app/blog/abortion-surgery/page.tsx:166`) — 정책과 충돌
3. 일요일/공휴일 수술을 핵심 홍보 문구로 반복 — 정책 금지 문구지만 사용자 확정 진료시간과는 일치. **확인 필요**: 정책 파일이 최신 상태인지.
4. 당일수술 보장 표현 — 일부 Health Hub 아티클과 상충
5. "성공률 100%", "수술 성공률" 표현 — 광고성 금지 문구 위반 의심

---

## 요약 표

| 항목 | 충돌 값 | 대표 파일 |
|---|---|---|
| 숙려기간 | 없음(대다수) vs 24시간 의무(`healthHub.ts:442`) | 확인 필요 |
| 수술방법 전환 주수 | 8주 vs 10주 | `MethodClient.tsx:141` vs `healthHub.ts:1227` |
| 합법 주수 컷오프 | 14주(대다수) vs 8주(`healthHub.ts:611`) | 확인 필요 |
| 금식 시간 | 6시간(물 포함 금지) vs 8~12시간 vs 물 2시간 전 허용 | `abortion-fasting/page.tsx` vs `healthHub.ts:714,676` |
| 보호자 동반(성인) | 불필요(대다수) vs 필요(`healthHub.ts:949`) | 확인 필요 |
| 회복 기간(8주 이내) | 1~2일/2~3일/1~3일 | 여러 파일 |
| 성관계 재개 | 최소 2주/2~4주/4주 이상(약물) | 여러 파일 |
| 목욕·사우나 금지 | 1주 vs 2주 | `lib/columns.ts` 내부 불일치 포함 |
| 약물중절 제공 여부 | 정책상 미제공 vs 다수 페이지 상세 안내 | 최상위 경고 참조 |
| 여의사 상담 | 미운영(정책+병원안내) vs 배지 문구 | `HospitalClient.tsx:379` vs `abortion-surgery/page.tsx:166` |
| 일요일/공휴일 수술 | 정책 금지 vs 확정된 공식 진료시간과 다수 페이지 | 확인 필요(정책 최신성) |
| 당일수술 가능 | 대다수 가능 vs 일부 healthHub 불가/비권장 | 확인 필요 |

이번 작업에서는 위 항목에 대한 문장을 임의로 새로 작성하거나 어느 한쪽으로 통일하지 않았습니다. 병원 측 확인 후 별도 작업으로 진행 권장합니다.
