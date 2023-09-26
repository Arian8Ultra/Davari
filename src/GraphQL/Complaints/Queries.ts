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

export type Complaint = {
  id: number;
  userId: string;
  contractId: number;
  arbitrationTermsForms: ArbitrationTermsForms[];
  complaintState: string;
  complaintCode: string;
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
