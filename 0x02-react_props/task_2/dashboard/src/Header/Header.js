import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <>
      <img src={logo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </>
  );
}

export default Header;
