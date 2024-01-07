/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import {
  ComplaintState,
  GenarateDateOfBirthDocument,
  GetAllOganizationUsersDocument,
  GetComplaintDocument,
  PersonDataDto,
  SendCallToMeetingSmsDocument,
  UpdateComplaintFullDocument,
  UserSignUpDocument,
  UserType,
} from "../../../gql/graphql";
import { primary } from "../../../theme/color";
import {
  confirmPhoneNumeber,
  generatePassword,
  sendCode,
  user_getUserInfo,
  validatePhoneNumber,
} from "./gql/mutations";

const CaseExpertSignUp = () => {
  const { complaintId } = useParams();

  const [infos, setInfos] = React.useState<{
    nationalCode?: string;
    phoneNumber?: string;
    yearOfBirth?: string;
    monthOfBirth?: string;
    dayOfBirth?: string;
    firstName?: string;
    lastName?: string;
    fatherName?: string;
    isAlive?: boolean;
    gender?: "MALE" | "FEMALE";
    confirmCode?: string;
    password?: string;
  }>();

  const [data, setData] = React.useState<PersonDataDto>();
  const [done, setDone] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>();
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const [updateComplaint] = useMutation(UpdateComplaintFullDocument);
  const {
    handleMutation: getUserInfo,
    loading: loadingGetUserInfo,
    error: errorGetUserInfo,
  } = MutationWrapper(user_getUserInfo, "user_getUserInfo");
  const [checkPhoneNumber, { error, loading }] = useMutation(
    validatePhoneNumber,
    {
      variables: {
        nationalCode: infos?.nationalCode,
        phoneNumber: infos?.phoneNumber,
      },
    }
  );

  const [sendCodeMutation] = useMutation(sendCode, {
    variables: {
      phoneNumber: infos?.phoneNumber,
    },
  });
  const [confirmPhoneNumeberMutation] = useMutation(
    confirmPhoneNumeber,
    {
      variables: {
        phoneNumber: infos?.phoneNumber,
        verificationCode: infos?.confirmCode,
      },
    }
  );

  const { data: users } = useQuery(GetAllOganizationUsersDocument);
  const [generatePasswordMutation, { data: pass }] =
    useMutation(generatePassword);
  const [userSignUp] = useMutation(UserSignUpDocument, {});
  const [sendSms] = useMutation(SendCallToMeetingSmsDocument);
  const [covertDate] = useMutation(GenarateDateOfBirthDocument);
  const { data: complaint } = useQuery(GetComplaintDocument, {
    variables: {
      id: parseInt(complaintId || "0"),
    },
  });
  return (
    <Box
      display={"grid"}
      sx={{
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "1rem",
        width: "70%",
        height: "100%",
        columnGap: "0.2rem",
      }}
    >
      <TextField
        id="outlined-basic"
        label="کد ملی"
        variant="outlined"
        sx={{ gridColumn: "span 3" }}
        value={infos?.nationalCode}
        disabled={!!data}
        onChange={(e) =>
          setInfos((prevInfos) => ({
            ...prevInfos,
            nationalCode: String(e.target.value),
            phoneNumber: prevInfos?.phoneNumber || "",
            yearOfBirth: prevInfos?.yearOfBirth || "",
            monthOfBirth: prevInfos?.monthOfBirth || "",
            dayOfBirth: prevInfos?.dayOfBirth || "",
          }))
        }
      />
      <TextField
        id="outlined-basic"
        label="شماره تلفن"
        variant="outlined"
        sx={{ gridColumn: "span 3" }}
        value={infos?.phoneNumber}
        disabled={!!data}
        onChange={(e) =>
          setInfos((prevInfos) => ({
            ...prevInfos,
            nationalCode: prevInfos?.nationalCode || "",
            phoneNumber: String(e.target.value),
            yearOfBirth: prevInfos?.yearOfBirth || "",
            monthOfBirth: prevInfos?.monthOfBirth || "",
            dayOfBirth: prevInfos?.dayOfBirth || "",
          }))
        }
      />
      <Typography
        variant="h6"
        textAlign={"center"}
        sx={{ gridColumn: "span 3" }}
      >
        تاریخ تولد
      </Typography>
      <TextField
        id="outlined-basic-day"
        label="روز"
        variant="outlined"
        sx={{ gridColumn: "span 1" }}
        value={infos?.dayOfBirth}
        disabled={!!data}
        type="number"
        onChange={(e) =>
          setInfos((prevInfos) => ({
            ...prevInfos,
            nationalCode: prevInfos?.nationalCode || "",
            phoneNumber: prevInfos?.phoneNumber || "",
            yearOfBirth: prevInfos?.yearOfBirth || "",
            monthOfBirth: prevInfos?.monthOfBirth || "",
            dayOfBirth: String(e.target.value),
          }))
        }
      />
      <TextField
        id="outlined-basic-month"
        label="ماه"
        variant="outlined"
        sx={{ gridColumn: "span 1" }}
        value={infos?.monthOfBirth}
        disabled={!!data}
        type="number"
        onChange={(e) =>
          setInfos((prevInfos) => ({
            ...prevInfos,
            nationalCode: prevInfos?.nationalCode || "",
            phoneNumber: prevInfos?.phoneNumber || "",
            yearOfBirth: prevInfos?.yearOfBirth || "",
            monthOfBirth: String(e.target.value),
            dayOfBirth: prevInfos?.dayOfBirth || "",
          }))
        }
      />
      <TextField
        id="outlined-basic-year"
        label="سال"
        variant="outlined"
        sx={{ gridColumn: "span 1" }}
        disabled={!!data}
        value={infos?.yearOfBirth}
        type="number"
        onChange={(e) =>
          setInfos((prevInfos) => ({
            ...prevInfos,
            nationalCode: prevInfos?.nationalCode || "",
            phoneNumber: prevInfos?.phoneNumber || "",
            yearOfBirth: String(e.target.value),
            monthOfBirth: prevInfos?.monthOfBirth || "",
            dayOfBirth: prevInfos?.dayOfBirth || "",
          }))
        }
      />
      <Button
        variant="contained"
        sx={{
          gridColumn: "span 3",
          background: primary,
          display: data ? "none" : "block",
        }}
        onClick={() => {
          const monthOfBirthNew =
            infos?.monthOfBirth?.length === 1
              ? "0" + infos?.monthOfBirth
              : infos?.monthOfBirth;
          const dayOfBirthNew =
            infos?.dayOfBirth?.length === 1
              ? "0" + infos?.dayOfBirth
              : infos?.dayOfBirth;
          const dateOfBirth =
            infos?.yearOfBirth && monthOfBirthNew && dayOfBirthNew
              ? infos?.yearOfBirth + monthOfBirthNew + dayOfBirthNew
              : "";

          void getUserInfo({
            variables: {
              nationalCode: infos?.nationalCode,
              dateOfBirth: dateOfBirth,
            },
          })
            .then((res: PersonDataDto) => {
              if (res instanceof Error) {
                setErrorMessage(
                  "کد ملی و تاریخ تولد با هم انطباق ندارند"
                );
                return;
              }
              void checkPhoneNumber().then((phoneRes) => {
                console.log("phoneRes", phoneRes);
                if (
                  phoneRes.data?.user_validatePhoneNumber.code == 1
                ) {
                  setData(res);
                  setErrorMessage("");
                  void sendCodeMutation();
                  setInfos((prevInfos) => ({
                    ...prevInfos,
                    firstName: res?.firstName,
                    lastName: res?.lastName,
                    fatherName: res?.fatherName,
                    isAlive: res?.isAlive,
                    gender: res?.gender,
                  }));
                } else {
                  setErrorMessage(
                    "شماره تلفن وارد شده معتبر نیست یا برای این کد ملی نمیباشد"
                  );
                }
                console.log(res);
              });
            })
            .catch((err) => {
              console.log(err);
              setErrorMessage("کد ملی وارد شده معتبر نیست");
            });
        }}
      >
        تایید
      </Button>
      {data && (
        <>
          <Typography
            variant="h6"
            textAlign={"center"}
            sx={{ gridColumn: "span 3" }}
          >
            اطلاعات شخصی
          </Typography>
          <Typography
            variant="body1"
            textAlign={"start"}
            sx={{ gridColumn: "span 3" }}
          >
            نام: {data.firstName}
          </Typography>
          <Typography
            variant="body1"
            textAlign={"start"}
            sx={{ gridColumn: "span 3" }}
          >
            نام خانوادگی: {data.lastName}
          </Typography>
          {/* <Typography
            variant="body1"
            textAlign={"start"}
            sx={{ gridColumn: "span 3" }}
          >
            نام پدر: {data.fatherName}
          </Typography>
          <Typography
            variant="body1"
            textAlign={"start"}
            sx={{ gridColumn: "span 3" }}
          >
            جنس: {data.gender == "MALE" ? "مرد" : "زن"}
          </Typography> */}
          <TextField
            id="outlined-basic-year"
            label="کد تایید ارسال شده به تلفن همراه"
            variant="outlined"
            sx={{ gridColumn: "span 3" }}
            value={infos?.confirmCode}
            type="number"
            onChange={(e) =>
              setInfos((prevInfos) => ({
                ...prevInfos,
                confirmCode: String(e.target.value),
              }))
            }
          />
          <Button
            variant="contained"
            sx={{
              gridColumn: "span 3",
              background: primary,
            }}
            onClick={() => {
              void confirmPhoneNumeberMutation().then((res) => {
                if (res.data?.user_confirmPhoneNumber.code == 1) {
                  console.log(res);
                }
              });
              void generatePasswordMutation().then((res) => {
                const password = res.data?.test_generatePassword;
                setInfos((prevInfos) => ({
                  ...prevInfos,
                  password: res.data?.test_generatePassword,
                }));
                if (password) {
                  void userSignUp({
                    variables: {
                      phoneNumber: infos?.phoneNumber,
                      fullName:
                        infos?.firstName + " " + infos?.lastName,
                      password: password,
                      confirmPassword: password,
                      userName:
                        infos?.nationalCode && complaintId
                          ? infos?.nationalCode + complaintId
                          : "",
                      nationalCode: infos?.nationalCode,
                      parentId:
                        users?.user_getUsers.result?.items?.find(
                          (a) => a.userName == "Dadgostari"
                        )?.id,
                      email: "",
                      userType: UserType.Individual,
                      // to do
                      birthDate: new Date(),
                    },
                    onCompleted(data, clientOptions) {
                      console.log(data);
                      if (data.user_signUp.status.code === 1) {
                        void updateComplaint({
                          variables: {
                            input: {
                              complaintState:
                                ComplaintState.DeterminingMeetingByMailRoomExpert,
                              councilExpertId:
                                data.user_signUp.result?.id,
                              id: parseInt(complaintId || "0"),
                            },
                          },
                        });
                        setDone(true);
                      }
                    },
                  });
                }
              });
            }}
          >
            تایید
          </Button>
        </>
      )}
      {errorMessage && (
        <Typography
          variant="body1"
          textAlign={"center"}
          sx={{ gridColumn: "span 3", color: "red" }}
        >
          {errorMessage}
        </Typography>
      )}
      {done && (
        <Box
          sx={{
            gridColumn: "span 3",
            display: "grid",
            placeItems: "center",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "1rem",
          }}
        >
          <Typography
            variant="body1"
            textAlign={"center"}
            sx={{ gridColumn: "span 2", color: "green" }}
          >
            ثبت نام با موفقیت انجام شد
          </Typography>

          <Typography
            variant="body1"
            textAlign={"center"}
            sx={{ gridColumn: "span 1" }}
          >
            نام کاربری
          </Typography>

          <Typography
            variant="body1"
            textAlign={"center"}
            sx={{ gridColumn: "span 1" }}
          >
            {infos?.nationalCode && complaintId
              ? infos?.nationalCode + complaintId
              : ""}
          </Typography>

          <Typography
            variant="body1"
            textAlign={"center"}
            sx={{ gridColumn: "span 1" }}
          >
            رمز عبور
          </Typography>

          <Typography
            variant="body1"
            textAlign={"center"}
            sx={{ gridColumn: "span 1" }}
          >
            {infos?.password && complaintId ? infos?.password : ""}
          </Typography>

          <Button
            variant="contained"
            sx={{
              gridColumn: "span 2",
              background: primary,
            }}
            onClick={() => {
              navigate("/portal");
            }}
          >
            بازگشت به پورتال
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CaseExpertSignUp;
