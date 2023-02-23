import { useState } from "react";
import Link from "next/link";
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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
import AddIcon from "@mui/icons-material/Add";
import TagBox from "@/components/TagsBox";
import CreateTagDialog from "@/components/createTagDialog";
import Chip from "@mui/material/Chip";
import FormHelperText from "@mui/material/FormHelperText";
export function CreateCustomerButton() {
  return (
    <Button
      component={Link}
      href={"/customer/new"}
      variant="outlined"
      sx={{ height: 1 }}
      size="small"
      startIcon={<AddIcon />}
    >
      新增顧客
    </Button>
  );
}

export function CreateCategoryButton({ handleOpen }) {
  return (
    <Button
      variant="outlined"
      sx={{ height: 1 }}
      size="small"
      startIcon={<AddIcon />}
      onClick={handleOpen}
    >
      新增顧客標籤
    </Button>
  );
}

export function DialogSort() {
  const [open, setOpen] = useState(false);
  const [sortPrimary, setSoryPrimary] = useState("customer_create_date");
  const [sortSecondary, setSortSecondary] = useState("forward");

  const handlePrimaryChange = (event) => {
    setSoryPrimary(event.target.value || "customer_create_date");
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
      <Button onClick={handleClickOpen}>
        排序：「顧客資料建立時間」「由新到舊」
      </Button>
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
                <MenuItem value={"customer_create_date"}>
                  顧客資料建立時間
                </MenuItem>
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
        <TableCell align="center">無</TableCell>
        <TableCell sx={{ py: 1.6 }}>
          <Grid container justifyContent="flex-end" gap={1}>
            <BasketIconButton
              onClick={() => {
                setOpen(!open);
              }}
              badgeContent={1}
            />
            <PaidIconButton notPaidYet={false} />
            <PickUpIconButton notPickUpYet={false} />
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
  const [value, setValue] = useState(0);
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(3);
  const [createTagDialogOpen, setCreateTagDialogOpen] = useState(false);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="顧客列表" />
            <Tab label="顧客標籤" />
          </Tabs>
          {value === 0 && <CreateCustomerButton />}
          {value === 1 && (
            <CreateCategoryButton
              handleOpen={() => {
                setCreateTagDialogOpen(true);
              }}
            />
          )}
        </Box>
      </Grid>
      {value === 0 && (
        <>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-between"
            sx={{ mt: 1 }}
          >
            <DialogSort />
            <DialogFilter />
          </Grid>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="20%">Line 名稱</TableCell>
                <TableCell width="20%">姓名 / 綽號</TableCell>
                <TableCell width="15%">已消費金額</TableCell>
                <TableCell align="center">標籤</TableCell>
                <TableCell width="15%" align="right">
                  購物狀態
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.id} data={row} />
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
        </>
      )}
      {value === 1 && <TagBox />}
      <CreateTagDialog
        open={createTagDialogOpen}
        handleClose={() => {
          setCreateTagDialogOpen(false);
        }}
      />
    </>
  );
}
