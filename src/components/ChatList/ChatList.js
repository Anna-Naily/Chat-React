import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";

export const ChatList = () => {
  const [chatlist, setChatList] = useState([
    { name: "Алекс", mes: "Привет! Как дела?", id: "1" },
    { name: "Виктория", mes: "Окей", id: "2" },
    { name: "Олег", mes: "Пока", id: "3" },
    { name: "Robot", mes: "Hello!", id: "4" },
  ]);
  const deleteChat = id => {
    let newChatlist = [...chatlist];
    for (let i = 0; i < newChatlist.length; i++) {
      if (id === newChatlist[i].id) {
        newChatlist.splice(i, 1);
      }
    }
    setChatList(newChatlist);
  };
  const addChat = () => {
    let newChatlist = [...chatlist];

    let newId = newChatlist[newChatlist.length - 1].id + 1;
    newChatlist.push({ name: "Name", mes: "Message", id: newId });
    setChatList(newChatlist);
  };
  return (
    <div className="chat-block">
      <ul className="list-chat">
        {chatlist.map(chat => (
          <li className="list-chat__item" key={chat.id}>
            <Link to="/chats">
              <FontAwesomeIcon
                className="chat-icon"
                icon={faTimesCircle}
                onClick={() => deleteChat(chat.id)}
              />
            </Link>
            <Link to={`/chats/${chat.id}`} className="link-chat">
              <h2 className="header-chat">{chat.name}</h2>
              <p className="text-chat">{chat.mes}</p>
            </Link>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon className="add-icon" icon={faPlus} onClick={addChat} />
    </div>
  );
};
