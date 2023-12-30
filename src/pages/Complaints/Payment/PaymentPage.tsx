import { useQuery } from "@apollo/client";
import React from "react";
import { GetComplaintDocument } from "../../../gql/graphql";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";

const PaymentPage = () => {
  const { complaintId } = useParams();
  const user = useUserStore((state) => state.user);

  const { data } = useQuery(GetComplaintDocument, {
    variables: {
      id: parseInt(complaintId || "0"),
    },
    onCompleted(data) {
      console.log(data);
    },
  });

  return (
    <div>
      {user?.parentId ==
        data?.complaint_getComplaint.result?.contract
          ?.accusedDepartmentUserId ||
      user.id ==
        data?.complaint_getComplaint.result?.contract
          ?.accusedDepartmentUserId ? (
        <div>پرداخت خوانده</div>
      ) : (
        <div>پرداخت خوانده</div>
      )}
    </div>
  );
};

export default PaymentPage;
