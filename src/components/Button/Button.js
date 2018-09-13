import React from 'react';

const button = props => {
  const blockName = 'Button';
  const classNames = `${blockName} ${props.classes}`;
  let button = null;

  switch (props.config) {
    case 'button':
      button = (
        <button
          className={classNames}
          style={props.style}
          onClick={props.clicked}
          type="button"
        >{props.children}</button>);
      break;
    default:
      button = null;
  }

  return button;
};

export default button;