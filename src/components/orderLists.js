import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DropDownButton from "@/components/dropDownButton";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import FormHelperText from "@mui/material/FormHelperText";
import {
  BasicCollapseItem,
  SpecialCollaseItem,
} from "@/components/collapseItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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

export function DialogSort() {
  const [open, setOpen] = useState(false);
  const [sortPrimary, setSoryPrimary] = useState("order_create_date");
  const [sortSecondary, setSortSecondary] = useState("forward");

  const handlePrimaryChange = (event) => {
    setSoryPrimary(event.target.value || "建單日期");
  };

  const handleSecondaryChange = (event) => {
    setSortSecondary(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>排序：「建單日期」「由新到舊」</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>選擇排序條件</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">欄位</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={sortPrimary}
                onChange={handleSecondaryChange}
                input={<OutlinedInput label="欄位" />}
              >
                <MenuItem value={"order_create_date"}>建單日期</MenuItem>
                <MenuItem value={"order_amount"}>訂單金額</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">條件</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={sortSecondary}
                onChange={handleSecondaryChange}
                input={<OutlinedInput label="條件" />}
              >
                <MenuItem value={"forward"}>由新到舊</MenuItem>
                <MenuItem value={"reverse"}>由舊到新</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>確定修改</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function DialogFilter() {
  const getStyles = (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [open, setOpen] = useState(false);
  const [sortPrimary, setSoryPrimary] = useState("customer_tag");
  const [sortSecondary, setSortSecondary] = useState("forward");

  const handlePrimaryChange = (event) => {
    setSoryPrimary(event.target.value || "customer_tag");
  };

  const handleSecondaryChange = (event) => {
    setSortSecondary(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>篩選：「含顧客標籤」「AA, BB」</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>選擇排序條件</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">欄位</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={sortPrimary}
                onChange={handlePrimaryChange}
                input={<OutlinedInput label="欄位" />}
              >
                <MenuItem value={"customer_tag"}>含顧客標籤</MenuItem>
                <MenuItem value={"cart_filled"}>購物車狀態</MenuItem>
                <MenuItem value={"order_taken"}>取貨狀態</MenuItem>
                <MenuItem value={"order_paid"}>付款狀態</MenuItem>
              </Select>
            </FormControl>
            {sortPrimary !== "customer_tag" && (
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">條件</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={sortSecondary}
                  onChange={handleSecondaryChange}
                  input={<OutlinedInput label="條件" />}
                >
                  <MenuItem value={"forward"}>由新到舊</MenuItem>
                  <MenuItem value={"reverse"}>由舊到新</MenuItem>
                </Select>
              </FormControl>
            )}
            {sortPrimary === "customer_tag" && (
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">商品標籤</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="商品標籤" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} color="primary" />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>非必選</FormHelperText>
              </FormControl>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>確定修改</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

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
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(3);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Grid item container justifyContent="center" xs={12}>
      <Grid item container xs={12} justifyContent="space-between">
        <DialogSort />
        <DialogFilter />
      </Grid>
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
