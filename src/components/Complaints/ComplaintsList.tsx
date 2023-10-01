/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack, Typography } from "@mui/material";
import { primary, primaryTransparent } from "../../theme/color";
import theme from "../../theme/theme";
import ComplaintCardNew from "./ComplaintCardNew";
import { useQuery } from "@apollo/client";
import {
  Complaint,
  GET_ACCUSED_COMPLAINTS,
  GET_ACCUSER_COMPLAINTS,
} from "../../GraphQL/Complaints/Queries";
interface Props {
  userId?: string;
  departmentId?: number;
  type?: "accused" | "accuser";
}
const ComplaintsList = ({ departmentId, type }: Props) => {
  const { data: accuserData, loading: accuserLoading } = useQuery(
    GET_ACCUSER_COMPLAINTS,
    {
      variables: {
        departmentId: departmentId,
      },
      onCompleted(data) {
        console.log("accuser data", data);
      },
    }
  );

  const { data: accusedData, loading: accusedLoading } = useQuery(
    GET_ACCUSED_COMPLAINTS,
    {
      variables: {
        departmentId: departmentId,
      },
      onCompleted(data) {
        console.log("accused data", data);
      },
    }
  );
  return (
    <Stack
      spacing={1}
      width={"100%"}
      maxHeight={`calc(100vh - ${theme.spacing(25)})`}
      sx={{
        backgroundColor: primaryTransparent,
        borderRadius: 2,
        padding: 0,
        paddingTop: 0,
        overflow: "auto",
        scrollPadding: theme.spacing(2),
        scrollSnapType: "y mandatory",
        // scrollbarGutter: "stable",
      }}
    >
      {type === "accused" ? (
        <Typography
          sx={{
            color: "white",
            backgroundColor: primary,
            padding: "1rem",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {accuserLoading ? "در حال دریافت اطلاعات" : "شکایات علیه شما"}
        </Typography>
      ) : (
        <Typography
          sx={{
            color: "white",
            backgroundColor: primary,
            padding: "1rem",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {accusedLoading
            ? "در حال دریافت اطلاعات"
            : "شکایات شما"}
        </Typography>
      )}

      <Stack padding={"0.5rem"} spacing={1}>
        {type === "accused"
          ? accusedData?.complaint_getComplaints?.result.items.map(
              (complaint: Complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussedId={complaint?.contract?.accusedDepartmentId}
                  acusserId={complaint?.contract?.accuserDepartmentId}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  type="accused"
                />
              )
            )
          : accuserData?.complaint_getComplaints?.result.items.map(
              (complaint: Complaint) => (
                <ComplaintCardNew
                  key={complaint.id}
                  id={complaint.id}
                  acussed={complaint?.assignedUser?.userName}
                  date={complaint?.createdDate}
                  contractId={complaint?.contractId}
                  acussedId={complaint?.contract?.accusedDepartmentId}
                  acusserId={complaint?.contract?.accuserDepartmentId}
                  type="accuser"
                />
              )
            )}
      </Stack>
    </Stack>
  );
};

export default ComplaintsList;
