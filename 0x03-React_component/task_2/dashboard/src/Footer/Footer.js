import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

function Footer() {
  return (
    <>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </>
  );
}

export default Footer;
