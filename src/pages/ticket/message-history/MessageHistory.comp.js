import React from "react";
import PropTypes from "prop-types";
import "./message-history.style.css";

export const MessageHistory = ({ message, sender, createdAt }) => {
  return (
    <div className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender"> {sender}</div>
        <div className="date">{createdAt} </div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

MessageHistory.propTypes = {
  message: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  createdAt: PropTypes.any,
};
