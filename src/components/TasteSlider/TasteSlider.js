import React, { Component } from 'react';
import Slider from "react-slick";

import TasteSlide from './TasteSlide/TasteSlide';

const tasteSlides = [
  {
    id: 0,
    data: {
      flavor: 'img/TasteSlider/strong-icon.png',
      glow: 'img/TasteSlider/strong-glow.png'
    }
  },
  {
    id: 1,
    data: {
      flavor: 'img/TasteSlider/nut-icon.png',
      glow: 'img/TasteSlider/nut-glow.png'
    }
  },
  {
    id: 2,
    data: {
      flavor: 'img/TasteSlider/caramel-icon.png',
      glow: 'img/TasteSlider/caramel-glow.png'
    }
  }
];

const tasteSlider = props => {
  const blockName = 'TasteSlider';
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: `${blockName} ${props.className}`
  };

  return (
    <Slider {...sliderSettings}>
      {tasteSlides.map(slide => {
        return <TasteSlide key={slide.id} blockName={blockName} data={slide.data} />
      })}
    </Slider>
  );
};

export default tasteSlider;