import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
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
