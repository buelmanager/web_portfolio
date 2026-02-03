# 🏛️ onyx | 자산의 새로운 기준

> **초고액 자산가를 위한 프라이빗 뱅킹. 맞춤형 자산관리와 글로벌 투자 솔루션.**

---

## 📋 프로젝트 개요

**onyx Private Banking & Wealth Management**는 100억+ 자산가를 위한 프리미엄 프라이빗 뱅킹 웹사이트입니다.  
글로벌 네트워크와 전문가 팀이 제공하는 맞춤형 자산관리 서비스를 소개합니다.

- **프로젝트명**: onyx-private-banking
- **버전**: 1.0.0
- **타겟**: 초고액 자산가 (100억+ 자산)
- **핵심 가치**: 신뢰 · 프라이빗 · 자산증식

---

## 🎨 브랜드 아이덴티티

### 컬러 팔레트

| 색상 | HEX | 용도 |
|------|-----|------|
| **Background** | `#0F1B2E` | 메인 배경 (다크 네이비) |
| **Foreground** | `#F8F9FA` | 메인 텍스트 (밝은 화이트) |
| **Surface** | `#1A2942` | 카드/섹션 배경 |
| **Surface Light** | `#243A5E` | 호버 상태 배경 |
| **Border** | `#2E4A6F` | 테두리 색상 |
| **Primary** | `#C0C5CE` | 주요 강조 색상 (실버 그레이) |
| **Secondary** | `#D4AF37` | 골드 액센트 (프리미엄 강조) |
| **Accent** | `#B8956A` | 보조 골드 |
| **Text Secondary** | `#B0B8C8` | 보조 텍스트 |
| **Text Muted** | `#7A8499` | 비활성 텍스트 |

### 디자인 컨셉
- **프리미엄 다크 테마**: 고급스러운 다크 네이비 배경
- **골드 액센트**: 신뢰와 프리미엄을 상징하는 골드 컬러
- **글래스모피즘**: 반투명 블러 효과로 현대적인 느낌
- **그라데이션**: Primary → Secondary 그라데이션으로 시각적 깊이 표현

---

## 📐 페이지 구조

### 메인 페이지 섹션

1. **Preloader** 🔄
   - 브랜드 로고 애니메이션
   - 골드 그라데이션 스피너
   - 2초 후 페이드아웃

2. **Header** 🧭
   - 고정 네비게이션 바
   - 스크롤 진행률 표시 (ScrollProgress)
   - 투명 → 글래스 효과 전환

3. **Hero Section** 🎬
   - 풀스크린 배경 비디오 (Pexels 고품질 영상)
   - 타이틀: "자산의 새로운 기준 / 프라이빗 뱅킹"
   - TextReveal 애니메이션으로 텍스트 등장
   - MagneticButton 인터랙션 (마우스 추적 효과)
   - CTA 버튼: "서비스 알아보기" / "상담 예약"

4. **Features Section** ⭐
   - 8개 핵심 서비스 카드
   - 아이콘: Lucide React 아이콘 사용
   - 서비스 목록:
     - 맞춤형 포트폴리오
     - 글로벌 자산배분
     - 세무 최적화
     - 부동산 투자
     - 상속 설계
     - 전담 PB 배정
     - 대체투자 (PE, VC, 헤지펀드)
     - 보안 & 프라이버시
   - FadeInSection 애니메이션 (순차 등장)
   - Hover-lift 효과

5. **FAQ Section** ❓
   - 자주 묻는 질문
   - 아코디언 UI

6. **CTA Section** 📞
   - 최종 행동 유도
   - 상담 예약 버튼

7. **Footer** 📄
   - 회사 정보
   - 링크 모음
   - 저작권 정보

8. **FloatingButton** 💬
   - 우측 하단 고정 버튼
   - 빠른 상담 연결

---

## ✨ 애니메이션 & 인터랙션

### 주요 애니메이션 컴포넌트

| 컴포넌트 | 기술 | 효과 |
|---------|------|------|
| **MagneticButton** | GSAP | 마우스 위치 추적, 자석 효과 (elastic ease) |
| **SectionTransition** | GSAP + ScrollTrigger | 스크롤 시 섹션 페이드인 + Y축 이동 |
| **ScrollProgress** | React State | 상단 고정 프로그레스 바 (그라데이션) |
| **TextReveal** | GSAP | 텍스트 순차 등장 애니메이션 |
| **FadeInSection** | GSAP | 요소별 페이드인 (방향 설정 가능) |
| **Preloader** | CSS Transition | 로딩 스피너 + 페이드아웃 |

### 인터랙션 디테일
- **Hover-lift**: 카드 호버 시 Y축 -4px 이동 + 골드 그림자
- **Glass Effect**: 반투명 배경 + 12px 블러
- **Gold Glow**: 골드 컬러 박스 섀도우 (0 0 40px rgba(212, 175, 55, 0.2))
- **Smooth Scroll**: 부드러운 스크롤 동작
- **Custom Scrollbar**: 다크 테마 스크롤바 (8px 너비)

---

## 🛠️ 기술 스택

### 프레임워크 & 라이브러리
- **Next.js 16.1.6** - React 프레임워크
- **React 19.2.3** - UI 라이브러리
- **TypeScript 5** - 타입 안정성

### 스타일링
- **Tailwind CSS 4** - 유틸리티 CSS 프레임워크
- **CSS Variables** - 테마 색상 관리
- **PostCSS** - CSS 전처리

### 애니메이션
- **GSAP 3.14.2** - 고급 애니메이션 라이브러리
- **@gsap/react 2.1.2** - React 통합
- **ScrollTrigger** - 스크롤 기반 애니메이션

### UI 컴포넌트
- **Lucide React 0.563.0** - 아이콘 라이브러리
- **Swiper 12.1.0** - 터치 슬라이더 (갤러리용)

### 폰트
- **Geist Sans** - 메인 폰트
- **Geist Mono** - 모노스페이스 폰트

---

## 🚀 실행 방법

### 개발 서버 실행
```bash
npm run dev
```
→ http://localhost:3000 에서 확인

### 프로덕션 빌드
```bash
npm run build
npm run start
```

### 린트 검사
```bash
npm run lint
```

---

## 📦 프로젝트 구조

```
onyx/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (메타데이터)
│   │   ├── page.tsx            # 메인 페이지
│   │   └── globals.css         # 글로벌 스타일 (색상 변수)
│   └── components/
│       ├── sections/           # 페이지 섹션
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── Features.tsx
│       │   ├── FAQ.tsx
│       │   ├── CTA.tsx
│       │   └── Footer.tsx
│       ├── animations/         # 애니메이션 컴포넌트
│       │   ├── MagneticButton.tsx
│       │   ├── SectionTransition.tsx
│       │   ├── ScrollProgress.tsx
│       │   ├── TextReveal.tsx
│       │   └── FadeInSection.tsx
│       └── ui/                 # UI 컴포넌트
│           ├── Preloader.tsx
│           └── FloatingButton.tsx
├── package.json
└── c_readme.md                 # 이 문서
```

---

## 🎯 핵심 기능

### 1. 프리미엄 UX
- 풀스크린 비디오 배경
- 부드러운 GSAP 애니메이션
- 마그네틱 버튼 인터랙션
- 스크롤 진행률 표시

### 2. 반응형 디자인
- 모바일/태블릿/데스크톱 최적화
- Flexbox/Grid 레이아웃
- 터치 제스처 지원

### 3. 성능 최적화
- Next.js 16 최신 기능 활용
- 이미지/비디오 레이지 로딩
- CSS 변수로 테마 관리
- 컴포넌트 기반 구조

### 4. 접근성
- 시맨틱 HTML
- ARIA 레이블
- 키보드 네비게이션
- 고대비 색상 (WCAG 준수)

---

## 📝 메타데이터 (SEO)

- **Title**: onyx | 자산의 새로운 기준
- **Description**: 초고액 자산가를 위한 프라이빗 뱅킹. 맞춤형 자산관리와 글로벌 투자 솔루션.
- **Keywords**: onyx, 오닉스, 프라이빗뱅킹, 자산관리, wealth management, 투자
- **Language**: 한국어 (ko)
- **Open Graph**: 소셜 미디어 공유 최적화

---

## 🌟 특징 요약

✅ **프리미엄 다크 테마** - 고급스러운 네이비 + 골드 컬러  
✅ **풍부한 애니메이션** - GSAP 기반 인터랙티브 경험  
✅ **마그네틱 버튼** - 마우스 추적 자석 효과  
✅ **스크롤 애니메이션** - ScrollTrigger로 섹션별 등장  
✅ **비디오 배경** - 고품질 풀스크린 영상  
✅ **글래스모피즘** - 현대적인 반투명 UI  
✅ **반응형 디자인** - 모든 디바이스 지원  
✅ **타입 안정성** - TypeScript 완전 적용  

---

## 📞 문의

프로젝트에 대한 문의사항은 웹사이트의 **상담 예약** 버튼을 통해 연락 주시기 바랍니다.

---

**onyx Private Banking & Wealth Management**  
*자산의 새로운 기준을 경험하세요.*
