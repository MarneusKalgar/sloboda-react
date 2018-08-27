import React from 'react';

import logoMob from './logo-mob.png';
import logoDesk from './logo-desk.png';

const logo = props => {
  let logo = null;
  const blockName = 'logo';
  const classNames = `${blockName} ${props.classes}`;

  if (props.config === 'outer') {
    logo = (
      <a className={classNames} href='#'>
        <img className={`${blockName}__img`} src={logoMob} alt='Слобода лого'></img>
      </a>
    )
  } else if (props.config === 'inner') {
    logo = (
      <a className={classNames} href="#">
        <picture>
          <source media='(max-width: 1279px)' srcSet={logoMob} />
          <source media='(max-width: 1280px)' srcSet={logoDesk} />
          <img className={`${blockName}__img`} src={logoMob} alt='Слобода лого' />
        </picture>
      </a>
    )
  }

  return logo;
}

export default logo;