import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const timeline = [
    {
      year: '1923',
      title: 'Les Débuts',
      description: 'Maison Élise is founded on Rue du Faubourg Saint-Honoré, Paris, by master artisan Élise Beaumont.',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '1952',
      title: 'L\'Étoile',
      description: 'Introduction of the iconic Étoile clasp, becoming the signature of the maison.',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '1978',
      title: 'Global Recognition',
      description: 'Opening of boutiques in New York, London, and Tokyo, bringing Parisian elegance worldwide.',
      image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '1998',
      title: 'Heritage Revival',
      description: 'Launch of the Héritage collection, reinterpreting archival designs for the modern woman.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Commitment to sustainable luxury with ethically sourced materials and artisanal excellence.',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600&h=400',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const title = titleRef.current;

    // Calculate scroll distance
    const scrollWidth = container.scrollWidth - window.innerWidth;

    // Title animation
    gsap.fromTo(title,
      { x: 0 },
      {
        x: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
        },
      }
    );

    // Horizontal scroll
    gsap.to(container, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Cards animation
    const cards = container.querySelectorAll('.timeline-card');
    cards.forEach((card, index) => {
      const image = card.querySelector('.timeline-image');

      gsap.fromTo(image,
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            containerAnimation: gsap.to(container, { x: -scrollWidth }),
            start: 'left right',
            end: 'right left',
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="horizontal-scroll" ref={sectionRef}>
      <div className="horizontal-header">
        <h2 className="horizontal-title" ref={titleRef}>
          <span className="title-light">Notre</span>
          <span className="title-accent">Histoire</span>
        </h2>
      </div>

      <div className="horizontal-container" ref={containerRef}>
        <div className="timeline-track">
          {timeline.map((item, index) => (
            <article key={index} className="timeline-card">
              <div className="timeline-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="timeline-image"
                />
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="horizontal-progress">
        <div className="progress-line">
          <div className="progress-line-fill"></div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
