import React from "react";
import Button from "../../Button/Button";
import ReactSVG from "react-svg";

const heroSlide = props => {
  return (
    <div
      className={`${props.blockName}-Slide`}
      style={{ backgroundColor: `${props.data.bgColor}` }}
    >
      <div className={`${props.blockName}-Wrap`}>
        <div
          className={`${props.blockName}-Img`}
          style={{ backgroundImage: `url(${props.data.img})` }}
        />
        <div
          className={`${props.blockName}-First`}
          style={{ backgroundImage: `url(${props.data.first})` }}
        />
        <div
          className={`${props.blockName}-Product`}
          style={{ backgroundImage: `url(${props.data.product})` }}
        />
        <button
          className={`${props.blockName}-Next`}
          style={{ backgroundColor: `${props.data.btnColor}` }}
          onClick={props.clicked}
        >
          <ReactSVG src="svg/next.svg" svgStyle={{ width: 16, height: 20 }} />
        </button>
      </div>
      <div className={`${props.blockName}-Text`}>
        <h2 className={`${props.blockName}-Title`}>для каждого своя!</h2>
        <p className={`${props.blockName}-Desc`}>попробуй новинку!</p>
        <Button
          config="button"
          classes={`${props.blockName}-Btn`}
          style={{ background: `${props.data.btnColor}` }}
        >
          Узнать больше
        </Button>
      </div>
    </div>
  );
};

export default heroSlide;
