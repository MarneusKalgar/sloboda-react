import React from 'react';
import ReactSVG from 'react-svg';

const burger = props => {
  const blockName = 'Burger';
  const classNames = `${blockName} ${props.classes}`;
  let content = null;

  if (props.opened) {
    content = <ReactSVG src="svg/menu.svg" svgStyle={{ width: 20, height: 25 }} />;
  } else {
    content = <ReactSVG src="svg/close.svg" svgStyle={{ width: 20, height: 20 }} />;
  }

  return (
    <button className={classNames} type="button" onClick={props.clicked}>
      {content}
      {/* <ReactSVG src="svg/menu.svg" svgStyle={{ width: 20, height: 25 }} />
      <ReactSVG src="svg/close.svg" svgStyle={{ width: 20, height: 20 }} /> */}
    </button>
  )
}

export default burger;