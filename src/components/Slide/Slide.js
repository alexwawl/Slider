import React, { useRef, useEffect, useState } from 'react';
import LazyImage from '../LazyImage';

import './Slide.css';

const Slide = ({ children, translate, transition, color, imageSrc }) => {
  const container = useRef(null);
  const [offsetLeft, updateOffsetLeft] = useState(0);
  const [width, updateWidth] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const parent = container.current.parentElement;
      updateOffsetLeft(parent.offsetLeft);
      updateWidth(parent.offsetWidth);
    }, 0)
  }, []);

  const x = -translate - offsetLeft;
  const coef = 1 - x / width; 


  const style = x >= -1 ? {
    opacity: coef < 0 ? 0 : 1 ,
    transform: `translateX(${x}px) scale(${coef * 0.5 + 0.5})`,
    transition: `${transition}ms`,
  } : {};

  return (
    <div ref={container} style={style} className="sliderWrapper">
      <LazyImage className="content" srcPreloadColor={color} srcLoaded={imageSrc}/>
      <footer className="footer">
        <span className="header">{children}</span>
      </footer>
    </div>
  );
};

export default Slide;