import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import Navigation from '../Navigation/Navigation';
import Socials from '../Socials/Socials';
import Button from '../Button/Button';

export class Header extends Component {
  state = {
    menuOpened: false
  };

  menuToggleHandler = () => {
    this.setState(prevState => {
      return { menuOpened: !this.state.menuOpened };
    })
  }

  render() {
    const blockName = 'Header';
    let wrapClass = null;

    if (this.state.menuOpened) {
      wrapClass = `${blockName}-Wrap ${blockName}-Wrap_active`;
    } else {
      wrapClass = `${blockName}-Wrap`;
    }
    return (
      <header className={`${blockName} App-${blockName}`}>
        <Logo config='outer' classes={`${blockName}-Logo ${blockName}-Logo_outer`} />

        <Burger
          classes={`${blockName}-Burger`}
          clicked={this.menuToggleHandler}
          opened={!this.state.menuOpened}
        />

        <div className={wrapClass}>
          <Logo config='inner' classes={`${blockName}-Logo ${blockName}-Logo_inner`} />
          <Navigation classes={`${blockName}-Nav`} />
          <Button config='button' classes={`${blockName}-Btn`}>Купить</Button>
          <Socials />

          {/* <button className="btn btn--light header__btn toggle-shops" type="button">Купить</button> */}
        </div>
      </header>
    )
  }
}