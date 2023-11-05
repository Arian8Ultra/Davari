/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { Button, CssBaseline, InputAdornment, LinearProgress, Menu, MenuItem, Modal, TextField } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import useLayoutStore from "../Context/LayoutStore";
import { useUserStore } from "../Context/UserStore";
import { UserLogin, UserUpdatePassword } from "../GraphQL/Users/Mutations";
// @ts-ignore
import pboLogo from "../assets/PboLogo.png";
// @ts-ignore
import { FaBalanceScale } from "react-icons/fa";
import { GET_ALL_ORGANIZATION_USERS, TOKEN_CHECK } from "../GraphQL/Users/Queries";
import sazmanImage from "../assets/Sazman.jpeg";
import Pattern from "../assets/pattern_hexagon-7_1_3_0-0_0_2__a8575700_787878.png";
import ListItemLink from "../components/ListItemLink";
import NewModal from "../components/Modals";
import Title from "../components/Title";
import { convertRoleToPersian } from "../functions/Functions";
import { SideBarLinkType, SideBarMenu } from "../static/SideBar";
import { Titles } from "../static/Titles";
import { User } from "../static/Types";
import { Green, background, primary, primaryGrey, primaryLight, secondary, secondaryDark } from "../theme/color";
import { MutationWrapper } from "../GraphQL/MutationWrapper";

const drawerWidth = 230;

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
  // background:'red',
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
  const setIsMailRoom = useUserStore((state) => state.setIsMailRoom);
  const isMailRoom = useUserStore((state) => state.isMailRoom);
  const setAccesses = useUserStore((state) => state.setAccesses);
  const token = useUserStore((state) => state.token);
  const fullName = useUserStore((state) => state.user.fullName);
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const [loginError, setLoginError] = useState<{
    message: string;
    code: number;
  }>();
  const [changePasswordModal, setChangePasswordModal] = useState({
    open: false,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [signedIn, setSignedIn] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [signInModal, setSignInModal] = useState({
    open: false,
    userName: "",
    password: "",
    showPassword: false,
  });
  const ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = React.useState(matchMedia("(max-width: 600px)").matches);

  const [, setIsMediumScreen] = React.useState(matchMedia("(max-width: 960px)").matches);

  const path = useLocation().pathname;

  useEffect(() => {
    console.log("token" + token);

    if (token && token !== "") {
      setSignedIn(true);
      setSignInModal({ ...signInModal, open: true });
    } else {
      setSignedIn(false);
      setSignInModal({ ...signInModal, open: false });
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const [TokenCheck] = useLazyQuery(TOKEN_CHECK, {
    onCompleted() {
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
        onError(error) {
          console.log(error);

          setSignedIn(true);
          setSignInModal({ ...signInModal, open: true });
          // setSignedIn(false);
          // setSignInModal({ ...signInModal, open: false });
        },
      });
    }
  }, [TokenCheck, token, path]);

  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };
    matchMedia("(max-width: 600px)").addEventListener("change", handler);
    return () => matchMedia("(max-width: 600px)").removeEventListener("change", handler);
  }, []);

  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsMediumScreen(e.matches);
    };
    matchMedia("(max-width: 960px)").addEventListener("change", handler);
    return () => matchMedia("(max-width: 960px)").removeEventListener("change", handler);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { handleMutation, loading: loadingMutation, error } = MutationWrapper(UserLogin, "user_signIn");

  const [userLogin, { loading }] = useMutation(UserLogin, {
    variables: {
      userName: signInModal.userName,
      password: signInModal.password,
    },
    onCompleted(data) {
      console.log(data);
      if (data.user_signIn.status.code === 1) {
        const expireDate = new Date(data.user_signIn.result.expireDate);
        const now = new Date();
        const diff = expireDate.getTime() - now.getTime();
        const expiresIn = diff / 1000;
        console.log(expiresIn);
        if ((data.user_signIn.result.user as User) && data.user_signIn.result.token) {
          setUser(data.user_signIn.result.user, data.user_signIn.result.token, expireDate);
          localStorage.setItem("token", data.user_signIn.result.token);
          setIsMailRoom(data.user_signIn.result.user.parentId === "e7a85297-91d4-4f27-a4b2-ff394fe71dd3");
        }
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  const [changePassword] = useMutation(UserUpdatePassword, {
    variables: {
      oldPassword: changePasswordModal.oldPassword,
      newPassword: changePasswordModal.newPassword,
      confirmPassword: changePasswordModal.confirmPassword,
      id: user.id,
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

  const [departments, setDepartments] = React.useState<
    {
      label: string;
      id: string;
      type: "INDIVIDUAL" | "ORGANIZATION" | "CONTRACTOR_OR_CONSULTANT";
    }[]
  >([]);
  useQuery(GET_ALL_ORGANIZATION_USERS, {
    onCompleted(data) {
      console.log(data);
      // remove department that id is e7a85297-91d4-4f27-a4b2-ff394fe71dd3
      setDepartments(
        data?.user_getUsers?.result?.items?.map((item: { id: number; fullName: string; userType: "INDIVIDUAL" | "ORGANIZATION" | "CONTRACTOR_OR_CONSULTANT" }) => ({
          label: item.fullName,
          id: item.id,
          type: item.userType,
        }))
      );
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      {!signedIn ? (
        // <NewModal
        //   name="ورود به سامانه هوشمند داوری"
        //   backgroundColor={background}
        //   open={!signedIn}
        //   isCloseable={false}
        //   background={`url(${Pattern})`}
        //   color={primary}
        //   width={{
        //     xs: "100%",
        //     sm: "100%",
        //     md: "50%",
        //     lg: "40%",
        //     xl: "30%",
        //   }}
        // >
        <Modal open={!signedIn}>
          <Box
            width={"100%"}
            height={"100%"}
            sx={{
              background: `url(${sazmanImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "center",
            }}
          >
            <Box
              width={"100%"}
              height={"100%"}
              sx={{
                backdropFilter: "blur(5px) brightness(0.8)",
              }}
            >
              <img
                src={pboLogo}
                alt="logo"
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  width: "10%",
                  transform: "translate(-50%, -50%)",
                  filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.5)) contrast(1.5) saturate(0) brightness(10)",
                }}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  backgroundColor: background,
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  borderRadius: "15px",
                }}
                width={{
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "40%",
                  xl: "30%",
                }}
                height={"max-content"}
                padding={4}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  padding={1}
                  borderRadius={"1rem"}
                  marginBottom={"1rem"}
                  width={"100%"}
                  gap={2}
                  sx={{
                    // backgroundColor: secondary,
                    color: secondary,
                    fontSize: "2rem",
                  }}
                >
                  <FaBalanceScale />
                  سامانه هوشمند داوری
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  برای ورود نام کاربری و رمز عبور خود را وارد کنید
                </Typography>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // void userLogin();
                    void handleMutation({
                      variables: {
                        userName: signInModal.userName,
                        password: signInModal.password,
                      },
                    }).then((data) => {
                      console.log(data);
                      if (data instanceof Error) {
                        setLoginError({
                          message: data.message,
                          code: data.name === "Error" ? 500 : 400,
                        });
                      } else {
                        const expireDate = new Date(data.expireDate);
                        setUser(data.user, data.token, expireDate);
                        localStorage.setItem("token", data.token);
                        setLoginError(undefined);
                        setIsMailRoom(data.user.parentId === "e7a85297-91d4-4f27-a4b2-ff394fe71dd3");
                      }
                    });
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
                    helperText={loginError?.message}
                    error={loginError ? true : false}
                    value={signInModal.userName}
                    InputProps={{
                      sx: {
                        borderRadius: "15px",
                      },
                    }}
                    sx={{
                      width: "80%",
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
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
                            {!signInModal.showPassword ? <BsEye /> : <BsEyeSlash />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: {
                        borderRadius: "15px",
                      },
                    }}
                    onChange={(e) =>
                      setSignInModal({
                        ...signInModal,
                        password: e.target.value,
                      })
                    }
                    helperText={loginError?.message}
                    error={loginError ? true : false}
                    value={signInModal.password}
                    sx={{
                      width: "80%",
                      marginTop: "1rem",
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "15px",
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "1rem",
                      backgroundColor: error?.message ? red[500] : primary,
                      color: "white",
                      width: "80%",
                      borderRadius: "10px",
                      boxShadow: "none",
                      padding: "0.5rem",
                      "&:hover": {
                        backgroundColor: Green,
                      },
                    }}
                    type="submit"
                    // onClick={() => {
                    //   // void userLogin();
                    //   void handleMutation({
                    //     variables: {
                    //       userName: signInModal.userName,
                    //       password: signInModal.password,
                    //     },
                    //   })
                    //     .then((data) => {
                    //       // check if the data is an Error
                    //       if(data instanceof Error){
                    //         throw data;
                    //       }
                    //     })
                    // }}
                  >
                    {loading ? <LinearProgress variant="indeterminate" color="secondary" /> : ""}
                    ورود
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      marginTop: "1rem",
                      color: primary,
                      width: "80%",
                      borderRadius: "15px",
                      padding: "0.5rem",
                    }}
                    type="submit"
                    // onClick={() => {
                    //   void userLogin();
                    // }}
                  >
                    {/* {loading ? (
                      <LinearProgress
                        variant="indeterminate"
                        color="secondary"
                      />
                    ) : (
                      ""
                    )} */}
                    فراموشی رمز عبور
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
            </Box>
          </Box>
        </Modal>
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
            backgroundColor: background,
            justifyContent: "center",
            alignItems: "space-between",
            boxShadow: "none",
            // borderBottom: `1px solid ${secondary}`,
          }}
        >
          <Toolbar
            sx={{
              position: "relative",
            }}
          >
            {/* <Box
              width={"50%"}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position={"absolute"}
              sx={{
                top: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${Pattern})`,
                backgroundRepeat: "repeat-y repeat-x",
                // outline: "2px solid red",
              }}
            >
              <Box
                position={"absolute"}
                sx={{
                  background: `linear-gradient(90deg, rgba(255, 255, 255,0.6), ${theme.palette.background.default})`,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "100%",
                }}
              />
            </Box> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                color: primary,
                background: secondary,
                borderRadius: "0.5rem",
                ...(open && { display: "none" }),
                "&:hover": {
                  backgroundColor: primaryLight,
                  color: secondary,
                },
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
                color: secondaryDark,
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
                padding: "0.1rem 0.7rem",
                background: "rgba(190,190,190,0.4)",
                zIndex: 100,
                backdropFilter: "blur(2px)",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: primaryLight,
                },
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Typography
                  variant={user.userType != "CONTRACTOR_OR_CONSULTANT" ? "subtitle1" : "body1"}
                  noWrap
                  component="div"
                  fontSize={user.userType != "CONTRACTOR_OR_CONSULTANT" ? "12px" : "14px"}
                  sx={{
                    flexGrow: 1,
                    color: secondary,
                    marginRight: 2,
                  }}
                >
                  {user.userType != "CONTRACTOR_OR_CONSULTANT" &&
                    user.userRoles &&
                    user.userRoles.map((role, index) => (
                      <span key={role.id}>
                        {convertRoleToPersian(role.roleType)}
                        {user.userRoles && index !== user.userRoles.length - 1 ? " - " : ""}
                      </span>
                    ))}
                  {" " + user.userType != "CONTRACTOR_OR_CONSULTANT" && " " +departments.find((item) => item.id === user.parentId)?.label}
                </Typography>
                <Typography
                  variant="subtitle1"
                  noWrap
                  component="div"
                  fontSize={"12px"}
                  sx={{
                    flexGrow: 1,
                    color: secondary,
                    marginRight: 2,
                  }}
                >
                  {fullName}
                </Typography>
              </Box>

              <IconButton
                sx={{
                  color: secondary,
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
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: secondary,
                color: "white",
                borderRadius: "0.5rem",
                marginTop: "0.5rem",
                // @ts-ignore
                width: ref.current?.clientWidth || undefined,
              },
            }}
          >
            <MenuItem>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  setChangePasswordModal({
                    ...changePasswordModal,
                    open: true,
                  });
                }}
                sx={{
                  color: primary,
                  textAlign: "center",
                  width: "100%",
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
                  color: primary,
                  textAlign: "center",
                  width: "100%",
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
          }}
        >
          <Toolbar>
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
            backgroundColor: secondary,
            // backgroundColor: primary,
            position: "relative",
          }}
          PaperProps={{
            sx: {
              backgroundColor: secondary,
              // backgroundColor: primary,
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
              top: "70%",
              left: 0,
              bottom: 0,
              backgroundImage: `url(${Pattern})`,
              backgroundRepeat: "repeat-y repeat-x",
            }}
          >
            <Box
              position={"absolute"}
              sx={{
                background: `linear-gradient(0deg, rgba(76, 87, 96,0.4), ${secondary})`,
                top: 0,
                left: 0,
                bottom: 0,
                width: "100%",
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
                height={theme.spacing(6)}
                style={{
                  filter: "brightness(0) invert(1)",
                  justifySelf: "center",
                  alignSelf: "center",
                  position: "absolute",
                  left: "50%",
                  top: "10%",
                  transform: "translateX(-50%)",
                  display: !open ? "none" : "block",
                }}
              />
              <IconButton
                onClick={handleDrawerClose}
                sx={{
                  color: "white",
                }}
              >
                {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </Box>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {SideBarMenu.map((item, index) =>
              user.userType === "CONTRACTOR_OR_CONSULTANT" && item.primary === Titles.adminPanel || isMailRoom && item.primary === Titles.complaints ? null : (
                <ListItemLink key={index} to={item.to} primary={item.primary} icon={item.icon} hasLink={item.hasLink} hasCollapse={item.hasCollapse} open={open} display={item.mailRoom == isMailRoom ? "block" : (user.userRoles && user.userRoles.some((role) => item.accessNeeded?.includes(role.roleType))) || (isMailRoom && item.accessNeeded.includes("MAIL_ROOM")) ? "block" : "none"}>
                  {item.children?.map((child: SideBarLinkType, index: number) => (
                    <ListItemLink key={index} to={child.to && child.to} primary={child.primary} icon={child.icon} hasLink={child.hasLink} hasCollapse={child.hasCollapse} open={open}>
                      {child.children?.map((subChild: SideBarLinkType, subIndex: number) => (
                        <ListItemLink key={subIndex} to={subChild.to && subChild.to} primary={subChild.primary} icon={subChild.icon} hasLink={subChild.hasLink} hasCollapse={subChild.hasCollapse} open={open} />
                      ))}
                    </ListItemLink>
                  ))}
                </ListItemLink>
              )
            )}
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
            backgroundColor: secondary,
            position: "relative",
          }}
          PaperProps={{
            sx: {
              backgroundColor: secondary,
            },
          }}
        >
          {/* <img
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
          /> */}
          <DrawerHeader />
          <List>
            {SideBarMenu.map((item, index) => (
              <ListItemLink key={index} to={item.to} primary={item.primary} icon={item.icon} hasLink={item.hasLink} hasCollapse={item.hasCollapse} open={open} display={user.userRoles && user.userRoles.some((role) => item.accessNeeded?.includes(role.roleType)) ? "block" : "none"}>
                {item.children?.map((child: SideBarLinkType, index) => (
                  <ListItemLink key={index} to={child.to && child.to} primary={child.primary} icon={child.icon} hasLink={child.hasLink} hasCollapse={child.hasCollapse} open={open}>
                    {child.children?.map((child: SideBarLinkType, index) => (
                      <ListItemLink key={index} to={child.to && child.to} primary={child.primary} icon={child.icon} hasLink={child.hasLink} hasCollapse={child.hasCollapse} open={open} />
                    ))}
                  </ListItemLink>
                ))}
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
      <NewModal
        title="تغییر رمز عبور"
        open={changePasswordModal.open}
        onClose={() =>
          setChangePasswordModal({
            ...changePasswordModal,
            open: false,
          })
        }
        width={{
          xs: "90%",
          sm: "60%",
          md: "40%",
        }}
        height={{
          xs: "90%",
          sm: "60%",
          md: "40%",
        }}
        isCloseable={true}
        backgroundColor={background}
      >
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={1} width={"100%"} justifyContent={"center"} alignItems={"stretch"}>
          <TextField
            label={"رمز عبور قبلی"}
            variant={"outlined"}
            sx={{
              borderRadius: "1rem",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
              // gridColumn: "1/3",
            }}
            fullWidth
            type={"password"}
            value={changePasswordModal.oldPassword}
            onChange={(e) => {
              setChangePasswordModal({
                ...changePasswordModal,
                oldPassword: e.target.value,
              });
            }}
          />
          <div />
          <TextField
            label={"رمز عبور جدید"}
            variant={"outlined"}
            sx={{
              borderRadius: "1rem",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
              // gridColumn: "1/3",
            }}
            fullWidth
            type={"password"}
            value={changePasswordModal.newPassword}
            onChange={(e) => {
              setChangePasswordModal({
                ...changePasswordModal,
                newPassword: e.target.value,
              });
            }}
          />
          <TextField
            label={"تکرار رمز عبور جدید"}
            variant={"outlined"}
            sx={{
              borderRadius: "1rem",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
              // gridColumn: "1/3",
            }}
            fullWidth
            type={"password"}
            value={changePasswordModal.confirmPassword}
            onChange={(e) => {
              setChangePasswordModal({
                ...changePasswordModal,
                confirmPassword: e.target.value,
              });
            }}
          />
          <div />

          <Button
            variant={"contained"}
            sx={{
              // gridColumn: "1/3",
              backgroundColor: primaryGrey,
              color: "white",
              "&:hover": {
                backgroundColor: Green,
              },
            }}
            onClick={() => {
              void changePassword();
            }}
          >
            تغییر رمز عبور
          </Button>
        </Box>
      </NewModal>
    </Box>
  );
}
