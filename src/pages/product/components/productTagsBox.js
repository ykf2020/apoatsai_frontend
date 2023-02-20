import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StyleIcon from '@mui/icons-material/Style';
export default function ProductTagsBox() {
  return (
    <Paper
      component={Grid}
      item
      xs={8}
      elevation={3}
      sx={{ mt: { xs: 3, md: 6 }, mb: { xs: 3 }, p: { xs: 2, md: 3 } }}
    >
      <Grid item justifyContent="center">
        <Typography component="h1" align="center">
          <StyleIcon
            sx={{ mb: 1 }}
            color="primary"
            fontSize="large"
          />
        </Typography>
      </Grid>
    </Paper>
  )
}