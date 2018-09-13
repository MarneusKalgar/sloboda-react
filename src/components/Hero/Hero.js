import React, { Component } from 'react';
import Slider from "react-slick";
// import cn from 'classnames';

import HeroSlide from './HeroSlide/HeroSlide';
import { TasteSlider } from '../TasteSlider/TasteSlider';

const heroSlides = [
  {
    id: 0,
    data: {
      bgColor: '#0b1f4f',
      btnColor: '#00b7f4',
      img: 'img/Hero/strong-desk.png',
      first: 'img/Hero/strong-first.png',
      product: 'img/Products/strong-product.png'
    }
  },
  {
    id: 1,
    data: {
      bgColor: '#653715',
      btnColor: '#9ebf34',
      img: 'img/Hero/nut-desk.png',
      first: 'img/Hero/nut-first.png',
      product: 'img/Products/nut-product.png'
    }
  },
  {
    id: 2,
    data: {
      bgColor: '#cb8d29',
      btnColor: '#df7a13',
      img: 'img/Hero/caramel-desk.png',
      first: 'img/Hero/caramel-first.png',
      product: 'img/Products/caramel-product.png'
    }
  },
  {
    id: 3,
    data: {
      bgColor: '#ba1e0d',
      btnColor: '#9c0006',
      img: 'img/Hero/classic-desk.png',
      first: 'img/Hero/classic-first.png',
      product: 'img/Products/classic-product.png'
    }
  }
];

export class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroSlider: null
    };
  }

  componentDidMount() {
    this.setState({
      heroSlider: this.heroSlider
    })
  }

  render() {
    const blockName = 'Hero';
    const sliderSettings = {
      arrows: false,
      draggable: false,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: `${blockName}-Slider`
    };

    return (
      <section className={`${blockName} Section`}>
        <Slider {...sliderSettings} ref={slider => (this.heroSlider = slider)}>
          {heroSlides.map(slide => {
            return <HeroSlide key={slide.id} blockName={blockName} data={slide.data} />
          })}
        </Slider>
        <TasteSlider className={`${blockName}-Tastes`} sliderRef={this.state.heroSlider} />
      </section>
    );
  }
}