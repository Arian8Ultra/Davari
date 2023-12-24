/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FaTextField from "../../components/FaComponents/FaTextField";
import { Green, primary } from "../../theme/color";
import { useMutation } from "@apollo/client";
import {
  ForgetPasswordMutationDocument,
  LoginUserDocument,
} from "../../gql/graphql";
import { useUserStore } from "../../Context/UserStore";
import { MutationWrapper } from "../../GraphQL/MutationWrapper";
import { UserLogin } from "../../GraphQL/Users/Mutations";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Timer, { TimerWithProgress } from "../../components/Timer";
import { getTimer, setTimer } from "../../components/setTimer";

const ForgetPassword = () => {
  const savedData = localStorage.getItem("forgetPassword");
  const [nationalCode, setNationalCode] = useState<string>(
    savedData ? JSON.parse(savedData).nationalCode : undefined
  );
  const [phone, setPhone] = useState<string>(
    savedData ? JSON.parse(savedData).phone : undefined
  );
  const [OTP, setOTP] = useState<string>();
  const [sent, setSent] = useState<boolean>(false);
  const setUser = useUserStore((state) => state.setUser);
  const setIsMailRoom = useUserStore((state) => state.setIsMailRoom);
  const token = useUserStore((state) => state.token);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<{
    message: string;
    code: number;
  }>();
  const [forgotPassword] = useMutation(
    ForgetPasswordMutationDocument,
    {
      variables: {
        input: {
          nationalCode: nationalCode || "",
          phoneNumber: phone || "",
        },
      },
    }
  );

  useEffect(() => {
    if (getTimer({ name: "forgetPassword" }) ?? 0 > 0) {
      setSent(true);
    }
  }, []);

  const {
    handleMutation,
    loading: loadingMutation,
    error,
  } = MutationWrapper(LoginUserDocument, "user_signIn");

  useEffect(() => {
    console.log("token" + token);
    if (token && token !== "") {
      navigate("/");
    }
  }, [navigate, token]);
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        void handleMutation({
          variables: {
            userName: nationalCode,
            password: OTP,
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
    >
      <BackButton />
      <Typography
        variant="body1"
        sx={{
          marginTop: "1rem",
          paddingBottom: "1rem",
          textAlign: "center",
          width: "80%",
        }}
      >
        برای ارسال رمز عبور جدید کد ملی و شماره همراه خود را وارد کنید
        تا رمز عبور جدید برای شما ارسال شود
      </Typography>
      <FaTextField
        label="نام کاربری"
        variant="outlined"
        autoComplete="username"
        onChange={(e) => setNationalCode(e.target.value)}
        // helperText={loginError?.message}
        value={nationalCode}
        InputProps={{
          sx: {
            borderRadius: "10px",
          },
        }}
        sx={{
          width: "80%",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
            {
              borderRadius: "10px",
            },
        }}
      />
      <FaTextField
        label="شماره تلفن"
        variant="outlined"
        autoComplete="phoneNumber"
        onChange={(e) => setPhone(e.target.value)}
        // helperText={loginError?.message}
        value={phone}
        InputProps={{
          sx: {
            borderRadius: "10px",
          },
        }}
        sx={{
          width: "80%",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
            {
              borderRadius: "10px",
            },
        }}
      />

      <Box
        display={"flex"}
        width={"80%"}
        gap={1}
        flexWrap={"nowrap"}
        justifyItems={"center"}
        alignItems={"center"}
      >
        <TextField
          label="رمز ارسال شده"
          variant="outlined"
          autoComplete="none"
          onChange={(e) => setOTP(e.target.value)}
          disabled={!sent}
          // helperText={loginError?.message}
          value={OTP}
          InputProps={{
            sx: {
              borderRadius: "10px",
            },
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
              {
                borderRadius: "10px",
              },
          }}
        />
        <Button
          variant="contained"
          disabled={sent}
          sx={{
            // marginTop: "1rem",
            backgroundColor: primary,
            color: "white",
            width: "max-content",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "0.5rem",
            wordWrap: "nowrap",
            flexWrap: "nowrap",
            // mr: "10%",
            "&:hover": {
              backgroundColor: Green,
            },
          }}
          onClick={() => {
            void forgotPassword({
              onCompleted(data) {
                console.log(data);
                localStorage.setItem(
                  "forgetPassword",
                  JSON.stringify({
                    nationalCode,
                    phone,
                  })
                );
                if (data.user_forgotPassword.code === 1) {
                  setSent(true);
                  setTimer({
                    name: "forgetPassword",
                    min: 2,
                    onTimeOut() {
                      setSent(false);
                      localStorage.removeItem("forgetPassword");
                    },
                  });
                }
              },
            });
          }}

          // type="submit"
        >
          ارسال رمز
        </Button>
        {sent && (
          <TimerWithProgress
            name="forgetPassword"
            onTimeOut={() => {
              setSent(false);
              localStorage.removeItem("forgetPassword");
            }}
          />
        )}
      </Box>

      <Button
        variant="contained"
        sx={{
          // marginTop: "1rem",
          backgroundColor: primary,
          color: "white",
          width: "80%",
          borderRadius: "10px",
          boxShadow: "none",
          padding: "0.5rem",
          display: sent ? "flex" : "none",
          // mr: "10%",
          "&:hover": {
            backgroundColor: Green,
          },
        }}
        type="submit"
      >
        ورود
      </Button>
    </form>
  );
};

export default ForgetPassword;
