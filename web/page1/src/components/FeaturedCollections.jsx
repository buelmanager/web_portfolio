import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturedCollections.css';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCollections = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const collections = [
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200&h=800',
      location: 'Autumn/Winter 2026',
      title: 'Nuit Éternelle',
      size: 'large',
    },
    {
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800&h=600',
      location: 'Spring/Summer 2026',
      title: 'Lumière de Paris',
      size: 'normal',
    },
    {
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800&h=600',
      location: 'Bridal Couture',
      title: 'Rêve Blanc',
      size: 'normal',
    },
    {
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200&h=600',
      location: 'Evening Wear',
      title: 'Soirée Dorée',
      size: 'wide',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (!card) return;

      const image = card.querySelector('.project-image');
      const info = card.querySelector('.project-info');

      // Card reveal animation
      gsap.fromTo(card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image scale on scroll
      gsap.fromTo(image,
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
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
    <section className="featured-projects" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Signature Collections</h2>
        <a href="#" className="view-all">View All Collections</a>
      </div>

      <div className="projects-grid">
        {collections.map((collection, index) => (
          <article
            key={index}
            className={`project-card ${collection.size === 'large' ? 'project-card-large' : ''} ${collection.size === 'wide' ? 'project-card-wide' : ''}`}
            ref={el => cardsRef.current[index] = el}
          >
            <a href="#" className="project-link">
              <div className="project-image-wrapper">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <span className="project-location">{collection.location}</span>
                <h3 className="project-title">{collection.title}</h3>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
