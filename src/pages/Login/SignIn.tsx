/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLazyQuery } from "@apollo/client";
import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../Context/UserStore";
import { MutationWrapper } from "../../GraphQL/MutationWrapper";
import { UserLogin } from "../../GraphQL/Users/Mutations";
import pboLogo from "../../assets/PboLogo.png";
import sazmanImage from "../../assets/Sazman.jpeg";
import { TokenCheckDocument } from "../../gql/graphql";
import { Green, background, primary } from "../../theme/color";

const SignIn = () => {
  const { oldPath } = useParams<{ oldPath: string }>();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const setIsMailRoom = useUserStore((state) => state.setIsMailRoom);
  const setAccesses = useUserStore((state) => state.setAccesses);
  const token = useUserStore((state) => state.token);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<{
    message: string;
    code: number;
  }>();

  const {
    handleMutation,
    loading: loadingMutation,
    error,
  } = MutationWrapper(UserLogin, "user_signIn");

  useEffect(() => {
    console.log("token" + token);
    if (token && token !== "") {
      if (oldPath && oldPath !== "") {
        navigate(oldPath);
      } else {
        navigate("/");
      }
    }
  }, [navigate, oldPath, token]);

  const [TokenCheck] = useLazyQuery(TokenCheckDocument, {
    onCompleted(data) {
      console.log("tokenCheck", data.user_isTokenValid);
    },
    // fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    pollInterval: 1000,
  });

  useEffect(() => {
    if (token && token !== "") {
      void TokenCheck({
        onCompleted(data) {
          console.log("tokenCheck", data.user_isTokenValid);
          if (data?.user_isTokenValid) {
            if (oldPath && oldPath !== "") {
              // navigate(oldPath);
              window.location.href = oldPath;
            } else {
              // navigate("/");
              window.location.href = "/";
            }
          }
        },
        onError(error) {
          console.log(error);
        },
      });
    }
  }, [TokenCheck, token, oldPath, navigate]);

  return (
      <Box
        width={"100%"}
        height={"100dvh"}
        sx={{
          background: `url(${sazmanImage})`,
          boxSizing: "border-box",
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
              // top: "50%",
              // left: "65%",
              top: "0%",
              left: "50%",
              // width: "20%",
              width: "15%",
              transform: "translate(-50%, 5%)",
              // transform: "translate(-50%, -50%)",
              filter:
                "drop-shadow(0px 0px 5px rgba(0,0,0,0.1)) contrast(1.5) saturate(0) brightness(0)",
              // filter:
              //   "drop-shadow(0px 0px 5px rgba(0,0,0,0.5)) contrast(1.5) saturate(0) brightness(10)",
            }}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              backgroundColor: background,
              transform: "translate(50%, -50%)",
              top: "50%",
              right: "50%",
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
            padding={5}
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
                fontSize: "2rem",
              }}
            >
              <FaBalanceScale size="3rem" />
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
                    userName: userName,
                    password: password,
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
                    setIsMailRoom(
                      data.user.parentId ===
                        "e7a85297-91d4-4f27-a4b2-ff394fe71dd3"
                    );
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
                onChange={(e) => setUserName(e.target.value)}
                // helperText={loginError?.message}
                error={loginError ? true : false}
                value={userName}
                InputProps={{
                  sx: {
                    borderRadius: "15px",
                  },
                }}
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
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? <BsEye /> : <BsEyeSlash />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "15px",
                  },
                }}
                onChange={(e) => setPassword(e.target.value)}
                helperText={loginError?.message}
                error={loginError ? true : false}
                value={password}
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
                  borderRadius: "10px",
                  boxShadow: "none",
                  padding: "0.5rem",
                  "&:hover": {
                    backgroundColor: Green,
                  },
                }}
                type="submit"
              >
                {loadingMutation ? (
                  <LinearProgress
                    variant="indeterminate"
                    color="secondary"
                  />
                ) : (
                  ""
                )}
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
              >
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
  );
};

export default SignIn;
