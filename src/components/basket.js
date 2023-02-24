import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const rows = [1, 2, 3, 4];

export default function Basket({ isEdit }) {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row} sx={{position:'relative'}}>
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
                    readOnly: !isEdit,
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
              {isEdit && (
                  <Box  sx={{ position: "absolute", zIndex: 2, top:'50%', right: -18, transform:'translateY(-50%)' }}>
                  <IconButton>
                    <RemoveCircleIcon color="primary" />
                  </IconButton>
                  </Box>
                )}
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
