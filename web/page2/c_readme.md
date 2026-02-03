# KRONOS LEGACY - 웹사이트 소개

> 스위스 럭셔리 시계 브랜드의 디지털 쇼룸 - 시간을 초월한 장인정신과 정밀한 공학의 결합

---

## 📋 프로젝트 개요

### 브랜드 정보
- **브랜드명**: KRONOS LEGACY (크로노스 레거시)
- **업종**: 스위스 오뜨 오를로주리 (Haute Horlogerie) - 최고급 시계 제조
- **컨셉**: 다크 럭셔리, 스위스 정밀함, 전통과 혁신의 조화
- **타겟**: 럭셔리 시계 애호가, 컬렉터, 고급 라이프스타일 추구 고객층
- **태그라인**: "Mastering Time Since 1892" / "Crafting Time, Defining Legacy"

### 사이트 목적
- 브랜드의 130년 역사와 장인정신을 시각적으로 전달
- 프리미엄 시계 컬렉션을 몰입감 있게 소개
- 스위스 매뉴팩처의 전통과 기술력 강조
- 고급스러운 브랜드 이미지 구축 및 온라인 부티크 연결

---

## 🎨 디자인 컨셉

### 컬러 팔레트
- **Primary Black**: `#000000` / `#0a0a0a` - 깊은 블랙, 럭셔리의 기본
- **Charcoal**: `#141414` / `#1f1f1f` - 차콜 그레이, 세련된 배경
- **Champagne Gold**: `#c9a962` / `#d4bc7e` - 샴페인 골드, 프리미엄 악센트
- **Rose Gold**: `#b76e79` - 로즈 골드, 여성스러운 터치
- **Silver/White**: `#c0c0c0` / `#ffffff` - 실버/화이트, 텍스트 및 하이라이트

### 디자인 스타일
- **Dark Luxury**: 딥 블랙 배경에 골드 악센트로 고급 시계의 무게감과 가치 표현
- **Swiss Precision**: 정교한 타이포그래피와 정렬로 스위스 시계의 정밀함 시각화
- **Immersive Experience**: 풀스크린 비주얼과 부드러운 애니메이션으로 몰입형 경험 제공
- **Minimalist Elegance**: 넓은 여백과 중앙 정렬로 콘텐츠에 집중

### 타이포그래피
- **Headline Font**: Playfair Display (세리프) - 클래식하고 우아한 헤드라인
- **Body Font**: Inter (산세리프) - 모던하고 가독성 높은 본문
- **특징**: 넓은 자간(letter-spacing: 0.2em), 대문자 사용으로 고급스러움 강조

---

## 📱 페이지 구성

### 전체 구조
```
Header (고정 네비게이션)
  ↓
Video Hero (비디오 히어로)
  ↓
Zoom Section (줌 인 섹션)
  ↓
Collection Grid (컬렉션 그리드)
  ↓
Horizontal Scroll (수평 스크롤 타임라인)
  ↓
Parallax Showcase (패럴랙스 쇼케이스)
  ↓
Manufacture (매뉴팩처 소개)
  ↓
Footer (푸터)
```

---

## 🔍 섹션별 상세 설명

### 1. Header (헤더)
**목적**: 브랜드 아이덴티티 및 사이트 네비게이션

**구성 요소**:
- **로고**: KRONOS LEGACY (2단 구조)
- **좌측 메뉴**: Collections, Manufacture, Heritage
- **우측 메뉴**: Boutiques, Journal, Contact (CTA)
- **모바일 메뉴**: 햄버거 메뉴 토글

**특징**:
- 스크롤 시 배경 블러 효과 및 투명도 변화
- 100px 이상 스크롤 시 `scrolled` 클래스 추가
- 모바일에서 풀스크린 오버레이 메뉴

---

### 2. Video Hero (비디오 히어로)
**목적**: 첫인상 & 브랜드 메시지 전달

**구성 요소**:
- **배경 비디오**: 회전하는 골드 시계 클로즈업 영상 (자동 재생, 루프)
- **메인 카피**: "The Art of **Timeless** Precision"
- **서브 카피**: "Swiss Haute Horlogerie Since 1892"
- **스크롤 인디케이터**: "Scroll to Explore" 텍스트 + 애니메이션 라인

**애니메이션**:
- 비디오: 1.3배 스케일에서 1배로 줌아웃 (2초)
- 타이틀: 단어별 3D 회전 페이드인 (rotateX -45deg → 0deg)
- 스크롤 시: 비디오 1.2배 확대, 오버레이 어두워짐, 타이틀 위로 사라짐

---

### 3. Zoom Section (줌 인 섹션)
**목적**: 시계 무브먼트의 정밀함 강조

**구성 요소**:
- **배경 이미지**: 시계 무브먼트 클로즈업 (기어, 스프링 등)
- **텍스트**: "Every component tells a **story** of uncompromising **craftsmanship**"
- **클립 패스 애니메이션**: 이미지가 중앙에서 확장되며 나타남

**애니메이션**:
- 이미지: 2.5배 스케일 + 클립 패스 40% → 1배 스케일 + 클립 패스 0%
- 섹션 핀(pin): 150% 스크롤 거리 동안 고정
- 텍스트: 단어별 순차 페이드인

---

### 4. Collection Grid (컬렉션 그리드)
**목적**: 시계 컬렉션 소개

**구성 요소**:
- **섹션 타이틀**: "Collections" (글자별 애니메이션)
- **인트로 텍스트**: "Explore our exceptional timepieces..."
- **컬렉션 카드** (4개):
  1. **Sovereign** - Grand Complications (2024)
  2. **Celestial** - Perpetual Calendar (2024)
  3. **Heritage** - Classic Collection (2023)
  4. **Meridian** - Sport Elegance (2024)
- **CTA 버튼**: "View All Collections" + 화살표 아이콘

**레이아웃**:
- 그리드 레이아웃 (데스크톱: 2x2, 모바일: 1열)
- 카드 1, 4: 세로형 이미지 (800x1000)
- 카드 2, 3: 가로형 이미지 (800x600)

**애니메이션**:
- 타이틀: 글자별 스태거 애니메이션
- 카드: 아래에서 페이드인 + 이미지 패럴랙스 (홀수/짝수 반대 방향)
- 호버: 이미지 스케일 확대, 카드 그림자 강화

---

### 5. Horizontal Scroll (수평 스크롤 타임라인)
**목적**: 브랜드 역사 소개

**구성 요소**:
- **섹션 타이틀**: "Our **Heritage**"
- **타임라인 카드** (5개):
  1. **1892** - Foundation (창립)
  2. **1934** - First Perpetual (첫 퍼페츄얼 캘린더)
  3. **1967** - Automatic Revolution (초박형 자동 무브먼트)
  4. **1992** - Centenary (100주년 기념)
  5. **2024** - Digital Era (디지털 시대)

**특징**:
- 수직 스크롤 → 수평 스크롤 변환 (GSAP ScrollTrigger)
- 섹션 핀(pin) 동안 컨테이너가 좌측으로 이동
- 각 카드: 연도 + 제목 + 설명 + 이미지
- 하단 프로그레스 바

**애니메이션**:
- 타이틀: 좌측으로 -200px 이동
- 카드 이미지: 1.2배 → 1배 스케일 (카드가 뷰포트 진입 시)

---

### 6. Parallax Showcase (패럴랙스 쇼케이스)
**목적**: 시각적 임팩트 & 브랜드 철학 전달

**구성 요소**:
- **배경 레이어** (5개): 다양한 시계 디테일 이미지 (다층 패럴랙스)
- **중앙 텍스트**: "Precision **is** not a goal, it's a **legacy.**"

**애니메이션**:
- 각 레이어: 서로 다른 속도로 패럴랙스 이동 (0.2 ~ 0.7배)
- 텍스트: 단어별 투명도 0.1 → 1 (스크롤 기반)

**레이아웃**:
- 레이어 1: 좌측 상단 (400x500)
- 레이어 2: 우측 상단 (300x400)
- 레이어 3: 중앙 (500x350)
- 레이어 4: 좌측 하단 (350x450)
- 레이어 5: 우측 하단 (280x380)

---

### 7. Manufacture (매뉴팩처 소개)
**목적**: 제조 공정 및 장인정신 강조

**구성 요소**:
- **배경 비디오**: 시계 조립 과정 (장인의 손 클로즈업)
- **섹션 라벨**: "The Manufacture"
- **타이틀**: "Where Time is Crafted by Hand"
- **통계 정보** (4개):
  - **130+** Years of Excellence
  - **47** Master Watchmakers
  - **892** Hours per Timepiece
  - **1** Commitment to Perfection
- **CTA 버튼**: "Discover Our Manufacture" + 화살표 아이콘

**애니메이션**:
- 비디오: 0.8배 스케일 + 20px 보더 라디우스 → 1배 스케일 + 0px 보더 라디우스
- 통계: 아래에서 순차 페이드인 (스태거 0.1초)

---

### 8. Footer (푸터)
**목적**: 연락처 정보 및 사이트맵

**구성 요소**:
- **로고**: KRONOS LEGACY (스케일 애니메이션)
- **태그라인**: "Crafting Time, Defining Legacy"
- **네비게이션 컬럼** (4개):
  1. **Collections**: Sovereign, Celestial, Heritage, Meridian
  2. **The Maison**: Our Story, Manufacture, Craftsmanship, Sustainability
  3. **Services**: Boutiques, Book Appointment, After-Sales, Authentication
  4. **Connect**: Contact Us, Newsletter, Instagram, LinkedIn
- **매장 위치**: Geneva, Paris, New York, Hong Kong, Dubai
- **법적 정보**: © 2026 Kronos Legacy / Privacy Policy / Terms of Service / Cookie Settings

**애니메이션**:
- 로고: 0.8배 → 1배 스케일 + 페이드인

---

## 🎬 인터랙션 & 애니메이션

### 스무스 스크롤
- **라이브러리**: Lenis 1.3.17
- **설정**: duration 1.4초, wheelMultiplier 0.8
- **효과**: 묵직하고 고급스러운 스크롤 느낌

### GSAP 애니메이션
- **ScrollTrigger**: 스크롤 기반 애니메이션 트리거
- **Pin**: 섹션 고정 (Zoom Section, Horizontal Scroll)
- **Scrub**: 스크롤 진행도에 따른 애니메이션 동기화
- **Stagger**: 요소별 순차 애니메이션

### 주요 효과
- **Fade In**: 모든 섹션 진입 시 페이드인
- **Parallax**: 이미지 레이어별 다른 속도 이동
- **Zoom**: 비디오/이미지 스케일 변화
- **3D Transform**: 타이틀 rotateX 회전
- **Clip Path**: 이미지 클리핑 애니메이션
- **Horizontal Scroll**: 수직 스크롤 → 수평 이동 변환

### 호버 효과
- **버튼**: 배경 골드 → 라이트 골드, 화살표 이동
- **카드**: 이미지 1.05배 확대, 그림자 강화
- **링크**: 언더라인 애니메이션

---

## 💻 기술 스택

### 프론트엔드
- **프레임워크**: React 19.2.0
- **빌드 도구**: Vite 7.2.4
- **스타일링**: CSS3 (CSS Variables, Flexbox, Grid)
- **애니메이션**: GSAP 3.14.2 (ScrollTrigger 포함)
- **스무스 스크롤**: Lenis 1.3.17

### 주요 기능
- **반응형 디자인**: 모바일(~768px), 태블릿(768~1023px), 데스크톱(1024px+)
- **성능 최적화**: 이미지 lazy loading, 비디오 최적화
- **접근성**: 시맨틱 HTML, ARIA 레이블
- **SEO**: 메타태그, Open Graph 설정

### 개발 환경
- **패키지 매니저**: npm
- **린터**: ESLint 9.39.1
- **개발 서버**: Vite Dev Server (HMR 지원)

---

## 📊 페이지 성능

### 최적화 요소
- **이미지**: Unsplash 자동 최적화 (auto=format, fit=crop, q=80)
- **비디오**: Mixkit 최적화 비디오 (large 사이즈)
- **코드 스플리팅**: React 컴포넌트 기반 분할
- **CSS Variables**: 재사용 가능한 디자인 토큰

### SEO
- **메타 설명**: "KRONOS LEGACY - Swiss Haute Horlogerie since 1892..."
- **타이틀**: "KRONOS LEGACY | Swiss Haute Horlogerie"
- **테마 컬러**: #000000 (블랙)

### 반응형
- **브레이크포인트**:
  - 모바일: < 768px
  - 태블릿: 768px ~ 1023px
  - 데스크톱: 1024px ~ 1399px
  - 대형 데스크톱: 1400px+
- **모바일 조정**:
  - 수평 스크롤 → 수직 스크롤 변환
  - 그리드 2열 → 1열
  - 헤더 햄버거 메뉴
  - 터치 제스처 지원

---

## 🎨 콘텐츠 가이드

### 이미지 소스
- **Hero 비디오**: Mixkit - 골드 시계 회전 영상
- **Manufacture 비디오**: Mixkit - 시계 조립 과정
- **제품 이미지**: Unsplash (고품질 시계 사진)
- **아이콘**: SVG (인라인)

### 텍스트 톤앤매너
- **스타일**: 우아하고 절제된, 전문적이고 권위 있는
- **특징**: 짧고 임팩트 있는 문장, 대문자 사용, 넓은 자간
- **예시**:
  - "The Art of Timeless Precision"
  - "Every component tells a story"
  - "Precision is not a goal, it's a legacy"

### 브랜드 보이스
- 전통과 혁신의 균형
- 장인정신과 기술력 강조
- 시간의 가치와 유산 전달

---

## 🚀 향후 개선 제안

1. **인터랙티브 3D 시계 뷰어**: Three.js를 활용한 360도 회전 가능한 시계 모델
2. **가상 부티크 투어**: 360도 파노라마 또는 VR 매장 체험
3. **커스터마이징 도구**: 시계 스트랩, 다이얼 색상 등 실시간 커스터마이징
4. **예약 시스템**: 부티크 방문 예약 및 온라인 상담 기능
5. **다국어 지원**: 영어, 프랑스어, 독일어, 중국어, 일본어, 한국어
6. **AR 체험**: 스마트폰으로 손목에 시계 착용 미리보기
7. **컬렉터 커뮤니티**: 회원 전용 포럼 및 이벤트 정보
8. **라이브 채팅**: 실시간 고객 상담 (영업시간 내)

---

## 📞 문의

프로젝트 관련 문의사항은 아래로 연락 주시기 바랍니다:

- **이메일**: contact@kronoslegacy.com (가상)
- **전화**: +41 21 XXX XXXX (가상)
- **주소**: Vallée de Joux, Switzerland (가상)

---

**문서 생성일**: 2026년 2월 3일  
**버전**: 1.0  
**프로젝트 유형**: 럭셔리 브랜드 웹사이트 (React + Vite)
