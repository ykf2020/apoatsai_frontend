import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function DropDownButton({
  open = false,
  onClick = () => {
    return;
  },
}) {
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        padding: 0,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
          backgroundColor: theme.palette.primary.main.contrastText,
          color: theme.palette.primary.light,
        },
      }}
      onClick={onClick}
    >
      <ExpandMoreIcon
        sx={{
          fontSize: "16px",
          transform: open && "rotate(-180deg)",
          transition: "transform 0.5s",
        }}
      />
    </IconButton>
  );
}
