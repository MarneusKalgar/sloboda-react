import React, { Component } from 'react';
import logoMob from './logo-mob.png';
import logoDesk from './logo-desk.png';

export class Header extends Component {
  render() {
    return (
      <header className='header app__header'>
        <a className='logo header__logo header__logo--outer' href='#'>
          <img className='logo__img' src={logoMob} alt='Слобода лого'></img>
        </a>
        <button className="burger header__burger" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 23" className="burger__icon burger__icon--burger" width="20" height="20" >
            <path d="M1.1 6.9h13.3M1.1 1h19.8M1.1 12.8h19.8"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 23" className="burger__icon burger__icon--close" width="20" height="20">
            <path d="M1.4 2.2l10 9.5-10 9.5"></path>
            <path d="M21.3 2.2l-10 9.5 10 9.5"></path>
          </svg>
        </button>
        <div className="header__wrap">
          <a className="logo header__logo header__logo--inner" href="/">
            <picture>
              <source media="(max-width: 1279px)" srcset={logoMob} />
              <source media="(max-width: 1280px)" srcset={logoDesk} />
              <img className="logo__img" src={logoMob} alt="Слобода лого" />
            </picture>
          </a>
          <nav className="nav header__nav">
            <ul className="nav__list">
              <li className="nav__item"><a className="nav__link" href="about.html">О бренде</a></li>
              <li className="nav__item"><a className="nav__link" href="beverage-3in1.html">Продукция</a></li>
              <li className="nav__item"><a className="nav__link" href="contacts.html">Контакты</a></li>
            </ul>
          </nav>
          <button className="btn btn--light header__btn toggle-shops" type="button">Купить</button>
          <div className="socials header__socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a className="socials__btn" href="https://www.youtube.com/channel/UCZBA_H4oCN6E2Q5Q6AIme4A" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="30" height="30">
                    <path d="M70.939 65.832H66l.023-2.869a2.329 2.329 0 0 1 2.326-2.318h.315a2.332 2.332 0 0 1 2.332 2.318l-.057 2.869zm-18.526-6.148c-1.253 0-2.278.842-2.278 1.873V75.51c0 1.029 1.025 1.869 2.278 1.869 1.258 0 2.284-.84 2.284-1.869V61.557c0-1.032-1.026-1.873-2.284-1.873zM82.5 51.879v26.544C82.5 84.79 76.979 90 70.23 90H19.771C13.02 90 7.5 84.79 7.5 78.423V51.879c0-6.367 5.52-11.578 12.271-11.578H70.23c6.749 0 12.27 5.211 12.27 11.578zM23.137 81.305l-.004-27.961 6.255.002v-4.143l-16.674-.025v4.073l5.205.015v28.039h5.218zm18.75-23.796h-5.215V72.44c0 2.16.131 3.24-.008 3.621-.424 1.158-2.33 2.388-3.073.125-.126-.396-.015-1.591-.017-3.643l-.021-15.034h-5.186l.016 14.798c.004 2.268-.051 3.959.018 4.729.127 1.357.082 2.939 1.341 3.843 2.346 1.69 6.843-.252 7.968-2.668l-.01 3.083 4.188.005-.001-23.79zM58.57 74.607l-.011-12.427c-.004-4.736-3.547-7.572-8.356-3.74l.021-9.239-5.209.008-.025 31.89 4.284-.062.39-1.986c5.473 5.021 8.914 1.58 8.906-4.444zm16.321-1.647l-3.91.021c-.002.155-.008.334-.01.529v2.182c0 1.168-.965 2.119-2.137 2.119h-.766c-1.174 0-2.139-.951-2.139-2.119v-5.739h8.954v-3.37c0-2.463-.063-4.925-.267-6.333-.641-4.454-6.893-5.161-10.051-2.881a5.887 5.887 0 0 0-2.188 2.945c-.444 1.281-.665 3.031-.665 5.254v7.41c.002 12.318 14.964 10.577 13.179-.018zM54.833 32.732a3.55 3.55 0 0 0 1.254 1.584c.56.394 1.276.592 2.134.592.752 0 1.418-.203 1.998-.622.578-.417 1.065-1.04 1.463-1.871l-.099 2.046h5.813V9.74H62.82v19.24a1.907 1.907 0 0 1-3.811 0V9.74h-4.776v16.674c0 2.124.039 3.54.102 4.258.065.713.229 1.397.498 2.06zM37.217 18.77c0-2.373.198-4.226.591-5.562.396-1.331 1.107-2.401 2.137-3.208 1.027-.811 2.342-1.217 3.941-1.217 1.345 0 2.497.264 3.459.781.967.52 1.713 1.195 2.23 2.028a8 8 0 0 1 1.076 2.574c.195.891.291 2.235.291 4.048v6.252c0 2.293-.092 3.98-.271 5.051a8.006 8.006 0 0 1-1.146 3.004c-.58.924-1.329 1.615-2.237 2.056-.918.445-1.968.663-3.154.663-1.325 0-2.441-.183-3.361-.565-.923-.38-1.636-.953-2.144-1.714-.513-.762-.874-1.69-1.092-2.772-.219-1.081-.323-2.707-.323-4.874l.003-6.545zm4.553 9.82c0 1.4 1.042 2.543 2.311 2.543 1.27 0 2.308-1.143 2.308-2.543V15.43c0-1.398-1.038-2.541-2.308-2.541-1.269 0-2.311 1.143-2.311 2.541v13.16zm-16.088 6.645h5.484l.006-18.96L37.652.033h-5.998l-3.445 12.064L24.715 0h-5.936l6.894 16.284.009 18.951z"></path>
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__btn" viewBox="0 0 60.734 60.733" href="https://www.facebook.com/slobodaukraine/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                    <path d="M57.378.001H3.352A3.352 3.352 0 0 0 0 3.353v54.026a3.353 3.353 0 0 0 3.352 3.354h29.086V37.214h-7.914v-9.167h7.914v-6.76c0-7.843 4.789-12.116 11.787-12.116 3.355 0 6.232.251 7.071.36v8.198l-4.854.002c-3.805 0-4.539 1.809-4.539 4.462v5.851h9.078l-1.187 9.166h-7.892v23.52h15.475a3.355 3.355 0 0 0 3.355-3.351V3.351a3.352 3.352 0 0 0-3.354-3.35z"></path>
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__btn" viewBox="0 0 458.867 458.867" href="https://www.instagram.com/slobodaukraineinsta/ " target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                    <path d="M404.75.027H55.731C25.664.027 0 28.27 0 58.245V407.49c0 29.965 25.664 51.351 55.731 51.351H404.75c30.066 0 54.117-21.386 54.117-51.351V58.245c0-29.975-24.051-58.218-54.117-58.218zM393.955 65.57c8.699 0 15.752 7.053 15.752 15.752v50.436c0 8.699-7.053 15.752-15.752 15.752h-50.443c-8.699 0-15.752-7.053-15.752-15.752V81.322c0-8.699 7.053-15.752 15.752-15.752h50.443zm-163.184 79.999c48.631 0 88.05 39.334 88.05 87.832 0 48.506-39.419 87.839-88.05 87.839-48.622 0-88.05-39.333-88.05-87.839 0-48.498 39.427-87.832 88.05-87.832zm178.936 250.207c0 7.046-7.489 13.912-14.559 13.912H66.407c-7.067 0-17.246-6.866-17.246-13.912V196.663h47.282c-3.219 16.391-4.956 24.035-4.956 36.738 0 76.617 62.479 138.934 139.283 138.934 76.811 0 139.292-62.332 139.292-138.949 0-12.688-1.738-20.332-4.941-36.723h44.586v199.113z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}