import React from "react";
import Slider from "react-slick";

import { TasteSlide } from "./TasteSlide/TasteSlide";
import { NextArrow, PrevArrow } from "./TasteArrows/TasteArrows";

export const TasteSlider = React.forwardRef((props, ref) => {
  const blockName = "TasteSlider";
  const sliderSettings = {
    infinite: true,
    speed: 600,
    easing: "ease",
    slidesToShow: props.data.length,
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
      {props.data.map(slide => {
        return (
          <TasteSlide key={slide.id} blockName={blockName} data={slide.data} />
        );
      })}
    </Slider>
  );
});
