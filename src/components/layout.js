import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CookieIcon from "@mui/icons-material/Cookie";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ClickAwayListener from "@mui/material/ClickAwayListener";

const drawerWidth = 200;

export default function Layout(props) {
  const theme = useTheme();
  const { window } = props;
  const [account, setAccount] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>阿婆仔菜後台系統</Toolbar>
      <Divider />
      <List style={{ paddingTop: 0 }}>
        <ListItem component={Link} href="/dashboard" key={"1"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"報表"} />
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} href="/product" key={"2"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CookieIcon />
            </ListItemIcon>
            <ListItemText primary={"商品"} />
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} href="/customer" key={"3"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"顧客"} />
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} href="/order" key={"4"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={"訂單"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          component={Link}
          href="/create_order"
          key={"5"}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={"成立訂單"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {account && (
        <>
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{ position: "relative" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                我是標題
              </Typography>
              <ClickAwayListener
                onClickAway={() => {
                  setAccountMenuOpen(false);
                }}
              >
                <Box sx={{ ml: "auto" }}>
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      bgcolor: "white",
                      color: theme.palette.primary.main,
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: grey[300],
                      },
                    }}
                    onClick={() => {
                      setAccountMenuOpen(!accountMenuOpen);
                    }}
                  >
                    <PersonIcon />
                  </Avatar>
                  <Fade in={accountMenuOpen}>
                    <Paper sx={{ position: "absolute", right: 10, top: 50 }}>
                      <MenuList>
                        <MenuItem>
                          <ListItemText
                            sx={{ textAlign: "center" }}
                            primary={"Bruce"}
                            secondary={"Admin"}
                          />
                        </MenuItem>
                        <Divider variant="middle"></Divider>
                        <MenuItem
                          onClick={() => {
                            setAccountMenuOpen(false);
                          }}
                        >
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </Fade>
                </Box>
              </ClickAwayListener>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Grid container justifyContent="center">
              {props.children}
            </Grid>
          </Box>
        </>
      )}
      {!account && (
        <>
          <Box
            sx={{
              mx: 'auto',
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              阿婆仔菜後台系統
            </Typography>
            <Box
              component="form"
              onSubmit={()=>{console.log('submit')}}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="account"
                label="帳號"
                name="account"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="密碼"
                type="password"
                id="password"
              />
              <Button
                onClick={()=>{setAccount('Bruce')}}
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                登入
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
