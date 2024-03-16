import React from "react";
import BackButton from "../../../components/BackButton";
import {
  useGetComplaintsWithFilterQuery,
  useGetUserLazyQuery,
} from "../../../../generated-types";
import { ComplaintStateStatus } from "../../../gql/graphql";
import { useUserStore } from "../../../Context/UserStore";
import { Table, TableHead } from "@mui/material";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_USER } from "../../../GraphQL/Users/Queries";
import DCCard from "../../../components/Portal/DCCard";
import { secondary } from "../../../theme/color";

const DeterminingCaseList = () => {
  const { user } = useUserStore();
  const { data } = useGetComplaintsWithFilterQuery({
    variables: {
      filter: {
        and: [
          {
            complaintState: {
              or: [
                { state: { eq: ComplaintStateStatus.DeterminingCaseExpert } },
                { state: { eq: ComplaintStateStatus.WaitingForRegisteringHandlingType } },
              ]
            },
          },
          {
            assignedUserId: {
              eq: user.id,
            },
          },
        ],
      },
    },
    onCompleted(data) {
      console.log("🚀 ~ onCompleted ~ data:", data);
    },
    onError(error) {
        console.log("❌ ~ onError ~ error", error);
    },
  });

  return (
    <>
      <BackButton />

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
        <TableHead sx={{
          background: secondary,
          color: "#fff",
          "& td": {
            padding: "0.7rem",
            textAlign: "center",
          },
        }}>
          <tr>
            <td>شماره پرونده</td>
            <td>عنوان پرونده</td>
            <td>خواهان</td>
            <td>خوانده</td>
            <td>تعیین کارشناس</td>
          </tr>
        </TableHead>
        <tbody>
          {data?.complaint_getComplaints?.result?.items?.map((complaint) => (
            <DCCard
              title={complaint?.contract?.contractSubjectByAccuser || ""}
              accusedId={complaint?.contract?.accusedDepartmentUserId || ""}
              accuserId={complaint?.contract?.accuserDepartmentUserId || ""}
              id={complaint?.id || 0}
              key={complaint?.id || ""}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DeterminingCaseList;
