import React from "react";
import CloseIcon from "../assets/close-icon.png";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

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
        <NotificationItem
          data-priority="default"
          value="New course available"
        />
        <NotificationItem data-priority="urgent" value="New resume available" />
        <NotificationItem
          data-priority="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
