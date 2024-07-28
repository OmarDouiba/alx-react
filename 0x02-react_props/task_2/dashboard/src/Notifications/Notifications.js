import React from "react";
import "../Notifications/Notifications.css";
import Icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

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
        <NotificationItem type={"default"} value={"New course available"} />
        <NotificationItem type={"urgent"} value={"New resume available"} />
        <NotificationItem
          type={"urgent"}
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
