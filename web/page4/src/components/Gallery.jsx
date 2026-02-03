import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const mask = maskRef.current;

    // Image scale-up on scroll with mask reveal
    gsap.fromTo(mask,
      { clipPath: 'circle(15% at 50% 50%)' },
      {
        clipPath: 'circle(100% at 50% 50%)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      }
    );

    // Parallax for image
    gsap.fromTo(image,
      { scale: 1.3 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="gallery" ref={sectionRef}>
      <div className="gallery-mask" ref={maskRef}>
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1920&h=1280"
          alt="커피 내리는 순간"
          className="gallery-image"
        />
      </div>

      <div className="gallery-content">
        <blockquote className="gallery-quote">
          <p>"커피는 순간을 담는 그릇입니다"</p>
        </blockquote>
      </div>
    </section>
  );
};

export default Gallery;
