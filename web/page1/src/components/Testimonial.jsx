import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonial.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const quote = quoteRef.current;
    const author = authorRef.current;

    // Quote animation
    gsap.fromTo(quote,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Author animation
    gsap.fromTo(author,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="testimonial" ref={sectionRef}>
      <div className="testimonial-content">
        <blockquote className="testimonial-quote" ref={quoteRef}>
          <p>"MAISON NOIR captures the essence of timeless elegance. Each piece is a masterwork that transcends fashion and becomes art."</p>
        </blockquote>
        <cite className="testimonial-author" ref={authorRef}>
          <span className="author-name">Isabelle Fontaine</span>
          <span className="author-location">Vogue Paris Editor</span>
        </cite>
      </div>
    </section>
  );
};

export default Testimonial;
