# 🏗️ 로터스건설 공식 웹사이트

> **믿음으로 짓는 든든한 건축**  
> 25년 건설 노하우로 주거/상업 공간의 가치를 높이는 종합 건설 인테리어 전문 기업

---

## 📋 프로젝트 개요

**프로젝트명**: lotus-construction  
**버전**: 1.0.0  
**설명**: 로터스건설 공식 웹사이트

---

## 🎨 브랜드 컬러 팔레트

### 메인 컬러
- **Background**: `#2A2420` - 다크 브라운 (배경)
- **Foreground**: `#FFFFF0` - 아이보리 (전경)
- **Surface**: `#3D3429` - 서피스
- **Surface Light**: `#4D4439` - 밝은 서피스
- **Border**: `#5D5449` - 테두리

### 포인트 컬러
- **Primary**: `#A0826D` - 카푸치노 (메인 브랜드 컬러)
- **Primary Hover**: `#B8956A` - 밝은 카푸치노 (호버 상태)
- **Primary Light**: `#C9A87C` - 연한 카푸치노
- **Secondary**: `#D4AF37` - 골드 (강조 컬러)
- **Accent**: `#C19A6B` - 탄 (액센트)

### 텍스트 컬러
- **Text Primary**: `#FFFFF0` - 아이보리 (주요 텍스트)
- **Text Secondary**: `#F5F5DC` - 베이지 (보조 텍스트)
- **Text Muted**: `#D4C5B9` - 라이트 탄 (흐린 텍스트)

---

## 📄 페이지 구조

### 1. 🎬 **Preloader** (프리로더)
- 로딩 화면 (2초)
- 로터스건설 로고 + 스피너 애니메이션
- 페이드아웃 효과

### 2. 🏠 **Hero Section** (히어로 섹션)
- YouTube 배경 영상 (자동 재생, 무음, 반복)
- 폴백 이미지 (Unsplash 건설 이미지)
- 메인 카피: "믿음으로 짓는 든든한 건축"
- 서브 카피: "로터스건설 - 25년 건설 노하우"
- CTA 버튼: "시공사례 보기", "견적 문의"
- 스크롤 다운 인디케이터 (바운스 애니메이션)

### 3. 📖 **About Section** (회사소개)
- 섹션 ID: `#about`
- 회사 소개 헤드라인
- 3개 통계 카드:
  - 25+ 년 경력
  - 500+ 프로젝트
  - 100% 고객 만족

### 4. ⭐ **Features Section** (서비스 특징)
- 섹션 ID: `#features`
- 8개 서비스 카드 (4열 그리드):
  1. 데스크탑 & 워크스테이션
  2. 서버 솔루션
  3. 노트북 & 태블릿
  4. 컴퓨터 부품
  5. 대형 가전
  6. 생활 가전
  7. 중고 & 리퍼비시
  8. B2B 전문 서비스
- 각 카드: 아이콘 + 제목 + 설명
- 호버 효과: 리프트 + 컬러 변경

### 5. 🖼️ **Product Gallery** (제품 갤러리)
- 섹션 ID: `#products`
- Swiper 캐러셀 (반응형)
- 5개 제품 슬라이드:
  - Dell PRECISION 워크스테이션
  - HP ProLiant 서버
  - 비즈니스 노트북
  - 고성능 모니터
  - 네트워크 장비
- 이미지 호버: 스케일 확대 + 그라디언트 오버레이

### 6. 🏢 **Category Gallery** (카테고리 갤러리)
- 섹션 ID: `#gallery`
- 카테고리별 시공 사례 이미지

### 7. 🎯 **Category Selector** (카테고리 선택)
- 섹션 ID: `#categories`
- 시공 분야 선택 인터페이스

### 8. ❓ **FAQ Section** (자주 묻는 질문)
- 섹션 ID: `#faq`
- 아코디언 형식의 FAQ

### 9. 📞 **CTA Section** (문의하기)
- 섹션 ID: `#contact`
- 견적 문의 및 연락처 정보

### 10. 🦶 **Footer** (푸터)
- 회사 정보
- 링크
- 저작권 정보

---

## 🎭 애니메이션 & 인터랙션

### GSAP 애니메이션
1. **FadeInSection** (스크롤 트리거)
   - 방향: up, down, left, right
   - 딜레이 옵션
   - ScrollTrigger: 85% 지점에서 트리거
   - 이징: power3.out

2. **TextReveal** (텍스트 리빌)
   - 글자별 순차 애니메이션
   - 딜레이 옵션

### CSS 애니메이션
- **Preloader**: 스피너 회전 (1.5초)
- **Hero**: 스크롤 인디케이터 바운스
- **Hover Effects**:
  - `.hover-lift`: 위로 4px 이동 + 그림자
  - 카드 호버: 컬러 변경 + 스케일

### 인터랙션
- **Swiper 캐러셀**: 네비게이션 + 페이지네이션
- **Floating Button**: 고정 위치 버튼
- **Sidebar Navigation**: 사이드바 네비게이션
- **Smooth Scroll**: 부드러운 스크롤

---

## 🛠️ 기술 스택

### 프레임워크 & 라이브러리
- **Next.js**: 16.1.6 (React 19.2.3)
- **TypeScript**: ^5
- **Tailwind CSS**: ^4
- **GSAP**: ^3.14.2 (애니메이션)
- **Swiper**: ^12.1.0 (캐러셀)
- **Lucide React**: ^0.563.0 (아이콘)

### 폰트
- **Geist Sans**: 본문 폰트
- **Geist Mono**: 모노스페이스 폰트

### 개발 도구
- **ESLint**: ^9
- **PostCSS**: Tailwind CSS 처리

---

## 🚀 실행 방법

### 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 프로덕션 빌드
```bash
npm run build
npm run start
```

### 린트 실행
```bash
npm run lint
```

---

## 📱 반응형 디자인

### 브레이크포인트
- **Mobile**: < 640px
- **Tablet**: 640px ~ 1024px
- **Desktop**: > 1024px

### 반응형 요소
- 히어로 텍스트 크기 조정
- 그리드 레이아웃 변경 (1열 → 2열 → 4열)
- 캐러셀 슬라이드 개수 조정
- 버튼 레이아웃 (세로 → 가로)

---

## 🎯 주요 기능

### 1. 동적 로딩
- Preloader로 초기 로딩 경험 개선
- YouTube 영상 로딩 전 폴백 이미지 표시

### 2. 스크롤 애니메이션
- GSAP ScrollTrigger로 섹션별 페이드인
- 방향별 애니메이션 (상하좌우)

### 3. 이미지 최적화
- Next.js Image 컴포넌트 사용
- Unsplash 이미지 (w=800~1920, q=80~90)
- 우선순위 로딩 (priority prop)

### 4. SEO 최적화
- 메타데이터 설정 (title, description, keywords)
- Open Graph 태그
- 시맨틱 HTML

---

## 📞 문의

**로터스건설**  
25년 건설 노하우로 고객의 꿈을 현실로 만들어드립니다.

---

## 📝 라이선스

Private (비공개)

---

**© 2024 로터스건설. All rights reserved.**
