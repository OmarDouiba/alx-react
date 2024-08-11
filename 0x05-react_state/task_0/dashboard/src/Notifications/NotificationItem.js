import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "#2b166d",
  },

  urgent: {
    color: "#ff0200",
    "@media (max-width: 900px)": {
      listStyle: "none",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  },

  liStyle: {
    "@media (max-width: 900px)": {
      listStyle: "none",
      borderBottom: "0.10rem solid #D1D1D1",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
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
              type === "urgent"
                ? css(styles.urgent, styles.liStyle)
                : css(styles.default, styles.liStyle)
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
              type === "urgent"
                ? css(styles.urgent, styles.liStyle)
                : css(styles.default, styles.liStyle)
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
