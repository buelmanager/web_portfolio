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
import CountUp from '@/components/animations/CountUp'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <SidebarNav />
      <main>
        <Hero />
        
        <div id="about">
          <FadeInSection direction="up">
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                    ver<span className="text-secondary">tex</span> 소개
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    혁신적인 건축 설계로 공간의 가치를 창조합니다
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8 border border-border hover:border-secondary transition-colors">
                    <div className="text-5xl font-bold text-secondary mb-4">
                      <CountUp end={15} suffix="+" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">년 경력</h3>
                    <p className="text-text-secondary">축적된 설계 노하우</p>
                  </div>
                  
                  <div className="text-center p-8 border border-border hover:border-secondary transition-colors">
                    <div className="text-5xl font-bold text-secondary mb-4">
                      <CountUp end={200} suffix="+" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">프로젝트</h3>
                    <p className="text-text-secondary">성공적인 설계 완료</p>
                  </div>
                  
                  <div className="text-center p-8 border border-border hover:border-secondary transition-colors">
                    <div className="text-5xl font-bold text-secondary mb-4">
                      <CountUp end={98} suffix="%" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">고객 만족</h3>
                    <p className="text-text-secondary">신뢰할 수 있는 파트너</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>
        
        <div id="features">
          <Features />
        </div>
        
        <div id="projects">
          <ProductGallery />
        </div>
        
        <div id="gallery">
          <CategoryGallery />
        </div>
        
        <div id="categories">
          <CategorySelector />
        </div>
        
        <div id="faq">
          <FAQ />
        </div>
        
        <div id="contact">
          <CTA />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}
