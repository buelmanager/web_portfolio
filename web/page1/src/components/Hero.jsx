import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const words = titleRef.current.querySelectorAll('.hero-word');
    const scrollIndicator = scrollIndicatorRef.current;

    // Initial animation
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(image,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
    .fromTo(words,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
      '-=1'
    )
    .fromTo(scrollIndicator,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );

    // Parallax on scroll
    gsap.to(image, {
      yPercent: 30,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Title parallax
    gsap.to(titleRef.current, {
      yPercent: -50,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-image-wrapper">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920&h=1080"
            alt="Haute Couture Fashion"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-word hero-word-1">ETERNAL</span>
          <span className="hero-word hero-word-2">ELEGANCE</span>
          <span className="hero-word hero-word-3">REDEFINED</span>
        </h1>
      </div>

      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <span>Discover</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
