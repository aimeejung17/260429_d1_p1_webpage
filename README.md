# DX Soultion Studio (Single Page)

AI 에이전트 기반 앱 개발 에이전시 `DX Soultion Studio` 소개용 **싱글 페이지 랜딩**입니다. (바닐라 `HTML/CSS/JS`만 사용)

## 포함된 기능

- `라이트/다크` 테마 토글 (헤더 버튼, `localStorage` 저장)
- `다국어` 보기: 한국어/영어/일본어 (`localStorage` 저장)
- 화면 하단 **고객 문의 폼**
  - 입력값을 조합해 `nocodedx.ai@gmail.com` 으로 `mailto:` 전송
  - 폼 필드: 결과물(Select) / 현재 상황 / 일정 / 이름 / 이메일 / 문의사항(메시지)
- 스크롤 이동(`data-scroll`), 섹션 reveal 애니메이션, FAQ 아코디언, 모바일 메뉴 토글

## 파일 구조

- `index.html`: 페이지 마크업(섹션/폼/토글 UI 포함)
- `style.css`: Claude 계열 다크 무드 + 라이트 테마 스타일(테마 변수 기반)
- `script.js`: 토글/번역/FAQ/문의 `mailto:` 구성 로직

## 로컬에서 실행(5151 포트)

터미널에서 프로젝트 폴더로 이동 후 아래 중 하나를 실행하면 됩니다.

```bash
python -m http.server 5151 --bind 127.0.0.1
```

브라우저에서:

`http://127.0.0.1:5151/`

## 커스텀 포인트

- 문의 받는 이메일:
  - `script.js`의 `CONTACT_TO` 값을 수정하면 됩니다.

## 비고

- 문의 전송은 **서버 전송 없이 `mailto:`로 동작**합니다. (사용자 메일 앱/브라우저 환경에 따라 동작 방식이 달라질 수 있어요.)

