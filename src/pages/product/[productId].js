import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import NewProductLayout from './components/newProductLayout';
import ExistedProductLayout from './components/existedProductLayout';


const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <Grid container item justifyContent="center">
      {productId === "new" ? (
        <NewProductLayout />
      ) : (
        <ExistedProductLayout productId={productId} />
      )}
    </Grid>
  );
};

export default Product;
