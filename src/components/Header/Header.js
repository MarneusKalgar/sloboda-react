import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import Navigation from '../Navigation/Navigation';
import Socials from '../Socials/Socials';
import Button from '../Button/Button';

export class Header extends Component {
  render() {
    const blockName = 'Header';
    return (
      <header className={`${blockName} App-${blockName}`}>
        <Logo config='outer' classes={`${blockName}-Logo ${blockName}-Logo_outer`} />

        <Burger classes={`${blockName}-Burger`} />

        <div className={`${blockName}-Wrap`}>

          <Logo config='inner' classes={`${blockName}-Logo ${blockName}-Logo_inner`} />

          <Navigation classes={`${blockName}-Nav`} />

          <Button config='button' mode='light' classes={`${blockName}-Btn`}>Купить</Button>

          <Socials />

          {/* <button className="btn btn--light header__btn toggle-shops" type="button">Купить</button> */}
        </div>
      </header>
    )
  }
}