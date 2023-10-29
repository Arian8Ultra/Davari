import { gql } from "@apollo/client";

export const GET_COMPLAINTS = gql`
  query GET_COMPLAINTS {
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
            fullName
            phoneNumber
          }
          contract {
            contractNumberByAccuser
            contractDateByAccuser
            initialBudgetByAccuser
          }
        }
      }
    }
  }
`;
export const GET_COMPLAINT = gql`
  query GetComplaint($id: Int!) {
    complaint_getComplaint(entityId: $id) {
      result {
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
          fullName
          phoneNumber
        }
        contract {
          contractNumberByAccuser
          contractDateByAccuser
          initialBudgetByAccuser
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
      }
    }
  }
`;

export const GET_ACCUSED_COMPLAINTS = gql`
  query GET_ACCUSED_COMPLAINTS($departmentId: String!) {
    complaint_getComplaints {
      result(
        where: {
          contract: { accusedDepartmentUserId: { eq: $departmentId } }
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
            fullName
            phoneNumber
          }
          contract {
            contractNumberByAccuser
            contractDateByAccuser
            initialBudgetByAccuser
            accusedDepartmentUserId
            accuserDepartmentUserId
          }
        }
      }
    }
  }
`;

export const GET_ACCUSER_COMPLAINTS = gql`
  query GET_ACCUSER_COMPLAINTS($departmentId: String!) {
    complaint_getComplaints {
      result(
        where: {
          contract: { accuserDepartmentUserId: { eq: $departmentId } }
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
            fullName
            phoneNumber
          }
          contract {
            contractNumberByAccuser
            contractDateByAccuser
            initialBudgetByAccuser
            accusedDepartmentUserId
            accuserDepartmentUserId
          }
        }
      }
    }
  }
`;
export const GET_CHIEF_COMPLAINTS = gql`
  query GET_CHIEF_COMPLAINTS {
    complaint_getComplaints {
      result(
        where: { complaintState: { eq: WAITING_FOR_CHIEF_TO_ASSIGN  } }
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
            fullName
            phoneNumber
          }
          contract {
            contractNumberByAccuser
            contractDateByAccuser
            initialBudgetByAccuser
            accusedDepartmentUserId
            accuserDepartmentUserId
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
          accusedResponse
          accusedResponseFileName
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
  query GET_COMPLAINT_ASSIGNED($id: String!) {
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
            fullName
            phoneNumber
          }
          contract {
            contractNumberByAccuser
            contractDateByAccuser
            initialBudgetByAccuser
            accusedDepartmentUserId
            accuserDepartmentUserId
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
    accusedDepartmentUserId: number;
    accuserDepartmentUserId: number;
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
