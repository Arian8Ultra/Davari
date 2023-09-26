import { gql } from "@apollo/client";

export const CREATE_COMPLAINT = gql`
  mutation CreateComplaint(
    $contractId: Int!
    $userId: String!
  ) {
    complaint_addComplaint(
      input: {
        contractId: $contractId
        userId: $userId
      }
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
  ){
    arbitrationTermsForm_addArbitrationTermsForm(input: {
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
    }){
      result{
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
      status{
        code
        value
      }
    }
  }`

export type CreateComplaintInput = {
  accusedDepartmentId: number;
  accuserDepartmentId: number;
  complaintFormId: number;
  contractId: number;
  complaintResponseFormId: number;
  userId: string;
};


export enum RegistrarType{
  Accuser = 0,
  Accused = 1
}