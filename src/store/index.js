import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { chatsReducer } from "./chats/reducer";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: "keyData",
  storage,
};

const persistedReducer = persistReducer(
  config,
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
  })
);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
