import React from "react";
import Slider from "react-slick";

import { TasteSlide } from "./TasteSlide/TasteSlide";
import { NextArrow, PrevArrow } from "./TasteArrows/TasteArrows";

const tasteSlides = [
  {
    id: 0,
    data: {
      flavor: "img/TasteSlider/strong-icon.png",
      glow: "img/TasteSlider/strong-glow.png"
    }
  },
  {
    id: 1,
    data: {
      flavor: "img/TasteSlider/nut-icon.png",
      glow: "img/TasteSlider/nut-glow.png"
    }
  },
  {
    id: 2,
    data: {
      flavor: "img/TasteSlider/caramel-icon.png",
      glow: "img/TasteSlider/caramel-glow.png"
    }
  },
  {
    id: 3,
    data: {
      flavor: "img/TasteSlider/classic-icon.png",
      glow: "img/TasteSlider/classic-glow.png"
    }
  }
];

export const TasteSlider = React.forwardRef((props, ref) => {
  const blockName = "TasteSlider";
  const sliderSettings = {
    infinite: true,
    speed: 600,
    easing: "ease",
    slidesToShow: tasteSlides.length,
    className: `${blockName} ${props.className}`,
    nextArrow: <NextArrow blockName={blockName} />,
    prevArrow: <PrevArrow blockName={blockName} />,
    asNavFor: props.navFor,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <Slider {...sliderSettings} ref={ref}>
      {tasteSlides.map(slide => {
        return (
          <TasteSlide key={slide.id} blockName={blockName} data={slide.data} />
        );
      })}
    </Slider>
  );
});
