import React, { Component } from "react";
import Icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const opacity = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateY = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  notifications: {
    fontFamily: "Arial, Helvetica, sans-serif",
    border: "2px dashed #e1354b",
    paddingRight: "20px 5px",
    margin: "5px",
    position: "fixed",
    right: "1%",
    left: "65%",
    "@media (max-width: 900px)": {
      display: "block",
      background: "white",
      fontSize: "20px",
      width: "100vw",
      height: "100vh",
      border: "none",
      listStyle: "none",
      padding: 0,
      margin: 0,
      top: 0,
      right: 0,
      left: 0,
    },
  },

  menuItem: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    padding: "5px",
    paddingRight: "20px",
    backgroundColor: "#fff8f8",
    display: "inline-block",
    position: "absolute",
    right: "0.25rem",
    ":hover": {
      cursor: "pointer",
      animationName: [opacity, translateY],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  ulStyle: {
    "@media (max-width: 900px)": {
      marginLeft: "-2rem",
    },
  },

  notificationsButton: {
    width: "20px",
    border: "none",
    background: "none",
    cursor: "pointer",
  },

  noDisplay: {
    display: "none",
  },
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
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    const displayMenu = displayDrawer ? styles.noDisplay : styles.menuItem;

    return (
      <>
        <div
          id={"menuItem"}
          className={css(displayMenu)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                display: "inline",
                position: "absolute",
                right: "1rem",
                cursor: "pointer",
                background: "transparent",
                border: "none",
              }}
              id="closeNotifications"
              aria-label="Close"
              className={css(styles.notificationsButton)}
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img
                src={Icon}
                style={{ width: "20px" }}
                onClick={handleHideDrawer}
                alt="Close Icon"
              />
            </button>

            <p>Here is the list of notifications</p>
            {listNotifications.length !== 0 ? (
              <ul className={css(styles.ulStyle)}>
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};
export default Notifications;
