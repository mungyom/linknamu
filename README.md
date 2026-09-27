# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스입니다.

## 시작하기

```bash
npm install
cp .env.example .env.local   # MONGODB_URI 입력
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 수정할 곳

- 프로필과 링크 목록: `src/data/profile.ts`
- 프로필 사진: `public/`에 이미지를 넣고 `profile.image`에 경로(예: `/me.jpg`)를 적기

## 구조

- `src/components/` — Profile, LinkCard, LinkList, ThemeToggle
- `src/app/api/clicks` — 클릭 수 조회(GET)·기록(POST), MongoDB `clicks` 컬렉션 사용
- `MONGODB_URI`가 없으면 클릭 수는 0으로 표시되고 기록되지 않습니다.
