import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StyleIcon from "@mui/icons-material/Style";
import Chip from "@mui/material/Chip";
export function Tag({ content }) {
  return (
    <>
      <Chip color="primary" label={content} icon={<StyleIcon />}  sx={{fontSize: "18px",height: "40px", padding:"8px"}}/>
    </>
  );
}

export default function TagsBox() {
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
          <StyleIcon sx={{ mb: 1 }} color="primary" fontSize="large" />
        </Typography>
      </Grid>
      <Grid item container gap={2}>
        <Tag content={"hihi"} />
        <Tag content={"yoyommd"} />
        <Tag content={"nonofekfke"} />
        <Tag content={"nono"} />
        <Tag content={"nonofekfkenonofekfkenonofekfke"} />
      </Grid>
    </Paper>
  );
}
