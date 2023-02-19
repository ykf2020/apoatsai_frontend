import { useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import { BasicCollapseItem } from "@/components/collapseItem";
import { useTheme } from "@mui/material/styles";
import BasketIconButton from "@/components/basketIconButton";
import PaidIconButton from "@/components/paidIconButton";
import PickUpIconButton from "@/components/pickUpIconButton";
export function Row({ data }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow key={data.id}>
        <TableCell>
          <Link href={`/customer/${data.id}`}>{data.lineName}</Link>
        </TableCell>
        <TableCell>
          <Link href={`/customer/${data.id}`}>{data.name}</Link>
        </TableCell>
        <TableCell>{data.amount}</TableCell>
        <TableCell sx={{py: 1.6}}>
          <Grid  container justifyContent="flex-end" gap={1}>
            <BasketIconButton
              onClick={() => {
                setOpen(!open);
              }}
              badgeContent={1}
            />
            <PaidIconButton />
            <PickUpIconButton />
          </Grid>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          colSpan="4"
          style={{
            paddingTop: !open && 0,
            paddingBottom: !open && 0,
            borderBottom: !open && "none",
          }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container justifyContent={"flex-start"} gap={2}>
              <Typography component="div" sx={{ pt: 3 }}>
                購物籃內容：
              </Typography>
              <BasicCollapseItem
                primary={"yoyoyo"}
                secondary={"$100"}
                badgeContent={"x4"}
              />
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function Customers() {
  // Generate Order Data
  function createData(id, lineName, name, amount, orderNotClose) {
    return { id, lineName, name, amount, orderNotClose };
  }

  const rows = [
    createData(0, "kun", "范育琨", 999, false),
    createData(1, "阿章", "范欽章", 298, true),
    createData(2, "基德", "范育昇", 1789, false),
    createData(3, "信華", "蕭信華", 8320, false),
    createData(4, "Yui", "范育廷", 1888, true),
  ];

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Line 名稱</TableCell>
            <TableCell>姓名 / 綽號</TableCell>
            <TableCell>已消費金額</TableCell>
            <TableCell align="right">購物狀態</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} data={row} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
