import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function createCategory(id, name, desc) {
  return { id, name, desc };
}

const categories = [
  createCategory(0, "無", "無"),
  createCategory(1, "食品", "吃的"),
  createCategory(2, "飲品", "喝的"),
];

export default function CategoryTable() {
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(3);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Grid item container justifyContent="center" xs={12}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="30%">分類名稱</TableCell>
            <TableCell>分類描述</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack spacing={2} sx={{ mt: 3.5 }}>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Grid>
  );
}
