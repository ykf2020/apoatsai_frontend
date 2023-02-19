import Badge from "@mui/material/Badge";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
export default function BasketIconButton({
  badgeContent = 0,
  disabled = false,
  onClick = () => {
    return;
  },
}) {
  const theme = useTheme();
  return (
    <Badge badgeContent={badgeContent} color="secondary">
      <IconButton
        onClick={onClick}
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
        <ShoppingBasketRoundedIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
}
