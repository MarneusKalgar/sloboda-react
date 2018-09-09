import React, { Component } from 'react';
import Slider from "react-slick";
// import cn from 'classnames';

import HeroSlide from './HeroSlide/HeroSlide';

const heroSlides = [
  {
    id: 0,
    data: {
      img: 'img/Hero/strong-desk.png',
      first: 'img/Hero/strong-first.png',
      product: 'img/Products/strong-product.png'
    }
  },
  {
    id: 1,
    data: {
      img: 'img/Hero/nut-desk.png',
      first: 'img/Hero/nut-first.png',
      product: 'img/Products/nut-product.png'
    }
  },
  {
    id: 2,
    data: {
      img: 'img/Hero/caramel-desk.png',
      first: 'img/Hero/caramel-first.png',
      product: 'img/Products/caramel-product.png'
    }
  }
];

export class Hero extends Component {

  render() {
    const blockName = 'Hero';

    return (
      <section className={`${blockName} Section`}>
        <div className={`${blockName}-Slider`}>
          {heroSlides.map(slide => {
            return <HeroSlide key={slide.id} blockName={blockName} data={slide.data} />
          })}
        </div>

      </section>
    );
  }
}