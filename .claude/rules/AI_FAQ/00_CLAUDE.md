# 연세365 Health Hub Claude Code 작업 규칙

## 최우선
- 사용자는 초보자다. 파일명과 눌러야 할 번호를 정확히 말한다.
- 전체 저장소를 무조건 읽지 않는다.
- 먼저 AI_FAQ_MD 폴더의 MD를 읽고, 관련 소스만 검색한다.
- 기존 Health Hub UI, URL, 데이터 타입을 임의로 바꾸지 않는다.
- 기존 A 패턴의 대표 이미지와 상단 구조는 유지한다.
- B~E 패턴은 sections 구성만 다르게 생성한다.

## Claude Code 승인창
- 파일 읽기, 검색, git status: Yes
- 프로젝트 폴더 읽기 허용: allow reading 선택
- 파일 수정: 요청 범위 안이면 Yes
- commit, push, deploy, npm install, env 수정: No

## 금지
- git reset --hard
- 강제 push
- Vercel 배포
- 환경변수 수정
- 패키지 설치
- 기존 URL 변경
- lib/healthHub.ts 대규모 리팩토링
