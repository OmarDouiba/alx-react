import React from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";

function Footer() {
  return (
    <>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </>
  );
}

export default Footer;
