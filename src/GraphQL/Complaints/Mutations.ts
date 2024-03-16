import { gql } from "@apollo/client";

export const CREATE_COMPLAINT = gql`
  mutation CreateComplaint(
    $contractId: Int!
    $userId: String!
    $complaintStateId: Int
  ) {
    complaint_addComplaint(
      input: {
        contractId: $contractId
        userId: $userId
        complaintStateId: $complaintStateId
      }
    ) {
      result {
        id
        assignedUserId
        complaintState {
          id
          persianName
        }
        arbitrationTermsForms {
          userId
          firstCondition
          firstConditionFileName
          secondCondition
          secondConditionFileName
          thirdCondition
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
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

export const UPDATE_COMPLAINT = gql`
  mutation UpdateComplaint(
    $id: Int!
    $assignedUserId: String
    $contractId: Int
    $userId: String
    $complaintStateId: Int
    $isApprovedByChief: Boolean
  ) {
    complaint_updateComplaint(
      input: {
        id: $id
        assignedUserId: $assignedUserId
        contractId: $contractId
        userId: $userId
        complaintStateId: $complaintStateId
        isApprovedByChief: $isApprovedByChief
      }
    ) {
      result {
        id
        assignedUserId
        complaintState {
          id
          persianName
        }
        arbitrationTermsForms {
          userId
          firstCondition
          firstConditionFileName
          secondCondition
          secondConditionFileName
          thirdCondition
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
          __typename
        }
        __typename
      }
      status {
        code
        value
        __typename
      }
      __typename
    }
  }
`;
export const UPDATE_COMPLAINT_FULL = gql`
  mutation UpdateComplaintFull($input: ComplaintInput!) {
    complaint_updateComplaint(input: $input) {
      result {
        id
        assignedUserId
        complaintState {
          id
          persianName
        }
        arbitrationTermsForms {
          userId
          firstCondition
          firstConditionFileName
          secondCondition
          secondConditionFileName
          thirdCondition
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
          __typename
        }
        __typename
      }
      status {
        code
        value
        __typename
      }
      __typename
    }
  }
`;

export const CREATE_ARBITRATION_TERMS_FORM = gql`
  mutation CreateArbitrationTermsForm(
    $complaintId: Int!
    $userId: String!
    $filledBy: RegistrarType!
    $firstCondition: String!
    $firstConditionFileName: String
    $secondCondition: String!
    $secondConditionFileName: String
    $thirdCondition: String!
    $thirdConditionFinalBillFileName: String
    $thirdConditionNotificationLetterFileName: String
    $thirdConditionContractorsObjectionDocumentsFileName: String
    $fourthCondition: String!
    $fourthConditionFileName: String
    $projectName: String
    $projectNumber: String
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
        thirdConditionFinalBillFileName: $thirdConditionFinalBillFileName
        thirdConditionNotificationLetterFileName: $thirdConditionNotificationLetterFileName
        thirdConditionContractorsObjectionDocumentsFileName: $thirdConditionContractorsObjectionDocumentsFileName
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
        thirdConditionFinalBillFileName
        thirdConditionNotificationLetterFileName
        thirdConditionContractorsObjectionDocumentsFileName
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
  mutation AddArgumentToComplaint($input: ComplaintArgumentInput!) {
    complaintArgument_addComplaintArgument(input: $input) {
      result {
        id
        accusedResponse
        accusedResponseFileName
        netApprovedAmount
        grossApprovedAmount
        complaintId
        netCouncilApprovedAmount
        grossCouncilApprovedAmount
        description
        expertId
        expertOpinion
        expertOpinionFileName
        expertVerdict
        fileName
        filledBy
        netMailRoomChiefSuggestedAmount
        grossMailRoomChiefSuggestedAmount
        netMailRoomExpertApprovedAmount
        grossMailRoomExpertApprovedAmount
        suggestedAmount
        summary
        userId
        __typename
      }
      status {
        code
        value
        __typename
      }
      __typename
    }
  }
`;

export const UPDATE_ARGUMENT = gql`
  mutation UpdateArgument(
    $id: Int!
    $accuserResponse: String
    $accuserResponseFileName: String
    $approvedAmount: Decimal
    $complaintId: Int
    $councilApprovedAmount: Decimal
    $councilOpinion: String
    $description: String
    $expertId: String
    $expertOpinion: String
    $expertOpinionFileName: String
    $expertVerdict: String
    $fileName: String
    $filledBy: RegistrarType
    $mailRoomChiefSuggestedAmount: Decimal
    $mailRoomExpertApprovedAmount: Decimal
    $suggestedAmount: Decimal
    $summary: String
    $userId: String
    $accuserAnswerToAccusedResponse: String
  ) {
    complaintArgument_updateComplaintArgument(
      input: {
        accusedResponse: $accuserResponse
        accusedResponseFileName: $accuserResponseFileName
        netApprovedAmount: $approvedAmount
        complaintId: $complaintId
        netCouncilApprovedAmount: $councilApprovedAmount
        councilOpinion: $councilOpinion
        description: $description
        expertId: $expertId
        expertOpinion: $expertOpinion
        expertOpinionFileName: $expertOpinionFileName
        expertVerdict: $expertVerdict
        fileName: $fileName
        filledBy: $filledBy
        netMailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount
        netMailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount
        suggestedAmount: $suggestedAmount
        summary: $summary
        userId: $userId
        accuserAnswerToAccusedResponse: $accuserAnswerToAccusedResponse
        id: $id
      }
    ) {
      result {
        id
        accusedResponse
        accusedResponseFileName
        netApprovedAmount
        grossApprovedAmount
        complaintId
        netCouncilApprovedAmount
        grossCouncilApprovedAmount
        justiceExpertOpinion
        netJusticeExpertApprovedAmount
        grossJusticeExpertApprovedAmount
        description
        expertId
        expertOpinion
        expertOpinionFileName
        expertVerdict
        fileName
        filledBy
        netMailRoomChiefSuggestedAmount
        grossMailRoomChiefSuggestedAmount
        netMailRoomExpertApprovedAmount
        grossMailRoomExpertApprovedAmount
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

export const UPDATE_ARGUMENT_FULL = gql`
  mutation UpdateArgumentFull($input: ComplaintArgumentInput!) {
    complaintArgument_updateComplaintArgument(input: $input) {
      result {
        id
        accusedResponse
        accusedResponseFileName
        netApprovedAmount
        grossApprovedAmount
        complaintId
        netCouncilApprovedAmount
        grossCouncilApprovedAmount
        justiceExpertOpinion
        netJusticeExpertApprovedAmount
        grossJusticeExpertApprovedAmount
        description
        expertId
        expertOpinion
        expertOpinionFileName
        expertVerdict
        fileName
        filledBy
        netMailRoomChiefSuggestedAmount
        grossMailRoomChiefSuggestedAmount
        netMailRoomExpertApprovedAmount
        grossMailRoomExpertApprovedAmount
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
export const DELETE_ARGUMENT = gql`
  mutation DeleteArgument($id: Int!) {
    complaintArgument_deleteComplaintArgument(entityId: $id) {
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

export const DELETE_COMPLAINT = gql`
  mutation deleteCompain($id: Int!) {
    complaint_deleteComplaint(entityId: $id) {
      status {
        code
        value
      }
    }
  }
`;

export const ADD_COMPLAINT_NOTE = gql`
  mutation AddComplaintNote($input: ComplaintNoteInput!) {
    complaintNote_addComplaintNote(input: $input) {
      result {
        content
        complaintId
        id
        noteType
        createdDate
      }
    }
  }
`;
export const SendAccusedRespondedSMS = gql`
  mutation SendAccusedRespondedSMS($complaintId: Int!) {
    sms_sendAccusedRespondedSMS(complaintId: $complaintId) {
      code
      value
    }
  }
`;

export const AddComplaintFileMutation = gql`
  mutation AddComplaintFileMutation($input: ComplaintFileInput!) {
    complaintFile_addComplaintFile(input: $input) {
      result {
        complaintId
        title
        fileId
        description
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const GenerateComplaintVerdict = gql`
  mutation GenerateComplaintVerdict($input: ComplaintVerdictLetterDtoInput!) {
    test_generateComplaintVerdictLetter(input: $input)
  }
`;
export const GenerateComplaintDecree = gql`
  mutation GenerateComplaintDecree($input: DecreeDtoInput!) {
    test_generateDecree(input: $input)
  }
`;

export const SMSComplaintAdded = gql`
  mutation SMSComplaintAdded($id: Int!) {
    sms_sendComplaintAddedSMS(complaintId: $id) {
      code
      value
    }
  }
`;
export const SMSAccusedRespond = gql`
  mutation SMSAccusedRespond($id: Int!) {
    sms_sendAccusedRespondedSMS(complaintId: $id) {
      code
      value
    }
  }
`;
export const SMSComplaintCode = gql`
  mutation SMSComplaintCode($id: Int!) {
    sms_sendComplaintCodeSMS(complaintId: $id) {
      code
      value
    }
  }
`;

export const AddCorrectionRequests = gql`
  mutation AddCorrectionRequests($input: CorrectionRequestInput!) {
    correctionRequest_addCorrectionRequest(input: $input) {
      result {
        complaintId
        createdDate
        clause
        reason
        suggestion
        id
        complaintId
        complaint {
          id
          contract {
            accuserDepartmentUserId
            accusedDepartmentUserId
          }
        }
      }
    }
  }
`;

export const UpdateCorrectionRequests = gql`
  mutation UpdateCorrectionRequests($input: CorrectionRequestInput!) {
    correctionRequest_updateCorrectionRequest(input: $input) {
      result {
        complaintId
        createdDate
        clause
        reason
        suggestion
        id
        complaintId
        complaint {
          id
          contract {
            accuserDepartmentUserId
            accusedDepartmentUserId
          }
        }
      }
    }
  }
`;

export const DeleteCorrectionRequests = gql`
  mutation DeleteCorrectionRequests($id: Int!) {
    correctionRequest_deleteCorrectionRequest(entityId: $id) {
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

// export const test = gql `
// mutation {
//   adjustmentStatement_addAdjustmentStatement(input: {

//   })
// }
// `
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
