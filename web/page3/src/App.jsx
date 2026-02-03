import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Header from './components/Header';
import VideoHero from './components/VideoHero';
import ZoomSection from './components/ZoomSection';
import CollectionGrid from './components/CollectionGrid';
import HorizontalScroll from './components/HorizontalScroll';
import ParallaxShowcase from './components/ParallaxShowcase';
import Manufacture from './components/Manufacture';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  useSmoothScroll();

  useEffect(() => {
    document.documentElement.classList.add('lenis');

    return () => {
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <VideoHero />
        <ZoomSection />
        <CollectionGrid />
        <HorizontalScroll />
        <ParallaxShowcase />
        <Manufacture />
      </main>
      <Footer />
    </>
  );
}

export default App;
