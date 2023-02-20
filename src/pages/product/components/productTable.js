import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function createData(id, name, category, tags, price, quantity) {
  return { id, name, category, tags, price, quantity };
}

const rows = [
  createData(1, "Elvis Presley", "無", "無", 100, 3),
  createData(2, "Paul McCartney", "無", "無", 110, 4),
  createData(3, "Tom Scholz", "無", "無", 139, 9),
  createData(4, "Michael Jackson", "無", "無", 999, 43),
  createData(5, "Bruce Springsteen", "無", "無", 374, null),
];

export default function ProductTable() {
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
            <TableCell width="6%">編號</TableCell>
            <TableCell width="45%">品名</TableCell>
            <TableCell width="12%">分類</TableCell>
            <TableCell width="20%">標籤</TableCell>
            <TableCell>售價</TableCell>
            <TableCell>數量</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.tags}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>
                {typeof row.quantity !== "number" ? "∞" : row.quantity}
              </TableCell>
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
