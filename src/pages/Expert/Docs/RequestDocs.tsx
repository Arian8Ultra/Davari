/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import {
  useGetArgumentsWithFilterQuery,
  useGetComplaintsWithFilterQuery,
  useGetUserWithFilterLazyQuery,
} from "../../../../generated-types";
import {
  primary,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import ArgumentInfoModal from "../../../components/Arguments/ArgumentInfoModal";
import React from "react";
import { ComplaintArgument } from "../../../gql/graphql";

const RequestDocs = () => {
  const { complaintId } = useParams<{ complaintId: string }>();
  const [infoModal, setInfoModal] = React.useState<{
    open: boolean;
    argument?: ComplaintArgument;
  }>({
    open: false,
  });

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
    onCompleted(data) {
      void GetAccuser();
      void GetAccused();
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

  //   const
  return (
    <>
      <ArgumentInfoModal
        open={infoModal.open}
        handleClose={() =>
          setInfoModal({ ...infoModal, open: false })
        }
        fullArgument={infoModal.argument}
        state={-2}
      />
      {/* <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Typography variant={"body1"} sx={{ color: secondary }}>
          خواهان :{" "}
          {AccuserData?.user_getUsers.result?.items?.[0]?.fullName}
        </Typography>
        <Typography variant={"body1"} sx={{ color: secondary }}>
          خوانده :{" "}
          {AccusedData?.user_getUsers.result?.items?.[0]?.fullName}
        </Typography>
      </Box> */}
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
        sx={{
          borderRadius: "0.5rem",
          outline: `2px solid ${primary}`,
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
                    {item?.suggestedAmount}
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
                      onClick={() =>
                        setInfoModal({ open: true, argument: item })
                      }
                    >
                      مشاهده مستندات
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default RequestDocs;
