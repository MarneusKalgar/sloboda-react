import React, { Component } from "react";
import Button from "../../Button/Button";
import ReactSVG from "react-svg";
import PropTypes from "prop-types";

export class HeroSlide extends Component {
  render() {
    return (
      <div
        className={`${this.props.blockName}-Slide`}
        style={{ backgroundColor: `${this.props.data.bgColor}` }}
      >
        <div className={`${this.props.blockName}-Wrap`}>
          <div
            className={`${this.props.blockName}-Img`}
            style={{ backgroundImage: `url(${this.props.data.img})` }}
          />
          <div
            className={`${this.props.blockName}-First`}
            style={{ backgroundImage: `url(${this.props.data.first})` }}
          />
          <div
            className={`${this.props.blockName}-Product`}
            style={{ backgroundImage: `url(${this.props.data.product})` }}
          />
          <button
            className={`${this.props.blockName}-Next`}
            style={{ backgroundColor: `${this.props.data.btnColor}` }}
            onClick={this.props.clicked}
          >
            <ReactSVG src="svg/next.svg" svgStyle={{ width: 16, height: 20 }} />
          </button>
        </div>
        <div className={`${this.props.blockName}-Text`}>
          <h2 className={`${this.props.blockName}-Title`}>для каждого своя!</h2>
          <p className={`${this.props.blockName}-Desc`}>попробуй новинку!</p>
          <Button
            config="button"
            classes={`${this.props.blockName}-Btn`}
            style={{ background: `${this.props.data.btnColor}` }}
          >
            Узнать больше
          </Button>
        </div>
      </div>
    );
  }
}

HeroSlide.propTypes = {
  data: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    btnColor: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired
  })
};
