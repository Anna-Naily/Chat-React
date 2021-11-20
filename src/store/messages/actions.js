export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_ARRAY_MESSAGES = "MESSAGES::ADD_ARRAY_MESSAGES";
export const DELETE_ARRAY_MESSAGES = "MESSAGES::DELETE_ARRAY_MESSAGES";

export const addMessage = newMes => ({
  type: ADD_MESSAGE,
  payload: newMes,
});
export const addArrayMessages = id => ({
  type: ADD_ARRAY_MESSAGES,
  payload: id,
});
export const deleteArrayMessages = id => ({
  type: DELETE_ARRAY_MESSAGES,
  payload: id,
});

let timeout;
export const addMessageWithReply = message => dispatch => {
  dispatch(addMessage(message));
  if (message.author !== "Robot") {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      const botMessage = {
        author: "Robot",
        id: message.id,
        text: `Hello, ${message.author} !`,
        time: Date.now(),
      };
      dispatch(addMessage(botMessage));
    }, 1500);
  }
};
