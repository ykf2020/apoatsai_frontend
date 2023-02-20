import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const rows = [
  {
    title: "總訂單數",
    content: "100",
    portion: 2
  },
  {
    title: "總營業額",
    content: "100",
    portion: 6
  },
  {
    title: "平均客單價",
    content: "100",
    portion: 3
  },
  {
    title: "平均月營業額",
    content: "100",
    portion: 6
  },
  {
    title: "總顧客數",
    content: "100",
    portion: 3
  },
]

export function Block({title, content, portion}) {
  return (
    <Paper
      component={Grid}
      item
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      xs={portion}
      sx={{ height: "100px" }}
    >
      <Typography variant="h6" color="black">{title}</Typography>
      <Typography variant="p" color="black">{content}</Typography>
    </Paper>
  )
  
}

export default function Dashboard() {
  return (
    <Grid item container xs={10} justifyContent="center" gap={1}>
      <Grid xs={12} sx={{border: '2px solid blue', height: '400px'}}>
      </Grid>
      {rows.map((row) => {
        return (
          <Block key={row.title} title={row.title} content={row.content} portion={row.portion}/>
        )
        
      })}
    </Grid>
  );
}
