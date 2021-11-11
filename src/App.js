import "./App.css";
// import { useState, useEffect, useCallback } from "react";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./components/Chat/Chat";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { WaitingPage } from "./components/WaitingPage/WaitingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header-block">
          <Link to="/profile" className="btn-home">
            <FontAwesomeIcon className="font-icon" icon={faUserCircle} />
          </Link>
          <Link to="/" className="btn-home">
            <FontAwesomeIcon className="font-icon" icon={faHome} />
          </Link>
        </div>
        <Link to="/chats" className="App-header__heading">
          Все чаты{" "}
        </Link>

        <Routes>
          <Route path="chats">
            <Route
              index
              element={
                <header className="App-header">
                  <div className="chat-list-block">
                    <ChatList />
                  </div>
                  <WaitingPage />
                </header>
              }
            />
            <Route
              path=":chatId"
              element={
                <header className="App-header">
                  <div className="chat-list-block">
                    <ChatList />
                  </div>
                  <Chat />
                </header>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
