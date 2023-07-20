/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  CSSObject,
  Theme,
  styled,
  useTheme,
} from "@mui/material/styles";
import React, { useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useLayoutStore from "../Context/LayoutStore";
import pboLogo from "../assets/PboLogo.png";
import sazmanImage from "../assets/Sazman.jpeg";
import { SideBarLinkType, SideBarMenu } from "../assets/static/SideBar";
import { Titles } from "../assets/static/Titles";
import ListItemLink from "../components/ListItemLink";
import Title from "../components/Title";
import { primary, primaryLight } from "../theme/color";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const setLocation = useLayoutStore((state) => state.setLocation);
  const oldLocation = useLayoutStore((state) => state.location);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (oldLocation) {
      navigate(oldLocation);
    }
  }, [navigate, oldLocation]);

  // on router navigation log the location
  React.useEffect(() => {
    console.log(location);
    if (location.pathname !== oldLocation) {
      setLocation(location.pathname);
    }
  }, [location, oldLocation, setLocation]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ScrollRestoration />
      <AppBar
        position='fixed'
        open={open}
        sx={{
          backgroundColor: primaryLight,
          justifyContent: "center",
          alignItems: "space-between",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
            }}
          >
            {Titles.mainTitle}
          </Typography>
          <IconButton>
            <VscAccount />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        open={open}
        sx={{
          backgroundColor: primary,
          position: "relative",
        }}
        PaperProps={{
          sx: {
            backgroundColor: primary,
          },
        }}
      >
        <Box
          width={"100%"}
          display='flex'
          justifyContent='center'
          alignItems='center'
          position={"absolute"}
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <img
            src={sazmanImage}
            height={"100%"}
            style={{
              objectPosition: "center",
              filter: "blur(6px) brightness(0.5) contrast(1.2)",
              opacity: 0.7,
            }}
          />
        </Box>

        <DrawerHeader>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "space-between",
              position: "relative",
            }}
          >
            <img
              src={pboLogo}
              height={theme.spacing(5)}
              style={{
                filter: "brightness(0) invert(1)",
                justifySelf: "center",
                alignSelf: "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                color: "white",
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {SideBarMenu.map((item, index) => (
            <ListItemLink
              key={index}
              to={item.to}
              primary={item.primary}
              icon={item.icon}
              hasLink={item.hasLink}
              hasCollapse={item.hasCollapse}
              open={open}
            >
              {item.children?.map(
                (
                  child: SideBarLinkType,
                  index,
                ) => (
                  <ListItemLink
                    key={index}
                    to={child.to && child.to}
                    primary={child.primary}
                    icon={child.icon}
                    hasLink={child.hasLink}
                    hasCollapse={child.hasCollapse}
                    open={open}
                  >
                    {child.children?.map(
                      (
                        child: SideBarLinkType,
                        index,
                      ) => (
                        <ListItemLink
                          key={index}
                          to={child.to && child.to}
                          primary={child.primary}
                          icon={child.icon}
                          hasLink={child.hasLink}
                          hasCollapse={child.hasCollapse}
                          open={open}
                        />
                      ),
                    )}
                  </ListItemLink>
                ),
              )}
            </ListItemLink>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, px: {
        xs: 0,
        sm: 0,
        md: 3,
      } }}>
        <DrawerHeader />
        <Title />
        <Outlet />
      </Box>
    </Box>
  );
}
