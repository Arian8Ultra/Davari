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
      status
      __typename
    }
  }
`;

export const GET_COMPLAINT_ANSWER_FORMS = gql`
  query ComplaintResponseForm_getComplaintResponseForms {
    ComplaintResponseForm_getComplaintResponseForms {
      result {
        items {
          title
          description
          id
        }
      }
      status
      __typename
    }
  }
`;
