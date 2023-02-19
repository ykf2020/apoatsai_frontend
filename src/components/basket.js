import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const rows = [1, 2, 3, 4];

export default function Basket() {
  const [value, setValue] = useState(2);
  return (
    <Paper
    component={Grid}
    item
    xs={8}
    elevation={3}
    sx={{ mt: { xs: 3, md: 6 }, mb: { xs: 3 }, p: { xs: 2, md: 3 } }}
  >
    <Grid item justifyContent="center">
      <Typography component="h1" align="center">
        <ShoppingBasketRoundedIcon
          sx={{ mb: 1 }}
          color="primary"
          fontSize="large"
        />
      </Typography>
    </Grid>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell width="70%">商品</TableCell>
          <TableCell width="80px" hsx={{ px: 1 }}>
            數量
          </TableCell>
          <TableCell align="center" sx={{ px: 1 }}>
            價格
          </TableCell>
          <TableCell sx={{ px: 0 }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row}>
            <TableCell width="70%">
              <ListItemText primary={"dlekd"} secondary={"$99"} />
            </TableCell>
            <TableCell sx={{ px: 1 }}>
              <TextField
                id="filled-number"
                type="number"
                variant="filled"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                inputProps={{
                  style: {
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    paddingRight: "4px",
                  },
                }}
              />
            </TableCell>
            <TableCell align="center" sx={{ px: 1 }}>
              3
            </TableCell>
            <TableCell align="center" sx={{ px: 0, pt: 2.5 }}>
              <RemoveCircleIcon sx={{ fontSize: 20, cursor: "pointer" }}/>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell width="70%">小計</TableCell>
          <TableCell sx={{ px: 1 }}></TableCell>
          <TableCell align="center" sx={{ px: 1 }}>
            $100
          </TableCell>
          <TableCell sx={{ px: 0 }}></TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </Paper>
  );
}
