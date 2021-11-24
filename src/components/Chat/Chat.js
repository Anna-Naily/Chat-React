import { Form } from "../Form/Form";
import "../../App.css";
import { useCallback } from "react";
import { addMessageWithReply } from "../../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router";
import { selectMessages } from "../../store/messages/selectors";

export const Chat = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messageList = useSelector(selectMessages);
  const handleAddMessage = useCallback(
    message => {
      dispatch(addMessageWithReply(message));
    },
    [dispatch]
  );

  if (!messageList[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="chat-window-block">
      <h2 className="header-user">Robot</h2>
      <div className="chat-window">
        {messageList[chatId].map(mes => (
          <div className="chat-window__el" key={mes.time}>
            {mes.author}: {mes.text}
          </div>
        ))}
      </div>
      <div className="chat-window-bottom">
        <Form updateArray={handleAddMessage} />
      </div>
    </div>
  );
};
