import { useRouter } from "next/router";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Switch from "@mui/material/Switch";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FormControlLabel from "@mui/material/FormControlLabel";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Autocomplete from "@mui/material/Autocomplete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = [1, 2, 3, 4];

const Order = () => {
  const router = useRouter();
  const { customerId } = router.query;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(2);
  return (
    <Grid container item justifyContent="center">
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={0}>
            <Tab label="訂單資訊" />
          </Tabs>
          <Button
            component={Link}
            href="/order"
            variant="outlined"
            sx={{ height: 1 }}
            size="small"
            startIcon={<KeyboardArrowLeftIcon />}
          >
            返回訂單列表
          </Button>
        </Box>
      </Grid>
      <Grid item container xs={8} justifyContent="center" direction="column">
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
          <Grid item container justifyContent="center">
            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    size="large"
                    checked={true}
                    onChange={() => {
                      return;
                    }}
                  />
                }
                label="已收款"
                labelPlacement="top"
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Switch color="primary" size="large" />}
                label="已取貨"
                labelPlacement="top"
              />
            </Grid>
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
                  <TableCell align="center" sx={{ px: 0, pt: 2.5 }}></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell width="70%">滿額優惠</TableCell>
                <TableCell sx={{ px: 1 }}></TableCell>
                <TableCell align="center" sx={{ px: 1 }}>
                  <TextField
                    type="number"
                    variant="standard"
                    value={-100}
                    inputProps={{
                      readOnly: isEdit,
                      style: {
                        paddingLeft: "14px",
                        textAlign: "center",
                        width: "70px",
                      },
                    }}
                  />
                </TableCell>
                <TableCell sx={{ px: 0 }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="70%" sx={{ borderBottom: "none" }}>
                  小計
                </TableCell>
                <TableCell sx={{ px: 1, borderBottom: "none" }}></TableCell>
                <TableCell align="center" sx={{ px: 1, borderBottom: "none" }}>
                  $100
                </TableCell>
                <TableCell sx={{ px: 0, borderBottom: "none" }}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <Grid item container justifyContent="flex-end" gap={2}>
          {!isEdit && (
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              修改
            </Button>
          )}
          {isEdit && (
            <>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              取消
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              確認修改
            </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Order;
