import React from 'react';

const button = props => {
  const blockName = 'Button';
  const classNames = `${blockName} ${props.classes}`;
  let button = null;

  if (props.config === 'button') {
    button = <button className={classNames} type="button">{props.children}</button>;
  }

  return button;
};

export default button;