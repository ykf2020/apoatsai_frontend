import { useRouter } from "next/router";
import { useState } from "react";
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
import Basket from "@/components/basket";
import OrderList from "@/components/orderLists";
export function NewCustomerLayout() {
  return (
    <>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={0}>
            <Tab label="新增顧客" />
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
      <Paper
        elevation={3}
        component={Grid}
        item
        xs={8}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center" mb={1}>
          顧客資訊
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="realName"
              name="realName"
              label="姓名 / 綽號"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="contact"
              name="contact"
              label="其他聯絡方式"
              fullWidth
              variant="standard"
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
            />
          </Grid>
          <Grid item justifyContent="center" xs={12} mt={2} mb={1}>
            <Box display="flex" justifyContent="center">
              <Button variant="contained">新增</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export function ExistedCustomerLayout({ customerId }) {
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
            <Basket />
            <Grid item container justifyContent="flex-end" gap={2}>
              <Button variant="contained" size="large">
                新增品項至購物車
              </Button>
              <Button variant="contained" size="large">
                成立訂單
              </Button>
            </Grid>
          </Grid>
        </>
      )}
      {value === 2 && <OrderList sx={{ mt: 1 }} />}
    </>
  );
}

const Customer = () => {
  const router = useRouter();
  const { customerId } = router.query;

  return (
    <Grid container item justifyContent="center">
      {customerId === "new" ? (
        <NewCustomerLayout />
      ) : (
        <ExistedCustomerLayout customerId={customerId} />
      )}
    </Grid>
  );
};

export default Customer;
