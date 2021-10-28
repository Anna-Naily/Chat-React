import React from "react";

export const Message = ({ message, onMessageClick }) => {

  return (
    <h3 className="message-header" onClick={onMessageClick}>
      {message}
    </h3>
  );
};