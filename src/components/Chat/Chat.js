import { Form } from "../Form/Form";
import "../../App.css";
import { useEffect, useCallback } from "react";
import { addMessage } from "../../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectMessages } from "../../store/messages/selectors";

export const Chat = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messageList = useSelector(selectMessages);
  const handleAddMessage = useCallback(
    message => {
      dispatch(addMessage(message));
    },
    [dispatch]
  );

  useEffect(() => {
    if (
      messageList[chatId]?.length &&
      messageList[chatId]?.[messageList[chatId]?.length - 1].author !== "Robot"
    ) {
      const timeout = setTimeout(
        () =>
          handleAddMessage({
            author: "Robot",
            id: chatId,
            text:
              "Hello,  " +
              messageList[chatId][messageList[chatId].length - 1].author +
              "!",
            time: Date.now(),
          }),
        1000
      );
      return () => clearTimeout(timeout);
    }
  }, [messageList, chatId, handleAddMessage]);

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
