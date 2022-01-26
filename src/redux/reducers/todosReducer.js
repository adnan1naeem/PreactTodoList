import { SET_TODOS } from "../constants/action-types";

// Declaring Initial Empty State

const intialState = {
  todos: [],
};

//  Setup  Reducers To Update state Based upon Action

export const TodosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: payload };
    default:
      return state;
  }
};
