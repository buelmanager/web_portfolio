import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const imageWrapper = imageWrapperRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const scrollLine = scrollLineRef.current;

    // Initial animations
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(imageWrapper,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'power4.inOut' }
    )
    .fromTo(title.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(subtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(scrollLine,
      { scaleY: 0 },
      { scaleY: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    );

    // Scroll-triggered image scale
    gsap.to(image, {
      scale: 1.15,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Parallax for text
    gsap.to([title, subtitle], {
      y: -100,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '50% top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-image-wrapper" ref={imageWrapperRef}>
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920&h=1280"
          alt="커피 한 잔"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-line">결정적</span>
          <span className="hero-line">한 잔</span>
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          The Decisive Cup
        </p>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">스크롤</span>
        <div className="scroll-line" ref={scrollLineRef}></div>
      </div>
    </section>
  );
};

export default Hero;
