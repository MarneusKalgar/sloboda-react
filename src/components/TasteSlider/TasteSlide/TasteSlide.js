import React from 'react';

const tasteSlide = props => {
  return (
    <div className={`${props.blockName}-Slide`}>
      <div className={`${props.blockName}-Icon`}>
        <span className={`${props.blockName}-Flavor`} style={{ backgroundImage: `url(${props.data.flavor})` }}></span>
        <span className={`${props.blockName}-Glow`} style={{ backgroundImage: `url(${props.data.glow})` }}></span>
        <span className={`${props.blockName}-Plus`}></span>
      </div>
    </div>
  )
};

export default tasteSlide;

// +e.icon
//         +e.SPAN.flavor(style="background-image: url('assets/img/hero/" + item.class + "-icon.png')")
//         +e.SPAN.glow(style="background-image: url('assets/img/hero/" + item.class + "-glow.png')")
//         +e.SPAN.plus
//           svg(width="16", height="16"): use(xlink:href="#plus")
//         +e.SPAN.action.action Выбери вкус