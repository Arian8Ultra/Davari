import { gql } from "@apollo/client";

export const CREATE_COMPLAINT = gql`
  mutation CreateComplaint(
    $contractNumber: String
    $contractorId: Int
    $isExecutive: Boolean
    $organizationId: Int
  ) {
    contract_addContract(
      input: {
        contractNumber: $contractNumber
        contractorId: $contractorId
        isExecutive: $isExecutive
        organizationId: $organizationId
      }
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_CONTRACT = gql`
  mutation DeleteContract($id: Int!) {
    contract_deleteContract(entityId: $id) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation UpdateContract(
    $id: Int!
    $contractNumber: String
    $contractorId: Int
    $isExecutive: Boolean
    $organizationId: Int
  ) {
    contract_updateContract(
      input: {
        contractNumber: $contractNumber
        contractorId: $contractorId
        id: $id
        isExecutive: $isExecutive
        organizationId: $organizationId
      }
    ){
        result{
            id
            contractorId
            contractNumber
            isExecutive
            organizationId
            complaints{
                id
                accuserDepartmentId
                accusedDepartmentId
                assignedUserId
                complaintFormId
                complaintResponseFormId
            }
        }
    }
  }
`;

export type CreateComplaintInput = {
  contractNumber: string;
  contractorId: number;
  isExecutive: boolean;
  organizationId: number;
};

export type UpdateContractInput = {
    id: number;
    contractNumber: string;
    contractorId: number;
    isExecutive: boolean;
    organizationId: number;
}


export type Contract = {
    id: number;
    contractNumber: string;
    contractorId: number;
    isExecutive: boolean;
    organizationId: number;
    complaints: ContractComplaint[];
}


export type ContractComplaint={
    id: number;
    accuserDepartmentId: number;
    accusedDepartmentId: number;
    assignedUserId: number;
    complaintFormId: number;
    complaintResponseFormId: number;
}