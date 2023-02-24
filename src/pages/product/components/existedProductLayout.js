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
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
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
export function AddToCartByProduct() {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]
  return (
    <Grid container justifyContent="space-around">
          <Grid
            item
            container
            flexDirection="column"
            alignItems="center"
            xs={4}
          >
            <Paper
              elevation={2}
              sx={{
                width: "100%",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                mt: 4,
                pt: 2,
                pr: 1,
              }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ mx: "auto", mb: 2 }}
              >
                商品資訊
              </Typography>
              <Box sx={{ ml: 2, mb: 2 }}>
                <Typography component={"span"}>商品資訊：</Typography>
                <Typography component={"span"}>YAYAYA</Typography>
              </Box>
              <Box sx={{ ml: 2, mb: 2 }}>
                <Typography component={"span"}>商品分類：</Typography>
                <Typography component={"span"}>YAYAYA</Typography>
              </Box>
              <Box sx={{ ml: 2, mb: 2 }}>
                <Typography component={"span"}>價格：</Typography>
                <Typography component={"span"}>YAYAYA</Typography>
              </Box>
              <Box sx={{ ml: 2, mb: 2 }}>
                <Typography component={"span"}>庫存數量：</Typography>
                <Typography component={"span"}>YAYAYA</Typography>
              </Box>
              <Box sx={{ ml: 2, mb: 2 }}>
                <Typography component={"span"}>商品標籤：</Typography>
                <Typography component={"span"}>
                  YAYAYA YAYAYA YAYAYA YAYAYA YAYAYA
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            container
            justifyContent={"center"}
            xs={1}
            sx={{ pt: "150px" }}
          >
            <DoubleArrowIcon color="primary"/>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            alignItems="center"
            xs={5}
          >
            <Paper
              elevation={2}
              sx={{
                width: "100%",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
                mb: 3,
                pt: 2,
                px: 1,
              }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ mx: "auto", mb: 2 }}
              >
                選擇商品數量及顧客
              </Typography>
              <Box sx={{width:'100%', display: 'flex', height:'40px', gap:2, px: 2}}>
              <TextField
                  label="數量"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    style: {
                      paddingTop: "4px",
                      paddingBottom: "4px",
                      paddingRight: "2px",
                      paddingLeft: "0px",
                      textAlign: 'center',
                      width:'75px', height: '50px'
                    },
                  }}
                />
              <Autocomplete
                disablePortal
                sx={{width:'100%', height: '50px'}}
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="顧客名稱" InputLabelProps={{
                    shrink: true,
                  }} />}
              />
              </Box>
              <Box sx={{mt:3}}>
                <IconButton color="primary">
                  <AddCircleIcon/>
                </IconButton>
              </Box>
            </Paper>
            <Button variant="contained">確認加入</Button>
          </Grid>
        </Grid>
  )
}

export default function ExistedProductLayout({ productId }) {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="商品資訊" />
            <Tab label="加入購物籃" />
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
      {value === 0 && (
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
                InputProps={{
                  readOnly: !isEdit,
                }}
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
                  InputProps={{
                    readOnly: !isEdit,
                  }}
                >
                  <MenuItem value="無">無</MenuItem>
                  <MenuItem value="1">1</MenuItem>
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
                  readOnly: !isEdit,
                  startAdornment: (
                    <InputAdornment position="start">＄</InputAdornment>
                  ),
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
                InputProps={{
                  readOnly: !isEdit,
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
                  inputProps={{ readOnly: !isEdit }}
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
            <Grid item justifyContent="center" xs={12} mt={2} mb={1}>
              <Box display="flex" justifyContent="center" gap={2}>
                {!isEdit ? (
                  <Button variant="outlined" onClick={() => setIsEdit(true)}>
                    修改資訊
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      onClick={() => setIsEdit(false)}
                    >
                      確認修改
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setIsEdit(false)}
                    >
                      取消
                    </Button>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
      {value === 1 && (
        <AddToCartByProduct/>
      )}
    </>
  );
}