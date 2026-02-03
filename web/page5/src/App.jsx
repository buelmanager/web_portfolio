import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import ModelShowcase from './components/ModelShowcase';
import Performance from './components/Performance';
import HorizontalSection from './components/HorizontalSection';
import Heritage from './components/Heritage';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Lenis smooth scroll - 묵직한 느낌
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ModelShowcase />
        <Performance />
        <HorizontalSection />
        <Heritage />
      </main>
      <Footer />
    </>
  );
}

export default App;
