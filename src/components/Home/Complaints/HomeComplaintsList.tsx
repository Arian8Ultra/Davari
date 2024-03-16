/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from "@apollo/client";
import React from "react";
import {
  Complaint,
  GET_ACCUSED_COMPLAINTS,
  GET_ACCUSER_COMPLAINTS,
  GET_COMPLAINT_ASSIGNED,
} from "../../../GraphQL/Complaints/Queries";
import { useUserStore } from "../../../Context/UserStore";
import { Box, Card, Stack, Typography } from "@mui/material";
import ComplaintCardNew from "../../Complaints/ComplaintCardNew";
import { Get_Complaint_AssignedDocument, useGet_Complaint_AssignedQuery } from "../../../../generated-types";
import { ComplaintState, Get_Accused_ComplaintsDocument, Get_Accuser_ComplaintsDocument } from "../../../gql/graphql";
interface Props {
  columns?: string | object;
  rows?: string;
}
const HomeComplaintsList = ({ columns, rows }: Props) => {
  const user = useUserStore((state) => state.user);



  const {data:assignedData,refetch} = useGet_Complaint_AssignedQuery({
    variables: {
      id: user.id
    }
  })

  const {
    data: accuserData,
    loading: accuserLoading,
    refetch: accuserRefetch,
  } = useQuery(Get_Accuser_ComplaintsDocument, {
    fetchPolicy: "network-only",
    variables: {
      departmentId:
        user.userType == "ORGANIZATION" ||
        user.userType == "CONTRACTOR_OR_CONSULTANT"
          ? user.id
          : user.parentId || "",
    },
    onCompleted(data) {
      console.log("accuser data", data);
    },
  });

  const {
    data: accusedData,
    loading: accusedLoading,
    refetch: accusedRefetch,
  } = useQuery(Get_Accused_ComplaintsDocument, {
    fetchPolicy: "network-only",
    variables: {
      departmentId:
        user.userType == "ORGANIZATION" ||
        user.userType == "CONTRACTOR_OR_CONSULTANT"
          ? user.id
          : user.parentId || "",
    },
    onCompleted(data) {
      console.log("accused data", data);
    },
  });
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        gridColumn: columns,
        // gridRow: rows,
        gridRowStart: "1",
        gridRowEnd: "3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        background: "rgba(200,200,230,0.7)",
        borderRadius: "1rem",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        // textAlign={"center"}
        sx={{
          background: "rgba(255,255,255,0.3)",
          width: "100%",
          padding: "1rem",
          paddingInline: "3rem",
        }}
      >
        درخواست های داوری
      </Typography>
      <Box
        sx={{
          display: "grid",
          flexDirection: "column",
          width: "100%",
          overflowY: "scroll",
          gap: "0.5rem",
          padding: "0.75rem",
        }}
      >
        {assignedData?.complaint_getComplaints?.result?.items?.map(
          (complaint) => (
            <ComplaintCardNew
              key={complaint.id}
              id={complaint.id}
              acussedId={complaint?.contract?.accusedDepartmentUserId || ""}
              acusserId={complaint?.contract?.accuserDepartmentUserId || ""}
              date={complaint?.createdDate}
              contractId={complaint?.contractId}
              state={complaint?.complaintState?.state}
              type="assigned"
              complaintState={complaint?.complaintState as ComplaintState}
            />
          )
        )}
        {(user.userRoles?.some(
          (role) => role.roleType == "SENIOR_USER"
        ) ||
          user.userType == "ORGANIZATION" ||
          user.userType == "CONTRACTOR_OR_CONSULTANT") &&
          accusedData?.complaint_getComplaints?.result?.items?.map(
            (complaint) => (
              <ComplaintCardNew
                key={complaint.id}
                id={complaint.id}
                acussedId={
                  complaint?.contract?.accusedDepartmentUserId || ""
                }
                acusserId={
                  complaint?.contract?.accuserDepartmentUserId || ""
                }
                date={complaint?.createdDate}
                contractId={complaint?.contractId}
                state={complaint?.complaintState?.state}
                type="accused"
                complaintState={complaint?.complaintState as ComplaintState}
              />
            )
          )}
        {(user.userRoles?.some(
          (role) => role.roleType == "SENIOR_USER"
        ) ||
          user.userType == "ORGANIZATION" ||
          user.userType == "CONTRACTOR_OR_CONSULTANT") &&
          accuserData?.complaint_getComplaints?.result?.items?.map(
            (complaint) => (
              <ComplaintCardNew
                key={complaint.id}
                id={complaint.id}
                acussedId={
                  complaint?.contract?.accusedDepartmentUserId || ""
                }
                acusserId={
                  complaint?.contract?.accuserDepartmentUserId || ""
                }
                date={complaint?.createdDate}
                contractId={complaint?.contractId}
                state={complaint?.complaintState?.state}
                type="accuser"
                complaintState={complaint?.complaintState as ComplaintState}
              />
            )
          )}
      </Box>
    </Card>
  );
};

export default HomeComplaintsList;
