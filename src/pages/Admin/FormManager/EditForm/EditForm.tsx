/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GET_COMPLAINT_ANSWER_FORM,
  GET_COMPLAINT_FORM,
} from "../../../../GraphQL/Form/Queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import { dark } from "@mui/material/styles/createPalette";
import BackButton from "../../../../components/BackButton";

const EditForm = () => {
  const { formId, fromType } = useParams<{
    formId: string;
    fromType: string;
  }>();

  console.log(formId, fromType);


  const [getComplaintForm, { data: complaintData }] = useLazyQuery(
    GET_COMPLAINT_FORM,
    {
      variables: {
        id: formId ? parseInt(formId) : 0,
      },
    }
  );
  const [getComplaintAnswerForm, { data: answerData }] = useLazyQuery(
    GET_COMPLAINT_ANSWER_FORM,
    {
      variables: {
        id: formId ? parseInt(formId) : 0,
      },
    }
  );

  useEffect(() => {
    if (fromType === "complaint") {
      void getComplaintForm({
        onCompleted(data) {
          console.log(data);
        },
      });
    } else {
      void getComplaintAnswerForm({
        onCompleted(data) {
          console.log(data);
        },
      });
    }
  }, [fromType, getComplaintAnswerForm, getComplaintForm]);

  return <div>
          <BackButton to="/admin/formanager"/>
    {JSON.stringify(complaintData)}
    <br/>
    {JSON.stringify(answerData)}
    </div>;
};

export default EditForm;
