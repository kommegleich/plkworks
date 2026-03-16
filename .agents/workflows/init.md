---
description: Initialize and orient the plkworks portfolio project for development
---

# /init — plkworks Project Initialization

## Project Overview
- **Project**: PLK Works — UX/UI Designer Portfolio
- **Framework**: React + Vite
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Deploy**: GitHub Pages (`gh-pages`)
- **Repo**: https://github.com/kommegleich/plkworks.git
- **Live URL**: https://kommegleich.github.io/plkworks/

## Project Structure
```
src/
  pages/
    Home.jsx          # 메인 홈 페이지 (히어로, 프로젝트 갤러리, 소개)
    Project01.jsx     # ERP 프로젝트
    Project02.jsx     # 프로젝트 02
    Project03.jsx     # 선물하기 프로젝트
    Project04.jsx     # 프로젝트 04 (스크롤 리빌 애니메이션)
    Project05.jsx     # 프로젝트 05
    Project06.jsx     # 프로젝트 06
  components/
    Navbar.jsx        # 네비게이션 바
    HeroSection.jsx   # 히어로 섹션
    ProjectGallery.jsx # 프로젝트 갤러리 그리드
    AboutSection.jsx  # About 섹션
    ProjectLayout.jsx # 공통 프로젝트 페이지 레이아웃
    Footer.jsx        # 푸터
    ScrollToTop.jsx   # 라우트 변경 시 스크롤 최상단 이동
  images/             # 이미지 에셋 (webp, png 등)
  assets/             # 기타 에셋
```

## Step 1: Install dependencies
```bash
npm install
```

## Step 2: Start local dev server
// turbo
```bash
npm run dev
```

## Step 3: Check git remote connection
// turbo
```bash
git remote -v
```

## Step 4: Commit and push changes to GitHub
```bash
git add -A && git commit -m "<커밋 메시지>" && git push origin main
```

## Step 5: Deploy to GitHub Pages
```bash
npm run deploy
```

## Key Design Decisions
- **다크 테마**: 배경색 `#0D0D0D`, 텍스트 `#F5F5F5`
- **모바일 터치**: 호버 대신 항상 표시되는 UI (모바일 최적화 완료)
- **애니메이션**: Framer Motion으로 스크롤 리빌 및 인트로 애니메이션 구현
- **폰트**: 프로젝트 내 커스텀 폰트 사용
