import React, { Component } from "react";
import Icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    border: '0.1rem dashed #e0354b',
    padding: '1rem 1rem',
    fontWeight: '600',
    width: '25rem',
    position: 'absolute',
    right: '0.5em',
  },
  
  li[data-notification-type="default"]: {
    color: '#2b166d',
  },
  
  li[data-notification-type="urgent"]: {
    color: '#ff0200',
  },
  
  menuItem: {
    textAlign: 'right',
  }
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
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
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};
export default Notifications;
