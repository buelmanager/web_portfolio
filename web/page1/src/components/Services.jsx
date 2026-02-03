import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const itemsRef = useRef([]);

  const services = [
    {
      number: '01',
      title: 'Haute Couture',
      desc: 'One-of-a-kind creations meticulously handcrafted in our Parisian atelier.',
    },
    {
      number: '02',
      title: 'Prêt-à-Porter',
      desc: 'Ready-to-wear collections embodying couture craftsmanship for everyday elegance.',
    },
    {
      number: '03',
      title: 'Private Appointments',
      desc: 'Exclusive consultations with our master tailors for your bespoke wardrobe.',
    },
    {
      number: '04',
      title: 'Bridal Atelier',
      desc: 'Custom bridal gowns designed to make your most precious moments unforgettable.',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const items = itemsRef.current;

    // Image parallax
    gsap.fromTo(image,
      { y: 100 },
      {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Image reveal
    gsap.fromTo(image,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Service items animation
    items.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(item,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
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
    <section className="services" ref={sectionRef}>
      <div className="services-content">
        <div className="services-header">
          <h2 className="section-title">L'Art du Couture</h2>
          <p className="services-intro">
            From bespoke haute couture to ready-to-wear excellence, we offer
            an unparalleled journey into the world of refined fashion.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              ref={el => itemsRef.current[index] = el}
            >
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="services-image" ref={imageRef}>
        <div className="services-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=1000&h=1200"
            alt="Atelier Craftsmanship"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
