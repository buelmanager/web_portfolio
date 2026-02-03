import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalSection.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const slidesRef = useRef([]);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200&h=800',
      title: '공기역학',
      subtitle: 'Aerodynamics',
      desc: '바람을 가르는 완벽한 곡선',
    },
    {
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200&h=800',
      title: '섀시',
      subtitle: 'Chassis',
      desc: '경량 알루미늄 스페이스프레임',
    },
    {
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1200&h=800',
      title: '파워트레인',
      subtitle: 'Powertrain',
      desc: '듀얼 모터 전기 구동계',
    },
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200&h=800',
      title: '인테리어',
      subtitle: 'Interior',
      desc: '운전자 중심의 콕핏 설계',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const slides = slidesRef.current;

    // Horizontal scroll
    const totalWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -totalWidth,
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

    // Individual slide animations
    slides.forEach((slide, index) => {
      if (!slide) return;

      const image = slide.querySelector('.slide-image');
      const content = slide.querySelector('.slide-content');

      // Parallax for images within horizontal scroll
      gsap.fromTo(image,
        { x: 100 },
        {
          x: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: slide,
            containerAnimation: gsap.getById ? undefined : undefined,
            start: 'left right',
            end: 'right left',
            scrub: 1,
            horizontal: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="horizontal-section" ref={sectionRef}>
      <div className="horizontal-header">
        <span className="horizontal-label">기술</span>
        <h2 className="horizontal-title">
          <span className="en-title">ENGINEERING</span>
          <span className="ko-title">엔지니어링의 정수</span>
        </h2>
      </div>

      <div className="horizontal-track" ref={trackRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="horizontal-slide"
            ref={el => slidesRef.current[index] = el}
          >
            <div className="slide-image-wrapper">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-overlay"></div>
            </div>

            <div className="slide-content">
              <span className="slide-index">0{index + 1}</span>
              <div className="slide-text">
                <span className="slide-subtitle">{slide.subtitle}</span>
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-desc">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="horizontal-progress">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <span className="progress-text">스크롤하여 탐색</span>
      </div>
    </section>
  );
};

export default HorizontalSection;
