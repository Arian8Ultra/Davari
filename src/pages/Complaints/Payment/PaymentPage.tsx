import { useQuery } from "@apollo/client";
import React from "react";
import { GetComplaintDocument } from "../../../gql/graphql";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { complaintId } = useParams();


  const { data } = useQuery(GetComplaintDocument, {
    variables: {
      id: parseInt(complaintId || "0"),
    },
    onCompleted(data) {
      console.log(data);
    },
  });


  return <div>
    {JSON.stringify(data?.complaint_getComplaint.result?.contract?.contractSubjectByAccuser)}
  </div>;
};

export default PaymentPage;
