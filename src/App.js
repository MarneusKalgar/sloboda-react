import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  }
}
