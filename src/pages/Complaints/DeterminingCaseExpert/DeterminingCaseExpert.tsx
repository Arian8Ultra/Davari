import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import {
  background,
  primary,
  secondary,
  secondaryDark,
  secondaryLight,
  secondaryLighter,
} from "../../../theme/color";
import {
  useGetUserWithFilterQuery,
  useUpdateComplaintFullMutation,
} from "../../../../generated-types";
import { BsPersonAdd } from "react-icons/bs";
import FaTypography from "../../../components/FaComponents/FaTypography";
import { grey } from "@mui/material/colors";
import { ComplaintState } from "../../../gql/graphql";

const DeterminingCaseExpert = () => {
  const { complaintId } = useParams();
  const [selectedExpert, setSelectedExpert] =
    React.useState<string>();
  const [updateComplaint] = useUpdateComplaintFullMutation();

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
          md: "70%",
          lg: "65%",
          xl: "60%",
        },
        padding: "2rem",
        background: background,
        borderRadius: "1rem",
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
          borderRadius: "2rem",
          gap: "0.5rem",
          "&:hover": {
            background: secondary,
            color: primary,
          },
        }}
        href= {`signUp/determiningCaseExpert/newUser/${complaintId || ""}`}
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
            borderRadius: "1rem 1rem 0 0",
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
        {data?.user_getUsers?.result?.items?.map(
          (item, index: number) => (
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
                  selectedExpert === item.id
                    ? primary
                    : secondaryLighter,
                borderRadius:
                  index === 0
                    ? "0 0 1rem 1rem"
                    : index ===
                        data?.user_getUsers?.result?.items?.length &&
                      data?.user_getUsers?.result?.items?.length - 1
                    ? "1rem 1rem 0 0"
                    : "0",
                cursor: "pointer",
                "&:hover": {
                  background: grey[300],
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
          )
        )}
      </Box>
      <Button
        variant={"contained"}
        color={"primary"}
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
                complaintState:
                  ComplaintState.DeterminingMeetingByMailRoomExpert,
                councilExpertId: selectedExpert,
                id: parseInt(complaintId || "0"),
              },
            },
            onCompleted(data) {
              console.log(data);
              alert("با موفقیت اختصاص داده شد");
            },
          });
        }}
      >
        اختصاص دادن به کارشناس انتخاب شده
      </Button>
    </Box>
  );
};

export default DeterminingCaseExpert;
