/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { background, primary, secondary } from "../../../theme/color";
import { DatePicker } from "@mui/x-date-pickers";
import {
  ComplaintStateStatus,
  useGenerateComplaintVerdictMutation,
  useUpdateComplaintFullMutation,
} from "../../../../generated-types";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import { ComplaintState } from "../../../gql/graphql";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import FileBox from "../../../components/FileBox";

const VerdictPage = () => {
  const { complaintId } = useParams();
  const user = useUserStore.getState().user;
  // const [firstLetter, setFirstLetter] = useState<{
  //   number?: string;
  //   date?: Date | string;
  // }>({
  //   number: "",
  // });
  // const [secondLetter, setSecondLetter] = useState<{
  //   number?: string;
  //   date?: Date | string;
  // }>({
  //   number: "",
  // });
  // const [thirdLetter, setThirdLetter] = useState<{
  //   number?: string;
  //   date?: Date | string;
  // }>({
  //   number: "",
  // });
  // const [verdict, setVerdict] = useState<{
  //   number?: string;
  //   date?: Date | string;
  //   signDate?: Date | string;
  // }>({
  //   number: "",
  // });
  // const [canon, setCanon] = useState<{
  //   number?: string;
  //   date?: Date | string;
  //   approveDate?: Date | string;
  // }>({
  //   number: "",
  // });

  const [paymentDate, setPaymentDate] = useState<Date>();
  const [paymentNum, setPaymentNum] = useState<string>("");
  const [requestDate, setRequestDate] = useState<Date>();
  const [requestNum, setRequestNum] = useState<string>("");
  const [signByPreviousMembersDate, setSignByPreviousMembersDate] =
    useState<Date>();

  const [upadteComplaint] = useUpdateComplaintFullMutation();

  const [generateVerdict] = useGenerateComplaintVerdictMutation({
    variables: {
      input: {
        paymentDate: paymentDate,
        paymentNum: paymentNum,
        requestDate: requestDate,
        requestNum: requestNum,
        signByPreviousMembersDate: signByPreviousMembersDate,
        complaintId: parseInt(complaintId || "") || 0,
        userId: user.id,
      },
    },
  });

  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(2,1fr)"}
        sx={{
          background: background,
          width: {
            xs: "100%",
            md: "80%",
            lg: "70%",
          },
          mx: "auto",
          padding: "2rem",
          borderRadius: "1rem",
          gap: "1rem",
          rowGap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="شناسه واریز"
          value={paymentNum}
          onChange={(e) => {
            setPaymentNum(e.target.value);
          }}
        />
        <DatePicker
          label="تاریخ واریز"
          disableFuture
          value={paymentDate}
          onChange={(newValue) => {
            setPaymentDate(newValue || new Date());
          }}
        />
        <TextField
          label="شناسه درخواست"
          value={requestNum}
          onChange={(e) => {
            setRequestNum(e.target.value);
          }}
        />
        <DatePicker
          label="تاریخ درخواست"
          disableFuture
          value={requestDate}
          onChange={(newValue) => {
            setRequestDate(newValue || new Date());
          }}
        />
        <DatePicker
          label="تاریخ امضا توسط اعضای شورا"
          disableFuture
          value={signByPreviousMembersDate}
          onChange={(newValue) => {
            setSignByPreviousMembersDate(newValue || new Date());
          }}
        />
        <FileBox
          title="اسکن رای شورا"
        />

        <Box
          display={"flex"}
          gridColumn={"span 2"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button
            variant={"contained"}
            sx={{
              background: primary,
              color: secondary,
              fontWeight: "bold",
              boxShadow: "none",
              "&:hover": { background: secondary, color: primary },
            }}
            onClick={() => {
              // if (
              //   !firstLetter.date ||
              //   !firstLetter.number ||
              //   !secondLetter.date ||
              //   !secondLetter.number ||
              //   !thirdLetter.date ||
              //   !thirdLetter.number ||
              //   !verdict.date ||
              //   !verdict.number ||
              //   !verdict.signDate ||
              //   !canon.date ||
              //   !canon.number ||
              //   !canon.approveDate
              // ) {
              //   alert("لطفا تمامی فیلد ها را پر کنید");
              //   return;
              // }
              void generateVerdict({
                onCompleted(data) {
                  console.log("🚀 ~ onCompleted ~ data:", data);
                  void upadteComplaint({
                    variables: {
                      input: {
                        id: parseInt(complaintId || "") || 0,
                        complaintStateId: getComplaintStateWithEnum(
                          ComplaintStateStatus.WaitingForSecondPayment
                        ).id,
                      },
                    },
                  });
                  window.location.href = "/";
                },
                onError(error) {
                  console.log("🚀 ~ onError ~ error", error);
                  alert("خطایی رخ داده است");
                  // window.location.href = "/";
                },
              });
            }}
          >
            ثبت و گرفتن رای نهایی
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default VerdictPage;
