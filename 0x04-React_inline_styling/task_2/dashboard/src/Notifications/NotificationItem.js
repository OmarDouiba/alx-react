import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "#2b166d",
  },

  urgent: {
    color: "#ff0200",
  },
});

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, value, html, id, markAsRead } = this.props;

    return (
      <>
        {value ? (
          <li
            data-notification-type={type}
            onClick={() => markAsRead(id)}
            className={
              type === "urgent" ? css(styles.urgent) : css(styles.default)
            }
          >
            {value}
          </li>
        ) : (
          <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
            className={
              type === "urgent" ? css(styles.urgent) : css(styles.default)
            }
          ></li>
        )}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  markAsRead: () => {},
};

export default NotificationItem;
