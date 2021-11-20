import "./App.css";
import { persistor, store } from "./store";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./components/Chat/Chat";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { WaitingPage } from "./components/WaitingPage/WaitingPage";
import { Provider } from "react-redux";
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
              <Route path="profile" element={<Profile />} />
              <Route path="/" element={<Home />} />
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
              <Route path="*" element={<h3>404</h3>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
