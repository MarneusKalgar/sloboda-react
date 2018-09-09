import React from 'react';
import Button from '../../Button/Button';

const heroSlide = props => {
  return (
    <div className={`${props.blockName}-Slide`}>
      <div className={`${props.blockName}-Wrap`}>
        <div className={`${props.blockName}-Img`} style={{ backgroundImage: `url(${props.data.img})` }}></div>
        <div className={`${props.blockName}-First`} style={{ backgroundImage: `url(${props.data.first})` }}></div>
        <div className={`${props.blockName}-Product`} style={{ backgroundImage: `url(${props.data.product})` }}></div>
      </div>
      <div className={`${props.blockName}-Text`}>
        <h2 className={`${props.blockName}-Title`}>для каждого своя!</h2>
        <p className={`${props.blockName}-Desc`}>попробуй новинку!</p>
        <Button config='button' classes={`${props.blockName}-Btn`}>Узнать больше</Button>
      </div>
    </div>
  );
};

export default heroSlide;