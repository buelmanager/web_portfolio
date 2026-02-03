import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manufacture.css';

gsap.registerPlugin(ScrollTrigger);

const Manufacture = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { number: '130+', label: 'Years of Excellence' },
    { number: '47', label: 'Master Watchmakers' },
    { number: '892', label: 'Hours per Timepiece' },
    { number: '1', label: 'Commitment to Perfection' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const statElements = statsRef.current;

    // Video scale effect
    gsap.fromTo(video,
      { scale: 0.8, borderRadius: '20px' },
      {
        scale: 1,
        borderRadius: '0px',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    // Stats counter animation
    statElements.forEach((stat, index) => {
      if (!stat) return;

      const numberEl = stat.querySelector('.stat-number');
      const labelEl = stat.querySelector('.stat-label');

      gsap.fromTo([numberEl, labelEl],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="manufacture" ref={sectionRef}>
      <div className="manufacture-video-wrapper" ref={videoRef}>
        <video
          className="manufacture-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?auto=format&fit=crop&q=80&w=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-watchmaker-assembling-a-watch-32588-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="manufacture-overlay"></div>
      </div>

      <div className="manufacture-content">
        <div className="manufacture-header">
          <span className="manufacture-label">The Manufacture</span>
          <h2 className="manufacture-title">
            Where Time is
            <span className="title-block">Crafted by Hand</span>
          </h2>
        </div>

        <div className="manufacture-stats">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              ref={el => statsRef.current[index] = el}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="manufacture-cta">
          <a href="#" className="discover-btn">
            <span>Discover Our Manufacture</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manufacture;
