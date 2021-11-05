import { Form } from "./components/Form/Form";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { ChatList } from "./components/ChatList/ChatList";

function App() {
  const [messageList, setMessageList] = useState([]);

  const updateArray = useCallback(
    newMessage => {
      if (messageList.length === 0) {
        newMessage.id = 1;
      } else {
        newMessage.id = messageList[messageList.length - 1].id + 1;
      }

      const newList = [...messageList, newMessage];
      setMessageList(newList);
    },
    [messageList]
  );

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "Robot"
    ) {
      const timeout = setTimeout(
        () =>
          updateArray({
            author: "Robot",
            text: "Hello,  " + messageList[messageList.length - 1].author + "!",
          }),
        1000
      );
      return () => clearTimeout(timeout);
    }
  }, [messageList, updateArray]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="chat-list-block">
          <h1 className="App-header__heading">Чат</h1>
          <ChatList />
        </div>
        <div className="chat-window-block">
          <h2 className="header-user">Robot</h2>
          <div className="chat-window">
            {messageList.map(mes => (
              <div className="chat-window__el" key={mes.id}>
                {mes.author}: {mes.text}
              </div>
            ))}
          </div>
          <div className="chat-window-bottom">
            <Form updateArray={updateArray} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
