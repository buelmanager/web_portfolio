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
      year: '1892',
      title: 'Foundation',
      description: 'Kronos Legacy is established in the heart of Switzerland, in the Vallée de Joux.',
      image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '1934',
      title: 'First Perpetual',
      description: 'Introduction of our first perpetual calendar complication, a milestone in horological history.',
      image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '1967',
      title: 'Automatic Revolution',
      description: 'Launch of the ultra-thin automatic movement, setting new standards in precision.',
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '1992',
      title: 'Centenary',
      description: 'Celebration of 100 years with the release of limited anniversary editions.',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      year: '2024',
      title: 'Digital Era',
      description: 'Embracing innovation while preserving traditional craftsmanship for future generations.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600&h=400',
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
          <span className="title-light">Our</span>
          <span className="title-accent">Heritage</span>
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
