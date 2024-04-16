/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Print } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_FILE_DOWNLOAD } from "../../../../config";
import {
  useGenerateComplaintReportMutation,
  useGetArgumentsWithFilterQuery,
  useGetComplaintsWithFilterQuery,
  useGetUserWithFilterLazyQuery,
  useSendComplaintAddedSmsMutation,
} from "../../../../generated-types";
import TimeLine from "../../../components/TimeLine";
import { useUserStore } from "../../../Context/UserStore";
import {
  GreenLight,
  primary,
  secondary,
  secondaryDark,
} from "../../../theme/color";

const ConfirmPage = () => {
  const { complaintId } = useParams<{ complaintId: string }>();
  const navigate = useNavigate();
  const user = useUserStore.getState().user;
  const { data: ArgumentsData } = useGetArgumentsWithFilterQuery({
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
  const [GetAccuser, { data: AccuserData }] = useGetUserWithFilterLazyQuery({
    variables: {
      filter: {
        id: {
          eq: complaint?.complaint_getComplaints.result?.items?.[0]?.contract
            ?.accuserDepartmentUserId,
        },
      },
    },
  });

  const [GetAccused, { data: AccusedData }] = useGetUserWithFilterLazyQuery({
    variables: {
      filter: {
        id: {
          eq: complaint?.complaint_getComplaints.result?.items?.[0]?.contract
            ?.accusedDepartmentUserId,
        },
      },
    },
  });

  const [GenerateComplaintReport] = useGenerateComplaintReportMutation({
    variables: {
      input: {
        complaintId: complaintId ? parseInt(complaintId) : 0,
        userId: user.id,
      },
    },
    onCompleted(data, clientOptions) {
      console.log(data);
    },
  });

  const [SendComplaintAddedSMS] = useSendComplaintAddedSmsMutation({
    variables: {
      complaintId: complaintId ? parseInt(complaintId) : 0,
    },
  });
  useEffect(() => {
    if (complaintId) {
      void GenerateComplaintReport();
    }
  }, [GenerateComplaintReport, complaintId]);
  return (
    <>
      <TimeLine stage={6} />
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
      <Button
        onClick={() =>
          void GenerateComplaintReport({
            onCompleted(data, clientOptions) {
              // download data
              window.open(API_FILE_DOWNLOAD + data.test_generateComplaintReport, "_blank");
            },
          })
        }
        variant="outlined"
        color="success"
        sx={{
          display: 'flex',
          gap:2
        }}
      >
        ایجاد گزارش درخواست
        <Print />
      </Button>
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
                پاسخ
              </TableCell>
              {/* <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                خوانده
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.contractSubjectByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractSubjectByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.contractNumberByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.contractNumberByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.contractDateByAccuser
                  ? new Date(
                      (complaint?.complaint_getComplaints.result?.items?.[0]
                        .contract?.contractDateByAccuser as string) || ""
                    ).toLocaleDateString("fa-IR")
                  : "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
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
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.initialBudgetByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.initialBudgetByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.initialTimePeriodByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.initialTimePeriodByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.accuserNationality || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.accusedNationality || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.recommendedCoefficientByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.recommendedCoefficientByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.operationStartDateByAccuser
                  ? new Date(
                      complaint?.complaint_getComplaints.result?.items?.[0]
                        .contract.operationStartDateByAccuser as string
                    ).toLocaleDateString("fa-IR")
                  : "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
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
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.physicalProgressInArbitrationDateByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract
                  ?.physicalProgressInArbitrationDateByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.financialProgressInArbitrationDateByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract
                  ?.financialProgressInArbitrationDateByAccused ||
                  "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
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
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
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
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.supervisionDepartmentByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.supervisionDepartmentByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.authorizedDelaysByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.authorizedDelaysByAccused || "-"}
              </TableCell> */}
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
                  display:
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result?.items?.[0]
                      ?.contract?.accuserDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0].contract
                  ?.unauthorizedDelaysByAccuser || "-"}
              </TableCell>
              {/* <TableCell
                sx={{
                  textAlign: "center",
                  display:
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.id ||
                    complaint?.complaint_getComplaints?.result
                      ?.items?.[0]?.contract
                      ?.accusedDepartmentUserId == user?.parentId
                      ? "table-cell"
                      : "none",
                }}
              >
                {complaint?.complaint_getComplaints.result?.items?.[0]
                  .contract?.unauthorizedDelaysByAccused || "-"}
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </Box>

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
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                وضعیت بار مالی
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                مبلغ خواسته شده ادعا(ریال)
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
                    {item?.financialSituation &&
                      (JSON.parse(item?.financialSituation)?.title ==
                      "withFinancialEffects"
                        ? "دارای بار مالی"
                        : JSON.parse(item?.financialSituation)?.title ==
                          "withoutFinancialEffects"
                        ? "بدون بار مالی"
                        : "") +
                        " " +
                        JSON.parse(item?.financialSituation)?.subtitle}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item?.suggestedAmount}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Box>

      <Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
        <Button
          sx={{
            background: primary,
            color: secondaryDark,
            bottom: 10,
            right: 10,
            fontSize: "1.2rem",
            borderRadius: "1.5rem",
            "&:hover": {
              backgroundColor: GreenLight,
              color: secondaryDark,
            },
          }}
          onClick={() => {
            void SendComplaintAddedSMS();
            navigate(`/complaints`);
          }}
        >
          تایید و ادامه
        </Button>
      </Box>
    </>
  );
};

export default ConfirmPage;
