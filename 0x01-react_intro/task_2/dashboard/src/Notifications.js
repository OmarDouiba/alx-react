import React from "react";
import "./Notifications.css";
import Icon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          display: "inline",
          position: "absolute",
          right: "1rem",
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
        aria-label="Close"
        onClick={() => {
          console.log("Close button has been clicked");
        }}
      >
        <img src={Icon} style={{ width: "20px" }} alt="Close Icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
