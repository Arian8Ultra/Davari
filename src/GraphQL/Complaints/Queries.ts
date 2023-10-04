import { gql } from "@apollo/client";
import { FormTitle } from "../Form/Titles/Queies";

export const GET_COMPLAINTS = gql`
  query GetComplaints {
    complaint_getComplaints {
      result {
        items {
          userId
          id
          contractId
          arbitrationTermsForms {
            firstCondition
            firstConditionFileName
            secondCondition
            secondConditionFileName
            thirdCondition
            thirdConditionFileName
            fourthCondition
            fourthConditionFileName
          }
          complaintState
          complaintCode
          assignedUser {
            userName
            firstName
            lastName
            departmentId
            phoneNumber
          }
          contract {
            contractNumber
            contractDate
            initialBudget
          }
        }
      }
    }
  }
`;

export const GET_ACCUSED_COMPLAINTS = gql`
  query GetComplaints($departmentId: Int!) {
    complaint_getComplaints {
      result(
        where: {
          contract: { accusedDepartmentId: { eq: $departmentId } }
        }
      ) {
        items {
          userId
          id
          contractId
          createdDate
          arbitrationTermsForms {
            firstCondition
            firstConditionFileName
            secondCondition
            secondConditionFileName
            thirdCondition
            thirdConditionFileName
            fourthCondition
            fourthConditionFileName
          }
          complaintState
          complaintCode
          assignedUser {
            userName
            firstName
            lastName
            departmentId
            phoneNumber
          }
          contract {
            contractNumber
            contractDate
            initialBudget
            accusedDepartmentId
            accuserDepartmentId
            department {
              id
              users {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ACCUSER_COMPLAINTS = gql`
  query GetComplaints($departmentId: Int!) {
    complaint_getComplaints {
      result(
        where: {
          contract: { accuserDepartmentId: { eq: $departmentId } }
        }
      ) {
        items {
          userId
          id
          contractId
          createdDate
          arbitrationTermsForms {
            firstCondition
            firstConditionFileName
            secondCondition
            secondConditionFileName
            thirdCondition
            thirdConditionFileName
            fourthCondition
            fourthConditionFileName
          }
          complaintState
          complaintCode
          assignedUser {
            userName
            firstName
            lastName
            departmentId
            phoneNumber
          }
          contract {
            contractNumber
            contractDate
            initialBudget
            accusedDepartmentId
            accuserDepartmentId
            department {
              id
              users {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_COMPLAINT_ARGUMENTS = gql`
  query GetComplaintArguments($id: Int!) {
    complaintArgument_getComplaintArguments {
      result(where: { complaintId: { eq: $id } }) {
        items {
          id
          accuserResponse
          accuserResponseFileName
          approvedAmount
          complaintId
          councilApprovedAmount
          description
          expertId
          expertOpinion
          expertOpinionFileName
          expertVerdict
          fileName
          filledBy
          mailRoomChiefSuggestedAmount
          mailRoomExpertApprovedAmount
          suggestedAmount
          summary
          userId
        }
      }
      status
    }
  }
`;

export const GET_COMPLAINT_ASSIGNED = gql`
  query GetComplaints($id: String!) {
    complaint_getComplaints {
      result(where: { assignedUserId: { eq: $id } }) {
        items {
          userId
          id
          contractId
          createdDate
          arbitrationTermsForms {
            firstCondition
            firstConditionFileName
            secondCondition
            secondConditionFileName
            thirdCondition
            thirdConditionFileName
            fourthCondition
            fourthConditionFileName
          }
          complaintState
          complaintCode
          assignedUser {
            userName
            firstName
            lastName
            departmentId
            phoneNumber
          }
          contract {
            contractNumber
            contractDate
            initialBudget
            accusedDepartmentId
            accuserDepartmentId
            department {
              id
              users {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export type Complaint = {
  userId: number;
  id: number;
  contractId: number;
  arbitrationTermsForms: ArbitrationTermsForms;
  complaintState: string;
  complaintCode: string;
  createdDate: string;
  assignedUser: {
    userName: string;
    firstName: string;
    lastName: string;
    departmentId: number;
    phoneNumber: string;
  };
  contract: {
    contractNumber: string;
    contractDate: string;
    initialBudget: number;
    accusedDepartmentId: number;
    accuserDepartmentId: number;
    department: Department;
  };
};

export type Department = {
  title: string;
  id: number;
  departments: Department[];
};

export type ComplaintForm = {
  title: string;
  id: number;
  description: string;
  formTitles: FormTitle[];
};

export type ArbitrationTermsForms = {
  firstCondition: string;
  firstConditionFileName: string;
  secondCondition: string;
  secondConditionFileName: string;
  thirdCondition: string;
  thirdConditionFileName: string;
  fourthCondition: string;
  fourthConditionFileName: string;
};

export type ComplaintArgument = {
  id: number;
  accuserResponse: string;
  accuserResponseFileName: string;
  approvedAmount: number;
  complaintId: number;
  councilApprovedAmount: number;
  description: string;
  expertId: number;
  expertOpinion: string;
  expertOpinionFileName: string;
  expertVerdict: string;
  fileName: string;
  filledBy: string;
  mailRoomChiefSuggestedAmount: number;
  mailRoomExpertApprovedAmount: number;
  suggestedAmount: number;
  summary: string;
  userId: number;
};

export type ComplaintArgumentOptional = {
  id?: number;
  accuserResponse?: string;
  accuserResponseFileName?: string;
  approvedAmount?: number;
  complaintId?: number;
  councilApprovedAmount?: number;
  description?: string;
  expertId?: number;
  expertOpinion?: string;
  expertOpinionFileName?: string;
  expertVerdict?: string;
  fileName?: string;
  filledBy?: string;
  mailRoomChiefSuggestedAmount?: number;
  mailRoomExpertApprovedAmount?: number;
  suggestedAmount?: number;
  summary?: string;
  userId?: number;
};
