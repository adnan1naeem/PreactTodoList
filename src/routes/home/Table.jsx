import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { FetchTodos } from "../../components/services/FetchTodos";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "preact/hooks";
import { TodolistHeader, TodoList } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";
import style from "./style.css";

// TodoList Table Component

export default function TodosTable() {
  // Setting Up UseDispatch hook to map Data to Store
  const dispatch = useDispatch();

  // Setting Up useSelector hook to Data from Redux Store
  const todoList = useSelector((state) => state.todosData.todos);

  useEffect(() => {
    // SideEffect Function to Fetch Data from API At the  Mounting
    FetchTodos(dispatch);
  }, []);

  return (
    <>
      {todoList.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TodolistHeader todoList={todoList} />
            <TodoList todoList={todoList} />
          </Table>
        </TableContainer>
      ) : (
        <div className={style.loaderStyles}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
