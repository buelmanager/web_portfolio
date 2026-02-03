import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CollectionGrid.css';

gsap.registerPlugin(ScrollTrigger);

const CollectionGrid = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const collections = [
    {
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800&h=1000',
      title: 'Étoile',
      subtitle: 'Evening Collection',
      year: '2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800&h=600',
      title: 'Parisienne',
      subtitle: 'Day-to-Night Totes',
      year: '2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800&h=600',
      title: 'Héritage',
      subtitle: 'Classic Satchels',
      year: '2023',
    },
    {
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800&h=1000',
      title: 'Voyage',
      subtitle: 'Travel Essentials',
      year: '2024',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    // Title animation
    const titleChars = title.querySelectorAll('.title-char');
    gsap.fromTo(titleChars,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cards animation with parallax
    cards.forEach((card, index) => {
      if (!card) return;

      const image = card.querySelector('.collection-image');
      const content = card.querySelector('.collection-card-content');
      const direction = index % 2 === 0 ? 1 : -1;

      // Card reveal
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image parallax
      gsap.fromTo(image,
        { y: 80 * direction },
        {
          y: -80 * direction,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Content reveal
      gsap.fromTo(content,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const splitTitle = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="title-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="collection-grid" ref={sectionRef}>
      <div className="collection-header">
        <h2 className="collection-title" ref={titleRef}>
          {splitTitle('Collections')}
        </h2>
        <p className="collection-intro">
          Discover our exceptional leather creations, each a testament to generations of Parisian savoir-faire.
        </p>
      </div>

      <div className="collection-cards">
        {collections.map((collection, index) => (
          <article
            key={index}
            className={`collection-card collection-card-${index + 1}`}
            ref={el => cardsRef.current[index] = el}
          >
            <a href="#" className="collection-link">
              <div className="collection-image-wrapper">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="collection-image"
                />
              </div>
              <div className="collection-card-content">
                <span className="collection-year">{collection.year}</span>
                <h3 className="collection-name">{collection.title}</h3>
                <p className="collection-subtitle">{collection.subtitle}</p>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="collection-cta">
        <a href="#" className="view-all-btn">
          <span>View All Collections</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CollectionGrid;
