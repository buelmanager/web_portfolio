import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows immediately
      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      // Smooth follow for outer cursor
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    // Handle hover states
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.dataset.cursor) {
        setCursorText(target.dataset.cursor);
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setCursorText('');
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // Add listeners to all elements with data-cursor attribute
    const cursorElements = document.querySelectorAll('[data-cursor]');
    cursorElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursorElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        ref={cursorRef}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
      <div className="cursor-dot" ref={cursorDotRef}></div>
    </>
  );
};

export default CustomCursor;
