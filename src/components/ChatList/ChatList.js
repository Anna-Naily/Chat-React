import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions";
import "./ChatList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addArrayMessages,
  deleteArrayMessages,
} from "../../store/messages/actions";
import { selectChats } from "../../store/chats/selectors";

export const ChatList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const chatlist = useSelector(selectChats);
  const handleDeleteChat = useCallback(
    deleteId => {
      dispatch(deleteChat(deleteId));
      dispatch(deleteArrayMessages(deleteId));
    },

    [dispatch]
  );

  const handleAddChat = useCallback(() => {
    let newId = 1;
    if (chatlist.length > 0) {
      newId = Number(chatlist[chatlist.length - 1].id) + 1;
    }
    if (value === "") {
      dispatch(addChat({ name: "Новый чат", mes: "", id: newId }));
    } else {
      dispatch(addChat({ name: value, mes: "", id: newId }));
    }
    dispatch(addArrayMessages(newId));
    setValue("");
  }, [dispatch, chatlist, value]);

  const handleChange = e => {
    setValue(e.target.value);
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
                onClick={() => handleDeleteChat(chat.id)}
              />
            </Link>
            <Link to={`/chats/${chat.id}`} className="link-chat">
              <h2 className="header-chat">{chat.name}</h2>
              <p className="text-chat">{chat.mes}</p>
            </Link>
          </li>
        ))}
      </ul>

      <input
        className="chat-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Название чата"
      />
      <FontAwesomeIcon
        className="add-icon"
        icon={faPlus}
        onClick={handleAddChat}
      />
    </div>
  );
};
