import Badge from "@mui/material/Badge";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
export default function BasketIconButton({
  badgeContent = 0,
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
          backgroundColor: badgeContent>1 ? grey[500] : theme.palette.primary.main,
          color: "white",
          "&:hover": {
            cursor: badgeContent>1 && "default",
            backgroundColor: badgeContent>1
              ? grey[500]
              : theme.palette.primary.main.contrastText,
            color: badgeContent>1 ? "white" : theme.palette.primary.light,
          },
        }}
        size="small"
      >
        <ShoppingBasketRoundedIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
}
