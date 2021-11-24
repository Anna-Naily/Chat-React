import { ADD_MESSAGE, DELETE_ARRAY_MESSAGES } from "./actions";
import { ADD_ARRAY_MESSAGES } from "./actions";
const messageList = {};

export const messagesReducer = (state = messageList, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return { ...state, [payload.id]: [...state[payload.id], payload] };
    case ADD_ARRAY_MESSAGES:
      return { ...state, [payload]: [] };
    case DELETE_ARRAY_MESSAGES:
      const newMessages = { ...state };
      newMessages[payload] = newMessages[payload].filter(
        ({ id }) => id !== payload
      );
      return newMessages;
    default:
      return state;
  }
};
