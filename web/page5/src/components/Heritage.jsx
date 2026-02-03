import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Heritage.css';

gsap.registerPlugin(ScrollTrigger);

const Heritage = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Image reveal with diagonal mask
    gsap.fromTo(image,
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text reveal
    const words = text.querySelectorAll('.heritage-word');
    gsap.fromTo(words,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="heritage" ref={sectionRef}>
      <div className="heritage-content">
        <div className="heritage-image-col">
          <div className="heritage-image-wrapper" ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000&h=1400"
              alt="Heritage"
              className="heritage-image"
            />
          </div>
        </div>

        <div className="heritage-text-col" ref={textRef}>
          <span className="heritage-label">헤리티지</span>
          <h2 className="heritage-title">
            <span className="heritage-word">전통과</span>{' '}
            <span className="heritage-word">혁신의</span><br />
            <span className="heritage-word heritage-word-accent">긴장감</span>
          </h2>
          <div className="heritage-desc">
            <p className="heritage-word">
              50년의 역사 속에서 우리는 끊임없이 질문했습니다.
            </p>
            <p className="heritage-word">
              더 빠르게, 더 정밀하게, 더 아름답게.
            </p>
            <p className="heritage-word">
              그 답은 언제나 도로 위에 있었습니다.
            </p>
          </div>

          <div className="heritage-timeline">
            <div className="timeline-item heritage-word">
              <span className="timeline-year">1974</span>
              <span className="timeline-event">브랜드 설립</span>
            </div>
            <div className="timeline-item heritage-word">
              <span className="timeline-year">1995</span>
              <span className="timeline-event">첫 스포츠카 출시</span>
            </div>
            <div className="timeline-item heritage-word">
              <span className="timeline-year">2020</span>
              <span className="timeline-event">전기차 시대 개막</span>
            </div>
            <div className="timeline-item heritage-word">
              <span className="timeline-year">2024</span>
              <span className="timeline-event">GT-S 글로벌 론칭</span>
            </div>
          </div>

          <a href="#" className="heritage-link heritage-word">
            <span>브랜드 스토리</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
