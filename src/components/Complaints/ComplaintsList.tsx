/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLazyQuery, useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import {
  GetComplaintsWithFilterDocument,
  GetExpertComplaintsDocument,
  Get_Chief_ComplaintsDocument,
  HandlingType,
  ResponsibleUserType,
  SortEnumType,
} from "../../gql/graphql";
import { secondary } from "../../theme/color";
import theme from "../../theme/theme";
import ComplaintCardNew from "./ComplaintCardNew";
import { useAlertStore } from "../../Context/AlertStore";
interface Props {
  userId?: string;
  departmentId?: string;
  type?:
    | "accused"
    | "accuser"
    | "assigned"
    | "chief"
    | "mainRoomExpert"
    | "juryExpert"
    | "all";
}
const ComplaintsList = ({ departmentId, type, userId }: Props) => {
  const {
    alertOpen,
    alertType,
    alertMessage,
    setAlertOpen,
    setAlertMessage,
    setAlertType,
  } = useAlertStore();
  const {
    data: assignedData,
    loading,
    refetch: assignedRefetch,
  } = useQuery(GetComplaintsWithFilterDocument, {
    variables: {
      filter: {
        and: [
          {
            assignedUserId: {
              eq: userId,
            },
          },
        ],
      },
      take: 100,
    },
    onCompleted(data) {
      console.log("assigned data", data);
    },
    // onError(error) {
    //   setAlertOpen(true);
    //   setAlertMessage(error.message);
    //   setAlertType("error");

    // },
  });
  const {
    data: accuserData,
    loading: accuserLoading,
    refetch: accuserRefetch,
  } = useQuery(GetComplaintsWithFilterDocument, {
    variables: {
      filter: {
        contract: { accuserDepartmentUserId: { eq: departmentId } },
      },
      order: [
        {
          complaintState: {
            priority: SortEnumType.Desc,
          },
        },
      ],
      take: 100,
    },
    onCompleted(data) {
      console.log("accuser data", data);
    },
    // onError(error) {
    //   setAlertOpen(true);
    //   setAlertMessage(error.message);
    //   setAlertType("error");
    // },
  });
  const {
    data: chiefData,
    loading: chiefLoading,
    refetch: chiefRefetch,
  } = useQuery(Get_Chief_ComplaintsDocument, {
    onCompleted(data) {
      console.log("chief data", data);
    },
  });

  const {
    data: accusedData,
    loading: accusedLoading,
    refetch: accusedRefetch,
  } = useQuery(GetComplaintsWithFilterDocument, {
    variables: {
      filter: {
        contract: { accusedDepartmentUserId: { eq: departmentId } },
      },
      order: [
        {
          complaintState: {
            priority: SortEnumType.Desc,
          },
        },
      ],
      take: 100,
    },
    onCompleted(data) {
      console.log("accused data", data);
    },
    // onError(error) {
    //   setAlertOpen(true);
    //   setAlertMessage(error.message);
    //   setAlertType("error");
      
    // },
  });

  // const {
  //   data: expertsData,
  //   loading: expertsLoading,
  //   refetch: expertsRefetch,
  // } = useQuery(GetExpertComplaintsDocument, {
  //   variables: {
  //     userId: userId ?? "",
  //   },
  //   onCompleted(data) {
  //     console.log("😎 expertsData data", data);
  //   },
  //   // onError(error) {
  //   //   setAlertOpen(true);
  //   //   setAlertMessage(error.message);
  //   //   setAlertType("error");
  //   // },
  // });
  const {
    data: expertsData,
    loading: expertsLoading,
    refetch: expertsRefetch,
  } = useQuery(GetComplaintsWithFilterDocument, {
    variables: {
      filter:{
        complaintState:{
          responsibleRole:{
            eq:ResponsibleUserType.LegalExpert
          }
        }
      }
    },
    onCompleted(data) {
      console.log("😎 expertsData data", data);
    },
    // onError(error) {
    //   setAlertOpen(true);
    //   setAlertMessage(error.message);
    //   setAlertType("error");
    // },
  });

  const [getAllComplaints, { data: allData, loading: allLoading }] =
    useLazyQuery(GetComplaintsWithFilterDocument);

  useEffect(() => {
    if (type === "all") {
      void getAllComplaints();
    }
  }, [getAllComplaints, type]);
  return (
    <Stack
      spacing={1}
      width={"100%"}
      maxHeight={`calc(100vh - ${theme.spacing(25)})`}
      height={"max-content"}
      gridColumn={
        type === "chief" || type == "mainRoomExpert" || type == "all"
          ? "span 2"
          : "span 1"
      }
      display={
        (type === "chief" &&
          chiefData?.complaint_getComplaints?.result?.items?.length === 0) ||
        (type === "mainRoomExpert" &&
          assignedData?.complaint_getComplaints?.result?.items?.length === 0) ||
        (type === "accused" &&
          accusedData?.complaint_getComplaints?.result?.items?.length === 0) ||
        (type === "accuser" &&
          accuserData?.complaint_getComplaints?.result?.items?.length === 0) ||
        (type === "assigned" &&
          assignedData?.complaint_getComplaints?.result?.items?.length === 0)
          ? "none"
          : "block"
      }
      sx={{
        background: "rgba(200,200,200,0.7)",
        // backgroundColor: secondaryLighter,
        borderRadius: 2,
        padding: 0,
        paddingTop: 0,
        overflow: "auto",
        // scrollbarGutter: "stable",
      }}
    >
      {type === "accused" ? (
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: secondary,
            // backgroundColor: primaryGrey,
            // backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "0.5rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {accuserLoading
            ? "در حال دریافت اطلاعات"
            : "درخواست های داوری به طرفیت شما"}
        </Typography>
      ) : type === "accuser" ? (
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: secondary,
            // backgroundColor: primaryGrey,
            // backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "0.5rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {accusedLoading ? "در حال دریافت اطلاعات" : "درخواست های داوری شما"}
        </Typography>
      ) : type === "assigned" ? (
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: secondary,
            // backgroundColor: primaryGrey,
            // backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "0.5rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {loading
            ? "در حال دریافت اطلاعات"
            : "درخواست های داوری تعیین شده برای شما"}
        </Typography>
      ) : type === "chief" ? null : type == "all" ? (
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: secondary,
            // backgroundColor: primaryGrey,
            // backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "0.5rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {allLoading ? "در حال دریافت اطلاعات" : "تمامی درخواست های داوری"}
        </Typography>
      ) : null}

      <Box
        display={"grid"}
        gap={2}
        gridTemplateColumns={
          type === "chief" ||
          type == "mainRoomExpert" ||
          type == "juryExpert" ||
          type == "all"
            ? {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(43 1fr)",
                lg: "repeat(4, 1fr)",
              }
            : {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }
        }
        padding={1}
        paddingTop={
          type === "chief" ||
          type == "mainRoomExpert" ||
          type == "juryExpert" ||
          type == "all"
            ? 1
            : 0
        }
      >
        {type === "accused"
          ? accusedData?.complaint_getComplaints?.result?.items?.map(
              (complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussedId={String(
                    complaint?.contract?.accusedDepartmentUserId
                  )}
                  acusserId={String(
                    complaint?.contract?.accuserDepartmentUserId
                  )}
                  trackingCode={
                    complaint?.isFirstPaymentPaid ||
                    complaint?.isSecondPaymentPaid
                      ? complaint?.complaintCode || ""
                      : ""
                  }
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  state={complaint?.complaintState?.state}
                  type="accused"
                  refetch={accusedRefetch}
                  contractNumber={
                    complaint?.contract?.contractNumberByAccuser ?? ""
                  }
                  complaintState={complaint?.complaintState || undefined}
                />
              )
            )
          : type === "accuser"
          ? accuserData?.complaint_getComplaints?.result?.items?.map(
              (complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName ?? ""}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  acussedId={String(
                    complaint?.contract?.accusedDepartmentUserId
                  )}
                  acusserId={String(
                    complaint?.contract?.accuserDepartmentUserId
                  )}
                  trackingCode={
                    complaint?.isFirstPaymentPaid ||
                    complaint?.isSecondPaymentPaid
                      ? complaint?.complaintCode || ""
                      : ""
                  }
                  type="accuser"
                  state={complaint?.complaintState?.state}
                  refetch={accuserRefetch}
                  contractNumber={
                    complaint?.contract?.contractNumberByAccuser ?? ""
                  }
                  complaintState={complaint?.complaintState || undefined}

                />
              )
            )
          : type === "assigned"
          ? assignedData?.complaint_getComplaints?.result?.items?.map(
              (complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName ?? ""}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  acussedId={String(
                    complaint?.contract?.accusedDepartmentUserId
                  )}
                  acusserId={String(
                    complaint?.contract?.accuserDepartmentUserId
                  )}
                  trackingCode={
                    complaint?.isFirstPaymentPaid
                      ? complaint?.complaintCode || ""
                      : ""
                  }
                  type="assigned"
                  state={complaint?.complaintState?.state}
                  refetch={assignedRefetch}
                  contractNumber={
                    complaint?.contract?.contractNumberByAccuser ?? ""
                  }
                  complaintState={complaint?.complaintState || undefined}

                />
              )
            )
          : type === "chief"
          ? chiefData?.complaint_getComplaints?.result?.items?.map(
              (complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName ?? ""}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  isPortal={true}
                  acussedId={String(
                    complaint?.contract?.accusedDepartmentUserId
                  )}
                  acusserId={String(
                    complaint?.contract?.accuserDepartmentUserId
                  )}
                  type="chief"
                  state={complaint?.complaintState?.state}
                  refetch={assignedRefetch}
                  contractNumber={complaint?.contract?.contractNumberByAccuser ?? ""}
                  complaintState={complaint?.complaintState || undefined}

                />
              )
            )
          : type === "mainRoomExpert"
          ? assignedData?.complaint_getComplaints?.result?.items?.map(
              (complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName ?? ""}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  isPortal={true}
                  acussedId={String(
                    complaint?.contract?.accusedDepartmentUserId
                  )}
                  acusserId={String(
                    complaint?.contract?.accuserDepartmentUserId
                  )}
                  type="mainRoomExpert"
                  state={complaint?.complaintState?.state}
                  refetch={assignedRefetch}
                  contractNumber={
                    complaint?.contract?.contractNumberByAccuser ?? ""
                  }
                  complaintState={complaint?.complaintState || undefined}
                />
              )
            )
          : type == "all"
          ? allData?.complaint_getComplaints?.result?.items?.map(
              (complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName || ""}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  isPortal={true}
                  acussedId={String(
                    complaint?.contract?.accusedDepartmentUserId
                  )}
                  acusserId={String(
                    complaint?.contract?.accuserDepartmentUserId
                  )}
                  type="mainRoomExpert"
                  state={complaint?.complaintState?.state}
                  refetch={assignedRefetch}
                  contractNumber={
                    complaint?.contract?.contractNumberByAccuser || ""
                  }
                  complaintState={complaint?.complaintState || undefined}
                />
              )
            )
          : null}

        {type == "juryExpert" &&
          expertsData?.complaint_getComplaints?.result?.items?.filter((a)=> a.councilExpertIds?.includes(userId || ""))?.map(
            (complaint) => (
              <ComplaintCardNew
                key={complaint?.id}
                id={complaint?.id ?? 0}
                acussed={complaint?.assignedUser?.userName ?? ""}
                date={complaint?.createdDate}
                contractId={complaint?.contractId}
                isPortal={true}
                acussedId={String(complaint?.contract?.accusedDepartmentUserId)}
                acusserId={String(complaint?.contract?.accuserDepartmentUserId)}
                type="juryExpert"
                state={complaint?.complaintState?.state}
                refetch={assignedRefetch}
                contractNumber={
                  complaint?.contract?.contractNumberByAccuser ?? ""
                }
                complaintState={complaint?.complaintState || undefined}
              />
            )
          )}

        {type == "juryExpert" &&
          expertsData?.complaint_getComplaints.result?.items?.length === 0 && (
            <Typography
              variant="h5"
              component="h2"
              textAlign={"center"}
              gridColumn={"span 4"}
              sx={{
                color: secondary,
                // backgroundColor: primaryGrey,
                // backgroundColor: secondary,
                // background: "rgba(255,255,255,0.3)",
                padding: "0.5rem",
                // borderRadius: 2,
                // textAlign: "center",
                position: "sticky",
              }}
            >
              {"درخواستی برای شما تعیین نشده است"}
            </Typography>
          )}
      </Box>
    </Stack>
  );
};

export default ComplaintsList;
