import { UserRole } from "../GraphQL/Users/Queries";

export type User = {
  userRoles: UserRole[] | undefined;
  firstName: string;
  lastName: string;
  nationalCode: string;
  personnelCode: string;
  departmentId: number;
  phoneNumber: string;
  userName: string;
  email: string;
  id: string;
};

export type Argument = {
  Summary: string;
  Description: string;
  FileName: string;
  SuggestedAmount: number;
  AccusedResponse: string;
  AccusedResponseFileName: string;
  ExpertOpinion: string;
  ExpertVerdict: string;
  ExpertOpinionFileName: string;
  ApprovedAmount: number;
  MailRoomExpertApprovedAmount: number;
  MailRoomChiefSuggestedAmount: number;
  CouncilApprovedAmount: number;
  ContractId: number;
};

export type OptionalArgument = {
  id?: string;
  Summary?: string;
  Description?: string;
  FileName?: string;
  SuggestedAmount?: number;
  AccusedResponse?: string;
  AccusedResponseFileName?: string;
  ExpertOpinion?: string;
  ExpertVerdict?: string;
  ExpertOpinionFileName?: string;
  ApprovedAmount?: number;
  MailRoomExpertApprovedAmount?: number;
  MailRoomChiefSuggestedAmount?: number;
  CouncilApprovedAmount?: number;
  ContractId?: number;
  Files?: File[];
};

export type OptionalArgumentSamll = {
  id?: string;
  summary?: string;
  description?: string;
  fileName?: string;
  suggestedAmount?: number;
  accusedResponse?: string;
  accusedResponseFileName?: string;
  expertOpinion?: string;
  expertVerdict?: string;
  expertOpinionFileName?: string;
  approvedAmount?: number;
  mailRoomExpertApprovedAmount?: number;
  mailRoomChiefSuggestedAmount?: number;
  councilApprovedAmount?: number;
  contractId?: number;
  Files?: File[];
};




export enum ComplaintStatus {
  ComplaintRegistered,
  ComplaintIsCanceledByAccuser,
  WaitingForAccusedToFillForms,
  CheckingForBeingConstructive,
  NotAcceptedForBeingConstructive,
  AddingToComplaintList,
  WaitingForLetterResponseFromMinistersCouncil,
  WaitingForFirstPayment,
  DidNotFulfillFirstPayment,
  WaitingForAccuserAndAccusedToSignDecree,
  WaitingForAccuserToSignDecree,
  WaitingForAccusedToSignDecree,
  CheckingAndUploadingTheSignedDecree,
  DeterminingCaseExpert,
  WaitingForExpertsCouncilPayment,
  WaitingForCaseExpertRegistry,
  UploadingDocumentsAndReviewingComplaint,
  RedeterminingCaseExpert,
  WaitingForFinalReportRegistration,
  MailRoomExpertReviewingTheFinalReport,
  MailRoomChiefReviewingTheFinalReport,
  WaitingForCouncilResult,
  WaitingForFinalResultUpload,
  WaitingForSecondPayment,
  ResultNotifiedAbilityToViewScannedPhysicalResult,
  ComplaintDetermined,
  WaitingForNewOfferorsInfo,
  NewOfferorNotified,
  WaitingForRelatedFormsCompletionAndCommentingOnOfferorChanging,
  WaitingToDetermineIfTheOldOrTheNewOfferorIsTheAccused,
  ReviewingExpertOpinionOnOfferorChanging,
  AccusedNotifiedOfOfferorChangingResult,
  AccuserNotifiedOfSuccessfulChangingOfTheOfferor,
}