import React from 'react';
import ReactSVG from 'react-svg';
import cn from 'classnames';

const burger = props => {
  const blockName = 'Burger';
  const classes = cn(`${blockName}`, props.classes, {
    [`${blockName}_clicked`]: !props.opened
  });

  return (
    <button className={classes} type="button" onClick={props.clicked}>
      <ReactSVG
        src='svg/menu.svg'
        svgStyle={{ width: 25, height: 25 }}
        svgClassName={`${blockName}-Icon ${blockName}-Icon_burger`}
      />
      <ReactSVG
        src='svg/close.svg'
        svgStyle={{ width: 25, height: 20 }}
        svgClassName={`${blockName}-Icon ${blockName}-Icon_close`}
      />
    </button>
  )
}

export default burger;