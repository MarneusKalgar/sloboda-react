import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import Navigation from '../Navigation/Navigation';
import Socials from '../Socials/Socials';
import Button from '../Button/Button';

const navLinks = [
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

const socialLinks = [
  {
    id: 1,
    href: 'https://www.youtube.com/channel/UCZBA_H4oCN6E2Q5Q6AIme4A',
    src: 'svg/youtube.svg'
  },
  {
    id: 2,
    href: 'https://www.facebook.com/slobodaukraine/',
    src: 'svg/facebook.svg'
  },
  {
    id: 3,
    href: 'https://www.instagram.com/slobodaukraineinsta/',
    src: 'svg/instagram.svg'
  }
];

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

    return (
      <header className={`${blockName} App-${blockName}`}>

        <Logo 
          config='outer'
          classes={`${blockName}-Logo ${blockName}-Logo_outer`}
        />

        <Burger
          classes={`${blockName}-Burger`}
          clicked={this.menuToggleHandler}
          opened={!this.state.menuOpened}
        />

        <div className={this.state.menuOpened ? `${blockName}-Wrap ${blockName}-Wrap_active` : `${blockName}-Wrap`}>
          <Logo 
            config='inner' 
            classes={`${blockName}-Logo ${blockName}-Logo_inner`}
          />
          <Navigation 
            classes={`${blockName}-Nav`}
            links={navLinks}
          />
          <Button 
            config='button'
            classes={`Button_light ${blockName}-Btn`}
          >Купить</Button>
          <Socials 
            classes={`${blockName}-Socials`}
            links={socialLinks}
          />
        </div>
      </header>
    )
  }
}