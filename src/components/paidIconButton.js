import Badge from "@mui/material/Badge";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
export default function PaidIconButton({ disabled = false }) {
  const theme = useTheme();
  return (
    <Badge badgeContent={0} color="secondary">
      <IconButton
        sx={{
          backgroundColor: disabled ? grey[500] : theme.palette.primary.main,
          color: "white",
          "&:hover": {
            cursor: disabled && "default",
            backgroundColor: disabled
              ? grey[500]
              : theme.palette.primary.main.contrastText,
            color: disabled ? "white" : theme.palette.primary.light,
          },
        }}
        size="small"
      >
        <AttachMoneyIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
}
