import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import "./BodySectionWithMarginBottom.css";

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
  children: null,
};

export default BodySectionWithMarginBottom;
