import React from 'react';

const items = [
  {
    key: 0,
    name: 'О бренде'
  },
  {
    key: 1,
    name: 'Продукция'
  },
  {
    key: 2,
    name: 'Контакты'
  }
];

const navigation = props => {
  const blockName = 'Nav';
  const classNames = `${blockName} ${props.classes}`;

  return (
    <nav className={classNames}>
      <ul className={`${blockName}-List`}>
        {items.map(item => {
          return (
            <li className={`${blockName}-Item`} key={item.key}>
              <a className={`${blockName}-Link`} href="#">{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default navigation;