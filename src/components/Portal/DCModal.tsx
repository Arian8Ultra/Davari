/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableHead,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  ComplaintStateStatus,
  useGetChildrenOfParentLazyQuery,
  useUpdateComplaintFullMutation,
} from "../../../generated-types";
import { HandlingType } from "../../gql/graphql";
import {
  background,
  primary,
  secondary,
  secondaryDark,
} from "../../theme/color";
import NewModal from "../Modals";
import { getComplaintStateWithEnum } from "../../functions/ComplaintStatesFunc";
import { BsPersonAdd } from "react-icons/bs";
import { DownloadOutlined } from "@mui/icons-material";
import { useAlertStore } from "../../Context/AlertStore";

interface Props {
  open: boolean;
  onClose: () => void;
  complaintId: number;
}
const DCModal = ({ open, onClose, complaintId }: Props) => {
  const { setAlertMessage, setAlertOpen, setAlertType } = useAlertStore();
  const [mode, setMode] = React.useState<
    "expert" | "official" | "judiciary" | "none"
  >("none");
  const [selectedExpertsId, setSelectedExpertsId] = React.useState<string[]>(
    []
  );

  const [GetChildrenOfParent, { data }] = useGetChildrenOfParentLazyQuery({});
  const [UpdateComplaint] = useUpdateComplaintFullMutation();

  useEffect(() => {
    void GetChildrenOfParent({
      variables: {
        parentType:
          mode === "expert"
            ? HandlingType.SelectedExpertsOfTheSupremeTechnicalCouncil
            : mode === "official"
            ? HandlingType.CouncilOfOfficialJusticeExperts
            : HandlingType.JudiciaryExpertsCenter,
      },
      onCompleted(data) {
        console.log("🎶 ~ onCompleted ~ data:", data);
      },
      onError(error) {
        console.log("❌ ~ onError ~ error", error);
      },
    });
  }, [GetChildrenOfParent, mode]);

  const ModalBox = () => {
    switch (mode) {
      case "none":
        return (
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "1fr 1fr 1fr",
              width: "100%",
            }}
          >
            <Button
              color="success"
              fullWidth
              variant="outlined"
              sx={{
                aspectRatio: "5/3",
              }}
              onClick={() => {
                void UpdateComplaint({
                  variables: {
                    input: {
                      id: complaintId,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.DeterminingCaseExpert
                      ).id,
                      handlingType:
                        HandlingType.SelectedExpertsOfTheSupremeTechnicalCouncil,
                    },
                  },
                  onCompleted(data) {
                    if (data?.complaint_updateComplaint?.status?.code == 1) {
                      setAlertType("success");
                      setAlertMessage("با موفقیت نوع کارشناسی تعیین شد");
                      setAlertOpen(true);
                      setMode("expert");
                    }else{
                      setAlertType("error");
                      setAlertMessage("خطا در تعیین نوع کارشناسی");
                      setAlertOpen(true);
                    }
                  },
                  onError(error) {
                    console.log("❌ ~ onError ~ error", error);
                    setAlertType("error");
                    setAlertMessage("خطا در تعیین نوع کارشناسی" + error.message);
                    setAlertOpen(true);
                  },
                });
              }}
            >
              کارشناسان منتخب شورای عالی فنی
            </Button>
            <Button
              color="error"
              fullWidth
              variant="outlined"
              onClick={() => {
                void UpdateComplaint({
                  variables: {
                    input: {
                      id: complaintId,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForRegisteringHandlingType
                      ).id,
                      handlingType: HandlingType.CouncilOfOfficialJusticeExperts,
                    },
                  },
                  onCompleted(data) {
                    if (data?.complaint_updateComplaint?.status?.code == 1) {
                      setAlertType("success");
                      setAlertMessage("با موفقیت نوع کارشناسی تعیین شد");
                      setAlertOpen(true);
                      setMode("official");
                    }else{
                      setAlertType("error");
                      setAlertMessage("خطا در تعیین نوع کارشناسی");
                      setAlertOpen(true);
                    }
                  },
                  onError(error) {
                    console.log("❌ ~ onError ~ error", error);
                    setAlertType("error");
                    setAlertMessage("خطا در تعیین نوع کارشناسی" + error.message);
                    setAlertOpen(true);
                  },
                });
                // onClose();
              }}
            >
              کانون کارشناسان رسمی دادگستری
            </Button>

            <Button
              color="warning"
              fullWidth
              variant="outlined"
              onClick={() =>{ 
                void UpdateComplaint({
                  variables: {
                    input: {
                      id: complaintId,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForRegisteringHandlingType
                      ).id,
                      handlingType: HandlingType.JudiciaryExpertsCenter,
                    },
                  },
                  onCompleted(data) {
                    if (data?.complaint_updateComplaint?.status?.code == 1) {
                      setAlertType("success");
                      setAlertMessage("با موفقیت نوع کارشناسی تعیین شد");
                      setAlertOpen(true);
                      setMode("judiciary");
                    }else{
                      setAlertType("error");
                      setAlertMessage("خطا در تعیین نوع کارشناسی");
                      setAlertOpen(true);
                    }
                  },
                  onError(error) {
                    console.log("❌ ~ onError ~ error", error);
                    setAlertType("error");
                    setAlertMessage("خطا در تعیین نوع کارشناسی" + error.message);
                    setAlertOpen(true);
                  },
                });
              }}
            >
              مرکز کارشناسان قوه قضائیه
            </Button>
          </Box>
        );

      case "expert":
        return (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Button
              color="success"
              fullWidth
              variant="outlined"
              onClick={() => setMode("none")}
            >
              <ChevronRightIcon />
              بازگشت
            </Button>
            <Box display={"flex"} justifyContent={"space-between"}>
              <p>کارشناسان منتخب شورای عالی فنی</p>
              <Button
                variant={"outlined"}
                color={"success"}
                href={`/signUp/determiningCaseExpert/newUser/${
                  complaintId || ""
                }`}
              >
                <BsPersonAdd />
                افزودن کارشناس جدید
              </Button>
            </Box>
            <Table
              sx={{
                outline: "1px solid #000",
                borderRadius: "0.5rem",
                overflow: "hidden",
                "& td": {
                  padding: "0.5rem",
                  textAlign: "center",
                },
              }}
            >
              <TableHead
                sx={{
                  background: secondary,
                  color: "#fff",
                  "& td": {
                    padding: "0.7rem",
                    textAlign: "center",
                  },
                }}
              >
                <tr>
                  <td>نام</td>
                  <td>...</td>
                </tr>
              </TableHead>
              <tbody>
                {data?.user_getChildrenOfParent?.result?.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: selectedExpertsId.includes(
                        item?.id as string
                      )
                        ? "#f0f0f0"
                        : "#fff",
                    }}
                  >
                    <td>{item?.fullName}</td>
                    <td>
                      <Checkbox
                        onChange={() => {
                          if (selectedExpertsId.includes(item?.id as string)) {
                            setSelectedExpertsId((prev) =>
                              prev.filter((id) => id !== item?.id)
                            );
                            return;
                          }
                          setSelectedExpertsId((prev) => [
                            ...prev,
                            item?.id as string,
                          ]);
                        }}
                        checked={selectedExpertsId.includes(item?.id as string)}
                      />
                      {/* <Button
                        onClick={() => {
                          if(selectedExpertsId.includes(item?.id as string)){
                            setSelectedExpertsId((prev) => prev.filter((id) => id !== item?.id));
                            return;
                          }
                          setSelectedExpertsId((prev) => [
                            ...prev,
                            item?.id as string,
                          ]);
                        }}
                      >
                        انتخاب
                      </Button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                console.log("selectedExpertsId", selectedExpertsId);
                void UpdateComplaint({
                  variables: {
                    input: {
                      id: complaintId,
                      councilExpertIds: selectedExpertsId,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.DeterminingMeetingByMailRoomExpert
                      ).id,
                    },
                  },
                  onCompleted(data) {
                    console.log("🚀 ~ onCompleted ~ data", data);
                    alert("کارشناسان انتخاب شده با موفقیت ثبت شدند");
                    window.location.reload();
                  },
                });
              }}
              fullWidth
              disabled={selectedExpertsId.length === 0}
            >
              تایید و ارسال
            </Button>
          </Box>
        );
      case "official":
        return (
          <Box display={"flex"} flexDirection={"column"} gap={2} width={"100%"}>
            <Button
              color="error"
              fullWidth
              variant="outlined"
              onClick={() => setMode("none")}
            >
              <ChevronRightIcon />
              بازگشت
            </Button>
            <Typography mt={5} variant="h6">
              فایل نامه ارسالی به کانون کارشناسان رسمی دادگستری
            </Typography>
            <Button
              color="success"
              fullWidth
              variant="contained"
              onClick={() => setMode("none")}
              sx={{
                padding: "3rem",
              }}
            >
              <DownloadOutlined />
              دانلود نامه
            </Button>
          </Box>
        );
      case "judiciary":
        return (
          <Box display={"flex"} flexDirection={"column"} gap={2} width={"100%"}>
            <Button
              color="warning"
              fullWidth
              variant="outlined"
              onClick={() => setMode("none")}
            >
              <ChevronRightIcon />
              بازگشت
            </Button>
            <Typography mt={5} variant="h6">
              فایل نامه ارسالی به مرکز کارشناسان قوه قضائیه
            </Typography>
            <Button
              color="success"
              fullWidth
              variant="contained"
              onClick={() => setMode("none")}
              sx={{
                padding: "3rem",
              }}
            >
              <DownloadOutlined />
              دانلود نامه
            </Button>
          </Box>
        );
      default:
        return <></>;
    }
  };
  return (
    <NewModal
      title="تعیین کارشناس پرونده"
      open={open}
      onClose={() => {
        setMode("none");
        onClose();
      }}
      background={background}
      isCloseable
      width={"50%"}
    >
      <ModalBox />
    </NewModal>
  );
};

export default DCModal;
