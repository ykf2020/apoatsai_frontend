import Badge from "@mui/material/Badge";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
export default function PaidIconButton({ notPaidYet = false }) {
  const theme = useTheme();
  return (
    <Badge badgeContent={0} color="secondary">
      <IconButton
        sx={{
          backgroundColor: notPaidYet ? theme.palette.primary.main : grey[500],
          color: "white",
          "&:hover": {
            cursor: !notPaidYet && "default",
            backgroundColor: notPaidYet
              ? theme.palette.primary.main.contrastText
              : grey[500],
            color: notPaidYet ? theme.palette.primary.light : "white",
          },
        }}
        size="small"
      >
        <AttachMoneyIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
}
