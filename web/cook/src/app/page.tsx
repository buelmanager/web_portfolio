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

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductGallery />
        <CategoryGallery />
        <CategorySelector />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}
