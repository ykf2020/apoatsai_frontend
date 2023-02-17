import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, orderNotClose) {
  return { id, date, name, shipTo, paymentMethod, orderNotClose };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    false
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    true
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    false
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    false
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    true
  ),
];

function ProductList() {
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Line 名稱</TableCell>
            <TableCell>姓名 / 綽號</TableCell>
            <TableCell>目前購物籃</TableCell>
            <TableCell align="right">訂單未取貨</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right"> hihi </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function CategoryList() {
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>種類</TableCell>
            <TableCell>敘述</TableCell>
            <TableCell>商品數量</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default function Product() {
  return (
    <>
      <ProductList />
    </>
  )
}