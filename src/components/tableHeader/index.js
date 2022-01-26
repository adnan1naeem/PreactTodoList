import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

/**
 *  Todolist  Header Component
 */

export const TodolistHeader = ({ todoList }) => {
  const getAllHeader = todoList.flatMap(Object.keys);
  const getUniqueHeader = getAllHeader?.filter(
    (item, index) => getAllHeader.indexOf(item) === index
  );

  return (
    <TableHead>
      <TableRow>
        {getUniqueHeader?.map((tableHead, index) => (
          <TableCell key={index}>
            {tableHead.charAt(0).toUpperCase() + tableHead.slice(1)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
