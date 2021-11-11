import { Form } from "../Form/Form";
import "../../App.css";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

const allMessages = {
  1: [],
  2: [],
  3: [],
  4: [],
};

export const Chat = () => {
  const { chatId } = useParams();
  const [messageList, setMessageList] = useState(allMessages);
  const updateArray = useCallback(
    newMessage => {
      if (messageList[chatId].length === 0) {
        newMessage.id = 1;
      } else {
        newMessage.id =
          messageList[chatId][messageList[chatId].length - 1].id + 1;
      }

      const newList = {
        ...messageList,
        [chatId]: [...messageList[chatId], newMessage],
      };
      setMessageList(newList);
    },
    [messageList, chatId]
  );

  useEffect(() => {
    if (
      messageList[chatId].length &&
      messageList[chatId][messageList[chatId].length - 1].author !== "Robot"
    ) {
      const timeout = setTimeout(
        () =>
          updateArray({
            author: "Robot",
            text:
              "Hello,  " +
              messageList[chatId][messageList[chatId].length - 1].author +
              "!",
          }),
        1000
      );
      return () => clearTimeout(timeout);
    }
  }, [messageList, updateArray, chatId]);

  return (
    <div className="chat-window-block">
      <h2 className="header-user">Robot</h2>
      <div className="chat-window">
        {messageList[chatId].map(mes => (
          <div className="chat-window__el" key={mes.id}>
            {mes.author}: {mes.text}
          </div>
        ))}
      </div>
      <div className="chat-window-bottom">
        <Form updateArray={updateArray} />
      </div>
    </div>
  );
};
