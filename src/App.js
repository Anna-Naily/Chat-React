import { useState } from "react";
import { Message } from "./components/Message/Message";
import "./App.css";

function App() {
  const [text, setText] = useState("Hello world!");
  const handleClick = () => {
    setText("GoodBye");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} onMessageClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
