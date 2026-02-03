import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoHero.css';

gsap.registerPlugin(ScrollTrigger);

const VideoHero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    // Initial animations
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(video,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
    )
    .fromTo(title.querySelectorAll('.hero-word'),
      { y: 120, opacity: 0, rotateX: -45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out'
      },
      '-=1.5'
    )
    .fromTo(subtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(scrollIndicator,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.3'
    );

    // Scroll animations
    gsap.to(video, {
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(overlay, {
      opacity: 0.8,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(title, {
      y: -150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '50% top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="video-hero" ref={heroRef}>
      <div className="video-hero-background">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-holding-a-luxury-bag-42837-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" ref={overlayRef}></div>
      </div>

      <div className="video-hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-word">The Art of</span>
          <span className="hero-word hero-word-accent">Timeless</span>
          <span className="hero-word">Elegance</span>
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Parisian Leather Craftsmanship Since 1923
        </p>
      </div>

      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-line">
          <div className="scroll-line-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
