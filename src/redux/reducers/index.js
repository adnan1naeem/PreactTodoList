import { combineReducers } from "redux";
import { TodosReducer } from "./todosReducer";

//   Creating Reducers for todoList

const reducers = combineReducers({
  todosData: TodosReducer,
});
export default reducers;
