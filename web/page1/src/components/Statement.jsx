import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Statement.css';

gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  const images = [
    { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600&h=800', alt: 'Fashion Model' },
    { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&h=800', alt: 'Runway' },
    { src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=600&h=800', alt: 'Atelier' },
    { src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600&h=800', alt: 'Fabric Detail' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600&h=800', alt: 'Couture Dress' },
  ];

  const words = [
    { text: 'Our', uppercase: false },
    { text: 'ATELIER', uppercase: true },
    { text: 'CRAFTS', uppercase: true },
    { text: 'GARMENTS', uppercase: true },
    { text: 'that', uppercase: false },
    { text: 'embody', uppercase: false },
    { text: 'your', uppercase: false },
    { text: 'essence,', uppercase: false },
    { text: 'DEFINING', uppercase: true },
    { text: 'a', uppercase: false },
    { text: 'NEW', uppercase: true },
    { text: 'ERA', uppercase: true },
    { text: 'of', uppercase: false },
    { text: 'COUTURE,', uppercase: true },
    { text: 'ARTISTRY', uppercase: true },
    { text: 'and', uppercase: false },
    { text: 'timeless', uppercase: false },
    { text: 'PARISIAN', uppercase: true },
    { text: 'SAVOIR-FAIRE.', uppercase: true },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const fadeWords = section.querySelectorAll('.fade-word');
    const imageElements = imagesRef.current;

    // Word reveal animation
    fadeWords.forEach((word, index) => {
      gsap.fromTo(word,
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    });

    // Image animations with parallax
    imageElements.forEach((img, index) => {
      if (!img) return;

      const direction = index % 2 === 0 ? 1 : -1;
      const yOffset = 50 + (index * 20);

      gsap.fromTo(img,
        { y: yOffset * direction, opacity: 0, scale: 0.9 },
        {
          y: -yOffset * direction * 0.5,
          opacity: 1,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="statement" ref={sectionRef}>
      <div className="statement-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`statement-image statement-image-${index + 1}`}
            ref={el => imagesRef.current[index] = el}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="statement-text" ref={textRef}>
        <p className="statement-paragraph">
          <span className="statement-word fade-word">Our</span>
        </p>
        <p className="statement-paragraph">
          <span className="statement-word fade-word uppercase">ATELIER</span>
          <span className="statement-word fade-word uppercase">CRAFTS</span>
        </p>
        <p className="statement-paragraph">
          <span className="statement-word fade-word uppercase">GARMENTS</span>
          <span className="statement-word fade-word">that</span>
          <span className="statement-word fade-word">embody</span>
        </p>
        <p className="statement-paragraph">
          <span className="statement-word fade-word">your</span>
          <span className="statement-word fade-word">essence,</span>
          <span className="statement-word fade-word uppercase">DEFINING</span>
          <span className="statement-word fade-word">a</span>
        </p>
        <p className="statement-paragraph">
          <span className="statement-word fade-word uppercase">NEW</span>
          <span className="statement-word fade-word uppercase">ERA</span>
          <span className="statement-word fade-word">of</span>
          <span className="statement-word fade-word uppercase">COUTURE,</span>
        </p>
        <p className="statement-paragraph">
          <span className="statement-word fade-word uppercase">ARTISTRY</span>
          <span className="statement-word fade-word">and</span>
          <span className="statement-word fade-word">timeless</span>
        </p>
        <p className="statement-paragraph">
          <span className="statement-word fade-word uppercase">PARISIAN</span>
          <span className="statement-word fade-word uppercase">SAVOIR-FAIRE.</span>
        </p>
      </div>
    </section>
  );
};

export default Statement;
