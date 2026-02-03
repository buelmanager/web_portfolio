import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Performance.css';

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { value: '2.8', unit: '초', label: '0-100km/h', desc: '번개같은 가속' },
    { value: '680', unit: 'PS', label: '최대 출력', desc: '압도적인 파워' },
    { value: '850', unit: 'Nm', label: '최대 토크', desc: '즉각적인 반응' },
    { value: '330', unit: 'km/h', label: '최고 속도', desc: '끝없는 질주' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const statItems = statsRef.current;

    // Image parallax with scale
    gsap.fromTo(image,
      { scale: 1.2, y: 100 },
      {
        scale: 1,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      }
    );

    // Stats animation
    statItems.forEach((stat, index) => {
      if (!stat) return;

      gsap.fromTo(stat,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Counter animation for values
    statItems.forEach((stat, index) => {
      if (!stat) return;

      const valueEl = stat.querySelector('.stat-value');
      const endValue = parseFloat(stats[index].value);

      gsap.fromTo({ val: 0 },
        { val: 0 },
        {
          val: endValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: function() {
            if (endValue % 1 !== 0) {
              valueEl.textContent = this.targets()[0].val.toFixed(1);
            } else {
              valueEl.textContent = Math.round(this.targets()[0].val);
            }
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="performance" ref={sectionRef}>
      <div className="performance-bg">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920"
          alt="Performance"
          className="performance-image"
        />
        <div className="performance-overlay"></div>
      </div>

      <div className="performance-content">
        <div className="performance-header">
          <span className="performance-label">퍼포먼스</span>
          <h2 className="performance-title">
            <span className="ko-title">한계를</span>
            <span className="ko-title">넘어서다</span>
          </h2>
          <p className="performance-desc">
            모든 숫자는 단순한 수치가 아닙니다.<br />
            엔지니어링의 결정체입니다.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              ref={el => statsRef.current[index] = el}
            >
              <div className="stat-number">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-unit">{stat.unit}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-desc">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
