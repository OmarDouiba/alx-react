import React, { Component } from "react";
import PropTypes from "prop-types";

class BodySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, children } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySection.defaultProps = {
  title: "",
  children: null,
};

export default BodySection;
