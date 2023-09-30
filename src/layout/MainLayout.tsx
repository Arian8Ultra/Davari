/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  CssBaseline,
  InputAdornment,
  LinearProgress,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
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
import { red } from "@mui/material/colors";
import {
  CSSObject,
  Theme,
  styled,
  useTheme,
} from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { VscAccount, VscLock } from "react-icons/vsc";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useLayoutStore from "../Context/LayoutStore";
import { useUserStore } from "../Context/UserStore";
import { UserLogin } from "../GraphQL/Users/Mutations";
// @ts-ignore
import pboLogo from "../assets/PboLogo.png";
// @ts-ignore
import sazmanImage from "../assets/Sazman.jpeg";
import { SideBarLinkType, SideBarMenu } from "../static/SideBar";
import { Titles } from "../static/Titles";
import { User } from "../static/Types";
import ListItemLink from "../components/ListItemLink";
import NewModal from "../components/Modals";
import Title from "../components/Title";
import { Green, background, primary } from "../theme/color";
import { TOKEN_CHECK } from "../GraphQL/Users/Queries";
import { log } from "console";

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
  const setUser = useUserStore((state) => state.setUser);
  const token = useUserStore((state) => state.token);
  const firstName = useUserStore((state) => state.user.firstName);
  const lastName = useUserStore((state) => state.user.lastName);
  const expireDate = useUserStore((state) => state.expireDate);
  const logout = useUserStore((state) => state.logout);
  const [signedIn, setSignedIn] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [signInModal, setSignInModal] = useState({
    open: false,
    userName: "",
    password: "",
    showPassword: false,
  });
  const ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    matchMedia("(max-width: 600px)").matches
  );

  const [, setIsMediumScreen] = React.useState(
    matchMedia("(max-width: 960px)").matches
  );

  const path = useLocation().pathname;

  useEffect(() => {
    console.log("token" + token);

    if (token && token !== "") {
      setSignedIn(true);
      setSignInModal({ ...signInModal, open: true });
    } else {
      setSignedIn(false);
      setSignInModal({ ...signInModal, open: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const [TokenCheck] = useLazyQuery(TOKEN_CHECK, {
    onCompleted(data) {
      // console.log("tokenCheck", data);
    },
    // fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    pollInterval: 1000,
  });

  useEffect(() => {
    if (token && token !== "") {
      void TokenCheck({
        onCompleted(data) {
          console.log("tokenCheck", data);
          if (data?.user_isTokenValid) {
            setSignedIn(true);
            setSignInModal({ ...signInModal, open: true });
          } else {
            setSignedIn(false);
            setSignInModal({ ...signInModal, open: false });
          }
        },
      });
    }
  }, [TokenCheck, token,path]);


  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };
    matchMedia("(max-width: 600px)").addEventListener(
      "change",
      handler
    );
    return () =>
      matchMedia("(max-width: 600px)").removeEventListener(
        "change",
        handler
      );
  }, []);

  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsMediumScreen(e.matches);
    };
    matchMedia("(max-width: 960px)").addEventListener(
      "change",
      handler
    );
    return () =>
      matchMedia("(max-width: 960px)").removeEventListener(
        "change",
        handler
      );
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [userLogin, { error, loading }] = useMutation(UserLogin, {
    variables: {
      userName: signInModal.userName,
      password: signInModal.password,
    },
    onCompleted(data) {
      console.log(data);
      const expireDate = new Date(data.user_signIn.result.expireDate);
      const now = new Date();
      const diff = expireDate.getTime() - now.getTime();
      const expiresIn = diff / 1000;
      console.log(expiresIn);
      if (
        (data.user_signIn.result.user as User) &&
        data.user_signIn.result.token
      ) {
        setUser(
          data.user_signIn.result.user,
          data.user_signIn.result.token,
          expireDate
        );
        localStorage.setItem("token", data.user_signIn.result.token);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

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
      {!signedIn ? (
        <NewModal
          name="ورود به سامانه"
          backgroundColor={background}
          open={!signedIn}
          isCloseable={false}
          // background={`linear-gradient(45deg, ${primary} -10%, ${primaryLighter}, ${primaryLighter})`}
          color={primary}
          width={{
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "40%",
            xl: "30%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={1}
                borderRadius={"100%"}
                marginBottom={"2rem"}
                sx={{
                  backgroundColor: primary,
                  color: "white",
                  fontSize: "2rem",
                }}
              >
                <VscLock />
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                marginTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              نام کاربری و رمز عبور خود را وارد کنید
            </Typography>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                void userLogin();
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                label="نام کاربری"
                variant="outlined"
                autoComplete="username"
                onChange={(e) =>
                  setSignInModal({
                    ...signInModal,
                    userName: e.target.value,
                  })
                }
                helperText={error?.message}
                error={error?.message ? true : false}
                value={signInModal.userName}
                sx={{
                  width: "80%",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderRadius: "15px",
                    },
                }}
              />
              <TextField
                label="رمز عبور"
                variant="outlined"
                autoComplete="password"
                type={signInModal.showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setSignInModal({
                            ...signInModal,
                            showPassword: !signInModal.showPassword,
                          })
                        }
                      >
                        {signInModal.showPassword ? (
                          <BsEye />
                        ) : (
                          <BsEyeSlash />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setSignInModal({
                    ...signInModal,
                    password: e.target.value,
                  })
                }
                helperText={error?.message}
                error={error?.message ? true : false}
                value={signInModal.password}
                sx={{
                  width: "80%",
                  marginTop: "1rem",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderRadius: "15px",
                    },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  marginTop: "1rem",
                  backgroundColor: error?.message
                    ? red[500]
                    : primary,
                  color: "white",
                  width: "80%",
                  borderRadius: "15px",
                  padding: "0.5rem",
                  "&:hover": {
                    backgroundColor: Green,
                  },
                }}
                type="submit"
                onClick={() => {
                  void userLogin();
                }}
              >
                {loading ? (
                  <LinearProgress
                    variant="indeterminate"
                    color="secondary"
                  />
                ) : (
                  ""
                )}
                ورود
              </Button>
            </form>
            {error?.message && (
              <Typography
                variant="body1"
                sx={{
                  marginTop: "1rem",
                  paddingBottom: "1rem",
                  color: red[500],
                }}
              >
                {error?.message}
              </Typography>
            )}
          </Box>
        </NewModal>
      ) : (
        ""
      )}
      <CssBaseline />
      <ScrollRestoration />
      {!isSmallScreen ? (
        <AppBar
          position="fixed"
          open={open}
          sx={{
            // backgroundColor: primaryLight,
            background: primary,
            justifyContent: "center",
            alignItems: "space-between",
            boxShadow: "none",
            // backgroundImage: `url(${Pattern})`,
            // backgroundPosition: "right center",
            // backgroundRepeat: "repeat-y",
          }}
        >
          <Toolbar
            sx={{
              position: "relative",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              {Titles.mainTitle}
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              ref={ref}
              sx={{
                borderRadius: "10px",
                padding: "0.5rem",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "white",
                  marginRight: 2,
                }}
              >
                {firstName + " " + lastName}
              </Typography>

              <IconButton
                sx={{
                  color: "white",
                }}
              >
                <VscAccount />
              </IconButton>
            </Box>
          </Toolbar>
          <Menu
            anchorEl={ref.current}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <MenuItem>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile");
                }}
                sx={{
                  color: "black",
                }}
              >
                تغییر رمز عبور
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  logout();
                }}
                sx={{
                  color: "red",
                }}
              >
                خروج
              </Button>
            </MenuItem>
          </Menu>
        </AppBar>
      ) : (
        <MuiAppBar
          position="fixed"
          sx={{
            // backgroundColor: primaryLight,
            background: primary,
            justifyContent: "center",
            alignItems: "space-between",
            boxShadow: "none",
            zIndex: theme.zIndex.drawer + 1,
            // backgroundImage: `url(${Pattern})`,
            // backgroundPosition: "right center",
            // backgroundRepeat: "repeat-y",
          }}
        >
          <Toolbar
            sx={{
              position: "relative",
            }}
          >
            {/* <img src={Pattern} style={{
            position: "absolute",
            top: 0,
            left: 0,
            // width: "100%",
            height: "100%",

            outline: "2px solid red",
            objectPosition: "center",
            // rotate: "90deg",
          }}/> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
              sx={{
                marginRight: 5,
                color: "white",
                // ...(open && { display: "none" }),
              }}
            >
              {open ? <ChevronRightIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              {Titles.mainTitle}
            </Typography>
            {/* <IconButton>
              <VscAccount />
            </IconButton> */}
          </Toolbar>
        </MuiAppBar>
      )}

      {!isSmallScreen ? (
        <Drawer
          variant="permanent"
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
            display="flex"
            justifyContent="center"
            alignItems="center"
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
                filter: "brightness(0.5) contrast(1.2)",
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
                  (child: SideBarLinkType, index) => (
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
                        (child: SideBarLinkType, index) => (
                          <ListItemLink
                            key={index}
                            to={child.to && child.to}
                            primary={child.primary}
                            icon={child.icon}
                            hasLink={child.hasLink}
                            hasCollapse={child.hasCollapse}
                            open={open}
                          />
                        )
                      )}
                    </ListItemLink>
                  )
                )}
              </ListItemLink>
            ))}
          </List>
        </Drawer>
      ) : (
        <MuiDrawer
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
          <img
            src={sazmanImage}
            height={"100%"}
            style={{
              objectPosition: "right center",
              filter: "brightness(0.5) contrast(1.2)",
              opacity: 0.7,
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
          />
          <DrawerHeader />
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
                  (child: SideBarLinkType, index) => (
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
                        (child: SideBarLinkType, index) => (
                          <ListItemLink
                            key={index}
                            to={child.to && child.to}
                            primary={child.primary}
                            icon={child.icon}
                            hasLink={child.hasLink}
                            hasCollapse={child.hasCollapse}
                            open={open}
                          />
                        )
                      )}
                    </ListItemLink>
                  )
                )}
              </ListItemLink>
            ))}
          </List>
        </MuiDrawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: {
            xs: 0,
            sm: 0,
            md: 3,
          },
        }}
      >
        <DrawerHeader />
        <Title />
        <Outlet />
      </Box>
    </Box>
  );
}
