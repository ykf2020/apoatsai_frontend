import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Autocomplete from "@mui/material/Autocomplete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Basket from "@/components/basket";
import OrderList from "@/components/orderLists";

export function AddToCartByCustomer() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <Grid container justifyContent="space-around">
      <Grid item container flexDirection="row" xs={4}>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Autocomplete
            disablePortal
            sx={{ width: "100%", height: "50px" }}
            options={top100Films}
            renderInput={(params) => (
              <TextField
                {...params}
                label="選擇商品"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            mt: 3,
            pt: 2,
            pr: 1,
          }}
        >
          <Typography component={"div"} variant="h6" sx={{ mx: "auto", mb: 2 }}>
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
        <DoubleArrowIcon />
      </Grid>
      <Grid item container flexDirection="row" justifyContent="center" xs={6}>
        <Paper
          item
          elevation={3}
          sx={{ width: "100%", mt: 4, mb: 3, minHeight: "300px" }}
        >
          <Typography component="h1" align="center">
            <ShoppingBasketRoundedIcon
              sx={{ mb: 2, mt: 2 }}
              color="primary"
              fontSize="large"
            />
          </Typography>
          <Grid item container xs={12} sx={{ px: 4 }}>
            <Grid item container justifyContent={"space-around"} sx={{ mb: 1 }}>
              <Grid item xs={4}>
                品名
              </Grid>
              <Grid item xs={2} align="center">
                數量
              </Grid>
              <Grid item xs={4} align="right">
                價格
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-around"}
              alignItems="center"
              sx={{ height: "46px", mb: 1 }}
            >
              <Grid item xs={4}>
                <ListItemText primary={"dlekd"} secondary={"$99"} />
              </Grid>
              <Grid item xs={2} align="center">
                12
              </Grid>
              <Grid item xs={4} align="right">
                $100
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-around"}
              alignItems="center"
              sx={{ height: "46px", mb: 1, position: "relative" }}
            >
              <IconButton
                size="small"
                sx={{ position: "absolute", left: "-24px", top: "14px" }}
              >
                <RemoveCircleIcon color="primary" sx={{ fontSize: "20px" }} />
              </IconButton>
              <Grid item xs={4}>
                <ListItemText primary={"dlekd"} secondary={"$99"} />
              </Grid>
              <Grid item xs={2} align="center">
                <TextField
                  type="number"
                  variant="filled"
                  inputProps={{
                    style: {
                      width: "36px",
                      paddingTop: "4px",
                      paddingBottom: "4px",
                      paddingRight: "4px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4} align="right">
                $100
              </Grid>
            </Grid>
            <Grid item container></Grid>
            <Grid item container></Grid>
          </Grid>
        </Paper>
        <Button variant="contained">確認加入</Button>
      </Grid>
    </Grid>
  );
}

export default function ExistedCustomerLayout({ customerId }) {
  const [value, setValue] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
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
            <Tab label="基本資訊" />
            <Tab label="購物籃" />
            <Tab label="加入購物籃"></Tab>
            <Tab label="訂單" />
          </Tabs>
          <Button
            component={Link}
            href="/customer"
            variant="outlined"
            sx={{ height: 1 }}
            size="small"
            startIcon={<KeyboardArrowLeftIcon />}
          >
            返回顧客列表
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
          <Typography component="h1" variant="h4" align="center" mb={1}>
            顧客資訊: {customerId}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lineName"
                name="lineName"
                label="Line 名稱"
                fullWidth
                variant="standard"
                InputProps={{
                  readOnly: !isEdit,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="realName"
                name="realName"
                label="姓名 / 綽號"
                fullWidth
                variant="standard"
                InputProps={{
                  readOnly: !isEdit,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="contact"
                name="contact"
                label="其他聯絡方式"
                fullWidth
                variant="standard"
                InputProps={{
                  readOnly: !isEdit,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="note"
                name="note"
                label="備註"
                fullWidth
                multiline
                variant="standard"
                InputProps={{
                  readOnly: !isEdit,
                }}
              />
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
        <>
          <Grid
            item
            container
            xs={8}
            justifyContent="center"
            direction="column"
          >
            <Basket isEdit={isEdit}/>
            <Grid item container justifyContent="flex-end" gap={2}>
              {!isEdit && (
                <>
                  <Button
                    color="warning"
                    variant="contained"
                    size="large"
                    sx={{ mr: "auto" }}
                    onClick={()=>{setIsEdit(true)}}
                  >
                    變更數量
                  </Button>
                  <Button variant="contained" size="large">
                    新增品項至購物車
                  </Button>
                  <Button variant="contained" size="large">
                    成立訂單
                  </Button>
                </>
              )}
              {isEdit && (
                <>
                  <Button
                    color="warning"
                    variant="contained"
                    size="large"
                    sx={{ mr: 1 }}
                    onClick={()=>{setIsEdit(false)}}
                  >
                    取消
                  </Button>
                  <Button
                    color="warning"
                    variant="contained"
                    size="large"
                    sx={{ mr: "auto" }}
                    onClick={()=>{setIsEdit(false)}}
                  >
                    確認變更
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </>
      )}
      {value === 2 && <AddToCartByCustomer />}
      {value === 3 && <OrderList sx={{ mt: 1 }} />}
    </>
  );
}