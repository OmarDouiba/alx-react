import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <>
      <img
        src={logo}
        className={css(styles.appHeaderImg)}
        alt="Holberton Logo"
      />
      <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
    </>
  );
}

const styles = StyleSheet.create({
  appHeaderImg: {
    width: "250px",
  },
  appHeaderH1: {
    color: "#e0354b",
    fontSize: "2.7rem",
    fontWeight: "700",
  },
});

export default Header;
