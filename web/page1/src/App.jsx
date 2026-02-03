import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import FeaturedCollections from './components/FeaturedCollections';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Insights from './components/Insights';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  useSmoothScroll();

  useEffect(() => {
    // Add lenis class to html for smooth scroll styling
    document.documentElement.classList.add('lenis');

    return () => {
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Statement />
        <FeaturedCollections />
        <Services />
        <Testimonial />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
