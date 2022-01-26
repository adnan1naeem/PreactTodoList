import { SET_TODOS } from "../constants/action-types";

// Action That trigger Redux to store TodosList

export const SetTodos = (data) => {
  return {
    type: SET_TODOS,
    payload: data,
  };
};
