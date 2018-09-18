import React, { Component } from "react";
import PropTypes from "prop-types";

export class TasteSlide extends Component {
  render() {
    return (
      <div className={`${this.props.blockName}-Slide`}>
        <div className={`${this.props.blockName}-Icon`}>
          <span
            className={`${this.props.blockName}-Flavor`}
            style={{ backgroundImage: `url(${this.props.data.flavor})` }}
          />
          <span
            className={`${this.props.blockName}-Glow`}
            style={{ backgroundImage: `url(${this.props.data.glow})` }}
          />
          <span className={`${this.props.blockName}-Plus`} />
        </div>
      </div>
    );
  }
}

TasteSlide.propTypes = {
  data: PropTypes.shape({
    flavor: PropTypes.string.isRequired,
    glow: PropTypes.string.isRequired
  })
};
