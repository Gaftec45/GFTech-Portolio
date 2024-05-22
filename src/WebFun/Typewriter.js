import React, { useEffect, useState } from 'react';

const Typewriter = ({ texts, speed = 80, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [typing, setTyping] = useState(true); // true for typing, false for deleting
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (subIndex < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(texts[currentTextIndex].substring(0, subIndex + 1));
          setSubIndex(subIndex + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, delay);
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(texts[currentTextIndex].substring(0, subIndex - 1));
          setSubIndex(subIndex - 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, typing, texts, speed, delay, currentTextIndex]);

  return (
    <div className="typewrite">
        <h1>I'm, {displayedText}</h1>
    </div> 
  )
};

export default Typewriter;