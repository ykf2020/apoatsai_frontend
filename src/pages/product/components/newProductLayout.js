import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import FormHelperText from "@mui/material/FormHelperText";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
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

export default function NewProductLayout() {
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
  return (
    <>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={0}>
            <Tab label="新增商品" />
          </Tabs>
          <Button
            component={Link}
            href="/product"
            variant="outlined"
            sx={{ height: 1 }}
            size="small"
            startIcon={<KeyboardArrowLeftIcon />}
          >
            返回商品列表
          </Button>
        </Box>
      </Grid>
      <Paper
        elevation={3}
        component={Grid}
        item
        xs={8}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="div" variant="h6" align="center" mb={2}>
          商品資訊
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="productName"
              name="productName"
              label="品名"
              fullWidth
              variant="standard"
              InputLabelProps={{
                    shrink: true,
                  }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth variant="standard">
              <InputLabel id="dproduct-category-label">商品分類</InputLabel>
              <Select
                labelId="product-category-label"
                id="product-category-label"
                value={"無"}
                onChange={() => {}}
                label="商品分類"
              >
                <MenuItem value="無">無</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="productPrice"
              name="productPrice"
              label="價格"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">＄</InputAdornment>
                ),
              }}
              InputLabelProps={{
                    shrink: true,
                  }}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="productQuantity"
              name="productQuantity"
              label="商品庫存數量"
              helperText="留空表示無限量"
              fullWidth
              multiline
              variant="standard"
              InputLabelProps={{
                    shrink: true,
                  }}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item justifyContent="center" xs={12} mb={1}>
            <Box display="flex" justifyContent="center">
              <Button variant="contained">新增</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}