import { useCustomCursor } from '../hooks/useCustomCursor';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useCustomCursor();

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.04922 10.0199L2.88766 15.3407L0.408266 -0.000225568L13.5709 8.26022L7.04922 10.0199Z" fill="#907533"></path>
      </svg>
    </div>
  );
};

export default CustomCursor;
