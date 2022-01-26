import axios from "axios";
import { SetTodos } from "../../redux/actions/todosActions";
import { SET_TODOS } from "../../redux/constants/action-types";

// Stetting Up Data from Api

const FetchTodos = (dispatch) => {
  (async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos",
      });
      const todoLists = await response.data;

      // Storing API Response to Redux Store

      dispatch({
        type: SET_TODOS,
        payload: todoLists,
      });
      dispatch(SetTodos(todoLists));
    } catch (error) {
      console.log(error);
    }
  })();
};

export { FetchTodos };
