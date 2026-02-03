import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const overlay = overlayRef.current;

    // Initial animation timeline
    const tl = gsap.timeline({ delay: 0.2 });

    // Diagonal mask reveal
    tl.fromTo(overlay,
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        duration: 1.5,
        ease: 'power4.inOut'
      }
    )
    .fromTo(title.querySelectorAll('.hero-word'),
      { y: 120, opacity: 0, skewY: 5 },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      },
      '-=0.8'
    )
    .fromTo(subtitle,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(cta,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    // Scroll triggered parallax
    gsap.to(video, {
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Text parallax on scroll
    gsap.to([title, subtitle, cta], {
      y: -150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '60% top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-car-driving-on-a-wet-road-at-night-4315-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" ref={overlayRef}></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-word">꿈을</span>
          <span className="hero-word">향해</span>
          <span className="hero-word hero-word-accent">달리다</span>
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          DRIVEN BY DREAMS
        </p>
        <div className="hero-cta" ref={ctaRef}>
          <button className="btn-primary">
            <span>모델 살펴보기</span>
          </button>
          <button className="btn-outline btn-outline-light">
            <span>시승 신청</span>
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-wheel">
          <div className="scroll-dot"></div>
        </div>
        <span className="scroll-text">스크롤</span>
      </div>

      <div className="hero-specs">
        <div className="spec-item">
          <span className="spec-value">0-100</span>
          <span className="spec-unit">2.8초</span>
        </div>
        <div className="spec-divider"></div>
        <div className="spec-item">
          <span className="spec-value">680</span>
          <span className="spec-unit">마력</span>
        </div>
        <div className="spec-divider"></div>
        <div className="spec-item">
          <span className="spec-value">450</span>
          <span className="spec-unit">km 주행거리</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
