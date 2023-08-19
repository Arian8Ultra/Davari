import { gql } from "@apollo/client";

export const GET_COMPLAINT_FORMS = gql`
  query complaintForm_getComplaintForms {
    complaintForm_getComplaintForms {
      result {
        items {
          id
          title
          description
        }
      }
    }
  }
`;
