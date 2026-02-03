import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ZoomSection.css';

gsap.registerPlugin(ScrollTrigger);

const ZoomSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    // Image zoom effect
    gsap.fromTo(image,
      { scale: 2.5, clipPath: 'inset(40% 40% 40% 40%)' },
      {
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    // Overlay fade
    gsap.fromTo(overlay,
      { opacity: 0.8 },
      {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
        },
      }
    );

    // Text reveal
    const words = text.querySelectorAll('.zoom-word');
    gsap.fromTo(words,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: '30% top',
          end: '60% top',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="zoom-section" ref={sectionRef}>
      <div className="zoom-image-container">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1920"
          alt="Watch Movement"
          className="zoom-image"
        />
        <div className="zoom-overlay" ref={overlayRef}></div>
      </div>

      <div className="zoom-content" ref={textRef}>
        <p className="zoom-text">
          <span className="zoom-word">Every</span>
          <span className="zoom-word">component</span>
          <span className="zoom-word">tells</span>
          <span className="zoom-word">a</span>
          <span className="zoom-word zoom-word-accent">story</span>
        </p>
        <p className="zoom-subtitle">
          <span className="zoom-word">of</span>
          <span className="zoom-word">uncompromising</span>
          <span className="zoom-word zoom-word-accent">craftsmanship</span>
        </p>
      </div>
    </section>
  );
};

export default ZoomSection;
