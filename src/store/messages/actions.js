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
