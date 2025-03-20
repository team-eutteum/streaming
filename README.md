# RIIZESTREAMING

## URL

- 운영 : [https://riizestreaming.com/](https://riizestreaming.com/)

## Stacks

- next 15
- react 19
- typescript 5
- tailwindcss 4

## Build Scripts

### Local

개발 모드로 실행된다.

```sh
npm run dev
```

[http://localhost:3000](http://localhost:3000)로 브라우저 접속할 수 있다.

#### Build

프로덕션(production) 모드로 빌드가 진행되나, `.env` 파일에 정의된 설정값에 따라 `process.env.APP_ENV` 환경 변수는 'development'와 'production'으로 구분된다.

```sh
# dev build
npm run build:dev

# production build
npm run build:prod
```

## File Structure

```text
app/
└───components/ <<-- 컴포넌트
│   └─── Button/ <<-- 유사한 컴포넌트
│   │   └─── Button.tsx
│   └─── index.ts
└───hooks/ <<-- custom hooks 파일을 저장
│   └─── useXXX.tsx
└───lib/
│   └─── constants/
│   │   └─── code.constant.ts <<-- 코드 정의
│   │   └─── index.ts
│   └─── helpers/ <<-- 유틸성 파일들 저장
│   │   └─── code.helper.ts
│   │   └─── format.helper.ts
└───services/ <<-- api 함수 정의
│   └─── mypage.service.ts
│   └─── index.ts
└───stores/ <<-- global 상태 정의
│   └─── mypage.store.tsx
└───types/ <<-- 타입 정의
│   └─── common.type.ts <<-- 공통적으로 사용되는 타입 정의
└───(page)/
│   └─── (subpages)/ <<-- 경로 그룹 (동일한 Layout 그룹화)
│   │   └─── _components/ <<-- 페이지 컴포넌트
│   │   │   └─── CustomComponent.tsx
│   │   └─── membership/
│   │   │   └─── page.tsx
│   │   └─── layout.tsx <<-- 서브 페이지 공통 레이아웃
│   └─── layout.tsx <<-- 페이지 공통 레이아웃
└─── globals.css <<-- 글로벌 스타일
└─── layout.tsx <<-- 공통 레이아웃 (html, body 등)
└─── not-found.tsx <<-- 404 페이지
public/ <<-- 정적 폰트, 이미지
└─── fonts/
└─── static/
│   └─── images/
└─── tailwind.config.js <<-- tailwindcss 커스텀 스타일
```