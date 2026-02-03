import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ProductGallery from '@/components/sections/ProductGallery'
import CategoryGallery from '@/components/sections/CategoryGallery'
import CategorySelector from '@/components/sections/CategorySelector'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'
import FloatingButton from '@/components/ui/FloatingButton'
import Preloader from '@/components/ui/Preloader'
import SidebarNav from '@/components/ui/SidebarNav'
import FadeInSection from '@/components/animations/FadeInSection'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <SidebarNav />
      <main>
        <Hero />
        
        {/* About Section - 회사소개 */}
        <div id="about">
          <FadeInSection direction="up">
            <section className="py-24 bg-surface">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-primary">로터스건설</span> 소개
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    25년 건설 노하우로 고객의 꿈을 현실로 만들어드립니다
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-background rounded-lg">
                    <div className="text-5xl font-bold text-primary mb-4">25+</div>
                    <h3 className="text-xl font-semibold mb-2">년 경력</h3>
                    <p className="text-text-secondary">축적된 건설 노하우</p>
                  </div>
                  
                  <div className="text-center p-8 bg-background rounded-lg">
                    <div className="text-5xl font-bold text-primary mb-4">500+</div>
                    <h3 className="text-xl font-semibold mb-2">프로젝트</h3>
                    <p className="text-text-secondary">성공적인 시공 완료</p>
                  </div>
                  
                  <div className="text-center p-8 bg-background rounded-lg">
                    <div className="text-5xl font-bold text-primary mb-4">100%</div>
                    <h3 className="text-xl font-semibold mb-2">고객 만족</h3>
                    <p className="text-text-secondary">신뢰할 수 있는 파트너</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>
        
        <div id="features">
          <FadeInSection direction="up">
            <Features />
          </FadeInSection>
        </div>
        
        <div id="products">
          <FadeInSection direction="up" delay={0.2}>
            <ProductGallery />
          </FadeInSection>
        </div>
        
        <div id="gallery">
          <FadeInSection direction="left">
            <CategoryGallery />
          </FadeInSection>
        </div>
        
        <div id="categories">
          <FadeInSection direction="right">
            <CategorySelector />
          </FadeInSection>
        </div>
        
        <div id="faq">
          <FadeInSection direction="up">
            <FAQ />
          </FadeInSection>
        </div>
        
        <div id="contact">
          <FadeInSection direction="up" delay={0.1}>
            <CTA />
          </FadeInSection>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}
