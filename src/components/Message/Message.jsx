import React from "react";

export const Message = ({ message }) => {

  return (
    <h3 className="message-header">
      {message}
    </h3>
  );
};