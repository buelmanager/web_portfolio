import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800&h=1000',
      title: '에티오피아 예가체프',
      origin: 'ETHIOPIA',
      desc: '꽃향기와 시트러스의 밝은 산미',
      price: '24,000',
    },
    {
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800&h=1000',
      title: '콜롬비아 수프리모',
      origin: 'COLOMBIA',
      desc: '견과류와 카라멜의 균형잡힌 바디',
      price: '22,000',
    },
    {
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800&h=1000',
      title: '케냐 AA',
      origin: 'KENYA',
      desc: '와인같은 풍부함과 베리향',
      price: '26,000',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Staggered card reveal
    cards.forEach((card, index) => {
      if (!card) return;

      const image = card.querySelector('.product-image');
      const content = card.querySelector('.product-content');

      // Card reveal
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image scale on hover parallax
      gsap.fromTo(image,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
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
    <section className="product-showcase" ref={sectionRef}>
      <div className="showcase-header">
        <div className="showcase-label">
          <span className="label-number">02</span>
          <span className="label-text">원두</span>
        </div>
        <h2 className="showcase-title">싱글 오리진</h2>
        <p className="showcase-desc">
          산지의 떼루아가 담긴 단일 원산지 원두.
          각각의 개성이 온전히 드러납니다.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <article
            key={index}
            className="product-card"
            ref={el => cardsRef.current[index] = el}
            data-cursor="살펴보기"
          >
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-content">
              <span className="product-origin">{product.origin}</span>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <span className="product-price">₩{product.price}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="showcase-cta">
        <a href="#" className="cta-link">
          <span>전체 원두 보기</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ProductShowcase;
