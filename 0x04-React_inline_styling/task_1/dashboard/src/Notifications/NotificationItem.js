import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, value, html, id, markAsRead } = this.props;

    return (
      <>
        {value ? (
          <li data-notification-type={type} onClick={() => markAsRead(id)}>
            {value}
          </li>
        ) : (
          <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
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
