/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useLazyQuery, useQuery } from "@apollo/client";
import React from "react";
import {
  GET_COMPLAINT_ANSWER_FORMS,
  GET_COMPLAINT_FORMS,
} from "../../GraphQL/Form/Queries";
import { Box, Stack } from "@mui/material";
import { primaryGrey } from "../../theme/color";
import FormCard from "./FormCard";

interface FormListProps {
  type: "complaint" | "response";
}
const FormList = (props: FormListProps) => {
  //   const [forms, setForms] = React.useState([
  //     {
  //       id: 1,
  //       title: "Complaint Form",
  //       description: "This is a complaint form",
  //     },
  //   ]);
  const { data: complaintForms, loading: complaintFormsLoading } =
    useQuery(GET_COMPLAINT_FORMS, {
      onCompleted(data) {
        console.log(data);
      },
    });

  const {
    data: complaintAnswersForms,
    loading: complaintAnswersFormsLoading,
  } = useQuery(GET_COMPLAINT_ANSWER_FORMS, {
    onCompleted(data) {
      console.log(data);
    },
  });

  switch (props.type) {
    case "complaint":
      return (
        <Stack spacing={0} mt={'1rem'}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: primaryGrey,
                color: "white",
                padding: "1rem",
                borderRadius: '5px 5px 0 0',
              }}
            >
                فرم های شکایات
            </Box>
          {complaintFormsLoading ? (
            <div>Loading...</div>
          ) : (
            complaintForms?.complaintForm_getComplaintForms?.result?.items?.map(
              (form: {
                id: number;
                title: string;
                description: string;
              }) => {
                return <FormCard key={form.id} id={form.id} title={form.title} description={form.description} />;
              }
            )
          )}
        </Stack>
      );
    case "response":
      return (
        <Stack spacing={0} mt={'1rem'}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: primaryGrey,
              color: "white",
              padding: "1rem",
              borderRadius: '5px 5px 0 0',
            }}
          >
            فرم های پاسخ به شکایات
          </Box>
          {complaintAnswersFormsLoading ? (
            <div>Loading...</div>
          ) : (
            complaintAnswersForms?.complaintForm_getComplaintForms?.result?.items?.map(
              (form: {
                id: number;
                title: string;
                description: string;
              }) => {
                return <FormCard key={form.id} id={form.id} title={form.title} description={form.description} />;
              }
            )
          )}
        </Stack>
      );
  }
};

export default FormList;
