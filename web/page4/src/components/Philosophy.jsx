import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const words = section.querySelectorAll('.philosophy-word');
    const image = imageRef.current;

    // Word by word reveal
    words.forEach((word, index) => {
      gsap.fromTo(word,
        { opacity: 0.1 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: word,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );
    });

    // Image reveal with clip-path
    gsap.fromTo(image,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: image,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="philosophy" ref={sectionRef}>
      <div className="philosophy-content">
        <div className="philosophy-text" ref={textRef}>
          <p className="philosophy-paragraph">
            <span className="philosophy-word">모든</span>{' '}
            <span className="philosophy-word">순간에는</span>{' '}
            <span className="philosophy-word">결정적인</span>{' '}
            <span className="philosophy-word accent">한</span>{' '}
            <span className="philosophy-word accent">잔이</span>{' '}
            <span className="philosophy-word">있습니다.</span>
          </p>
          <p className="philosophy-paragraph">
            <span className="philosophy-word">우리는</span>{' '}
            <span className="philosophy-word">커피의</span>{' '}
            <span className="philosophy-word accent">본질을</span>{' '}
            <span className="philosophy-word">추구하며,</span>
          </p>
          <p className="philosophy-paragraph">
            <span className="philosophy-word">불필요한</span>{' '}
            <span className="philosophy-word">것들을</span>{' '}
            <span className="philosophy-word">덜어냅니다.</span>
          </p>
        </div>

        <div className="philosophy-image" ref={imageRef}>
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800&h=1000"
            alt="커피 원두"
          />
        </div>
      </div>

      <div className="philosophy-caption">
        <span className="caption-number">01</span>
        <span className="caption-text">철학</span>
      </div>
    </section>
  );
};

export default Philosophy;
