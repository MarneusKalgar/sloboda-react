import React from 'react';
import ReactSVG from 'react-svg';

const socials = props => {
  const blockName = 'Socials';

  return (
    <div className={`${blockName} ${props.classes}`}>
      <ul className={`${blockName}-List`}>
        {props.links.map(link => {
          return (
            <li className={`${blockName}-Item`} key={link.id}>
              <a className={`${blockName}-Btn`} href={link.href} target="_blank" rel="noopener noreferrer">
                <ReactSVG src={link.src} svgStyle={{ width: 25, height: 25 }} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default socials;
