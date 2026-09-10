# Claude Code 첫 작업 명령

아래를 Claude Code에 그대로 붙여넣는다.

```text
연세365 Health Hub AI FAQ A~E 패턴 작업을 시작합니다.

먼저 프로젝트 루트의 AI_FAQ_MD 폴더 안의 모든 MD 파일을 읽으세요.
그 다음 전체 저장소를 읽지 말고 아래 관련 파일만 찾으세요.

- lib/healthHub.ts
- Health Hub 생성 코드
- Slack 질문 접수 코드
- Slack 승인 처리 코드
- Health Hub 상세 페이지 렌더링 코드

작업 목표는 다음입니다.
1. 기존 A 패턴 상단 구조와 카테고리별 대표 이미지는 유지
2. B~E는 sections 구성만 다르게 생성
3. 원본 제목/AI 추천 제목 선택 후 A~E 패턴 선택 가능
4. AI 생성 콘텐츠 안내는 FAQ 바로 아래 배치
5. 모바일 1열, 표 금지, 가로 스크롤 금지
6. commit, push, 배포, npm install, 환경변수 수정 금지

먼저 수정 예정 파일 목록만 보고하세요.
```
