import React from 'react';

const burger = props => {
  const blockName = 'burger';
  const classNames = `${blockName} ${props.classes}`;

  return (
    <button className={classNames} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 23" className={`${blockName}__icon ${blockName}__icon--burger`} width="20" height="20" >
        <path d="M1.1 6.9h13.3M1.1 1h19.8M1.1 12.8h19.8"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 23" className={`${blockName}__icon ${blockName}__icon--close`} width="20" height="20">
        <path d="M1.4 2.2l10 9.5-10 9.5"></path>
        <path d="M21.3 2.2l-10 9.5 10 9.5"></path>
      </svg>
    </button>
  )
}

export default burger;