import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const experiences = [
    {
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800&h=600',
      title: '핸드드립',
      desc: '바리스타가 직접 내려드리는 정성스러운 한 잔',
    },
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
      title: '에스프레소',
      desc: '압력과 온도의 완벽한 균형',
    },
    {
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800&h=600',
      title: '콜드브루',
      desc: '18시간 저온추출의 깊은 풍미',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current;

    // Horizontal scroll effect on desktop
    if (window.innerWidth >= 1024) {
      const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth + 48, 0);

      gsap.to(items, {
        x: () => -(totalWidth - window.innerWidth + 200),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    // Fade in items
    items.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
    <section className="experience" ref={sectionRef}>
      <div className="experience-header">
        <div className="experience-label">
          <span className="label-number">03</span>
          <span className="label-text">경험</span>
        </div>
        <h2 className="experience-title">추출의 순간</h2>
      </div>

      <div className="experience-track">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="experience-item"
            ref={el => itemsRef.current[index] = el}
            data-cursor="자세히"
          >
            <div className="experience-image-wrapper">
              <img
                src={exp.image}
                alt={exp.title}
                className="experience-image"
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-item-title">{exp.title}</h3>
              <p className="experience-desc">{exp.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
