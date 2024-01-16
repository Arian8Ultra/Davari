/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TargetType,
  useDeleteRequestedDocMutationMutation,
  useGetArgumentsWithFilterQuery,
  useGetComplaintsWithFilterQuery,
  useGetReqestedDocsQueryQuery,
  useGetUserWithFilterLazyQuery,
  useUpdateArgumentFullMutation,
  useUpdateArgumentMutation,
  useUpdateComplaintFullMutation,
} from "../../../generated-types";
import {
  Green,
  background,
  primary,
  secondary,
  secondaryDark,
} from "../../theme/color";
import { ComplaintArgument, ComplaintState } from "../../gql/graphql";
import ArgumentInfoModal from "../../components/Arguments/ArgumentInfoModal";
import { DocumentScannerRounded } from "@mui/icons-material";
import { FaEdit } from "react-icons/fa";
import { lightGreen } from "@mui/material/colors";
import ArgumentModal from "../../components/Arguments/ArgumentModal";
import { Argument } from "../../static/Types";
import NewModal from "../../components/Modals";
import FaTextField from "../../components/FaComponents/FaTextField";
import { convertToPersianDigits } from "../../functions/Functions";

const ReviewCase = () => {
  const { complaintId } = useParams<{ complaintId: string }>();
  const navigate = useNavigate();
  const [infoModal, setInfoModal] = React.useState<{
    open: boolean;
    argument?: ComplaintArgument;
  }>({
    open: false,
  });
  const [argumentModal, setArgumentModal] = React.useState<{
    open: boolean;
    argument?: ComplaintArgument;
    justicExpertOpinion?: string;
    justicExpertApprovedAmount?: number;
  }>({
    open: false,
  });
  const { data: ArgumentsData, refetch: ArgumentRefetch } =
    useGetArgumentsWithFilterQuery({
      variables: {
        filter: {
          complaintId: {
            eq: parseInt(complaintId || "") || 0,
          },
        },
      },
      onCompleted(data) {
        console.log(data);
      },
    });

  const { data: complaint } = useGetComplaintsWithFilterQuery({
    variables: {
      filter: {
        id: { eq: parseInt(complaintId || "") || 0 },
      },
    },
    onCompleted() {
      void GetAccuser();
      void GetAccused();
    },
  });

  const { data: requestedDocsData, refetch: requestedDocsRefetch } =
    useGetReqestedDocsQueryQuery({
      variables: {
        filter: {
          complaintId: {
            eq: parseInt(complaintId || "") || 0,
          },
        },
      },
    });

  const [deleteDoc] = useDeleteRequestedDocMutationMutation({
    onCompleted() {
      void requestedDocsRefetch();
    },
  });

  const [GetAccuser, { data: AccuserData }] =
    useGetUserWithFilterLazyQuery({
      variables: {
        filter: {
          id: {
            eq: complaint?.complaint_getComplaints.result?.items?.[0]
              ?.contract?.accuserDepartmentUserId,
          },
        },
      },
    });

  const [GetAccused, { data: AccusedData }] =
    useGetUserWithFilterLazyQuery({
      variables: {
        filter: {
          id: {
            eq: complaint?.complaint_getComplaints.result?.items?.[0]
              ?.contract?.accusedDepartmentUserId,
          },
        },
      },
    });

  const [updateArgument] = useUpdateArgumentFullMutation();

  const [updateComplaint, { loading }] =
    useUpdateComplaintFullMutation();
  return (
    <div>
      <ArgumentInfoModal
        open={infoModal.open}
        handleClose={() =>
          setInfoModal({ ...infoModal, open: false })
        }
        fullArgument={infoModal.argument}
        state={-2}
      />
      <NewModal
        open={argumentModal.open}
        onClose={() => setArgumentModal({ open: false })}
        background={background}
        title="ویرایش ادعا"
        color={secondaryDark}
        isCloseable
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FaTextField
            label="نظر کارشناس دادگستری"
            value={argumentModal.justicExpertOpinion}
            onChange={(e) =>
              setArgumentModal({
                ...argumentModal,
                justicExpertOpinion: e.target.value,
              })
            }
            multiline
            minRows={4}
          />
          <FaTextField
            label="مبلغ مورد تایید کارشناس دادگستری"
            value={argumentModal.justicExpertApprovedAmount}
            onChange={(e) =>
              setArgumentModal({
                ...argumentModal,
                justicExpertApprovedAmount: parseInt(
                  e.target.value || "0"
                ),
              })
            }
            InputProps={{
              endAdornment: "ریال",
            }}
          />
          <Button
            variant={"contained"}
            color="success"
            sx={{ background: Green, color: "white" }}
            onClick={() => {
              void updateArgument({
                variables: {
                  input: {
                    id: argumentModal.argument?.id || 0,
                    justiceExpertOpinion:
                      argumentModal.justicExpertOpinion,
                    justiceExpertApprovedAmount:
                      argumentModal.justicExpertApprovedAmount,
                  },
                },
                onCompleted(data) {
                  console.log("🚀 ~ onCompleted ~ data:", data);
                  void ArgumentRefetch();
                },
              });
              void setArgumentModal({ open: false });
            }}
          >
            ثبت
          </Button>
        </Box>
      </NewModal>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box
          borderRadius={"3rem"}
          sx={{
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            justifySelf: "center",
            zIndex: 1000,
          }}
        >
          <Typography variant={"h6"} sx={{ color: secondary }}>
            مشخصات قرارداد
          </Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            backgroundColor: secondary,
            height: "0.2rem",
            margin: "1rem 0",
            position: "absolute",
          }}
        />
      </Box>
      <Box
        sx={{
          borderRadius: "0.5rem",
          outline: `2px solid ${secondary}`,
          backgroundColor: "rgb(220,220,220)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          my: "2rem",
          overflow: "hidden",
        }}
      >
        <Table
          sx={{
            // backgroundColor: primaryGreyLightTransparent,
            borderRadius: "0.5rem",
            "& MuiTableCell-root": {
              textAlign: "center",
              padding: "0.1rem",
            },
          }}
        >
          <TableHead
            sx={{
              background: secondary,
              borderRadius: "0.5rem",
              color: "white",
              // center the text in cells
              "& th": {
                textAlign: "center",
              },
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  width: "20%",
                }}
              >
                عنوان
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                خواهان
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                خوانده
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              // delete padding of cells
              "& td": {
                padding: "0.5rem",
                borderBottom: `1px solid ${secondary}`,
              },
              // add border to first column
              "& td:first-child": {
                borderRight: `1px solid ${secondary}`,
                width: "max-content",
              },
              // add border to last column
              "& td:last-child": {
                borderLeft: `1px solid ${secondary}`,
              },
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                عنوان قرارداد
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractSubjectByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractSubjectByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                شماره قرارداد
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractNumberByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractNumberByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                تاریخ انعقاد قرارداد
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractDateByAccuser
                  ? new Date(
                      (complaint?.complaint_getComplaints.result
                        ?.items?.[0].contract
                        ?.contractDateByAccuser as string) || ""
                    ).toLocaleDateString("fa-IR")
                  : "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractDateByAccused
                  ? new Date(
                      (complaint?.complaint_getComplaints.result
                        ?.items?.[0].contract
                        ?.contractDateByAccused as string) || ""
                    ).toLocaleDateString("fa-IR")
                  : "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                مبلغ اوليه/ حق‌الزحمه قرارداد
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.initialBudgetByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.initialBudgetByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                مدت اوليه قرارداد
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.initialTimePeriodByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.initialTimePeriodByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                طرفین قرارداد
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {
                  AccuserData?.user_getUsers.result?.items?.[0]
                    ?.fullName
                }
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {
                  AccusedData?.user_getUsers.result?.items?.[0]
                    ?.fullName
                }
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                تابعيت
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.accuserNationality || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.accusedNationality || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                ضريب پيشنهادی
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.recommendedCoefficientByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.recommendedCoefficientByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                تاريخ شروع كار
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.operationStartDateByAccuser
                  ? new Date(
                      complaint?.complaint_getComplaints.result
                        ?.items?.[0].contract
                        .operationStartDateByAccuser as string
                    ).toLocaleDateString("fa-IR")
                  : "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.operationStartDateByAccused
                  ? new Date(
                      complaint?.complaint_getComplaints.result
                        ?.items?.[0].contract
                        ?.operationStartDateByAccused as string
                    ).toLocaleDateString("fa-IR")
                  : "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                پيشرفت فيزيكي كار در تاريخ درخواست داوری
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract
                  ?.physicalProgressInArbitrationDateByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract
                  ?.physicalProgressInArbitrationDateByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                پيشرفت ریالی كار در تاريخ درخواست داوری
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract
                  ?.financialProgressInArbitrationDateByAccuser ||
                  "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract
                  ?.financialProgressInArbitrationDateByAccused ||
                  "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                وضعیت قرارداد در تاریخ درخواست داوری
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract?.contractStatusAndDateInArbitrationByAccuser?.includes(
                  "ابلاغ خاتمه"
                )
                  ? "ابلاغ خاتمه"
                  : complaint?.complaint_getComplaints.result?.items?.[0].contract?.contractStatusAndDateInArbitrationByAccuser?.includes(
                      "ابلاغ فسخ"
                    )
                  ? "ابلاغ فسخ"
                  : complaint?.complaint_getComplaints.result?.items?.[0].contract?.contractStatusAndDateInArbitrationByAccuser?.includes(
                      "جاری"
                    )
                  ? "جاری"
                  : "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                  "ابلاغ خاتمه"
                )
                  ? "ابلاغ خاتمه"
                  : complaint?.complaint_getComplaints.result?.items?.[0].contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                      "ابلاغ فسخ"
                    )
                  ? "ابلاغ فسخ"
                  : complaint?.complaint_getComplaints.result?.items?.[0].contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                      "جاری"
                    )
                  ? "جاری"
                  : "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                دستگاه نظارت (مهندس مشاور)
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.supervisionDepartmentByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.supervisionDepartmentByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                تاخیرات مجاز
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.authorizedDelaysByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.authorizedDelaysByAccused || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                تاخیرات غیر مجاز
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.unauthorizedDelaysByAccuser || "-"}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.unauthorizedDelaysByAccused || "-"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* 







      */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box
          borderRadius={"3rem"}
          sx={{
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            justifySelf: "center",
            zIndex: 1000,
          }}
        >
          <Typography variant={"h6"} sx={{ color: secondary }}>
            مدارک درخواست شده
          </Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            backgroundColor: secondary,
            height: "0.2rem",
            margin: "1rem 0",
            position: "absolute",
          }}
        />
      </Box>
      <Box
        sx={{
          borderRadius: "0.5rem",
          outline: `2px solid ${secondary}`,
          backgroundColor: "rgb(220,220,220)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          my: "2rem",
          overflow: "hidden",
        }}
      >
        <Table
          sx={{
            // backgroundColor: primaryGreyLightTransparent,
            borderRadius: "0.5rem",
          }}
        >
          <TableHead
            sx={{
              background: secondary,
              borderRadius: "0.5rem",
              color: "white",
              "& th": {
                textAlign: "center",
              },
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                نام سند
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                توسط
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                فایل
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              // delete padding of cells
              "& td": {
                padding: "0.5rem",
                borderBottom: `1px solid ${secondary}`,
                borderRight: `1px solid ${secondary}`,
              },
              // add border to first column
              "& td:first-child": {
                borderRight: `1px solid ${secondary}`,
                width: "max-content",
              },
              // add border to last column
              "& td:last-child": {
                borderLeft: `1px solid ${secondary}`,
                borderRight: `0px solid ${secondary}`,
              },
            }}
          >
            {requestedDocsData?.documentRequest_getDocumentRequests?.result?.items?.map(
              (item) => (
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item?.requestedDocumentName}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item?.target == TargetType.Accused
                      ? "خوانده"
                      : item?.target == TargetType.Accuser
                      ? "خواهان"
                      : "هر دو"}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Button
                      variant={"contained"}
                      color={"primary"}
                      fullWidth
                      sx={{
                        backgroundColor: primary,
                        color: secondary,
                        fontWeight: "bold",
                        borderRadius: "0rem",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: secondary,
                          color: primary,
                        },
                      }}
                      onClick={() => {
                        window.open(
                          `${
                            import.meta.env.VITE_FILE_URL ||
                            "http://172.16.23.50:7030/files"
                          }/${item?.requestedDocumentFileName}`,
                          "_blank"
                        );
                      }}
                    >
                      دانلود فایل {item?.requestedDocumentName}
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Box>
      {/* 







      */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box
          borderRadius={"3rem"}
          sx={{
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            justifySelf: "center",
            zIndex: 1000,
          }}
        >
          <Typography variant={"h6"} sx={{ color: secondary }}>
            دعاوی مرتبط
          </Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            backgroundColor: secondary,
            height: "0.2rem",
            margin: "1rem 0",
            position: "absolute",
          }}
        />
      </Box>

      <Box
        sx={{
          borderRadius: "0.5rem",
          outline: `2px solid ${secondary}`,
          backgroundColor: "rgb(220,220,220)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          my: "2rem",
          overflow: "hidden",
        }}
      >
        <Table
          sx={{
            // backgroundColor: primaryGreyLightTransparent,
            borderRadius: "0.5rem",
          }}
        >
          <TableHead
            sx={{
              background: secondary,
              borderRadius: "0.5rem",
              color: "white",
              "& th": {
                textAlign: "center",
              },
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                شناسه
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                خلاصه ادعا
              </TableCell>
              {/* <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                پاسخ خوانده
              </TableCell> */}
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                مبلغ خواسته شده ادعا(ریال)
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                نظر کارشناس دادگستری
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                مبلغ مورد تایید کارشناس دادگستری
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                مستندات
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ...
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              // delete padding of cells
              "& td": {
                padding: "0.5rem",
                borderBottom: `1px solid ${secondary}`,
                borderRight: `1px solid ${secondary}`,
              },
              // add border to first column
              "& td:first-child": {
                borderRight: `1px solid ${secondary}`,
                width: "max-content",
              },
              // add border to last column
              "& td:last-child": {
                borderLeft: `1px solid ${secondary}`,
                borderRight: `0px solid ${secondary}`,
              },
            }}
          >
            {ArgumentsData?.complaintArgument_getComplaintArguments?.result?.items?.map(
              (item) => (
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item?.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item?.summary}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item.suggestedAmount
                      ? convertToPersianDigits(
                          item.suggestedAmount
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        ) + " ریال"
                      : "وارد نشده است"}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item?.justiceExpertOpinion || "وارد نشده است"}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item.justiceExpertApprovedAmount
                      ? convertToPersianDigits(
                          item.justiceExpertApprovedAmount
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        ) + " ریال"
                      : "وارد نشده است"}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Button
                      variant={"text"}
                      fullWidth
                      // sx={{
                      //   backgroundColor: secondaryDark,
                      //   color: "white",
                      //   "&:hover": {
                      //     backgroundColor: secondary,
                      //   },
                      // }}
                      sx={{
                        display: "flex",
                        gap: 3,
                      }}
                      onClick={() =>
                        setInfoModal({ open: true, argument: item })
                      }
                    >
                      <DocumentScannerRounded />
                      مستندات
                    </Button>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Button
                      variant={"text"}
                      fullWidth
                      // sx={{
                      //   backgroundColor: secondaryDark,
                      //   color: "white",
                      //   "&:hover": {
                      //     backgroundColor: secondary,
                      //   },
                      // }}
                      sx={{
                        display: "flex",
                        gap: 3,
                        background: Green,
                      }}
                      onClick={() =>
                        setArgumentModal({
                          open: true,
                          argument: item,
                          justicExpertApprovedAmount:
                            item?.justiceExpertApprovedAmount,
                          justicExpertOpinion:
                            item?.justiceExpertOpinion || "",
                        })
                      }
                    >
                      <FaEdit />
                      ویرایش
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} my={2}>
        {loading && <Typography>در حال ثبت اطلاعات</Typography>}
        {loading && <LinearProgress sx={{ width: "100%" }} />}
        <Button
          variant={"contained"}
          sx={{
            backgroundColor: primary,
            padding: "0.5rem 2rem",
            borderRadius: "3rem",
            color: secondary,
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: secondary,
              color: primary,
            },
          }}
          onClick={() => {
            const agree = confirm(
              "آیا از ثبت نهایی اطلاعات اطمینان دارید؟"
            );
            if (agree) {
              void updateComplaint({
                variables: {
                  input: {
                    complaintState:
                      ComplaintState.MailRoomExpertReviewingTheFinalReport,
                    id: parseInt(complaintId || "") || 0,
                  },
                },
                onCompleted() {
                  navigate("/expertPortal");
                },
              });
            }
          }}
        >
          ثبت و تایید نهایی
        </Button>
      </Box>
    </div>
  );
};

export default ReviewCase;
