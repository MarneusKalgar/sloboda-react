import React, { Component } from "react";
import Slider from "react-slick";

import TasteSlide from "./TasteSlide/TasteSlide";
import { NextArrow } from "./TasteArrows/TasteArrows";
import { PrevArrow } from "./TasteArrows/TasteArrows";

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

export class TasteSlider extends Component {
  render() {
    const blockName = "TasteSlider";
    const sliderSettings = {
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      easing: "ease",
      className: `${blockName} ${this.props.className}`,
      nextArrow: <NextArrow blockName={blockName} />,
      prevArrow: <PrevArrow blockName={blockName} />,
      asNavFor: this.props.navFor
    };

    return (
      <Slider {...sliderSettings} ref={this.props.refProp}>
        {tasteSlides.map(slide => {
          return (
            <TasteSlide
              key={slide.id}
              blockName={blockName}
              data={slide.data}
            />
          );
        })}
      </Slider>
    );
  }
}
