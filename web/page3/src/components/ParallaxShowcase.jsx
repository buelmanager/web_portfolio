import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ParallaxShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const sectionRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const layers = layersRef.current;

    // Different parallax speeds for each layer
    const speeds = [0.3, 0.5, 0.2, 0.7, 0.4];

    layers.forEach((layer, index) => {
      if (!layer) return;

      gsap.fromTo(layer,
        { y: 100 * speeds[index] },
        {
          y: -100 * speeds[index],
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    });

    // Text reveal
    const text = section.querySelector('.showcase-text');
    const words = text.querySelectorAll('.showcase-word');

    gsap.fromTo(words,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="parallax-showcase" ref={sectionRef}>
      <div className="parallax-layers">
        <div
          className="parallax-layer layer-1"
          ref={el => layersRef.current[0] = el}
        >
          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400&h=500"
            alt="Leather Detail 1"
          />
        </div>

        <div
          className="parallax-layer layer-2"
          ref={el => layersRef.current[1] = el}
        >
          <img
            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=300&h=400"
            alt="Handbag Detail 2"
          />
        </div>

        <div
          className="parallax-layer layer-3"
          ref={el => layersRef.current[2] = el}
        >
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500&h=350"
            alt="Bag Detail 3"
          />
        </div>

        <div
          className="parallax-layer layer-4"
          ref={el => layersRef.current[3] = el}
        >
          <img
            src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=350&h=450"
            alt="Leather Craftsmanship 4"
          />
        </div>

        <div
          className="parallax-layer layer-5"
          ref={el => layersRef.current[4] = el}
        >
          <img
            src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=280&h=380"
            alt="Bag Collection 5"
          />
        </div>
      </div>

      <div className="showcase-content">
        <div className="showcase-text">
          <span className="showcase-word">Elegance</span>
          <span className="showcase-word showcase-word-accent">is</span>
          <span className="showcase-word">not</span>
          <span className="showcase-word">a</span>
          <span className="showcase-word">trend,</span>
          <br />
          <span className="showcase-word">it's</span>
          <span className="showcase-word">a</span>
          <span className="showcase-word showcase-word-accent">signature.</span>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
