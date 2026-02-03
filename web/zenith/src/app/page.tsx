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
        
        {/* Heritage Section - 헤리티지 */}
        <div id="about">
          <FadeInSection direction="up">
            <section className="py-24 bg-surface">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    <span className="text-primary">zenith</span> 헤리티지
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                    1865년 스위스 르 로클에서 시작된 장인정신
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-background rounded-lg border border-border">
                    <div className="text-5xl font-bold text-primary mb-4">1865</div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">SINCE</h3>
                    <p className="text-text-muted">스위스 르 로클 설립</p>
                  </div>
                  
                  <div className="text-center p-8 bg-background rounded-lg border border-border">
                    <div className="text-5xl font-bold text-primary mb-4">150+</div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">YEARS</h3>
                    <p className="text-text-muted">세대를 넘어 이어온 전통</p>
                  </div>
                  
                  <div className="text-center p-8 bg-background rounded-lg border border-border">
                    <div className="text-5xl font-bold text-primary mb-4">∞</div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">TIMELESS</h3>
                    <p className="text-text-muted">영원한 가치의 약속</p>
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
