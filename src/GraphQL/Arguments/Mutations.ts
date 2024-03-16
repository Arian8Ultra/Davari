import { gql } from "@apollo/client";

export const AddNonFeasibleArgument = gql`
  mutation AddNonFeasibleArgument(
    $input: ComplaintNonFeasibleArgumentInput!
  ) {
    complaintnonfeasibleargument_addComplaintNonFeasibleArgument(
      input: $input
    ) {
      result {
        userId
        complaintId
        summary
        description
        financialSituation
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const UpdateNonFeasibleArgument = gql`
  mutation UpdateNonFeasibleArgument(
    $input: ComplaintNonFeasibleArgumentInput!
  ) {
    complaintnonfeasibleargument_updateComplaintNonFeasibleArgument(
      input: $input
    ) {
      result {
        userId
        complaintId
        summary
        description
        financialSituation
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const DeleteNonFeasibleArgument = gql`
  mutation DeleteNonFeasibleArgument($input: Int!) {
    complaintnonfeasibleargument_deleteComplaintNonFeasibleArgument(
      entityId: $input
    ) {
      result {
        userId
        complaintId
        summary
        description
        financialSituation
        id
      }
      status {
        code
        value
      }
    }
  }
`;
