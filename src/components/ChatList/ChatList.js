import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

export const ChatList = () => {
  const [chatlist, setChatList] = useState([
    { name: "Алекс", mes: "Привет! Как дела?", id: "1" },
    { name: "Виктория", mes: "Окей", id: "2" },
    { name: "Олег", mes: "Пока", id: "3" },
    { name: "Robot", mes: "Hello!", id: "4" },
  ]);

  return (
    <div className="chat-block">
      <ListGroup as="ul">
        {chatlist.map(chat => (
          <ListGroup.Item
            className="list-group"
            action
            variant="light"
            as="li"
            key={chat.id}
          >
            <h2 className="header-chat">{chat.name}</h2>
            <p className="text-chat">{chat.mes}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
