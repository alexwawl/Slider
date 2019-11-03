import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import Slide from '../Slide';
import data from '../../data';

const StickySlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0);

  const params = {
    slidesPerView: 4,
  };

  useEffect(() => {
    if (swiper) {
      /*
        - setTranslate
        Event will be fired when swiper's wrapper change its position.
        Receives current translate value as an arguments
        
        - setTransition
        Event will be fired everytime when swiper starts animation. 
        Receives current transition duration (in ms) as an arguments
      */
      swiper.on('setTransition', (t) => {
        setTransition(t);
      });
      swiper.on('setTranslate', (t) => {
        setTranslate(t);
      });
    }
  }, [swiper]);

  return (
    <Swiper getSwiper={setSwiper} {...params}>
      {data.map((item, idx) => (
        <div key={idx}>
          <Slide
            translate={translate}
            transition={transition}
            color={item.color}
            imageSrc={item.imgSrc}
          >
            {item.title}
          </Slide>
        </div>
      ))}
    </Swiper>
  );
};

export default StickySlider;