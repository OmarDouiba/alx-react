import React from "react";
import "../Notifications/Notifications.css";
import Icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
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
          {listNotifications.length !== 0 ? (
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          ) : (
            <li>No new notification for now</li>
          )}
        </div>
      )}
    </>
  );
}

Notifications.prototype = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};
export default Notifications;
