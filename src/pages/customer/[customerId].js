import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import ExistedCustomerLayout from "./components/existedCustomerLayout";
import NewCustomerLayout from './components/newCustomerLayout';

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
