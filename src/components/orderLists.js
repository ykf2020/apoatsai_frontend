import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DropDownButton from "@/components/dropDownButton";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  BasicCollapseItem,
  SpecialCollaseItem,
} from "@/components/collapseItem";
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

export function OrderRow({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow key={data.id}>
        <TableCell sx={{ pl: 1, pr: 0, py: 0, alignItems: "center" }}>
          <DropDownButton
            onClick={() => {
              setOpen(!open);
            }}
            open={open}
          />
        </TableCell>
        <TableCell>{data.date}</TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{`$${data.amount}`}</TableCell>
        <TableCell>{data.date}</TableCell>
        <TableCell>{data.date}</TableCell>
        <TableCell>{data.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          colSpan="7"
          style={{
            paddingTop: !open && 0,
            paddingBottom: !open && 0,
            borderBottom: !open && "none",
          }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container justifyContent={"flex-start"} gap={2}>
              <Typography component="div" sx={{ pt: 3 }}>
                訂單內容：
              </Typography>
              <BasicCollapseItem
                primary={"yoyoyo"}
                secondary={"$100"}
                badgeContent={"x4"}
              />
              <SpecialCollaseItem primary={"優惠折扣"} secondary={-100} />
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function OrderList() {
  return (
    <Grid item container justifyContent="center" xs={12}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="12px" sx={{ pl: 1, pr: 0 }}></TableCell>
            <TableCell>編號</TableCell>
            <TableCell>顧客名稱</TableCell>
            <TableCell>訂單金額</TableCell>
            <TableCell>建單日期</TableCell>
            <TableCell>結帳日期</TableCell>
            <TableCell>取貨日期</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <OrderRow key={row.id} data={row} />
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
}
