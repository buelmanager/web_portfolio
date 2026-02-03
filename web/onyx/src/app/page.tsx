import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
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
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}
