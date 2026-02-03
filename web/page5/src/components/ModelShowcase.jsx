import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ModelShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const ModelShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeModel, setActiveModel] = useState(0);

  const models = [
    {
      name: 'GT-S',
      tagline: '순수한 스포츠',
      specs: '0-100km/h 2.8초 | 680마력',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200&h=800',
      color: '#B8860B',
    },
    {
      name: 'GT-E',
      tagline: '전기의 미래',
      specs: '0-100km/h 3.2초 | 450km 주행',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200&h=800',
      color: '#C9A962',
    },
    {
      name: 'GT-X',
      tagline: '모든 길 위에서',
      specs: '0-100km/h 4.1초 | AWD',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1200&h=800',
      color: '#8B7355',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Section title animation
    gsap.fromTo(section.querySelector('.showcase-title'),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cards stagger animation with diagonal mask
    cards.forEach((card, index) => {
      if (!card) return;

      const image = card.querySelector('.model-image');

      gsap.fromTo(card,
        {
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image parallax
      gsap.fromTo(image,
        { scale: 1.3 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="model-showcase" ref={sectionRef}>
      <div className="showcase-header">
        <h2 className="showcase-title">
          <span className="title-line">모델</span>
          <span className="title-line title-line-accent">라인업</span>
        </h2>
      </div>

      <div className="model-grid">
        {models.map((model, index) => (
          <article
            key={index}
            className={`model-card ${activeModel === index ? 'active' : ''}`}
            ref={el => cardsRef.current[index] = el}
            onMouseEnter={() => setActiveModel(index)}
          >
            <div className="model-image-wrapper">
              <img
                src={model.image}
                alt={model.name}
                className="model-image"
              />
              <div className="model-overlay" style={{ '--accent-color': model.color }}></div>
            </div>

            <div className="model-content">
              <div className="model-info">
                <span className="model-tagline">{model.tagline}</span>
                <h3 className="model-name">{model.name}</h3>
                <p className="model-specs">{model.specs}</p>
              </div>

              <div className="model-cta">
                <a href="#" className="model-link">
                  <span>자세히 보기</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="model-index">
              <span>0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="showcase-cta">
        <a href="#" className="btn-outline">
          <span>전체 모델 보기</span>
        </a>
      </div>
    </section>
  );
};

export default ModelShowcase;
