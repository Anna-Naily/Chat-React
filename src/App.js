import { useState } from "react";
import { Message } from "./components/Message/Message";
import "./App.css";

function App() {
  const text = useState("Hello world!");

  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} />
      </header>
    </div>
  );
}

export default App;
