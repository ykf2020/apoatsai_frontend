import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
export default function PickUpIconButton({ disabled = false }) {
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
        <LocalShippingIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
}
