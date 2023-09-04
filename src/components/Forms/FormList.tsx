/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  useQuery
} from "@apollo/client";
import { Box, Skeleton, Stack } from "@mui/material";
import {
  GET_COMPLAINT_ANSWER_FORMS,
  GET_COMPLAINT_FORMS,
} from "../../GraphQL/Form/Queries";
import { primaryGrey } from "../../theme/color";
import FormCard from "./FormCard";

interface FormListProps {
  type: "complaint" | "response";
  refetch?: () => void;
}
const FormList = (props: FormListProps) => {
  //   const [forms, setForms] = React.useState([
  //     {
  //       id: 1,
  //       title: "Complaint Form",
  //       description: "This is a complaint form",
  //     },
  //   ]);
  const {
    data: complaintForms,
    loading: complaintFormsLoading,
    refetch,
  } = useQuery(GET_COMPLAINT_FORMS, {
    onCompleted(data) {
      console.log(data);
    },
  });

  const {
    data: complaintAnswersForms,
    loading: complaintAnswersFormsLoading,
    refetch: complaintAnswersFormsRefetch,
  } = useQuery(GET_COMPLAINT_ANSWER_FORMS, {
    onCompleted(data) {
      console.log(data);
    },
  });

  switch (props.type) {
    case "complaint":
      props.refetch
        ? (props.refetch = () => {
            void refetch();
          })
        : "";
      return (
        <Stack spacing={0} mt={"1rem"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: primaryGrey,
              color: "white",
              padding: "0.6rem",
              borderRadius: "5px 5px 0 0",
            }}
          >
            فرم های شکایات
          </Box>
          <Box display={"grid"} gridTemplateColumns={"repeat(5,1fr)"}>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                width: "100%",
                textAlign: "center",
                borderInline: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                gridColumn: {
                  xs: "span 5",
                  lg: "span 3",
                },
              }}
            >
              عنوان
            </Box>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                width: "100%",
                textAlign: "center",
                borderRight: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                gridColumn: {
                  xs: "span 5",
                  lg: "span 2",
                },
              }}
            >
              عملیات ها
            </Box>
          </Box>
          {complaintFormsLoading ? (
            <div>
              <Skeleton />
            </div>
          ) : (
            complaintForms?.complaintForm_getComplaintForms?.result?.items?.map(
              (form: {
                id: number;
                title: string;
                description: string;
              }) => {
                return (
                  <FormCard
                    key={form.id}
                    id={form.id}
                    title={form.title}
                    description={form.description}
                    type={props.type}
                  />
                );
              }
            )
          )}
        </Stack>
      );
    case "response":
      props.refetch
        ? (props.refetch = () => {
            void complaintAnswersFormsRefetch();
          })
        : "";
      return (
        <Stack spacing={0} mt={"1rem"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: primaryGrey,
              color: "white",
              padding: "0.6rem",
              borderRadius: "5px 5px 0 0",
            }}
          >
            فرم های پاسخ به شکایات
          </Box>
          <Box display={"grid"} gridTemplateColumns={"repeat(5,1fr)"}>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                width: "100%",
                textAlign: "center",
                borderInline: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                gridColumn: {
                  xs: "span 5",
                  lg: "span 3",
                },
              }}
            >
              عنوان
            </Box>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                width: "100%",
                textAlign: "center",
                borderRight: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                gridColumn: {
                  xs: "span 5",
                  lg: "span 2",
                },
              }}
            >
              عملیات ها
            </Box>
          </Box>
          {complaintAnswersFormsLoading ? (
            <div>
              <Skeleton />
            </div>
          ) : (
            complaintAnswersForms?.complaintResponseForm_getComplaintResponseForms?.result?.items?.map(
              (form: {
                id: number;
                title: string;
                description: string;
              }) => {
                return (
                  <FormCard
                    key={form.id}
                    id={form.id}
                    title={form.title}
                    description={form.description}
                    type={props.type}
                  />
                );
              }
            )
          )}
        </Stack>
      );
  }
};

export default FormList;
