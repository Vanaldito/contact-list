import React from "react";

import "../styles/notification.css";

export function Notification({ message }) {
  return (
    <p className="notification">
      <span className="material-icons warning-icon">error</span>
      {message}
    </p>
  );
}
