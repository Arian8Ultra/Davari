/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLazyQuery } from "@apollo/client";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useUserStore } from "../../Context/UserStore";
import { MutationWrapper } from "../../GraphQL/MutationWrapper";
import { UserLogin } from "../../GraphQL/Users/Mutations";
import { TokenCheckDocument } from "../../gql/graphql";
import {
  Green,
  background,
  primary,
  primaryGrey,
  primaryLight,
  secondary,
} from "../../theme/color";

const SignIn = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const oldPath = searchParams.get("path");
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const setIsMailRoom = useUserStore((state) => state.setIsMailRoom);
  const token = useUserStore((state) => state.token);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState<number>();
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
      console.log("oldPath", oldPath);

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
    <>
      {/* <RadioGroup
        row
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
        }}
      >
        <FormControlLabel
          value="phone"
          control={<Radio />}
          label="شماره تلفن"
        />
        <FormControlLabel
          value="userName"
          control={<Radio />}
          label="نام کاربری"
        />
      </RadioGroup> */}
      <Typography
        variant="body1"
        sx={{
          marginTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        برای ورود نام کاربری و رمز عبور خود را وارد کنید
      </Typography>

      {}

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
            backgroundColor: error?.message ? red[500] : primary,
            color: "white",
            width: "80%",
            borderRadius: "3rem",
            boxShadow: "none",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: primaryLight,
              color: secondary,
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
      </form>

      <Typography
        sx={{
          marginY: "0.2rem",
        }}
      >
        یا
      </Typography>

      <Button
        variant="contained"
        sx={{
          color: background,
          background: primary,
          width: "max-content",
          borderRadius: "3rem",
          padding: "1rem",
          paddingY: "0.5rem",
          outline: "2px soild red",
          boxShadow: "none",
          ":hover": {
            background: primaryLight,
            color: secondary,
          },
        }}
        type="submit"
        href="/login/otp"
      >
        ورود از طریق رمز یکبار مصرف
      </Button>

      <Button
        variant="text"
        sx={{
          marginTop: "0.1rem",
          color: primary,
          width: "80%",
          borderRadius: "15px",
          padding: "0.5rem",
          textShadow: 2,
        }}
        type="submit"
        href="/login/forgotPassword"
      >
        فراموشی رمز عبور
      </Button>
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
    </>
  );
};

export default SignIn;
