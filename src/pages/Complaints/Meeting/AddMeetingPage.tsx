/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  LinearProgress,
  MenuItem,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { DatePicker, TimeClock, TimePicker } from "@mui/x-date-pickers";
import React from "react";
import { useParams } from "react-router-dom";
import { useGenerateComplaintDecreeMutation } from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import BackButton from "../../../components/BackButton";
import FaTypography from "../../../components/FaComponents/FaTypography";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import { convertToPersianDigits } from "../../../functions/Functions";
import {
  ComplaintStateStatus,
  SendCallToMeetingSmsDocument,
  UpdateComplaintFullDocument,
} from "../../../gql/graphql";
import { primary } from "../../../theme/color";

const AddMeetingPage = () => {
  const { complaintId } = useParams();
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [time, setTime] = React.useState<Date | null>(new Date());
  const [hour, setHour] = React.useState<number>(0);
  const [minute, setMinute] = React.useState<number>(0);
  const [place, setPlace] = React.useState<string>("");
  const user = useUserStore.getState().user;

  const [sendSms, { loading }] = useMutation(SendCallToMeetingSmsDocument, {
    variables: {
      input: {
        complaintId: parseInt(complaintId || "") || 0,
        meetingDate: date?.toDateString() || "",
        meetingTime:
          "PT" + hour + "H" + minute + "M" || "",
        meetingPlace: place,
      },
    },
    onCompleted: (data) => {
      console.log(data);
      // if (data.sms_sendInviteToMeetingSMS.code === 1) {
      void updateComplaint({
        onCompleted(data) {
          console.log(data);
          if (data.complaint_updateComplaint.status.code === 1) {
            alert("با موفقیت ارسال شد");
            void generateDecree({
              onCompleted(data) {
                console.log("generateDecree", data);
              },
              onError(error) {
                console.log("generateDecree", error);
              },
            });
          } else {
            alert("خطا در ارسال");
          }
        },
      });
      // } else {
      //   alert("خطا در ارسال پیامک");
      // }
    },
  });

  const [updateComplaint] = useMutation(UpdateComplaintFullDocument, {
    variables: {
      input: {
        id: parseInt(complaintId || "") || 0,
        complaintStateId: getComplaintStateWithEnum(
          ComplaintStateStatus.CheckingAndUploadingTheSignedDecree
        ).id,
      },
    },
  });
  const [generateDecree] = useGenerateComplaintDecreeMutation({
    variables: {
      input: {
        complaintId: parseInt(complaintId || "") || 0,
        // accusedSignDate: new Date().toDateString(),
        // accuserSignDate: new Date().toDateString(),
        canonDate: new Date().toDateString(),
        canonDate2: new Date().toDateString(),
        canonNum: "0",
        canonNum2: "0",
        circularDate: new Date().toDateString(),
        circularNum: "0",
        clause: "0",
        deliveryDate: new Date().toDateString(),
        userId: user.id,
      },
    },
  });
  return (
    <>
      <BackButton />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(6, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"2rem"}
        paddingTop={"0"}
        border={`2px solid ${primary}`}
        borderRadius={"1rem"}
        position={"relative"}
        marginY={"3rem"}
        width={{
          xs: "100%",
          sm: "100%",
          md: "80%",
          lg: "70%",
          xl: "66%",
        }}
        sx={{
          background: colors.grey[50],
          display: "grid",
        }}
        marginX={"auto"}
      >
        <Box
          gridColumn={"span 6"}
          borderRadius={"1rem"}
          sx={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            maxWidth: "70%",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaTypography variant="h6" textAlign={"center"}>
            تعیین زمان جلسه مربوط به درخواست داوری به شماره
          </FaTypography>
          <Typography variant="h6" textAlign={"center"}>
            {" : "}
            {convertToPersianDigits(complaintId)}
          </Typography>
        </Box>

        <DatePicker
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          sx={{
            gridColumn: "span 3",
            mt: "50px",
          }}
          disablePast
        />

        <FaTypography
          sx={{
            gridColumn: "span 1",
            mt: "50px",
          }}
        >
          زمان جلسه :
        </FaTypography>

        <TextField
          label="ساعت"
          variant="outlined"
          sx={{
            gridColumn: "span 1",
            mt: "50px",
          }}
          size="medium"
          type="number"
          onChange={(e) => {
            setHour(parseInt(e.target.value));
          }}
          value={hour}
          select
        >
          {[...Array(24)].map((_, i) => (
            <MenuItem key={i} value={i}>
              {convertToPersianDigits(i)}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="دقیقه"
          variant="outlined"
          sx={{
            gridColumn: "span 1",
            mt: "50px",
          }}
          size="medium"
          type="number"
          onChange={(e) => {
            setMinute(parseInt(e.target.value));
          }}
          value={minute}
          select
        >
          {[...Array(60)].map((_, i) => (
            <MenuItem key={i} value={i}>
              {convertToPersianDigits(i)}
            </MenuItem>
          ))}
        </TextField>

        {/* <TimeClock
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}

          sx={{
            gridColumn: "span 3",
            mt: "50px",
          }}
          ampm={false}
        /> */}

        <TextField
          label="محل برگزاری جلسه"
          variant="outlined"
          sx={{
            gridColumn: "span 6",
            //   mt: "50px",
          }}
          size="medium"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
          value={place}
        />
        <div
          style={{
            gridColumn: "span 6",
          }}
        >
          {loading && <LinearProgress />}
        </div>

        <Button
          variant="contained"
          sx={{
            gridColumn: "span 6",
            fontSize: "1.1rem",
            width: "max-content",
            padding: "0.5rem 2rem",
            justifySelf: "flex-end",
            background: primary,
            color: "white",
            boxShadow: "none",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: colors.green[500],
              color: "white",
              boxShadow: "none",
            },
          }}
          onClick={() => {
            void sendSms();
          }}
        >
          ارسال پیامک
        </Button>
      </Box>
    </>
  );
};

export default AddMeetingPage;
