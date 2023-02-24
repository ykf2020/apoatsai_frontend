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
import Tab from "@mui/material/Tab";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Autocomplete from "@mui/material/Autocomplete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
export default function CreateOrder() {
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
      <Grid item container flexDirection="row" xs={5}>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Autocomplete
            disablePortal
            sx={{ width: "100%", height: "50px" }}
            options={top100Films}
            renderInput={(params) => (
              <TextField
                {...params}
                label="選擇顧客"
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
            mt: -4,
            pt: 2,
            pr: 1,
          }}
        >
          <Typography component={"div"} variant="h6" sx={{ mx: "auto", mb: 2 }}>
            <ShoppingBasketRoundedIcon color="primary" fontSize="large" />
          </Typography>
          <Grid item container xs={12} sx={{ pl: 3, pr: 2 }}>
            <Grid item container justifyContent={"space-around"} sx={{ mb: 1 }}>
              <Grid item xs={4}>
                品名
              </Grid>
              <Grid item xs={2} align="center">
                數量
              </Grid>
              <Grid item xs={4} align="center">
                價格
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-around"}
              alignItems="center"
              sx={{ height: "46px", mb: 1, position: "relative" }}
            >
              <Grid item xs={4}>
                <ListItemText primary={"dlekd"} secondary={"$99"} />
              </Grid>
              <Grid item xs={2} align="center">
                12
              </Grid>
              <Grid item xs={4} align="center">
                $100
              </Grid>
              <Grid
                item
                xs={2}
                align="right"
                sx={{ position: "absolute", right: "-14px", top: "13px" }}
              >
                <IconButton
                  size="small"
                  sx={{ positon: "absolute", zIndex: 4 }}
                >
                  <KeyboardArrowRightRoundedIcon
                    color="primary"
                    sx={{ fontSize: "20px", positon: "absolute", zIndex: 3 }}
                  />
                </IconButton>
                <IconButton size="small" sx={{ positon: "absolute" }}>
                  <KeyboardDoubleArrowRightRoundedIcon
                    color="primary"
                    sx={{ fontSize: "20px", positon: "absolute" }}
                  />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-around"}
              alignItems="center"
              sx={{ height: "46px", mb: 1, position: "relative" }}
            >
              <Grid item xs={4}>
                <ListItemText primary={"dlekd"} secondary={"$99"} />
              </Grid>
              <Grid item xs={2} align="center">
                12
              </Grid>
              <Grid item xs={4} align="center">
                $100
              </Grid>
              <Grid
                item
                xs={2}
                align="right"
                sx={{ position: "absolute", right: "-14px", top: "13px" }}
              >
                <IconButton
                  size="small"
                  sx={{ positon: "absolute", zIndex: 4 }}
                >
                  <KeyboardArrowRightRoundedIcon
                    color="primary"
                    sx={{ fontSize: "20px", positon: "absolute", zIndex: 3 }}
                  />
                </IconButton>
                <IconButton size="small" sx={{ positon: "absolute" }}>
                  <KeyboardDoubleArrowRightRoundedIcon
                    color="primary"
                    sx={{ fontSize: "20px", positon: "absolute" }}
                  />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item container></Grid>
            <Grid item container></Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        xs={1}
        sx={{ pt: "200px" }}
      >
        <SwapHorizRoundedIcon color="primary" />
      </Grid>
      <Grid item container flexDirection="row" justifyContent="center" xs={6}>
      <Grid item xs={12} sx={{ mt: 4 }}>
          <Box sx={{width: '100%',height: '50px'}}></Box>
        </Grid>
        <Paper
          item
          elevation={3}
          sx={{ width: "100%", mt: 4, mb: 3, minHeight: "300px" }}
        >
          <Typography component="h1" align="center">
            <AssignmentRoundedIcon
              sx={{ mb: 2, mt: 2 }}
              color="primary"
              fontSize="large"
            />
          </Typography>
          <Grid item container xs={12} sx={{ pl: 8, pr: 4 }}>
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
              sx={{ height: "46px", mb: 1, position: "relative" }}
            >
              <Grid
                item
                xs={2}
                align="left"
                sx={{ position: "absolute", left: "-56px", top: "13px" }}
              >
                <IconButton
                  size="small"
                  sx={{ positon: "absolute", zIndex: 4 }}
                >
                  <KeyboardArrowLeftRoundedIcon
                    color="primary"
                    sx={{ fontSize: "20px", positon: "absolute", zIndex: 3 }}
                  />
                </IconButton>
                <IconButton size="small" sx={{ positon: "absolute" }}>
                  <KeyboardDoubleArrowLeftRoundedIcon
                    color="primary"
                    sx={{ fontSize: "20px", positon: "absolute" }}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <ListItemText primary={"dlekd"} secondary={"$99"} />
              </Grid>
              <Grid item xs={2} align="center">
                12
              </Grid>
              <Grid item xs={4} align="right">
                $990
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
                sx={{ position: "absolute", left: "-40px", top: "50%", transform: 'translateY(-50%)' }}
              >
                <RemoveCircleIcon color="primary" sx={{ fontSize: "20px" }} />
              </IconButton>
              <Grid item xs={4}>
                滿額優惠
              </Grid>
              <Grid item xs={2} align="center">
                
              </Grid>
              <Grid item xs={4} align="right">
                -$100
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-around"}
              alignItems="center"
              sx={{ height: "46px", mb: 1, pt: 2, borderTop: '1px solid' }}
            >
              <Grid item xs={4}>
                總計
              </Grid>
              <Grid item xs={2} align="center">
                
              </Grid>
              <Grid item xs={4} align="right">
                $890
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Grid item container xs={12} justifyContent="flex-end" gap={2}>
          <Button variant="contained">增加調整項</Button>
          <Button variant="contained">確認訂單</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
