/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { BsPersonAdd } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  ComplaintStateStatus,
  useGetUserWithFilterQuery,
  useUpdateComplaintFullMutation,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import FaTypography from "../../../components/FaComponents/FaTypography";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import {
  background,
  primary,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import BackButton from "../../../components/BackButton";

const DeterminingCaseExpert = () => {
  const { complaintId } = useParams();
  const [selectedExpert, setSelectedExpert] = React.useState<string>();
  const [updateComplaint] = useUpdateComplaintFullMutation();
  const { user } = useUserStore();

  const { data } = useGetUserWithFilterQuery({
    variables: {
      filter: {
        parent: {
          userName: {
            eq: "Dadgostari",
          },
        },
      },
    },
    onCompleted(data) {
      console.log(data);
    },
  });
  return (
    <>
    <BackButton/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
          padding: "2rem",
          background: background,
          borderRadius: "0.5rem",
          gap: "1rem",
        }}
      >
        <h2>تعیین کارشناس</h2>
        <Button
          variant={"contained"}
          color={"primary"}
          sx={{
            background: primary,
            color: secondaryDark,
            boxShadow: "none",
            borderRadius: "0.5rem",
            gap: "0.5rem",
            "&:hover": {
              background: secondary,
              color: primary,
            },
          }}
          href={`/signUp/determiningCaseExpert/newUser/${complaintId || ""}`}
        >
          <BsPersonAdd />
          افزودن کارشناس جدید
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            width: "100%",
          }}
        >
          <Typography
            variant={"body1"}
            textAlign={"center"}
            sx={{
              background: secondary,
              borderRadius: "0.5rem 0.5rem 0 0",
              padding: "0.5rem",
              color: primary,
            }}
          >
            لیست کارشناسان
          </Typography>
          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(4,1fr)"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            padding={"0.5rem"}
            sx={{
              background: secondary,
              mt: "-2px",
            }}
          >
            <Typography
              variant={"body1"}
              textAlign={"center"}
              sx={{
                gridColumn: "span 1",
                color: primary,
              }}
            >
              نام و نام خانوادگی
            </Typography>
            <Typography
              variant={"body1"}
              textAlign={"center"}
              sx={{
                gridColumn: "span 1",
                color: primary,
              }}
            >
              نام کاربری
            </Typography>
            <Typography
              variant={"body1"}
              textAlign={"center"}
              sx={{
                gridColumn: "span 1",
                color: primary,
              }}
            >
              کد ملی
            </Typography>
            <Typography
              variant={"body1"}
              textAlign={"center"}
              sx={{
                gridColumn: "span 1",
                color: primary,
              }}
            >
              شماره تماس
            </Typography>
          </Box>
          {data?.user_getUsers?.result?.items?.map((item, index: number) => (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(4,1fr)"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
              padding={"0.5rem"}
              key={item.id}
              sx={{
                background:
                  selectedExpert === item.id ? primary : "rgba(0,0,0,0.1)",
                borderRadius: index === 0 ? "none" : "0 0 0.5rem 0.5rem",
                cursor: "pointer",
                "&:hover": {
                  // background: grey[300],
                  background: selectedExpert === item.id ? primary : grey[300],
                },
              }}
              onClick={() => {
                setSelectedExpert(item.id || "");
              }}
            >
              <Typography
                variant={"body1"}
                textAlign={"center"}
                sx={{
                  gridColumn: "span 1",
                  color: "black",
                }}
              >
                {item.fullName}
              </Typography>

              <FaTypography
                variant={"body1"}
                textAlign={"center"}
                sx={{
                  gridColumn: "span 1",
                  color: "black",
                }}
              >
                {item.userName}
              </FaTypography>

              <FaTypography
                variant={"body1"}
                textAlign={"center"}
                sx={{
                  gridColumn: "span 1",
                  color: "black",
                }}
              >
                {item.nationalCode}
              </FaTypography>
              <FaTypography
                variant={"body1"}
                textAlign={"center"}
                sx={{
                  gridColumn: "span 1",
                  color: "black",
                }}
              >
                {item.phoneNumber}
              </FaTypography>
            </Box>
          ))}
        </Box>
        <Button
          variant={"contained"}
          color={"primary"}
          disabled={!selectedExpert}
          sx={{
            background: primary,
            color: secondaryDark,
            boxShadow: "none",
            borderRadius: "2rem",
            gap: "0.5rem",
            "&:hover": {
              background: secondary,
              color: primary,
            },
          }}
          onClick={() => {
            void updateComplaint({
              variables: {
                input: {
                  complaintStateId: getComplaintStateWithEnum(
                    ComplaintStateStatus.DeterminingMeetingByMailRoomExpert
                  ).id,
                  councilExpertIds: [selectedExpert || ""],
                  id: parseInt(complaintId || "0"),
                },
              },
              onCompleted(data) {
                console.log(data);
                alert("با موفقیت اختصاص داده شد");
                if (data.complaint_updateComplaint.status.code === 1) {
                  window.location.href = `/`;
                }
              },
            });
          }}
        >
          اختصاص دادن به کارشناس انتخاب شده
        </Button>
      </Box>
    </>
  );
};

export default DeterminingCaseExpert;
