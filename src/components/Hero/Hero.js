import React, { Component } from "react";
import Slider from "react-slick";
// import cn from 'classnames';
// import PropTypes from "prop-types";

import { HeroSlide } from "./HeroSlide/HeroSlide";
import { TasteSlider } from "../TasteSlider/TasteSlider";

export class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroSlider: null,
      tasteSlider: null
    };
  }

  componentDidMount() {
    this.setState({
      heroSlider: this.heroSlider,
      tasteSlider: this.tasteSlider
    });
  }

  toggleNext = () => {
    this.heroSlider.slickNext();
  };

  render() {
    const blockName = "Hero";
    const sliderSettings = {
      arrows: false,
      draggable: false,
      fade: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: `${blockName}-Slider`,
      asNavFor: this.state.tasteSlider
    };

    return (
      <section className={`${blockName} Section`}>
        <Slider {...sliderSettings} ref={slider => (this.heroSlider = slider)}>
          {this.props.data.heroSlides.map(slide => {
            return (
              <HeroSlide
                key={slide.id}
                blockName={blockName}
                data={slide.data}
                clicked={this.toggleNext}
              />
            );
          })}
        </Slider>
        <TasteSlider
          data={this.props.data.tasteSlides}
          className={`${blockName}-Tastes`}
          navFor={this.state.heroSlider}
          ref={slider => (this.tasteSlider = slider)}
        />
      </section>
    );
  }
}
