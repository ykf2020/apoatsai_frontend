import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
export default function PickUpIconButton({ notPickUpYet = false }) {
  const theme = useTheme();
  return (
    <Badge badgeContent={0} color="secondary">
      <IconButton
        sx={{
          backgroundColor: notPickUpYet
            ? theme.palette.primary.main
            : grey[500],
          color: "white",
          "&:hover": {
            cursor: !notPickUpYet && "default",
            backgroundColor: notPickUpYet
              ? theme.palette.primary.main.contrastText
              : grey[500],
            color: notPickUpYet ? theme.palette.primary.light : "white",
          },
        }}
        size="small"
      >
        <LocalShippingIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
}
