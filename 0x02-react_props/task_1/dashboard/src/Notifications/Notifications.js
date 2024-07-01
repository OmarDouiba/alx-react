import React from "react";
import CloseIcon from "../assets/close-icon.png";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        style={{
          position: "absolute",
          background: "transparent",
          border: "none",
          right: 15,
        }}
        onClick={() => {
          console.log("Close button has been clicked");
        }}
      >
        <img
          src={CloseIcon}
          alt="close"
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li className="item-list" data-priority="default">
          New course available
        </li>
        <li className="item-list" data-priority="urgent">
          New resume available
        </li>
        <li
          className="item-list"
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
