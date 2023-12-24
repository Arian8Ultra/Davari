/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useMutation } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../Context/UserStore";
import { MutationWrapper } from "../../GraphQL/MutationWrapper";
import { OTPMutation } from "../../GraphQL/Users/Mutations";
import BackButton from "../../components/BackButton";
import FaTextField from "../../components/FaComponents/FaTextField";
import FaTypography from "../../components/FaComponents/FaTypography";
import { TimerWithProgress } from "../../components/Timer";
import { setTimer } from "../../components/setTimer";
import {
  SentOtpMutationDocument,
  UserSignInOtpMutationDocument,
} from "../../gql/graphql";
import { Green, primary } from "../../theme/color";

const OTPpage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [sent, setSent] = useState<boolean>(false);
  const setUser = useUserStore((state) => state.setUser);
  const setIsMailRoom = useUserStore((state) => state.setIsMailRoom);
  const token = useUserStore((state) => state.token);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<{
    message: string;
    code: number;
  }>();
  const [sentOTP] = useMutation(SentOtpMutationDocument, {
    variables: {
      phoneNumber: phoneNumber || "",
    },
  });
  const [OTPsignin] = useMutation(UserSignInOtpMutationDocument, {
    variables: {
      input: {
        password: OTP,
        phoneNumber: phoneNumber,
      },
    },
  });

  const {
    handleMutation,
    loading: loadingMutation,
    error,
  } = MutationWrapper(OTPMutation, "user_oneTimePassword");

  useEffect(() => {
    console.log("token" + token);
    if (token && token !== "") {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <>
      <BackButton />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          void OTPsignin({
            onCompleted(data, clientOptions) {
              console.log(data);

              if (data.user_signInOTP.status.code === 1) {
                const expireDate = new Date(
                  data.user_signInOTP.result?.expireDate
                );
                setUser(
                  // @ts-ignore
                  data.user_signInOTP.result?.user,
                  data.user_signInOTP.result?.token,
                  expireDate
                );
                localStorage.setItem(
                  "token",
                  data.user_signInOTP.result?.token || ""
                );
                setLoginError(undefined);
                data.user_signInOTP.result?.user?.parentId &&
                  setIsMailRoom(
                    data.user_signInOTP.result?.user.parentId ===
                      "e7a85297-91d4-4f27-a4b2-ff394fe71dd3"
                  );
              }
            },
          });
          // void handleMutation({
          //   variables: {
          //     input: {
          //       phoneNumber: phoneNumber,
          //       password: OTP,
          //     },
          //   },
          // }).then((data) => {
          //   console.log(data);
          //   if (data instanceof Error) {
          //     setLoginError({
          //       message: data.message,
          //       code: data.name === "Error" ? 500 : 400,
          //     });
          //   } else {
          //     const expireDate = new Date(data.expireDate);
          //     setUser(data.user, data.token, expireDate);
          //     localStorage.setItem("token", data.token);
          //     setLoginError(undefined);
          //     setIsMailRoom(
          //       data.user.parentId ===
          //         "e7a85297-91d4-4f27-a4b2-ff394fe71dd3"
          //     );
          //   }
          // });
        }}
      >
        <FaTypography
          variant="body1"
          sx={{
            marginTop: "1rem",
            paddingBottom: "1rem",
            textAlign: "center",
            width: "90%",
          }}
        >
          برای ورود شماره همراه خود را وارد کنید تا رمز عبور برای شما
          ارسال شود
        </FaTypography>
        <FaTextField
          label="شماره تلفن"
          variant="outlined"
          autoComplete="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          // helperText={loginError?.message}
          value={phoneNumber}
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
        >
          <TextField
            label="رمز ارسال شده"
            variant="outlined"
            autoComplete="none"
            onChange={(e) => setOTP(String(e.target.value))}
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
              // mr: "10%",
              "&:hover": {
                backgroundColor: Green,
              },
            }}
            onClick={() => {
              void sentOTP({
                onCompleted(data) {
                  console.log(data);
                  if (data.user_oneTimePassword.code === 1) {
                    void setTimer({
                      min: 2,
                      sec: 0,
                      name: "OTP",
                      onTimeOut() {
                        setSent(false);
                      },
                    });
                    setSent(true);
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
              name="OTP"
              onTimeOut={() => {
                setSent(false);
                localStorage.removeItem("OTP");
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
    </>
  );
};

export default OTPpage;
