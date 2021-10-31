import { Form } from "./components/Form/Form";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== "robot"
    ) {
      const newList = [
        ...messageList,
        {
          author: "robot",
          text: "Hello,  " + messageList[messageList.length - 1].author + "!",
          id: messageList[messageList.length - 1].id + 1,
        },
      ];
      if (newList.length > 10) newList.splice(0, 2);
      setTimeout(() => setMessageList(newList), 1000);
    }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header__heading">Chat</h1>
        <div className="chat-window">
          {messageList.map(mes => (
            <div className="chat-window__el" key={mes.id}>
              {mes.text}
            </div>
          ))}
        </div>
        <Form updateArray={setMessageList} array={messageList} />
      </header>
    </div>
  );
}

export default App;
