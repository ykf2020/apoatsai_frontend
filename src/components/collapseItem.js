import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import { ListItemText } from "@mui/material";
export function BasicCollapseItem({ primary, secondary, badgeContent }) {
  return (
    <Paper sx={{ py: 1, pl: 1.5, pr: 2, mr: 1, display: "flex" }}>
      <Badge
        badgeContent={badgeContent}
        color="primary"
        style={{ left: "100%", transform: "translate(16px, 28px)" }}
      />
      <ListItemText primary={primary} secondary={secondary} />
    </Paper>
  );
}

export function SpecialCollaseItem() {
  return (
    <Paper sx={{ py: 1, pl: 1.5, pr: 2, mr: 1, display: "flex" }}>
      <Badge
        badgeContent={"x4"}
        color="primary"
        style={{ left: "100%", transform: "translate(16px, 24px)" }}
      />
      <ListItemText primary={"kfkf"} secondary={"$100"} />
    </Paper>
  );
}
