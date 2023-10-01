import { gql } from "@apollo/client";

export const CREATE_COMPLAINT = gql`
  mutation CreateComplaint($contractId: Int!, $userId: String!) {
    complaint_addComplaint(
      input: { contractId: $contractId, userId: $userId }
    ) {
      result {
        id
        arbitrationTermsForms {
          userId
          firstCondition
          firstConditionFileName
          secondCondition
          secondConditionFileName
          thirdCondition
          thirdConditionFileName
          fourthCondition
          fourthConditionFileName
        }
      }
      status {
        code
        value
      }
    }
  }
`;

export const CREATE_ARBITRATION_TERMS_FORM = gql`
  mutation CreateArbitrationTermsForm(
    $complaintId: Int!
    $userId: String!
    $filledBy: RegistrarType!
    $firstCondition: String!
    $firstConditionFileName: String!
    $secondCondition: String!
    $secondConditionFileName: String!
    $thirdCondition: String!
    $thirdConditionFileName: String!
    $fourthCondition: String!
    $fourthConditionFileName: String!
    $projectName: String!
    $projectNumber: String!
    $hasReadAgreement: Boolean!
  ) {
    arbitrationTermsForm_addArbitrationTermsForm(
      input: {
        complaintId: $complaintId
        userId: $userId
        filledBy: $filledBy
        firstCondition: $firstCondition
        firstConditionFileName: $firstConditionFileName
        secondCondition: $secondCondition
        secondConditionFileName: $secondConditionFileName
        thirdCondition: $thirdCondition
        thirdConditionFileName: $thirdConditionFileName
        fourthCondition: $fourthCondition
        fourthConditionFileName: $fourthConditionFileName
        projectName: $projectName
        projectNumber: $projectNumber
        hasReadAgreement: $hasReadAgreement
      }
    ) {
      result {
        id
        complaintId
        userId
        filledBy
        firstCondition
        firstConditionFileName
        secondCondition
        secondConditionFileName
        thirdCondition
        thirdConditionFileName
        fourthCondition
        fourthConditionFileName
        projectName
        projectNumber
        hasReadAgreement
      }
      status {
        code
        value
      }
    }
  }
`;

export const ADD_ARGUMENT_TO_COMPLAINT = gql`
  mutation AddArgumentToComplaint(
    $accuserResponse: String!
    $accuserResponseFileName: String!
    $approvedAmount: Decimal!
    $complaintId: Int!
    $councilApprovedAmount: Decimal!
    $description: String!
    $expertId: String!
    $expertOpinion: String!
    $expertOpinionFileName: String!
    $expertVerdict: String!
    $fileName: String!
    $filledBy: RegistrarType!
    $mailRoomChiefSuggestedAmount: Decimal!
    $mailRoomExpertApprovedAmount: Decimal!
    $suggestedAmount: Decimal!
    $summary: String!
    $userId: String!
  ) {
    complaintArgument_addComplaintArgument(
      input: {
        accuserResponse: $accuserResponse
        accuserResponseFileName: $accuserResponseFileName
        approvedAmount: $approvedAmount
        complaintId: $complaintId
        councilApprovedAmount: $councilApprovedAmount
        description: $description
        expertId: $expertId
        expertOpinion: $expertOpinion
        expertOpinionFileName: $expertOpinionFileName
        expertVerdict: $expertVerdict
        fileName: $fileName
        filledBy: $filledBy
        mailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount
        mailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount
        suggestedAmount: $suggestedAmount
        summary: $summary
        userId: $userId
      }
    ) {
      result {
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
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_ARGUMENT = gql`
  mutation UpdateArgument(
    $id: Int!
    $accuserResponse: String!
    $accuserResponseFileName: String!
    $approvedAmount: Decimal!
    $complaintId: Int!
    $councilApprovedAmount: Decimal!
    $description: String!
    $expertId: String!
    $expertOpinion: String!
    $expertOpinionFileName: String!
    $expertVerdict: String!
    $fileName: String!
    $filledBy: RegistrarType!
    $mailRoomChiefSuggestedAmount: Decimal!
    $mailRoomExpertApprovedAmount: Decimal!
    $suggestedAmount: Decimal!
    $summary: String!
    $userId: String!
  ) {
    complaintArgument_updateComplaintArgument(
      input: {
        accuserResponse: $accuserResponse
        accuserResponseFileName: $accuserResponseFileName
        approvedAmount: $approvedAmount
        complaintId: $complaintId
        councilApprovedAmount: $councilApprovedAmount
        description: $description
        expertId: $expertId
        expertOpinion: $expertOpinion
        expertOpinionFileName: $expertOpinionFileName
        expertVerdict: $expertVerdict
        fileName: $fileName
        filledBy: $filledBy
        mailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount
        mailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount
        suggestedAmount: $suggestedAmount
        summary: $summary
        userId: $userId
        id: $id
      }
    ) {
      result {
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

export enum RegistrarType {
  Accuser = 0,
  Accused = 1,
}
