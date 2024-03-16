import { gql } from "@apollo/client";

export const UpdateComplaintState = gql`
  mutation updateComplaintState($input: ComplaintStateInput!) {
    complaintState_updateComplaintState(input: $input) {
      result {
        id
        englishName
        persianName
        state
        createdDate
        isDeleted
        priority
      }
    }
  }
`;
