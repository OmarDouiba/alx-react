import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  appFooterP: {
    fontSize: "1.2rem",
    fontStyle: "italic",
  },
});

function Footer() {
  return (
    <>
      <p className={css(styles.appFooterP)}>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </>
  );
}

export default Footer;
