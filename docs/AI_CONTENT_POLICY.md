# AI 콘텐츠 정책 운영 가이드

## 실행 정책 파일 위치

```
config/aiContentPolicy.ts
```

모든 병원 정보, 가격, 금지표현, 안내문의 단일 기준입니다.  
이 파일만 수정하면 AI 프롬프트와 validator에 동시에 반영됩니다.

---

## 주요 변경 방법

### 병원명 변경
`config/aiContentPolicy.ts` → `clinic.officialName` 값을 교체합니다.  
비공식 이름은 `clinic.unofficialNames` 배열에 추가합니다 (자동 교정 대상).

### 가격 변경
`config/aiContentPolicy.ts` → `abortionPricing.table` 배열에서 해당 주수의 `priceKRW`와 `label`을 수정합니다.  
삭제된 가격 표현은 `invalidPhrases` 배열에 추가해 기존 잘못된 표현이 생성되지 않도록 합니다.

### 금지표현 추가·삭제
`prohibitedAdvertisingTerms` 배열에서:
- 추가: 새 객체 `{ id: 'ADS-024', term: '새 표현', enabled: true }` 삽입
- 삭제 없이 비활성화: `enabled: false` 로 변경

### 확인되지 않은 병원 운영정보 추가·삭제
`prohibitedClinicClaims` 배열에서 동일하게 `enabled: false`로 비활성화 가능.

### block vs warn 차이
- **block**: 이 위반이 하나라도 있으면 Slack 승인 버튼 제거 또는 게시 차단.
- **warn**: Slack에 경고로 표시되지만 운영자가 판단해 게시 가능.
- `prohibitedAdvertisingTerms`는 **제목 필드에서 block**, **본문 필드에서 warn**으로 자동 적용됩니다 (`lib/contentValidator.ts`의 `context` 파라미터로 제어).

### 여의사 여부 변경
`clinic.hasFemaleDoctors: false` → `true` 로 변경하면 금지표현에서 여의사 관련 항목을 `enabled: false`로 함께 해제해야 합니다.

### 약물중절 시행 여부 변경
`clinic.performsMedicationAbortion: false` → `true` 로 변경하면 `medicationAbortionPolicy` 전체를 재검토해야 합니다.

### AI 안내문 변경
`fixedNotices.aiContentNotice.body` 또는 `fixedNotices.checkList.items` 배열을 직접 수정합니다.  
수정 즉시 모든 Health Hub 상세 페이지에 반영됩니다 (빌드 후).

### policyVersion과 updatedAt 변경
정책을 변경한 후 반드시 두 값을 최신 날짜와 버전으로 업데이트하세요.

```
policyVersion: '1.0.0' → '1.1.0'
updatedAt: '2026-06-26' → 변경일
```

---

## Slack 승인 흐름

1. 사용자가 `/health-hub/ask`에서 질문 제출
2. 서버에서 질문 필터링 → Claude Haiku로 `originalTitle`·`suggestedTitle` 생성
3. 두 제목에 정책 검사 실행
4. Slack에 세 버튼으로 알림 발송:
   - **📋 원본 제목으로 게시**: 원본 제목에 위반이 없을 때만 표시
   - **✨ AI 추천 제목으로 게시**: AI 추천 제목에 위반이 없을 때만 표시
   - **❌ 게시 거절**: 항상 표시
5. 운영자가 버튼 클릭 → approve 서버에서 재검사 → Claude Sonnet으로 본문 생성 → 최종 검사 → GitHub push

두 제목 모두 위반이면 승인 버튼이 표시되지 않고 거절만 가능합니다.

---

## 검증 3단계

1. **submit 시**: 두 제목 정책 검사 (Slack 버튼 구성에 반영)
2. **approve callback 시**: 선택된 제목 재검사 (URL 조작 방어)
3. **최종 게시 직전**: 전체 본문(제목·설명·sections·faq) 검사

---

## 정책 변경 후 실행할 검증 명령

```bash
# TypeScript 타입 검사
npx tsc --noEmit

# 정책 validator 단위 테스트
npx tsx scripts/test-validator.ts

# Next.js 빌드
npm run build
```

---

## 주의사항

- 기존 게시글은 정책 변경만으로 자동 수정되지 않습니다. 기존 글의 내용은 `lib/healthHub.ts`에 그대로 유지됩니다.
- 기존 글에서 새 정책 위반 항목을 발견하면 수동으로 해당 글을 수정해야 합니다.
- `config/aiContentPolicy.ts`는 서버 컴포넌트와 API 라우트에서만 import하세요. 클라이언트 컴포넌트에서 import하면 번들에 포함됩니다.

---

## 정책 변경 이력

| 날짜 | 버전 | 변경 내용 |
|------|------|----------|
| 2026-06-26 | 1.0.0 | 최초 작성. 단일 정책 파일 통합, validator 구축, Slack 3버튼 흐름, 원본/AI 추천 제목 분리 |
