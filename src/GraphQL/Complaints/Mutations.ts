import { gql } from "@apollo/client";

export const CREATE_COMPLAINT = gql`
  mutation CreateComplaint(
    $accusedDepartmentId: Int!
    $accuserDepartmentId: Int!
    $complaintFormId: Int!
    $complaintResponseFormId: Int!
    $contractId: Int!
    $userId: String!
  ) {
    complaint_addComplaint(
      input: {
        accusedDepartmentId: $accusedDepartmentId
        accuserDepartmentId: $accuserDepartmentId
        complaintFormId: $complaintFormId
        complaintResponseFormId: $complaintResponseFormId
        contractId: $contractId
        userId: $userId
      }
    ) {
      result {
        id
        complaintFormId
        complaintResponseFormId
      }
      status {
        code
        value
      }
    }
  }
`;

export type CreateComplaintInput = {
  accusedDepartmentId: number;
  accuserDepartmentId: number;
  complaintFormId: number;
  contractId: number;
  complaintResponseFormId: number;
  userId: string;
};
