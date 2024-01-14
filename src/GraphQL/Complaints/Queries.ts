import { gql } from "@apollo/client";

export const GET_COMPLAINTS = gql`
  query GET_COMPLAINTS {
    complaint_getComplaints {
      result(take: 2000, order: { createdDate: DESC }) {
        items {
          userId
          id
          contractId
          createdDate
          isApprovedByChief
          councilListStatus
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
      status
      __typename
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
        isApprovedByChief
        councilListStatus
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
          contractSubjectByAccused
          contractSubjectByAccuser
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
        order: { createdDate: DESC }
      ) {
        items {
          userId
          id
          contractId
          createdDate
          isApprovedByChief
          councilListStatus
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
        order: { createdDate: DESC }
      ) {
        items {
          userId
          id
          contractId
          createdDate
          isApprovedByChief
          councilListStatus
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
        where: {
          or: [
            { complaintState: { eq: WAITING_FOR_CHIEF_TO_ASSIGN } }
            {
              complaintState: {
                eq: WAITING_FOR_CHIEF_TO_APPROVE_EXPERTS_ANSWERS_TO_ARGUMENTS
              }
            }
          ]
        }
        order: { createdDate: DESC }
      ) {
        items {
          userId
          id
          contractId
          createdDate
          isApprovedByChief
          councilListStatus
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
          accuserAnswerToAccusedResponse
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
          isApprovedByChief
          councilListStatus
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

export const GET_ARBITRATION_TERMS_FORM_BY_COMPLAINT_ID = gql`
  query GET_ARBITRATION_TERMS_FORM($id: Int!) {
    arbitrationTermsForm_getArbitrationTermsForms {
      result(where: { complaintId: { eq: $id } }) {
        items {
          id
          complaintId
          firstCondition
          firstConditionFileName
          secondCondition
          secondConditionFileName
          thirdCondition
          thirdConditionFileName
          fourthCondition
          fourthConditionFileName
          filledBy
        }
      }
    }
  }
`;

export const getContractsFiles = gql`
  query getContractsFilesQuery {
    complaintFile_getComplaintFiles {
      result {
        items {
          complaintId
          title
          description
          fileGallery {
            name
          }
          id
        }
      }
    }
  }
`;
export const getContractFiles = gql`
  query getContractFilesQuery($id: Int!) {
    complaintFile_getComplaintFiles {
      result(where: { complaintId: { eq: $id } }) {
        items {
          complaintId
          title
          description
          fileGallery {
            name
          }
          id
        }
      }
    }
  }
`;

export const GET_COMPLAINTS_NOTES = gql`
  query getComplaintsNotes($id: Int!) {
    complaintNote_getComplaintNotes {
      result(where: { complaintId: { eq: $id } }) {
        items {
          id
          complaintId
          userId
          content
          createdDate
        }
      }
      status
    }
  }
`;

export const GetComplaintsWithFilter = gql`
  query GetComplaintsWithFilter(
    $filter: ComplaintFilterInput
    $take: Int
    $skip: Int
    $order: [ComplaintSortInput!] = [{ createdDate: DESC }]
  ) {
    complaint_getComplaints {
      result(
        where: $filter
        order: $order
        take: $take
        skip: $skip
      ) {
        items {
          userId
          id
          contractId
          createdDate
          isApprovedByChief
          councilListStatus
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
          councilExpertId
          assignedUser {
            userName
            fullName
            phoneNumber
          }
          contract {
            id
          accuserDepartmentUserId
          accusedDepartmentUserId
          accuserNationality
          accusedNationality
          accuserRelatedPeopleByAccuser
          accuserRelatedPeopleByAccused
          accusedRelatedPeopleByAccuser
          accusedRelatedPeopleByAccused
          contractTypeByAccused
          contractTypeByAccuser
          otherContractTypeByAccused
          otherContractTypeByAccuser
          circularNumberByAccused
          circularNumberByAccuser
          circularDateByAccused
          circularDateByAccuser
          contractSubjectByAccused
          contractSubjectByAccuser
          contractNumberByAccused
          contractNumberByAccuser
          contractDateByAccused
          contractDateByAccuser
          initialBudgetByAccused
          initialBudgetByAccuser
          initialTimePeriodByAccused
          initialTimePeriodByAccuser
          priceListOfBasicUnitOfFieldByAccused
          priceListOfBasicUnitOfFieldByAccuser
          isSpecialPriceListAttachedToContractByAccused
          isSpecialPriceListAttachedToContractByAccuser
          recommendedCoefficientByAccused
          recommendedCoefficientByAccuser
          coefficientTypeByAccused
          coefficientTypeByAccuser
          assigningTypeByAccused
          assigningTypeByAccuser
          doesContainAdjustmentByAccused
          doesContainAdjustmentByAccuser
          baseIndexPeriodByAccused
          baseIndexPeriodByAccuser
          operationStartDateByAccused
          operationStartDateByAccuser
          physicalProgressInArbitrationDateByAccused
          physicalProgressInArbitrationDateByAccuser
          financialProgressInArbitrationDateByAccused
          financialProgressInArbitrationDateByAccuser
          contractStatusAndDateInArbitrationByAccused
          contractStatusAndDateInArbitrationByAccuser
          supervisionDepartmentByAccused
          supervisionDepartmentByAccuser
          authorizedDelaysByAccused
          authorizedDelaysByAccuser
          unauthorizedDelaysByAccused
          unauthorizedDelaysByAccuser
          isExecutive
          fileNamesByAccused
          fileNamesByAccuser
          }
        }
      }
    }
  }
`;

export const GetArgumentsWithFilter = gql`
  query GetArgumentsWithFilter(
    $filter: ComplaintArgumentFilterInput
    $take: Int
    $skip: Int
    $order: [ComplaintArgumentSortInput!] = [{ createdDate: DESC }]
  ) {
    complaintArgument_getComplaintArguments {
      result(
        where: $filter
        order: $order
        take: $take
        skip: $skip
      ) {
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
          mailRoomExpertOpinionOnExpertOpinion
          mailRoomChiefOpinionOnArgument
          mailRoomExpertOpinionOnArgument
          accuserAnswerToAccusedResponse
          suggestedAmount
          summary
          userId
          createdDate
          isDeleted
        }
      }
      status
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
  isApprovedByChief: boolean;
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
    accusedDepartmentUserId: string;
    accuserDepartmentUserId: string;
    department: Department;
    contractNumberByAccuser: string;
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
  accuserAnswerToAccusedResponse: string;
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
  accuserAnswerToAccusedResponse?: string;
};
