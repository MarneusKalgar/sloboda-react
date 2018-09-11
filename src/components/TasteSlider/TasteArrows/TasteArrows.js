import React from 'react';
import ReactSVG from 'react-svg';

const NextArrow = props => {
  return (
    <button className={`${props.blockName}-Arrow ${props.blockName}-Arrow_next`} onClick={props.onClick}>
      <ReactSVG src='svg/next.svg' svgStyle={{ width: 16, height: 20 }} />
    </button>
  );
};

const PrevArrow = props => {
  return (
    <button className={`${props.blockName}-Arrow ${props.blockName}-Arrow_prev`} onClick={props.onClick}>
      <ReactSVG src='svg/prev.svg' svgStyle={{ width: 16, height: 20 }} />
    </button>
  );
};

export { NextArrow };
export { PrevArrow };