import React, { useEffect, useState } from 'react';
// import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="scroll-indicator-bar" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;