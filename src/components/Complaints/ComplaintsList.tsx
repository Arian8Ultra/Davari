/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Typography } from "@mui/material";
import {
  primary,
  primaryGrey,
  primaryTransparent,
  secondary,
  secondaryLight,
  secondaryLighter,
} from "../../theme/color";
import theme from "../../theme/theme";
import ComplaintCardNew from "./ComplaintCardNew";
import { useQuery } from "@apollo/client";
import {
  Complaint,
  GET_ACCUSED_COMPLAINTS,
  GET_ACCUSER_COMPLAINTS,
  GET_COMPLAINT_ASSIGNED,
} from "../../GraphQL/Complaints/Queries";
interface Props {
  userId?: string;
  departmentId?: string;
  type?: "accused" | "accuser" | "assigned"
}
const ComplaintsList = ({ departmentId, type, userId }: Props) => {
  const {
    data: assignedData,
    loading,
    refetch: assignedRefetch,
  } = useQuery(GET_COMPLAINT_ASSIGNED, {
    variables: {
      id: userId,
    },
    onCompleted(data) {
      console.log("assigned data", data);
    },
  });
  const {
    data: accuserData,
    loading: accuserLoading,
    refetch: accuserRefetch,
  } = useQuery(GET_ACCUSER_COMPLAINTS, {
    variables: {
      departmentId: departmentId,
    },
    onCompleted(data) {
      console.log("accuser data", data);
    },
  });

  const {
    data: accusedData,
    loading: accusedLoading,
    refetch: accusedRefetch,
  } = useQuery(GET_ACCUSED_COMPLAINTS, {
    variables: {
      departmentId: departmentId,
    },
    onCompleted(data) {
      console.log("accused data", data);
    },
  });
  return (
    <Stack
      spacing={1}
      width={"100%"}
      maxHeight={`calc(100vh - ${theme.spacing(25)})`}
      height={"max-content"}
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
            color: "white",
            // backgroundColor: primaryGrey,
            backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "1rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {accuserLoading
            ? "در حال دریافت اطلاعات"
            : "درخواست های داوری علیه شما"}
        </Typography>
      ) : type === "accuser" ? (
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "white",
            // backgroundColor: primaryGrey,
            backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "1rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {accusedLoading
            ? "در حال دریافت اطلاعات"
            : "درخواست های داوری شما"}
        </Typography>
      ) : (
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "white",
            // backgroundColor: primaryGrey,
            backgroundColor: secondary,
            // background: "rgba(255,255,255,0.3)",
            padding: "1rem",
            // borderRadius: 2,
            // textAlign: "center",
            position: "sticky",
          }}
        >
          {loading
            ? "در حال دریافت اطلاعات"
            : "درخواست های داوری تعیین شده برای شما"}
        </Typography>
      )}

      <Box
        display={"grid"}
        gap={2}
        gridTemplateColumns={"1fr 1fr"}
        padding={1}
      >
        {type === "accused"
          ? accusedData?.complaint_getComplaints?.result.items.map(
              (complaint: Complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussedId={complaint?.contract?.accusedDepartmentUserId}
                  acusserId={complaint?.contract?.accuserDepartmentUserId}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  state={complaint?.complaintState}
                  type="accused"
                  refetch={accusedRefetch}
                />
              )
            )
          : type === "accuser"
          ? accuserData?.complaint_getComplaints?.result.items.map(
              (complaint: Complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  acussedId={complaint?.contract?.accusedDepartmentUserId}
                  acusserId={complaint?.contract?.accuserDepartmentUserId}
                  type="accuser"
                  state={complaint?.complaintState}
                  refetch={accuserRefetch}
                />
              )
            )
          : assignedData?.complaint_getComplaints?.result.items.map(
              (complaint: Complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  acussedId={complaint?.contract?.accusedDepartmentUserId}
                  acusserId={complaint?.contract?.accuserDepartmentUserId}
                  type="assigned"
                  state={complaint?.complaintState}
                  refetch={assignedRefetch}
                />
              )
            )}
      </Box>
    </Stack>
  );
};

export default ComplaintsList;
