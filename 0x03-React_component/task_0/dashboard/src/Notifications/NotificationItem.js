import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html }) {
  return (
    <>
      {value ? (
        <li data-notification-type={type}>{value}</li>
      ) : (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      )}
    </>
  );
}

NotificationItem.prototype = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
};

export default NotificationItem;
