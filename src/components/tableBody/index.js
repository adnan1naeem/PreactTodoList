import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

//  Table Body Component

export const TodoList = ({ todoList }) => {
  return (
    <TableBody>
      {todoList.map((user, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {user?.userId}
          </TableCell>
          <TableCell align="left">{user?.id}</TableCell>
          <TableCell align="left">{user?.title}</TableCell>
          <TableCell align="left">{`${user?.completed}`}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
