import React from 'react';

const button = props => {
  const blockName = 'btn';
  let classNames = null;
  let button = null;

  if (props.mode) {
    classNames = `${blockName} ${blockName}--${props.mode} ${props.classes}`;
  } else {
    classNames = `${blockName} ${props.classes}`;
  }

  if (props.config === 'button') {
    button = <button className={classNames} type="button">{props.text}</button>
  }

  return button;
};

export default button;