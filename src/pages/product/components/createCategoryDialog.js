import { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function CreateCategoryDialog({ open, handleClose }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
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
        sx={{width: "200px", mt:2}}
          label="分類名稱"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="分類描述"
          multiline
          sx={{ mt:4, mb:4 }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps = {{style: {
            minHeight: '70px'
          }}}
          variant="outlined"
        />
        <Button variant="contained">新增</Button>
      </Paper>
    </Backdrop>
  );
}
