import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Insights.css';

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const insights = [
    {
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=600&h=750',
      category: 'Runway',
      title: 'Behind the Scenes at Paris Fashion Week 2026',
      date: 'January 2026',
    },
    {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600&h=750',
      category: 'Materials',
      title: 'The Journey of Our Hand-Woven Japanese Silks',
      date: 'December 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=600&h=750',
      category: 'Savoir-Faire',
      title: 'Preserving the Art of Hand Embroidery',
      date: 'November 2025',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (!card) return;

      const image = card.querySelector('.insight-image');

      // Card reveal
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image zoom on scroll
      gsap.fromTo(image,
        { scale: 1.15 },
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
    <section className="insights" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Le Journal</h2>
        <a href="#" className="view-all">View All</a>
      </div>

      <div className="insights-grid">
        {insights.map((insight, index) => (
          <article
            key={index}
            className="insight-card"
            ref={el => cardsRef.current[index] = el}
          >
            <a href="#" className="insight-link">
              <div className="insight-image-wrapper">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="insight-image"
                />
              </div>
              <div className="insight-content">
                <span className="insight-category">{insight.category}</span>
                <h3 className="insight-title">{insight.title}</h3>
                <time className="insight-date">{insight.date}</time>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Insights;
