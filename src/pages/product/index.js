import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import CreateTagDialog from "@/components/createTagDialog";
import ProductTable from "./components/productTable";
import CategoryTable from "./components/categoeyTable";
import TagsBox from "@/components/TagsBox";

export function CreateProductButton() {
  return (
    <Button
      component={Link}
      href="/product/new"
      variant="outlined"
      sx={{ height: 1 }}
      size="small"
      startIcon={<AddIcon />}
    >
      新增商品
    </Button>
  );
}

export function CreateCategoryButton() {
  return (
    <Button
      variant="outlined"
      sx={{ height: 1 }}
      size="small"
      startIcon={<AddIcon />}
    >
      新增商品分類
    </Button>
  );
}

export function CreateTagButton({ handleOpen }) {
  return (
    <Button
      variant="outlined"
      sx={{ height: 1 }}
      size="small"
      startIcon={<AddIcon />}
      onClick={handleOpen}
    >
      新增商品標籤
    </Button>
  );
}

export default function Product() {
  const [value, setValue] = useState(0);
  const [createTagDialogOpen, setCreateTagDialogOpen] = useState(false);
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
            <Tab label="商品" />
            <Tab label="商品分類" />
            <Tab label="商品標籤" />
          </Tabs>
          {value === 0 && <CreateProductButton />}
          {value === 1 && <CreateCategoryButton />}
          {value === 2 && (
            <CreateTagButton
              handleOpen={() => {
                setCreateTagDialogOpen(true);
              }}
            />
          )}
        </Box>
      </Grid>
      <CreateTagDialog
        open={createTagDialogOpen}
        handleClose={() => {
          setCreateTagDialogOpen(false);
        }}
      />
      {value === 0 && <ProductTable />}
      {value === 1 && <CategoryTable />}
      {value === 2 && <TagsBox />}
    </>
  );
}
