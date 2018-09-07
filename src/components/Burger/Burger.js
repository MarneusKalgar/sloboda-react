import React from 'react';
import ReactSVG from 'react-svg';

const burger = props => {
  const blockName = 'Burger';
  const closed = <ReactSVG src="svg/menu.svg" svgStyle={{ width: 25, height: 25 }} />;
  const opened = <ReactSVG src="svg/close.svg" svgStyle={{ width: 25, height: 20 }} />;

  return (
    <button className={`${blockName} ${props.classes}`} type="button" onClick={props.clicked}>
      {props.opened ? closed : opened}
    </button>
  )
}

export default burger;