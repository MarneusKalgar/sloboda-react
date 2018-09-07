import React from 'react';

const navigation = props => {
  const blockName = 'Navigation';
  const classNames = `${blockName} ${props.classes}`;

  return (
    <nav className={classNames}>
      <ul className={`${blockName}-List`}>
        {props.links.map(link => {
          return (
            <li className={`${blockName}-Item`} key={link.key}>
              <a className={`${blockName}-Link`} href="#">{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default navigation;