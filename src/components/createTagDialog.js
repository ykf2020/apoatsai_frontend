import { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';

export default function CreateTagDialog({ open, handleClose }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  return (
    <Backdrop
      open={open}
      onClick={handleClose}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Paper
        sx={{
          width: "360px",
          minHeight: "260px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 3,
          px: 2,
          pb: 2,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <TextField
          id="standard-helperText"
          label="標籤名稱"
          variant="standard"
        />
        <Grid
          container
          alignContent="flex-start"
          sx={{
            width: "220px",
            height: "150px",
            mt: 4,
            mb:2,
            position: "relative",
            border: "1px solid grey",
            borderRadius: "3%",
            pt: 1.5,
            pl: 1.5,
          }}
          id="outlined-textarea"
          label="選個顏色"
          color="primary"
          readonly
          focused
        >
          <Box
            sx={{
              position: "absolute",
              top: -15,
              left: 10,
              background: "white",
              px: 1,
            }}
          >
            選個顏色
          </Box>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", height: "42px" }}
          >
            <Checkbox />
            <Box
              sx={{
                backgroundColor: "pink",
                color: "pink",
                width: "50px",
                borderRadius: "10%",
              }}
            >
              pink
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", height: "42px" }}
          >
            <Checkbox />
            <Box
              sx={{
                backgroundColor: "green",
                color: "green",
                width: "50px",
                borderRadius: "10%",
              }}
            >
              green
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", height: "42px" }}
          >
            <Checkbox />
            <Box
              sx={{
                backgroundColor: "orange",
                color: "orange",
                width: "50px",
                borderRadius: "10%",
              }}
            >
              orange
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", height: "42px" }}
          >
            <Checkbox />
            <Box
              sx={{
                backgroundColor: "brown",
                color: "brown",
                width: "50px",
                borderRadius: "10%",
              }}
            >
              brown
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", height: "42px" }}
          >
            <Checkbox />
            <Box
              sx={{
                backgroundColor: "lightblue",
                color: "lightblue",
                width: "50px",
                borderRadius: "10%",
              }}
            >
              lightb
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", height: "42px" }}
          >
            <Checkbox />
            <Box
              sx={{
                backgroundColor: "purple",
                color: "purple",
                width: "50px",
                borderRadius: "10%",
              }}
            >
              purple
            </Box>
          </Grid>
        </Grid>
        <Button variant="contained">新增</Button>
      </Paper>
    </Backdrop>
  );
}
