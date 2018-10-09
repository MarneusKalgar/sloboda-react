import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

const data = {
  heroSlides: [
    {
      id: 0,
      data: {
        bgColor: "#0b1f4f",
        btnColor: "#00b7f4",
        img: "img/Hero/strong-desk.png",
        first: "img/Hero/strong-first.png",
        product: "img/Products/strong-product.png"
      }
    },
    {
      id: 1,
      data: {
        bgColor: "#653715",
        btnColor: "#9ebf34",
        img: "img/Hero/nut-desk.png",
        first: "img/Hero/nut-first.png",
        product: "img/Products/nut-product.png"
      }
    },
    {
      id: 2,
      data: {
        bgColor: "#cb8d29",
        btnColor: "#df7a13",
        img: "img/Hero/caramel-desk.png",
        first: "img/Hero/caramel-first.png",
        product: "img/Products/caramel-product.png"
      }
    },
    {
      id: 3,
      data: {
        bgColor: "#ba1e0d",
        btnColor: "#9c0006",
        img: "img/Hero/classic-desk.png",
        first: "img/Hero/classic-first.png",
        product: "img/Products/classic-product.png"
      }
    }
  ],
  tasteSlides: [
    {
      id: 0,
      data: {
        flavor: "img/TasteSlider/strong-icon.png",
        glow: "img/TasteSlider/strong-glow.png",
        ellipse: "img/TasteSlider/strong-ellipse.png"
      }
    },
    {
      id: 1,
      data: {
        flavor: "img/TasteSlider/nut-icon.png",
        glow: "img/TasteSlider/nut-glow.png",
        ellipse: "img/TasteSlider/nut-ellipse.png"
      }
    },
    {
      id: 2,
      data: {
        flavor: "img/TasteSlider/caramel-icon.png",
        glow: "img/TasteSlider/caramel-glow.png",
        ellipse: "img/TasteSlider/caramel-ellipse.png"
      }
    },
    {
      id: 3,
      data: {
        flavor: "img/TasteSlider/classic-icon.png",
        glow: "img/TasteSlider/classic-glow.png",
        ellipse: "img/TasteSlider/classic-ellipse.png"
      }
    }
  ]
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: null,
      btnColor: null
    };
  }

  toggleColors = () => {};

  render() {
    return (
      <div className="App">
        <Header bgColor={this.state.bgColor} btnColor={this.state.btnColor} />
        <Hero
          data={data}
          bgColor={this.state.bgColor}
          btnColor={this.state.btnColor}
          toggleColors={this.state.toggleColors}
        />
      </div>
    );
  }
}
