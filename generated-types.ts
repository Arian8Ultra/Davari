import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Long: { input: any; output: any; }
  TimeSpan: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AccusedDocsAfterCouncilRequestLetterDtoInput = {
  canonDate: Scalars['Date']['input'];
  canonNum: Scalars['String']['input'];
  clause: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccusedDocsRequestLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  previousLetterDate: Scalars['Date']['input'];
  previousLetterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccuserDidNotRespondLetterDtoInput = {
  canonDate: Scalars['Date']['input'];
  canonNum: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  previousLetterDate: Scalars['Date']['input'];
  previousLetterDate2: Scalars['Date']['input'];
  previousLetterNum: Scalars['String']['input'];
  previousLetterNum2: Scalars['String']['input'];
  previousLetterNum3: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccuserSalaryAnnouncementDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterDate2: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  letterNum2: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccuserSalaryAnnouncementRequestDtoInput = {
  complaintIds: Array<Scalars['Int']['input']>;
  letterDate: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AdjustmentStatement = {
  __typename?: 'AdjustmentStatement';
  adjustmentStatementParts?: Maybe<Array<AdjustmentStatementPart>>;
  adjustmentStatementTable?: Maybe<AdjustmentStatementTable>;
  adjustmentStatementTableId: Scalars['Int']['output'];
  amountApprovedByEmployer: Scalars['Decimal']['output'];
  amountConfirmedByConsultant: Scalars['Decimal']['output'];
  amountPaid: Scalars['Decimal']['output'];
  amountProvidedByContractor: Scalars['Decimal']['output'];
  createdDate: Scalars['DateTime']['output'];
  dateApprovedByEmployer: Scalars['Date']['output'];
  dateConfirmedByConsultant: Scalars['Date']['output'];
  datePaid: Scalars['Date']['output'];
  dateProvidedByContractor: Scalars['Date']['output'];
  filledBy?: Maybe<RegistrarType>;
  financialCoverFileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  operationPeriodEndDate: Scalars['Date']['output'];
  operationPeriodStartDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
};

export type AdjustmentStatementCollectionSegment = {
  __typename?: 'AdjustmentStatementCollectionSegment';
  items?: Maybe<Array<AdjustmentStatement>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdjustmentStatementFilterInput = {
  adjustmentStatementParts?: InputMaybe<ListFilterInputTypeOfAdjustmentStatementPartFilterInput>;
  adjustmentStatementTable?: InputMaybe<AdjustmentStatementTableFilterInput>;
  adjustmentStatementTableId?: InputMaybe<ComparableInt32OperationFilterInput>;
  amountApprovedByEmployer?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountConfirmedByConsultant?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountPaid?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountProvidedByContractor?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<AdjustmentStatementFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dateApprovedByEmployer?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateConfirmedByConsultant?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  datePaid?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateProvidedByContractor?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  financialCoverFileName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationPeriodEndDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  operationPeriodStartDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<AdjustmentStatementFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type AdjustmentStatementInput = {
  adjustmentStatementTableId?: InputMaybe<Scalars['Int']['input']>;
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  financialCoverFileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AdjustmentStatementPart = {
  __typename?: 'AdjustmentStatementPart';
  adjustmentStatement?: Maybe<AdjustmentStatement>;
  adjustmentStatementId: Scalars['Int']['output'];
  amountApprovedByEmployer: Scalars['Decimal']['output'];
  amountConfirmedByConsultant: Scalars['Decimal']['output'];
  amountPaid: Scalars['Decimal']['output'];
  amountProvidedByContractor: Scalars['Decimal']['output'];
  createdDate: Scalars['DateTime']['output'];
  dateApprovedByEmployer: Scalars['Date']['output'];
  dateConfirmedByConsultant: Scalars['Date']['output'];
  datePaid: Scalars['Date']['output'];
  dateProvidedByContractor: Scalars['Date']['output'];
  filledBy?: Maybe<RegistrarType>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  operationPeriodEndDate?: Maybe<Scalars['Date']['output']>;
  operationPeriodStartDate?: Maybe<Scalars['Date']['output']>;
};

export type AdjustmentStatementPartCollectionSegment = {
  __typename?: 'AdjustmentStatementPartCollectionSegment';
  items?: Maybe<Array<AdjustmentStatementPart>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdjustmentStatementPartFilterInput = {
  adjustmentStatement?: InputMaybe<AdjustmentStatementFilterInput>;
  adjustmentStatementId?: InputMaybe<ComparableInt32OperationFilterInput>;
  amountApprovedByEmployer?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountConfirmedByConsultant?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountPaid?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountProvidedByContractor?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<AdjustmentStatementPartFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dateApprovedByEmployer?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateConfirmedByConsultant?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  datePaid?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateProvidedByContractor?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationPeriodEndDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationPeriodStartDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<AdjustmentStatementPartFilterInput>>;
};

export type AdjustmentStatementPartInput = {
  adjustmentStatementId?: InputMaybe<Scalars['Int']['input']>;
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AdjustmentStatementPartSortInput = {
  adjustmentStatement?: InputMaybe<AdjustmentStatementSortInput>;
  adjustmentStatementId?: InputMaybe<SortEnumType>;
  amountApprovedByEmployer?: InputMaybe<SortEnumType>;
  amountConfirmedByConsultant?: InputMaybe<SortEnumType>;
  amountPaid?: InputMaybe<SortEnumType>;
  amountProvidedByContractor?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  dateApprovedByEmployer?: InputMaybe<SortEnumType>;
  dateConfirmedByConsultant?: InputMaybe<SortEnumType>;
  datePaid?: InputMaybe<SortEnumType>;
  dateProvidedByContractor?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  operationPeriodEndDate?: InputMaybe<SortEnumType>;
  operationPeriodStartDate?: InputMaybe<SortEnumType>;
};

export type AdjustmentStatementSortInput = {
  adjustmentStatementTable?: InputMaybe<AdjustmentStatementTableSortInput>;
  adjustmentStatementTableId?: InputMaybe<SortEnumType>;
  amountApprovedByEmployer?: InputMaybe<SortEnumType>;
  amountConfirmedByConsultant?: InputMaybe<SortEnumType>;
  amountPaid?: InputMaybe<SortEnumType>;
  amountProvidedByContractor?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  dateApprovedByEmployer?: InputMaybe<SortEnumType>;
  dateConfirmedByConsultant?: InputMaybe<SortEnumType>;
  datePaid?: InputMaybe<SortEnumType>;
  dateProvidedByContractor?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  financialCoverFileName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  operationPeriodEndDate?: InputMaybe<SortEnumType>;
  operationPeriodStartDate?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type AdjustmentStatementTable = {
  __typename?: 'AdjustmentStatementTable';
  adjustmentStatements?: Maybe<Array<AdjustmentStatement>>;
  contract?: Maybe<Contract>;
  contractId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  filledBy?: Maybe<RegistrarType>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type AdjustmentStatementTableCollectionSegment = {
  __typename?: 'AdjustmentStatementTableCollectionSegment';
  items?: Maybe<Array<AdjustmentStatementTable>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdjustmentStatementTableFilterInput = {
  adjustmentStatements?: InputMaybe<ListFilterInputTypeOfAdjustmentStatementFilterInput>;
  and?: InputMaybe<Array<AdjustmentStatementTableFilterInput>>;
  contract?: InputMaybe<ContractFilterInput>;
  contractId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<AdjustmentStatementTableFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type AdjustmentStatementTableInput = {
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AdjustmentStatementTableSortInput = {
  contract?: InputMaybe<ContractSortInput>;
  contractId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type ArbitrationRejectionLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterDate2: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  letterNum2: Scalars['String']['input'];
  statement: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ArbitrationTermsForm = {
  __typename?: 'ArbitrationTermsForm';
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  filledBy: RegistrarType;
  firstCondition: Scalars['String']['output'];
  firstConditionFileName?: Maybe<Scalars['String']['output']>;
  fourthCondition: Scalars['String']['output'];
  fourthConditionFileName?: Maybe<Scalars['String']['output']>;
  hasReadAgreement: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  projectNumber?: Maybe<Scalars['String']['output']>;
  secondCondition: Scalars['String']['output'];
  secondConditionFileName?: Maybe<Scalars['String']['output']>;
  thirdCondition: Scalars['String']['output'];
  thirdConditionContractorsObjectionDocumentsFileName?: Maybe<Scalars['String']['output']>;
  thirdConditionFinalBillFileName?: Maybe<Scalars['String']['output']>;
  thirdConditionNotificationLetterFileName?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ArbitrationTermsFormCollectionSegment = {
  __typename?: 'ArbitrationTermsFormCollectionSegment';
  items?: Maybe<Array<ArbitrationTermsForm>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ArbitrationTermsFormFilterInput = {
  and?: InputMaybe<Array<ArbitrationTermsFormFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  filledBy?: InputMaybe<RegistrarTypeOperationFilterInput>;
  firstCondition?: InputMaybe<StringOperationFilterInput>;
  firstConditionFileName?: InputMaybe<StringOperationFilterInput>;
  fourthCondition?: InputMaybe<StringOperationFilterInput>;
  fourthConditionFileName?: InputMaybe<StringOperationFilterInput>;
  hasReadAgreement?: InputMaybe<BooleanOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ArbitrationTermsFormFilterInput>>;
  projectName?: InputMaybe<StringOperationFilterInput>;
  projectNumber?: InputMaybe<StringOperationFilterInput>;
  secondCondition?: InputMaybe<StringOperationFilterInput>;
  secondConditionFileName?: InputMaybe<StringOperationFilterInput>;
  thirdCondition?: InputMaybe<StringOperationFilterInput>;
  thirdConditionContractorsObjectionDocumentsFileName?: InputMaybe<StringOperationFilterInput>;
  thirdConditionFinalBillFileName?: InputMaybe<StringOperationFilterInput>;
  thirdConditionNotificationLetterFileName?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ArbitrationTermsFormInput = {
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  firstCondition?: InputMaybe<Scalars['String']['input']>;
  firstConditionFileName?: InputMaybe<Scalars['String']['input']>;
  fourthCondition?: InputMaybe<Scalars['String']['input']>;
  fourthConditionFileName?: InputMaybe<Scalars['String']['input']>;
  hasReadAgreement?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  projectNumber?: InputMaybe<Scalars['String']['input']>;
  secondCondition?: InputMaybe<Scalars['String']['input']>;
  secondConditionFileName?: InputMaybe<Scalars['String']['input']>;
  thirdCondition?: InputMaybe<Scalars['String']['input']>;
  thirdConditionContractorsObjectionDocumentsFileName?: InputMaybe<Scalars['String']['input']>;
  thirdConditionFinalBillFileName?: InputMaybe<Scalars['String']['input']>;
  thirdConditionNotificationLetterFileName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ArbitrationTermsFormSortInput = {
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  firstCondition?: InputMaybe<SortEnumType>;
  firstConditionFileName?: InputMaybe<SortEnumType>;
  fourthCondition?: InputMaybe<SortEnumType>;
  fourthConditionFileName?: InputMaybe<SortEnumType>;
  hasReadAgreement?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  projectName?: InputMaybe<SortEnumType>;
  projectNumber?: InputMaybe<SortEnumType>;
  secondCondition?: InputMaybe<SortEnumType>;
  secondConditionFileName?: InputMaybe<SortEnumType>;
  thirdCondition?: InputMaybe<SortEnumType>;
  thirdConditionContractorsObjectionDocumentsFileName?: InputMaybe<SortEnumType>;
  thirdConditionFinalBillFileName?: InputMaybe<SortEnumType>;
  thirdConditionNotificationLetterFileName?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type AssignToExpertLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  meetingDate: Scalars['Date']['input'];
  meetingTime: Scalars['TimeSpan']['input'];
  userId: Scalars['String']['input'];
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CallToMeetingLetterDtoInput = {
  canonDate: Scalars['Date']['input'];
  canonNum: Scalars['String']['input'];
  clause: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  consultantName: Scalars['String']['input'];
  hearingMeetingTime: Scalars['TimeSpan']['input'];
  meetingDate: Scalars['Date']['input'];
  signingMeetingTime: Scalars['TimeSpan']['input'];
  userId: Scalars['String']['input'];
};

export type ChangePasswordDtoInput = {
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  activityEndDate?: Maybe<Scalars['Date']['output']>;
  addressDesc?: Maybe<Scalars['String']['output']>;
  cEOFirstName?: Maybe<Scalars['String']['output']>;
  cEOLastName?: Maybe<Scalars['String']['output']>;
  cEOMobileNum?: Maybe<Scalars['String']['output']>;
  cEONationalityCode?: Maybe<Scalars['String']['output']>;
  companyTypeTitle?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  emailAddress?: Maybe<Scalars['String']['output']>;
  fixPhoneNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  issuanceDate?: Maybe<Scalars['Date']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nationalCode?: Maybe<Scalars['String']['output']>;
  postCode?: Maybe<Scalars['String']['output']>;
  registerDate?: Maybe<Scalars['Date']['output']>;
  registerNumber?: Maybe<Scalars['String']['output']>;
  smsNumber?: Maybe<Scalars['String']['output']>;
  webAddress?: Maybe<Scalars['String']['output']>;
};

export type CompanyProfileCollectionSegment = {
  __typename?: 'CompanyProfileCollectionSegment';
  items?: Maybe<Array<CompanyProfile>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompanyProfileFilterInput = {
  activityEndDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  addressDesc?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<CompanyProfileFilterInput>>;
  cEOFirstName?: InputMaybe<StringOperationFilterInput>;
  cEOLastName?: InputMaybe<StringOperationFilterInput>;
  cEOMobileNum?: InputMaybe<StringOperationFilterInput>;
  cEONationalityCode?: InputMaybe<StringOperationFilterInput>;
  companyTypeTitle?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  emailAddress?: InputMaybe<StringOperationFilterInput>;
  fixPhoneNumber?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  issuanceDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  nationalCode?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CompanyProfileFilterInput>>;
  postCode?: InputMaybe<StringOperationFilterInput>;
  registerDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  registerNumber?: InputMaybe<StringOperationFilterInput>;
  smsNumber?: InputMaybe<StringOperationFilterInput>;
  webAddress?: InputMaybe<StringOperationFilterInput>;
};

export type CompanyProfileInput = {
  activityEndDate?: InputMaybe<Scalars['Date']['input']>;
  addressDesc?: InputMaybe<Scalars['String']['input']>;
  cEOFirstName?: InputMaybe<Scalars['String']['input']>;
  cEOLastName?: InputMaybe<Scalars['String']['input']>;
  cEOMobileNum?: InputMaybe<Scalars['String']['input']>;
  cEONationalityCode?: InputMaybe<Scalars['String']['input']>;
  companyTypeTitle?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  fixPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  issuanceDate?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  postCode?: InputMaybe<Scalars['String']['input']>;
  registerDate?: InputMaybe<Scalars['Date']['input']>;
  registerNumber?: InputMaybe<Scalars['String']['input']>;
  smsNumber?: InputMaybe<Scalars['String']['input']>;
  webAddress?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyProfileSortInput = {
  activityEndDate?: InputMaybe<SortEnumType>;
  addressDesc?: InputMaybe<SortEnumType>;
  cEOFirstName?: InputMaybe<SortEnumType>;
  cEOLastName?: InputMaybe<SortEnumType>;
  cEOMobileNum?: InputMaybe<SortEnumType>;
  cEONationalityCode?: InputMaybe<SortEnumType>;
  companyTypeTitle?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  emailAddress?: InputMaybe<SortEnumType>;
  fixPhoneNumber?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  issuanceDate?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  nationalCode?: InputMaybe<SortEnumType>;
  postCode?: InputMaybe<SortEnumType>;
  registerDate?: InputMaybe<SortEnumType>;
  registerNumber?: InputMaybe<SortEnumType>;
  smsNumber?: InputMaybe<SortEnumType>;
  webAddress?: InputMaybe<SortEnumType>;
};

export type ComparableDateOnlyOperationFilterInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
  ngt?: InputMaybe<Scalars['Date']['input']>;
  ngte?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<Scalars['Date']['input']>>;
  nlt?: InputMaybe<Scalars['Date']['input']>;
  nlte?: InputMaybe<Scalars['Date']['input']>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComparableDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<Scalars['Int']['input']>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ComparableNullableOfDateOnlyOperationFilterInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
  ngt?: InputMaybe<Scalars['Date']['input']>;
  ngte?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  nlt?: InputMaybe<Scalars['Date']['input']>;
  nlte?: InputMaybe<Scalars['Date']['input']>;
};

export type ComparableNullableOfDateTimeOffsetOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComparableNullableOfDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type ComparableNullableOfDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ComparableNullableOfInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  neq?: InputMaybe<Scalars['Long']['input']>;
  ngt?: InputMaybe<Scalars['Long']['input']>;
  ngte?: InputMaybe<Scalars['Long']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  nlt?: InputMaybe<Scalars['Long']['input']>;
  nlte?: InputMaybe<Scalars['Long']['input']>;
};

export type Complaint = {
  __typename?: 'Complaint';
  accusedFinalOpinion?: Maybe<Scalars['String']['output']>;
  arbitrationCost?: Maybe<Scalars['Decimal']['output']>;
  arbitrationTermsForms?: Maybe<Array<ArbitrationTermsForm>>;
  arguments?: Maybe<Array<ComplaintArgument>>;
  assignedUser?: Maybe<User>;
  assignedUserId?: Maybe<Scalars['String']['output']>;
  complaintCode?: Maybe<Scalars['String']['output']>;
  complaintFiles?: Maybe<Array<ComplaintFile>>;
  complaintNonFeasibleArguments?: Maybe<Array<ComplaintNonFeasibleArgument>>;
  complaintState?: Maybe<ComplaintState>;
  complaintStateId?: Maybe<Scalars['Int']['output']>;
  contract?: Maybe<Contract>;
  contractId: Scalars['Int']['output'];
  correctionRequests?: Maybe<Array<CorrectionRequest>>;
  councilExpertIds?: Maybe<Array<Scalars['String']['output']>>;
  councilListStatus: CouncilListStatus;
  createdDate: Scalars['DateTime']['output'];
  eventHistories?: Maybe<Array<EventHistory>>;
  expertArbitrationCost?: Maybe<Scalars['Decimal']['output']>;
  firstPaymentCost?: Maybe<Scalars['Decimal']['output']>;
  handlingType?: Maybe<HandlingType>;
  id: Scalars['Int']['output'];
  isApprovedByChief: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isExpertArbitrationCostPaid: Scalars['Boolean']['output'];
  isFirstPaymentPaid: Scalars['Boolean']['output'];
  isSecondPaymentPaid: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  secondPaymentCost?: Maybe<Scalars['Decimal']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  verdictFileName?: Maybe<Scalars['String']['output']>;
};

export type ComplaintArgument = {
  __typename?: 'ComplaintArgument';
  accusedResponse?: Maybe<Scalars['String']['output']>;
  accusedResponseFileName?: Maybe<Scalars['String']['output']>;
  accuserAnswerToAccusedResponse?: Maybe<Scalars['String']['output']>;
  accuserAnswerToAccusedResponseFileName?: Maybe<Scalars['String']['output']>;
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  councilOpinion?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expertId?: Maybe<Scalars['String']['output']>;
  expertOpinion?: Maybe<Scalars['String']['output']>;
  expertOpinionFileName?: Maybe<Scalars['String']['output']>;
  expertVerdict?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  filledBy: RegistrarType;
  financialSituation?: Maybe<Scalars['String']['output']>;
  financialStatus?: Maybe<FinancialStatus>;
  financialStatusFileName?: Maybe<Scalars['String']['output']>;
  grossApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  grossCouncilApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  grossJusticeExpertApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  grossMailRoomChiefSuggestedAmount?: Maybe<Scalars['Decimal']['output']>;
  grossMailRoomExpertApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  justiceExpertOpinion?: Maybe<Scalars['String']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mailRoomChiefOpinionOnArgument?: Maybe<Scalars['String']['output']>;
  mailRoomChiefOpinionOnExpertOpinion?: Maybe<Scalars['String']['output']>;
  mailRoomExpertOpinionOnArgument?: Maybe<Scalars['String']['output']>;
  mailRoomExpertOpinionOnExpertOpinion?: Maybe<Scalars['String']['output']>;
  netApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  netCouncilApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  netJusticeExpertApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  netMailRoomChiefSuggestedAmount?: Maybe<Scalars['Decimal']['output']>;
  netMailRoomExpertApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  suggestedAmount: Scalars['Decimal']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  verdict?: Maybe<Scalars['String']['output']>;
};

export type ComplaintArgumentCollectionSegment = {
  __typename?: 'ComplaintArgumentCollectionSegment';
  items?: Maybe<Array<ComplaintArgument>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComplaintArgumentFilterInput = {
  accusedResponse?: InputMaybe<StringOperationFilterInput>;
  accusedResponseFileName?: InputMaybe<StringOperationFilterInput>;
  accuserAnswerToAccusedResponse?: InputMaybe<StringOperationFilterInput>;
  accuserAnswerToAccusedResponseFileName?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ComplaintArgumentFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  councilOpinion?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  expertId?: InputMaybe<StringOperationFilterInput>;
  expertOpinion?: InputMaybe<StringOperationFilterInput>;
  expertOpinionFileName?: InputMaybe<StringOperationFilterInput>;
  expertVerdict?: InputMaybe<StringOperationFilterInput>;
  fileName?: InputMaybe<StringOperationFilterInput>;
  filledBy?: InputMaybe<RegistrarTypeOperationFilterInput>;
  financialSituation?: InputMaybe<StringOperationFilterInput>;
  financialStatus?: InputMaybe<NullableOfFinancialStatusOperationFilterInput>;
  financialStatusFileName?: InputMaybe<StringOperationFilterInput>;
  grossApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  grossCouncilApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  grossJusticeExpertApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  grossMailRoomChiefSuggestedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  grossMailRoomExpertApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  justiceExpertOpinion?: InputMaybe<StringOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  mailRoomChiefOpinionOnArgument?: InputMaybe<StringOperationFilterInput>;
  mailRoomChiefOpinionOnExpertOpinion?: InputMaybe<StringOperationFilterInput>;
  mailRoomExpertOpinionOnArgument?: InputMaybe<StringOperationFilterInput>;
  mailRoomExpertOpinionOnExpertOpinion?: InputMaybe<StringOperationFilterInput>;
  netApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  netCouncilApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  netJusticeExpertApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  netMailRoomChiefSuggestedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  netMailRoomExpertApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintArgumentFilterInput>>;
  suggestedAmount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  summary?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  verdict?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintArgumentInput = {
  accusedResponse?: InputMaybe<Scalars['String']['input']>;
  accusedResponseFileName?: InputMaybe<Scalars['String']['input']>;
  accuserAnswerToAccusedResponse?: InputMaybe<Scalars['String']['input']>;
  accuserAnswerToAccusedResponseFileName?: InputMaybe<Scalars['String']['input']>;
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  councilOpinion?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expertId?: InputMaybe<Scalars['String']['input']>;
  expertOpinion?: InputMaybe<Scalars['String']['input']>;
  expertOpinionFileName?: InputMaybe<Scalars['String']['input']>;
  expertVerdict?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  financialSituation?: InputMaybe<Scalars['String']['input']>;
  financialStatus?: InputMaybe<FinancialStatus>;
  financialStatusFileName?: InputMaybe<Scalars['String']['input']>;
  grossApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  grossCouncilApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  grossJusticeExpertApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  grossMailRoomChiefSuggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  grossMailRoomExpertApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  justiceExpertOpinion?: InputMaybe<Scalars['String']['input']>;
  mailRoomChiefOpinionOnArgument?: InputMaybe<Scalars['String']['input']>;
  mailRoomChiefOpinionOnExpertOpinion?: InputMaybe<Scalars['String']['input']>;
  mailRoomExpertOpinionOnArgument?: InputMaybe<Scalars['String']['input']>;
  mailRoomExpertOpinionOnExpertOpinion?: InputMaybe<Scalars['String']['input']>;
  netApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  netCouncilApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  netJusticeExpertApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  netMailRoomChiefSuggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  netMailRoomExpertApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  suggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  verdict?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintArgumentSortInput = {
  accusedResponse?: InputMaybe<SortEnumType>;
  accusedResponseFileName?: InputMaybe<SortEnumType>;
  accuserAnswerToAccusedResponse?: InputMaybe<SortEnumType>;
  accuserAnswerToAccusedResponseFileName?: InputMaybe<SortEnumType>;
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  councilOpinion?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  expertId?: InputMaybe<SortEnumType>;
  expertOpinion?: InputMaybe<SortEnumType>;
  expertOpinionFileName?: InputMaybe<SortEnumType>;
  expertVerdict?: InputMaybe<SortEnumType>;
  fileName?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  financialSituation?: InputMaybe<SortEnumType>;
  financialStatus?: InputMaybe<SortEnumType>;
  financialStatusFileName?: InputMaybe<SortEnumType>;
  grossApprovedAmount?: InputMaybe<SortEnumType>;
  grossCouncilApprovedAmount?: InputMaybe<SortEnumType>;
  grossJusticeExpertApprovedAmount?: InputMaybe<SortEnumType>;
  grossMailRoomChiefSuggestedAmount?: InputMaybe<SortEnumType>;
  grossMailRoomExpertApprovedAmount?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  justiceExpertOpinion?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  mailRoomChiefOpinionOnArgument?: InputMaybe<SortEnumType>;
  mailRoomChiefOpinionOnExpertOpinion?: InputMaybe<SortEnumType>;
  mailRoomExpertOpinionOnArgument?: InputMaybe<SortEnumType>;
  mailRoomExpertOpinionOnExpertOpinion?: InputMaybe<SortEnumType>;
  netApprovedAmount?: InputMaybe<SortEnumType>;
  netCouncilApprovedAmount?: InputMaybe<SortEnumType>;
  netJusticeExpertApprovedAmount?: InputMaybe<SortEnumType>;
  netMailRoomChiefSuggestedAmount?: InputMaybe<SortEnumType>;
  netMailRoomExpertApprovedAmount?: InputMaybe<SortEnumType>;
  suggestedAmount?: InputMaybe<SortEnumType>;
  summary?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
  verdict?: InputMaybe<SortEnumType>;
};

export type ComplaintCollectionSegment = {
  __typename?: 'ComplaintCollectionSegment';
  items?: Maybe<Array<Complaint>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComplaintFile = {
  __typename?: 'ComplaintFile';
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fileGallery?: Maybe<FileGallery>;
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
};

export type ComplaintFileCollectionSegment = {
  __typename?: 'ComplaintFileCollectionSegment';
  items?: Maybe<Array<ComplaintFile>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComplaintFileFilterInput = {
  and?: InputMaybe<Array<ComplaintFileFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  fileGallery?: InputMaybe<FileGalleryFilterInput>;
  fileId?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintFileFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintFileInput = {
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintFileSortInput = {
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  fileGallery?: InputMaybe<FileGallerySortInput>;
  fileId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type ComplaintFilterInput = {
  accusedFinalOpinion?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ComplaintFilterInput>>;
  arbitrationCost?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  arbitrationTermsForms?: InputMaybe<ListFilterInputTypeOfArbitrationTermsFormFilterInput>;
  arguments?: InputMaybe<ListFilterInputTypeOfComplaintArgumentFilterInput>;
  assignedUser?: InputMaybe<UserFilterInput>;
  assignedUserId?: InputMaybe<StringOperationFilterInput>;
  complaintCode?: InputMaybe<StringOperationFilterInput>;
  complaintFiles?: InputMaybe<ListFilterInputTypeOfComplaintFileFilterInput>;
  complaintNonFeasibleArguments?: InputMaybe<ListFilterInputTypeOfComplaintNonFeasibleArgumentFilterInput>;
  complaintState?: InputMaybe<ComplaintStateFilterInput>;
  complaintStateId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  contract?: InputMaybe<ContractFilterInput>;
  contractId?: InputMaybe<ComparableInt32OperationFilterInput>;
  correctionRequests?: InputMaybe<ListFilterInputTypeOfCorrectionRequestFilterInput>;
  councilExpertIds?: InputMaybe<ListStringOperationFilterInput>;
  councilListStatus?: InputMaybe<CouncilListStatusOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  eventHistories?: InputMaybe<ListFilterInputTypeOfEventHistoryFilterInput>;
  expertArbitrationCost?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  firstPaymentCost?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  handlingType?: InputMaybe<NullableOfHandlingTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isApprovedByChief?: InputMaybe<BooleanOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isExpertArbitrationCostPaid?: InputMaybe<BooleanOperationFilterInput>;
  isFirstPaymentPaid?: InputMaybe<BooleanOperationFilterInput>;
  isSecondPaymentPaid?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintFilterInput>>;
  secondPaymentCost?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  verdictFileName?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintGotCancelledLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ComplaintInput = {
  accusedFinalOpinion?: InputMaybe<Scalars['String']['input']>;
  arbitrationCost?: InputMaybe<Scalars['Decimal']['input']>;
  assignedUserId?: InputMaybe<Scalars['String']['input']>;
  complaintStateId?: InputMaybe<Scalars['Int']['input']>;
  contractId?: InputMaybe<Scalars['Int']['input']>;
  councilExpertIds?: InputMaybe<Array<Scalars['String']['input']>>;
  councilListStatus?: InputMaybe<CouncilListStatus>;
  expertArbitrationCost?: InputMaybe<Scalars['Decimal']['input']>;
  firstPaymentCost?: InputMaybe<Scalars['Decimal']['input']>;
  handlingType?: InputMaybe<HandlingType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isApprovedByChief?: InputMaybe<Scalars['Boolean']['input']>;
  isExpertArbitrationCostPaid?: InputMaybe<Scalars['Boolean']['input']>;
  isFirstPaymentPaid?: InputMaybe<Scalars['Boolean']['input']>;
  isSecondPaymentPaid?: InputMaybe<Scalars['Boolean']['input']>;
  secondPaymentCost?: InputMaybe<Scalars['Decimal']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  verdictFileName?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintNonFeasibleArgument = {
  __typename?: 'ComplaintNonFeasibleArgument';
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  financialSituation?: Maybe<Scalars['String']['output']>;
  financialStatus?: Maybe<FinancialStatus>;
  financialStatusFileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ComplaintNonFeasibleArgumentCollectionSegment = {
  __typename?: 'ComplaintNonFeasibleArgumentCollectionSegment';
  items?: Maybe<Array<ComplaintNonFeasibleArgument>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComplaintNonFeasibleArgumentFilterInput = {
  and?: InputMaybe<Array<ComplaintNonFeasibleArgumentFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  financialSituation?: InputMaybe<StringOperationFilterInput>;
  financialStatus?: InputMaybe<NullableOfFinancialStatusOperationFilterInput>;
  financialStatusFileName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintNonFeasibleArgumentFilterInput>>;
  summary?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintNonFeasibleArgumentInput = {
  complaintId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  financialSituation?: InputMaybe<Scalars['String']['input']>;
  financialStatus?: InputMaybe<FinancialStatus>;
  financialStatusFileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type ComplaintNonFeasibleArgumentSortInput = {
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  financialSituation?: InputMaybe<SortEnumType>;
  financialStatus?: InputMaybe<SortEnumType>;
  financialStatusFileName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  summary?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type ComplaintNote = {
  __typename?: 'ComplaintNote';
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  noteType: NoteType;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ComplaintNoteCollectionSegment = {
  __typename?: 'ComplaintNoteCollectionSegment';
  items?: Maybe<Array<ComplaintNote>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComplaintNoteFilterInput = {
  and?: InputMaybe<Array<ComplaintNoteFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  noteType?: InputMaybe<NoteTypeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintNoteFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintNoteInput = {
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  noteType?: InputMaybe<NoteType>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintNoteSortInput = {
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  noteType?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type ComplaintReportDtoInput = {
  complaintId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type ComplaintSortInput = {
  accusedFinalOpinion?: InputMaybe<SortEnumType>;
  arbitrationCost?: InputMaybe<SortEnumType>;
  assignedUser?: InputMaybe<UserSortInput>;
  assignedUserId?: InputMaybe<SortEnumType>;
  complaintCode?: InputMaybe<SortEnumType>;
  complaintState?: InputMaybe<ComplaintStateSortInput>;
  complaintStateId?: InputMaybe<SortEnumType>;
  contract?: InputMaybe<ContractSortInput>;
  contractId?: InputMaybe<SortEnumType>;
  councilListStatus?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  expertArbitrationCost?: InputMaybe<SortEnumType>;
  firstPaymentCost?: InputMaybe<SortEnumType>;
  handlingType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isApprovedByChief?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isExpertArbitrationCostPaid?: InputMaybe<SortEnumType>;
  isFirstPaymentPaid?: InputMaybe<SortEnumType>;
  isSecondPaymentPaid?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  secondPaymentCost?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
  verdictFileName?: InputMaybe<SortEnumType>;
};

export type ComplaintState = {
  __typename?: 'ComplaintState';
  complaints?: Maybe<Array<Complaint>>;
  createdDate: Scalars['DateTime']['output'];
  englishName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  persianName: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  responsibleRole?: Maybe<ResponsibleUserType>;
  state: ComplaintStateStatus;
};

export type ComplaintStateCollectionSegment = {
  __typename?: 'ComplaintStateCollectionSegment';
  items?: Maybe<Array<ComplaintState>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComplaintStateFilterInput = {
  and?: InputMaybe<Array<ComplaintStateFilterInput>>;
  complaints?: InputMaybe<ListFilterInputTypeOfComplaintFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  englishName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintStateFilterInput>>;
  persianName?: InputMaybe<StringOperationFilterInput>;
  priority?: InputMaybe<ComparableInt32OperationFilterInput>;
  responsibleRole?: InputMaybe<NullableOfResponsibleUserTypeOperationFilterInput>;
  state?: InputMaybe<ComplaintStateStatusOperationFilterInput>;
};

export type ComplaintStateInput = {
  englishName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  persianName: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  responsibleRole?: InputMaybe<ResponsibleUserType>;
  state: ComplaintStateStatus;
};

export type ComplaintStateSortInput = {
  createdDate?: InputMaybe<SortEnumType>;
  englishName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  persianName?: InputMaybe<SortEnumType>;
  priority?: InputMaybe<SortEnumType>;
  responsibleRole?: InputMaybe<SortEnumType>;
  state?: InputMaybe<SortEnumType>;
};

export enum ComplaintStateStatus {
  AcceptedForBeingConstructive = 'ACCEPTED_FOR_BEING_CONSTRUCTIVE',
  CheckingAndUploadingTheSignedDecree = 'CHECKING_AND_UPLOADING_THE_SIGNED_DECREE',
  CheckingForBeingConstructive = 'CHECKING_FOR_BEING_CONSTRUCTIVE',
  ComplaintDetermined = 'COMPLAINT_DETERMINED',
  DeterminingCaseExpert = 'DETERMINING_CASE_EXPERT',
  DeterminingMeetingByMailRoomExpert = 'DETERMINING_MEETING_BY_MAIL_ROOM_EXPERT',
  DidNotFulfillFirstPayment = 'DID_NOT_FULFILL_FIRST_PAYMENT',
  GivingTrackingCodeToComplaint = 'GIVING_TRACKING_CODE_TO_COMPLAINT',
  MailRoomChiefReviewingTheFinalReport = 'MAIL_ROOM_CHIEF_REVIEWING_THE_FINAL_REPORT',
  MailRoomExpertReviewingTheFinalReport = 'MAIL_ROOM_EXPERT_REVIEWING_THE_FINAL_REPORT',
  NotAcceptedForBeingConstructive = 'NOT_ACCEPTED_FOR_BEING_CONSTRUCTIVE',
  RedeterminingCaseExpert = 'REDETERMINING_CASE_EXPERT',
  RequestingDocuments = 'REQUESTING_DOCUMENTS',
  ResultNotifiedAbilityToViewScannedPhysicalResult = 'RESULT_NOTIFIED_ABILITY_TO_VIEW_SCANNED_PHYSICAL_RESULT',
  ReviewingCaseByCaseExpert = 'REVIEWING_CASE_BY_CASE_EXPERT',
  ReviewingExpertOpinionOnOfferorChanging = 'REVIEWING_EXPERT_OPINION_ON_OFFEROR_CHANGING',
  UploadingDocumentsAndReviewingComplaint = 'UPLOADING_DOCUMENTS_AND_REVIEWING_COMPLAINT',
  UploadingDocumentsByAccused = 'UPLOADING_DOCUMENTS_BY_ACCUSED',
  UploadingDocumentsByAccuser = 'UPLOADING_DOCUMENTS_BY_ACCUSER',
  WaitingForAccusedToAnswerArguments = 'WAITING_FOR_ACCUSED_TO_ANSWER_ARGUMENTS',
  WaitingForAccusedToApproveArgumentsAnswers = 'WAITING_FOR_ACCUSED_TO_APPROVE_ARGUMENTS_ANSWERS',
  WaitingForAccusedToRegisterArbitrationTerms = 'WAITING_FOR_ACCUSED_TO_REGISTER_ARBITRATION_TERMS',
  WaitingForAccusedToRegisterContract = 'WAITING_FOR_ACCUSED_TO_REGISTER_CONTRACT',
  WaitingForAccusedToSignDecree = 'WAITING_FOR_ACCUSED_TO_SIGN_DECREE',
  WaitingForAccuserAndAccusedToSignDecree = 'WAITING_FOR_ACCUSER_AND_ACCUSED_TO_SIGN_DECREE',
  WaitingForAccuserToApproveAccusedAnswers = 'WAITING_FOR_ACCUSER_TO_APPROVE_ACCUSED_ANSWERS',
  WaitingForAccuserToApproveArguments = 'WAITING_FOR_ACCUSER_TO_APPROVE_ARGUMENTS',
  WaitingForAccuserToRegisterArbitrationTerms = 'WAITING_FOR_ACCUSER_TO_REGISTER_ARBITRATION_TERMS',
  WaitingForAccuserToRegisterArguments = 'WAITING_FOR_ACCUSER_TO_REGISTER_ARGUMENTS',
  WaitingForAccuserToRegisterComplaint = 'WAITING_FOR_ACCUSER_TO_REGISTER_COMPLAINT',
  WaitingForAccuserToRegisterContract = 'WAITING_FOR_ACCUSER_TO_REGISTER_CONTRACT',
  WaitingForAccuserToSignDecree = 'WAITING_FOR_ACCUSER_TO_SIGN_DECREE',
  WaitingForAccuserToViewArguments = 'WAITING_FOR_ACCUSER_TO_VIEW_ARGUMENTS',
  WaitingForCaseExpertRegistry = 'WAITING_FOR_CASE_EXPERT_REGISTRY',
  WaitingForChiefToApproveExpertsAnswersToArguments = 'WAITING_FOR_CHIEF_TO_APPROVE_EXPERTS_ANSWERS_TO_ARGUMENTS',
  WaitingForChiefToAssign = 'WAITING_FOR_CHIEF_TO_ASSIGN',
  WaitingForCouncilResult = 'WAITING_FOR_COUNCIL_RESULT',
  WaitingForDeterminingExpertsCouncilPayment = 'WAITING_FOR_DETERMINING_EXPERTS_COUNCIL_PAYMENT',
  WaitingForExpertsCouncilPayment = 'WAITING_FOR_EXPERTS_COUNCIL_PAYMENT',
  WaitingForExpertToAddComplaintToComplaintList = 'WAITING_FOR_EXPERT_TO_ADD_COMPLAINT_TO_COMPLAINT_LIST',
  WaitingForFinalReportRegistration = 'WAITING_FOR_FINAL_REPORT_REGISTRATION',
  WaitingForFinalResultUpload = 'WAITING_FOR_FINAL_RESULT_UPLOAD',
  WaitingForFirstPayment = 'WAITING_FOR_FIRST_PAYMENT',
  WaitingForMailRoomExpertToApproveAnswersToArguments = 'WAITING_FOR_MAIL_ROOM_EXPERT_TO_APPROVE_ANSWERS_TO_ARGUMENTS',
  WaitingForMailRoomExpertToDownloadDecree = 'WAITING_FOR_MAIL_ROOM_EXPERT_TO_DOWNLOAD_DECREE',
  WaitingForMailRoomExpertToGiveAnswersToArguments = 'WAITING_FOR_MAIL_ROOM_EXPERT_TO_GIVE_ANSWERS_TO_ARGUMENTS',
  WaitingForMinistersCouncilToAnswerLetter = 'WAITING_FOR_MINISTERS_COUNCIL_TO_ANSWER_LETTER',
  WaitingForNewOfferorsInfo = 'WAITING_FOR_NEW_OFFERORS_INFO',
  WaitingForRegisteringHandlingType = 'WAITING_FOR_REGISTERING_HANDLING_TYPE',
  WaitingForRelatedFormsCompletionAndCommentingOnOfferorChanging = 'WAITING_FOR_RELATED_FORMS_COMPLETION_AND_COMMENTING_ON_OFFEROR_CHANGING',
  WaitingForSecondPayment = 'WAITING_FOR_SECOND_PAYMENT',
  WaitingToDetermineIfTheOldOrTheNewOfferorIsTheAccused = 'WAITING_TO_DETERMINE_IF_THE_OLD_OR_THE_NEW_OFFEROR_IS_THE_ACCUSED'
}

export type ComplaintStateStatusOperationFilterInput = {
  eq?: InputMaybe<ComplaintStateStatus>;
  in?: InputMaybe<Array<ComplaintStateStatus>>;
  neq?: InputMaybe<ComplaintStateStatus>;
  nin?: InputMaybe<Array<ComplaintStateStatus>>;
};

export type ComplaintVerdictLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  paymentDate: Scalars['Date']['input'];
  paymentNum: Scalars['String']['input'];
  requestDate: Scalars['Date']['input'];
  requestNum: Scalars['String']['input'];
  signByPreviousMembersDate: Scalars['Date']['input'];
  userId: Scalars['String']['input'];
};

export type ConfirmVerificationDtoInput = {
  phoneNumber: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type Contract = {
  __typename?: 'Contract';
  accusedDepartmentUserId?: Maybe<Scalars['String']['output']>;
  accusedNationality?: Maybe<Scalars['String']['output']>;
  accusedRelatedPeopleByAccused?: Maybe<Scalars['String']['output']>;
  accusedRelatedPeopleByAccuser?: Maybe<Scalars['String']['output']>;
  accuserDepartmentUserId?: Maybe<Scalars['String']['output']>;
  accuserNationality?: Maybe<Scalars['String']['output']>;
  accuserRelatedPeopleByAccused?: Maybe<Scalars['String']['output']>;
  accuserRelatedPeopleByAccuser?: Maybe<Scalars['String']['output']>;
  adjustmentStatementTables?: Maybe<Array<AdjustmentStatementTable>>;
  agreementFileNameByAccused?: Maybe<Scalars['String']['output']>;
  agreementFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  assigningTypeByAccused?: Maybe<Scalars['String']['output']>;
  assigningTypeByAccuser?: Maybe<Scalars['String']['output']>;
  authorizedDelaysByAccused?: Maybe<Scalars['Int']['output']>;
  authorizedDelaysByAccuser?: Maybe<Scalars['Int']['output']>;
  baseIndexPeriodByAccused?: Maybe<Scalars['String']['output']>;
  baseIndexPeriodByAccuser?: Maybe<Scalars['String']['output']>;
  circularDateByAccused?: Maybe<Scalars['Date']['output']>;
  circularDateByAccuser?: Maybe<Scalars['Date']['output']>;
  circularNumberByAccused?: Maybe<Scalars['String']['output']>;
  circularNumberByAccuser?: Maybe<Scalars['String']['output']>;
  coefficientTypeByAccused?: Maybe<Scalars['String']['output']>;
  coefficientTypeByAccuser?: Maybe<Scalars['String']['output']>;
  complaints?: Maybe<Array<Complaint>>;
  contractDateByAccused?: Maybe<Scalars['Date']['output']>;
  contractDateByAccuser?: Maybe<Scalars['Date']['output']>;
  contractGeneralTypeByAccused?: Maybe<ContractGeneralType>;
  contractGeneralTypeByAccuser?: Maybe<ContractGeneralType>;
  contractHasAdjustmentByAccused?: Maybe<Scalars['Boolean']['output']>;
  contractHasAdjustmentByAccuser?: Maybe<Scalars['Boolean']['output']>;
  contractNumberByAccused?: Maybe<Scalars['String']['output']>;
  contractNumberByAccuser?: Maybe<Scalars['String']['output']>;
  contractStatusAndDateInArbitrationByAccused?: Maybe<Scalars['String']['output']>;
  contractStatusAndDateInArbitrationByAccuser?: Maybe<Scalars['String']['output']>;
  contractSubjectByAccused?: Maybe<Scalars['String']['output']>;
  contractSubjectByAccuser?: Maybe<Scalars['String']['output']>;
  contractTypeByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractTypeByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  contractorReportFileNameByAccused?: Maybe<Scalars['String']['output']>;
  contractorReportFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currencyByAccused?: Maybe<Scalars['String']['output']>;
  currencyByAccuser?: Maybe<Scalars['String']['output']>;
  delayHandlingReportFileNameByAccused?: Maybe<Scalars['String']['output']>;
  delayHandlingReportFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  delayHandlingResultFileNameByAccused?: Maybe<Scalars['String']['output']>;
  delayHandlingResultFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  departmentUser?: Maybe<User>;
  doesContainAdjustmentByAccused?: Maybe<Scalars['String']['output']>;
  doesContainAdjustmentByAccuser?: Maybe<Scalars['String']['output']>;
  executionProvinceByAccused?: Maybe<Scalars['String']['output']>;
  executionProvinceByAccuser?: Maybe<Scalars['String']['output']>;
  fileNamesByAccused?: Maybe<Array<Scalars['String']['output']>>;
  fileNamesByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  finalBudgetByAccused?: Maybe<Scalars['Decimal']['output']>;
  finalBudgetByAccuser?: Maybe<Scalars['Decimal']['output']>;
  financialProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  financialProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  generalConditionsFileNameByAccused?: Maybe<Scalars['String']['output']>;
  generalConditionsFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  incrementalDecreasingCommunicationByAccused?: Maybe<Scalars['Boolean']['output']>;
  incrementalDecreasingCommunicationByAccuser?: Maybe<Scalars['Boolean']['output']>;
  initialBudgetByAccused?: Maybe<Scalars['Decimal']['output']>;
  initialBudgetByAccuser?: Maybe<Scalars['Decimal']['output']>;
  initialTimePeriodByAccused?: Maybe<Scalars['Float']['output']>;
  initialTimePeriodByAccuser?: Maybe<Scalars['Float']['output']>;
  installmentTables?: Maybe<Array<InstallmentTable>>;
  isDeleted: Scalars['Boolean']['output'];
  isExecutiveByAccused?: Maybe<Scalars['Boolean']['output']>;
  isExecutiveByAccuser?: Maybe<Scalars['Boolean']['output']>;
  isExecutiveByExpert?: Maybe<Scalars['Boolean']['output']>;
  isExecutiveBySystem?: Maybe<Scalars['Boolean']['output']>;
  isSpecialPriceListAttachedToContractByAccused?: Maybe<Scalars['String']['output']>;
  isSpecialPriceListAttachedToContractByAccuser?: Maybe<Scalars['String']['output']>;
  isTransferred?: Maybe<Scalars['Boolean']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  newAccusedDepartmentUserId?: Maybe<Scalars['String']['output']>;
  operationStartDateByAccused?: Maybe<Scalars['Date']['output']>;
  operationStartDateByAccusedFileName?: Maybe<Scalars['String']['output']>;
  operationStartDateByAccuser?: Maybe<Scalars['Date']['output']>;
  operationStartDateByAccuserFileName?: Maybe<Scalars['String']['output']>;
  otherAttachmentFileNamesByAccused?: Maybe<Array<Scalars['String']['output']>>;
  otherAttachmentFileNamesByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  otherContractTypeByAccused?: Maybe<Scalars['String']['output']>;
  otherContractTypeByAccuser?: Maybe<Scalars['String']['output']>;
  physicalProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  physicalProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  priceListOfBasicUnitOfFieldByAccused?: Maybe<Scalars['String']['output']>;
  priceListOfBasicUnitOfFieldByAccuser?: Maybe<Scalars['String']['output']>;
  privateTermsFileNameByAccused?: Maybe<Scalars['String']['output']>;
  privateTermsFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  recommendedCoefficientByAccused?: Maybe<Scalars['Float']['output']>;
  recommendedCoefficientByAccuser?: Maybe<Scalars['Float']['output']>;
  schedulesFileNameByAccused?: Maybe<Scalars['String']['output']>;
  schedulesFileNameByAccuser?: Maybe<Scalars['String']['output']>;
  sourceOfFundingTitle?: Maybe<Scalars['String']['output']>;
  supervisionDepartmentByAccused?: Maybe<Scalars['String']['output']>;
  supervisionDepartmentByAccuser?: Maybe<Scalars['String']['output']>;
  unauthorizedDelaysByAccused?: Maybe<Scalars['Int']['output']>;
  unauthorizedDelaysByAccuser?: Maybe<Scalars['Int']['output']>;
  workConditionStatementTables?: Maybe<Array<WorkConditionStatementTable>>;
};

export type ContractCollectionSegment = {
  __typename?: 'ContractCollectionSegment';
  items?: Maybe<Array<Contract>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContractFilterInput = {
  accusedDepartmentUserId?: InputMaybe<StringOperationFilterInput>;
  accusedNationality?: InputMaybe<StringOperationFilterInput>;
  accusedRelatedPeopleByAccused?: InputMaybe<StringOperationFilterInput>;
  accusedRelatedPeopleByAccuser?: InputMaybe<StringOperationFilterInput>;
  accuserDepartmentUserId?: InputMaybe<StringOperationFilterInput>;
  accuserNationality?: InputMaybe<StringOperationFilterInput>;
  accuserRelatedPeopleByAccused?: InputMaybe<StringOperationFilterInput>;
  accuserRelatedPeopleByAccuser?: InputMaybe<StringOperationFilterInput>;
  adjustmentStatementTables?: InputMaybe<ListFilterInputTypeOfAdjustmentStatementTableFilterInput>;
  agreementFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  agreementFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ContractFilterInput>>;
  assigningTypeByAccused?: InputMaybe<StringOperationFilterInput>;
  assigningTypeByAccuser?: InputMaybe<StringOperationFilterInput>;
  authorizedDelaysByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  authorizedDelaysByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  baseIndexPeriodByAccused?: InputMaybe<StringOperationFilterInput>;
  baseIndexPeriodByAccuser?: InputMaybe<StringOperationFilterInput>;
  circularDateByAccused?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  circularDateByAccuser?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  circularNumberByAccused?: InputMaybe<StringOperationFilterInput>;
  circularNumberByAccuser?: InputMaybe<StringOperationFilterInput>;
  coefficientTypeByAccused?: InputMaybe<StringOperationFilterInput>;
  coefficientTypeByAccuser?: InputMaybe<StringOperationFilterInput>;
  complaints?: InputMaybe<ListFilterInputTypeOfComplaintFilterInput>;
  contractDateByAccused?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  contractDateByAccuser?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  contractGeneralTypeByAccused?: InputMaybe<NullableOfContractGeneralTypeOperationFilterInput>;
  contractGeneralTypeByAccuser?: InputMaybe<NullableOfContractGeneralTypeOperationFilterInput>;
  contractHasAdjustmentByAccused?: InputMaybe<BooleanOperationFilterInput>;
  contractHasAdjustmentByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  contractNumberByAccused?: InputMaybe<StringOperationFilterInput>;
  contractNumberByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<StringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractSubjectByAccused?: InputMaybe<StringOperationFilterInput>;
  contractSubjectByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractTypeByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractTypeByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  contractorReportFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  contractorReportFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  currencyByAccused?: InputMaybe<StringOperationFilterInput>;
  currencyByAccuser?: InputMaybe<StringOperationFilterInput>;
  delayHandlingReportFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  delayHandlingReportFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  delayHandlingResultFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  delayHandlingResultFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  departmentUser?: InputMaybe<UserFilterInput>;
  doesContainAdjustmentByAccused?: InputMaybe<StringOperationFilterInput>;
  doesContainAdjustmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  executionProvinceByAccused?: InputMaybe<StringOperationFilterInput>;
  executionProvinceByAccuser?: InputMaybe<StringOperationFilterInput>;
  fileNamesByAccused?: InputMaybe<ListStringOperationFilterInput>;
  fileNamesByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  finalBudgetByAccused?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  finalBudgetByAccuser?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  generalConditionsFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  generalConditionsFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  incrementalDecreasingCommunicationByAccused?: InputMaybe<BooleanOperationFilterInput>;
  incrementalDecreasingCommunicationByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  initialBudgetByAccused?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialBudgetByAccuser?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialTimePeriodByAccused?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  initialTimePeriodByAccuser?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  installmentTables?: InputMaybe<ListFilterInputTypeOfInstallmentTableFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByAccused?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByExpert?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveBySystem?: InputMaybe<BooleanOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<StringOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<StringOperationFilterInput>;
  isTransferred?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  newAccusedDepartmentUserId?: InputMaybe<StringOperationFilterInput>;
  operationStartDateByAccused?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationStartDateByAccusedFileName?: InputMaybe<StringOperationFilterInput>;
  operationStartDateByAccuser?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationStartDateByAccuserFileName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ContractFilterInput>>;
  otherAttachmentFileNamesByAccused?: InputMaybe<ListStringOperationFilterInput>;
  otherAttachmentFileNamesByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  otherContractTypeByAccused?: InputMaybe<StringOperationFilterInput>;
  otherContractTypeByAccuser?: InputMaybe<StringOperationFilterInput>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<StringOperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<StringOperationFilterInput>;
  privateTermsFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  privateTermsFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  recommendedCoefficientByAccused?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  recommendedCoefficientByAccuser?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  schedulesFileNameByAccused?: InputMaybe<StringOperationFilterInput>;
  schedulesFileNameByAccuser?: InputMaybe<StringOperationFilterInput>;
  sourceOfFundingTitle?: InputMaybe<StringOperationFilterInput>;
  supervisionDepartmentByAccused?: InputMaybe<StringOperationFilterInput>;
  supervisionDepartmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  unauthorizedDelaysByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  unauthorizedDelaysByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  workConditionStatementTables?: InputMaybe<ListFilterInputTypeOfWorkConditionStatementTableFilterInput>;
};

export enum ContractGeneralType {
  Consultant = 'CONSULTANT',
  Contractor = 'CONTRACTOR',
  PlanAndExecution = 'PLAN_AND_EXECUTION'
}

export type ContractInput = {
  accusedDepartmentUserId?: InputMaybe<Scalars['String']['input']>;
  accusedNationality?: InputMaybe<Scalars['String']['input']>;
  accusedRelatedPeopleByAccused?: InputMaybe<Scalars['String']['input']>;
  accusedRelatedPeopleByAccuser?: InputMaybe<Scalars['String']['input']>;
  accuserDepartmentUserId?: InputMaybe<Scalars['String']['input']>;
  accuserNationality?: InputMaybe<Scalars['String']['input']>;
  accuserRelatedPeopleByAccused?: InputMaybe<Scalars['String']['input']>;
  accuserRelatedPeopleByAccuser?: InputMaybe<Scalars['String']['input']>;
  agreementFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  agreementFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  assigningTypeByAccused?: InputMaybe<Scalars['String']['input']>;
  assigningTypeByAccuser?: InputMaybe<Scalars['String']['input']>;
  authorizedDelaysByAccused?: InputMaybe<Scalars['Int']['input']>;
  authorizedDelaysByAccuser?: InputMaybe<Scalars['Int']['input']>;
  baseIndexPeriodByAccused?: InputMaybe<Scalars['String']['input']>;
  baseIndexPeriodByAccuser?: InputMaybe<Scalars['String']['input']>;
  circularDateByAccused?: InputMaybe<Scalars['Date']['input']>;
  circularDateByAccuser?: InputMaybe<Scalars['Date']['input']>;
  circularNumberByAccused?: InputMaybe<Scalars['String']['input']>;
  circularNumberByAccuser?: InputMaybe<Scalars['String']['input']>;
  coefficientTypeByAccused?: InputMaybe<Scalars['String']['input']>;
  coefficientTypeByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractDateByAccused?: InputMaybe<Scalars['Date']['input']>;
  contractDateByAccuser?: InputMaybe<Scalars['Date']['input']>;
  contractGeneralTypeByAccused?: InputMaybe<ContractGeneralType>;
  contractGeneralTypeByAccuser?: InputMaybe<ContractGeneralType>;
  contractHasAdjustmentByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  contractHasAdjustmentByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  contractNumberByAccused?: InputMaybe<Scalars['String']['input']>;
  contractNumberByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<Scalars['String']['input']>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractSubjectByAccused?: InputMaybe<Scalars['String']['input']>;
  contractSubjectByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractTypeByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractTypeByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  contractorReportFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  contractorReportFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  currencyByAccused?: InputMaybe<Scalars['String']['input']>;
  currencyByAccuser?: InputMaybe<Scalars['String']['input']>;
  delayHandlingReportFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  delayHandlingReportFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  delayHandlingResultFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  delayHandlingResultFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  doesContainAdjustmentByAccused?: InputMaybe<Scalars['String']['input']>;
  doesContainAdjustmentByAccuser?: InputMaybe<Scalars['String']['input']>;
  executionProvinceByAccused?: InputMaybe<Scalars['String']['input']>;
  executionProvinceByAccuser?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  fileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  finalBudgetByAccused?: InputMaybe<Scalars['Decimal']['input']>;
  finalBudgetByAccuser?: InputMaybe<Scalars['Decimal']['input']>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  generalConditionsFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  generalConditionsFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  incrementalDecreasingCommunicationByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  incrementalDecreasingCommunicationByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  initialBudgetByAccused?: InputMaybe<Scalars['Decimal']['input']>;
  initialBudgetByAccuser?: InputMaybe<Scalars['Decimal']['input']>;
  initialTimePeriodByAccused?: InputMaybe<Scalars['Float']['input']>;
  initialTimePeriodByAccuser?: InputMaybe<Scalars['Float']['input']>;
  isExecutiveByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  isExecutiveByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  isExecutiveByExpert?: InputMaybe<Scalars['Boolean']['input']>;
  isExecutiveBySystem?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<Scalars['String']['input']>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<Scalars['String']['input']>;
  isTransferred?: InputMaybe<Scalars['Boolean']['input']>;
  newAccusedDepartmentUserId?: InputMaybe<Scalars['String']['input']>;
  operationStartDateByAccused?: InputMaybe<Scalars['Date']['input']>;
  operationStartDateByAccusedFileName?: InputMaybe<Scalars['String']['input']>;
  operationStartDateByAccuser?: InputMaybe<Scalars['Date']['input']>;
  operationStartDateByAccuserFileName?: InputMaybe<Scalars['String']['input']>;
  otherAttachmentFileNamesByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  otherAttachmentFileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  otherContractTypeByAccused?: InputMaybe<Scalars['String']['input']>;
  otherContractTypeByAccuser?: InputMaybe<Scalars['String']['input']>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<Scalars['String']['input']>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<Scalars['String']['input']>;
  privateTermsFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  privateTermsFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  recommendedCoefficientByAccused?: InputMaybe<Scalars['Float']['input']>;
  recommendedCoefficientByAccuser?: InputMaybe<Scalars['Float']['input']>;
  schedulesFileNameByAccused?: InputMaybe<Scalars['String']['input']>;
  schedulesFileNameByAccuser?: InputMaybe<Scalars['String']['input']>;
  sourceOfFundingTitle?: InputMaybe<Scalars['String']['input']>;
  supervisionDepartmentByAccused?: InputMaybe<Scalars['String']['input']>;
  supervisionDepartmentByAccuser?: InputMaybe<Scalars['String']['input']>;
  unauthorizedDelaysByAccused?: InputMaybe<Scalars['Int']['input']>;
  unauthorizedDelaysByAccuser?: InputMaybe<Scalars['Int']['input']>;
};

export type ContractSortInput = {
  accusedDepartmentUserId?: InputMaybe<SortEnumType>;
  accusedNationality?: InputMaybe<SortEnumType>;
  accusedRelatedPeopleByAccused?: InputMaybe<SortEnumType>;
  accusedRelatedPeopleByAccuser?: InputMaybe<SortEnumType>;
  accuserDepartmentUserId?: InputMaybe<SortEnumType>;
  accuserNationality?: InputMaybe<SortEnumType>;
  accuserRelatedPeopleByAccused?: InputMaybe<SortEnumType>;
  accuserRelatedPeopleByAccuser?: InputMaybe<SortEnumType>;
  agreementFileNameByAccused?: InputMaybe<SortEnumType>;
  agreementFileNameByAccuser?: InputMaybe<SortEnumType>;
  assigningTypeByAccused?: InputMaybe<SortEnumType>;
  assigningTypeByAccuser?: InputMaybe<SortEnumType>;
  authorizedDelaysByAccused?: InputMaybe<SortEnumType>;
  authorizedDelaysByAccuser?: InputMaybe<SortEnumType>;
  baseIndexPeriodByAccused?: InputMaybe<SortEnumType>;
  baseIndexPeriodByAccuser?: InputMaybe<SortEnumType>;
  circularDateByAccused?: InputMaybe<SortEnumType>;
  circularDateByAccuser?: InputMaybe<SortEnumType>;
  circularNumberByAccused?: InputMaybe<SortEnumType>;
  circularNumberByAccuser?: InputMaybe<SortEnumType>;
  coefficientTypeByAccused?: InputMaybe<SortEnumType>;
  coefficientTypeByAccuser?: InputMaybe<SortEnumType>;
  contractDateByAccused?: InputMaybe<SortEnumType>;
  contractDateByAccuser?: InputMaybe<SortEnumType>;
  contractGeneralTypeByAccused?: InputMaybe<SortEnumType>;
  contractGeneralTypeByAccuser?: InputMaybe<SortEnumType>;
  contractHasAdjustmentByAccused?: InputMaybe<SortEnumType>;
  contractHasAdjustmentByAccuser?: InputMaybe<SortEnumType>;
  contractNumberByAccused?: InputMaybe<SortEnumType>;
  contractNumberByAccuser?: InputMaybe<SortEnumType>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<SortEnumType>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<SortEnumType>;
  contractSubjectByAccused?: InputMaybe<SortEnumType>;
  contractSubjectByAccuser?: InputMaybe<SortEnumType>;
  contractorReportFileNameByAccused?: InputMaybe<SortEnumType>;
  contractorReportFileNameByAccuser?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  currencyByAccused?: InputMaybe<SortEnumType>;
  currencyByAccuser?: InputMaybe<SortEnumType>;
  delayHandlingReportFileNameByAccused?: InputMaybe<SortEnumType>;
  delayHandlingReportFileNameByAccuser?: InputMaybe<SortEnumType>;
  delayHandlingResultFileNameByAccused?: InputMaybe<SortEnumType>;
  delayHandlingResultFileNameByAccuser?: InputMaybe<SortEnumType>;
  departmentUser?: InputMaybe<UserSortInput>;
  doesContainAdjustmentByAccused?: InputMaybe<SortEnumType>;
  doesContainAdjustmentByAccuser?: InputMaybe<SortEnumType>;
  executionProvinceByAccused?: InputMaybe<SortEnumType>;
  executionProvinceByAccuser?: InputMaybe<SortEnumType>;
  finalBudgetByAccused?: InputMaybe<SortEnumType>;
  finalBudgetByAccuser?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<SortEnumType>;
  generalConditionsFileNameByAccused?: InputMaybe<SortEnumType>;
  generalConditionsFileNameByAccuser?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  incrementalDecreasingCommunicationByAccused?: InputMaybe<SortEnumType>;
  incrementalDecreasingCommunicationByAccuser?: InputMaybe<SortEnumType>;
  initialBudgetByAccused?: InputMaybe<SortEnumType>;
  initialBudgetByAccuser?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccused?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccuser?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isExecutiveByAccused?: InputMaybe<SortEnumType>;
  isExecutiveByAccuser?: InputMaybe<SortEnumType>;
  isExecutiveByExpert?: InputMaybe<SortEnumType>;
  isExecutiveBySystem?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<SortEnumType>;
  isTransferred?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  newAccusedDepartmentUserId?: InputMaybe<SortEnumType>;
  operationStartDateByAccused?: InputMaybe<SortEnumType>;
  operationStartDateByAccusedFileName?: InputMaybe<SortEnumType>;
  operationStartDateByAccuser?: InputMaybe<SortEnumType>;
  operationStartDateByAccuserFileName?: InputMaybe<SortEnumType>;
  otherContractTypeByAccused?: InputMaybe<SortEnumType>;
  otherContractTypeByAccuser?: InputMaybe<SortEnumType>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<SortEnumType>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<SortEnumType>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<SortEnumType>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<SortEnumType>;
  privateTermsFileNameByAccused?: InputMaybe<SortEnumType>;
  privateTermsFileNameByAccuser?: InputMaybe<SortEnumType>;
  recommendedCoefficientByAccused?: InputMaybe<SortEnumType>;
  recommendedCoefficientByAccuser?: InputMaybe<SortEnumType>;
  schedulesFileNameByAccused?: InputMaybe<SortEnumType>;
  schedulesFileNameByAccuser?: InputMaybe<SortEnumType>;
  sourceOfFundingTitle?: InputMaybe<SortEnumType>;
  supervisionDepartmentByAccused?: InputMaybe<SortEnumType>;
  supervisionDepartmentByAccuser?: InputMaybe<SortEnumType>;
  unauthorizedDelaysByAccused?: InputMaybe<SortEnumType>;
  unauthorizedDelaysByAccuser?: InputMaybe<SortEnumType>;
};

export type CorrectionRequest = {
  __typename?: 'CorrectionRequest';
  clause: Scalars['String']['output'];
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  reason: Scalars['String']['output'];
  registrarType: RegistrarType;
  suggestion: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type CorrectionRequestCollectionSegment = {
  __typename?: 'CorrectionRequestCollectionSegment';
  items?: Maybe<Array<CorrectionRequest>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type CorrectionRequestFilterInput = {
  and?: InputMaybe<Array<CorrectionRequestFilterInput>>;
  clause?: InputMaybe<StringOperationFilterInput>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<CorrectionRequestFilterInput>>;
  reason?: InputMaybe<StringOperationFilterInput>;
  registrarType?: InputMaybe<RegistrarTypeOperationFilterInput>;
  suggestion?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type CorrectionRequestInput = {
  clause?: InputMaybe<Scalars['String']['input']>;
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  suggestion?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CorrectionRequestSortInput = {
  clause?: InputMaybe<SortEnumType>;
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  reason?: InputMaybe<SortEnumType>;
  registrarType?: InputMaybe<SortEnumType>;
  suggestion?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export enum CouncilListStatus {
  AfterCouncilList = 'AFTER_COUNCIL_LIST',
  BeforeCouncilList = 'BEFORE_COUNCIL_LIST',
  InCouncilList = 'IN_COUNCIL_LIST'
}

export type CouncilListStatusOperationFilterInput = {
  eq?: InputMaybe<CouncilListStatus>;
  in?: InputMaybe<Array<CouncilListStatus>>;
  neq?: InputMaybe<CouncilListStatus>;
  nin?: InputMaybe<Array<CouncilListStatus>>;
};

export type DecreeDtoInput = {
  canonDate: Scalars['Date']['input'];
  canonDate2: Scalars['Date']['input'];
  canonNum: Scalars['String']['input'];
  canonNum2: Scalars['String']['input'];
  circularDate: Scalars['Date']['input'];
  circularNum: Scalars['String']['input'];
  clause: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  deliveryDate: Scalars['Date']['input'];
  userId: Scalars['String']['input'];
};

export type DepositReceiptAnnouncementDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterDate2: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  letterNum2: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DocumentRequest = {
  __typename?: 'DocumentRequest';
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  requestedDocumentFileNameAccused?: Maybe<Scalars['String']['output']>;
  requestedDocumentFileNameAccuser?: Maybe<Scalars['String']['output']>;
  requestedDocumentName: Scalars['String']['output'];
  target?: Maybe<TargetType>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type DocumentRequestCollectionSegment = {
  __typename?: 'DocumentRequestCollectionSegment';
  items?: Maybe<Array<DocumentRequest>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type DocumentRequestFilterInput = {
  and?: InputMaybe<Array<DocumentRequestFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<DocumentRequestFilterInput>>;
  requestedDocumentFileNameAccused?: InputMaybe<StringOperationFilterInput>;
  requestedDocumentFileNameAccuser?: InputMaybe<StringOperationFilterInput>;
  requestedDocumentName?: InputMaybe<StringOperationFilterInput>;
  target?: InputMaybe<NullableOfTargetTypeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type DocumentRequestInput = {
  complaintId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  requestedDocumentFileNameAccused?: InputMaybe<Scalars['String']['input']>;
  requestedDocumentFileNameAccuser?: InputMaybe<Scalars['String']['input']>;
  requestedDocumentName: Scalars['String']['input'];
  target?: InputMaybe<TargetType>;
  userId: Scalars['String']['input'];
};

export type DocumentRequestSortInput = {
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  requestedDocumentFileNameAccused?: InputMaybe<SortEnumType>;
  requestedDocumentFileNameAccuser?: InputMaybe<SortEnumType>;
  requestedDocumentName?: InputMaybe<SortEnumType>;
  target?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type EventHistory = {
  __typename?: 'EventHistory';
  complaint?: Maybe<Complaint>;
  complaintId?: Maybe<Scalars['Int']['output']>;
  createdDate: Scalars['DateTime']['output'];
  event: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type EventHistoryFilterInput = {
  and?: InputMaybe<Array<EventHistoryFilterInput>>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  event?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<EventHistoryFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type FileGallery = {
  __typename?: 'FileGallery';
  complaintFiles?: Maybe<Array<ComplaintFile>>;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type FileGalleryCollectionSegment = {
  __typename?: 'FileGalleryCollectionSegment';
  items?: Maybe<Array<FileGallery>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type FileGalleryFilterInput = {
  and?: InputMaybe<Array<FileGalleryFilterInput>>;
  complaintFiles?: InputMaybe<ListFilterInputTypeOfComplaintFileFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<FileGalleryFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type FileGalleryInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type FileGallerySortInput = {
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export enum FinancialStatus {
  MoreThanPurchasingPowerIslamicFinancialBonds = 'MORE_THAN_PURCHASING_POWER_ISLAMIC_FINANCIAL_BONDS',
  Other = 'OTHER',
  PaymentOfClaimsApprovedByTheEmployer = 'PAYMENT_OF_CLAIMS_APPROVED_BY_THE_EMPLOYER',
  PaymentOfClaimsForCompletedWorksInExcessOf125PercentOfTheInitialContractAmount = 'PAYMENT_OF_CLAIMS_FOR_COMPLETED_WORKS_IN_EXCESS_OF125_PERCENT_OF_THE_INITIAL_CONTRACT_AMOUNT',
  PredictedDamagesForLatePaymentOfClaims = 'PREDICTED_DAMAGES_FOR_LATE_PAYMENT_OF_CLAIMS',
  PurchasingPowerIslamicFinancialBonds = 'PURCHASING_POWER_ISLAMIC_FINANCIAL_BONDS',
  UnpredictedDamagesForLatePaymentOfClaims = 'UNPREDICTED_DAMAGES_FOR_LATE_PAYMENT_OF_CLAIMS'
}

export type ForgotPasswordDtoInput = {
  nationalCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export enum GenderType {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GetPersonDataDtoInput = {
  dateOfBirth: Scalars['String']['input'];
  nationalCode: Scalars['String']['input'];
};

export enum HandlingType {
  CouncilOfOfficialJusticeExperts = 'COUNCIL_OF_OFFICIAL_JUSTICE_EXPERTS',
  JudiciaryExpertsCenter = 'JUDICIARY_EXPERTS_CENTER',
  SelectedExpertsOfTheSupremeTechnicalCouncil = 'SELECTED_EXPERTS_OF_THE_SUPREME_TECHNICAL_COUNCIL'
}

export type Installment = {
  __typename?: 'Installment';
  amount: Scalars['Decimal']['output'];
  createdDate: Scalars['DateTime']['output'];
  date: Scalars['Date']['output'];
  filledBy?: Maybe<RegistrarType>;
  financialCoverFileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  installmentParts?: Maybe<Array<InstallmentPart>>;
  installmentTable?: Maybe<InstallmentTable>;
  installmentTableId: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
};

export type InstallmentCollectionSegment = {
  __typename?: 'InstallmentCollectionSegment';
  items?: Maybe<Array<Installment>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type InstallmentFilterInput = {
  amount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<InstallmentFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  date?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  financialCoverFileName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  installmentParts?: InputMaybe<ListFilterInputTypeOfInstallmentPartFilterInput>;
  installmentTable?: InputMaybe<InstallmentTableFilterInput>;
  installmentTableId?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<InstallmentFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type InstallmentInput = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  financialCoverFileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  installmentTableId?: InputMaybe<Scalars['Int']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type InstallmentPart = {
  __typename?: 'InstallmentPart';
  amount: Scalars['Decimal']['output'];
  createdDate: Scalars['DateTime']['output'];
  date: Scalars['Date']['output'];
  filledBy?: Maybe<RegistrarType>;
  id: Scalars['Int']['output'];
  installment?: Maybe<Installment>;
  installmentId: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type InstallmentPartCollectionSegment = {
  __typename?: 'InstallmentPartCollectionSegment';
  items?: Maybe<Array<InstallmentPart>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type InstallmentPartFilterInput = {
  amount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<InstallmentPartFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  date?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  installment?: InputMaybe<InstallmentFilterInput>;
  installmentId?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<InstallmentPartFilterInput>>;
};

export type InstallmentPartInput = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  installmentId?: InputMaybe<Scalars['Int']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
};

export type InstallmentPartSortInput = {
  amount?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  date?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  installment?: InputMaybe<InstallmentSortInput>;
  installmentId?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
};

export type InstallmentSortInput = {
  amount?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  date?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  financialCoverFileName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  installmentTable?: InputMaybe<InstallmentTableSortInput>;
  installmentTableId?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type InstallmentTable = {
  __typename?: 'InstallmentTable';
  contract?: Maybe<Contract>;
  contractId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  filledBy?: Maybe<RegistrarType>;
  id: Scalars['Int']['output'];
  installments?: Maybe<Array<Installment>>;
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  paymentTotal: Scalars['Decimal']['output'];
  remainingPayment: Scalars['Decimal']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type InstallmentTableCollectionSegment = {
  __typename?: 'InstallmentTableCollectionSegment';
  items?: Maybe<Array<InstallmentTable>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type InstallmentTableFilterInput = {
  and?: InputMaybe<Array<InstallmentTableFilterInput>>;
  contract?: InputMaybe<ContractFilterInput>;
  contractId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  installments?: InputMaybe<ListFilterInputTypeOfInstallmentFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<InstallmentTableFilterInput>>;
  paymentTotal?: InputMaybe<ComparableDecimalOperationFilterInput>;
  remainingPayment?: InputMaybe<ComparableDecimalOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type InstallmentTableInput = {
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paymentTotal?: InputMaybe<Scalars['Decimal']['input']>;
  remainingPayment?: InputMaybe<Scalars['Decimal']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type InstallmentTableSortInput = {
  contract?: InputMaybe<ContractSortInput>;
  contractId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  paymentTotal?: InputMaybe<SortEnumType>;
  remainingPayment?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type KeyValuePairOfInt32AndBoolean = {
  __typename?: 'KeyValuePairOfInt32AndBoolean';
  key: Scalars['Int']['output'];
  value: Scalars['Boolean']['output'];
};

export type Letter = {
  __typename?: 'Letter';
  content: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  receiver: Scalars['String']['output'];
  sender: Scalars['String']['output'];
};

export type LetterCollectionSegment = {
  __typename?: 'LetterCollectionSegment';
  items?: Maybe<Array<Letter>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type LetterFilterInput = {
  and?: InputMaybe<Array<LetterFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<LetterFilterInput>>;
  receiver?: InputMaybe<StringOperationFilterInput>;
  sender?: InputMaybe<StringOperationFilterInput>;
};

export type LetterInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
};

export type LetterSortInput = {
  content?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  receiver?: InputMaybe<SortEnumType>;
  sender?: InputMaybe<SortEnumType>;
};

export type ListFilterInputTypeOfAdjustmentStatementFilterInput = {
  all?: InputMaybe<AdjustmentStatementFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AdjustmentStatementFilterInput>;
  some?: InputMaybe<AdjustmentStatementFilterInput>;
};

export type ListFilterInputTypeOfAdjustmentStatementPartFilterInput = {
  all?: InputMaybe<AdjustmentStatementPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AdjustmentStatementPartFilterInput>;
  some?: InputMaybe<AdjustmentStatementPartFilterInput>;
};

export type ListFilterInputTypeOfAdjustmentStatementTableFilterInput = {
  all?: InputMaybe<AdjustmentStatementTableFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AdjustmentStatementTableFilterInput>;
  some?: InputMaybe<AdjustmentStatementTableFilterInput>;
};

export type ListFilterInputTypeOfArbitrationTermsFormFilterInput = {
  all?: InputMaybe<ArbitrationTermsFormFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ArbitrationTermsFormFilterInput>;
  some?: InputMaybe<ArbitrationTermsFormFilterInput>;
};

export type ListFilterInputTypeOfComplaintArgumentFilterInput = {
  all?: InputMaybe<ComplaintArgumentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ComplaintArgumentFilterInput>;
  some?: InputMaybe<ComplaintArgumentFilterInput>;
};

export type ListFilterInputTypeOfComplaintFileFilterInput = {
  all?: InputMaybe<ComplaintFileFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ComplaintFileFilterInput>;
  some?: InputMaybe<ComplaintFileFilterInput>;
};

export type ListFilterInputTypeOfComplaintFilterInput = {
  all?: InputMaybe<ComplaintFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ComplaintFilterInput>;
  some?: InputMaybe<ComplaintFilterInput>;
};

export type ListFilterInputTypeOfComplaintNonFeasibleArgumentFilterInput = {
  all?: InputMaybe<ComplaintNonFeasibleArgumentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ComplaintNonFeasibleArgumentFilterInput>;
  some?: InputMaybe<ComplaintNonFeasibleArgumentFilterInput>;
};

export type ListFilterInputTypeOfContractFilterInput = {
  all?: InputMaybe<ContractFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ContractFilterInput>;
  some?: InputMaybe<ContractFilterInput>;
};

export type ListFilterInputTypeOfCorrectionRequestFilterInput = {
  all?: InputMaybe<CorrectionRequestFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CorrectionRequestFilterInput>;
  some?: InputMaybe<CorrectionRequestFilterInput>;
};

export type ListFilterInputTypeOfEventHistoryFilterInput = {
  all?: InputMaybe<EventHistoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<EventHistoryFilterInput>;
  some?: InputMaybe<EventHistoryFilterInput>;
};

export type ListFilterInputTypeOfInstallmentFilterInput = {
  all?: InputMaybe<InstallmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<InstallmentFilterInput>;
  some?: InputMaybe<InstallmentFilterInput>;
};

export type ListFilterInputTypeOfInstallmentPartFilterInput = {
  all?: InputMaybe<InstallmentPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<InstallmentPartFilterInput>;
  some?: InputMaybe<InstallmentPartFilterInput>;
};

export type ListFilterInputTypeOfInstallmentTableFilterInput = {
  all?: InputMaybe<InstallmentTableFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<InstallmentTableFilterInput>;
  some?: InputMaybe<InstallmentTableFilterInput>;
};

export type ListFilterInputTypeOfUserFilterInput = {
  all?: InputMaybe<UserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserFilterInput>;
  some?: InputMaybe<UserFilterInput>;
};

export type ListFilterInputTypeOfUserRoleFilterInput = {
  all?: InputMaybe<UserRoleFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserRoleFilterInput>;
  some?: InputMaybe<UserRoleFilterInput>;
};

export type ListFilterInputTypeOfWorkConditionStatementFilterInput = {
  all?: InputMaybe<WorkConditionStatementFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<WorkConditionStatementFilterInput>;
  some?: InputMaybe<WorkConditionStatementFilterInput>;
};

export type ListFilterInputTypeOfWorkConditionStatementPartFilterInput = {
  all?: InputMaybe<WorkConditionStatementPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<WorkConditionStatementPartFilterInput>;
  some?: InputMaybe<WorkConditionStatementPartFilterInput>;
};

export type ListFilterInputTypeOfWorkConditionStatementTableFilterInput = {
  all?: InputMaybe<WorkConditionStatementTableFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<WorkConditionStatementTableFilterInput>;
  some?: InputMaybe<WorkConditionStatementTableFilterInput>;
};

export type ListResponseBaseOfAdjustmentStatement = {
  __typename?: 'ListResponseBaseOfAdjustmentStatement';
  result?: Maybe<AdjustmentStatementCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfAdjustmentStatementResultArgs = {
  order?: InputMaybe<Array<AdjustmentStatementSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdjustmentStatementFilterInput>;
};

export type ListResponseBaseOfAdjustmentStatementPart = {
  __typename?: 'ListResponseBaseOfAdjustmentStatementPart';
  result?: Maybe<AdjustmentStatementPartCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfAdjustmentStatementPartResultArgs = {
  order?: InputMaybe<Array<AdjustmentStatementPartSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdjustmentStatementPartFilterInput>;
};

export type ListResponseBaseOfAdjustmentStatementTable = {
  __typename?: 'ListResponseBaseOfAdjustmentStatementTable';
  result?: Maybe<AdjustmentStatementTableCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfAdjustmentStatementTableResultArgs = {
  order?: InputMaybe<Array<AdjustmentStatementTableSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdjustmentStatementTableFilterInput>;
};

export type ListResponseBaseOfArbitrationTermsForm = {
  __typename?: 'ListResponseBaseOfArbitrationTermsForm';
  result?: Maybe<ArbitrationTermsFormCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfArbitrationTermsFormResultArgs = {
  order?: InputMaybe<Array<ArbitrationTermsFormSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArbitrationTermsFormFilterInput>;
};

export type ListResponseBaseOfCompanyProfile = {
  __typename?: 'ListResponseBaseOfCompanyProfile';
  result?: Maybe<CompanyProfileCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfCompanyProfileResultArgs = {
  order?: InputMaybe<Array<CompanyProfileSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyProfileFilterInput>;
};

export type ListResponseBaseOfComplaint = {
  __typename?: 'ListResponseBaseOfComplaint';
  result?: Maybe<ComplaintCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfComplaintResultArgs = {
  order?: InputMaybe<Array<ComplaintSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComplaintFilterInput>;
};

export type ListResponseBaseOfComplaintArgument = {
  __typename?: 'ListResponseBaseOfComplaintArgument';
  result?: Maybe<ComplaintArgumentCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfComplaintArgumentResultArgs = {
  order?: InputMaybe<Array<ComplaintArgumentSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComplaintArgumentFilterInput>;
};

export type ListResponseBaseOfComplaintFile = {
  __typename?: 'ListResponseBaseOfComplaintFile';
  result?: Maybe<ComplaintFileCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfComplaintFileResultArgs = {
  order?: InputMaybe<Array<ComplaintFileSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComplaintFileFilterInput>;
};

export type ListResponseBaseOfComplaintNonFeasibleArgument = {
  __typename?: 'ListResponseBaseOfComplaintNonFeasibleArgument';
  result?: Maybe<ComplaintNonFeasibleArgumentCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfComplaintNonFeasibleArgumentResultArgs = {
  order?: InputMaybe<Array<ComplaintNonFeasibleArgumentSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComplaintNonFeasibleArgumentFilterInput>;
};

export type ListResponseBaseOfComplaintNote = {
  __typename?: 'ListResponseBaseOfComplaintNote';
  result?: Maybe<ComplaintNoteCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfComplaintNoteResultArgs = {
  order?: InputMaybe<Array<ComplaintNoteSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComplaintNoteFilterInput>;
};

export type ListResponseBaseOfComplaintState = {
  __typename?: 'ListResponseBaseOfComplaintState';
  result?: Maybe<ComplaintStateCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfComplaintStateResultArgs = {
  order?: InputMaybe<Array<ComplaintStateSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComplaintStateFilterInput>;
};

export type ListResponseBaseOfContract = {
  __typename?: 'ListResponseBaseOfContract';
  result?: Maybe<ContractCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfContractResultArgs = {
  order?: InputMaybe<Array<ContractSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContractFilterInput>;
};

export type ListResponseBaseOfCorrectionRequest = {
  __typename?: 'ListResponseBaseOfCorrectionRequest';
  result?: Maybe<CorrectionRequestCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfCorrectionRequestResultArgs = {
  order?: InputMaybe<Array<CorrectionRequestSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CorrectionRequestFilterInput>;
};

export type ListResponseBaseOfDocumentRequest = {
  __typename?: 'ListResponseBaseOfDocumentRequest';
  result?: Maybe<DocumentRequestCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfDocumentRequestResultArgs = {
  order?: InputMaybe<Array<DocumentRequestSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DocumentRequestFilterInput>;
};

export type ListResponseBaseOfFileGallery = {
  __typename?: 'ListResponseBaseOfFileGallery';
  result?: Maybe<FileGalleryCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfFileGalleryResultArgs = {
  order?: InputMaybe<Array<FileGallerySortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileGalleryFilterInput>;
};

export type ListResponseBaseOfInstallment = {
  __typename?: 'ListResponseBaseOfInstallment';
  result?: Maybe<InstallmentCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfInstallmentResultArgs = {
  order?: InputMaybe<Array<InstallmentSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstallmentFilterInput>;
};

export type ListResponseBaseOfInstallmentPart = {
  __typename?: 'ListResponseBaseOfInstallmentPart';
  result?: Maybe<InstallmentPartCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfInstallmentPartResultArgs = {
  order?: InputMaybe<Array<InstallmentPartSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstallmentPartFilterInput>;
};

export type ListResponseBaseOfInstallmentTable = {
  __typename?: 'ListResponseBaseOfInstallmentTable';
  result?: Maybe<InstallmentTableCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfInstallmentTableResultArgs = {
  order?: InputMaybe<Array<InstallmentTableSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstallmentTableFilterInput>;
};

export type ListResponseBaseOfLetter = {
  __typename?: 'ListResponseBaseOfLetter';
  result?: Maybe<LetterCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfLetterResultArgs = {
  order?: InputMaybe<Array<LetterSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LetterFilterInput>;
};

export type ListResponseBaseOfMainSetting = {
  __typename?: 'ListResponseBaseOfMainSetting';
  result?: Maybe<MainSettingCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfMainSettingResultArgs = {
  order?: InputMaybe<Array<MainSettingSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainSettingFilterInput>;
};

export type ListResponseBaseOfPublicContract = {
  __typename?: 'ListResponseBaseOfPublicContract';
  result?: Maybe<PublicContractCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfPublicContractResultArgs = {
  order?: InputMaybe<Array<PublicContractSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PublicContractFilterInput>;
};

export type ListResponseBaseOfUser = {
  __typename?: 'ListResponseBaseOfUser';
  result?: Maybe<UserCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfUserResultArgs = {
  order?: InputMaybe<Array<UserSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFilterInput>;
};

export type ListResponseBaseOfUserPayment = {
  __typename?: 'ListResponseBaseOfUserPayment';
  result?: Maybe<UserPaymentCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfUserPaymentResultArgs = {
  order?: InputMaybe<Array<UserPaymentSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPaymentFilterInput>;
};

export type ListResponseBaseOfUserRole = {
  __typename?: 'ListResponseBaseOfUserRole';
  result?: Maybe<UserRoleCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfUserRoleResultArgs = {
  order?: InputMaybe<Array<UserRoleSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserRoleFilterInput>;
};

export type ListResponseBaseOfWorkConditionStatement = {
  __typename?: 'ListResponseBaseOfWorkConditionStatement';
  result?: Maybe<WorkConditionStatementCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfWorkConditionStatementResultArgs = {
  order?: InputMaybe<Array<WorkConditionStatementSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkConditionStatementFilterInput>;
};

export type ListResponseBaseOfWorkConditionStatementPart = {
  __typename?: 'ListResponseBaseOfWorkConditionStatementPart';
  result?: Maybe<WorkConditionStatementPartCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfWorkConditionStatementPartResultArgs = {
  order?: InputMaybe<Array<WorkConditionStatementPartSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkConditionStatementPartFilterInput>;
};

export type ListResponseBaseOfWorkConditionStatementTable = {
  __typename?: 'ListResponseBaseOfWorkConditionStatementTable';
  result?: Maybe<WorkConditionStatementTableCollectionSegment>;
  status?: Maybe<Scalars['Any']['output']>;
};


export type ListResponseBaseOfWorkConditionStatementTableResultArgs = {
  order?: InputMaybe<Array<WorkConditionStatementTableSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkConditionStatementTableFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

export type LoginDtoInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type LoginOtpDtoInput = {
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type MainSetting = {
  __typename?: 'MainSetting';
  accusedResponsePeriod: Scalars['Int']['output'];
  accuserResponsePeriod: Scalars['Int']['output'];
  article139OfTheConstitutionCanonClause: Scalars['String']['output'];
  article139OfTheConstitutionCanonDate: Scalars['Date']['output'];
  article139OfTheConstitutionCanonNum: Scalars['String']['output'];
  correctionRequestPeriod: Scalars['Int']['output'];
  councilPaymentPeriod: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  disputeResolutionArticleCircularDate: Scalars['Date']['output'];
  disputeResolutionArticleCircularNum: Scalars['String']['output'];
  expertAndAmountAssignmentCanonDate: Scalars['Date']['output'];
  expertAndAmountAssignmentCanonNum: Scalars['String']['output'];
  firstPaymentPercentage: Scalars['Int']['output'];
  firstPaymentPeriod: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  ministersCouncilCanonDate: Scalars['Date']['output'];
  ministersCouncilCanonNum: Scalars['String']['output'];
  newMinistersCouncilMembersApprovementCanonDate: Scalars['Date']['output'];
  newMinistersCouncilMembersCanonDate: Scalars['Date']['output'];
  newMinistersCouncilMembersCanonNum: Scalars['String']['output'];
  secondPaymentPeriod: Scalars['Int']['output'];
};

export type MainSettingCollectionSegment = {
  __typename?: 'MainSettingCollectionSegment';
  items?: Maybe<Array<MainSetting>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type MainSettingFilterInput = {
  accusedResponsePeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  accuserResponsePeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  and?: InputMaybe<Array<MainSettingFilterInput>>;
  article139OfTheConstitutionCanonClause?: InputMaybe<StringOperationFilterInput>;
  article139OfTheConstitutionCanonDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  article139OfTheConstitutionCanonNum?: InputMaybe<StringOperationFilterInput>;
  correctionRequestPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  councilPaymentPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  disputeResolutionArticleCircularDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  disputeResolutionArticleCircularNum?: InputMaybe<StringOperationFilterInput>;
  expertAndAmountAssignmentCanonDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  expertAndAmountAssignmentCanonNum?: InputMaybe<StringOperationFilterInput>;
  firstPaymentPercentage?: InputMaybe<ComparableInt32OperationFilterInput>;
  firstPaymentPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  ministersCouncilCanonDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  ministersCouncilCanonNum?: InputMaybe<StringOperationFilterInput>;
  newMinistersCouncilMembersApprovementCanonDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  newMinistersCouncilMembersCanonDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  newMinistersCouncilMembersCanonNum?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<MainSettingFilterInput>>;
  secondPaymentPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type MainSettingInput = {
  accusedResponsePeriod: Scalars['Int']['input'];
  accuserResponsePeriod: Scalars['Int']['input'];
  article139OfTheConstitutionCanonClause: Scalars['String']['input'];
  article139OfTheConstitutionCanonDate: Scalars['Date']['input'];
  article139OfTheConstitutionCanonNum: Scalars['String']['input'];
  correctionRequestPeriod: Scalars['Int']['input'];
  councilPaymentPeriod: Scalars['Int']['input'];
  disputeResolutionArticleCircularDate: Scalars['Date']['input'];
  disputeResolutionArticleCircularNum: Scalars['String']['input'];
  expertAndAmountAssignmentCanonDate: Scalars['Date']['input'];
  expertAndAmountAssignmentCanonNum: Scalars['String']['input'];
  firstPaymentPercentage: Scalars['Int']['input'];
  firstPaymentPeriod: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  ministersCouncilCanonDate: Scalars['Date']['input'];
  ministersCouncilCanonNum: Scalars['String']['input'];
  newMinistersCouncilMembersApprovementCanonDate: Scalars['Date']['input'];
  newMinistersCouncilMembersCanonDate: Scalars['Date']['input'];
  newMinistersCouncilMembersCanonNum: Scalars['String']['input'];
  secondPaymentPeriod: Scalars['Int']['input'];
};

export type MainSettingSortInput = {
  accusedResponsePeriod?: InputMaybe<SortEnumType>;
  accuserResponsePeriod?: InputMaybe<SortEnumType>;
  article139OfTheConstitutionCanonClause?: InputMaybe<SortEnumType>;
  article139OfTheConstitutionCanonDate?: InputMaybe<SortEnumType>;
  article139OfTheConstitutionCanonNum?: InputMaybe<SortEnumType>;
  correctionRequestPeriod?: InputMaybe<SortEnumType>;
  councilPaymentPeriod?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  disputeResolutionArticleCircularDate?: InputMaybe<SortEnumType>;
  disputeResolutionArticleCircularNum?: InputMaybe<SortEnumType>;
  expertAndAmountAssignmentCanonDate?: InputMaybe<SortEnumType>;
  expertAndAmountAssignmentCanonNum?: InputMaybe<SortEnumType>;
  firstPaymentPercentage?: InputMaybe<SortEnumType>;
  firstPaymentPeriod?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  ministersCouncilCanonDate?: InputMaybe<SortEnumType>;
  ministersCouncilCanonNum?: InputMaybe<SortEnumType>;
  newMinistersCouncilMembersApprovementCanonDate?: InputMaybe<SortEnumType>;
  newMinistersCouncilMembersCanonDate?: InputMaybe<SortEnumType>;
  newMinistersCouncilMembersCanonNum?: InputMaybe<SortEnumType>;
  secondPaymentPeriod?: InputMaybe<SortEnumType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  FileGallery_deleteFile: ResponseStatus;
  FileGallery_updateFile: ResponseBaseOfFileGallery;
  adjustmentStatementPart_addAdjustmentStatementPart: ResponseBaseOfAdjustmentStatementPart;
  adjustmentStatementPart_deleteAdjustmentStatementPart: ResponseBaseOfAdjustmentStatementPart;
  adjustmentStatementPart_updateAdjustmentStatementPart: ResponseBaseOfAdjustmentStatementPart;
  adjustmentStatementTable_addAdjustmentStatementTable: ResponseBaseOfAdjustmentStatementTable;
  adjustmentStatementTable_deleteAdjustmentStatementTable: ResponseBaseOfAdjustmentStatementTable;
  adjustmentStatementTable_updateAdjustmentStatementTable: ResponseBaseOfAdjustmentStatementTable;
  adjustmentStatement_addAdjustmentStatement: ResponseBaseOfAdjustmentStatement;
  adjustmentStatement_deleteAdjustmentStatement: ResponseBaseOfAdjustmentStatement;
  adjustmentStatement_updateAdjustmentStatement: ResponseBaseOfAdjustmentStatement;
  arbitrationTermsForm_addArbitrationTermsForm: ResponseBaseOfArbitrationTermsForm;
  arbitrationTermsForm_deleteArbitrationTermsForm: ResponseBaseOfArbitrationTermsForm;
  arbitrationTermsForm_updateArbitrationTermsForm: ResponseBaseOfArbitrationTermsForm;
  companyProfile_addCompanyProfile: ResponseBaseOfCompanyProfile;
  companyProfile_addCompanyProfileData: ResponseBaseOfCompanyProfile;
  companyProfile_deleteCompanyProfile: ResponseBaseOfCompanyProfile;
  companyProfile_updateCompanyProfile: ResponseBaseOfCompanyProfile;
  complaintArgument_addComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintArgument_deleteComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintArgument_updateComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintFile_addComplaintFile: ResponseBaseOfComplaintFile;
  complaintFile_deleteComplaintFile: ResponseBaseOfComplaintFile;
  complaintFile_updateComplaintFile: ResponseBaseOfComplaintFile;
  complaintNote_addComplaintNote: ResponseBaseOfComplaintNote;
  complaintNote_deleteComplaintNote: ResponseBaseOfComplaintNote;
  complaintNote_updateComplaintNote: ResponseBaseOfComplaintNote;
  complaintState_addComplaintState: ResponseBaseOfComplaintState;
  complaintState_deleteComplaintState: ResponseBaseOfComplaintState;
  complaintState_updateComplaintState: ResponseBaseOfComplaintState;
  complaint_addComplaint: ResponseBaseOfComplaint;
  complaint_deleteComplaint: ResponseBaseOfComplaint;
  complaint_setArbitrationCost: ResponseStatus;
  complaint_setFirstAndSecondPaymentCost: ResponseStatus;
  complaint_setInCouncilList: ResponseBaseOfSetInCouncilListResponseDto;
  complaint_updateComplaint: ResponseBaseOfComplaint;
  complaintnonfeasibleargument_addComplaintNonFeasibleArgument: ResponseBaseOfComplaintNonFeasibleArgument;
  complaintnonfeasibleargument_deleteComplaintNonFeasibleArgument: ResponseBaseOfComplaintNonFeasibleArgument;
  complaintnonfeasibleargument_updateComplaintNonFeasibleArgument: ResponseBaseOfComplaintNonFeasibleArgument;
  contract_addContract: ResponseBaseOfContract;
  contract_deleteContract: ResponseBaseOfContract;
  contract_updateContract: ResponseBaseOfContract;
  correctionRequest_addCorrectionRequest: ResponseBaseOfCorrectionRequest;
  correctionRequest_deleteCorrectionRequest: ResponseBaseOfCorrectionRequest;
  correctionRequest_updateCorrectionRequest: ResponseBaseOfCorrectionRequest;
  documentRequest_addDocumentRequest: ResponseBaseOfDocumentRequest;
  documentRequest_deleteDocumentRequest: ResponseBaseOfDocumentRequest;
  documentRequest_updateDocumentRequest: ResponseBaseOfDocumentRequest;
  installmentPart_addInstallmentPart: ResponseBaseOfInstallmentPart;
  installmentPart_deleteInstallmentPart: ResponseBaseOfInstallmentPart;
  installmentPart_updateInstallmentPart: ResponseBaseOfInstallmentPart;
  installmentTable_addInstallmentTable: ResponseBaseOfInstallmentTable;
  installmentTable_deleteInstallmentTable: ResponseBaseOfInstallmentTable;
  installmentTable_updateInstallmentTable: ResponseBaseOfInstallmentTable;
  installment_addInstallment: ResponseBaseOfInstallment;
  installment_deleteInstallment: ResponseBaseOfInstallment;
  installment_updateInstallment: ResponseBaseOfInstallment;
  letter_addLetter: ResponseBaseOfLetter;
  letter_deleteLetter: ResponseBaseOfLetter;
  letter_updateLetter: ResponseBaseOfLetter;
  mainSetting_deleteMainSetting: ResponseBaseOfMainSetting;
  mainSetting_updateMainSetting: ResponseBaseOfMainSetting;
  sms_sendAccusedDidNotRespondSMS: ResponseStatus;
  sms_sendAccusedRespondedSMS: ResponseStatus;
  sms_sendArbitrationRejectionSMS: ResponseStatus;
  sms_sendAssignToExpertSMS: ResponseStatus;
  sms_sendComplaintAddedSMS: ResponseStatus;
  sms_sendComplaintCodeSMS: ResponseStatus;
  sms_sendComplaintCorrectionRequestSMS: ResponseStatus;
  sms_sendComplaintGotCancelledSMS: ResponseStatus;
  sms_sendDidNotMakeFirstPaymentSMS: ResponseStatus;
  sms_sendInviteToMeetingSMS: ResponseStatus;
  sms_sendLetterSentToMinistersCouncilSMS: ResponseStatus;
  sms_sendReceiveAnswerFromMinistersCouncilSMS: ResponseStatus;
  sms_sendSecondPaymentAnnouncementSMS: ResponseStatus;
  sms_sendViewVerdictSMS: ResponseStatus;
  test_convertNumToPersianWriting: Scalars['String']['output'];
  test_convertToGregorian: Scalars['Date']['output'];
  test_depositReceiptAnnouncementLetter: ResponseStatus;
  test_generateAccusedDocsAfterCouncilRequestLetter: ResponseStatus;
  test_generateAccusedDocsRequestLetter: ResponseStatus;
  test_generateAccuserDidNotRespondLetter: ResponseStatus;
  test_generateAccuserSalaryAnnouncementLetter: ResponseStatus;
  test_generateAccuserSalaryAnnouncementRequestLetter: ResponseStatus;
  test_generateArbitrationRejectionLetter: ResponseStatus;
  test_generateAssignToExpertLetter: ResponseStatus;
  test_generateCallToMeetingLetter: ResponseStatus;
  test_generateComplaintGotCancelledLetter: ResponseStatus;
  test_generateComplaintReport: Scalars['String']['output'];
  test_generateComplaintVerdictLetter: Array<Scalars['String']['output']>;
  test_generateCouncilListLetter: ResponseStatus;
  test_generateDecree: Scalars['String']['output'];
  test_generateFulfilledFirstPaymentComplaintsList: Scalars['String']['output'];
  test_generatePassword: Scalars['String']['output'];
  test_generateProjectNotConstructiveLetter: ResponseStatus;
  test_generateReferToExpertLetter: ResponseStatus;
  test_getCompany: ListResponseBaseOfPublicContract;
  test_getCompanyInfo: ResponseBaseOfCompanyProfile;
  test_getPublicContracts: ResponseStatus;
  test_sendLetter: ResponseBaseOfString;
  test_sendVerificationCode: Scalars['String']['output'];
  test_testSMS: Scalars['String']['output'];
  test_testSabtAhval?: Maybe<PersonDataDto>;
  test_testShahkar: Scalars['String']['output'];
  test_toMonthName: Scalars['String']['output'];
  userPayment_addUserPayment: ResponseBaseOfUserPayment;
  userPayment_deleteUserPayment: ResponseBaseOfUserPayment;
  userPayment_updateUserPayment: ResponseBaseOfUserPayment;
  userRole_addUserToRole: ResponseStatus;
  userRole_removeUserFromRole: ResponseStatus;
  user_changePassword: ResponseStatus;
  user_confirmPhoneNumber: ResponseStatus;
  user_deleteUser: ResponseStatus;
  user_forgotPassword: ResponseStatus;
  user_getUserInfo: ResponseBaseOfPersonDataDto;
  user_oneTimePassword: ResponseStatus;
  user_saveUserCurrentRole: ResponseStatus;
  user_sendVerificationCode: ResponseStatus;
  user_signIn: ResponseBaseOfUserTokenDto;
  user_signInOTP: ResponseBaseOfUserTokenDto;
  user_signUp: ResponseBaseOfUser;
  user_updateProfile: ResponseBaseOfUser;
  user_validatePhoneNumber: ResponseStatus;
  workConditionStatementPart_addWorkConditionStatementPart: ResponseBaseOfWorkConditionStatementPart;
  workConditionStatementPart_deleteWorkConditionStatementPart: ResponseBaseOfWorkConditionStatementPart;
  workConditionStatementPart_updateWorkConditionStatementPart: ResponseBaseOfWorkConditionStatementPart;
  workConditionStatementTable_addWorkConditionStatementTable: ResponseBaseOfWorkConditionStatementTable;
  workConditionStatementTable_deleteWorkConditionStatementTable: ResponseBaseOfWorkConditionStatementTable;
  workConditionStatementTable_updateWorkConditionStatementTable: ResponseBaseOfWorkConditionStatementTable;
  workConditionStatement_addWorkConditionStatement: ResponseBaseOfWorkConditionStatement;
  workConditionStatement_deleteWorkConditionStatement: ResponseBaseOfWorkConditionStatement;
  workConditionStatement_updateWorkConditionStatement: ResponseBaseOfWorkConditionStatement;
};


export type MutationFileGallery_DeleteFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationFileGallery_UpdateFileArgs = {
  input: FileGalleryInput;
};


export type MutationAdjustmentStatementPart_AddAdjustmentStatementPartArgs = {
  input: AdjustmentStatementPartInput;
};


export type MutationAdjustmentStatementPart_DeleteAdjustmentStatementPartArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationAdjustmentStatementPart_UpdateAdjustmentStatementPartArgs = {
  input: AdjustmentStatementPartInput;
};


export type MutationAdjustmentStatementTable_AddAdjustmentStatementTableArgs = {
  input: AdjustmentStatementTableInput;
};


export type MutationAdjustmentStatementTable_DeleteAdjustmentStatementTableArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationAdjustmentStatementTable_UpdateAdjustmentStatementTableArgs = {
  input: AdjustmentStatementTableInput;
};


export type MutationAdjustmentStatement_AddAdjustmentStatementArgs = {
  input: AdjustmentStatementInput;
};


export type MutationAdjustmentStatement_DeleteAdjustmentStatementArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationAdjustmentStatement_UpdateAdjustmentStatementArgs = {
  input: AdjustmentStatementInput;
};


export type MutationArbitrationTermsForm_AddArbitrationTermsFormArgs = {
  input: ArbitrationTermsFormInput;
};


export type MutationArbitrationTermsForm_DeleteArbitrationTermsFormArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationArbitrationTermsForm_UpdateArbitrationTermsFormArgs = {
  input: ArbitrationTermsFormInput;
};


export type MutationCompanyProfile_AddCompanyProfileArgs = {
  userId: Scalars['String']['input'];
};


export type MutationCompanyProfile_AddCompanyProfileDataArgs = {
  input: CompanyProfileInput;
};


export type MutationCompanyProfile_DeleteCompanyProfileArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationCompanyProfile_UpdateCompanyProfileArgs = {
  input: CompanyProfileInput;
};


export type MutationComplaintArgument_AddComplaintArgumentArgs = {
  input: ComplaintArgumentInput;
};


export type MutationComplaintArgument_DeleteComplaintArgumentArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaintArgument_UpdateComplaintArgumentArgs = {
  input: ComplaintArgumentInput;
};


export type MutationComplaintFile_AddComplaintFileArgs = {
  input: ComplaintFileInput;
};


export type MutationComplaintFile_DeleteComplaintFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaintFile_UpdateComplaintFileArgs = {
  input: ComplaintFileInput;
};


export type MutationComplaintNote_AddComplaintNoteArgs = {
  input: ComplaintNoteInput;
};


export type MutationComplaintNote_DeleteComplaintNoteArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaintNote_UpdateComplaintNoteArgs = {
  input: ComplaintNoteInput;
};


export type MutationComplaintState_AddComplaintStateArgs = {
  input: ComplaintStateInput;
};


export type MutationComplaintState_DeleteComplaintStateArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaintState_UpdateComplaintStateArgs = {
  input: ComplaintStateInput;
};


export type MutationComplaint_AddComplaintArgs = {
  input: ComplaintInput;
};


export type MutationComplaint_DeleteComplaintArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaint_SetArbitrationCostArgs = {
  amount: Scalars['Decimal']['input'];
  complaintId: Scalars['Int']['input'];
};


export type MutationComplaint_SetFirstAndSecondPaymentCostArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationComplaint_SetInCouncilListArgs = {
  entityIds: Array<Scalars['Int']['input']>;
};


export type MutationComplaint_UpdateComplaintArgs = {
  input: ComplaintInput;
};


export type MutationComplaintnonfeasibleargument_AddComplaintNonFeasibleArgumentArgs = {
  input: ComplaintNonFeasibleArgumentInput;
};


export type MutationComplaintnonfeasibleargument_DeleteComplaintNonFeasibleArgumentArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaintnonfeasibleargument_UpdateComplaintNonFeasibleArgumentArgs = {
  input: ComplaintNonFeasibleArgumentInput;
};


export type MutationContract_AddContractArgs = {
  input: ContractInput;
};


export type MutationContract_DeleteContractArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationContract_UpdateContractArgs = {
  input: ContractInput;
};


export type MutationCorrectionRequest_AddCorrectionRequestArgs = {
  input: CorrectionRequestInput;
};


export type MutationCorrectionRequest_DeleteCorrectionRequestArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationCorrectionRequest_UpdateCorrectionRequestArgs = {
  input: CorrectionRequestInput;
};


export type MutationDocumentRequest_AddDocumentRequestArgs = {
  input: DocumentRequestInput;
};


export type MutationDocumentRequest_DeleteDocumentRequestArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationDocumentRequest_UpdateDocumentRequestArgs = {
  input: DocumentRequestInput;
};


export type MutationInstallmentPart_AddInstallmentPartArgs = {
  input: InstallmentPartInput;
};


export type MutationInstallmentPart_DeleteInstallmentPartArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationInstallmentPart_UpdateInstallmentPartArgs = {
  input: InstallmentPartInput;
};


export type MutationInstallmentTable_AddInstallmentTableArgs = {
  input: InstallmentTableInput;
};


export type MutationInstallmentTable_DeleteInstallmentTableArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationInstallmentTable_UpdateInstallmentTableArgs = {
  input: InstallmentTableInput;
};


export type MutationInstallment_AddInstallmentArgs = {
  input: InstallmentInput;
};


export type MutationInstallment_DeleteInstallmentArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationInstallment_UpdateInstallmentArgs = {
  input: InstallmentInput;
};


export type MutationLetter_AddLetterArgs = {
  input: LetterInput;
};


export type MutationLetter_DeleteLetterArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationLetter_UpdateLetterArgs = {
  input: LetterInput;
};


export type MutationMainSetting_DeleteMainSettingArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationMainSetting_UpdateMainSettingArgs = {
  input: MainSettingInput;
};


export type MutationSms_SendAccusedDidNotRespondSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendAccusedRespondedSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendArbitrationRejectionSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendAssignToExpertSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendComplaintAddedSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendComplaintCodeSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendComplaintCorrectionRequestSmsArgs = {
  complaintId: Scalars['Int']['input'];
  receiverId: Scalars['String']['input'];
};


export type MutationSms_SendComplaintGotCancelledSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendDidNotMakeFirstPaymentSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendInviteToMeetingSmsArgs = {
  input: SendInviteToMeetingSmsDtoInput;
};


export type MutationSms_SendLetterSentToMinistersCouncilSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendReceiveAnswerFromMinistersCouncilSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendSecondPaymentAnnouncementSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendViewVerdictSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationTest_ConvertNumToPersianWritingArgs = {
  input: Scalars['Decimal']['input'];
};


export type MutationTest_ConvertToGregorianArgs = {
  input: Scalars['String']['input'];
};


export type MutationTest_DepositReceiptAnnouncementLetterArgs = {
  input: DepositReceiptAnnouncementDtoInput;
};


export type MutationTest_GenerateAccusedDocsAfterCouncilRequestLetterArgs = {
  input: AccusedDocsAfterCouncilRequestLetterDtoInput;
};


export type MutationTest_GenerateAccusedDocsRequestLetterArgs = {
  input: AccusedDocsRequestLetterDtoInput;
};


export type MutationTest_GenerateAccuserDidNotRespondLetterArgs = {
  input: AccuserDidNotRespondLetterDtoInput;
};


export type MutationTest_GenerateAccuserSalaryAnnouncementLetterArgs = {
  input: AccuserSalaryAnnouncementDtoInput;
};


export type MutationTest_GenerateAccuserSalaryAnnouncementRequestLetterArgs = {
  input: AccuserSalaryAnnouncementRequestDtoInput;
};


export type MutationTest_GenerateArbitrationRejectionLetterArgs = {
  input: ArbitrationRejectionLetterDtoInput;
};


export type MutationTest_GenerateAssignToExpertLetterArgs = {
  input: AssignToExpertLetterDtoInput;
};


export type MutationTest_GenerateCallToMeetingLetterArgs = {
  input: CallToMeetingLetterDtoInput;
};


export type MutationTest_GenerateComplaintGotCancelledLetterArgs = {
  input: ComplaintGotCancelledLetterDtoInput;
};


export type MutationTest_GenerateComplaintReportArgs = {
  input: ComplaintReportDtoInput;
};


export type MutationTest_GenerateComplaintVerdictLetterArgs = {
  input: ComplaintVerdictLetterDtoInput;
};


export type MutationTest_GenerateCouncilListLetterArgs = {
  input: Array<Scalars['Int']['input']>;
};


export type MutationTest_GenerateDecreeArgs = {
  input: DecreeDtoInput;
};


export type MutationTest_GenerateFulfilledFirstPaymentComplaintsListArgs = {
  userId: Scalars['String']['input'];
};


export type MutationTest_GenerateProjectNotConstructiveLetterArgs = {
  input: ProjectNotConstructiveLetterDtoInput;
};


export type MutationTest_GenerateReferToExpertLetterArgs = {
  input: ReferToExpertLetterDtoInput;
};


export type MutationTest_GetCompanyArgs = {
  name: Scalars['String']['input'];
};


export type MutationTest_GetCompanyInfoArgs = {
  nationalCode: Scalars['String']['input'];
};


export type MutationTest_GetPublicContractsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type MutationTest_SendLetterArgs = {
  input: SendLetterDtoInput;
};


export type MutationTest_SendVerificationCodeArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationTest_TestSmsArgs = {
  message: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationTest_TestSabtAhvalArgs = {
  input: GetPersonDataDtoInput;
};


export type MutationTest_TestShahkarArgs = {
  input: ValidatePhoneNumberDtoInput;
};


export type MutationTest_ToMonthNameArgs = {
  input?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUserPayment_AddUserPaymentArgs = {
  input: UserPaymentInput;
};


export type MutationUserPayment_DeleteUserPaymentArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationUserPayment_UpdateUserPaymentArgs = {
  input: UserPaymentInput;
};


export type MutationUserRole_AddUserToRoleArgs = {
  roleType: RoleType;
  userId: Scalars['String']['input'];
};


export type MutationUserRole_RemoveUserFromRoleArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationUser_ChangePasswordArgs = {
  input: ChangePasswordDtoInput;
};


export type MutationUser_ConfirmPhoneNumberArgs = {
  input: ConfirmVerificationDtoInput;
};


export type MutationUser_DeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUser_ForgotPasswordArgs = {
  input: ForgotPasswordDtoInput;
};


export type MutationUser_GetUserInfoArgs = {
  input: GetPersonDataDtoInput;
};


export type MutationUser_OneTimePasswordArgs = {
  input: OneTimePasswordDtoInput;
};


export type MutationUser_SaveUserCurrentRoleArgs = {
  roleType: RoleType;
};


export type MutationUser_SendVerificationCodeArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationUser_SignInArgs = {
  input: LoginDtoInput;
};


export type MutationUser_SignInOtpArgs = {
  input: LoginOtpDtoInput;
};


export type MutationUser_SignUpArgs = {
  input: SignUpDtoInput;
};


export type MutationUser_UpdateProfileArgs = {
  input: UserInput;
};


export type MutationUser_ValidatePhoneNumberArgs = {
  input: ValidatePhoneNumberDtoInput;
};


export type MutationWorkConditionStatementPart_AddWorkConditionStatementPartArgs = {
  input: WorkConditionStatementPartInput;
};


export type MutationWorkConditionStatementPart_DeleteWorkConditionStatementPartArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationWorkConditionStatementPart_UpdateWorkConditionStatementPartArgs = {
  input: WorkConditionStatementPartInput;
};


export type MutationWorkConditionStatementTable_AddWorkConditionStatementTableArgs = {
  input: WorkConditionStatementTableInput;
};


export type MutationWorkConditionStatementTable_DeleteWorkConditionStatementTableArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationWorkConditionStatementTable_UpdateWorkConditionStatementTableArgs = {
  input: WorkConditionStatementTableInput;
};


export type MutationWorkConditionStatement_AddWorkConditionStatementArgs = {
  input: WorkConditionStatementInput;
};


export type MutationWorkConditionStatement_DeleteWorkConditionStatementArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationWorkConditionStatement_UpdateWorkConditionStatementArgs = {
  input: WorkConditionStatementInput;
};

export enum NoteType {
  ExpertOpinion = 'EXPERT_OPINION',
  MailRoomChiefOpinionOnRejectingComplaint = 'MAIL_ROOM_CHIEF_OPINION_ON_REJECTING_COMPLAINT'
}

export type NoteTypeOperationFilterInput = {
  eq?: InputMaybe<NoteType>;
  in?: InputMaybe<Array<NoteType>>;
  neq?: InputMaybe<NoteType>;
  nin?: InputMaybe<Array<NoteType>>;
};

export type NullableOfContractGeneralTypeOperationFilterInput = {
  eq?: InputMaybe<ContractGeneralType>;
  in?: InputMaybe<Array<InputMaybe<ContractGeneralType>>>;
  neq?: InputMaybe<ContractGeneralType>;
  nin?: InputMaybe<Array<InputMaybe<ContractGeneralType>>>;
};

export type NullableOfFinancialStatusOperationFilterInput = {
  eq?: InputMaybe<FinancialStatus>;
  in?: InputMaybe<Array<InputMaybe<FinancialStatus>>>;
  neq?: InputMaybe<FinancialStatus>;
  nin?: InputMaybe<Array<InputMaybe<FinancialStatus>>>;
};

export type NullableOfGenderTypeOperationFilterInput = {
  eq?: InputMaybe<GenderType>;
  in?: InputMaybe<Array<InputMaybe<GenderType>>>;
  neq?: InputMaybe<GenderType>;
  nin?: InputMaybe<Array<InputMaybe<GenderType>>>;
};

export type NullableOfHandlingTypeOperationFilterInput = {
  eq?: InputMaybe<HandlingType>;
  in?: InputMaybe<Array<InputMaybe<HandlingType>>>;
  neq?: InputMaybe<HandlingType>;
  nin?: InputMaybe<Array<InputMaybe<HandlingType>>>;
};

export type NullableOfRegistrarTypeOperationFilterInput = {
  eq?: InputMaybe<RegistrarType>;
  in?: InputMaybe<Array<InputMaybe<RegistrarType>>>;
  neq?: InputMaybe<RegistrarType>;
  nin?: InputMaybe<Array<InputMaybe<RegistrarType>>>;
};

export type NullableOfResponsibleUserTypeOperationFilterInput = {
  eq?: InputMaybe<ResponsibleUserType>;
  in?: InputMaybe<Array<InputMaybe<ResponsibleUserType>>>;
  neq?: InputMaybe<ResponsibleUserType>;
  nin?: InputMaybe<Array<InputMaybe<ResponsibleUserType>>>;
};

export type NullableOfRoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<InputMaybe<RoleType>>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<InputMaybe<RoleType>>>;
};

export type NullableOfTargetTypeOperationFilterInput = {
  eq?: InputMaybe<TargetType>;
  in?: InputMaybe<Array<InputMaybe<TargetType>>>;
  neq?: InputMaybe<TargetType>;
  nin?: InputMaybe<Array<InputMaybe<TargetType>>>;
};

export type OneTimePasswordDtoInput = {
  phoneNumber: Scalars['String']['input'];
};

export enum PaymentType {
  ExpertsCouncilPayment = 'EXPERTS_COUNCIL_PAYMENT',
  FirstPayment = 'FIRST_PAYMENT',
  SecondPayment = 'SECOND_PAYMENT'
}

export type PaymentTypeOperationFilterInput = {
  eq?: InputMaybe<PaymentType>;
  in?: InputMaybe<Array<PaymentType>>;
  neq?: InputMaybe<PaymentType>;
  nin?: InputMaybe<Array<PaymentType>>;
};

export type PersonDataDto = {
  __typename?: 'PersonDataDto';
  fatherName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender: GenderType;
  isAlive: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
};

export type ProjectNotConstructiveLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['Date']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type PublicContract = {
  __typename?: 'PublicContract';
  agreeAmountRial?: Maybe<Scalars['Long']['output']>;
  agreeDate: Scalars['Date']['output'];
  city?: Maybe<Scalars['String']['output']>;
  contractCategoryTitle?: Maybe<Scalars['String']['output']>;
  contractID?: Maybe<Scalars['String']['output']>;
  contractSubject?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  executiveTitle?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  generalConditionTitle?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  jobReferenceTitle?: Maybe<Scalars['String']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  nationalCode?: Maybe<Scalars['String']['output']>;
  sourceOfFundingTitle?: Maybe<Scalars['String']['output']>;
};

export type PublicContractCollectionSegment = {
  __typename?: 'PublicContractCollectionSegment';
  items?: Maybe<Array<PublicContract>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type PublicContractFilterInput = {
  agreeAmountRial?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  agreeDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  and?: InputMaybe<Array<PublicContractFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  contractCategoryTitle?: InputMaybe<StringOperationFilterInput>;
  contractID?: InputMaybe<StringOperationFilterInput>;
  contractSubject?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  executiveTitle?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  generalConditionTitle?: InputMaybe<StringOperationFilterInput>;
  guid?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  jobReferenceTitle?: InputMaybe<StringOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  nationalCode?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PublicContractFilterInput>>;
  sourceOfFundingTitle?: InputMaybe<StringOperationFilterInput>;
};

export type PublicContractSortInput = {
  agreeAmountRial?: InputMaybe<SortEnumType>;
  agreeDate?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  contractCategoryTitle?: InputMaybe<SortEnumType>;
  contractID?: InputMaybe<SortEnumType>;
  contractSubject?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  executiveTitle?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  generalConditionTitle?: InputMaybe<SortEnumType>;
  guid?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  jobReferenceTitle?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  nationalCode?: InputMaybe<SortEnumType>;
  sourceOfFundingTitle?: InputMaybe<SortEnumType>;
};

export type Query = {
  __typename?: 'Query';
  adjustmentStatementPart_getAdjustmentStatementPart: ResponseBaseOfAdjustmentStatementPart;
  adjustmentStatementPart_getAdjustmentStatementParts: ListResponseBaseOfAdjustmentStatementPart;
  adjustmentStatementTable_getAdjustmentStatementTable: ResponseBaseOfAdjustmentStatementTable;
  adjustmentStatementTable_getAdjustmentStatementTables: ListResponseBaseOfAdjustmentStatementTable;
  adjustmentStatement_getAdjustmentStatement: ResponseBaseOfAdjustmentStatement;
  adjustmentStatement_getAdjustmentStatements: ListResponseBaseOfAdjustmentStatement;
  arbitrationTermsForm_getArbitrationTermsForm: ResponseBaseOfArbitrationTermsForm;
  arbitrationTermsForm_getArbitrationTermsForms: ListResponseBaseOfArbitrationTermsForm;
  companyProfile_getCompanyProfile: ResponseBaseOfCompanyProfile;
  companyProfile_getCompanyProfiles: ListResponseBaseOfCompanyProfile;
  complaintArgument_getComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintArgument_getComplaintArguments: ListResponseBaseOfComplaintArgument;
  complaintFile_getComplaintFile: ResponseBaseOfComplaintFile;
  complaintFile_getComplaintFiles: ListResponseBaseOfComplaintFile;
  complaintNonFeasibleArgument_getComplaintNonFeasibleArgument: ResponseBaseOfComplaintNonFeasibleArgument;
  complaintNonFeasibleArgument_getComplaintNonFeasibleArguments: ListResponseBaseOfComplaintNonFeasibleArgument;
  complaintNote_getComplaintNote: ResponseBaseOfComplaintNote;
  complaintNote_getComplaintNotes: ListResponseBaseOfComplaintNote;
  complaintState_getComplaintState: ResponseBaseOfComplaintState;
  complaintState_getComplaintStates: ListResponseBaseOfComplaintState;
  complaint_getComplaint: ResponseBaseOfComplaint;
  complaint_getComplaints: ListResponseBaseOfComplaint;
  complaint_getExpertComplaints: ListResponseBaseOfComplaint;
  complaint_getFulfilledFirstPaymentComplaints: ListResponseBaseOfComplaint;
  contract_getContract: ResponseBaseOfContract;
  contract_getContracts: ListResponseBaseOfContract;
  correctionRequest_getCorrectionRequest: ResponseBaseOfCorrectionRequest;
  correctionRequest_getCorrectionRequests: ListResponseBaseOfCorrectionRequest;
  documentRequest_getDocumentRequest: ResponseBaseOfDocumentRequest;
  documentRequest_getDocumentRequests: ListResponseBaseOfDocumentRequest;
  fileGallery_getFile: ResponseBaseOfFileGallery;
  fileGallery_getFiles: ListResponseBaseOfFileGallery;
  installmentPart_getInstallmentPart: ResponseBaseOfInstallmentPart;
  installmentPart_getInstallmentParts: ListResponseBaseOfInstallmentPart;
  installmentTable_getInstallmentTable: ResponseBaseOfInstallmentTable;
  installmentTable_getInstallmentTables: ListResponseBaseOfInstallmentTable;
  installment_getInstallment: ResponseBaseOfInstallment;
  installment_getInstallments: ListResponseBaseOfInstallment;
  letter_getLetter: ResponseBaseOfLetter;
  letter_getLetters: ListResponseBaseOfLetter;
  mainSetting_getMainSetting: ResponseBaseOfMainSetting;
  mainSetting_getMainSettings: ListResponseBaseOfMainSetting;
  publicContract_getPublicContract: ResponseBaseOfPublicContract;
  publicContract_getPublicContracts: ListResponseBaseOfPublicContract;
  userPayment_getUserPayment: ResponseBaseOfUserPayment;
  userPayment_getUserPayments: ListResponseBaseOfUserPayment;
  userRole_getUserRole: ResponseBaseOfUserRole;
  userRole_getUserRoles: ListResponseBaseOfUserRole;
  user_getChildrenOfParent: ResponseBaseOfListOfUser;
  user_getCurrentUser: ResponseBaseOfUser;
  user_getUser: ResponseBaseOfUser;
  user_getUserQueryable: ListResponseBaseOfUser;
  user_getUsers: ListResponseBaseOfUser;
  user_isTokenValid: Scalars['Boolean']['output'];
  workConditionStatementPart_getWorkConditionStatementPart: ResponseBaseOfWorkConditionStatementPart;
  workConditionStatementPart_getWorkConditionStatementParts: ListResponseBaseOfWorkConditionStatementPart;
  workConditionStatementTable_getWorkConditionStatementTable: ResponseBaseOfWorkConditionStatementTable;
  workConditionStatementTable_getWorkConditionStatementTables: ListResponseBaseOfWorkConditionStatementTable;
  workConditionStatement_getWorkConditionStatement: ResponseBaseOfWorkConditionStatement;
  workConditionStatement_getWorkConditionStatements: ListResponseBaseOfWorkConditionStatement;
};


export type QueryAdjustmentStatementPart_GetAdjustmentStatementPartArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryAdjustmentStatementTable_GetAdjustmentStatementTableArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryAdjustmentStatement_GetAdjustmentStatementArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryArbitrationTermsForm_GetArbitrationTermsFormArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryCompanyProfile_GetCompanyProfileArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintArgument_GetComplaintArgumentArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintFile_GetComplaintFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintNonFeasibleArgument_GetComplaintNonFeasibleArgumentArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintNote_GetComplaintNoteArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintState_GetComplaintStateArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaint_GetComplaintArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaint_GetExpertComplaintsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryContract_GetContractArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryCorrectionRequest_GetCorrectionRequestArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryDocumentRequest_GetDocumentRequestArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryFileGallery_GetFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryInstallmentPart_GetInstallmentPartArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryInstallmentTable_GetInstallmentTableArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryInstallment_GetInstallmentArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryLetter_GetLetterArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryMainSetting_GetMainSettingArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryPublicContract_GetPublicContractArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryUserPayment_GetUserPaymentArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryUserRole_GetUserRoleArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryUserRole_GetUserRolesArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUser_GetChildrenOfParentArgs = {
  parentType: HandlingType;
};


export type QueryUser_GetUserArgs = {
  entityId: Scalars['String']['input'];
};


export type QueryUser_GetUserQueryableArgs = {
  entityId: Scalars['String']['input'];
};


export type QueryWorkConditionStatementPart_GetWorkConditionStatementPartArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryWorkConditionStatementTable_GetWorkConditionStatementTableArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryWorkConditionStatement_GetWorkConditionStatementArgs = {
  entityId: Scalars['Int']['input'];
};

export type ReferToExpertLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  meetingDate: Scalars['Date']['input'];
  meetingDate2: Scalars['Date']['input'];
  meetingTime: Scalars['TimeSpan']['input'];
  userId: Scalars['String']['input'];
};

export enum RegistrarType {
  Accused = 'ACCUSED',
  Accuser = 'ACCUSER'
}

export type RegistrarTypeOperationFilterInput = {
  eq?: InputMaybe<RegistrarType>;
  in?: InputMaybe<Array<RegistrarType>>;
  neq?: InputMaybe<RegistrarType>;
  nin?: InputMaybe<Array<RegistrarType>>;
};

export type ResponseBaseOfAdjustmentStatement = {
  __typename?: 'ResponseBaseOfAdjustmentStatement';
  result?: Maybe<AdjustmentStatement>;
  status: ResponseStatus;
};

export type ResponseBaseOfAdjustmentStatementPart = {
  __typename?: 'ResponseBaseOfAdjustmentStatementPart';
  result?: Maybe<AdjustmentStatementPart>;
  status: ResponseStatus;
};

export type ResponseBaseOfAdjustmentStatementTable = {
  __typename?: 'ResponseBaseOfAdjustmentStatementTable';
  result?: Maybe<AdjustmentStatementTable>;
  status: ResponseStatus;
};

export type ResponseBaseOfArbitrationTermsForm = {
  __typename?: 'ResponseBaseOfArbitrationTermsForm';
  result?: Maybe<ArbitrationTermsForm>;
  status: ResponseStatus;
};

export type ResponseBaseOfCompanyProfile = {
  __typename?: 'ResponseBaseOfCompanyProfile';
  result?: Maybe<CompanyProfile>;
  status: ResponseStatus;
};

export type ResponseBaseOfComplaint = {
  __typename?: 'ResponseBaseOfComplaint';
  result?: Maybe<Complaint>;
  status: ResponseStatus;
};

export type ResponseBaseOfComplaintArgument = {
  __typename?: 'ResponseBaseOfComplaintArgument';
  result?: Maybe<ComplaintArgument>;
  status: ResponseStatus;
};

export type ResponseBaseOfComplaintFile = {
  __typename?: 'ResponseBaseOfComplaintFile';
  result?: Maybe<ComplaintFile>;
  status: ResponseStatus;
};

export type ResponseBaseOfComplaintNonFeasibleArgument = {
  __typename?: 'ResponseBaseOfComplaintNonFeasibleArgument';
  result?: Maybe<ComplaintNonFeasibleArgument>;
  status: ResponseStatus;
};

export type ResponseBaseOfComplaintNote = {
  __typename?: 'ResponseBaseOfComplaintNote';
  result?: Maybe<ComplaintNote>;
  status: ResponseStatus;
};

export type ResponseBaseOfComplaintState = {
  __typename?: 'ResponseBaseOfComplaintState';
  result?: Maybe<ComplaintState>;
  status: ResponseStatus;
};

export type ResponseBaseOfContract = {
  __typename?: 'ResponseBaseOfContract';
  result?: Maybe<Contract>;
  status: ResponseStatus;
};

export type ResponseBaseOfCorrectionRequest = {
  __typename?: 'ResponseBaseOfCorrectionRequest';
  result?: Maybe<CorrectionRequest>;
  status: ResponseStatus;
};

export type ResponseBaseOfDocumentRequest = {
  __typename?: 'ResponseBaseOfDocumentRequest';
  result?: Maybe<DocumentRequest>;
  status: ResponseStatus;
};

export type ResponseBaseOfFileGallery = {
  __typename?: 'ResponseBaseOfFileGallery';
  result?: Maybe<FileGallery>;
  status: ResponseStatus;
};

export type ResponseBaseOfInstallment = {
  __typename?: 'ResponseBaseOfInstallment';
  result?: Maybe<Installment>;
  status: ResponseStatus;
};

export type ResponseBaseOfInstallmentPart = {
  __typename?: 'ResponseBaseOfInstallmentPart';
  result?: Maybe<InstallmentPart>;
  status: ResponseStatus;
};

export type ResponseBaseOfInstallmentTable = {
  __typename?: 'ResponseBaseOfInstallmentTable';
  result?: Maybe<InstallmentTable>;
  status: ResponseStatus;
};

export type ResponseBaseOfLetter = {
  __typename?: 'ResponseBaseOfLetter';
  result?: Maybe<Letter>;
  status: ResponseStatus;
};

export type ResponseBaseOfListOfUser = {
  __typename?: 'ResponseBaseOfListOfUser';
  result?: Maybe<Array<Maybe<User>>>;
  status: ResponseStatus;
};

export type ResponseBaseOfMainSetting = {
  __typename?: 'ResponseBaseOfMainSetting';
  result?: Maybe<MainSetting>;
  status: ResponseStatus;
};

export type ResponseBaseOfPersonDataDto = {
  __typename?: 'ResponseBaseOfPersonDataDto';
  result?: Maybe<PersonDataDto>;
  status: ResponseStatus;
};

export type ResponseBaseOfPublicContract = {
  __typename?: 'ResponseBaseOfPublicContract';
  result?: Maybe<PublicContract>;
  status: ResponseStatus;
};

export type ResponseBaseOfSetInCouncilListResponseDto = {
  __typename?: 'ResponseBaseOfSetInCouncilListResponseDto';
  result?: Maybe<SetInCouncilListResponseDto>;
  status: ResponseStatus;
};

export type ResponseBaseOfString = {
  __typename?: 'ResponseBaseOfString';
  result?: Maybe<Scalars['String']['output']>;
  status: ResponseStatus;
};

export type ResponseBaseOfUser = {
  __typename?: 'ResponseBaseOfUser';
  result?: Maybe<User>;
  status: ResponseStatus;
};

export type ResponseBaseOfUserPayment = {
  __typename?: 'ResponseBaseOfUserPayment';
  result?: Maybe<UserPayment>;
  status: ResponseStatus;
};

export type ResponseBaseOfUserRole = {
  __typename?: 'ResponseBaseOfUserRole';
  result?: Maybe<UserRole>;
  status: ResponseStatus;
};

export type ResponseBaseOfUserTokenDto = {
  __typename?: 'ResponseBaseOfUserTokenDto';
  result?: Maybe<UserTokenDto>;
  status: ResponseStatus;
};

export type ResponseBaseOfWorkConditionStatement = {
  __typename?: 'ResponseBaseOfWorkConditionStatement';
  result?: Maybe<WorkConditionStatement>;
  status: ResponseStatus;
};

export type ResponseBaseOfWorkConditionStatementPart = {
  __typename?: 'ResponseBaseOfWorkConditionStatementPart';
  result?: Maybe<WorkConditionStatementPart>;
  status: ResponseStatus;
};

export type ResponseBaseOfWorkConditionStatementTable = {
  __typename?: 'ResponseBaseOfWorkConditionStatementTable';
  result?: Maybe<WorkConditionStatementTable>;
  status: ResponseStatus;
};

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  code: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export enum ResponsibleUserType {
  Accused = 'ACCUSED',
  Accuser = 'ACCUSER',
  AccuserAndAccused = 'ACCUSER_AND_ACCUSED',
  LegalExpert = 'LEGAL_EXPERT',
  MailRoomChief = 'MAIL_ROOM_CHIEF',
  MailRoomExpert = 'MAIL_ROOM_EXPERT'
}

export enum RoleType {
  Expert = 'EXPERT',
  SeniorUser = 'SENIOR_USER',
  SuperAdmin = 'SUPER_ADMIN'
}

export type RoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<RoleType>>;
};

export type SendInviteToMeetingSmsDtoInput = {
  complaintId: Scalars['Int']['input'];
  meetingDate: Scalars['Date']['input'];
  meetingPlace: Scalars['String']['input'];
  meetingTime: Scalars['TimeSpan']['input'];
};

export type SendLetterDtoInput = {
  comment: Scalars['String']['input'];
  filePath: Scalars['String']['input'];
  receiverDepartmentId: Scalars['String']['input'];
  receiverPersonId: Scalars['String']['input'];
  summary: Scalars['String']['input'];
};

export type SetInCouncilListResponseDto = {
  __typename?: 'SetInCouncilListResponseDto';
  fileNames: Array<Scalars['String']['output']>;
  result: Array<KeyValuePairOfInt32AndBoolean>;
};

export type SignUpDtoInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  confirmPassword: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  genderType?: InputMaybe<GenderType>;
  isJury: Scalars['Boolean']['input'];
  landlinePhone?: InputMaybe<Scalars['String']['input']>;
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  registeredBy?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
  userType: UserType;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum TargetType {
  Accused = 'ACCUSED',
  Accuser = 'ACCUSER',
  Both = 'BOTH'
}

export type User = {
  __typename?: 'User';
  accessFailedCount: Scalars['Int']['output'];
  address?: Maybe<Scalars['String']['output']>;
  adjustmentStatementTables?: Maybe<Array<AdjustmentStatementTable>>;
  arbitrationTermsForms?: Maybe<Array<ArbitrationTermsForm>>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  childUsers?: Maybe<Array<User>>;
  complaintArguments?: Maybe<Array<ComplaintArgument>>;
  complaintNonFeasibleArguments?: Maybe<Array<ComplaintNonFeasibleArgument>>;
  complaints?: Maybe<Array<Complaint>>;
  concurrencyStamp?: Maybe<Scalars['String']['output']>;
  contracts?: Maybe<Array<Contract>>;
  correctionRequests?: Maybe<Array<CorrectionRequest>>;
  createdDate: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  eventHistories?: Maybe<Array<EventHistory>>;
  fax?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  genderType?: Maybe<GenderType>;
  id?: Maybe<Scalars['String']['output']>;
  installmentTables?: Maybe<Array<InstallmentTable>>;
  installments?: Maybe<Array<Installment>>;
  isDeleted: Scalars['Boolean']['output'];
  isJury: Scalars['Boolean']['output'];
  landlinePhone?: Maybe<Scalars['String']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  nationalCode?: Maybe<Scalars['String']['output']>;
  normalizedEmail?: Maybe<Scalars['String']['output']>;
  normalizedUserName?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<User>;
  parentId?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberConfirmed: Scalars['Boolean']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  registeredBy?: Maybe<Scalars['String']['output']>;
  securityStamp?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  userCurrentRole?: Maybe<RoleType>;
  userName?: Maybe<Scalars['String']['output']>;
  userRoles?: Maybe<Array<UserRole>>;
  userType: UserType;
  workConditionStatementTables?: Maybe<Array<WorkConditionStatementTable>>;
};

export type UserCollectionSegment = {
  __typename?: 'UserCollectionSegment';
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserFilterInput = {
  accessFailedCount?: InputMaybe<ComparableInt32OperationFilterInput>;
  address?: InputMaybe<StringOperationFilterInput>;
  adjustmentStatementTables?: InputMaybe<ListFilterInputTypeOfAdjustmentStatementTableFilterInput>;
  and?: InputMaybe<Array<UserFilterInput>>;
  arbitrationTermsForms?: InputMaybe<ListFilterInputTypeOfArbitrationTermsFormFilterInput>;
  birthDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  childUsers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  complaintArguments?: InputMaybe<ListFilterInputTypeOfComplaintArgumentFilterInput>;
  complaintNonFeasibleArguments?: InputMaybe<ListFilterInputTypeOfComplaintNonFeasibleArgumentFilterInput>;
  complaints?: InputMaybe<ListFilterInputTypeOfComplaintFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contracts?: InputMaybe<ListFilterInputTypeOfContractFilterInput>;
  correctionRequests?: InputMaybe<ListFilterInputTypeOfCorrectionRequestFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  eventHistories?: InputMaybe<ListFilterInputTypeOfEventHistoryFilterInput>;
  fax?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  genderType?: InputMaybe<NullableOfGenderTypeOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  installmentTables?: InputMaybe<ListFilterInputTypeOfInstallmentTableFilterInput>;
  installments?: InputMaybe<ListFilterInputTypeOfInstallmentFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isJury?: InputMaybe<BooleanOperationFilterInput>;
  landlinePhone?: InputMaybe<StringOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lockoutEnabled?: InputMaybe<BooleanOperationFilterInput>;
  lockoutEnd?: InputMaybe<ComparableNullableOfDateTimeOffsetOperationFilterInput>;
  nationalCode?: InputMaybe<StringOperationFilterInput>;
  normalizedEmail?: InputMaybe<StringOperationFilterInput>;
  normalizedUserName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  parent?: InputMaybe<UserFilterInput>;
  parentId?: InputMaybe<StringOperationFilterInput>;
  password?: InputMaybe<StringOperationFilterInput>;
  passwordHash?: InputMaybe<StringOperationFilterInput>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  phoneNumberConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  registeredBy?: InputMaybe<StringOperationFilterInput>;
  securityStamp?: InputMaybe<StringOperationFilterInput>;
  twoFactorEnabled?: InputMaybe<BooleanOperationFilterInput>;
  userCurrentRole?: InputMaybe<NullableOfRoleTypeOperationFilterInput>;
  userName?: InputMaybe<StringOperationFilterInput>;
  userRoles?: InputMaybe<ListFilterInputTypeOfUserRoleFilterInput>;
  userType?: InputMaybe<UserTypeOperationFilterInput>;
  workConditionStatementTables?: InputMaybe<ListFilterInputTypeOfWorkConditionStatementTableFilterInput>;
};

export type UserInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<UserType>;
};

export type UserPayment = {
  __typename?: 'UserPayment';
  amount: Scalars['Decimal']['output'];
  complaintId?: Maybe<Scalars['Int']['output']>;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  paymentNumber: Scalars['String']['output'];
  paymentType: PaymentType;
  trackingNumber: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserPaymentCollectionSegment = {
  __typename?: 'UserPaymentCollectionSegment';
  items?: Maybe<Array<UserPayment>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserPaymentFilterInput = {
  amount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<UserPaymentFilterInput>>;
  complaintId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<UserPaymentFilterInput>>;
  paymentNumber?: InputMaybe<StringOperationFilterInput>;
  paymentType?: InputMaybe<PaymentTypeOperationFilterInput>;
  trackingNumber?: InputMaybe<StringOperationFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserPaymentInput = {
  amount: Scalars['Decimal']['input'];
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paymentNumber: Scalars['String']['input'];
  paymentType: PaymentType;
  trackingNumber: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserPaymentSortInput = {
  amount?: InputMaybe<SortEnumType>;
  complaintId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  paymentNumber?: InputMaybe<SortEnumType>;
  paymentType?: InputMaybe<SortEnumType>;
  trackingNumber?: InputMaybe<SortEnumType>;
  userId?: InputMaybe<SortEnumType>;
};

export type UserRole = {
  __typename?: 'UserRole';
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  roleType: RoleType;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type UserRoleCollectionSegment = {
  __typename?: 'UserRoleCollectionSegment';
  items?: Maybe<Array<UserRole>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserRoleFilterInput = {
  and?: InputMaybe<Array<UserRoleFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<UserRoleFilterInput>>;
  roleType?: InputMaybe<RoleTypeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserRoleSortInput = {
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  roleType?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type UserSortInput = {
  accessFailedCount?: InputMaybe<SortEnumType>;
  address?: InputMaybe<SortEnumType>;
  birthDate?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  fax?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  genderType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isJury?: InputMaybe<SortEnumType>;
  landlinePhone?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  lockoutEnabled?: InputMaybe<SortEnumType>;
  lockoutEnd?: InputMaybe<SortEnumType>;
  nationalCode?: InputMaybe<SortEnumType>;
  normalizedEmail?: InputMaybe<SortEnumType>;
  normalizedUserName?: InputMaybe<SortEnumType>;
  parent?: InputMaybe<UserSortInput>;
  parentId?: InputMaybe<SortEnumType>;
  password?: InputMaybe<SortEnumType>;
  passwordHash?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  phoneNumberConfirmed?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  registeredBy?: InputMaybe<SortEnumType>;
  securityStamp?: InputMaybe<SortEnumType>;
  twoFactorEnabled?: InputMaybe<SortEnumType>;
  userCurrentRole?: InputMaybe<SortEnumType>;
  userName?: InputMaybe<SortEnumType>;
  userType?: InputMaybe<SortEnumType>;
};

export type UserTokenDto = {
  __typename?: 'UserTokenDto';
  expireDate?: Maybe<Scalars['DateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export enum UserType {
  ContractorOrConsultant = 'CONTRACTOR_OR_CONSULTANT',
  Individual = 'INDIVIDUAL',
  Organization = 'ORGANIZATION'
}

export type UserTypeOperationFilterInput = {
  eq?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  neq?: InputMaybe<UserType>;
  nin?: InputMaybe<Array<UserType>>;
};

export type ValidatePhoneNumberDtoInput = {
  nationalCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type WorkConditionStatement = {
  __typename?: 'WorkConditionStatement';
  amountApprovedByEmployer?: Maybe<Scalars['Decimal']['output']>;
  amountConfirmedByConsultant?: Maybe<Scalars['Decimal']['output']>;
  amountPaid: Scalars['Decimal']['output'];
  amountProvidedByContractor?: Maybe<Scalars['Decimal']['output']>;
  createdDate: Scalars['DateTime']['output'];
  dateApprovedByEmployer?: Maybe<Scalars['Date']['output']>;
  dateConfirmedByConsultant?: Maybe<Scalars['Date']['output']>;
  datePaid: Scalars['Date']['output'];
  dateProvidedByContractor?: Maybe<Scalars['Date']['output']>;
  filledBy?: Maybe<RegistrarType>;
  financialCoverFileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  operationPeriodEndDate?: Maybe<Scalars['Date']['output']>;
  operationPeriodStartDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  workConditionStatementParts?: Maybe<Array<WorkConditionStatementPart>>;
  workConditionStatementTable?: Maybe<WorkConditionStatementTable>;
  workConditionStatementTableId: Scalars['Int']['output'];
};

export type WorkConditionStatementCollectionSegment = {
  __typename?: 'WorkConditionStatementCollectionSegment';
  items?: Maybe<Array<WorkConditionStatement>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkConditionStatementFilterInput = {
  amountApprovedByEmployer?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  amountConfirmedByConsultant?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  amountPaid?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountProvidedByContractor?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  and?: InputMaybe<Array<WorkConditionStatementFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dateApprovedByEmployer?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  dateConfirmedByConsultant?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  datePaid?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateProvidedByContractor?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  financialCoverFileName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationPeriodEndDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationPeriodStartDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<WorkConditionStatementFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
  workConditionStatementParts?: InputMaybe<ListFilterInputTypeOfWorkConditionStatementPartFilterInput>;
  workConditionStatementTable?: InputMaybe<WorkConditionStatementTableFilterInput>;
  workConditionStatementTableId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type WorkConditionStatementInput = {
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  financialCoverFileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  workConditionStatementTableId?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkConditionStatementPart = {
  __typename?: 'WorkConditionStatementPart';
  amountApprovedByEmployer?: Maybe<Scalars['Decimal']['output']>;
  amountConfirmedByConsultant?: Maybe<Scalars['Decimal']['output']>;
  amountPaid: Scalars['Decimal']['output'];
  amountProvidedByContractor?: Maybe<Scalars['Decimal']['output']>;
  circularDate?: Maybe<Scalars['String']['output']>;
  circularNumber?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  dateApprovedByEmployer?: Maybe<Scalars['Date']['output']>;
  dateConfirmedByConsultant?: Maybe<Scalars['Date']['output']>;
  datePaid: Scalars['Date']['output'];
  dateProvidedByContractor?: Maybe<Scalars['Date']['output']>;
  filledBy?: Maybe<RegistrarType>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  operationPeriodEndDate?: Maybe<Scalars['Date']['output']>;
  operationPeriodStartDate?: Maybe<Scalars['Date']['output']>;
  workConditionStatement?: Maybe<WorkConditionStatement>;
  workConditionStatementId: Scalars['Int']['output'];
};

export type WorkConditionStatementPartCollectionSegment = {
  __typename?: 'WorkConditionStatementPartCollectionSegment';
  items?: Maybe<Array<WorkConditionStatementPart>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkConditionStatementPartFilterInput = {
  amountApprovedByEmployer?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  amountConfirmedByConsultant?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  amountPaid?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountProvidedByContractor?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  and?: InputMaybe<Array<WorkConditionStatementPartFilterInput>>;
  circularDate?: InputMaybe<StringOperationFilterInput>;
  circularNumber?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dateApprovedByEmployer?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  dateConfirmedByConsultant?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  datePaid?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateProvidedByContractor?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationPeriodEndDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationPeriodStartDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<WorkConditionStatementPartFilterInput>>;
  workConditionStatement?: InputMaybe<WorkConditionStatementFilterInput>;
  workConditionStatementId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type WorkConditionStatementPartInput = {
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  circularDate?: InputMaybe<Scalars['String']['input']>;
  circularNumber?: InputMaybe<Scalars['String']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  workConditionStatementId?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkConditionStatementPartSortInput = {
  amountApprovedByEmployer?: InputMaybe<SortEnumType>;
  amountConfirmedByConsultant?: InputMaybe<SortEnumType>;
  amountPaid?: InputMaybe<SortEnumType>;
  amountProvidedByContractor?: InputMaybe<SortEnumType>;
  circularDate?: InputMaybe<SortEnumType>;
  circularNumber?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  dateApprovedByEmployer?: InputMaybe<SortEnumType>;
  dateConfirmedByConsultant?: InputMaybe<SortEnumType>;
  datePaid?: InputMaybe<SortEnumType>;
  dateProvidedByContractor?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  operationPeriodEndDate?: InputMaybe<SortEnumType>;
  operationPeriodStartDate?: InputMaybe<SortEnumType>;
  workConditionStatement?: InputMaybe<WorkConditionStatementSortInput>;
  workConditionStatementId?: InputMaybe<SortEnumType>;
};

export type WorkConditionStatementSortInput = {
  amountApprovedByEmployer?: InputMaybe<SortEnumType>;
  amountConfirmedByConsultant?: InputMaybe<SortEnumType>;
  amountPaid?: InputMaybe<SortEnumType>;
  amountProvidedByContractor?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  dateApprovedByEmployer?: InputMaybe<SortEnumType>;
  dateConfirmedByConsultant?: InputMaybe<SortEnumType>;
  datePaid?: InputMaybe<SortEnumType>;
  dateProvidedByContractor?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  financialCoverFileName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  operationPeriodEndDate?: InputMaybe<SortEnumType>;
  operationPeriodStartDate?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  workConditionStatementTable?: InputMaybe<WorkConditionStatementTableSortInput>;
  workConditionStatementTableId?: InputMaybe<SortEnumType>;
};

export type WorkConditionStatementTable = {
  __typename?: 'WorkConditionStatementTable';
  contract?: Maybe<Contract>;
  contractId: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  filledBy?: Maybe<RegistrarType>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  workConditionStatements?: Maybe<Array<WorkConditionStatement>>;
  workConditionType?: Maybe<Scalars['String']['output']>;
};

export type WorkConditionStatementTableCollectionSegment = {
  __typename?: 'WorkConditionStatementTableCollectionSegment';
  items?: Maybe<Array<WorkConditionStatementTable>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkConditionStatementTableFilterInput = {
  and?: InputMaybe<Array<WorkConditionStatementTableFilterInput>>;
  contract?: InputMaybe<ContractFilterInput>;
  contractId?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<WorkConditionStatementTableFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  workConditionStatements?: InputMaybe<ListFilterInputTypeOfWorkConditionStatementFilterInput>;
  workConditionType?: InputMaybe<StringOperationFilterInput>;
};

export type WorkConditionStatementTableInput = {
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  workConditionType?: InputMaybe<Scalars['String']['input']>;
};

export type WorkConditionStatementTableSortInput = {
  contract?: InputMaybe<ContractSortInput>;
  contractId?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
  workConditionType?: InputMaybe<SortEnumType>;
};

export type AddNonFeasibleArgumentMutationVariables = Exact<{
  input: ComplaintNonFeasibleArgumentInput;
}>;


export type AddNonFeasibleArgumentMutation = { __typename?: 'Mutation', complaintnonfeasibleargument_addComplaintNonFeasibleArgument: { __typename?: 'ResponseBaseOfComplaintNonFeasibleArgument', result?: { __typename?: 'ComplaintNonFeasibleArgument', userId: string, complaintId: number, summary?: string | null, description?: string | null, financialSituation?: string | null, id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UpdateNonFeasibleArgumentMutationVariables = Exact<{
  input: ComplaintNonFeasibleArgumentInput;
}>;


export type UpdateNonFeasibleArgumentMutation = { __typename?: 'Mutation', complaintnonfeasibleargument_updateComplaintNonFeasibleArgument: { __typename?: 'ResponseBaseOfComplaintNonFeasibleArgument', result?: { __typename?: 'ComplaintNonFeasibleArgument', userId: string, complaintId: number, summary?: string | null, description?: string | null, financialSituation?: string | null, id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type DeleteNonFeasibleArgumentMutationVariables = Exact<{
  input: Scalars['Int']['input'];
}>;


export type DeleteNonFeasibleArgumentMutation = { __typename?: 'Mutation', complaintnonfeasibleargument_deleteComplaintNonFeasibleArgument: { __typename?: 'ResponseBaseOfComplaintNonFeasibleArgument', result?: { __typename?: 'ComplaintNonFeasibleArgument', userId: string, complaintId: number, summary?: string | null, description?: string | null, financialSituation?: string | null, id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetNonFeasibleArgumentsQueryVariables = Exact<{
  filer?: InputMaybe<ComplaintNonFeasibleArgumentFilterInput>;
  order?: InputMaybe<Array<ComplaintNonFeasibleArgumentSortInput> | ComplaintNonFeasibleArgumentSortInput>;
}>;


export type GetNonFeasibleArgumentsQuery = { __typename?: 'Query', complaintNonFeasibleArgument_getComplaintNonFeasibleArguments: { __typename?: 'ListResponseBaseOfComplaintNonFeasibleArgument', status?: any | null, result?: { __typename?: 'ComplaintNonFeasibleArgumentCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ComplaintNonFeasibleArgument', userId: string, complaintId: number, summary?: string | null, description?: string | null, financialSituation?: string | null, id: number, isDeleted: boolean, createdDate: any, financialStatusFileName?: string | null }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null } };

export type UpdateComplaintStateMutationVariables = Exact<{
  input: ComplaintStateInput;
}>;


export type UpdateComplaintStateMutation = { __typename?: 'Mutation', complaintState_updateComplaintState: { __typename?: 'ResponseBaseOfComplaintState', result?: { __typename?: 'ComplaintState', id: number, englishName: string, persianName: string, state: ComplaintStateStatus, createdDate: any, isDeleted: boolean, priority: number } | null } };

export type GetComplaintStatesQueryVariables = Exact<{
  filter?: InputMaybe<ComplaintStateFilterInput>;
  order?: InputMaybe<Array<ComplaintStateSortInput> | ComplaintStateSortInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetComplaintStatesQuery = { __typename?: 'Query', complaintState_getComplaintStates: { __typename?: 'ListResponseBaseOfComplaintState', result?: { __typename?: 'ComplaintStateCollectionSegment', items?: Array<{ __typename?: 'ComplaintState', id: number, englishName: string, persianName: string, state: ComplaintStateStatus, createdDate: any, isDeleted: boolean, priority: number }> | null } | null } };

export type CreateComplaintMutationVariables = Exact<{
  contractId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
  complaintStateId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateComplaintMutation = { __typename?: 'Mutation', complaint_addComplaint: { __typename?: 'ResponseBaseOfComplaint', result?: { __typename?: 'Complaint', id: number, assignedUserId?: string | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string } | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UpdateComplaintMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  assignedUserId?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  complaintStateId?: InputMaybe<Scalars['Int']['input']>;
  isApprovedByChief?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateComplaintMutation = { __typename?: 'Mutation', complaint_updateComplaint: { __typename: 'ResponseBaseOfComplaint', result?: { __typename: 'Complaint', id: number, assignedUserId?: string | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string } | null, arbitrationTermsForms?: Array<{ __typename: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type UpdateComplaintFullMutationVariables = Exact<{
  input: ComplaintInput;
}>;


export type UpdateComplaintFullMutation = { __typename?: 'Mutation', complaint_updateComplaint: { __typename: 'ResponseBaseOfComplaint', result?: { __typename: 'Complaint', id: number, assignedUserId?: string | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string } | null, arbitrationTermsForms?: Array<{ __typename: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type CreateArbitrationTermsFormMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
  filledBy: RegistrarType;
  firstCondition: Scalars['String']['input'];
  firstConditionFileName?: InputMaybe<Scalars['String']['input']>;
  secondCondition: Scalars['String']['input'];
  secondConditionFileName?: InputMaybe<Scalars['String']['input']>;
  thirdCondition: Scalars['String']['input'];
  thirdConditionFinalBillFileName?: InputMaybe<Scalars['String']['input']>;
  thirdConditionNotificationLetterFileName?: InputMaybe<Scalars['String']['input']>;
  thirdConditionContractorsObjectionDocumentsFileName?: InputMaybe<Scalars['String']['input']>;
  fourthCondition: Scalars['String']['input'];
  fourthConditionFileName?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  projectNumber?: InputMaybe<Scalars['String']['input']>;
  hasReadAgreement: Scalars['Boolean']['input'];
}>;


export type CreateArbitrationTermsFormMutation = { __typename?: 'Mutation', arbitrationTermsForm_addArbitrationTermsForm: { __typename?: 'ResponseBaseOfArbitrationTermsForm', result?: { __typename?: 'ArbitrationTermsForm', id: number, complaintId: number, userId: string, filledBy: RegistrarType, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, projectName?: string | null, projectNumber?: string | null, hasReadAgreement: boolean } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type AddArgumentToComplaintMutationVariables = Exact<{
  input: ComplaintArgumentInput;
}>;


export type AddArgumentToComplaintMutation = { __typename?: 'Mutation', complaintArgument_addComplaintArgument: { __typename: 'ResponseBaseOfComplaintArgument', result?: { __typename: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, netApprovedAmount?: any | null, grossApprovedAmount?: any | null, complaintId: number, netCouncilApprovedAmount?: any | null, grossCouncilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, netMailRoomChiefSuggestedAmount?: any | null, grossMailRoomChiefSuggestedAmount?: any | null, netMailRoomExpertApprovedAmount?: any | null, grossMailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type UpdateArgumentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  accuserResponse?: InputMaybe<Scalars['String']['input']>;
  accuserResponseFileName?: InputMaybe<Scalars['String']['input']>;
  approvedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  councilApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  councilOpinion?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expertId?: InputMaybe<Scalars['String']['input']>;
  expertOpinion?: InputMaybe<Scalars['String']['input']>;
  expertOpinionFileName?: InputMaybe<Scalars['String']['input']>;
  expertVerdict?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  mailRoomChiefSuggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  mailRoomExpertApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  suggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  accuserAnswerToAccusedResponse?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateArgumentMutation = { __typename?: 'Mutation', complaintArgument_updateComplaintArgument: { __typename?: 'ResponseBaseOfComplaintArgument', result?: { __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, netApprovedAmount?: any | null, grossApprovedAmount?: any | null, complaintId: number, netCouncilApprovedAmount?: any | null, grossCouncilApprovedAmount?: any | null, justiceExpertOpinion?: string | null, netJusticeExpertApprovedAmount?: any | null, grossJusticeExpertApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, netMailRoomChiefSuggestedAmount?: any | null, grossMailRoomChiefSuggestedAmount?: any | null, netMailRoomExpertApprovedAmount?: any | null, grossMailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UpdateArgumentFullMutationVariables = Exact<{
  input: ComplaintArgumentInput;
}>;


export type UpdateArgumentFullMutation = { __typename?: 'Mutation', complaintArgument_updateComplaintArgument: { __typename?: 'ResponseBaseOfComplaintArgument', result?: { __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, netApprovedAmount?: any | null, grossApprovedAmount?: any | null, complaintId: number, netCouncilApprovedAmount?: any | null, grossCouncilApprovedAmount?: any | null, justiceExpertOpinion?: string | null, netJusticeExpertApprovedAmount?: any | null, grossJusticeExpertApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, netMailRoomChiefSuggestedAmount?: any | null, grossMailRoomChiefSuggestedAmount?: any | null, netMailRoomExpertApprovedAmount?: any | null, grossMailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type DeleteArgumentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteArgumentMutation = { __typename?: 'Mutation', complaintArgument_deleteComplaintArgument: { __typename?: 'ResponseBaseOfComplaintArgument', result?: { __typename?: 'ComplaintArgument', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type DeleteCompainMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCompainMutation = { __typename?: 'Mutation', complaint_deleteComplaint: { __typename?: 'ResponseBaseOfComplaint', status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type AddComplaintNoteMutationVariables = Exact<{
  input: ComplaintNoteInput;
}>;


export type AddComplaintNoteMutation = { __typename?: 'Mutation', complaintNote_addComplaintNote: { __typename?: 'ResponseBaseOfComplaintNote', result?: { __typename?: 'ComplaintNote', content: string, complaintId: number, id: number, noteType: NoteType, createdDate: any } | null } };

export type SendAccusedRespondedSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendAccusedRespondedSmsMutation = { __typename?: 'Mutation', sms_sendAccusedRespondedSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type AddComplaintFileMutationMutationVariables = Exact<{
  input: ComplaintFileInput;
}>;


export type AddComplaintFileMutationMutation = { __typename?: 'Mutation', complaintFile_addComplaintFile: { __typename?: 'ResponseBaseOfComplaintFile', result?: { __typename?: 'ComplaintFile', complaintId: number, title: string, fileId: number, description?: string | null, id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GenerateComplaintVerdictMutationVariables = Exact<{
  input: ComplaintVerdictLetterDtoInput;
}>;


export type GenerateComplaintVerdictMutation = { __typename?: 'Mutation', test_generateComplaintVerdictLetter: Array<string> };

export type GenerateComplaintDecreeMutationVariables = Exact<{
  input: DecreeDtoInput;
}>;


export type GenerateComplaintDecreeMutation = { __typename?: 'Mutation', test_generateDecree: string };

export type SmsComplaintAddedMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SmsComplaintAddedMutation = { __typename?: 'Mutation', sms_sendComplaintAddedSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SmsAccusedRespondMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SmsAccusedRespondMutation = { __typename?: 'Mutation', sms_sendAccusedRespondedSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SmsComplaintCodeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SmsComplaintCodeMutation = { __typename?: 'Mutation', sms_sendComplaintCodeSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type AddCorrectionRequestsMutationVariables = Exact<{
  input: CorrectionRequestInput;
}>;


export type AddCorrectionRequestsMutation = { __typename?: 'Mutation', correctionRequest_addCorrectionRequest: { __typename?: 'ResponseBaseOfCorrectionRequest', result?: { __typename?: 'CorrectionRequest', complaintId: number, createdDate: any, clause: string, reason: string, suggestion: string, id: number, complaint?: { __typename?: 'Complaint', id: number, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null } | null } | null } };

export type UpdateCorrectionRequestsMutationVariables = Exact<{
  input: CorrectionRequestInput;
}>;


export type UpdateCorrectionRequestsMutation = { __typename?: 'Mutation', correctionRequest_updateCorrectionRequest: { __typename?: 'ResponseBaseOfCorrectionRequest', result?: { __typename?: 'CorrectionRequest', complaintId: number, createdDate: any, clause: string, reason: string, suggestion: string, id: number, complaint?: { __typename?: 'Complaint', id: number, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null } | null } | null } };

export type DeleteCorrectionRequestsMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCorrectionRequestsMutation = { __typename?: 'Mutation', correctionRequest_deleteCorrectionRequest: { __typename?: 'ResponseBaseOfCorrectionRequest', result?: { __typename?: 'CorrectionRequest', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type SendArbitrationRejectionSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendArbitrationRejectionSmsMutation = { __typename?: 'Mutation', sms_sendArbitrationRejectionSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendAssignToExpertSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendAssignToExpertSmsMutation = { __typename?: 'Mutation', sms_sendAssignToExpertSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendComplaintGotCancelledSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendComplaintGotCancelledSmsMutation = { __typename?: 'Mutation', sms_sendComplaintGotCancelledSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendDidNotMakeFirstPaymentSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendDidNotMakeFirstPaymentSmsMutation = { __typename?: 'Mutation', sms_sendDidNotMakeFirstPaymentSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendComplaintCorrectionRequestSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
  receiverId: Scalars['String']['input'];
}>;


export type SendComplaintCorrectionRequestSmsMutation = { __typename?: 'Mutation', sms_sendComplaintCorrectionRequestSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendAccusedDidNotRespondSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendAccusedDidNotRespondSmsMutation = { __typename?: 'Mutation', sms_sendAccusedDidNotRespondSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendSecondPaymentAnnouncementSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendSecondPaymentAnnouncementSmsMutation = { __typename?: 'Mutation', sms_sendSecondPaymentAnnouncementSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendViewVerdictSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendViewVerdictSmsMutation = { __typename?: 'Mutation', sms_sendViewVerdictSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendLetterSentToMinistersCouncilSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendLetterSentToMinistersCouncilSmsMutation = { __typename?: 'Mutation', sms_sendLetterSentToMinistersCouncilSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SendReceiveAnswerFromMinistersCouncilSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendReceiveAnswerFromMinistersCouncilSmsMutation = { __typename?: 'Mutation', sms_sendReceiveAnswerFromMinistersCouncilSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type SetFirstAndSecondPaymentCostMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SetFirstAndSecondPaymentCostMutation = { __typename?: 'Mutation', complaint_setFirstAndSecondPaymentCost: { __typename?: 'ResponseStatus', code: number, value: string } };

export type GenerateComplaintReportMutationVariables = Exact<{
  input: ComplaintReportDtoInput;
}>;


export type GenerateComplaintReportMutation = { __typename?: 'Mutation', test_generateComplaintReport: string };

export type GenerateFulfilledFirstPaymentComplaintsListMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GenerateFulfilledFirstPaymentComplaintsListMutation = { __typename?: 'Mutation', test_generateFulfilledFirstPaymentComplaintsList: string };

export type SendComplaintAddedSmsMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
}>;


export type SendComplaintAddedSmsMutation = { __typename?: 'Mutation', sms_sendComplaintAddedSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type Get_ComplaintsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename: 'ListResponseBaseOfComplaint', status?: any | null, result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, responsibleRole?: ResponsibleUserType | null, priority: number, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetComplaintQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintQuery = { __typename?: 'Query', complaint_getComplaint: { __typename?: 'ResponseBaseOfComplaint', result?: { __typename?: 'Complaint', userId: string, id: number, contractId: number, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, responsibleRole?: ResponsibleUserType | null, priority: number, englishName: string, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null } | null } | null } };

export type Get_Accused_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accused_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, englishName: string, priority: number, state: ComplaintStateStatus, responsibleRole?: ResponsibleUserType | null, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Accuser_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accuser_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, englishName: string, priority: number, state: ComplaintStateStatus, responsibleRole?: ResponsibleUserType | null, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Chief_ComplaintsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Chief_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, englishName: string, priority: number, state: ComplaintStateStatus, responsibleRole?: ResponsibleUserType | null, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetComplaintArgumentsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintArgumentsQuery = { __typename?: 'Query', complaintArgument_getComplaintArguments: { __typename?: 'ListResponseBaseOfComplaintArgument', status?: any | null, result?: { __typename?: 'ComplaintArgumentCollectionSegment', items?: Array<{ __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, netApprovedAmount?: any | null, grossApprovedAmount?: any | null, complaintId: number, netCouncilApprovedAmount?: any | null, grossCouncilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, netMailRoomChiefSuggestedAmount?: any | null, grossMailRoomChiefSuggestedAmount?: any | null, netMailRoomExpertApprovedAmount?: any | null, grossMailRoomExpertApprovedAmount?: any | null, accuserAnswerToAccusedResponse?: string | null, suggestedAmount: any, summary?: string | null, userId: string }> | null } | null } };

export type Get_Complaint_AssignedQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_Complaint_AssignedQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, englishName: string, state: ComplaintStateStatus, priority: number, responsibleRole?: ResponsibleUserType | null, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Arbitration_Terms_FormQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Get_Arbitration_Terms_FormQuery = { __typename?: 'Query', arbitrationTermsForm_getArbitrationTermsForms: { __typename?: 'ListResponseBaseOfArbitrationTermsForm', result?: { __typename?: 'ArbitrationTermsFormCollectionSegment', items?: Array<{ __typename?: 'ArbitrationTermsForm', id: number, complaintId: number, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, filledBy: RegistrarType }> | null } | null } };

export type GetContractsFilesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContractsFilesQueryQuery = { __typename?: 'Query', complaintFile_getComplaintFiles: { __typename?: 'ListResponseBaseOfComplaintFile', result?: { __typename?: 'ComplaintFileCollectionSegment', items?: Array<{ __typename?: 'ComplaintFile', complaintId: number, title: string, description?: string | null, id: number, fileGallery?: { __typename?: 'FileGallery', name: string } | null }> | null } | null } };

export type GetContractFilesQueryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetContractFilesQueryQuery = { __typename?: 'Query', complaintFile_getComplaintFiles: { __typename?: 'ListResponseBaseOfComplaintFile', result?: { __typename?: 'ComplaintFileCollectionSegment', items?: Array<{ __typename?: 'ComplaintFile', complaintId: number, title: string, description?: string | null, id: number, fileGallery?: { __typename?: 'FileGallery', name: string } | null }> | null } | null } };

export type GetComplaintsNotesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintsNotesQuery = { __typename?: 'Query', complaintNote_getComplaintNotes: { __typename?: 'ListResponseBaseOfComplaintNote', status?: any | null, result?: { __typename?: 'ComplaintNoteCollectionSegment', items?: Array<{ __typename?: 'ComplaintNote', id: number, complaintId: number, userId: string, content: string, createdDate: any }> | null } | null } };

export type GetExpertComplaintsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetExpertComplaintsQuery = { __typename?: 'Query', complaint_getExpertComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, councilExpertIds?: Array<string> | null, isFirstPaymentPaid: boolean, isSecondPaymentPaid: boolean, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, filledBy: RegistrarType, projectNumber?: string | null, projectName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, englishName: string, state: ComplaintStateStatus, priority: number, responsibleRole?: ResponsibleUserType | null, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', id: number, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, accuserNationality?: string | null, accusedNationality?: string | null, accuserRelatedPeopleByAccuser?: string | null, accuserRelatedPeopleByAccused?: string | null, accusedRelatedPeopleByAccuser?: string | null, accusedRelatedPeopleByAccused?: string | null, contractTypeByAccused?: Array<string> | null, contractTypeByAccuser?: Array<string> | null, otherContractTypeByAccused?: string | null, otherContractTypeByAccuser?: string | null, circularNumberByAccused?: string | null, circularNumberByAccuser?: string | null, circularDateByAccused?: any | null, circularDateByAccuser?: any | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null, contractNumberByAccused?: string | null, contractNumberByAccuser?: string | null, contractDateByAccused?: any | null, contractDateByAccuser?: any | null, initialBudgetByAccused?: any | null, initialBudgetByAccuser?: any | null, initialTimePeriodByAccused?: number | null, initialTimePeriodByAccuser?: number | null, priceListOfBasicUnitOfFieldByAccused?: string | null, priceListOfBasicUnitOfFieldByAccuser?: string | null, isSpecialPriceListAttachedToContractByAccused?: string | null, isSpecialPriceListAttachedToContractByAccuser?: string | null, recommendedCoefficientByAccused?: number | null, recommendedCoefficientByAccuser?: number | null, coefficientTypeByAccused?: string | null, coefficientTypeByAccuser?: string | null, assigningTypeByAccused?: string | null, assigningTypeByAccuser?: string | null, doesContainAdjustmentByAccused?: string | null, doesContainAdjustmentByAccuser?: string | null, baseIndexPeriodByAccused?: string | null, baseIndexPeriodByAccuser?: string | null, operationStartDateByAccused?: any | null, operationStartDateByAccuser?: any | null, physicalProgressInArbitrationDateByAccused?: number | null, physicalProgressInArbitrationDateByAccuser?: number | null, financialProgressInArbitrationDateByAccused?: number | null, financialProgressInArbitrationDateByAccuser?: number | null, contractStatusAndDateInArbitrationByAccused?: string | null, contractStatusAndDateInArbitrationByAccuser?: string | null, supervisionDepartmentByAccused?: string | null, supervisionDepartmentByAccuser?: string | null, authorizedDelaysByAccused?: number | null, authorizedDelaysByAccuser?: number | null, unauthorizedDelaysByAccused?: number | null, unauthorizedDelaysByAccuser?: number | null, isExecutiveByAccused?: boolean | null, isExecutiveByAccuser?: boolean | null, isExecutiveByExpert?: boolean | null, fileNamesByAccused?: Array<string> | null, fileNamesByAccuser?: Array<string> | null } | null }> | null } | null } };

export type GetComplaintsWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<ComplaintFilterInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComplaintSortInput> | ComplaintSortInput>;
}>;


export type GetComplaintsWithFilterQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintCode?: string | null, councilExpertIds?: Array<string> | null, isFirstPaymentPaid: boolean, isSecondPaymentPaid: boolean, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFinalBillFileName?: string | null, thirdConditionNotificationLetterFileName?: string | null, thirdConditionContractorsObjectionDocumentsFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, filledBy: RegistrarType, projectNumber?: string | null, projectName?: string | null }> | null, complaintState?: { __typename?: 'ComplaintState', id: number, persianName: string, englishName: string, state: ComplaintStateStatus, priority: number, responsibleRole?: ResponsibleUserType | null, isDeleted: boolean, createdDate: any } | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', id: number, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, accuserNationality?: string | null, accusedNationality?: string | null, accuserRelatedPeopleByAccuser?: string | null, accuserRelatedPeopleByAccused?: string | null, accusedRelatedPeopleByAccuser?: string | null, accusedRelatedPeopleByAccused?: string | null, contractTypeByAccused?: Array<string> | null, contractTypeByAccuser?: Array<string> | null, otherContractTypeByAccused?: string | null, otherContractTypeByAccuser?: string | null, circularNumberByAccused?: string | null, circularNumberByAccuser?: string | null, circularDateByAccused?: any | null, circularDateByAccuser?: any | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null, contractNumberByAccused?: string | null, contractNumberByAccuser?: string | null, contractDateByAccused?: any | null, contractDateByAccuser?: any | null, initialBudgetByAccused?: any | null, initialBudgetByAccuser?: any | null, initialTimePeriodByAccused?: number | null, initialTimePeriodByAccuser?: number | null, priceListOfBasicUnitOfFieldByAccused?: string | null, priceListOfBasicUnitOfFieldByAccuser?: string | null, isSpecialPriceListAttachedToContractByAccused?: string | null, isSpecialPriceListAttachedToContractByAccuser?: string | null, recommendedCoefficientByAccused?: number | null, recommendedCoefficientByAccuser?: number | null, coefficientTypeByAccused?: string | null, coefficientTypeByAccuser?: string | null, assigningTypeByAccused?: string | null, assigningTypeByAccuser?: string | null, doesContainAdjustmentByAccused?: string | null, doesContainAdjustmentByAccuser?: string | null, baseIndexPeriodByAccused?: string | null, baseIndexPeriodByAccuser?: string | null, operationStartDateByAccused?: any | null, operationStartDateByAccuser?: any | null, physicalProgressInArbitrationDateByAccused?: number | null, physicalProgressInArbitrationDateByAccuser?: number | null, financialProgressInArbitrationDateByAccused?: number | null, financialProgressInArbitrationDateByAccuser?: number | null, contractStatusAndDateInArbitrationByAccused?: string | null, contractStatusAndDateInArbitrationByAccuser?: string | null, supervisionDepartmentByAccused?: string | null, supervisionDepartmentByAccuser?: string | null, authorizedDelaysByAccused?: number | null, authorizedDelaysByAccuser?: number | null, unauthorizedDelaysByAccused?: number | null, unauthorizedDelaysByAccuser?: number | null, isExecutiveByAccused?: boolean | null, isExecutiveByAccuser?: boolean | null, isExecutiveByExpert?: boolean | null, fileNamesByAccused?: Array<string> | null, fileNamesByAccuser?: Array<string> | null } | null }> | null } | null } };

export type GetArgumentsWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<ComplaintArgumentFilterInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComplaintArgumentSortInput> | ComplaintArgumentSortInput>;
}>;


export type GetArgumentsWithFilterQuery = { __typename?: 'Query', complaintArgument_getComplaintArguments: { __typename?: 'ListResponseBaseOfComplaintArgument', status?: any | null, result?: { __typename?: 'ComplaintArgumentCollectionSegment', items?: Array<{ __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, netApprovedAmount?: any | null, grossApprovedAmount?: any | null, complaintId: number, netCouncilApprovedAmount?: any | null, grossCouncilApprovedAmount?: any | null, councilOpinion?: string | null, justiceExpertOpinion?: string | null, netJusticeExpertApprovedAmount?: any | null, grossJusticeExpertApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, netMailRoomChiefSuggestedAmount?: any | null, grossMailRoomChiefSuggestedAmount?: any | null, netMailRoomExpertApprovedAmount?: any | null, grossMailRoomExpertApprovedAmount?: any | null, mailRoomExpertOpinionOnExpertOpinion?: string | null, mailRoomChiefOpinionOnArgument?: string | null, mailRoomExpertOpinionOnArgument?: string | null, accuserAnswerToAccusedResponse?: string | null, suggestedAmount: any, summary?: string | null, userId: string, createdDate: any, isDeleted: boolean, financialSituation?: string | null }> | null } | null } };

export type GetCorrectionRequestsFullQueryQueryVariables = Exact<{
  filter?: InputMaybe<CorrectionRequestFilterInput>;
  orderBy?: InputMaybe<Array<CorrectionRequestSortInput> | CorrectionRequestSortInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCorrectionRequestsFullQueryQuery = { __typename?: 'Query', correctionRequest_getCorrectionRequests: { __typename?: 'ListResponseBaseOfCorrectionRequest', result?: { __typename?: 'CorrectionRequestCollectionSegment', items?: Array<{ __typename?: 'CorrectionRequest', complaintId: number, createdDate: any, clause: string, reason: string, suggestion: string, id: number, complaint?: { __typename?: 'Complaint', id: number, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null } | null }> | null } | null } };

export type Create_ContractMutationVariables = Exact<{
  AccuserRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccusedRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccuserNationality?: InputMaybe<Scalars['String']['input']>;
  ContractType?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  CircularNumber?: InputMaybe<Scalars['String']['input']>;
  CircularDate?: InputMaybe<Scalars['Date']['input']>;
  ContractSubject?: InputMaybe<Scalars['String']['input']>;
  ContractNumber?: InputMaybe<Scalars['String']['input']>;
  ContractDate?: InputMaybe<Scalars['Date']['input']>;
  InitialBudget?: InputMaybe<Scalars['Decimal']['input']>;
  InitialTimePeriod?: InputMaybe<Scalars['Float']['input']>;
  PriceListOfBasicUnitOfField?: InputMaybe<Scalars['String']['input']>;
  IsSpecialPriceListAttachedToContract?: InputMaybe<Scalars['String']['input']>;
  RecommendedCoefficient?: InputMaybe<Scalars['Float']['input']>;
  CoefficientType?: InputMaybe<Scalars['String']['input']>;
  AssigningType?: InputMaybe<Scalars['String']['input']>;
  DoesContainAdjustment?: InputMaybe<Scalars['String']['input']>;
  BaseIndexPeriod?: InputMaybe<Scalars['String']['input']>;
  OperationStartDateAccuser?: InputMaybe<Scalars['Date']['input']>;
  PhysicalProgressInArbitrationDateAccuser?: InputMaybe<Scalars['Int']['input']>;
  FinancialProgressInArbitrationDateAccuser?: InputMaybe<Scalars['Int']['input']>;
  ContractStatusInArbitration: Scalars['String']['input'];
  SupervisionDepartment?: InputMaybe<Scalars['String']['input']>;
  AuthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  UnauthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  AccusedDepartmentId?: InputMaybe<Scalars['String']['input']>;
  AccuserDepartmentId?: InputMaybe<Scalars['String']['input']>;
  Currency?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  generalConditionsFileName?: InputMaybe<Scalars['String']['input']>;
  ContractGeneralType?: InputMaybe<ContractGeneralType>;
  agreementFileName?: InputMaybe<Scalars['String']['input']>;
  privateTermsFileName?: InputMaybe<Scalars['String']['input']>;
  otherAttachmentFileName?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type Create_ContractMutation = { __typename?: 'Mutation', contract_addContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Contract_By_AccusedMutationVariables = Exact<{
  AccuserRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccusedRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccuserNationality?: InputMaybe<Scalars['String']['input']>;
  ContractType?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  CircularNumber?: InputMaybe<Scalars['String']['input']>;
  CircularDate?: InputMaybe<Scalars['Date']['input']>;
  ContractSubject?: InputMaybe<Scalars['String']['input']>;
  ContractNumber?: InputMaybe<Scalars['String']['input']>;
  ContractDate?: InputMaybe<Scalars['Date']['input']>;
  InitialBudget?: InputMaybe<Scalars['Decimal']['input']>;
  InitialTimePeriod?: InputMaybe<Scalars['Float']['input']>;
  PriceListOfBasicUnitOfField?: InputMaybe<Scalars['String']['input']>;
  IsSpecialPriceListAttachedToContract?: InputMaybe<Scalars['String']['input']>;
  RecommendedCoefficient?: InputMaybe<Scalars['Float']['input']>;
  CoefficientType?: InputMaybe<Scalars['String']['input']>;
  AssigningType?: InputMaybe<Scalars['String']['input']>;
  DoesContainAdjustment?: InputMaybe<Scalars['String']['input']>;
  BaseIndexPeriod?: InputMaybe<Scalars['String']['input']>;
  OperationStartDateAccuser?: InputMaybe<Scalars['Date']['input']>;
  PhysicalProgressInArbitrationDateAccuser?: InputMaybe<Scalars['Int']['input']>;
  FinancialProgressInArbitrationDateAccuser?: InputMaybe<Scalars['Int']['input']>;
  ContractStatusInArbitration: Scalars['String']['input'];
  SupervisionDepartment?: InputMaybe<Scalars['String']['input']>;
  AuthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  UnauthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  Currency?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccused?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  generalConditionsFileName?: InputMaybe<Scalars['String']['input']>;
  ContractGeneralType?: InputMaybe<ContractGeneralType>;
  agreementFileName?: InputMaybe<Scalars['String']['input']>;
  privateTermsFileName?: InputMaybe<Scalars['String']['input']>;
  otherAttachmentFileName?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type Update_Contract_By_AccusedMutation = { __typename?: 'Mutation', contract_updateContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Contract_By_AccuserMutationVariables = Exact<{
  AccuserRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccusedRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccuserNationality?: InputMaybe<Scalars['String']['input']>;
  ContractType?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  CircularNumber?: InputMaybe<Scalars['String']['input']>;
  CircularDate?: InputMaybe<Scalars['Date']['input']>;
  ContractSubject?: InputMaybe<Scalars['String']['input']>;
  ContractNumber?: InputMaybe<Scalars['String']['input']>;
  ContractDate?: InputMaybe<Scalars['Date']['input']>;
  InitialBudget?: InputMaybe<Scalars['Decimal']['input']>;
  InitialTimePeriod?: InputMaybe<Scalars['Float']['input']>;
  PriceListOfBasicUnitOfField?: InputMaybe<Scalars['String']['input']>;
  IsSpecialPriceListAttachedToContract?: InputMaybe<Scalars['String']['input']>;
  RecommendedCoefficient?: InputMaybe<Scalars['Float']['input']>;
  CoefficientType?: InputMaybe<Scalars['String']['input']>;
  AssigningType?: InputMaybe<Scalars['String']['input']>;
  DoesContainAdjustment?: InputMaybe<Scalars['String']['input']>;
  BaseIndexPeriod?: InputMaybe<Scalars['String']['input']>;
  OperationStartDateAccuser?: InputMaybe<Scalars['Date']['input']>;
  PhysicalProgressInArbitrationDateAccuser?: InputMaybe<Scalars['Int']['input']>;
  FinancialProgressInArbitrationDateAccuser?: InputMaybe<Scalars['Int']['input']>;
  ContractStatusInArbitration: Scalars['String']['input'];
  SupervisionDepartment?: InputMaybe<Scalars['String']['input']>;
  AuthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  UnauthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  AccusedDepartmentId?: InputMaybe<Scalars['String']['input']>;
  AccuserDepartmentId?: InputMaybe<Scalars['String']['input']>;
  Currency?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  generalConditionsFileName?: InputMaybe<Scalars['String']['input']>;
  ContractGeneralType?: InputMaybe<ContractGeneralType>;
  agreementFileName?: InputMaybe<Scalars['String']['input']>;
  privateTermsFileName?: InputMaybe<Scalars['String']['input']>;
  otherAttachmentFileName?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type Update_Contract_By_AccuserMutation = { __typename?: 'Mutation', contract_updateContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Contract_By_ExpertMutationVariables = Exact<{
  isExecutive: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
}>;


export type Update_Contract_By_ExpertMutation = { __typename?: 'Mutation', contract_updateContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number, isExecutiveByAccused?: boolean | null, isExecutiveByAccuser?: boolean | null, isExecutiveByExpert?: boolean | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type DeleteContractMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteContractMutation = { __typename?: 'Mutation', contract_deleteContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContractsQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null }> | null } | null } };

export type GetContractQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetContractQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', status?: any | null, result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, accuserNationality?: string | null, accusedNationality?: string | null, accuserRelatedPeopleByAccuser?: string | null, accuserRelatedPeopleByAccused?: string | null, accusedRelatedPeopleByAccuser?: string | null, accusedRelatedPeopleByAccused?: string | null, contractTypeByAccused?: Array<string> | null, contractTypeByAccuser?: Array<string> | null, otherContractTypeByAccused?: string | null, otherContractTypeByAccuser?: string | null, circularNumberByAccused?: string | null, circularNumberByAccuser?: string | null, circularDateByAccused?: any | null, circularDateByAccuser?: any | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null, contractNumberByAccused?: string | null, contractNumberByAccuser?: string | null, contractDateByAccused?: any | null, contractDateByAccuser?: any | null, initialBudgetByAccused?: any | null, initialBudgetByAccuser?: any | null, initialTimePeriodByAccused?: number | null, initialTimePeriodByAccuser?: number | null, priceListOfBasicUnitOfFieldByAccused?: string | null, priceListOfBasicUnitOfFieldByAccuser?: string | null, isSpecialPriceListAttachedToContractByAccused?: string | null, isSpecialPriceListAttachedToContractByAccuser?: string | null, recommendedCoefficientByAccused?: number | null, recommendedCoefficientByAccuser?: number | null, coefficientTypeByAccused?: string | null, coefficientTypeByAccuser?: string | null, assigningTypeByAccused?: string | null, assigningTypeByAccuser?: string | null, doesContainAdjustmentByAccused?: string | null, doesContainAdjustmentByAccuser?: string | null, baseIndexPeriodByAccused?: string | null, baseIndexPeriodByAccuser?: string | null, operationStartDateByAccused?: any | null, operationStartDateByAccuser?: any | null, physicalProgressInArbitrationDateByAccused?: number | null, physicalProgressInArbitrationDateByAccuser?: number | null, financialProgressInArbitrationDateByAccused?: number | null, financialProgressInArbitrationDateByAccuser?: number | null, contractStatusAndDateInArbitrationByAccused?: string | null, contractStatusAndDateInArbitrationByAccuser?: string | null, supervisionDepartmentByAccused?: string | null, supervisionDepartmentByAccuser?: string | null, authorizedDelaysByAccused?: number | null, authorizedDelaysByAccuser?: number | null, unauthorizedDelaysByAccused?: number | null, unauthorizedDelaysByAccuser?: number | null, isExecutiveByAccused?: boolean | null, isExecutiveByAccuser?: boolean | null, isExecutiveByExpert?: boolean | null, fileNamesByAccused?: Array<string> | null, fileNamesByAccuser?: Array<string> | null, currencyByAccused?: string | null, currencyByAccuser?: string | null, generalConditionsFileNameByAccuser?: string | null, generalConditionsFileNameByAccused?: string | null, contractGeneralTypeByAccused?: ContractGeneralType | null, contractGeneralTypeByAccuser?: ContractGeneralType | null, sourceOfFundingTitle?: string | null }> | null } | null } };

export type GetPublicContractsQueryVariables = Exact<{
  filter?: InputMaybe<PublicContractFilterInput>;
  order?: InputMaybe<Array<PublicContractSortInput> | PublicContractSortInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPublicContractsQuery = { __typename?: 'Query', publicContract_getPublicContracts: { __typename?: 'ListResponseBaseOfPublicContract', status?: any | null, result?: { __typename?: 'PublicContractCollectionSegment', totalCount: number, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean }, items?: Array<{ __typename?: 'PublicContract', guid?: any | null, fullName?: string | null, executiveTitle?: string | null, nationalCode?: string | null, id: number, isDeleted: boolean, createdDate: any, lastModifiedDate?: any | null, contractID?: string | null, contractSubject?: string | null, generalConditionTitle?: string | null, sourceOfFundingTitle?: string | null, city?: string | null, agreeAmountRial?: any | null, agreeDate: any, jobReferenceTitle?: string | null, contractCategoryTitle?: string | null }> | null } | null } };

export type SetCouncilListMutationMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type SetCouncilListMutationMutation = { __typename?: 'Mutation', complaint_setInCouncilList: { __typename?: 'ResponseBaseOfSetInCouncilListResponseDto', result?: { __typename?: 'SetInCouncilListResponseDto', fileNames: Array<string>, result: Array<{ __typename?: 'KeyValuePairOfInt32AndBoolean', key: number, value: boolean }> } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetChildrenOfParentQueryVariables = Exact<{
  parentType: HandlingType;
}>;


export type GetChildrenOfParentQuery = { __typename?: 'Query', user_getChildrenOfParent: { __typename?: 'ResponseBaseOfListOfUser', result?: Array<{ __typename?: 'User', fullName: string, parentId?: string | null, id?: string | null } | null> | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type AddDocsRequestMutationMutationVariables = Exact<{
  input: DocumentRequestInput;
}>;


export type AddDocsRequestMutationMutation = { __typename?: 'Mutation', documentRequest_addDocumentRequest: { __typename?: 'ResponseBaseOfDocumentRequest', result?: { __typename?: 'DocumentRequest', userId: string, complaintId: number, requestedDocumentName: string, requestedDocumentFileNameAccuser?: string | null, requestedDocumentFileNameAccused?: string | null, id: number } | null } };

export type DeleteRequestedDocMutationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRequestedDocMutationMutation = { __typename?: 'Mutation', documentRequest_deleteDocumentRequest: { __typename?: 'ResponseBaseOfDocumentRequest', status: { __typename?: 'ResponseStatus', code: number, value: string }, result?: { __typename?: 'DocumentRequest', id: number } | null } };

export type GetReqestedDocsQueryQueryVariables = Exact<{
  filter?: InputMaybe<DocumentRequestFilterInput>;
  order?: InputMaybe<Array<DocumentRequestSortInput> | DocumentRequestSortInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetReqestedDocsQueryQuery = { __typename?: 'Query', documentRequest_getDocumentRequests: { __typename?: 'ListResponseBaseOfDocumentRequest', result?: { __typename?: 'DocumentRequestCollectionSegment', items?: Array<{ __typename?: 'DocumentRequest', complaintId: number, requestedDocumentName: string, requestedDocumentFileNameAccuser?: string | null, requestedDocumentFileNameAccused?: string | null, isDeleted: boolean, createdDate: any, id: number, userId: string, target?: TargetType | null }> | null } | null } };

export type UpdateRequestedDocMutationVariables = Exact<{
  input: DocumentRequestInput;
}>;


export type UpdateRequestedDocMutation = { __typename?: 'Mutation', documentRequest_updateDocumentRequest: { __typename?: 'ResponseBaseOfDocumentRequest', result?: { __typename?: 'DocumentRequest', userId: string, requestedDocumentName: string, requestedDocumentFileNameAccuser?: string | null, requestedDocumentFileNameAccused?: string | null, target?: TargetType | null, id: number, complaintId: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetFileQueryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFileQueryQuery = { __typename?: 'Query', fileGallery_getFile: { __typename?: 'ResponseBaseOfFileGallery', result?: { __typename?: 'FileGallery', id: number, name: string, createdDate: any, isDeleted: boolean, lastModifiedDate?: any | null, user?: { __typename?: 'User', fullName: string, id?: string | null } | null, complaintFiles?: Array<{ __typename?: 'ComplaintFile', fileId: number, title: string, description?: string | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetFileFullQueryVariables = Exact<{
  filter?: InputMaybe<FileGalleryFilterInput>;
  order?: InputMaybe<Array<FileGallerySortInput> | FileGallerySortInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetFileFullQuery = { __typename?: 'Query', fileGallery_getFiles: { __typename?: 'ListResponseBaseOfFileGallery', result?: { __typename?: 'FileGalleryCollectionSegment', items?: Array<{ __typename?: 'FileGallery', id: number, userId: string, name: string, user?: { __typename?: 'User', fullName: string, id?: string | null } | null }> | null } | null } };

export type GetUserProileQueryVariables = Exact<{
  nationalCode: Scalars['String']['input'];
}>;


export type GetUserProileQuery = { __typename?: 'Query', companyProfile_getCompanyProfiles: { __typename?: 'ListResponseBaseOfCompanyProfile', status?: any | null, result?: { __typename?: 'CompanyProfileCollectionSegment', items?: Array<{ __typename?: 'CompanyProfile', webAddress?: string | null, smsNumber?: string | null, activityEndDate?: any | null, id: number, isDeleted: boolean, createdDate: any, registerNumber?: string | null, registerDate?: any | null, postCode?: string | null, nationalCode?: string | null, name?: string | null, issuanceDate?: any | null, emailAddress?: string | null, addressDesc?: string | null }> | null } | null } };

export type Create_Installment_TableMutationVariables = Exact<{
  contractId?: InputMaybe<Scalars['Int']['input']>;
  paymentTotal?: InputMaybe<Scalars['Decimal']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  remainingPayment?: InputMaybe<Scalars['Decimal']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type Create_Installment_TableMutation = { __typename?: 'Mutation', installmentTable_addInstallmentTable: { __typename?: 'ResponseBaseOfInstallmentTable', result?: { __typename?: 'InstallmentTable', id: number, userId: string, contractId: number, paymentTotal: any } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Installment_TableMutationVariables = Exact<{
  contractId?: InputMaybe<Scalars['Int']['input']>;
  paymentTotal?: InputMaybe<Scalars['Decimal']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  remainingPayment: Scalars['Decimal']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
}>;


export type Update_Installment_TableMutation = { __typename?: 'Mutation', installmentTable_updateInstallmentTable: { __typename?: 'ResponseBaseOfInstallmentTable', result?: { __typename?: 'InstallmentTable', userId: string, contractId: number, paymentTotal: any } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Installment_TableMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Installment_TableMutation = { __typename?: 'Mutation', installmentTable_deleteInstallmentTable: { __typename?: 'ResponseBaseOfInstallmentTable', result?: { __typename?: 'InstallmentTable', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_InstallmentMutationVariables = Exact<{
  installmentTableId: Scalars['Int']['input'];
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type Create_InstallmentMutation = { __typename?: 'Mutation', installment_addInstallment: { __typename?: 'ResponseBaseOfInstallment', result?: { __typename?: 'Installment', id: number, amount: any, date: any, filledBy?: RegistrarType | null, title: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_InstallmentMutationVariables = Exact<{
  installmentTableId: Scalars['Int']['input'];
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  title?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
}>;


export type Update_InstallmentMutation = { __typename?: 'Mutation', installment_updateInstallment: { __typename?: 'ResponseBaseOfInstallment', result?: { __typename?: 'Installment', id: number, amount: any, date: any, filledBy?: RegistrarType | null, title: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_InstallmentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_InstallmentMutation = { __typename?: 'Mutation', installment_deleteInstallment: { __typename?: 'ResponseBaseOfInstallment', result?: { __typename?: 'Installment', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Installment_PartMutationVariables = Exact<{
  installmentId: Scalars['Int']['input'];
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
}>;


export type Create_Installment_PartMutation = { __typename?: 'Mutation', installmentPart_addInstallmentPart: { __typename?: 'ResponseBaseOfInstallmentPart', result?: { __typename?: 'InstallmentPart', id: number, amount: any, date: any, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Installment_PartMutationVariables = Exact<{
  installmentId: Scalars['Int']['input'];
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
  id: Scalars['Int']['input'];
}>;


export type Update_Installment_PartMutation = { __typename?: 'Mutation', installmentPart_updateInstallmentPart: { __typename?: 'ResponseBaseOfInstallmentPart', result?: { __typename?: 'InstallmentPart', id: number, amount: any, date: any, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Installment_PartMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Installment_PartMutation = { __typename?: 'Mutation', installmentPart_deleteInstallmentPart: { __typename?: 'ResponseBaseOfInstallmentPart', result?: { __typename?: 'InstallmentPart', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Adjustment_Statement_TableMutationVariables = Exact<{
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type Create_Adjustment_Statement_TableMutation = { __typename?: 'Mutation', adjustmentStatementTable_addAdjustmentStatementTable: { __typename?: 'ResponseBaseOfAdjustmentStatementTable', result?: { __typename?: 'AdjustmentStatementTable', id: number, contractId: number, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Adjustment_Statement_TableMutationVariables = Exact<{
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  userId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
}>;


export type Update_Adjustment_Statement_TableMutation = { __typename?: 'Mutation', adjustmentStatementTable_updateAdjustmentStatementTable: { __typename?: 'ResponseBaseOfAdjustmentStatementTable', result?: { __typename?: 'AdjustmentStatementTable', id: number, contractId: number, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Adjustment_Statement_TableMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Adjustment_Statement_TableMutation = { __typename?: 'Mutation', adjustmentStatementTable_deleteAdjustmentStatementTable: { __typename?: 'ResponseBaseOfAdjustmentStatementTable', result?: { __typename?: 'AdjustmentStatementTable', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Adjustment_StatementMutationVariables = Exact<{
  adjustmentStatementTableId: Scalars['Int']['input'];
  filledBy?: InputMaybe<RegistrarType>;
  title?: InputMaybe<Scalars['String']['input']>;
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
}>;


export type Create_Adjustment_StatementMutation = { __typename?: 'Mutation', adjustmentStatement_addAdjustmentStatement: { __typename?: 'ResponseBaseOfAdjustmentStatement', result?: { __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Adjustment_StatementMutationVariables = Exact<{
  adjustmentStatementTableId: Scalars['Int']['input'];
  filledBy?: InputMaybe<RegistrarType>;
  title?: InputMaybe<Scalars['String']['input']>;
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
}>;


export type Update_Adjustment_StatementMutation = { __typename?: 'Mutation', adjustmentStatement_updateAdjustmentStatement: { __typename?: 'ResponseBaseOfAdjustmentStatement', result?: { __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Adjustment_StatementMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Adjustment_StatementMutation = { __typename?: 'Mutation', adjustmentStatement_deleteAdjustmentStatement: { __typename?: 'ResponseBaseOfAdjustmentStatement', result?: { __typename?: 'AdjustmentStatement', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Adjustment_Statement_PartMutationVariables = Exact<{
  adjustmentStatementId: Scalars['Int']['input'];
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
}>;


export type Create_Adjustment_Statement_PartMutation = { __typename?: 'Mutation', adjustmentStatementPart_addAdjustmentStatementPart: { __typename?: 'ResponseBaseOfAdjustmentStatementPart', result?: { __typename?: 'AdjustmentStatementPart', id: number, adjustmentStatementId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Adjustment_Statement_PartMutationVariables = Exact<{
  adjustmentStatementId: Scalars['Int']['input'];
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id: Scalars['Int']['input'];
}>;


export type Update_Adjustment_Statement_PartMutation = { __typename?: 'Mutation', adjustmentStatementPart_updateAdjustmentStatementPart: { __typename?: 'ResponseBaseOfAdjustmentStatementPart', result?: { __typename?: 'AdjustmentStatementPart', id: number, adjustmentStatementId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Adjustment_Statement_PartMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Adjustment_Statement_PartMutation = { __typename?: 'Mutation', adjustmentStatementPart_deleteAdjustmentStatementPart: { __typename?: 'ResponseBaseOfAdjustmentStatementPart', result?: { __typename?: 'AdjustmentStatementPart', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Work_Condition_Statement_TableMutationVariables = Exact<{
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  userId?: InputMaybe<Scalars['String']['input']>;
  workConditionType?: InputMaybe<Scalars['String']['input']>;
}>;


export type Create_Work_Condition_Statement_TableMutation = { __typename?: 'Mutation', workConditionStatementTable_addWorkConditionStatementTable: { __typename?: 'ResponseBaseOfWorkConditionStatementTable', result?: { __typename?: 'WorkConditionStatementTable', id: number, contractId: number, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Work_Condition_Statement_TableMutationVariables = Exact<{
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  userId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
}>;


export type Update_Work_Condition_Statement_TableMutation = { __typename?: 'Mutation', workConditionStatementTable_updateWorkConditionStatementTable: { __typename?: 'ResponseBaseOfWorkConditionStatementTable', result?: { __typename?: 'WorkConditionStatementTable', id: number, contractId: number, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Work_Condition_Statement_TableMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Work_Condition_Statement_TableMutation = { __typename?: 'Mutation', workConditionStatementTable_deleteWorkConditionStatementTable: { __typename?: 'ResponseBaseOfWorkConditionStatementTable', result?: { __typename?: 'WorkConditionStatementTable', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Work_Condition_StatementMutationVariables = Exact<{
  workConditionStatementTableId: Scalars['Int']['input'];
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type Create_Work_Condition_StatementMutation = { __typename?: 'Mutation', workConditionStatement_addWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', workConditionStatementTableId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Work_Condition_StatementMutationVariables = Exact<{
  workConditionStatementTableId: Scalars['Int']['input'];
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id: Scalars['Int']['input'];
}>;


export type Update_Work_Condition_StatementMutation = { __typename?: 'Mutation', workConditionStatement_updateWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', workConditionStatementTableId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Work_Condition_StatementMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Work_Condition_StatementMutation = { __typename?: 'Mutation', workConditionStatement_deleteWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Create_Work_Condition_Statement_PartMutationVariables = Exact<{
  workConditionStatementId: Scalars['Int']['input'];
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
}>;


export type Create_Work_Condition_Statement_PartMutation = { __typename?: 'Mutation', workConditionStatementPart_addWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number, workConditionStatementId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Work_Condition_Statement_PartMutationVariables = Exact<{
  workConditionStatementId: Scalars['Int']['input'];
  amountApprovedByEmployer?: InputMaybe<Scalars['Decimal']['input']>;
  amountConfirmedByConsultant?: InputMaybe<Scalars['Decimal']['input']>;
  amountPaid?: InputMaybe<Scalars['Decimal']['input']>;
  amountProvidedByContractor?: InputMaybe<Scalars['Decimal']['input']>;
  dateApprovedByEmployer?: InputMaybe<Scalars['Date']['input']>;
  dateConfirmedByConsultant?: InputMaybe<Scalars['Date']['input']>;
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  dateProvidedByContractor?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id: Scalars['Int']['input'];
}>;


export type Update_Work_Condition_Statement_PartMutation = { __typename?: 'Mutation', workConditionStatementPart_updateWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number, workConditionStatementId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Delete_Work_Condition_Statement_PartMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_Work_Condition_Statement_PartMutation = { __typename?: 'Mutation', workConditionStatementPart_deleteWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetInstallmentTableQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetInstallmentTableQuery = { __typename?: 'Query', installmentTable_getInstallmentTable: { __typename?: 'ResponseBaseOfInstallmentTable', result?: { __typename?: 'InstallmentTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, paymentTotal: any, remainingPayment: any, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, installments?: Array<{ __typename?: 'Installment', installmentTableId: number, title: string, amount: any, date: any, filledBy?: RegistrarType | null, id: number, installmentParts?: Array<{ __typename?: 'InstallmentPart', amount: any, date: any, filledBy?: RegistrarType | null, id: number }> | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetInstallmentTablesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetInstallmentTablesQuery = { __typename?: 'Query', installmentTable_getInstallmentTables: { __typename?: 'ListResponseBaseOfInstallmentTable', status?: any | null, result?: { __typename?: 'InstallmentTableCollectionSegment', items?: Array<{ __typename?: 'InstallmentTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, paymentTotal: any, remainingPayment: any, filledBy?: RegistrarType | null, userId: string, isDeleted: boolean, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, installments?: Array<{ __typename?: 'Installment', installmentTableId: number, title: string, amount: any, date: any, filledBy?: RegistrarType | null, id: number, createdDate: any, isDeleted: boolean, installmentParts?: Array<{ __typename?: 'InstallmentPart', amount: any, date: any, filledBy?: RegistrarType | null, id: number }> | null }> | null }> | null } | null } };

export type GetInstallmentTablesFullQueryVariables = Exact<{
  where?: InputMaybe<InstallmentTableFilterInput>;
  order?: InputMaybe<Array<InstallmentTableSortInput> | InstallmentTableSortInput>;
}>;


export type GetInstallmentTablesFullQuery = { __typename?: 'Query', installmentTable_getInstallmentTables: { __typename?: 'ListResponseBaseOfInstallmentTable', status?: any | null, result?: { __typename?: 'InstallmentTableCollectionSegment', items?: Array<{ __typename?: 'InstallmentTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, paymentTotal: any, remainingPayment: any, filledBy?: RegistrarType | null, userId: string, isDeleted: boolean, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, installments?: Array<{ __typename?: 'Installment', installmentTableId: number, title: string, amount: any, date: any, filledBy?: RegistrarType | null, id: number, installmentParts?: Array<{ __typename?: 'InstallmentPart', amount: any, date: any, filledBy?: RegistrarType | null, id: number }> | null }> | null }> | null } | null } };

export type GetInstallmentQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetInstallmentQuery = { __typename?: 'Query', installment_getInstallment: { __typename?: 'ResponseBaseOfInstallment', result?: { __typename?: 'Installment', id: number, createdDate: any, lastModifiedDate?: any | null, installmentTableId: number, title: string, amount: any, date: any, filledBy?: RegistrarType | null, installmentParts?: Array<{ __typename?: 'InstallmentPart', amount: any, date: any, filledBy?: RegistrarType | null, id: number }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetInstallmentPartQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetInstallmentPartQuery = { __typename?: 'Query', installmentPart_getInstallmentPart: { __typename?: 'ResponseBaseOfInstallmentPart', result?: { __typename?: 'InstallmentPart', id: number, createdDate: any, lastModifiedDate?: any | null, installmentId: number, amount: any, date: any, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetAdjustmentStatementTableQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetAdjustmentStatementTableQuery = { __typename?: 'Query', adjustmentStatementTable_getAdjustmentStatementTable: { __typename?: 'ResponseBaseOfAdjustmentStatementTable', result?: { __typename?: 'AdjustmentStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, adjustmentStatements?: Array<{ __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetAdjustmentStatementTablesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetAdjustmentStatementTablesQuery = { __typename?: 'Query', adjustmentStatementTable_getAdjustmentStatementTables: { __typename?: 'ListResponseBaseOfAdjustmentStatementTable', status?: any | null, result?: { __typename?: 'AdjustmentStatementTableCollectionSegment', items?: Array<{ __typename?: 'AdjustmentStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, adjustmentStatements?: Array<{ __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null }> | null } | null } };

export type GetAdjustmentStatementTablesFullQueryVariables = Exact<{
  where?: InputMaybe<AdjustmentStatementTableFilterInput>;
  order?: InputMaybe<Array<AdjustmentStatementTableSortInput> | AdjustmentStatementTableSortInput>;
}>;


export type GetAdjustmentStatementTablesFullQuery = { __typename?: 'Query', adjustmentStatementTable_getAdjustmentStatementTables: { __typename?: 'ListResponseBaseOfAdjustmentStatementTable', status?: any | null, result?: { __typename?: 'AdjustmentStatementTableCollectionSegment', items?: Array<{ __typename?: 'AdjustmentStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, adjustmentStatements?: Array<{ __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null }> | null } | null } };

export type GetAdjustmentStatementsFullQueryVariables = Exact<{
  filter?: InputMaybe<AdjustmentStatementFilterInput>;
  orderBy?: InputMaybe<Array<AdjustmentStatementSortInput> | AdjustmentStatementSortInput>;
}>;


export type GetAdjustmentStatementsFullQuery = { __typename?: 'Query', adjustmentStatement_getAdjustmentStatements: { __typename?: 'ListResponseBaseOfAdjustmentStatement', status?: any | null, result?: { __typename?: 'AdjustmentStatementCollectionSegment', items?: Array<{ __typename?: 'AdjustmentStatement', id: number, createdDate: any, lastModifiedDate?: any | null, adjustmentStatementTableId: number, filledBy?: RegistrarType | null, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, title: string, isDeleted: boolean, adjustmentStatementTable?: { __typename?: 'AdjustmentStatementTable', contractId: number, userId: string, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null } | null }> | null } | null } };

export type GetAdjustmentStatementQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetAdjustmentStatementQuery = { __typename?: 'Query', adjustmentStatement_getAdjustmentStatement: { __typename?: 'ResponseBaseOfAdjustmentStatement', result?: { __typename?: 'AdjustmentStatement', id: number, createdDate: any, lastModifiedDate?: any | null, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string, adjustmentStatementParts?: Array<{ __typename?: 'AdjustmentStatementPart', id: number, createdDate: any, lastModifiedDate?: any | null, adjustmentStatementId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetAdjustmentStatementPartQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetAdjustmentStatementPartQuery = { __typename?: 'Query', adjustmentStatementPart_getAdjustmentStatementPart: { __typename?: 'ResponseBaseOfAdjustmentStatementPart', result?: { __typename?: 'AdjustmentStatementPart', id: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetWorkConditionStatementTableQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementTableQuery = { __typename?: 'Query', workConditionStatementTable_getWorkConditionStatementTable: { __typename?: 'ResponseBaseOfWorkConditionStatementTable', result?: { __typename?: 'WorkConditionStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, workConditionStatements?: Array<{ __typename?: 'WorkConditionStatement', id: number, workConditionStatementTableId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null, title?: string | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetWorkConditionStatementTableByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementTableByIdQuery = { __typename?: 'Query', workConditionStatementTable_getWorkConditionStatementTables: { __typename?: 'ListResponseBaseOfWorkConditionStatementTable', status?: any | null, result?: { __typename?: 'WorkConditionStatementTableCollectionSegment', items?: Array<{ __typename?: 'WorkConditionStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, workConditionStatements?: Array<{ __typename?: 'WorkConditionStatement', id: number, workConditionStatementTableId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null, title?: string | null }> | null }> | null } | null } };

export type GetWorkConditionStatementTablesFullQueryVariables = Exact<{
  where?: InputMaybe<WorkConditionStatementTableFilterInput>;
}>;


export type GetWorkConditionStatementTablesFullQuery = { __typename?: 'Query', workConditionStatementTable_getWorkConditionStatementTables: { __typename?: 'ListResponseBaseOfWorkConditionStatementTable', status?: any | null, result?: { __typename?: 'WorkConditionStatementTableCollectionSegment', items?: Array<{ __typename?: 'WorkConditionStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, workConditionStatements?: Array<{ __typename?: 'WorkConditionStatement', id: number, workConditionStatementTableId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null, title?: string | null }> | null }> | null } | null } };

export type GetWorkConditionStatementsFullQueryVariables = Exact<{
  filter?: InputMaybe<WorkConditionStatementFilterInput>;
  orderBy?: InputMaybe<Array<WorkConditionStatementSortInput> | WorkConditionStatementSortInput>;
}>;


export type GetWorkConditionStatementsFullQuery = { __typename?: 'Query', workConditionStatement_getWorkConditionStatements: { __typename?: 'ListResponseBaseOfWorkConditionStatement', status?: any | null, result?: { __typename?: 'WorkConditionStatementCollectionSegment', items?: Array<{ __typename?: 'WorkConditionStatement', id: number, createdDate: any, lastModifiedDate?: any | null, workConditionStatementTableId: number, filledBy?: RegistrarType | null, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, title?: string | null, isDeleted: boolean, workConditionStatementTable?: { __typename?: 'WorkConditionStatementTable', contractId: number, userId: string, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null } | null }> | null } | null } };

export type GetWorkConditionStatementQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementQuery = { __typename?: 'Query', workConditionStatement_getWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', id: number, createdDate: any, lastModifiedDate?: any | null, workConditionStatementTableId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null, title?: string | null, workConditionStatementParts?: Array<{ __typename?: 'WorkConditionStatementPart', id: number, createdDate: any, lastModifiedDate?: any | null, workConditionStatementId: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetWorkConditionStatementPartQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementPartQuery = { __typename?: 'Query', workConditionStatementPart_getWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number, amountApprovedByEmployer?: any | null, amountConfirmedByConsultant?: any | null, amountPaid: any, amountProvidedByContractor?: any | null, dateApprovedByEmployer?: any | null, dateConfirmedByConsultant?: any | null, datePaid: any, dateProvidedByContractor?: any | null, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type LoginUserMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', user_signIn: { __typename?: 'ResponseBaseOfUserTokenDto', result?: { __typename?: 'UserTokenDto', token?: string | null, expireDate?: any | null, user?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, parentId?: string | null, userType: UserType, isJury: boolean, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type ForgetPasswordMutationMutationVariables = Exact<{
  input: ForgotPasswordDtoInput;
}>;


export type ForgetPasswordMutationMutation = { __typename?: 'Mutation', user_forgotPassword: { __typename?: 'ResponseStatus', code: number, value: string } };

export type UserSignInOtpMutationMutationVariables = Exact<{
  input: LoginOtpDtoInput;
}>;


export type UserSignInOtpMutationMutation = { __typename?: 'Mutation', user_signInOTP: { __typename?: 'ResponseBaseOfUserTokenDto', result?: { __typename?: 'UserTokenDto', token?: string | null, expireDate?: any | null, user?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, parentId?: string | null, isJury: boolean, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type SentOtpMutationMutationVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
}>;


export type SentOtpMutationMutation = { __typename?: 'Mutation', user_oneTimePassword: { __typename?: 'ResponseStatus', code: number, value: string } };

export type UserSignUpMutationVariables = Exact<{
  confirmPassword: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  userType: UserType;
  parentId?: InputMaybe<Scalars['String']['input']>;
  isJury?: Scalars['Boolean']['input'];
}>;


export type UserSignUpMutation = { __typename?: 'Mutation', user_signUp: { __typename: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, isJury: boolean, parentId?: string | null, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type SendCallToMeetingSmsMutationVariables = Exact<{
  input: SendInviteToMeetingSmsDtoInput;
}>;


export type SendCallToMeetingSmsMutation = { __typename?: 'Mutation', sms_sendInviteToMeetingSMS: { __typename?: 'ResponseStatus', code: number, value: string } };

export type GenarateDateOfBirthMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GenarateDateOfBirthMutation = { __typename?: 'Mutation', test_convertToGregorian: any };

export type UserDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserDeleteMutation = { __typename?: 'Mutation', user_deleteUser: { __typename?: 'ResponseStatus', code: number, value: string } };

export type UserUpdateMutationVariables = Exact<{
  fullName: Scalars['String']['input'];
  nationalCode: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
  birthDate: Scalars['Date']['input'];
  userType: UserType;
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', user_updateProfile: { __typename?: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, isJury: boolean } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UserUpdatePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type UserUpdatePasswordMutation = { __typename?: 'Mutation', user_changePassword: { __typename?: 'ResponseStatus', code: number, value: string } };

export type AddRoleToUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  roleType: RoleType;
}>;


export type AddRoleToUserMutation = { __typename?: 'Mutation', userRole_addUserToRole: { __typename: 'ResponseStatus', code: number, value: string } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetUsersWithParentIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUsersWithParentIdQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user_getUser: { __typename?: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null } | null } | null } | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Get_User_QueriableQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_User_QueriableQuery = { __typename?: 'Query', user_getUserQueryable: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null } | null } | null } | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetAllOganizationUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOganizationUsersQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null, userType: UserType }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type Get_Organization_Individual_Users_With_RoleQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type Get_Organization_Individual_Users_With_RoleQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetUserWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<UserFilterInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<UserSortInput> | UserSortInput>;
}>;


export type GetUserWithFilterQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type TokenCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenCheckQuery = { __typename?: 'Query', user_isTokenValid: boolean };

export type GetArgumentQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetArgumentQuery = { __typename?: 'Query', complaintArgument_getComplaintArgument: { __typename?: 'ResponseBaseOfComplaintArgument', result?: { __typename?: 'ComplaintArgument', id: number, summary?: string | null, description?: string | null, suggestedAmount: any, accusedResponse?: string | null, complaintId: number, councilOpinion?: string | null, netCouncilApprovedAmount?: any | null, grossCouncilApprovedAmount?: any | null, accuserAnswerToAccusedResponse?: string | null, accuserAnswerToAccusedResponseFileName?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, netApprovedAmount?: any | null, grossApprovedAmount?: any | null, financialSituation?: string | null } | null } };


export const AddNonFeasibleArgumentDocument = gql`
    mutation AddNonFeasibleArgument($input: ComplaintNonFeasibleArgumentInput!) {
  complaintnonfeasibleargument_addComplaintNonFeasibleArgument(input: $input) {
    result {
      userId
      complaintId
      summary
      description
      financialSituation
      id
    }
    status {
      code
      value
    }
  }
}
    `;
export type AddNonFeasibleArgumentMutationFn = Apollo.MutationFunction<AddNonFeasibleArgumentMutation, AddNonFeasibleArgumentMutationVariables>;

/**
 * __useAddNonFeasibleArgumentMutation__
 *
 * To run a mutation, you first call `useAddNonFeasibleArgumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNonFeasibleArgumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNonFeasibleArgumentMutation, { data, loading, error }] = useAddNonFeasibleArgumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddNonFeasibleArgumentMutation(baseOptions?: Apollo.MutationHookOptions<AddNonFeasibleArgumentMutation, AddNonFeasibleArgumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNonFeasibleArgumentMutation, AddNonFeasibleArgumentMutationVariables>(AddNonFeasibleArgumentDocument, options);
      }
export type AddNonFeasibleArgumentMutationHookResult = ReturnType<typeof useAddNonFeasibleArgumentMutation>;
export type AddNonFeasibleArgumentMutationResult = Apollo.MutationResult<AddNonFeasibleArgumentMutation>;
export type AddNonFeasibleArgumentMutationOptions = Apollo.BaseMutationOptions<AddNonFeasibleArgumentMutation, AddNonFeasibleArgumentMutationVariables>;
export const UpdateNonFeasibleArgumentDocument = gql`
    mutation UpdateNonFeasibleArgument($input: ComplaintNonFeasibleArgumentInput!) {
  complaintnonfeasibleargument_updateComplaintNonFeasibleArgument(input: $input) {
    result {
      userId
      complaintId
      summary
      description
      financialSituation
      id
    }
    status {
      code
      value
    }
  }
}
    `;
export type UpdateNonFeasibleArgumentMutationFn = Apollo.MutationFunction<UpdateNonFeasibleArgumentMutation, UpdateNonFeasibleArgumentMutationVariables>;

/**
 * __useUpdateNonFeasibleArgumentMutation__
 *
 * To run a mutation, you first call `useUpdateNonFeasibleArgumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNonFeasibleArgumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNonFeasibleArgumentMutation, { data, loading, error }] = useUpdateNonFeasibleArgumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNonFeasibleArgumentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNonFeasibleArgumentMutation, UpdateNonFeasibleArgumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNonFeasibleArgumentMutation, UpdateNonFeasibleArgumentMutationVariables>(UpdateNonFeasibleArgumentDocument, options);
      }
export type UpdateNonFeasibleArgumentMutationHookResult = ReturnType<typeof useUpdateNonFeasibleArgumentMutation>;
export type UpdateNonFeasibleArgumentMutationResult = Apollo.MutationResult<UpdateNonFeasibleArgumentMutation>;
export type UpdateNonFeasibleArgumentMutationOptions = Apollo.BaseMutationOptions<UpdateNonFeasibleArgumentMutation, UpdateNonFeasibleArgumentMutationVariables>;
export const DeleteNonFeasibleArgumentDocument = gql`
    mutation DeleteNonFeasibleArgument($input: Int!) {
  complaintnonfeasibleargument_deleteComplaintNonFeasibleArgument(
    entityId: $input
  ) {
    result {
      userId
      complaintId
      summary
      description
      financialSituation
      id
    }
    status {
      code
      value
    }
  }
}
    `;
export type DeleteNonFeasibleArgumentMutationFn = Apollo.MutationFunction<DeleteNonFeasibleArgumentMutation, DeleteNonFeasibleArgumentMutationVariables>;

/**
 * __useDeleteNonFeasibleArgumentMutation__
 *
 * To run a mutation, you first call `useDeleteNonFeasibleArgumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNonFeasibleArgumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNonFeasibleArgumentMutation, { data, loading, error }] = useDeleteNonFeasibleArgumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteNonFeasibleArgumentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNonFeasibleArgumentMutation, DeleteNonFeasibleArgumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNonFeasibleArgumentMutation, DeleteNonFeasibleArgumentMutationVariables>(DeleteNonFeasibleArgumentDocument, options);
      }
export type DeleteNonFeasibleArgumentMutationHookResult = ReturnType<typeof useDeleteNonFeasibleArgumentMutation>;
export type DeleteNonFeasibleArgumentMutationResult = Apollo.MutationResult<DeleteNonFeasibleArgumentMutation>;
export type DeleteNonFeasibleArgumentMutationOptions = Apollo.BaseMutationOptions<DeleteNonFeasibleArgumentMutation, DeleteNonFeasibleArgumentMutationVariables>;
export const GetNonFeasibleArgumentsDocument = gql`
    query GetNonFeasibleArguments($filer: ComplaintNonFeasibleArgumentFilterInput, $order: [ComplaintNonFeasibleArgumentSortInput!]) {
  complaintNonFeasibleArgument_getComplaintNonFeasibleArguments {
    result(where: $filer, order: $order) {
      items {
        userId
        complaintId
        summary
        description
        financialSituation
        id
        isDeleted
        createdDate
        userId
        financialStatusFileName
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
    status
  }
}
    `;

/**
 * __useGetNonFeasibleArgumentsQuery__
 *
 * To run a query within a React component, call `useGetNonFeasibleArgumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNonFeasibleArgumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNonFeasibleArgumentsQuery({
 *   variables: {
 *      filer: // value for 'filer'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetNonFeasibleArgumentsQuery(baseOptions?: Apollo.QueryHookOptions<GetNonFeasibleArgumentsQuery, GetNonFeasibleArgumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNonFeasibleArgumentsQuery, GetNonFeasibleArgumentsQueryVariables>(GetNonFeasibleArgumentsDocument, options);
      }
export function useGetNonFeasibleArgumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNonFeasibleArgumentsQuery, GetNonFeasibleArgumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNonFeasibleArgumentsQuery, GetNonFeasibleArgumentsQueryVariables>(GetNonFeasibleArgumentsDocument, options);
        }
export type GetNonFeasibleArgumentsQueryHookResult = ReturnType<typeof useGetNonFeasibleArgumentsQuery>;
export type GetNonFeasibleArgumentsLazyQueryHookResult = ReturnType<typeof useGetNonFeasibleArgumentsLazyQuery>;
export type GetNonFeasibleArgumentsQueryResult = Apollo.QueryResult<GetNonFeasibleArgumentsQuery, GetNonFeasibleArgumentsQueryVariables>;
export const UpdateComplaintStateDocument = gql`
    mutation updateComplaintState($input: ComplaintStateInput!) {
  complaintState_updateComplaintState(input: $input) {
    result {
      id
      englishName
      persianName
      state
      createdDate
      isDeleted
      priority
    }
  }
}
    `;
export type UpdateComplaintStateMutationFn = Apollo.MutationFunction<UpdateComplaintStateMutation, UpdateComplaintStateMutationVariables>;

/**
 * __useUpdateComplaintStateMutation__
 *
 * To run a mutation, you first call `useUpdateComplaintStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComplaintStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComplaintStateMutation, { data, loading, error }] = useUpdateComplaintStateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateComplaintStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateComplaintStateMutation, UpdateComplaintStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateComplaintStateMutation, UpdateComplaintStateMutationVariables>(UpdateComplaintStateDocument, options);
      }
export type UpdateComplaintStateMutationHookResult = ReturnType<typeof useUpdateComplaintStateMutation>;
export type UpdateComplaintStateMutationResult = Apollo.MutationResult<UpdateComplaintStateMutation>;
export type UpdateComplaintStateMutationOptions = Apollo.BaseMutationOptions<UpdateComplaintStateMutation, UpdateComplaintStateMutationVariables>;
export const GetComplaintStatesDocument = gql`
    query getComplaintStates($filter: ComplaintStateFilterInput, $order: [ComplaintStateSortInput!], $take: Int, $skip: Int) {
  complaintState_getComplaintStates {
    result(where: $filter, order: $order, take: $take, skip: $skip) {
      items {
        id
        englishName
        persianName
        state
        createdDate
        isDeleted
        priority
      }
    }
  }
}
    `;

/**
 * __useGetComplaintStatesQuery__
 *
 * To run a query within a React component, call `useGetComplaintStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComplaintStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComplaintStatesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      order: // value for 'order'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetComplaintStatesQuery(baseOptions?: Apollo.QueryHookOptions<GetComplaintStatesQuery, GetComplaintStatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComplaintStatesQuery, GetComplaintStatesQueryVariables>(GetComplaintStatesDocument, options);
      }
export function useGetComplaintStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComplaintStatesQuery, GetComplaintStatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComplaintStatesQuery, GetComplaintStatesQueryVariables>(GetComplaintStatesDocument, options);
        }
export type GetComplaintStatesQueryHookResult = ReturnType<typeof useGetComplaintStatesQuery>;
export type GetComplaintStatesLazyQueryHookResult = ReturnType<typeof useGetComplaintStatesLazyQuery>;
export type GetComplaintStatesQueryResult = Apollo.QueryResult<GetComplaintStatesQuery, GetComplaintStatesQueryVariables>;
export const CreateComplaintDocument = gql`
    mutation CreateComplaint($contractId: Int!, $userId: String!, $complaintStateId: Int) {
  complaint_addComplaint(
    input: {contractId: $contractId, userId: $userId, complaintStateId: $complaintStateId}
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
export type CreateComplaintMutationFn = Apollo.MutationFunction<CreateComplaintMutation, CreateComplaintMutationVariables>;

/**
 * __useCreateComplaintMutation__
 *
 * To run a mutation, you first call `useCreateComplaintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComplaintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComplaintMutation, { data, loading, error }] = useCreateComplaintMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      userId: // value for 'userId'
 *      complaintStateId: // value for 'complaintStateId'
 *   },
 * });
 */
export function useCreateComplaintMutation(baseOptions?: Apollo.MutationHookOptions<CreateComplaintMutation, CreateComplaintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateComplaintMutation, CreateComplaintMutationVariables>(CreateComplaintDocument, options);
      }
export type CreateComplaintMutationHookResult = ReturnType<typeof useCreateComplaintMutation>;
export type CreateComplaintMutationResult = Apollo.MutationResult<CreateComplaintMutation>;
export type CreateComplaintMutationOptions = Apollo.BaseMutationOptions<CreateComplaintMutation, CreateComplaintMutationVariables>;
export const UpdateComplaintDocument = gql`
    mutation UpdateComplaint($id: Int!, $assignedUserId: String, $contractId: Int, $userId: String, $complaintStateId: Int, $isApprovedByChief: Boolean) {
  complaint_updateComplaint(
    input: {id: $id, assignedUserId: $assignedUserId, contractId: $contractId, userId: $userId, complaintStateId: $complaintStateId, isApprovedByChief: $isApprovedByChief}
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
export type UpdateComplaintMutationFn = Apollo.MutationFunction<UpdateComplaintMutation, UpdateComplaintMutationVariables>;

/**
 * __useUpdateComplaintMutation__
 *
 * To run a mutation, you first call `useUpdateComplaintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComplaintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComplaintMutation, { data, loading, error }] = useUpdateComplaintMutation({
 *   variables: {
 *      id: // value for 'id'
 *      assignedUserId: // value for 'assignedUserId'
 *      contractId: // value for 'contractId'
 *      userId: // value for 'userId'
 *      complaintStateId: // value for 'complaintStateId'
 *      isApprovedByChief: // value for 'isApprovedByChief'
 *   },
 * });
 */
export function useUpdateComplaintMutation(baseOptions?: Apollo.MutationHookOptions<UpdateComplaintMutation, UpdateComplaintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateComplaintMutation, UpdateComplaintMutationVariables>(UpdateComplaintDocument, options);
      }
export type UpdateComplaintMutationHookResult = ReturnType<typeof useUpdateComplaintMutation>;
export type UpdateComplaintMutationResult = Apollo.MutationResult<UpdateComplaintMutation>;
export type UpdateComplaintMutationOptions = Apollo.BaseMutationOptions<UpdateComplaintMutation, UpdateComplaintMutationVariables>;
export const UpdateComplaintFullDocument = gql`
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
export type UpdateComplaintFullMutationFn = Apollo.MutationFunction<UpdateComplaintFullMutation, UpdateComplaintFullMutationVariables>;

/**
 * __useUpdateComplaintFullMutation__
 *
 * To run a mutation, you first call `useUpdateComplaintFullMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComplaintFullMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComplaintFullMutation, { data, loading, error }] = useUpdateComplaintFullMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateComplaintFullMutation(baseOptions?: Apollo.MutationHookOptions<UpdateComplaintFullMutation, UpdateComplaintFullMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateComplaintFullMutation, UpdateComplaintFullMutationVariables>(UpdateComplaintFullDocument, options);
      }
export type UpdateComplaintFullMutationHookResult = ReturnType<typeof useUpdateComplaintFullMutation>;
export type UpdateComplaintFullMutationResult = Apollo.MutationResult<UpdateComplaintFullMutation>;
export type UpdateComplaintFullMutationOptions = Apollo.BaseMutationOptions<UpdateComplaintFullMutation, UpdateComplaintFullMutationVariables>;
export const CreateArbitrationTermsFormDocument = gql`
    mutation CreateArbitrationTermsForm($complaintId: Int!, $userId: String!, $filledBy: RegistrarType!, $firstCondition: String!, $firstConditionFileName: String, $secondCondition: String!, $secondConditionFileName: String, $thirdCondition: String!, $thirdConditionFinalBillFileName: String, $thirdConditionNotificationLetterFileName: String, $thirdConditionContractorsObjectionDocumentsFileName: String, $fourthCondition: String!, $fourthConditionFileName: String, $projectName: String, $projectNumber: String, $hasReadAgreement: Boolean!) {
  arbitrationTermsForm_addArbitrationTermsForm(
    input: {complaintId: $complaintId, userId: $userId, filledBy: $filledBy, firstCondition: $firstCondition, firstConditionFileName: $firstConditionFileName, secondCondition: $secondCondition, secondConditionFileName: $secondConditionFileName, thirdCondition: $thirdCondition, thirdConditionFinalBillFileName: $thirdConditionFinalBillFileName, thirdConditionNotificationLetterFileName: $thirdConditionNotificationLetterFileName, thirdConditionContractorsObjectionDocumentsFileName: $thirdConditionContractorsObjectionDocumentsFileName, fourthCondition: $fourthCondition, fourthConditionFileName: $fourthConditionFileName, projectName: $projectName, projectNumber: $projectNumber, hasReadAgreement: $hasReadAgreement}
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
export type CreateArbitrationTermsFormMutationFn = Apollo.MutationFunction<CreateArbitrationTermsFormMutation, CreateArbitrationTermsFormMutationVariables>;

/**
 * __useCreateArbitrationTermsFormMutation__
 *
 * To run a mutation, you first call `useCreateArbitrationTermsFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArbitrationTermsFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArbitrationTermsFormMutation, { data, loading, error }] = useCreateArbitrationTermsFormMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *      userId: // value for 'userId'
 *      filledBy: // value for 'filledBy'
 *      firstCondition: // value for 'firstCondition'
 *      firstConditionFileName: // value for 'firstConditionFileName'
 *      secondCondition: // value for 'secondCondition'
 *      secondConditionFileName: // value for 'secondConditionFileName'
 *      thirdCondition: // value for 'thirdCondition'
 *      thirdConditionFinalBillFileName: // value for 'thirdConditionFinalBillFileName'
 *      thirdConditionNotificationLetterFileName: // value for 'thirdConditionNotificationLetterFileName'
 *      thirdConditionContractorsObjectionDocumentsFileName: // value for 'thirdConditionContractorsObjectionDocumentsFileName'
 *      fourthCondition: // value for 'fourthCondition'
 *      fourthConditionFileName: // value for 'fourthConditionFileName'
 *      projectName: // value for 'projectName'
 *      projectNumber: // value for 'projectNumber'
 *      hasReadAgreement: // value for 'hasReadAgreement'
 *   },
 * });
 */
export function useCreateArbitrationTermsFormMutation(baseOptions?: Apollo.MutationHookOptions<CreateArbitrationTermsFormMutation, CreateArbitrationTermsFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArbitrationTermsFormMutation, CreateArbitrationTermsFormMutationVariables>(CreateArbitrationTermsFormDocument, options);
      }
export type CreateArbitrationTermsFormMutationHookResult = ReturnType<typeof useCreateArbitrationTermsFormMutation>;
export type CreateArbitrationTermsFormMutationResult = Apollo.MutationResult<CreateArbitrationTermsFormMutation>;
export type CreateArbitrationTermsFormMutationOptions = Apollo.BaseMutationOptions<CreateArbitrationTermsFormMutation, CreateArbitrationTermsFormMutationVariables>;
export const AddArgumentToComplaintDocument = gql`
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
export type AddArgumentToComplaintMutationFn = Apollo.MutationFunction<AddArgumentToComplaintMutation, AddArgumentToComplaintMutationVariables>;

/**
 * __useAddArgumentToComplaintMutation__
 *
 * To run a mutation, you first call `useAddArgumentToComplaintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArgumentToComplaintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArgumentToComplaintMutation, { data, loading, error }] = useAddArgumentToComplaintMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddArgumentToComplaintMutation(baseOptions?: Apollo.MutationHookOptions<AddArgumentToComplaintMutation, AddArgumentToComplaintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddArgumentToComplaintMutation, AddArgumentToComplaintMutationVariables>(AddArgumentToComplaintDocument, options);
      }
export type AddArgumentToComplaintMutationHookResult = ReturnType<typeof useAddArgumentToComplaintMutation>;
export type AddArgumentToComplaintMutationResult = Apollo.MutationResult<AddArgumentToComplaintMutation>;
export type AddArgumentToComplaintMutationOptions = Apollo.BaseMutationOptions<AddArgumentToComplaintMutation, AddArgumentToComplaintMutationVariables>;
export const UpdateArgumentDocument = gql`
    mutation UpdateArgument($id: Int!, $accuserResponse: String, $accuserResponseFileName: String, $approvedAmount: Decimal, $complaintId: Int, $councilApprovedAmount: Decimal, $councilOpinion: String, $description: String, $expertId: String, $expertOpinion: String, $expertOpinionFileName: String, $expertVerdict: String, $fileName: String, $filledBy: RegistrarType, $mailRoomChiefSuggestedAmount: Decimal, $mailRoomExpertApprovedAmount: Decimal, $suggestedAmount: Decimal, $summary: String, $userId: String, $accuserAnswerToAccusedResponse: String) {
  complaintArgument_updateComplaintArgument(
    input: {accusedResponse: $accuserResponse, accusedResponseFileName: $accuserResponseFileName, netApprovedAmount: $approvedAmount, complaintId: $complaintId, netCouncilApprovedAmount: $councilApprovedAmount, councilOpinion: $councilOpinion, description: $description, expertId: $expertId, expertOpinion: $expertOpinion, expertOpinionFileName: $expertOpinionFileName, expertVerdict: $expertVerdict, fileName: $fileName, filledBy: $filledBy, netMailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount, netMailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount, suggestedAmount: $suggestedAmount, summary: $summary, userId: $userId, accuserAnswerToAccusedResponse: $accuserAnswerToAccusedResponse, id: $id}
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
export type UpdateArgumentMutationFn = Apollo.MutationFunction<UpdateArgumentMutation, UpdateArgumentMutationVariables>;

/**
 * __useUpdateArgumentMutation__
 *
 * To run a mutation, you first call `useUpdateArgumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArgumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArgumentMutation, { data, loading, error }] = useUpdateArgumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      accuserResponse: // value for 'accuserResponse'
 *      accuserResponseFileName: // value for 'accuserResponseFileName'
 *      approvedAmount: // value for 'approvedAmount'
 *      complaintId: // value for 'complaintId'
 *      councilApprovedAmount: // value for 'councilApprovedAmount'
 *      councilOpinion: // value for 'councilOpinion'
 *      description: // value for 'description'
 *      expertId: // value for 'expertId'
 *      expertOpinion: // value for 'expertOpinion'
 *      expertOpinionFileName: // value for 'expertOpinionFileName'
 *      expertVerdict: // value for 'expertVerdict'
 *      fileName: // value for 'fileName'
 *      filledBy: // value for 'filledBy'
 *      mailRoomChiefSuggestedAmount: // value for 'mailRoomChiefSuggestedAmount'
 *      mailRoomExpertApprovedAmount: // value for 'mailRoomExpertApprovedAmount'
 *      suggestedAmount: // value for 'suggestedAmount'
 *      summary: // value for 'summary'
 *      userId: // value for 'userId'
 *      accuserAnswerToAccusedResponse: // value for 'accuserAnswerToAccusedResponse'
 *   },
 * });
 */
export function useUpdateArgumentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArgumentMutation, UpdateArgumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArgumentMutation, UpdateArgumentMutationVariables>(UpdateArgumentDocument, options);
      }
export type UpdateArgumentMutationHookResult = ReturnType<typeof useUpdateArgumentMutation>;
export type UpdateArgumentMutationResult = Apollo.MutationResult<UpdateArgumentMutation>;
export type UpdateArgumentMutationOptions = Apollo.BaseMutationOptions<UpdateArgumentMutation, UpdateArgumentMutationVariables>;
export const UpdateArgumentFullDocument = gql`
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
export type UpdateArgumentFullMutationFn = Apollo.MutationFunction<UpdateArgumentFullMutation, UpdateArgumentFullMutationVariables>;

/**
 * __useUpdateArgumentFullMutation__
 *
 * To run a mutation, you first call `useUpdateArgumentFullMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArgumentFullMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArgumentFullMutation, { data, loading, error }] = useUpdateArgumentFullMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateArgumentFullMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArgumentFullMutation, UpdateArgumentFullMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArgumentFullMutation, UpdateArgumentFullMutationVariables>(UpdateArgumentFullDocument, options);
      }
export type UpdateArgumentFullMutationHookResult = ReturnType<typeof useUpdateArgumentFullMutation>;
export type UpdateArgumentFullMutationResult = Apollo.MutationResult<UpdateArgumentFullMutation>;
export type UpdateArgumentFullMutationOptions = Apollo.BaseMutationOptions<UpdateArgumentFullMutation, UpdateArgumentFullMutationVariables>;
export const DeleteArgumentDocument = gql`
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
export type DeleteArgumentMutationFn = Apollo.MutationFunction<DeleteArgumentMutation, DeleteArgumentMutationVariables>;

/**
 * __useDeleteArgumentMutation__
 *
 * To run a mutation, you first call `useDeleteArgumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArgumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArgumentMutation, { data, loading, error }] = useDeleteArgumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArgumentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArgumentMutation, DeleteArgumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArgumentMutation, DeleteArgumentMutationVariables>(DeleteArgumentDocument, options);
      }
export type DeleteArgumentMutationHookResult = ReturnType<typeof useDeleteArgumentMutation>;
export type DeleteArgumentMutationResult = Apollo.MutationResult<DeleteArgumentMutation>;
export type DeleteArgumentMutationOptions = Apollo.BaseMutationOptions<DeleteArgumentMutation, DeleteArgumentMutationVariables>;
export const DeleteCompainDocument = gql`
    mutation deleteCompain($id: Int!) {
  complaint_deleteComplaint(entityId: $id) {
    status {
      code
      value
    }
  }
}
    `;
export type DeleteCompainMutationFn = Apollo.MutationFunction<DeleteCompainMutation, DeleteCompainMutationVariables>;

/**
 * __useDeleteCompainMutation__
 *
 * To run a mutation, you first call `useDeleteCompainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompainMutation, { data, loading, error }] = useDeleteCompainMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCompainMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompainMutation, DeleteCompainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompainMutation, DeleteCompainMutationVariables>(DeleteCompainDocument, options);
      }
export type DeleteCompainMutationHookResult = ReturnType<typeof useDeleteCompainMutation>;
export type DeleteCompainMutationResult = Apollo.MutationResult<DeleteCompainMutation>;
export type DeleteCompainMutationOptions = Apollo.BaseMutationOptions<DeleteCompainMutation, DeleteCompainMutationVariables>;
export const AddComplaintNoteDocument = gql`
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
export type AddComplaintNoteMutationFn = Apollo.MutationFunction<AddComplaintNoteMutation, AddComplaintNoteMutationVariables>;

/**
 * __useAddComplaintNoteMutation__
 *
 * To run a mutation, you first call `useAddComplaintNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddComplaintNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addComplaintNoteMutation, { data, loading, error }] = useAddComplaintNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddComplaintNoteMutation(baseOptions?: Apollo.MutationHookOptions<AddComplaintNoteMutation, AddComplaintNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddComplaintNoteMutation, AddComplaintNoteMutationVariables>(AddComplaintNoteDocument, options);
      }
export type AddComplaintNoteMutationHookResult = ReturnType<typeof useAddComplaintNoteMutation>;
export type AddComplaintNoteMutationResult = Apollo.MutationResult<AddComplaintNoteMutation>;
export type AddComplaintNoteMutationOptions = Apollo.BaseMutationOptions<AddComplaintNoteMutation, AddComplaintNoteMutationVariables>;
export const SendAccusedRespondedSmsDocument = gql`
    mutation SendAccusedRespondedSMS($complaintId: Int!) {
  sms_sendAccusedRespondedSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendAccusedRespondedSmsMutationFn = Apollo.MutationFunction<SendAccusedRespondedSmsMutation, SendAccusedRespondedSmsMutationVariables>;

/**
 * __useSendAccusedRespondedSmsMutation__
 *
 * To run a mutation, you first call `useSendAccusedRespondedSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendAccusedRespondedSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendAccusedRespondedSmsMutation, { data, loading, error }] = useSendAccusedRespondedSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendAccusedRespondedSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendAccusedRespondedSmsMutation, SendAccusedRespondedSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendAccusedRespondedSmsMutation, SendAccusedRespondedSmsMutationVariables>(SendAccusedRespondedSmsDocument, options);
      }
export type SendAccusedRespondedSmsMutationHookResult = ReturnType<typeof useSendAccusedRespondedSmsMutation>;
export type SendAccusedRespondedSmsMutationResult = Apollo.MutationResult<SendAccusedRespondedSmsMutation>;
export type SendAccusedRespondedSmsMutationOptions = Apollo.BaseMutationOptions<SendAccusedRespondedSmsMutation, SendAccusedRespondedSmsMutationVariables>;
export const AddComplaintFileMutationDocument = gql`
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
export type AddComplaintFileMutationMutationFn = Apollo.MutationFunction<AddComplaintFileMutationMutation, AddComplaintFileMutationMutationVariables>;

/**
 * __useAddComplaintFileMutationMutation__
 *
 * To run a mutation, you first call `useAddComplaintFileMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddComplaintFileMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addComplaintFileMutationMutation, { data, loading, error }] = useAddComplaintFileMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddComplaintFileMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddComplaintFileMutationMutation, AddComplaintFileMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddComplaintFileMutationMutation, AddComplaintFileMutationMutationVariables>(AddComplaintFileMutationDocument, options);
      }
export type AddComplaintFileMutationMutationHookResult = ReturnType<typeof useAddComplaintFileMutationMutation>;
export type AddComplaintFileMutationMutationResult = Apollo.MutationResult<AddComplaintFileMutationMutation>;
export type AddComplaintFileMutationMutationOptions = Apollo.BaseMutationOptions<AddComplaintFileMutationMutation, AddComplaintFileMutationMutationVariables>;
export const GenerateComplaintVerdictDocument = gql`
    mutation GenerateComplaintVerdict($input: ComplaintVerdictLetterDtoInput!) {
  test_generateComplaintVerdictLetter(input: $input)
}
    `;
export type GenerateComplaintVerdictMutationFn = Apollo.MutationFunction<GenerateComplaintVerdictMutation, GenerateComplaintVerdictMutationVariables>;

/**
 * __useGenerateComplaintVerdictMutation__
 *
 * To run a mutation, you first call `useGenerateComplaintVerdictMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateComplaintVerdictMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateComplaintVerdictMutation, { data, loading, error }] = useGenerateComplaintVerdictMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateComplaintVerdictMutation(baseOptions?: Apollo.MutationHookOptions<GenerateComplaintVerdictMutation, GenerateComplaintVerdictMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateComplaintVerdictMutation, GenerateComplaintVerdictMutationVariables>(GenerateComplaintVerdictDocument, options);
      }
export type GenerateComplaintVerdictMutationHookResult = ReturnType<typeof useGenerateComplaintVerdictMutation>;
export type GenerateComplaintVerdictMutationResult = Apollo.MutationResult<GenerateComplaintVerdictMutation>;
export type GenerateComplaintVerdictMutationOptions = Apollo.BaseMutationOptions<GenerateComplaintVerdictMutation, GenerateComplaintVerdictMutationVariables>;
export const GenerateComplaintDecreeDocument = gql`
    mutation GenerateComplaintDecree($input: DecreeDtoInput!) {
  test_generateDecree(input: $input)
}
    `;
export type GenerateComplaintDecreeMutationFn = Apollo.MutationFunction<GenerateComplaintDecreeMutation, GenerateComplaintDecreeMutationVariables>;

/**
 * __useGenerateComplaintDecreeMutation__
 *
 * To run a mutation, you first call `useGenerateComplaintDecreeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateComplaintDecreeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateComplaintDecreeMutation, { data, loading, error }] = useGenerateComplaintDecreeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateComplaintDecreeMutation(baseOptions?: Apollo.MutationHookOptions<GenerateComplaintDecreeMutation, GenerateComplaintDecreeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateComplaintDecreeMutation, GenerateComplaintDecreeMutationVariables>(GenerateComplaintDecreeDocument, options);
      }
export type GenerateComplaintDecreeMutationHookResult = ReturnType<typeof useGenerateComplaintDecreeMutation>;
export type GenerateComplaintDecreeMutationResult = Apollo.MutationResult<GenerateComplaintDecreeMutation>;
export type GenerateComplaintDecreeMutationOptions = Apollo.BaseMutationOptions<GenerateComplaintDecreeMutation, GenerateComplaintDecreeMutationVariables>;
export const SmsComplaintAddedDocument = gql`
    mutation SMSComplaintAdded($id: Int!) {
  sms_sendComplaintAddedSMS(complaintId: $id) {
    code
    value
  }
}
    `;
export type SmsComplaintAddedMutationFn = Apollo.MutationFunction<SmsComplaintAddedMutation, SmsComplaintAddedMutationVariables>;

/**
 * __useSmsComplaintAddedMutation__
 *
 * To run a mutation, you first call `useSmsComplaintAddedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSmsComplaintAddedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [smsComplaintAddedMutation, { data, loading, error }] = useSmsComplaintAddedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSmsComplaintAddedMutation(baseOptions?: Apollo.MutationHookOptions<SmsComplaintAddedMutation, SmsComplaintAddedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SmsComplaintAddedMutation, SmsComplaintAddedMutationVariables>(SmsComplaintAddedDocument, options);
      }
export type SmsComplaintAddedMutationHookResult = ReturnType<typeof useSmsComplaintAddedMutation>;
export type SmsComplaintAddedMutationResult = Apollo.MutationResult<SmsComplaintAddedMutation>;
export type SmsComplaintAddedMutationOptions = Apollo.BaseMutationOptions<SmsComplaintAddedMutation, SmsComplaintAddedMutationVariables>;
export const SmsAccusedRespondDocument = gql`
    mutation SMSAccusedRespond($id: Int!) {
  sms_sendAccusedRespondedSMS(complaintId: $id) {
    code
    value
  }
}
    `;
export type SmsAccusedRespondMutationFn = Apollo.MutationFunction<SmsAccusedRespondMutation, SmsAccusedRespondMutationVariables>;

/**
 * __useSmsAccusedRespondMutation__
 *
 * To run a mutation, you first call `useSmsAccusedRespondMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSmsAccusedRespondMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [smsAccusedRespondMutation, { data, loading, error }] = useSmsAccusedRespondMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSmsAccusedRespondMutation(baseOptions?: Apollo.MutationHookOptions<SmsAccusedRespondMutation, SmsAccusedRespondMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SmsAccusedRespondMutation, SmsAccusedRespondMutationVariables>(SmsAccusedRespondDocument, options);
      }
export type SmsAccusedRespondMutationHookResult = ReturnType<typeof useSmsAccusedRespondMutation>;
export type SmsAccusedRespondMutationResult = Apollo.MutationResult<SmsAccusedRespondMutation>;
export type SmsAccusedRespondMutationOptions = Apollo.BaseMutationOptions<SmsAccusedRespondMutation, SmsAccusedRespondMutationVariables>;
export const SmsComplaintCodeDocument = gql`
    mutation SMSComplaintCode($id: Int!) {
  sms_sendComplaintCodeSMS(complaintId: $id) {
    code
    value
  }
}
    `;
export type SmsComplaintCodeMutationFn = Apollo.MutationFunction<SmsComplaintCodeMutation, SmsComplaintCodeMutationVariables>;

/**
 * __useSmsComplaintCodeMutation__
 *
 * To run a mutation, you first call `useSmsComplaintCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSmsComplaintCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [smsComplaintCodeMutation, { data, loading, error }] = useSmsComplaintCodeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSmsComplaintCodeMutation(baseOptions?: Apollo.MutationHookOptions<SmsComplaintCodeMutation, SmsComplaintCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SmsComplaintCodeMutation, SmsComplaintCodeMutationVariables>(SmsComplaintCodeDocument, options);
      }
export type SmsComplaintCodeMutationHookResult = ReturnType<typeof useSmsComplaintCodeMutation>;
export type SmsComplaintCodeMutationResult = Apollo.MutationResult<SmsComplaintCodeMutation>;
export type SmsComplaintCodeMutationOptions = Apollo.BaseMutationOptions<SmsComplaintCodeMutation, SmsComplaintCodeMutationVariables>;
export const AddCorrectionRequestsDocument = gql`
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
export type AddCorrectionRequestsMutationFn = Apollo.MutationFunction<AddCorrectionRequestsMutation, AddCorrectionRequestsMutationVariables>;

/**
 * __useAddCorrectionRequestsMutation__
 *
 * To run a mutation, you first call `useAddCorrectionRequestsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCorrectionRequestsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCorrectionRequestsMutation, { data, loading, error }] = useAddCorrectionRequestsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCorrectionRequestsMutation(baseOptions?: Apollo.MutationHookOptions<AddCorrectionRequestsMutation, AddCorrectionRequestsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCorrectionRequestsMutation, AddCorrectionRequestsMutationVariables>(AddCorrectionRequestsDocument, options);
      }
export type AddCorrectionRequestsMutationHookResult = ReturnType<typeof useAddCorrectionRequestsMutation>;
export type AddCorrectionRequestsMutationResult = Apollo.MutationResult<AddCorrectionRequestsMutation>;
export type AddCorrectionRequestsMutationOptions = Apollo.BaseMutationOptions<AddCorrectionRequestsMutation, AddCorrectionRequestsMutationVariables>;
export const UpdateCorrectionRequestsDocument = gql`
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
export type UpdateCorrectionRequestsMutationFn = Apollo.MutationFunction<UpdateCorrectionRequestsMutation, UpdateCorrectionRequestsMutationVariables>;

/**
 * __useUpdateCorrectionRequestsMutation__
 *
 * To run a mutation, you first call `useUpdateCorrectionRequestsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCorrectionRequestsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCorrectionRequestsMutation, { data, loading, error }] = useUpdateCorrectionRequestsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCorrectionRequestsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCorrectionRequestsMutation, UpdateCorrectionRequestsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCorrectionRequestsMutation, UpdateCorrectionRequestsMutationVariables>(UpdateCorrectionRequestsDocument, options);
      }
export type UpdateCorrectionRequestsMutationHookResult = ReturnType<typeof useUpdateCorrectionRequestsMutation>;
export type UpdateCorrectionRequestsMutationResult = Apollo.MutationResult<UpdateCorrectionRequestsMutation>;
export type UpdateCorrectionRequestsMutationOptions = Apollo.BaseMutationOptions<UpdateCorrectionRequestsMutation, UpdateCorrectionRequestsMutationVariables>;
export const DeleteCorrectionRequestsDocument = gql`
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
export type DeleteCorrectionRequestsMutationFn = Apollo.MutationFunction<DeleteCorrectionRequestsMutation, DeleteCorrectionRequestsMutationVariables>;

/**
 * __useDeleteCorrectionRequestsMutation__
 *
 * To run a mutation, you first call `useDeleteCorrectionRequestsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCorrectionRequestsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCorrectionRequestsMutation, { data, loading, error }] = useDeleteCorrectionRequestsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCorrectionRequestsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCorrectionRequestsMutation, DeleteCorrectionRequestsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCorrectionRequestsMutation, DeleteCorrectionRequestsMutationVariables>(DeleteCorrectionRequestsDocument, options);
      }
export type DeleteCorrectionRequestsMutationHookResult = ReturnType<typeof useDeleteCorrectionRequestsMutation>;
export type DeleteCorrectionRequestsMutationResult = Apollo.MutationResult<DeleteCorrectionRequestsMutation>;
export type DeleteCorrectionRequestsMutationOptions = Apollo.BaseMutationOptions<DeleteCorrectionRequestsMutation, DeleteCorrectionRequestsMutationVariables>;
export const SendArbitrationRejectionSmsDocument = gql`
    mutation SendArbitrationRejectionSMS($complaintId: Int!) {
  sms_sendArbitrationRejectionSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendArbitrationRejectionSmsMutationFn = Apollo.MutationFunction<SendArbitrationRejectionSmsMutation, SendArbitrationRejectionSmsMutationVariables>;

/**
 * __useSendArbitrationRejectionSmsMutation__
 *
 * To run a mutation, you first call `useSendArbitrationRejectionSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendArbitrationRejectionSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendArbitrationRejectionSmsMutation, { data, loading, error }] = useSendArbitrationRejectionSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendArbitrationRejectionSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendArbitrationRejectionSmsMutation, SendArbitrationRejectionSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendArbitrationRejectionSmsMutation, SendArbitrationRejectionSmsMutationVariables>(SendArbitrationRejectionSmsDocument, options);
      }
export type SendArbitrationRejectionSmsMutationHookResult = ReturnType<typeof useSendArbitrationRejectionSmsMutation>;
export type SendArbitrationRejectionSmsMutationResult = Apollo.MutationResult<SendArbitrationRejectionSmsMutation>;
export type SendArbitrationRejectionSmsMutationOptions = Apollo.BaseMutationOptions<SendArbitrationRejectionSmsMutation, SendArbitrationRejectionSmsMutationVariables>;
export const SendAssignToExpertSmsDocument = gql`
    mutation SendAssignToExpertSMS($complaintId: Int!) {
  sms_sendAssignToExpertSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendAssignToExpertSmsMutationFn = Apollo.MutationFunction<SendAssignToExpertSmsMutation, SendAssignToExpertSmsMutationVariables>;

/**
 * __useSendAssignToExpertSmsMutation__
 *
 * To run a mutation, you first call `useSendAssignToExpertSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendAssignToExpertSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendAssignToExpertSmsMutation, { data, loading, error }] = useSendAssignToExpertSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendAssignToExpertSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendAssignToExpertSmsMutation, SendAssignToExpertSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendAssignToExpertSmsMutation, SendAssignToExpertSmsMutationVariables>(SendAssignToExpertSmsDocument, options);
      }
export type SendAssignToExpertSmsMutationHookResult = ReturnType<typeof useSendAssignToExpertSmsMutation>;
export type SendAssignToExpertSmsMutationResult = Apollo.MutationResult<SendAssignToExpertSmsMutation>;
export type SendAssignToExpertSmsMutationOptions = Apollo.BaseMutationOptions<SendAssignToExpertSmsMutation, SendAssignToExpertSmsMutationVariables>;
export const SendComplaintGotCancelledSmsDocument = gql`
    mutation SendComplaintGotCancelledSMS($complaintId: Int!) {
  sms_sendComplaintGotCancelledSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendComplaintGotCancelledSmsMutationFn = Apollo.MutationFunction<SendComplaintGotCancelledSmsMutation, SendComplaintGotCancelledSmsMutationVariables>;

/**
 * __useSendComplaintGotCancelledSmsMutation__
 *
 * To run a mutation, you first call `useSendComplaintGotCancelledSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendComplaintGotCancelledSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendComplaintGotCancelledSmsMutation, { data, loading, error }] = useSendComplaintGotCancelledSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendComplaintGotCancelledSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendComplaintGotCancelledSmsMutation, SendComplaintGotCancelledSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendComplaintGotCancelledSmsMutation, SendComplaintGotCancelledSmsMutationVariables>(SendComplaintGotCancelledSmsDocument, options);
      }
export type SendComplaintGotCancelledSmsMutationHookResult = ReturnType<typeof useSendComplaintGotCancelledSmsMutation>;
export type SendComplaintGotCancelledSmsMutationResult = Apollo.MutationResult<SendComplaintGotCancelledSmsMutation>;
export type SendComplaintGotCancelledSmsMutationOptions = Apollo.BaseMutationOptions<SendComplaintGotCancelledSmsMutation, SendComplaintGotCancelledSmsMutationVariables>;
export const SendDidNotMakeFirstPaymentSmsDocument = gql`
    mutation SendDidNotMakeFirstPaymentSMS($complaintId: Int!) {
  sms_sendDidNotMakeFirstPaymentSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendDidNotMakeFirstPaymentSmsMutationFn = Apollo.MutationFunction<SendDidNotMakeFirstPaymentSmsMutation, SendDidNotMakeFirstPaymentSmsMutationVariables>;

/**
 * __useSendDidNotMakeFirstPaymentSmsMutation__
 *
 * To run a mutation, you first call `useSendDidNotMakeFirstPaymentSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendDidNotMakeFirstPaymentSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendDidNotMakeFirstPaymentSmsMutation, { data, loading, error }] = useSendDidNotMakeFirstPaymentSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendDidNotMakeFirstPaymentSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendDidNotMakeFirstPaymentSmsMutation, SendDidNotMakeFirstPaymentSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendDidNotMakeFirstPaymentSmsMutation, SendDidNotMakeFirstPaymentSmsMutationVariables>(SendDidNotMakeFirstPaymentSmsDocument, options);
      }
export type SendDidNotMakeFirstPaymentSmsMutationHookResult = ReturnType<typeof useSendDidNotMakeFirstPaymentSmsMutation>;
export type SendDidNotMakeFirstPaymentSmsMutationResult = Apollo.MutationResult<SendDidNotMakeFirstPaymentSmsMutation>;
export type SendDidNotMakeFirstPaymentSmsMutationOptions = Apollo.BaseMutationOptions<SendDidNotMakeFirstPaymentSmsMutation, SendDidNotMakeFirstPaymentSmsMutationVariables>;
export const SendComplaintCorrectionRequestSmsDocument = gql`
    mutation SendComplaintCorrectionRequestSMS($complaintId: Int!, $receiverId: String!) {
  sms_sendComplaintCorrectionRequestSMS(
    complaintId: $complaintId
    receiverId: $receiverId
  ) {
    code
    value
  }
}
    `;
export type SendComplaintCorrectionRequestSmsMutationFn = Apollo.MutationFunction<SendComplaintCorrectionRequestSmsMutation, SendComplaintCorrectionRequestSmsMutationVariables>;

/**
 * __useSendComplaintCorrectionRequestSmsMutation__
 *
 * To run a mutation, you first call `useSendComplaintCorrectionRequestSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendComplaintCorrectionRequestSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendComplaintCorrectionRequestSmsMutation, { data, loading, error }] = useSendComplaintCorrectionRequestSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *      receiverId: // value for 'receiverId'
 *   },
 * });
 */
export function useSendComplaintCorrectionRequestSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendComplaintCorrectionRequestSmsMutation, SendComplaintCorrectionRequestSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendComplaintCorrectionRequestSmsMutation, SendComplaintCorrectionRequestSmsMutationVariables>(SendComplaintCorrectionRequestSmsDocument, options);
      }
export type SendComplaintCorrectionRequestSmsMutationHookResult = ReturnType<typeof useSendComplaintCorrectionRequestSmsMutation>;
export type SendComplaintCorrectionRequestSmsMutationResult = Apollo.MutationResult<SendComplaintCorrectionRequestSmsMutation>;
export type SendComplaintCorrectionRequestSmsMutationOptions = Apollo.BaseMutationOptions<SendComplaintCorrectionRequestSmsMutation, SendComplaintCorrectionRequestSmsMutationVariables>;
export const SendAccusedDidNotRespondSmsDocument = gql`
    mutation SendAccusedDidNotRespondSMS($complaintId: Int!) {
  sms_sendAccusedDidNotRespondSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendAccusedDidNotRespondSmsMutationFn = Apollo.MutationFunction<SendAccusedDidNotRespondSmsMutation, SendAccusedDidNotRespondSmsMutationVariables>;

/**
 * __useSendAccusedDidNotRespondSmsMutation__
 *
 * To run a mutation, you first call `useSendAccusedDidNotRespondSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendAccusedDidNotRespondSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendAccusedDidNotRespondSmsMutation, { data, loading, error }] = useSendAccusedDidNotRespondSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendAccusedDidNotRespondSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendAccusedDidNotRespondSmsMutation, SendAccusedDidNotRespondSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendAccusedDidNotRespondSmsMutation, SendAccusedDidNotRespondSmsMutationVariables>(SendAccusedDidNotRespondSmsDocument, options);
      }
export type SendAccusedDidNotRespondSmsMutationHookResult = ReturnType<typeof useSendAccusedDidNotRespondSmsMutation>;
export type SendAccusedDidNotRespondSmsMutationResult = Apollo.MutationResult<SendAccusedDidNotRespondSmsMutation>;
export type SendAccusedDidNotRespondSmsMutationOptions = Apollo.BaseMutationOptions<SendAccusedDidNotRespondSmsMutation, SendAccusedDidNotRespondSmsMutationVariables>;
export const SendSecondPaymentAnnouncementSmsDocument = gql`
    mutation SendSecondPaymentAnnouncementSMS($complaintId: Int!) {
  sms_sendSecondPaymentAnnouncementSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendSecondPaymentAnnouncementSmsMutationFn = Apollo.MutationFunction<SendSecondPaymentAnnouncementSmsMutation, SendSecondPaymentAnnouncementSmsMutationVariables>;

/**
 * __useSendSecondPaymentAnnouncementSmsMutation__
 *
 * To run a mutation, you first call `useSendSecondPaymentAnnouncementSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendSecondPaymentAnnouncementSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendSecondPaymentAnnouncementSmsMutation, { data, loading, error }] = useSendSecondPaymentAnnouncementSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendSecondPaymentAnnouncementSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendSecondPaymentAnnouncementSmsMutation, SendSecondPaymentAnnouncementSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendSecondPaymentAnnouncementSmsMutation, SendSecondPaymentAnnouncementSmsMutationVariables>(SendSecondPaymentAnnouncementSmsDocument, options);
      }
export type SendSecondPaymentAnnouncementSmsMutationHookResult = ReturnType<typeof useSendSecondPaymentAnnouncementSmsMutation>;
export type SendSecondPaymentAnnouncementSmsMutationResult = Apollo.MutationResult<SendSecondPaymentAnnouncementSmsMutation>;
export type SendSecondPaymentAnnouncementSmsMutationOptions = Apollo.BaseMutationOptions<SendSecondPaymentAnnouncementSmsMutation, SendSecondPaymentAnnouncementSmsMutationVariables>;
export const SendViewVerdictSmsDocument = gql`
    mutation SendViewVerdictSMS($complaintId: Int!) {
  sms_sendViewVerdictSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendViewVerdictSmsMutationFn = Apollo.MutationFunction<SendViewVerdictSmsMutation, SendViewVerdictSmsMutationVariables>;

/**
 * __useSendViewVerdictSmsMutation__
 *
 * To run a mutation, you first call `useSendViewVerdictSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendViewVerdictSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendViewVerdictSmsMutation, { data, loading, error }] = useSendViewVerdictSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendViewVerdictSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendViewVerdictSmsMutation, SendViewVerdictSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendViewVerdictSmsMutation, SendViewVerdictSmsMutationVariables>(SendViewVerdictSmsDocument, options);
      }
export type SendViewVerdictSmsMutationHookResult = ReturnType<typeof useSendViewVerdictSmsMutation>;
export type SendViewVerdictSmsMutationResult = Apollo.MutationResult<SendViewVerdictSmsMutation>;
export type SendViewVerdictSmsMutationOptions = Apollo.BaseMutationOptions<SendViewVerdictSmsMutation, SendViewVerdictSmsMutationVariables>;
export const SendLetterSentToMinistersCouncilSmsDocument = gql`
    mutation SendLetterSentToMinistersCouncilSMS($complaintId: Int!) {
  sms_sendLetterSentToMinistersCouncilSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendLetterSentToMinistersCouncilSmsMutationFn = Apollo.MutationFunction<SendLetterSentToMinistersCouncilSmsMutation, SendLetterSentToMinistersCouncilSmsMutationVariables>;

/**
 * __useSendLetterSentToMinistersCouncilSmsMutation__
 *
 * To run a mutation, you first call `useSendLetterSentToMinistersCouncilSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendLetterSentToMinistersCouncilSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendLetterSentToMinistersCouncilSmsMutation, { data, loading, error }] = useSendLetterSentToMinistersCouncilSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendLetterSentToMinistersCouncilSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendLetterSentToMinistersCouncilSmsMutation, SendLetterSentToMinistersCouncilSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendLetterSentToMinistersCouncilSmsMutation, SendLetterSentToMinistersCouncilSmsMutationVariables>(SendLetterSentToMinistersCouncilSmsDocument, options);
      }
export type SendLetterSentToMinistersCouncilSmsMutationHookResult = ReturnType<typeof useSendLetterSentToMinistersCouncilSmsMutation>;
export type SendLetterSentToMinistersCouncilSmsMutationResult = Apollo.MutationResult<SendLetterSentToMinistersCouncilSmsMutation>;
export type SendLetterSentToMinistersCouncilSmsMutationOptions = Apollo.BaseMutationOptions<SendLetterSentToMinistersCouncilSmsMutation, SendLetterSentToMinistersCouncilSmsMutationVariables>;
export const SendReceiveAnswerFromMinistersCouncilSmsDocument = gql`
    mutation SendReceiveAnswerFromMinistersCouncilSMS($complaintId: Int!) {
  sms_sendReceiveAnswerFromMinistersCouncilSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendReceiveAnswerFromMinistersCouncilSmsMutationFn = Apollo.MutationFunction<SendReceiveAnswerFromMinistersCouncilSmsMutation, SendReceiveAnswerFromMinistersCouncilSmsMutationVariables>;

/**
 * __useSendReceiveAnswerFromMinistersCouncilSmsMutation__
 *
 * To run a mutation, you first call `useSendReceiveAnswerFromMinistersCouncilSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendReceiveAnswerFromMinistersCouncilSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendReceiveAnswerFromMinistersCouncilSmsMutation, { data, loading, error }] = useSendReceiveAnswerFromMinistersCouncilSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendReceiveAnswerFromMinistersCouncilSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendReceiveAnswerFromMinistersCouncilSmsMutation, SendReceiveAnswerFromMinistersCouncilSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendReceiveAnswerFromMinistersCouncilSmsMutation, SendReceiveAnswerFromMinistersCouncilSmsMutationVariables>(SendReceiveAnswerFromMinistersCouncilSmsDocument, options);
      }
export type SendReceiveAnswerFromMinistersCouncilSmsMutationHookResult = ReturnType<typeof useSendReceiveAnswerFromMinistersCouncilSmsMutation>;
export type SendReceiveAnswerFromMinistersCouncilSmsMutationResult = Apollo.MutationResult<SendReceiveAnswerFromMinistersCouncilSmsMutation>;
export type SendReceiveAnswerFromMinistersCouncilSmsMutationOptions = Apollo.BaseMutationOptions<SendReceiveAnswerFromMinistersCouncilSmsMutation, SendReceiveAnswerFromMinistersCouncilSmsMutationVariables>;
export const SetFirstAndSecondPaymentCostDocument = gql`
    mutation SetFirstAndSecondPaymentCost($complaintId: Int!) {
  complaint_setFirstAndSecondPaymentCost(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SetFirstAndSecondPaymentCostMutationFn = Apollo.MutationFunction<SetFirstAndSecondPaymentCostMutation, SetFirstAndSecondPaymentCostMutationVariables>;

/**
 * __useSetFirstAndSecondPaymentCostMutation__
 *
 * To run a mutation, you first call `useSetFirstAndSecondPaymentCostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFirstAndSecondPaymentCostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFirstAndSecondPaymentCostMutation, { data, loading, error }] = useSetFirstAndSecondPaymentCostMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSetFirstAndSecondPaymentCostMutation(baseOptions?: Apollo.MutationHookOptions<SetFirstAndSecondPaymentCostMutation, SetFirstAndSecondPaymentCostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetFirstAndSecondPaymentCostMutation, SetFirstAndSecondPaymentCostMutationVariables>(SetFirstAndSecondPaymentCostDocument, options);
      }
export type SetFirstAndSecondPaymentCostMutationHookResult = ReturnType<typeof useSetFirstAndSecondPaymentCostMutation>;
export type SetFirstAndSecondPaymentCostMutationResult = Apollo.MutationResult<SetFirstAndSecondPaymentCostMutation>;
export type SetFirstAndSecondPaymentCostMutationOptions = Apollo.BaseMutationOptions<SetFirstAndSecondPaymentCostMutation, SetFirstAndSecondPaymentCostMutationVariables>;
export const GenerateComplaintReportDocument = gql`
    mutation GenerateComplaintReport($input: ComplaintReportDtoInput!) {
  test_generateComplaintReport(input: $input)
}
    `;
export type GenerateComplaintReportMutationFn = Apollo.MutationFunction<GenerateComplaintReportMutation, GenerateComplaintReportMutationVariables>;

/**
 * __useGenerateComplaintReportMutation__
 *
 * To run a mutation, you first call `useGenerateComplaintReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateComplaintReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateComplaintReportMutation, { data, loading, error }] = useGenerateComplaintReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateComplaintReportMutation(baseOptions?: Apollo.MutationHookOptions<GenerateComplaintReportMutation, GenerateComplaintReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateComplaintReportMutation, GenerateComplaintReportMutationVariables>(GenerateComplaintReportDocument, options);
      }
export type GenerateComplaintReportMutationHookResult = ReturnType<typeof useGenerateComplaintReportMutation>;
export type GenerateComplaintReportMutationResult = Apollo.MutationResult<GenerateComplaintReportMutation>;
export type GenerateComplaintReportMutationOptions = Apollo.BaseMutationOptions<GenerateComplaintReportMutation, GenerateComplaintReportMutationVariables>;
export const GenerateFulfilledFirstPaymentComplaintsListDocument = gql`
    mutation GenerateFulfilledFirstPaymentComplaintsList($userId: String!) {
  test_generateFulfilledFirstPaymentComplaintsList(userId: $userId)
}
    `;
export type GenerateFulfilledFirstPaymentComplaintsListMutationFn = Apollo.MutationFunction<GenerateFulfilledFirstPaymentComplaintsListMutation, GenerateFulfilledFirstPaymentComplaintsListMutationVariables>;

/**
 * __useGenerateFulfilledFirstPaymentComplaintsListMutation__
 *
 * To run a mutation, you first call `useGenerateFulfilledFirstPaymentComplaintsListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateFulfilledFirstPaymentComplaintsListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateFulfilledFirstPaymentComplaintsListMutation, { data, loading, error }] = useGenerateFulfilledFirstPaymentComplaintsListMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGenerateFulfilledFirstPaymentComplaintsListMutation(baseOptions?: Apollo.MutationHookOptions<GenerateFulfilledFirstPaymentComplaintsListMutation, GenerateFulfilledFirstPaymentComplaintsListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateFulfilledFirstPaymentComplaintsListMutation, GenerateFulfilledFirstPaymentComplaintsListMutationVariables>(GenerateFulfilledFirstPaymentComplaintsListDocument, options);
      }
export type GenerateFulfilledFirstPaymentComplaintsListMutationHookResult = ReturnType<typeof useGenerateFulfilledFirstPaymentComplaintsListMutation>;
export type GenerateFulfilledFirstPaymentComplaintsListMutationResult = Apollo.MutationResult<GenerateFulfilledFirstPaymentComplaintsListMutation>;
export type GenerateFulfilledFirstPaymentComplaintsListMutationOptions = Apollo.BaseMutationOptions<GenerateFulfilledFirstPaymentComplaintsListMutation, GenerateFulfilledFirstPaymentComplaintsListMutationVariables>;
export const SendComplaintAddedSmsDocument = gql`
    mutation SendComplaintAddedSMS($complaintId: Int!) {
  sms_sendComplaintAddedSMS(complaintId: $complaintId) {
    code
    value
  }
}
    `;
export type SendComplaintAddedSmsMutationFn = Apollo.MutationFunction<SendComplaintAddedSmsMutation, SendComplaintAddedSmsMutationVariables>;

/**
 * __useSendComplaintAddedSmsMutation__
 *
 * To run a mutation, you first call `useSendComplaintAddedSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendComplaintAddedSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendComplaintAddedSmsMutation, { data, loading, error }] = useSendComplaintAddedSmsMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *   },
 * });
 */
export function useSendComplaintAddedSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendComplaintAddedSmsMutation, SendComplaintAddedSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendComplaintAddedSmsMutation, SendComplaintAddedSmsMutationVariables>(SendComplaintAddedSmsDocument, options);
      }
export type SendComplaintAddedSmsMutationHookResult = ReturnType<typeof useSendComplaintAddedSmsMutation>;
export type SendComplaintAddedSmsMutationResult = Apollo.MutationResult<SendComplaintAddedSmsMutation>;
export type SendComplaintAddedSmsMutationOptions = Apollo.BaseMutationOptions<SendComplaintAddedSmsMutation, SendComplaintAddedSmsMutationVariables>;
export const Get_ComplaintsDocument = gql`
    query GET_COMPLAINTS {
  complaint_getComplaints {
    result(take: 2000, order: {createdDate: DESC}) {
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
        }
        complaintState {
          id
          persianName
          responsibleRole
          priority
          isDeleted
          createdDate
        }
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

/**
 * __useGet_ComplaintsQuery__
 *
 * To run a query within a React component, call `useGet_ComplaintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_ComplaintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_ComplaintsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_ComplaintsQuery(baseOptions?: Apollo.QueryHookOptions<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>(Get_ComplaintsDocument, options);
      }
export function useGet_ComplaintsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>(Get_ComplaintsDocument, options);
        }
export type Get_ComplaintsQueryHookResult = ReturnType<typeof useGet_ComplaintsQuery>;
export type Get_ComplaintsLazyQueryHookResult = ReturnType<typeof useGet_ComplaintsLazyQuery>;
export type Get_ComplaintsQueryResult = Apollo.QueryResult<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>;
export const GetComplaintDocument = gql`
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
        thirdConditionFinalBillFileName
        thirdConditionNotificationLetterFileName
        thirdConditionContractorsObjectionDocumentsFileName
        fourthCondition
        fourthConditionFileName
      }
      complaintState {
        id
        persianName
        responsibleRole
        priority
        englishName
        isDeleted
        createdDate
      }
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

/**
 * __useGetComplaintQuery__
 *
 * To run a query within a React component, call `useGetComplaintQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComplaintQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComplaintQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComplaintQuery(baseOptions: Apollo.QueryHookOptions<GetComplaintQuery, GetComplaintQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComplaintQuery, GetComplaintQueryVariables>(GetComplaintDocument, options);
      }
export function useGetComplaintLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComplaintQuery, GetComplaintQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComplaintQuery, GetComplaintQueryVariables>(GetComplaintDocument, options);
        }
export type GetComplaintQueryHookResult = ReturnType<typeof useGetComplaintQuery>;
export type GetComplaintLazyQueryHookResult = ReturnType<typeof useGetComplaintLazyQuery>;
export type GetComplaintQueryResult = Apollo.QueryResult<GetComplaintQuery, GetComplaintQueryVariables>;
export const Get_Accused_ComplaintsDocument = gql`
    query GET_ACCUSED_COMPLAINTS($departmentId: String!) {
  complaint_getComplaints {
    result(
      where: {contract: {accusedDepartmentUserId: {eq: $departmentId}}}
      order: {createdDate: DESC}
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
        }
        complaintState {
          id
          persianName
          englishName
          priority
          state
          responsibleRole
          isDeleted
          createdDate
        }
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

/**
 * __useGet_Accused_ComplaintsQuery__
 *
 * To run a query within a React component, call `useGet_Accused_ComplaintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Accused_ComplaintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Accused_ComplaintsQuery({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useGet_Accused_ComplaintsQuery(baseOptions: Apollo.QueryHookOptions<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>(Get_Accused_ComplaintsDocument, options);
      }
export function useGet_Accused_ComplaintsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>(Get_Accused_ComplaintsDocument, options);
        }
export type Get_Accused_ComplaintsQueryHookResult = ReturnType<typeof useGet_Accused_ComplaintsQuery>;
export type Get_Accused_ComplaintsLazyQueryHookResult = ReturnType<typeof useGet_Accused_ComplaintsLazyQuery>;
export type Get_Accused_ComplaintsQueryResult = Apollo.QueryResult<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>;
export const Get_Accuser_ComplaintsDocument = gql`
    query GET_ACCUSER_COMPLAINTS($departmentId: String!) {
  complaint_getComplaints {
    result(
      where: {contract: {accuserDepartmentUserId: {eq: $departmentId}}}
      order: {createdDate: DESC}
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
        }
        complaintState {
          id
          persianName
          englishName
          priority
          state
          responsibleRole
          isDeleted
          createdDate
        }
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

/**
 * __useGet_Accuser_ComplaintsQuery__
 *
 * To run a query within a React component, call `useGet_Accuser_ComplaintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Accuser_ComplaintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Accuser_ComplaintsQuery({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useGet_Accuser_ComplaintsQuery(baseOptions: Apollo.QueryHookOptions<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>(Get_Accuser_ComplaintsDocument, options);
      }
export function useGet_Accuser_ComplaintsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>(Get_Accuser_ComplaintsDocument, options);
        }
export type Get_Accuser_ComplaintsQueryHookResult = ReturnType<typeof useGet_Accuser_ComplaintsQuery>;
export type Get_Accuser_ComplaintsLazyQueryHookResult = ReturnType<typeof useGet_Accuser_ComplaintsLazyQuery>;
export type Get_Accuser_ComplaintsQueryResult = Apollo.QueryResult<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>;
export const Get_Chief_ComplaintsDocument = gql`
    query GET_CHIEF_COMPLAINTS {
  complaint_getComplaints {
    result(
      where: {or: [{complaintState: {state: {eq: WAITING_FOR_CHIEF_TO_ASSIGN}}}, {complaintState: {state: {eq: WAITING_FOR_CHIEF_TO_APPROVE_EXPERTS_ANSWERS_TO_ARGUMENTS}}}, {complaintState: {state: {eq: WAITING_FOR_CHIEF_TO_APPROVE_EXPERTS_ANSWERS_TO_ARGUMENTS}}}, {complaintState: {state: {eq: MAIL_ROOM_CHIEF_REVIEWING_THE_FINAL_REPORT}}}]}
      order: {createdDate: DESC}
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
        }
        complaintState {
          id
          persianName
          englishName
          priority
          state
          responsibleRole
          isDeleted
          createdDate
        }
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

/**
 * __useGet_Chief_ComplaintsQuery__
 *
 * To run a query within a React component, call `useGet_Chief_ComplaintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Chief_ComplaintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Chief_ComplaintsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Chief_ComplaintsQuery(baseOptions?: Apollo.QueryHookOptions<Get_Chief_ComplaintsQuery, Get_Chief_ComplaintsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Chief_ComplaintsQuery, Get_Chief_ComplaintsQueryVariables>(Get_Chief_ComplaintsDocument, options);
      }
export function useGet_Chief_ComplaintsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Chief_ComplaintsQuery, Get_Chief_ComplaintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Chief_ComplaintsQuery, Get_Chief_ComplaintsQueryVariables>(Get_Chief_ComplaintsDocument, options);
        }
export type Get_Chief_ComplaintsQueryHookResult = ReturnType<typeof useGet_Chief_ComplaintsQuery>;
export type Get_Chief_ComplaintsLazyQueryHookResult = ReturnType<typeof useGet_Chief_ComplaintsLazyQuery>;
export type Get_Chief_ComplaintsQueryResult = Apollo.QueryResult<Get_Chief_ComplaintsQuery, Get_Chief_ComplaintsQueryVariables>;
export const GetComplaintArgumentsDocument = gql`
    query GetComplaintArguments($id: Int!) {
  complaintArgument_getComplaintArguments {
    result(where: {complaintId: {eq: $id}}) {
      items {
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

/**
 * __useGetComplaintArgumentsQuery__
 *
 * To run a query within a React component, call `useGetComplaintArgumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComplaintArgumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComplaintArgumentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComplaintArgumentsQuery(baseOptions: Apollo.QueryHookOptions<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>(GetComplaintArgumentsDocument, options);
      }
export function useGetComplaintArgumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>(GetComplaintArgumentsDocument, options);
        }
export type GetComplaintArgumentsQueryHookResult = ReturnType<typeof useGetComplaintArgumentsQuery>;
export type GetComplaintArgumentsLazyQueryHookResult = ReturnType<typeof useGetComplaintArgumentsLazyQuery>;
export type GetComplaintArgumentsQueryResult = Apollo.QueryResult<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>;
export const Get_Complaint_AssignedDocument = gql`
    query GET_COMPLAINT_ASSIGNED($id: String!) {
  complaint_getComplaints {
    result(where: {assignedUserId: {eq: $id}}) {
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
        }
        complaintState {
          id
          persianName
          englishName
          state
          priority
          responsibleRole
          isDeleted
          createdDate
        }
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

/**
 * __useGet_Complaint_AssignedQuery__
 *
 * To run a query within a React component, call `useGet_Complaint_AssignedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Complaint_AssignedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Complaint_AssignedQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGet_Complaint_AssignedQuery(baseOptions: Apollo.QueryHookOptions<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>(Get_Complaint_AssignedDocument, options);
      }
export function useGet_Complaint_AssignedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>(Get_Complaint_AssignedDocument, options);
        }
export type Get_Complaint_AssignedQueryHookResult = ReturnType<typeof useGet_Complaint_AssignedQuery>;
export type Get_Complaint_AssignedLazyQueryHookResult = ReturnType<typeof useGet_Complaint_AssignedLazyQuery>;
export type Get_Complaint_AssignedQueryResult = Apollo.QueryResult<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>;
export const Get_Arbitration_Terms_FormDocument = gql`
    query GET_ARBITRATION_TERMS_FORM($id: Int!) {
  arbitrationTermsForm_getArbitrationTermsForms {
    result(where: {complaintId: {eq: $id}}) {
      items {
        id
        complaintId
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
        filledBy
      }
    }
  }
}
    `;

/**
 * __useGet_Arbitration_Terms_FormQuery__
 *
 * To run a query within a React component, call `useGet_Arbitration_Terms_FormQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Arbitration_Terms_FormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Arbitration_Terms_FormQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGet_Arbitration_Terms_FormQuery(baseOptions: Apollo.QueryHookOptions<Get_Arbitration_Terms_FormQuery, Get_Arbitration_Terms_FormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Arbitration_Terms_FormQuery, Get_Arbitration_Terms_FormQueryVariables>(Get_Arbitration_Terms_FormDocument, options);
      }
export function useGet_Arbitration_Terms_FormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Arbitration_Terms_FormQuery, Get_Arbitration_Terms_FormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Arbitration_Terms_FormQuery, Get_Arbitration_Terms_FormQueryVariables>(Get_Arbitration_Terms_FormDocument, options);
        }
export type Get_Arbitration_Terms_FormQueryHookResult = ReturnType<typeof useGet_Arbitration_Terms_FormQuery>;
export type Get_Arbitration_Terms_FormLazyQueryHookResult = ReturnType<typeof useGet_Arbitration_Terms_FormLazyQuery>;
export type Get_Arbitration_Terms_FormQueryResult = Apollo.QueryResult<Get_Arbitration_Terms_FormQuery, Get_Arbitration_Terms_FormQueryVariables>;
export const GetContractsFilesQueryDocument = gql`
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

/**
 * __useGetContractsFilesQueryQuery__
 *
 * To run a query within a React component, call `useGetContractsFilesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractsFilesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractsFilesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContractsFilesQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetContractsFilesQueryQuery, GetContractsFilesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractsFilesQueryQuery, GetContractsFilesQueryQueryVariables>(GetContractsFilesQueryDocument, options);
      }
export function useGetContractsFilesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractsFilesQueryQuery, GetContractsFilesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractsFilesQueryQuery, GetContractsFilesQueryQueryVariables>(GetContractsFilesQueryDocument, options);
        }
export type GetContractsFilesQueryQueryHookResult = ReturnType<typeof useGetContractsFilesQueryQuery>;
export type GetContractsFilesQueryLazyQueryHookResult = ReturnType<typeof useGetContractsFilesQueryLazyQuery>;
export type GetContractsFilesQueryQueryResult = Apollo.QueryResult<GetContractsFilesQueryQuery, GetContractsFilesQueryQueryVariables>;
export const GetContractFilesQueryDocument = gql`
    query getContractFilesQuery($id: Int!) {
  complaintFile_getComplaintFiles {
    result(where: {complaintId: {eq: $id}}) {
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

/**
 * __useGetContractFilesQueryQuery__
 *
 * To run a query within a React component, call `useGetContractFilesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractFilesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractFilesQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContractFilesQueryQuery(baseOptions: Apollo.QueryHookOptions<GetContractFilesQueryQuery, GetContractFilesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractFilesQueryQuery, GetContractFilesQueryQueryVariables>(GetContractFilesQueryDocument, options);
      }
export function useGetContractFilesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractFilesQueryQuery, GetContractFilesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractFilesQueryQuery, GetContractFilesQueryQueryVariables>(GetContractFilesQueryDocument, options);
        }
export type GetContractFilesQueryQueryHookResult = ReturnType<typeof useGetContractFilesQueryQuery>;
export type GetContractFilesQueryLazyQueryHookResult = ReturnType<typeof useGetContractFilesQueryLazyQuery>;
export type GetContractFilesQueryQueryResult = Apollo.QueryResult<GetContractFilesQueryQuery, GetContractFilesQueryQueryVariables>;
export const GetComplaintsNotesDocument = gql`
    query getComplaintsNotes($id: Int!) {
  complaintNote_getComplaintNotes {
    result(where: {complaintId: {eq: $id}}) {
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

/**
 * __useGetComplaintsNotesQuery__
 *
 * To run a query within a React component, call `useGetComplaintsNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComplaintsNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComplaintsNotesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComplaintsNotesQuery(baseOptions: Apollo.QueryHookOptions<GetComplaintsNotesQuery, GetComplaintsNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComplaintsNotesQuery, GetComplaintsNotesQueryVariables>(GetComplaintsNotesDocument, options);
      }
export function useGetComplaintsNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComplaintsNotesQuery, GetComplaintsNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComplaintsNotesQuery, GetComplaintsNotesQueryVariables>(GetComplaintsNotesDocument, options);
        }
export type GetComplaintsNotesQueryHookResult = ReturnType<typeof useGetComplaintsNotesQuery>;
export type GetComplaintsNotesLazyQueryHookResult = ReturnType<typeof useGetComplaintsNotesLazyQuery>;
export type GetComplaintsNotesQueryResult = Apollo.QueryResult<GetComplaintsNotesQuery, GetComplaintsNotesQueryVariables>;
export const GetExpertComplaintsDocument = gql`
    query GetExpertComplaints($userId: String!) {
  complaint_getExpertComplaints(userId: $userId) {
    result {
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
          filledBy
          projectNumber
          projectName
        }
        complaintState {
          id
          persianName
          englishName
          state
          priority
          responsibleRole
          isDeleted
          createdDate
        }
        complaintCode
        councilExpertIds
        assignedUser {
          userName
          fullName
          phoneNumber
        }
        isFirstPaymentPaid
        isSecondPaymentPaid
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
          isExecutiveByAccused
          isExecutiveByAccuser
          isExecutiveByExpert
          fileNamesByAccused
          fileNamesByAccuser
        }
      }
    }
  }
}
    `;

/**
 * __useGetExpertComplaintsQuery__
 *
 * To run a query within a React component, call `useGetExpertComplaintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExpertComplaintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExpertComplaintsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetExpertComplaintsQuery(baseOptions: Apollo.QueryHookOptions<GetExpertComplaintsQuery, GetExpertComplaintsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExpertComplaintsQuery, GetExpertComplaintsQueryVariables>(GetExpertComplaintsDocument, options);
      }
export function useGetExpertComplaintsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExpertComplaintsQuery, GetExpertComplaintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExpertComplaintsQuery, GetExpertComplaintsQueryVariables>(GetExpertComplaintsDocument, options);
        }
export type GetExpertComplaintsQueryHookResult = ReturnType<typeof useGetExpertComplaintsQuery>;
export type GetExpertComplaintsLazyQueryHookResult = ReturnType<typeof useGetExpertComplaintsLazyQuery>;
export type GetExpertComplaintsQueryResult = Apollo.QueryResult<GetExpertComplaintsQuery, GetExpertComplaintsQueryVariables>;
export const GetComplaintsWithFilterDocument = gql`
    query GetComplaintsWithFilter($filter: ComplaintFilterInput, $take: Int, $skip: Int, $order: [ComplaintSortInput!] = [{createdDate: DESC}]) {
  complaint_getComplaints {
    result(where: $filter, order: $order, take: $take, skip: $skip) {
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
          thirdConditionFinalBillFileName
          thirdConditionNotificationLetterFileName
          thirdConditionContractorsObjectionDocumentsFileName
          fourthCondition
          fourthConditionFileName
          filledBy
          projectNumber
          projectName
        }
        complaintState {
          id
          persianName
          englishName
          state
          priority
          responsibleRole
          isDeleted
          createdDate
        }
        complaintCode
        councilExpertIds
        assignedUser {
          userName
          fullName
          phoneNumber
        }
        isFirstPaymentPaid
        isSecondPaymentPaid
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
          isExecutiveByAccused
          isExecutiveByAccuser
          isExecutiveByExpert
          fileNamesByAccused
          fileNamesByAccuser
        }
      }
    }
  }
}
    `;

/**
 * __useGetComplaintsWithFilterQuery__
 *
 * To run a query within a React component, call `useGetComplaintsWithFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComplaintsWithFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComplaintsWithFilterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetComplaintsWithFilterQuery(baseOptions?: Apollo.QueryHookOptions<GetComplaintsWithFilterQuery, GetComplaintsWithFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComplaintsWithFilterQuery, GetComplaintsWithFilterQueryVariables>(GetComplaintsWithFilterDocument, options);
      }
export function useGetComplaintsWithFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComplaintsWithFilterQuery, GetComplaintsWithFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComplaintsWithFilterQuery, GetComplaintsWithFilterQueryVariables>(GetComplaintsWithFilterDocument, options);
        }
export type GetComplaintsWithFilterQueryHookResult = ReturnType<typeof useGetComplaintsWithFilterQuery>;
export type GetComplaintsWithFilterLazyQueryHookResult = ReturnType<typeof useGetComplaintsWithFilterLazyQuery>;
export type GetComplaintsWithFilterQueryResult = Apollo.QueryResult<GetComplaintsWithFilterQuery, GetComplaintsWithFilterQueryVariables>;
export const GetArgumentsWithFilterDocument = gql`
    query GetArgumentsWithFilter($filter: ComplaintArgumentFilterInput, $take: Int, $skip: Int, $order: [ComplaintArgumentSortInput!] = [{createdDate: DESC}]) {
  complaintArgument_getComplaintArguments {
    result(where: $filter, order: $order, take: $take, skip: $skip) {
      items {
        id
        accusedResponse
        accusedResponseFileName
        netApprovedAmount
        grossApprovedAmount
        complaintId
        netCouncilApprovedAmount
        grossCouncilApprovedAmount
        councilOpinion
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
        mailRoomExpertOpinionOnExpertOpinion
        mailRoomChiefOpinionOnArgument
        mailRoomExpertOpinionOnArgument
        accuserAnswerToAccusedResponse
        suggestedAmount
        summary
        userId
        createdDate
        isDeleted
        financialSituation
        filledBy
      }
    }
    status
  }
}
    `;

/**
 * __useGetArgumentsWithFilterQuery__
 *
 * To run a query within a React component, call `useGetArgumentsWithFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArgumentsWithFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArgumentsWithFilterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetArgumentsWithFilterQuery(baseOptions?: Apollo.QueryHookOptions<GetArgumentsWithFilterQuery, GetArgumentsWithFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArgumentsWithFilterQuery, GetArgumentsWithFilterQueryVariables>(GetArgumentsWithFilterDocument, options);
      }
export function useGetArgumentsWithFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArgumentsWithFilterQuery, GetArgumentsWithFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArgumentsWithFilterQuery, GetArgumentsWithFilterQueryVariables>(GetArgumentsWithFilterDocument, options);
        }
export type GetArgumentsWithFilterQueryHookResult = ReturnType<typeof useGetArgumentsWithFilterQuery>;
export type GetArgumentsWithFilterLazyQueryHookResult = ReturnType<typeof useGetArgumentsWithFilterLazyQuery>;
export type GetArgumentsWithFilterQueryResult = Apollo.QueryResult<GetArgumentsWithFilterQuery, GetArgumentsWithFilterQueryVariables>;
export const GetCorrectionRequestsFullQueryDocument = gql`
    query getCorrectionRequestsFullQuery($filter: CorrectionRequestFilterInput, $orderBy: [CorrectionRequestSortInput!], $skip: Int, $take: Int) {
  correctionRequest_getCorrectionRequests {
    result(where: $filter, order: $orderBy, skip: $skip, take: $take) {
      items {
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
}
    `;

/**
 * __useGetCorrectionRequestsFullQueryQuery__
 *
 * To run a query within a React component, call `useGetCorrectionRequestsFullQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCorrectionRequestsFullQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCorrectionRequestsFullQueryQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetCorrectionRequestsFullQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetCorrectionRequestsFullQueryQuery, GetCorrectionRequestsFullQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCorrectionRequestsFullQueryQuery, GetCorrectionRequestsFullQueryQueryVariables>(GetCorrectionRequestsFullQueryDocument, options);
      }
export function useGetCorrectionRequestsFullQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCorrectionRequestsFullQueryQuery, GetCorrectionRequestsFullQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCorrectionRequestsFullQueryQuery, GetCorrectionRequestsFullQueryQueryVariables>(GetCorrectionRequestsFullQueryDocument, options);
        }
export type GetCorrectionRequestsFullQueryQueryHookResult = ReturnType<typeof useGetCorrectionRequestsFullQueryQuery>;
export type GetCorrectionRequestsFullQueryLazyQueryHookResult = ReturnType<typeof useGetCorrectionRequestsFullQueryLazyQuery>;
export type GetCorrectionRequestsFullQueryQueryResult = Apollo.QueryResult<GetCorrectionRequestsFullQueryQuery, GetCorrectionRequestsFullQueryQueryVariables>;
export const Create_ContractDocument = gql`
    mutation CREATE_CONTRACT($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Float, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Float, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: String!, $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $AccusedDepartmentId: String, $AccuserDepartmentId: String, $Currency: String, $fileNamesByAccuser: [String!], $generalConditionsFileName: String, $ContractGeneralType: ContractGeneralType, $agreementFileName: String, $privateTermsFileName: String, $otherAttachmentFileName: [String!]) {
  contract_addContract(
    input: {accuserRelatedPeopleByAccuser: $AccuserRelatedPeople, accusedRelatedPeopleByAccuser: $AccusedRelatedPeople, accuserNationality: $AccuserNationality, contractTypeByAccuser: $ContractType, circularNumberByAccuser: $CircularNumber, circularDateByAccuser: $CircularDate, contractSubjectByAccuser: $ContractSubject, contractNumberByAccuser: $ContractNumber, contractDateByAccuser: $ContractDate, initialBudgetByAccuser: $InitialBudget, initialTimePeriodByAccuser: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccuser: $RecommendedCoefficient, coefficientTypeByAccuser: $CoefficientType, assigningTypeByAccuser: $AssigningType, doesContainAdjustmentByAccuser: $DoesContainAdjustment, baseIndexPeriodByAccuser: $BaseIndexPeriod, operationStartDateByAccuser: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration, supervisionDepartmentByAccuser: $SupervisionDepartment, authorizedDelaysByAccuser: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser, accusedDepartmentUserId: $AccusedDepartmentId, accuserDepartmentUserId: $AccuserDepartmentId, currencyByAccuser: $Currency, fileNamesByAccuser: $fileNamesByAccuser, generalConditionsFileNameByAccuser: $generalConditionsFileName, contractGeneralTypeByAccuser: $ContractGeneralType, agreementFileNameByAccuser: $agreementFileName, privateTermsFileNameByAccuser: $privateTermsFileName, otherAttachmentFileNamesByAccuser: $otherAttachmentFileName}
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
export type Create_ContractMutationFn = Apollo.MutationFunction<Create_ContractMutation, Create_ContractMutationVariables>;

/**
 * __useCreate_ContractMutation__
 *
 * To run a mutation, you first call `useCreate_ContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_ContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContractMutation, { data, loading, error }] = useCreate_ContractMutation({
 *   variables: {
 *      AccuserRelatedPeople: // value for 'AccuserRelatedPeople'
 *      AccusedRelatedPeople: // value for 'AccusedRelatedPeople'
 *      AccuserNationality: // value for 'AccuserNationality'
 *      ContractType: // value for 'ContractType'
 *      CircularNumber: // value for 'CircularNumber'
 *      CircularDate: // value for 'CircularDate'
 *      ContractSubject: // value for 'ContractSubject'
 *      ContractNumber: // value for 'ContractNumber'
 *      ContractDate: // value for 'ContractDate'
 *      InitialBudget: // value for 'InitialBudget'
 *      InitialTimePeriod: // value for 'InitialTimePeriod'
 *      PriceListOfBasicUnitOfField: // value for 'PriceListOfBasicUnitOfField'
 *      IsSpecialPriceListAttachedToContract: // value for 'IsSpecialPriceListAttachedToContract'
 *      RecommendedCoefficient: // value for 'RecommendedCoefficient'
 *      CoefficientType: // value for 'CoefficientType'
 *      AssigningType: // value for 'AssigningType'
 *      DoesContainAdjustment: // value for 'DoesContainAdjustment'
 *      BaseIndexPeriod: // value for 'BaseIndexPeriod'
 *      OperationStartDateAccuser: // value for 'OperationStartDateAccuser'
 *      PhysicalProgressInArbitrationDateAccuser: // value for 'PhysicalProgressInArbitrationDateAccuser'
 *      FinancialProgressInArbitrationDateAccuser: // value for 'FinancialProgressInArbitrationDateAccuser'
 *      ContractStatusInArbitration: // value for 'ContractStatusInArbitration'
 *      SupervisionDepartment: // value for 'SupervisionDepartment'
 *      AuthorizedDelaysAccuser: // value for 'AuthorizedDelaysAccuser'
 *      UnauthorizedDelaysAccuser: // value for 'UnauthorizedDelaysAccuser'
 *      AccusedDepartmentId: // value for 'AccusedDepartmentId'
 *      AccuserDepartmentId: // value for 'AccuserDepartmentId'
 *      Currency: // value for 'Currency'
 *      fileNamesByAccuser: // value for 'fileNamesByAccuser'
 *      generalConditionsFileName: // value for 'generalConditionsFileName'
 *      ContractGeneralType: // value for 'ContractGeneralType'
 *      agreementFileName: // value for 'agreementFileName'
 *      privateTermsFileName: // value for 'privateTermsFileName'
 *      otherAttachmentFileName: // value for 'otherAttachmentFileName'
 *   },
 * });
 */
export function useCreate_ContractMutation(baseOptions?: Apollo.MutationHookOptions<Create_ContractMutation, Create_ContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_ContractMutation, Create_ContractMutationVariables>(Create_ContractDocument, options);
      }
export type Create_ContractMutationHookResult = ReturnType<typeof useCreate_ContractMutation>;
export type Create_ContractMutationResult = Apollo.MutationResult<Create_ContractMutation>;
export type Create_ContractMutationOptions = Apollo.BaseMutationOptions<Create_ContractMutation, Create_ContractMutationVariables>;
export const Update_Contract_By_AccusedDocument = gql`
    mutation UPDATE_CONTRACT_BY_ACCUSED($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Float, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Float, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: String!, $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $id: Int!, $Currency: String, $fileNamesByAccused: [String!], $generalConditionsFileName: String, $ContractGeneralType: ContractGeneralType, $agreementFileName: String, $privateTermsFileName: String, $otherAttachmentFileName: [String!]) {
  contract_updateContract(
    input: {id: $id, accuserRelatedPeopleByAccused: $AccuserRelatedPeople, accusedRelatedPeopleByAccused: $AccusedRelatedPeople, accusedNationality: $AccuserNationality, contractTypeByAccused: $ContractType, circularNumberByAccused: $CircularNumber, circularDateByAccused: $CircularDate, contractSubjectByAccused: $ContractSubject, contractNumberByAccused: $ContractNumber, contractDateByAccused: $ContractDate, initialBudgetByAccused: $InitialBudget, initialTimePeriodByAccused: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccused: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccused: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccused: $RecommendedCoefficient, coefficientTypeByAccused: $CoefficientType, assigningTypeByAccused: $AssigningType, doesContainAdjustmentByAccused: $DoesContainAdjustment, baseIndexPeriodByAccused: $BaseIndexPeriod, operationStartDateByAccused: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccused: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccused: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccused: $ContractStatusInArbitration, supervisionDepartmentByAccused: $SupervisionDepartment, authorizedDelaysByAccused: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccused: $UnauthorizedDelaysAccuser, currencyByAccused: $Currency, fileNamesByAccused: $fileNamesByAccused, generalConditionsFileNameByAccused: $generalConditionsFileName, contractGeneralTypeByAccused: $ContractGeneralType, agreementFileNameByAccused: $agreementFileName, privateTermsFileNameByAccused: $privateTermsFileName, otherAttachmentFileNamesByAccused: $otherAttachmentFileName}
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
export type Update_Contract_By_AccusedMutationFn = Apollo.MutationFunction<Update_Contract_By_AccusedMutation, Update_Contract_By_AccusedMutationVariables>;

/**
 * __useUpdate_Contract_By_AccusedMutation__
 *
 * To run a mutation, you first call `useUpdate_Contract_By_AccusedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Contract_By_AccusedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContractByAccusedMutation, { data, loading, error }] = useUpdate_Contract_By_AccusedMutation({
 *   variables: {
 *      AccuserRelatedPeople: // value for 'AccuserRelatedPeople'
 *      AccusedRelatedPeople: // value for 'AccusedRelatedPeople'
 *      AccuserNationality: // value for 'AccuserNationality'
 *      ContractType: // value for 'ContractType'
 *      CircularNumber: // value for 'CircularNumber'
 *      CircularDate: // value for 'CircularDate'
 *      ContractSubject: // value for 'ContractSubject'
 *      ContractNumber: // value for 'ContractNumber'
 *      ContractDate: // value for 'ContractDate'
 *      InitialBudget: // value for 'InitialBudget'
 *      InitialTimePeriod: // value for 'InitialTimePeriod'
 *      PriceListOfBasicUnitOfField: // value for 'PriceListOfBasicUnitOfField'
 *      IsSpecialPriceListAttachedToContract: // value for 'IsSpecialPriceListAttachedToContract'
 *      RecommendedCoefficient: // value for 'RecommendedCoefficient'
 *      CoefficientType: // value for 'CoefficientType'
 *      AssigningType: // value for 'AssigningType'
 *      DoesContainAdjustment: // value for 'DoesContainAdjustment'
 *      BaseIndexPeriod: // value for 'BaseIndexPeriod'
 *      OperationStartDateAccuser: // value for 'OperationStartDateAccuser'
 *      PhysicalProgressInArbitrationDateAccuser: // value for 'PhysicalProgressInArbitrationDateAccuser'
 *      FinancialProgressInArbitrationDateAccuser: // value for 'FinancialProgressInArbitrationDateAccuser'
 *      ContractStatusInArbitration: // value for 'ContractStatusInArbitration'
 *      SupervisionDepartment: // value for 'SupervisionDepartment'
 *      AuthorizedDelaysAccuser: // value for 'AuthorizedDelaysAccuser'
 *      UnauthorizedDelaysAccuser: // value for 'UnauthorizedDelaysAccuser'
 *      id: // value for 'id'
 *      Currency: // value for 'Currency'
 *      fileNamesByAccused: // value for 'fileNamesByAccused'
 *      generalConditionsFileName: // value for 'generalConditionsFileName'
 *      ContractGeneralType: // value for 'ContractGeneralType'
 *      agreementFileName: // value for 'agreementFileName'
 *      privateTermsFileName: // value for 'privateTermsFileName'
 *      otherAttachmentFileName: // value for 'otherAttachmentFileName'
 *   },
 * });
 */
export function useUpdate_Contract_By_AccusedMutation(baseOptions?: Apollo.MutationHookOptions<Update_Contract_By_AccusedMutation, Update_Contract_By_AccusedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Contract_By_AccusedMutation, Update_Contract_By_AccusedMutationVariables>(Update_Contract_By_AccusedDocument, options);
      }
export type Update_Contract_By_AccusedMutationHookResult = ReturnType<typeof useUpdate_Contract_By_AccusedMutation>;
export type Update_Contract_By_AccusedMutationResult = Apollo.MutationResult<Update_Contract_By_AccusedMutation>;
export type Update_Contract_By_AccusedMutationOptions = Apollo.BaseMutationOptions<Update_Contract_By_AccusedMutation, Update_Contract_By_AccusedMutationVariables>;
export const Update_Contract_By_AccuserDocument = gql`
    mutation UPDATE_CONTRACT_BY_ACCUSER($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Float, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Float, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: String!, $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $id: Int!, $AccusedDepartmentId: String, $AccuserDepartmentId: String, $Currency: String, $fileNamesByAccuser: [String!], $generalConditionsFileName: String, $ContractGeneralType: ContractGeneralType, $agreementFileName: String, $privateTermsFileName: String, $otherAttachmentFileName: [String!]) {
  contract_updateContract(
    input: {id: $id, accuserRelatedPeopleByAccuser: $AccuserRelatedPeople, accusedRelatedPeopleByAccuser: $AccusedRelatedPeople, accuserNationality: $AccuserNationality, contractTypeByAccuser: $ContractType, circularNumberByAccuser: $CircularNumber, circularDateByAccuser: $CircularDate, contractSubjectByAccuser: $ContractSubject, contractNumberByAccuser: $ContractNumber, contractDateByAccuser: $ContractDate, initialBudgetByAccuser: $InitialBudget, initialTimePeriodByAccuser: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccuser: $RecommendedCoefficient, coefficientTypeByAccuser: $CoefficientType, assigningTypeByAccuser: $AssigningType, doesContainAdjustmentByAccuser: $DoesContainAdjustment, baseIndexPeriodByAccuser: $BaseIndexPeriod, operationStartDateByAccuser: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration, supervisionDepartmentByAccuser: $SupervisionDepartment, authorizedDelaysByAccuser: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser, accusedDepartmentUserId: $AccusedDepartmentId, accuserDepartmentUserId: $AccuserDepartmentId, currencyByAccuser: $Currency, fileNamesByAccuser: $fileNamesByAccuser, generalConditionsFileNameByAccuser: $generalConditionsFileName, contractGeneralTypeByAccuser: $ContractGeneralType, agreementFileNameByAccuser: $agreementFileName, privateTermsFileNameByAccuser: $privateTermsFileName, otherAttachmentFileNamesByAccuser: $otherAttachmentFileName}
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
export type Update_Contract_By_AccuserMutationFn = Apollo.MutationFunction<Update_Contract_By_AccuserMutation, Update_Contract_By_AccuserMutationVariables>;

/**
 * __useUpdate_Contract_By_AccuserMutation__
 *
 * To run a mutation, you first call `useUpdate_Contract_By_AccuserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Contract_By_AccuserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContractByAccuserMutation, { data, loading, error }] = useUpdate_Contract_By_AccuserMutation({
 *   variables: {
 *      AccuserRelatedPeople: // value for 'AccuserRelatedPeople'
 *      AccusedRelatedPeople: // value for 'AccusedRelatedPeople'
 *      AccuserNationality: // value for 'AccuserNationality'
 *      ContractType: // value for 'ContractType'
 *      CircularNumber: // value for 'CircularNumber'
 *      CircularDate: // value for 'CircularDate'
 *      ContractSubject: // value for 'ContractSubject'
 *      ContractNumber: // value for 'ContractNumber'
 *      ContractDate: // value for 'ContractDate'
 *      InitialBudget: // value for 'InitialBudget'
 *      InitialTimePeriod: // value for 'InitialTimePeriod'
 *      PriceListOfBasicUnitOfField: // value for 'PriceListOfBasicUnitOfField'
 *      IsSpecialPriceListAttachedToContract: // value for 'IsSpecialPriceListAttachedToContract'
 *      RecommendedCoefficient: // value for 'RecommendedCoefficient'
 *      CoefficientType: // value for 'CoefficientType'
 *      AssigningType: // value for 'AssigningType'
 *      DoesContainAdjustment: // value for 'DoesContainAdjustment'
 *      BaseIndexPeriod: // value for 'BaseIndexPeriod'
 *      OperationStartDateAccuser: // value for 'OperationStartDateAccuser'
 *      PhysicalProgressInArbitrationDateAccuser: // value for 'PhysicalProgressInArbitrationDateAccuser'
 *      FinancialProgressInArbitrationDateAccuser: // value for 'FinancialProgressInArbitrationDateAccuser'
 *      ContractStatusInArbitration: // value for 'ContractStatusInArbitration'
 *      SupervisionDepartment: // value for 'SupervisionDepartment'
 *      AuthorizedDelaysAccuser: // value for 'AuthorizedDelaysAccuser'
 *      UnauthorizedDelaysAccuser: // value for 'UnauthorizedDelaysAccuser'
 *      id: // value for 'id'
 *      AccusedDepartmentId: // value for 'AccusedDepartmentId'
 *      AccuserDepartmentId: // value for 'AccuserDepartmentId'
 *      Currency: // value for 'Currency'
 *      fileNamesByAccuser: // value for 'fileNamesByAccuser'
 *      generalConditionsFileName: // value for 'generalConditionsFileName'
 *      ContractGeneralType: // value for 'ContractGeneralType'
 *      agreementFileName: // value for 'agreementFileName'
 *      privateTermsFileName: // value for 'privateTermsFileName'
 *      otherAttachmentFileName: // value for 'otherAttachmentFileName'
 *   },
 * });
 */
export function useUpdate_Contract_By_AccuserMutation(baseOptions?: Apollo.MutationHookOptions<Update_Contract_By_AccuserMutation, Update_Contract_By_AccuserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Contract_By_AccuserMutation, Update_Contract_By_AccuserMutationVariables>(Update_Contract_By_AccuserDocument, options);
      }
export type Update_Contract_By_AccuserMutationHookResult = ReturnType<typeof useUpdate_Contract_By_AccuserMutation>;
export type Update_Contract_By_AccuserMutationResult = Apollo.MutationResult<Update_Contract_By_AccuserMutation>;
export type Update_Contract_By_AccuserMutationOptions = Apollo.BaseMutationOptions<Update_Contract_By_AccuserMutation, Update_Contract_By_AccuserMutationVariables>;
export const Update_Contract_By_ExpertDocument = gql`
    mutation UPDATE_CONTRACT_BY_EXPERT($isExecutive: Boolean!, $id: Int!) {
  contract_updateContract(input: {id: $id, isExecutiveByExpert: $isExecutive}) {
    result {
      id
      isExecutiveByAccused
      isExecutiveByAccuser
      isExecutiveByExpert
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Contract_By_ExpertMutationFn = Apollo.MutationFunction<Update_Contract_By_ExpertMutation, Update_Contract_By_ExpertMutationVariables>;

/**
 * __useUpdate_Contract_By_ExpertMutation__
 *
 * To run a mutation, you first call `useUpdate_Contract_By_ExpertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Contract_By_ExpertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContractByExpertMutation, { data, loading, error }] = useUpdate_Contract_By_ExpertMutation({
 *   variables: {
 *      isExecutive: // value for 'isExecutive'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Contract_By_ExpertMutation(baseOptions?: Apollo.MutationHookOptions<Update_Contract_By_ExpertMutation, Update_Contract_By_ExpertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Contract_By_ExpertMutation, Update_Contract_By_ExpertMutationVariables>(Update_Contract_By_ExpertDocument, options);
      }
export type Update_Contract_By_ExpertMutationHookResult = ReturnType<typeof useUpdate_Contract_By_ExpertMutation>;
export type Update_Contract_By_ExpertMutationResult = Apollo.MutationResult<Update_Contract_By_ExpertMutation>;
export type Update_Contract_By_ExpertMutationOptions = Apollo.BaseMutationOptions<Update_Contract_By_ExpertMutation, Update_Contract_By_ExpertMutationVariables>;
export const DeleteContractDocument = gql`
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
export type DeleteContractMutationFn = Apollo.MutationFunction<DeleteContractMutation, DeleteContractMutationVariables>;

/**
 * __useDeleteContractMutation__
 *
 * To run a mutation, you first call `useDeleteContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContractMutation, { data, loading, error }] = useDeleteContractMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContractMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContractMutation, DeleteContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContractMutation, DeleteContractMutationVariables>(DeleteContractDocument, options);
      }
export type DeleteContractMutationHookResult = ReturnType<typeof useDeleteContractMutation>;
export type DeleteContractMutationResult = Apollo.MutationResult<DeleteContractMutation>;
export type DeleteContractMutationOptions = Apollo.BaseMutationOptions<DeleteContractMutation, DeleteContractMutationVariables>;
export const GetContractsDocument = gql`
    query GetContracts {
  contract_getContracts {
    result {
      items {
        id
        contractNumberByAccuser
        contractDateByAccuser
      }
    }
  }
}
    `;

/**
 * __useGetContractsQuery__
 *
 * To run a query within a React component, call `useGetContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContractsQuery(baseOptions?: Apollo.QueryHookOptions<GetContractsQuery, GetContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractsQuery, GetContractsQueryVariables>(GetContractsDocument, options);
      }
export function useGetContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractsQuery, GetContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractsQuery, GetContractsQueryVariables>(GetContractsDocument, options);
        }
export type GetContractsQueryHookResult = ReturnType<typeof useGetContractsQuery>;
export type GetContractsLazyQueryHookResult = ReturnType<typeof useGetContractsLazyQuery>;
export type GetContractsQueryResult = Apollo.QueryResult<GetContractsQuery, GetContractsQueryVariables>;
export const GetContractDocument = gql`
    query GetContract($id: Int!) {
  contract_getContracts {
    result(where: {id: {eq: $id}}) {
      items {
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
        isExecutiveByAccused
        isExecutiveByAccuser
        isExecutiveByExpert
        fileNamesByAccused
        fileNamesByAccuser
        currencyByAccused
        currencyByAccuser
        generalConditionsFileNameByAccuser
        generalConditionsFileNameByAccused
        contractGeneralTypeByAccused
        contractGeneralTypeByAccuser
        sourceOfFundingTitle
      }
    }
    status
  }
}
    `;

/**
 * __useGetContractQuery__
 *
 * To run a query within a React component, call `useGetContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContractQuery(baseOptions: Apollo.QueryHookOptions<GetContractQuery, GetContractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractQuery, GetContractQueryVariables>(GetContractDocument, options);
      }
export function useGetContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractQuery, GetContractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractQuery, GetContractQueryVariables>(GetContractDocument, options);
        }
export type GetContractQueryHookResult = ReturnType<typeof useGetContractQuery>;
export type GetContractLazyQueryHookResult = ReturnType<typeof useGetContractLazyQuery>;
export type GetContractQueryResult = Apollo.QueryResult<GetContractQuery, GetContractQueryVariables>;
export const GetPublicContractsDocument = gql`
    query GetPublicContracts($filter: PublicContractFilterInput, $order: [PublicContractSortInput!], $skip: Int, $take: Int) {
  publicContract_getPublicContracts {
    result(where: $filter, order: $order, skip: $skip, take: $take) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      items {
        guid
        fullName
        executiveTitle
        nationalCode
        id
        isDeleted
        createdDate
        lastModifiedDate
        contractID
        contractSubject
        generalConditionTitle
        sourceOfFundingTitle
        city
        agreeAmountRial
        agreeDate
        jobReferenceTitle
        contractCategoryTitle
      }
    }
    status
  }
}
    `;

/**
 * __useGetPublicContractsQuery__
 *
 * To run a query within a React component, call `useGetPublicContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicContractsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      order: // value for 'order'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetPublicContractsQuery(baseOptions?: Apollo.QueryHookOptions<GetPublicContractsQuery, GetPublicContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicContractsQuery, GetPublicContractsQueryVariables>(GetPublicContractsDocument, options);
      }
export function useGetPublicContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicContractsQuery, GetPublicContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicContractsQuery, GetPublicContractsQueryVariables>(GetPublicContractsDocument, options);
        }
export type GetPublicContractsQueryHookResult = ReturnType<typeof useGetPublicContractsQuery>;
export type GetPublicContractsLazyQueryHookResult = ReturnType<typeof useGetPublicContractsLazyQuery>;
export type GetPublicContractsQueryResult = Apollo.QueryResult<GetPublicContractsQuery, GetPublicContractsQueryVariables>;
export const SetCouncilListMutationDocument = gql`
    mutation setCouncilListMutation($ids: [Int!]!) {
  complaint_setInCouncilList(entityIds: $ids) {
    result {
      fileNames
      result {
        key
        value
      }
    }
    status {
      code
      value
    }
  }
}
    `;
export type SetCouncilListMutationMutationFn = Apollo.MutationFunction<SetCouncilListMutationMutation, SetCouncilListMutationMutationVariables>;

/**
 * __useSetCouncilListMutationMutation__
 *
 * To run a mutation, you first call `useSetCouncilListMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCouncilListMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCouncilListMutationMutation, { data, loading, error }] = useSetCouncilListMutationMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useSetCouncilListMutationMutation(baseOptions?: Apollo.MutationHookOptions<SetCouncilListMutationMutation, SetCouncilListMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetCouncilListMutationMutation, SetCouncilListMutationMutationVariables>(SetCouncilListMutationDocument, options);
      }
export type SetCouncilListMutationMutationHookResult = ReturnType<typeof useSetCouncilListMutationMutation>;
export type SetCouncilListMutationMutationResult = Apollo.MutationResult<SetCouncilListMutationMutation>;
export type SetCouncilListMutationMutationOptions = Apollo.BaseMutationOptions<SetCouncilListMutationMutation, SetCouncilListMutationMutationVariables>;
export const GetChildrenOfParentDocument = gql`
    query GetChildrenOfParent($parentType: HandlingType!) {
  user_getChildrenOfParent(parentType: $parentType) {
    result {
      fullName
      parentId
      id
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetChildrenOfParentQuery__
 *
 * To run a query within a React component, call `useGetChildrenOfParentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChildrenOfParentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChildrenOfParentQuery({
 *   variables: {
 *      parentType: // value for 'parentType'
 *   },
 * });
 */
export function useGetChildrenOfParentQuery(baseOptions: Apollo.QueryHookOptions<GetChildrenOfParentQuery, GetChildrenOfParentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChildrenOfParentQuery, GetChildrenOfParentQueryVariables>(GetChildrenOfParentDocument, options);
      }
export function useGetChildrenOfParentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChildrenOfParentQuery, GetChildrenOfParentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChildrenOfParentQuery, GetChildrenOfParentQueryVariables>(GetChildrenOfParentDocument, options);
        }
export type GetChildrenOfParentQueryHookResult = ReturnType<typeof useGetChildrenOfParentQuery>;
export type GetChildrenOfParentLazyQueryHookResult = ReturnType<typeof useGetChildrenOfParentLazyQuery>;
export type GetChildrenOfParentQueryResult = Apollo.QueryResult<GetChildrenOfParentQuery, GetChildrenOfParentQueryVariables>;
export const AddDocsRequestMutationDocument = gql`
    mutation AddDocsRequestMutation($input: DocumentRequestInput!) {
  documentRequest_addDocumentRequest(input: $input) {
    result {
      userId
      complaintId
      requestedDocumentName
      requestedDocumentFileNameAccuser
      requestedDocumentFileNameAccused
      id
    }
  }
}
    `;
export type AddDocsRequestMutationMutationFn = Apollo.MutationFunction<AddDocsRequestMutationMutation, AddDocsRequestMutationMutationVariables>;

/**
 * __useAddDocsRequestMutationMutation__
 *
 * To run a mutation, you first call `useAddDocsRequestMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDocsRequestMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDocsRequestMutationMutation, { data, loading, error }] = useAddDocsRequestMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDocsRequestMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddDocsRequestMutationMutation, AddDocsRequestMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDocsRequestMutationMutation, AddDocsRequestMutationMutationVariables>(AddDocsRequestMutationDocument, options);
      }
export type AddDocsRequestMutationMutationHookResult = ReturnType<typeof useAddDocsRequestMutationMutation>;
export type AddDocsRequestMutationMutationResult = Apollo.MutationResult<AddDocsRequestMutationMutation>;
export type AddDocsRequestMutationMutationOptions = Apollo.BaseMutationOptions<AddDocsRequestMutationMutation, AddDocsRequestMutationMutationVariables>;
export const DeleteRequestedDocMutationDocument = gql`
    mutation DeleteRequestedDocMutation($id: Int!) {
  documentRequest_deleteDocumentRequest(entityId: $id) {
    status {
      code
      value
    }
    result {
      id
    }
  }
}
    `;
export type DeleteRequestedDocMutationMutationFn = Apollo.MutationFunction<DeleteRequestedDocMutationMutation, DeleteRequestedDocMutationMutationVariables>;

/**
 * __useDeleteRequestedDocMutationMutation__
 *
 * To run a mutation, you first call `useDeleteRequestedDocMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequestedDocMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRequestedDocMutationMutation, { data, loading, error }] = useDeleteRequestedDocMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRequestedDocMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRequestedDocMutationMutation, DeleteRequestedDocMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRequestedDocMutationMutation, DeleteRequestedDocMutationMutationVariables>(DeleteRequestedDocMutationDocument, options);
      }
export type DeleteRequestedDocMutationMutationHookResult = ReturnType<typeof useDeleteRequestedDocMutationMutation>;
export type DeleteRequestedDocMutationMutationResult = Apollo.MutationResult<DeleteRequestedDocMutationMutation>;
export type DeleteRequestedDocMutationMutationOptions = Apollo.BaseMutationOptions<DeleteRequestedDocMutationMutation, DeleteRequestedDocMutationMutationVariables>;
export const GetReqestedDocsQueryDocument = gql`
    query GetReqestedDocsQuery($filter: DocumentRequestFilterInput, $order: [DocumentRequestSortInput!], $skip: Int, $take: Int) {
  documentRequest_getDocumentRequests {
    result(where: $filter, order: $order, skip: $skip, take: $take) {
      items {
        complaintId
        requestedDocumentName
        requestedDocumentFileNameAccuser
        requestedDocumentFileNameAccused
        isDeleted
        createdDate
        id
        userId
        target
      }
    }
  }
}
    `;

/**
 * __useGetReqestedDocsQueryQuery__
 *
 * To run a query within a React component, call `useGetReqestedDocsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReqestedDocsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReqestedDocsQueryQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      order: // value for 'order'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetReqestedDocsQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetReqestedDocsQueryQuery, GetReqestedDocsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReqestedDocsQueryQuery, GetReqestedDocsQueryQueryVariables>(GetReqestedDocsQueryDocument, options);
      }
export function useGetReqestedDocsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReqestedDocsQueryQuery, GetReqestedDocsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReqestedDocsQueryQuery, GetReqestedDocsQueryQueryVariables>(GetReqestedDocsQueryDocument, options);
        }
export type GetReqestedDocsQueryQueryHookResult = ReturnType<typeof useGetReqestedDocsQueryQuery>;
export type GetReqestedDocsQueryLazyQueryHookResult = ReturnType<typeof useGetReqestedDocsQueryLazyQuery>;
export type GetReqestedDocsQueryQueryResult = Apollo.QueryResult<GetReqestedDocsQueryQuery, GetReqestedDocsQueryQueryVariables>;
export const UpdateRequestedDocDocument = gql`
    mutation UpdateRequestedDoc($input: DocumentRequestInput!) {
  documentRequest_updateDocumentRequest(input: $input) {
    result {
      userId
      requestedDocumentName
      requestedDocumentFileNameAccuser
      requestedDocumentFileNameAccused
      target
      id
      complaintId
    }
    status {
      code
      value
    }
  }
}
    `;
export type UpdateRequestedDocMutationFn = Apollo.MutationFunction<UpdateRequestedDocMutation, UpdateRequestedDocMutationVariables>;

/**
 * __useUpdateRequestedDocMutation__
 *
 * To run a mutation, you first call `useUpdateRequestedDocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRequestedDocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRequestedDocMutation, { data, loading, error }] = useUpdateRequestedDocMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRequestedDocMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRequestedDocMutation, UpdateRequestedDocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRequestedDocMutation, UpdateRequestedDocMutationVariables>(UpdateRequestedDocDocument, options);
      }
export type UpdateRequestedDocMutationHookResult = ReturnType<typeof useUpdateRequestedDocMutation>;
export type UpdateRequestedDocMutationResult = Apollo.MutationResult<UpdateRequestedDocMutation>;
export type UpdateRequestedDocMutationOptions = Apollo.BaseMutationOptions<UpdateRequestedDocMutation, UpdateRequestedDocMutationVariables>;
export const GetFileQueryDocument = gql`
    query getFileQuery($id: Int!) {
  fileGallery_getFile(entityId: $id) {
    result {
      id
      name
      user {
        fullName
        id
      }
      complaintFiles {
        fileId
        title
        description
      }
      createdDate
      isDeleted
      lastModifiedDate
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetFileQueryQuery__
 *
 * To run a query within a React component, call `useGetFileQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFileQueryQuery(baseOptions: Apollo.QueryHookOptions<GetFileQueryQuery, GetFileQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFileQueryQuery, GetFileQueryQueryVariables>(GetFileQueryDocument, options);
      }
export function useGetFileQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileQueryQuery, GetFileQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFileQueryQuery, GetFileQueryQueryVariables>(GetFileQueryDocument, options);
        }
export type GetFileQueryQueryHookResult = ReturnType<typeof useGetFileQueryQuery>;
export type GetFileQueryLazyQueryHookResult = ReturnType<typeof useGetFileQueryLazyQuery>;
export type GetFileQueryQueryResult = Apollo.QueryResult<GetFileQueryQuery, GetFileQueryQueryVariables>;
export const GetFileFullDocument = gql`
    query GetFileFull($filter: FileGalleryFilterInput, $order: [FileGallerySortInput!], $skip: Int, $take: Int) {
  fileGallery_getFiles {
    result(where: $filter, order: $order, skip: $skip, take: $take) {
      items {
        id
        userId
        name
        user {
          fullName
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetFileFullQuery__
 *
 * To run a query within a React component, call `useGetFileFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileFullQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      order: // value for 'order'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetFileFullQuery(baseOptions?: Apollo.QueryHookOptions<GetFileFullQuery, GetFileFullQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFileFullQuery, GetFileFullQueryVariables>(GetFileFullDocument, options);
      }
export function useGetFileFullLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileFullQuery, GetFileFullQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFileFullQuery, GetFileFullQueryVariables>(GetFileFullDocument, options);
        }
export type GetFileFullQueryHookResult = ReturnType<typeof useGetFileFullQuery>;
export type GetFileFullLazyQueryHookResult = ReturnType<typeof useGetFileFullLazyQuery>;
export type GetFileFullQueryResult = Apollo.QueryResult<GetFileFullQuery, GetFileFullQueryVariables>;
export const GetUserProileDocument = gql`
    query GetUserProile($nationalCode: String!) {
  companyProfile_getCompanyProfiles {
    status
    result(where: {nationalCode: {eq: $nationalCode}}) {
      items {
        webAddress
        smsNumber
        activityEndDate
        id
        isDeleted
        createdDate
        registerNumber
        registerDate
        postCode
        nationalCode
        name
        issuanceDate
        emailAddress
        addressDesc
      }
    }
  }
}
    `;

/**
 * __useGetUserProileQuery__
 *
 * To run a query within a React component, call `useGetUserProileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProileQuery({
 *   variables: {
 *      nationalCode: // value for 'nationalCode'
 *   },
 * });
 */
export function useGetUserProileQuery(baseOptions: Apollo.QueryHookOptions<GetUserProileQuery, GetUserProileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProileQuery, GetUserProileQueryVariables>(GetUserProileDocument, options);
      }
export function useGetUserProileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProileQuery, GetUserProileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProileQuery, GetUserProileQueryVariables>(GetUserProileDocument, options);
        }
export type GetUserProileQueryHookResult = ReturnType<typeof useGetUserProileQuery>;
export type GetUserProileLazyQueryHookResult = ReturnType<typeof useGetUserProileLazyQuery>;
export type GetUserProileQueryResult = Apollo.QueryResult<GetUserProileQuery, GetUserProileQueryVariables>;
export const Create_Installment_TableDocument = gql`
    mutation CREATE_INSTALLMENT_TABLE($contractId: Int, $paymentTotal: Decimal, $registrarType: RegistrarType, $remainingPayment: Decimal, $userId: String) {
  installmentTable_addInstallmentTable(
    input: {contractId: $contractId, paymentTotal: $paymentTotal, filledBy: $registrarType, remainingPayment: $remainingPayment, userId: $userId}
  ) {
    result {
      id
      userId
      contractId
      paymentTotal
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Installment_TableMutationFn = Apollo.MutationFunction<Create_Installment_TableMutation, Create_Installment_TableMutationVariables>;

/**
 * __useCreate_Installment_TableMutation__
 *
 * To run a mutation, you first call `useCreate_Installment_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Installment_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstallmentTableMutation, { data, loading, error }] = useCreate_Installment_TableMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      paymentTotal: // value for 'paymentTotal'
 *      registrarType: // value for 'registrarType'
 *      remainingPayment: // value for 'remainingPayment'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreate_Installment_TableMutation(baseOptions?: Apollo.MutationHookOptions<Create_Installment_TableMutation, Create_Installment_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Installment_TableMutation, Create_Installment_TableMutationVariables>(Create_Installment_TableDocument, options);
      }
export type Create_Installment_TableMutationHookResult = ReturnType<typeof useCreate_Installment_TableMutation>;
export type Create_Installment_TableMutationResult = Apollo.MutationResult<Create_Installment_TableMutation>;
export type Create_Installment_TableMutationOptions = Apollo.BaseMutationOptions<Create_Installment_TableMutation, Create_Installment_TableMutationVariables>;
export const Update_Installment_TableDocument = gql`
    mutation UPDATE_INSTALLMENT_TABLE($contractId: Int, $paymentTotal: Decimal, $registrarType: RegistrarType, $remainingPayment: Decimal!, $userId: String, $id: Int!) {
  installmentTable_updateInstallmentTable(
    input: {contractId: $contractId, paymentTotal: $paymentTotal, filledBy: $registrarType, remainingPayment: $remainingPayment, userId: $userId, id: $id}
  ) {
    result {
      userId
      contractId
      paymentTotal
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Installment_TableMutationFn = Apollo.MutationFunction<Update_Installment_TableMutation, Update_Installment_TableMutationVariables>;

/**
 * __useUpdate_Installment_TableMutation__
 *
 * To run a mutation, you first call `useUpdate_Installment_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Installment_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInstallmentTableMutation, { data, loading, error }] = useUpdate_Installment_TableMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      paymentTotal: // value for 'paymentTotal'
 *      registrarType: // value for 'registrarType'
 *      remainingPayment: // value for 'remainingPayment'
 *      userId: // value for 'userId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Installment_TableMutation(baseOptions?: Apollo.MutationHookOptions<Update_Installment_TableMutation, Update_Installment_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Installment_TableMutation, Update_Installment_TableMutationVariables>(Update_Installment_TableDocument, options);
      }
export type Update_Installment_TableMutationHookResult = ReturnType<typeof useUpdate_Installment_TableMutation>;
export type Update_Installment_TableMutationResult = Apollo.MutationResult<Update_Installment_TableMutation>;
export type Update_Installment_TableMutationOptions = Apollo.BaseMutationOptions<Update_Installment_TableMutation, Update_Installment_TableMutationVariables>;
export const Delete_Installment_TableDocument = gql`
    mutation DELETE_INSTALLMENT_TABLE($id: Int!) {
  installmentTable_deleteInstallmentTable(entityId: $id) {
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
export type Delete_Installment_TableMutationFn = Apollo.MutationFunction<Delete_Installment_TableMutation, Delete_Installment_TableMutationVariables>;

/**
 * __useDelete_Installment_TableMutation__
 *
 * To run a mutation, you first call `useDelete_Installment_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Installment_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInstallmentTableMutation, { data, loading, error }] = useDelete_Installment_TableMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Installment_TableMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Installment_TableMutation, Delete_Installment_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Installment_TableMutation, Delete_Installment_TableMutationVariables>(Delete_Installment_TableDocument, options);
      }
export type Delete_Installment_TableMutationHookResult = ReturnType<typeof useDelete_Installment_TableMutation>;
export type Delete_Installment_TableMutationResult = Apollo.MutationResult<Delete_Installment_TableMutation>;
export type Delete_Installment_TableMutationOptions = Apollo.BaseMutationOptions<Delete_Installment_TableMutation, Delete_Installment_TableMutationVariables>;
export const Create_InstallmentDocument = gql`
    mutation CREATE_INSTALLMENT($installmentTableId: Int!, $amount: Decimal, $date: Date, $registrarType: RegistrarType, $title: String) {
  installment_addInstallment(
    input: {installmentTableId: $installmentTableId, amount: $amount, date: $date, registrarType: $registrarType, title: $title}
  ) {
    result {
      id
      amount
      date
      filledBy
      title
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_InstallmentMutationFn = Apollo.MutationFunction<Create_InstallmentMutation, Create_InstallmentMutationVariables>;

/**
 * __useCreate_InstallmentMutation__
 *
 * To run a mutation, you first call `useCreate_InstallmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_InstallmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstallmentMutation, { data, loading, error }] = useCreate_InstallmentMutation({
 *   variables: {
 *      installmentTableId: // value for 'installmentTableId'
 *      amount: // value for 'amount'
 *      date: // value for 'date'
 *      registrarType: // value for 'registrarType'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreate_InstallmentMutation(baseOptions?: Apollo.MutationHookOptions<Create_InstallmentMutation, Create_InstallmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_InstallmentMutation, Create_InstallmentMutationVariables>(Create_InstallmentDocument, options);
      }
export type Create_InstallmentMutationHookResult = ReturnType<typeof useCreate_InstallmentMutation>;
export type Create_InstallmentMutationResult = Apollo.MutationResult<Create_InstallmentMutation>;
export type Create_InstallmentMutationOptions = Apollo.BaseMutationOptions<Create_InstallmentMutation, Create_InstallmentMutationVariables>;
export const Update_InstallmentDocument = gql`
    mutation UPDATE_INSTALLMENT($installmentTableId: Int!, $amount: Decimal, $date: Date, $registrarType: RegistrarType, $title: String, $id: Int!) {
  installment_updateInstallment(
    input: {installmentTableId: $installmentTableId, amount: $amount, date: $date, registrarType: $registrarType, title: $title, id: $id}
  ) {
    result {
      id
      amount
      date
      filledBy
      title
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_InstallmentMutationFn = Apollo.MutationFunction<Update_InstallmentMutation, Update_InstallmentMutationVariables>;

/**
 * __useUpdate_InstallmentMutation__
 *
 * To run a mutation, you first call `useUpdate_InstallmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_InstallmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInstallmentMutation, { data, loading, error }] = useUpdate_InstallmentMutation({
 *   variables: {
 *      installmentTableId: // value for 'installmentTableId'
 *      amount: // value for 'amount'
 *      date: // value for 'date'
 *      registrarType: // value for 'registrarType'
 *      title: // value for 'title'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_InstallmentMutation(baseOptions?: Apollo.MutationHookOptions<Update_InstallmentMutation, Update_InstallmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_InstallmentMutation, Update_InstallmentMutationVariables>(Update_InstallmentDocument, options);
      }
export type Update_InstallmentMutationHookResult = ReturnType<typeof useUpdate_InstallmentMutation>;
export type Update_InstallmentMutationResult = Apollo.MutationResult<Update_InstallmentMutation>;
export type Update_InstallmentMutationOptions = Apollo.BaseMutationOptions<Update_InstallmentMutation, Update_InstallmentMutationVariables>;
export const Delete_InstallmentDocument = gql`
    mutation DELETE_INSTALLMENT($id: Int!) {
  installment_deleteInstallment(entityId: $id) {
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
export type Delete_InstallmentMutationFn = Apollo.MutationFunction<Delete_InstallmentMutation, Delete_InstallmentMutationVariables>;

/**
 * __useDelete_InstallmentMutation__
 *
 * To run a mutation, you first call `useDelete_InstallmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_InstallmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInstallmentMutation, { data, loading, error }] = useDelete_InstallmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_InstallmentMutation(baseOptions?: Apollo.MutationHookOptions<Delete_InstallmentMutation, Delete_InstallmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_InstallmentMutation, Delete_InstallmentMutationVariables>(Delete_InstallmentDocument, options);
      }
export type Delete_InstallmentMutationHookResult = ReturnType<typeof useDelete_InstallmentMutation>;
export type Delete_InstallmentMutationResult = Apollo.MutationResult<Delete_InstallmentMutation>;
export type Delete_InstallmentMutationOptions = Apollo.BaseMutationOptions<Delete_InstallmentMutation, Delete_InstallmentMutationVariables>;
export const Create_Installment_PartDocument = gql`
    mutation CREATE_INSTALLMENT_PART($installmentId: Int!, $amount: Decimal, $date: Date, $registrarType: RegistrarType) {
  installmentPart_addInstallmentPart(
    input: {installmentId: $installmentId, amount: $amount, date: $date, registrarType: $registrarType}
  ) {
    result {
      id
      amount
      date
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Installment_PartMutationFn = Apollo.MutationFunction<Create_Installment_PartMutation, Create_Installment_PartMutationVariables>;

/**
 * __useCreate_Installment_PartMutation__
 *
 * To run a mutation, you first call `useCreate_Installment_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Installment_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstallmentPartMutation, { data, loading, error }] = useCreate_Installment_PartMutation({
 *   variables: {
 *      installmentId: // value for 'installmentId'
 *      amount: // value for 'amount'
 *      date: // value for 'date'
 *      registrarType: // value for 'registrarType'
 *   },
 * });
 */
export function useCreate_Installment_PartMutation(baseOptions?: Apollo.MutationHookOptions<Create_Installment_PartMutation, Create_Installment_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Installment_PartMutation, Create_Installment_PartMutationVariables>(Create_Installment_PartDocument, options);
      }
export type Create_Installment_PartMutationHookResult = ReturnType<typeof useCreate_Installment_PartMutation>;
export type Create_Installment_PartMutationResult = Apollo.MutationResult<Create_Installment_PartMutation>;
export type Create_Installment_PartMutationOptions = Apollo.BaseMutationOptions<Create_Installment_PartMutation, Create_Installment_PartMutationVariables>;
export const Update_Installment_PartDocument = gql`
    mutation UPDATE_INSTALLMENT_PART($installmentId: Int!, $amount: Decimal, $date: Date, $registrarType: RegistrarType, $id: Int!) {
  installmentPart_updateInstallmentPart(
    input: {installmentId: $installmentId, amount: $amount, date: $date, registrarType: $registrarType, id: $id}
  ) {
    result {
      id
      amount
      date
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Installment_PartMutationFn = Apollo.MutationFunction<Update_Installment_PartMutation, Update_Installment_PartMutationVariables>;

/**
 * __useUpdate_Installment_PartMutation__
 *
 * To run a mutation, you first call `useUpdate_Installment_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Installment_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInstallmentPartMutation, { data, loading, error }] = useUpdate_Installment_PartMutation({
 *   variables: {
 *      installmentId: // value for 'installmentId'
 *      amount: // value for 'amount'
 *      date: // value for 'date'
 *      registrarType: // value for 'registrarType'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Installment_PartMutation(baseOptions?: Apollo.MutationHookOptions<Update_Installment_PartMutation, Update_Installment_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Installment_PartMutation, Update_Installment_PartMutationVariables>(Update_Installment_PartDocument, options);
      }
export type Update_Installment_PartMutationHookResult = ReturnType<typeof useUpdate_Installment_PartMutation>;
export type Update_Installment_PartMutationResult = Apollo.MutationResult<Update_Installment_PartMutation>;
export type Update_Installment_PartMutationOptions = Apollo.BaseMutationOptions<Update_Installment_PartMutation, Update_Installment_PartMutationVariables>;
export const Delete_Installment_PartDocument = gql`
    mutation DELETE_INSTALLMENT_PART($id: Int!) {
  installmentPart_deleteInstallmentPart(entityId: $id) {
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
export type Delete_Installment_PartMutationFn = Apollo.MutationFunction<Delete_Installment_PartMutation, Delete_Installment_PartMutationVariables>;

/**
 * __useDelete_Installment_PartMutation__
 *
 * To run a mutation, you first call `useDelete_Installment_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Installment_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInstallmentPartMutation, { data, loading, error }] = useDelete_Installment_PartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Installment_PartMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Installment_PartMutation, Delete_Installment_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Installment_PartMutation, Delete_Installment_PartMutationVariables>(Delete_Installment_PartDocument, options);
      }
export type Delete_Installment_PartMutationHookResult = ReturnType<typeof useDelete_Installment_PartMutation>;
export type Delete_Installment_PartMutationResult = Apollo.MutationResult<Delete_Installment_PartMutation>;
export type Delete_Installment_PartMutationOptions = Apollo.BaseMutationOptions<Delete_Installment_PartMutation, Delete_Installment_PartMutationVariables>;
export const Create_Adjustment_Statement_TableDocument = gql`
    mutation CREATE_ADJUSTMENT_STATEMENT_TABLE($contractId: Int, $filledBy: RegistrarType, $userId: String) {
  adjustmentStatementTable_addAdjustmentStatementTable(
    input: {contractId: $contractId, filledBy: $filledBy, userId: $userId}
  ) {
    result {
      id
      contractId
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Adjustment_Statement_TableMutationFn = Apollo.MutationFunction<Create_Adjustment_Statement_TableMutation, Create_Adjustment_Statement_TableMutationVariables>;

/**
 * __useCreate_Adjustment_Statement_TableMutation__
 *
 * To run a mutation, you first call `useCreate_Adjustment_Statement_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Adjustment_Statement_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdjustmentStatementTableMutation, { data, loading, error }] = useCreate_Adjustment_Statement_TableMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      filledBy: // value for 'filledBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreate_Adjustment_Statement_TableMutation(baseOptions?: Apollo.MutationHookOptions<Create_Adjustment_Statement_TableMutation, Create_Adjustment_Statement_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Adjustment_Statement_TableMutation, Create_Adjustment_Statement_TableMutationVariables>(Create_Adjustment_Statement_TableDocument, options);
      }
export type Create_Adjustment_Statement_TableMutationHookResult = ReturnType<typeof useCreate_Adjustment_Statement_TableMutation>;
export type Create_Adjustment_Statement_TableMutationResult = Apollo.MutationResult<Create_Adjustment_Statement_TableMutation>;
export type Create_Adjustment_Statement_TableMutationOptions = Apollo.BaseMutationOptions<Create_Adjustment_Statement_TableMutation, Create_Adjustment_Statement_TableMutationVariables>;
export const Update_Adjustment_Statement_TableDocument = gql`
    mutation UPDATE_ADJUSTMENT_STATEMENT_TABLE($contractId: Int, $filledBy: RegistrarType, $userId: String, $id: Int!) {
  adjustmentStatementTable_updateAdjustmentStatementTable(
    input: {contractId: $contractId, filledBy: $filledBy, userId: $userId, id: $id}
  ) {
    result {
      id
      contractId
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Adjustment_Statement_TableMutationFn = Apollo.MutationFunction<Update_Adjustment_Statement_TableMutation, Update_Adjustment_Statement_TableMutationVariables>;

/**
 * __useUpdate_Adjustment_Statement_TableMutation__
 *
 * To run a mutation, you first call `useUpdate_Adjustment_Statement_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Adjustment_Statement_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdjustmentStatementTableMutation, { data, loading, error }] = useUpdate_Adjustment_Statement_TableMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      filledBy: // value for 'filledBy'
 *      userId: // value for 'userId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Adjustment_Statement_TableMutation(baseOptions?: Apollo.MutationHookOptions<Update_Adjustment_Statement_TableMutation, Update_Adjustment_Statement_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Adjustment_Statement_TableMutation, Update_Adjustment_Statement_TableMutationVariables>(Update_Adjustment_Statement_TableDocument, options);
      }
export type Update_Adjustment_Statement_TableMutationHookResult = ReturnType<typeof useUpdate_Adjustment_Statement_TableMutation>;
export type Update_Adjustment_Statement_TableMutationResult = Apollo.MutationResult<Update_Adjustment_Statement_TableMutation>;
export type Update_Adjustment_Statement_TableMutationOptions = Apollo.BaseMutationOptions<Update_Adjustment_Statement_TableMutation, Update_Adjustment_Statement_TableMutationVariables>;
export const Delete_Adjustment_Statement_TableDocument = gql`
    mutation DELETE_ADJUSTMENT_STATEMENT_TABLE($id: Int!) {
  adjustmentStatementTable_deleteAdjustmentStatementTable(entityId: $id) {
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
export type Delete_Adjustment_Statement_TableMutationFn = Apollo.MutationFunction<Delete_Adjustment_Statement_TableMutation, Delete_Adjustment_Statement_TableMutationVariables>;

/**
 * __useDelete_Adjustment_Statement_TableMutation__
 *
 * To run a mutation, you first call `useDelete_Adjustment_Statement_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Adjustment_Statement_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdjustmentStatementTableMutation, { data, loading, error }] = useDelete_Adjustment_Statement_TableMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Adjustment_Statement_TableMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Adjustment_Statement_TableMutation, Delete_Adjustment_Statement_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Adjustment_Statement_TableMutation, Delete_Adjustment_Statement_TableMutationVariables>(Delete_Adjustment_Statement_TableDocument, options);
      }
export type Delete_Adjustment_Statement_TableMutationHookResult = ReturnType<typeof useDelete_Adjustment_Statement_TableMutation>;
export type Delete_Adjustment_Statement_TableMutationResult = Apollo.MutationResult<Delete_Adjustment_Statement_TableMutation>;
export type Delete_Adjustment_Statement_TableMutationOptions = Apollo.BaseMutationOptions<Delete_Adjustment_Statement_TableMutation, Delete_Adjustment_Statement_TableMutationVariables>;
export const Create_Adjustment_StatementDocument = gql`
    mutation CREATE_ADJUSTMENT_STATEMENT($adjustmentStatementTableId: Int!, $filledBy: RegistrarType, $title: String, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date) {
  adjustmentStatement_addAdjustmentStatement(
    input: {adjustmentStatementTableId: $adjustmentStatementTableId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy, title: $title}
  ) {
    result {
      id
      adjustmentStatementTableId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
      title
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Adjustment_StatementMutationFn = Apollo.MutationFunction<Create_Adjustment_StatementMutation, Create_Adjustment_StatementMutationVariables>;

/**
 * __useCreate_Adjustment_StatementMutation__
 *
 * To run a mutation, you first call `useCreate_Adjustment_StatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Adjustment_StatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdjustmentStatementMutation, { data, loading, error }] = useCreate_Adjustment_StatementMutation({
 *   variables: {
 *      adjustmentStatementTableId: // value for 'adjustmentStatementTableId'
 *      filledBy: // value for 'filledBy'
 *      title: // value for 'title'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *   },
 * });
 */
export function useCreate_Adjustment_StatementMutation(baseOptions?: Apollo.MutationHookOptions<Create_Adjustment_StatementMutation, Create_Adjustment_StatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Adjustment_StatementMutation, Create_Adjustment_StatementMutationVariables>(Create_Adjustment_StatementDocument, options);
      }
export type Create_Adjustment_StatementMutationHookResult = ReturnType<typeof useCreate_Adjustment_StatementMutation>;
export type Create_Adjustment_StatementMutationResult = Apollo.MutationResult<Create_Adjustment_StatementMutation>;
export type Create_Adjustment_StatementMutationOptions = Apollo.BaseMutationOptions<Create_Adjustment_StatementMutation, Create_Adjustment_StatementMutationVariables>;
export const Update_Adjustment_StatementDocument = gql`
    mutation UPDATE_ADJUSTMENT_STATEMENT($adjustmentStatementTableId: Int!, $filledBy: RegistrarType, $title: String, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $id: Int!) {
  adjustmentStatement_updateAdjustmentStatement(
    input: {adjustmentStatementTableId: $adjustmentStatementTableId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy, title: $title, id: $id}
  ) {
    result {
      id
      adjustmentStatementTableId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
      title
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Adjustment_StatementMutationFn = Apollo.MutationFunction<Update_Adjustment_StatementMutation, Update_Adjustment_StatementMutationVariables>;

/**
 * __useUpdate_Adjustment_StatementMutation__
 *
 * To run a mutation, you first call `useUpdate_Adjustment_StatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Adjustment_StatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdjustmentStatementMutation, { data, loading, error }] = useUpdate_Adjustment_StatementMutation({
 *   variables: {
 *      adjustmentStatementTableId: // value for 'adjustmentStatementTableId'
 *      filledBy: // value for 'filledBy'
 *      title: // value for 'title'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Adjustment_StatementMutation(baseOptions?: Apollo.MutationHookOptions<Update_Adjustment_StatementMutation, Update_Adjustment_StatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Adjustment_StatementMutation, Update_Adjustment_StatementMutationVariables>(Update_Adjustment_StatementDocument, options);
      }
export type Update_Adjustment_StatementMutationHookResult = ReturnType<typeof useUpdate_Adjustment_StatementMutation>;
export type Update_Adjustment_StatementMutationResult = Apollo.MutationResult<Update_Adjustment_StatementMutation>;
export type Update_Adjustment_StatementMutationOptions = Apollo.BaseMutationOptions<Update_Adjustment_StatementMutation, Update_Adjustment_StatementMutationVariables>;
export const Delete_Adjustment_StatementDocument = gql`
    mutation DELETE_ADJUSTMENT_STATEMENT($id: Int!) {
  adjustmentStatement_deleteAdjustmentStatement(entityId: $id) {
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
export type Delete_Adjustment_StatementMutationFn = Apollo.MutationFunction<Delete_Adjustment_StatementMutation, Delete_Adjustment_StatementMutationVariables>;

/**
 * __useDelete_Adjustment_StatementMutation__
 *
 * To run a mutation, you first call `useDelete_Adjustment_StatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Adjustment_StatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdjustmentStatementMutation, { data, loading, error }] = useDelete_Adjustment_StatementMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Adjustment_StatementMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Adjustment_StatementMutation, Delete_Adjustment_StatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Adjustment_StatementMutation, Delete_Adjustment_StatementMutationVariables>(Delete_Adjustment_StatementDocument, options);
      }
export type Delete_Adjustment_StatementMutationHookResult = ReturnType<typeof useDelete_Adjustment_StatementMutation>;
export type Delete_Adjustment_StatementMutationResult = Apollo.MutationResult<Delete_Adjustment_StatementMutation>;
export type Delete_Adjustment_StatementMutationOptions = Apollo.BaseMutationOptions<Delete_Adjustment_StatementMutation, Delete_Adjustment_StatementMutationVariables>;
export const Create_Adjustment_Statement_PartDocument = gql`
    mutation CREATE_ADJUSTMENT_STATEMENT_PART($adjustmentStatementId: Int!, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $filledBy: RegistrarType) {
  adjustmentStatementPart_addAdjustmentStatementPart(
    input: {adjustmentStatementId: $adjustmentStatementId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy}
  ) {
    result {
      id
      adjustmentStatementId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Adjustment_Statement_PartMutationFn = Apollo.MutationFunction<Create_Adjustment_Statement_PartMutation, Create_Adjustment_Statement_PartMutationVariables>;

/**
 * __useCreate_Adjustment_Statement_PartMutation__
 *
 * To run a mutation, you first call `useCreate_Adjustment_Statement_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Adjustment_Statement_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdjustmentStatementPartMutation, { data, loading, error }] = useCreate_Adjustment_Statement_PartMutation({
 *   variables: {
 *      adjustmentStatementId: // value for 'adjustmentStatementId'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      filledBy: // value for 'filledBy'
 *   },
 * });
 */
export function useCreate_Adjustment_Statement_PartMutation(baseOptions?: Apollo.MutationHookOptions<Create_Adjustment_Statement_PartMutation, Create_Adjustment_Statement_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Adjustment_Statement_PartMutation, Create_Adjustment_Statement_PartMutationVariables>(Create_Adjustment_Statement_PartDocument, options);
      }
export type Create_Adjustment_Statement_PartMutationHookResult = ReturnType<typeof useCreate_Adjustment_Statement_PartMutation>;
export type Create_Adjustment_Statement_PartMutationResult = Apollo.MutationResult<Create_Adjustment_Statement_PartMutation>;
export type Create_Adjustment_Statement_PartMutationOptions = Apollo.BaseMutationOptions<Create_Adjustment_Statement_PartMutation, Create_Adjustment_Statement_PartMutationVariables>;
export const Update_Adjustment_Statement_PartDocument = gql`
    mutation UPDATE_ADJUSTMENT_STATEMENT_PART($adjustmentStatementId: Int!, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $filledBy: RegistrarType, $id: Int!) {
  adjustmentStatementPart_updateAdjustmentStatementPart(
    input: {adjustmentStatementId: $adjustmentStatementId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy, id: $id}
  ) {
    result {
      id
      adjustmentStatementId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Adjustment_Statement_PartMutationFn = Apollo.MutationFunction<Update_Adjustment_Statement_PartMutation, Update_Adjustment_Statement_PartMutationVariables>;

/**
 * __useUpdate_Adjustment_Statement_PartMutation__
 *
 * To run a mutation, you first call `useUpdate_Adjustment_Statement_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Adjustment_Statement_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdjustmentStatementPartMutation, { data, loading, error }] = useUpdate_Adjustment_Statement_PartMutation({
 *   variables: {
 *      adjustmentStatementId: // value for 'adjustmentStatementId'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      filledBy: // value for 'filledBy'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Adjustment_Statement_PartMutation(baseOptions?: Apollo.MutationHookOptions<Update_Adjustment_Statement_PartMutation, Update_Adjustment_Statement_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Adjustment_Statement_PartMutation, Update_Adjustment_Statement_PartMutationVariables>(Update_Adjustment_Statement_PartDocument, options);
      }
export type Update_Adjustment_Statement_PartMutationHookResult = ReturnType<typeof useUpdate_Adjustment_Statement_PartMutation>;
export type Update_Adjustment_Statement_PartMutationResult = Apollo.MutationResult<Update_Adjustment_Statement_PartMutation>;
export type Update_Adjustment_Statement_PartMutationOptions = Apollo.BaseMutationOptions<Update_Adjustment_Statement_PartMutation, Update_Adjustment_Statement_PartMutationVariables>;
export const Delete_Adjustment_Statement_PartDocument = gql`
    mutation DELETE_ADJUSTMENT_STATEMENT_PART($id: Int!) {
  adjustmentStatementPart_deleteAdjustmentStatementPart(entityId: $id) {
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
export type Delete_Adjustment_Statement_PartMutationFn = Apollo.MutationFunction<Delete_Adjustment_Statement_PartMutation, Delete_Adjustment_Statement_PartMutationVariables>;

/**
 * __useDelete_Adjustment_Statement_PartMutation__
 *
 * To run a mutation, you first call `useDelete_Adjustment_Statement_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Adjustment_Statement_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdjustmentStatementPartMutation, { data, loading, error }] = useDelete_Adjustment_Statement_PartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Adjustment_Statement_PartMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Adjustment_Statement_PartMutation, Delete_Adjustment_Statement_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Adjustment_Statement_PartMutation, Delete_Adjustment_Statement_PartMutationVariables>(Delete_Adjustment_Statement_PartDocument, options);
      }
export type Delete_Adjustment_Statement_PartMutationHookResult = ReturnType<typeof useDelete_Adjustment_Statement_PartMutation>;
export type Delete_Adjustment_Statement_PartMutationResult = Apollo.MutationResult<Delete_Adjustment_Statement_PartMutation>;
export type Delete_Adjustment_Statement_PartMutationOptions = Apollo.BaseMutationOptions<Delete_Adjustment_Statement_PartMutation, Delete_Adjustment_Statement_PartMutationVariables>;
export const Create_Work_Condition_Statement_TableDocument = gql`
    mutation CREATE_WORK_CONDITION_STATEMENT_TABLE($contractId: Int, $filledBy: RegistrarType, $userId: String, $workConditionType: String) {
  workConditionStatementTable_addWorkConditionStatementTable(
    input: {contractId: $contractId, filledBy: $filledBy, userId: $userId, workConditionType: $workConditionType}
  ) {
    result {
      id
      contractId
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Work_Condition_Statement_TableMutationFn = Apollo.MutationFunction<Create_Work_Condition_Statement_TableMutation, Create_Work_Condition_Statement_TableMutationVariables>;

/**
 * __useCreate_Work_Condition_Statement_TableMutation__
 *
 * To run a mutation, you first call `useCreate_Work_Condition_Statement_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Work_Condition_Statement_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkConditionStatementTableMutation, { data, loading, error }] = useCreate_Work_Condition_Statement_TableMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      filledBy: // value for 'filledBy'
 *      userId: // value for 'userId'
 *      workConditionType: // value for 'workConditionType'
 *   },
 * });
 */
export function useCreate_Work_Condition_Statement_TableMutation(baseOptions?: Apollo.MutationHookOptions<Create_Work_Condition_Statement_TableMutation, Create_Work_Condition_Statement_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Work_Condition_Statement_TableMutation, Create_Work_Condition_Statement_TableMutationVariables>(Create_Work_Condition_Statement_TableDocument, options);
      }
export type Create_Work_Condition_Statement_TableMutationHookResult = ReturnType<typeof useCreate_Work_Condition_Statement_TableMutation>;
export type Create_Work_Condition_Statement_TableMutationResult = Apollo.MutationResult<Create_Work_Condition_Statement_TableMutation>;
export type Create_Work_Condition_Statement_TableMutationOptions = Apollo.BaseMutationOptions<Create_Work_Condition_Statement_TableMutation, Create_Work_Condition_Statement_TableMutationVariables>;
export const Update_Work_Condition_Statement_TableDocument = gql`
    mutation UPDATE_WORK_CONDITION_STATEMENT_TABLE($contractId: Int, $filledBy: RegistrarType, $userId: String, $id: Int!) {
  workConditionStatementTable_updateWorkConditionStatementTable(
    input: {contractId: $contractId, filledBy: $filledBy, userId: $userId, id: $id}
  ) {
    result {
      id
      contractId
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Work_Condition_Statement_TableMutationFn = Apollo.MutationFunction<Update_Work_Condition_Statement_TableMutation, Update_Work_Condition_Statement_TableMutationVariables>;

/**
 * __useUpdate_Work_Condition_Statement_TableMutation__
 *
 * To run a mutation, you first call `useUpdate_Work_Condition_Statement_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Work_Condition_Statement_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkConditionStatementTableMutation, { data, loading, error }] = useUpdate_Work_Condition_Statement_TableMutation({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      filledBy: // value for 'filledBy'
 *      userId: // value for 'userId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Work_Condition_Statement_TableMutation(baseOptions?: Apollo.MutationHookOptions<Update_Work_Condition_Statement_TableMutation, Update_Work_Condition_Statement_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Work_Condition_Statement_TableMutation, Update_Work_Condition_Statement_TableMutationVariables>(Update_Work_Condition_Statement_TableDocument, options);
      }
export type Update_Work_Condition_Statement_TableMutationHookResult = ReturnType<typeof useUpdate_Work_Condition_Statement_TableMutation>;
export type Update_Work_Condition_Statement_TableMutationResult = Apollo.MutationResult<Update_Work_Condition_Statement_TableMutation>;
export type Update_Work_Condition_Statement_TableMutationOptions = Apollo.BaseMutationOptions<Update_Work_Condition_Statement_TableMutation, Update_Work_Condition_Statement_TableMutationVariables>;
export const Delete_Work_Condition_Statement_TableDocument = gql`
    mutation DELETE_WORK_CONDITION_STATEMENT_TABLE($id: Int!) {
  workConditionStatementTable_deleteWorkConditionStatementTable(entityId: $id) {
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
export type Delete_Work_Condition_Statement_TableMutationFn = Apollo.MutationFunction<Delete_Work_Condition_Statement_TableMutation, Delete_Work_Condition_Statement_TableMutationVariables>;

/**
 * __useDelete_Work_Condition_Statement_TableMutation__
 *
 * To run a mutation, you first call `useDelete_Work_Condition_Statement_TableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Work_Condition_Statement_TableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkConditionStatementTableMutation, { data, loading, error }] = useDelete_Work_Condition_Statement_TableMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Work_Condition_Statement_TableMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Work_Condition_Statement_TableMutation, Delete_Work_Condition_Statement_TableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Work_Condition_Statement_TableMutation, Delete_Work_Condition_Statement_TableMutationVariables>(Delete_Work_Condition_Statement_TableDocument, options);
      }
export type Delete_Work_Condition_Statement_TableMutationHookResult = ReturnType<typeof useDelete_Work_Condition_Statement_TableMutation>;
export type Delete_Work_Condition_Statement_TableMutationResult = Apollo.MutationResult<Delete_Work_Condition_Statement_TableMutation>;
export type Delete_Work_Condition_Statement_TableMutationOptions = Apollo.BaseMutationOptions<Delete_Work_Condition_Statement_TableMutation, Delete_Work_Condition_Statement_TableMutationVariables>;
export const Create_Work_Condition_StatementDocument = gql`
    mutation CREATE_WORK_CONDITION_STATEMENT($workConditionStatementTableId: Int!, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $filledBy: RegistrarType, $title: String) {
  workConditionStatement_addWorkConditionStatement(
    input: {workConditionStatementTableId: $workConditionStatementTableId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy, title: $title}
  ) {
    result {
      workConditionStatementTableId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Work_Condition_StatementMutationFn = Apollo.MutationFunction<Create_Work_Condition_StatementMutation, Create_Work_Condition_StatementMutationVariables>;

/**
 * __useCreate_Work_Condition_StatementMutation__
 *
 * To run a mutation, you first call `useCreate_Work_Condition_StatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Work_Condition_StatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkConditionStatementMutation, { data, loading, error }] = useCreate_Work_Condition_StatementMutation({
 *   variables: {
 *      workConditionStatementTableId: // value for 'workConditionStatementTableId'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      filledBy: // value for 'filledBy'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreate_Work_Condition_StatementMutation(baseOptions?: Apollo.MutationHookOptions<Create_Work_Condition_StatementMutation, Create_Work_Condition_StatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Work_Condition_StatementMutation, Create_Work_Condition_StatementMutationVariables>(Create_Work_Condition_StatementDocument, options);
      }
export type Create_Work_Condition_StatementMutationHookResult = ReturnType<typeof useCreate_Work_Condition_StatementMutation>;
export type Create_Work_Condition_StatementMutationResult = Apollo.MutationResult<Create_Work_Condition_StatementMutation>;
export type Create_Work_Condition_StatementMutationOptions = Apollo.BaseMutationOptions<Create_Work_Condition_StatementMutation, Create_Work_Condition_StatementMutationVariables>;
export const Update_Work_Condition_StatementDocument = gql`
    mutation UPDATE_WORK_CONDITION_STATEMENT($workConditionStatementTableId: Int!, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $filledBy: RegistrarType, $id: Int!) {
  workConditionStatement_updateWorkConditionStatement(
    input: {workConditionStatementTableId: $workConditionStatementTableId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy, id: $id}
  ) {
    result {
      workConditionStatementTableId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Work_Condition_StatementMutationFn = Apollo.MutationFunction<Update_Work_Condition_StatementMutation, Update_Work_Condition_StatementMutationVariables>;

/**
 * __useUpdate_Work_Condition_StatementMutation__
 *
 * To run a mutation, you first call `useUpdate_Work_Condition_StatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Work_Condition_StatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkConditionStatementMutation, { data, loading, error }] = useUpdate_Work_Condition_StatementMutation({
 *   variables: {
 *      workConditionStatementTableId: // value for 'workConditionStatementTableId'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      filledBy: // value for 'filledBy'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Work_Condition_StatementMutation(baseOptions?: Apollo.MutationHookOptions<Update_Work_Condition_StatementMutation, Update_Work_Condition_StatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Work_Condition_StatementMutation, Update_Work_Condition_StatementMutationVariables>(Update_Work_Condition_StatementDocument, options);
      }
export type Update_Work_Condition_StatementMutationHookResult = ReturnType<typeof useUpdate_Work_Condition_StatementMutation>;
export type Update_Work_Condition_StatementMutationResult = Apollo.MutationResult<Update_Work_Condition_StatementMutation>;
export type Update_Work_Condition_StatementMutationOptions = Apollo.BaseMutationOptions<Update_Work_Condition_StatementMutation, Update_Work_Condition_StatementMutationVariables>;
export const Delete_Work_Condition_StatementDocument = gql`
    mutation DELETE_WORK_CONDITION_STATEMENT($id: Int!) {
  workConditionStatement_deleteWorkConditionStatement(entityId: $id) {
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
export type Delete_Work_Condition_StatementMutationFn = Apollo.MutationFunction<Delete_Work_Condition_StatementMutation, Delete_Work_Condition_StatementMutationVariables>;

/**
 * __useDelete_Work_Condition_StatementMutation__
 *
 * To run a mutation, you first call `useDelete_Work_Condition_StatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Work_Condition_StatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkConditionStatementMutation, { data, loading, error }] = useDelete_Work_Condition_StatementMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Work_Condition_StatementMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Work_Condition_StatementMutation, Delete_Work_Condition_StatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Work_Condition_StatementMutation, Delete_Work_Condition_StatementMutationVariables>(Delete_Work_Condition_StatementDocument, options);
      }
export type Delete_Work_Condition_StatementMutationHookResult = ReturnType<typeof useDelete_Work_Condition_StatementMutation>;
export type Delete_Work_Condition_StatementMutationResult = Apollo.MutationResult<Delete_Work_Condition_StatementMutation>;
export type Delete_Work_Condition_StatementMutationOptions = Apollo.BaseMutationOptions<Delete_Work_Condition_StatementMutation, Delete_Work_Condition_StatementMutationVariables>;
export const Create_Work_Condition_Statement_PartDocument = gql`
    mutation CREATE_WORK_CONDITION_STATEMENT_PART($workConditionStatementId: Int!, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $filledBy: RegistrarType) {
  workConditionStatementPart_addWorkConditionStatementPart(
    input: {workConditionStatementId: $workConditionStatementId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy}
  ) {
    result {
      id
      workConditionStatementId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Create_Work_Condition_Statement_PartMutationFn = Apollo.MutationFunction<Create_Work_Condition_Statement_PartMutation, Create_Work_Condition_Statement_PartMutationVariables>;

/**
 * __useCreate_Work_Condition_Statement_PartMutation__
 *
 * To run a mutation, you first call `useCreate_Work_Condition_Statement_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Work_Condition_Statement_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkConditionStatementPartMutation, { data, loading, error }] = useCreate_Work_Condition_Statement_PartMutation({
 *   variables: {
 *      workConditionStatementId: // value for 'workConditionStatementId'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      filledBy: // value for 'filledBy'
 *   },
 * });
 */
export function useCreate_Work_Condition_Statement_PartMutation(baseOptions?: Apollo.MutationHookOptions<Create_Work_Condition_Statement_PartMutation, Create_Work_Condition_Statement_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Work_Condition_Statement_PartMutation, Create_Work_Condition_Statement_PartMutationVariables>(Create_Work_Condition_Statement_PartDocument, options);
      }
export type Create_Work_Condition_Statement_PartMutationHookResult = ReturnType<typeof useCreate_Work_Condition_Statement_PartMutation>;
export type Create_Work_Condition_Statement_PartMutationResult = Apollo.MutationResult<Create_Work_Condition_Statement_PartMutation>;
export type Create_Work_Condition_Statement_PartMutationOptions = Apollo.BaseMutationOptions<Create_Work_Condition_Statement_PartMutation, Create_Work_Condition_Statement_PartMutationVariables>;
export const Update_Work_Condition_Statement_PartDocument = gql`
    mutation UPDATE_WORK_CONDITION_STATEMENT_PART($workConditionStatementId: Int!, $amountApprovedByEmployer: Decimal, $amountConfirmedByConsultant: Decimal, $amountPaid: Decimal, $amountProvidedByContractor: Decimal, $dateApprovedByEmployer: Date, $dateConfirmedByConsultant: Date, $datePaid: Date, $dateProvidedByContractor: Date, $operationPeriodEndDate: Date, $operationPeriodStartDate: Date, $filledBy: RegistrarType, $id: Int!) {
  workConditionStatementPart_updateWorkConditionStatementPart(
    input: {workConditionStatementId: $workConditionStatementId, amountApprovedByEmployer: $amountApprovedByEmployer, amountConfirmedByConsultant: $amountConfirmedByConsultant, amountPaid: $amountPaid, amountProvidedByContractor: $amountProvidedByContractor, dateApprovedByEmployer: $dateApprovedByEmployer, dateConfirmedByConsultant: $dateConfirmedByConsultant, datePaid: $datePaid, dateProvidedByContractor: $dateProvidedByContractor, operationPeriodEndDate: $operationPeriodEndDate, operationPeriodStartDate: $operationPeriodStartDate, filledBy: $filledBy, id: $id}
  ) {
    result {
      id
      workConditionStatementId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;
export type Update_Work_Condition_Statement_PartMutationFn = Apollo.MutationFunction<Update_Work_Condition_Statement_PartMutation, Update_Work_Condition_Statement_PartMutationVariables>;

/**
 * __useUpdate_Work_Condition_Statement_PartMutation__
 *
 * To run a mutation, you first call `useUpdate_Work_Condition_Statement_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Work_Condition_Statement_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkConditionStatementPartMutation, { data, loading, error }] = useUpdate_Work_Condition_Statement_PartMutation({
 *   variables: {
 *      workConditionStatementId: // value for 'workConditionStatementId'
 *      amountApprovedByEmployer: // value for 'amountApprovedByEmployer'
 *      amountConfirmedByConsultant: // value for 'amountConfirmedByConsultant'
 *      amountPaid: // value for 'amountPaid'
 *      amountProvidedByContractor: // value for 'amountProvidedByContractor'
 *      dateApprovedByEmployer: // value for 'dateApprovedByEmployer'
 *      dateConfirmedByConsultant: // value for 'dateConfirmedByConsultant'
 *      datePaid: // value for 'datePaid'
 *      dateProvidedByContractor: // value for 'dateProvidedByContractor'
 *      operationPeriodEndDate: // value for 'operationPeriodEndDate'
 *      operationPeriodStartDate: // value for 'operationPeriodStartDate'
 *      filledBy: // value for 'filledBy'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdate_Work_Condition_Statement_PartMutation(baseOptions?: Apollo.MutationHookOptions<Update_Work_Condition_Statement_PartMutation, Update_Work_Condition_Statement_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Work_Condition_Statement_PartMutation, Update_Work_Condition_Statement_PartMutationVariables>(Update_Work_Condition_Statement_PartDocument, options);
      }
export type Update_Work_Condition_Statement_PartMutationHookResult = ReturnType<typeof useUpdate_Work_Condition_Statement_PartMutation>;
export type Update_Work_Condition_Statement_PartMutationResult = Apollo.MutationResult<Update_Work_Condition_Statement_PartMutation>;
export type Update_Work_Condition_Statement_PartMutationOptions = Apollo.BaseMutationOptions<Update_Work_Condition_Statement_PartMutation, Update_Work_Condition_Statement_PartMutationVariables>;
export const Delete_Work_Condition_Statement_PartDocument = gql`
    mutation DELETE_WORK_CONDITION_STATEMENT_PART($id: Int!) {
  workConditionStatementPart_deleteWorkConditionStatementPart(entityId: $id) {
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
export type Delete_Work_Condition_Statement_PartMutationFn = Apollo.MutationFunction<Delete_Work_Condition_Statement_PartMutation, Delete_Work_Condition_Statement_PartMutationVariables>;

/**
 * __useDelete_Work_Condition_Statement_PartMutation__
 *
 * To run a mutation, you first call `useDelete_Work_Condition_Statement_PartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Work_Condition_Statement_PartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkConditionStatementPartMutation, { data, loading, error }] = useDelete_Work_Condition_Statement_PartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_Work_Condition_Statement_PartMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Work_Condition_Statement_PartMutation, Delete_Work_Condition_Statement_PartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Work_Condition_Statement_PartMutation, Delete_Work_Condition_Statement_PartMutationVariables>(Delete_Work_Condition_Statement_PartDocument, options);
      }
export type Delete_Work_Condition_Statement_PartMutationHookResult = ReturnType<typeof useDelete_Work_Condition_Statement_PartMutation>;
export type Delete_Work_Condition_Statement_PartMutationResult = Apollo.MutationResult<Delete_Work_Condition_Statement_PartMutation>;
export type Delete_Work_Condition_Statement_PartMutationOptions = Apollo.BaseMutationOptions<Delete_Work_Condition_Statement_PartMutation, Delete_Work_Condition_Statement_PartMutationVariables>;
export const GetInstallmentTableDocument = gql`
    query GetInstallmentTable($id: Int!) {
  installmentTable_getInstallmentTable(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      contractId
      paymentTotal
      remainingPayment
      filledBy
      user {
        parentId
        id
        userType
      }
      userId
      installments {
        installmentTableId
        title
        amount
        date
        filledBy
        id
        installmentParts {
          amount
          date
          filledBy
          id
        }
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetInstallmentTableQuery__
 *
 * To run a query within a React component, call `useGetInstallmentTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstallmentTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstallmentTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInstallmentTableQuery(baseOptions: Apollo.QueryHookOptions<GetInstallmentTableQuery, GetInstallmentTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstallmentTableQuery, GetInstallmentTableQueryVariables>(GetInstallmentTableDocument, options);
      }
export function useGetInstallmentTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstallmentTableQuery, GetInstallmentTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstallmentTableQuery, GetInstallmentTableQueryVariables>(GetInstallmentTableDocument, options);
        }
export type GetInstallmentTableQueryHookResult = ReturnType<typeof useGetInstallmentTableQuery>;
export type GetInstallmentTableLazyQueryHookResult = ReturnType<typeof useGetInstallmentTableLazyQuery>;
export type GetInstallmentTableQueryResult = Apollo.QueryResult<GetInstallmentTableQuery, GetInstallmentTableQueryVariables>;
export const GetInstallmentTablesDocument = gql`
    query GetInstallmentTables($id: Int!) {
  installmentTable_getInstallmentTables {
    result(where: {contractId: {eq: $id}}, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        contractId
        paymentTotal
        remainingPayment
        filledBy
        contract {
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
        user {
          parentId
          id
          userType
        }
        userId
        installments {
          installmentTableId
          title
          amount
          date
          filledBy
          id
          createdDate
          isDeleted
          installmentParts {
            amount
            date
            filledBy
            id
          }
        }
        createdDate
        isDeleted
      }
    }
    status
  }
}
    `;

/**
 * __useGetInstallmentTablesQuery__
 *
 * To run a query within a React component, call `useGetInstallmentTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstallmentTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstallmentTablesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInstallmentTablesQuery(baseOptions: Apollo.QueryHookOptions<GetInstallmentTablesQuery, GetInstallmentTablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstallmentTablesQuery, GetInstallmentTablesQueryVariables>(GetInstallmentTablesDocument, options);
      }
export function useGetInstallmentTablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstallmentTablesQuery, GetInstallmentTablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstallmentTablesQuery, GetInstallmentTablesQueryVariables>(GetInstallmentTablesDocument, options);
        }
export type GetInstallmentTablesQueryHookResult = ReturnType<typeof useGetInstallmentTablesQuery>;
export type GetInstallmentTablesLazyQueryHookResult = ReturnType<typeof useGetInstallmentTablesLazyQuery>;
export type GetInstallmentTablesQueryResult = Apollo.QueryResult<GetInstallmentTablesQuery, GetInstallmentTablesQueryVariables>;
export const GetInstallmentTablesFullDocument = gql`
    query GetInstallmentTablesFull($where: InstallmentTableFilterInput, $order: [InstallmentTableSortInput!]) {
  installmentTable_getInstallmentTables {
    result(where: $where, order: $order, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        contractId
        paymentTotal
        remainingPayment
        filledBy
        contract {
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
        user {
          parentId
          id
          userType
        }
        userId
        installments {
          installmentTableId
          title
          amount
          date
          filledBy
          id
          installmentParts {
            amount
            date
            filledBy
            id
          }
        }
        createdDate
        isDeleted
      }
    }
    status
  }
}
    `;

/**
 * __useGetInstallmentTablesFullQuery__
 *
 * To run a query within a React component, call `useGetInstallmentTablesFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstallmentTablesFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstallmentTablesFullQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetInstallmentTablesFullQuery(baseOptions?: Apollo.QueryHookOptions<GetInstallmentTablesFullQuery, GetInstallmentTablesFullQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstallmentTablesFullQuery, GetInstallmentTablesFullQueryVariables>(GetInstallmentTablesFullDocument, options);
      }
export function useGetInstallmentTablesFullLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstallmentTablesFullQuery, GetInstallmentTablesFullQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstallmentTablesFullQuery, GetInstallmentTablesFullQueryVariables>(GetInstallmentTablesFullDocument, options);
        }
export type GetInstallmentTablesFullQueryHookResult = ReturnType<typeof useGetInstallmentTablesFullQuery>;
export type GetInstallmentTablesFullLazyQueryHookResult = ReturnType<typeof useGetInstallmentTablesFullLazyQuery>;
export type GetInstallmentTablesFullQueryResult = Apollo.QueryResult<GetInstallmentTablesFullQuery, GetInstallmentTablesFullQueryVariables>;
export const GetInstallmentDocument = gql`
    query GetInstallment($id: Int!) {
  installment_getInstallment(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      installmentTableId
      title
      amount
      date
      filledBy
      installmentParts {
        amount
        date
        filledBy
        id
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetInstallmentQuery__
 *
 * To run a query within a React component, call `useGetInstallmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstallmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstallmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInstallmentQuery(baseOptions: Apollo.QueryHookOptions<GetInstallmentQuery, GetInstallmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstallmentQuery, GetInstallmentQueryVariables>(GetInstallmentDocument, options);
      }
export function useGetInstallmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstallmentQuery, GetInstallmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstallmentQuery, GetInstallmentQueryVariables>(GetInstallmentDocument, options);
        }
export type GetInstallmentQueryHookResult = ReturnType<typeof useGetInstallmentQuery>;
export type GetInstallmentLazyQueryHookResult = ReturnType<typeof useGetInstallmentLazyQuery>;
export type GetInstallmentQueryResult = Apollo.QueryResult<GetInstallmentQuery, GetInstallmentQueryVariables>;
export const GetInstallmentPartDocument = gql`
    query GetInstallmentPart($id: Int!) {
  installmentPart_getInstallmentPart(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      installmentId
      amount
      date
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetInstallmentPartQuery__
 *
 * To run a query within a React component, call `useGetInstallmentPartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstallmentPartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstallmentPartQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInstallmentPartQuery(baseOptions: Apollo.QueryHookOptions<GetInstallmentPartQuery, GetInstallmentPartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstallmentPartQuery, GetInstallmentPartQueryVariables>(GetInstallmentPartDocument, options);
      }
export function useGetInstallmentPartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstallmentPartQuery, GetInstallmentPartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstallmentPartQuery, GetInstallmentPartQueryVariables>(GetInstallmentPartDocument, options);
        }
export type GetInstallmentPartQueryHookResult = ReturnType<typeof useGetInstallmentPartQuery>;
export type GetInstallmentPartLazyQueryHookResult = ReturnType<typeof useGetInstallmentPartLazyQuery>;
export type GetInstallmentPartQueryResult = Apollo.QueryResult<GetInstallmentPartQuery, GetInstallmentPartQueryVariables>;
export const GetAdjustmentStatementTableDocument = gql`
    query GetAdjustmentStatementTable($id: Int!) {
  adjustmentStatementTable_getAdjustmentStatementTable(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      contractId
      filledBy
      user {
        parentId
        id
        userType
      }
      contract {
        accuserDepartmentUserId
        accusedDepartmentUserId
      }
      userId
      adjustmentStatements {
        id
        adjustmentStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
        title
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetAdjustmentStatementTableQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentStatementTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentStatementTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentStatementTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdjustmentStatementTableQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentStatementTableQuery, GetAdjustmentStatementTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentStatementTableQuery, GetAdjustmentStatementTableQueryVariables>(GetAdjustmentStatementTableDocument, options);
      }
export function useGetAdjustmentStatementTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentStatementTableQuery, GetAdjustmentStatementTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentStatementTableQuery, GetAdjustmentStatementTableQueryVariables>(GetAdjustmentStatementTableDocument, options);
        }
export type GetAdjustmentStatementTableQueryHookResult = ReturnType<typeof useGetAdjustmentStatementTableQuery>;
export type GetAdjustmentStatementTableLazyQueryHookResult = ReturnType<typeof useGetAdjustmentStatementTableLazyQuery>;
export type GetAdjustmentStatementTableQueryResult = Apollo.QueryResult<GetAdjustmentStatementTableQuery, GetAdjustmentStatementTableQueryVariables>;
export const GetAdjustmentStatementTablesDocument = gql`
    query GetAdjustmentStatementTables($id: Int!) {
  adjustmentStatementTable_getAdjustmentStatementTables {
    result(where: {contractId: {eq: $id}}, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        contractId
        filledBy
        contract {
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
        user {
          parentId
          id
          userType
        }
        userId
        adjustmentStatements {
          id
          adjustmentStatementTableId
          amountApprovedByEmployer
          amountConfirmedByConsultant
          amountPaid
          amountProvidedByContractor
          dateApprovedByEmployer
          dateConfirmedByConsultant
          datePaid
          dateProvidedByContractor
          operationPeriodEndDate
          operationPeriodStartDate
          filledBy
          title
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetAdjustmentStatementTablesQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentStatementTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentStatementTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentStatementTablesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdjustmentStatementTablesQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentStatementTablesQuery, GetAdjustmentStatementTablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentStatementTablesQuery, GetAdjustmentStatementTablesQueryVariables>(GetAdjustmentStatementTablesDocument, options);
      }
export function useGetAdjustmentStatementTablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentStatementTablesQuery, GetAdjustmentStatementTablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentStatementTablesQuery, GetAdjustmentStatementTablesQueryVariables>(GetAdjustmentStatementTablesDocument, options);
        }
export type GetAdjustmentStatementTablesQueryHookResult = ReturnType<typeof useGetAdjustmentStatementTablesQuery>;
export type GetAdjustmentStatementTablesLazyQueryHookResult = ReturnType<typeof useGetAdjustmentStatementTablesLazyQuery>;
export type GetAdjustmentStatementTablesQueryResult = Apollo.QueryResult<GetAdjustmentStatementTablesQuery, GetAdjustmentStatementTablesQueryVariables>;
export const GetAdjustmentStatementTablesFullDocument = gql`
    query GetAdjustmentStatementTablesFull($where: AdjustmentStatementTableFilterInput, $order: [AdjustmentStatementTableSortInput!]) {
  adjustmentStatementTable_getAdjustmentStatementTables {
    result(where: $where, order: $order, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        contractId
        filledBy
        contract {
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
        user {
          parentId
          id
          userType
        }
        userId
        adjustmentStatements {
          id
          adjustmentStatementTableId
          amountApprovedByEmployer
          amountConfirmedByConsultant
          amountPaid
          amountProvidedByContractor
          dateApprovedByEmployer
          dateConfirmedByConsultant
          datePaid
          dateProvidedByContractor
          operationPeriodEndDate
          operationPeriodStartDate
          filledBy
          title
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetAdjustmentStatementTablesFullQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentStatementTablesFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentStatementTablesFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentStatementTablesFullQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetAdjustmentStatementTablesFullQuery(baseOptions?: Apollo.QueryHookOptions<GetAdjustmentStatementTablesFullQuery, GetAdjustmentStatementTablesFullQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentStatementTablesFullQuery, GetAdjustmentStatementTablesFullQueryVariables>(GetAdjustmentStatementTablesFullDocument, options);
      }
export function useGetAdjustmentStatementTablesFullLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentStatementTablesFullQuery, GetAdjustmentStatementTablesFullQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentStatementTablesFullQuery, GetAdjustmentStatementTablesFullQueryVariables>(GetAdjustmentStatementTablesFullDocument, options);
        }
export type GetAdjustmentStatementTablesFullQueryHookResult = ReturnType<typeof useGetAdjustmentStatementTablesFullQuery>;
export type GetAdjustmentStatementTablesFullLazyQueryHookResult = ReturnType<typeof useGetAdjustmentStatementTablesFullLazyQuery>;
export type GetAdjustmentStatementTablesFullQueryResult = Apollo.QueryResult<GetAdjustmentStatementTablesFullQuery, GetAdjustmentStatementTablesFullQueryVariables>;
export const GetAdjustmentStatementsFullDocument = gql`
    query GetAdjustmentStatementsFull($filter: AdjustmentStatementFilterInput, $orderBy: [AdjustmentStatementSortInput!]) {
  adjustmentStatement_getAdjustmentStatements {
    result(where: $filter, order: $orderBy, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        adjustmentStatementTableId
        adjustmentStatementTable {
          contractId
          contract {
            accuserDepartmentUserId
            accusedDepartmentUserId
          }
          user {
            parentId
            id
            userType
          }
          userId
        }
        filledBy
        id
        adjustmentStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
        title
        isDeleted
        createdDate
        lastModifiedDate
      }
    }
    status
  }
}
    `;

/**
 * __useGetAdjustmentStatementsFullQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentStatementsFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentStatementsFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentStatementsFullQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetAdjustmentStatementsFullQuery(baseOptions?: Apollo.QueryHookOptions<GetAdjustmentStatementsFullQuery, GetAdjustmentStatementsFullQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentStatementsFullQuery, GetAdjustmentStatementsFullQueryVariables>(GetAdjustmentStatementsFullDocument, options);
      }
export function useGetAdjustmentStatementsFullLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentStatementsFullQuery, GetAdjustmentStatementsFullQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentStatementsFullQuery, GetAdjustmentStatementsFullQueryVariables>(GetAdjustmentStatementsFullDocument, options);
        }
export type GetAdjustmentStatementsFullQueryHookResult = ReturnType<typeof useGetAdjustmentStatementsFullQuery>;
export type GetAdjustmentStatementsFullLazyQueryHookResult = ReturnType<typeof useGetAdjustmentStatementsFullLazyQuery>;
export type GetAdjustmentStatementsFullQueryResult = Apollo.QueryResult<GetAdjustmentStatementsFullQuery, GetAdjustmentStatementsFullQueryVariables>;
export const GetAdjustmentStatementDocument = gql`
    query GetAdjustmentStatement($id: Int!) {
  adjustmentStatement_getAdjustmentStatement(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      adjustmentStatementTableId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
      title
      adjustmentStatementParts {
        id
        createdDate
        lastModifiedDate
        adjustmentStatementId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetAdjustmentStatementQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentStatementQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdjustmentStatementQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentStatementQuery, GetAdjustmentStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentStatementQuery, GetAdjustmentStatementQueryVariables>(GetAdjustmentStatementDocument, options);
      }
export function useGetAdjustmentStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentStatementQuery, GetAdjustmentStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentStatementQuery, GetAdjustmentStatementQueryVariables>(GetAdjustmentStatementDocument, options);
        }
export type GetAdjustmentStatementQueryHookResult = ReturnType<typeof useGetAdjustmentStatementQuery>;
export type GetAdjustmentStatementLazyQueryHookResult = ReturnType<typeof useGetAdjustmentStatementLazyQuery>;
export type GetAdjustmentStatementQueryResult = Apollo.QueryResult<GetAdjustmentStatementQuery, GetAdjustmentStatementQueryVariables>;
export const GetAdjustmentStatementPartDocument = gql`
    query GetAdjustmentStatementPart($id: Int!) {
  adjustmentStatementPart_getAdjustmentStatementPart(entityId: $id) {
    result {
      id
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetAdjustmentStatementPartQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentStatementPartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentStatementPartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentStatementPartQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdjustmentStatementPartQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentStatementPartQuery, GetAdjustmentStatementPartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentStatementPartQuery, GetAdjustmentStatementPartQueryVariables>(GetAdjustmentStatementPartDocument, options);
      }
export function useGetAdjustmentStatementPartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentStatementPartQuery, GetAdjustmentStatementPartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentStatementPartQuery, GetAdjustmentStatementPartQueryVariables>(GetAdjustmentStatementPartDocument, options);
        }
export type GetAdjustmentStatementPartQueryHookResult = ReturnType<typeof useGetAdjustmentStatementPartQuery>;
export type GetAdjustmentStatementPartLazyQueryHookResult = ReturnType<typeof useGetAdjustmentStatementPartLazyQuery>;
export type GetAdjustmentStatementPartQueryResult = Apollo.QueryResult<GetAdjustmentStatementPartQuery, GetAdjustmentStatementPartQueryVariables>;
export const GetWorkConditionStatementTableDocument = gql`
    query GetWorkConditionStatementTable($id: Int!) {
  workConditionStatementTable_getWorkConditionStatementTable(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      contractId
      filledBy
      user {
        parentId
        id
        userType
      }
      userId
      workConditionStatements {
        id
        workConditionStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
        title
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetWorkConditionStatementTableQuery__
 *
 * To run a query within a React component, call `useGetWorkConditionStatementTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkConditionStatementTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkConditionStatementTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkConditionStatementTableQuery(baseOptions: Apollo.QueryHookOptions<GetWorkConditionStatementTableQuery, GetWorkConditionStatementTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkConditionStatementTableQuery, GetWorkConditionStatementTableQueryVariables>(GetWorkConditionStatementTableDocument, options);
      }
export function useGetWorkConditionStatementTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkConditionStatementTableQuery, GetWorkConditionStatementTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkConditionStatementTableQuery, GetWorkConditionStatementTableQueryVariables>(GetWorkConditionStatementTableDocument, options);
        }
export type GetWorkConditionStatementTableQueryHookResult = ReturnType<typeof useGetWorkConditionStatementTableQuery>;
export type GetWorkConditionStatementTableLazyQueryHookResult = ReturnType<typeof useGetWorkConditionStatementTableLazyQuery>;
export type GetWorkConditionStatementTableQueryResult = Apollo.QueryResult<GetWorkConditionStatementTableQuery, GetWorkConditionStatementTableQueryVariables>;
export const GetWorkConditionStatementTableByIdDocument = gql`
    query GetWorkConditionStatementTableByID($id: Int!) {
  workConditionStatementTable_getWorkConditionStatementTables {
    result(where: {contractId: {eq: $id}}, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        contractId
        filledBy
        user {
          parentId
          id
          userType
        }
        contract {
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
        userId
        workConditionStatements {
          id
          workConditionStatementTableId
          amountApprovedByEmployer
          amountConfirmedByConsultant
          amountPaid
          amountProvidedByContractor
          dateApprovedByEmployer
          dateConfirmedByConsultant
          datePaid
          dateProvidedByContractor
          operationPeriodEndDate
          operationPeriodStartDate
          filledBy
          title
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetWorkConditionStatementTableByIdQuery__
 *
 * To run a query within a React component, call `useGetWorkConditionStatementTableByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkConditionStatementTableByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkConditionStatementTableByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkConditionStatementTableByIdQuery(baseOptions: Apollo.QueryHookOptions<GetWorkConditionStatementTableByIdQuery, GetWorkConditionStatementTableByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkConditionStatementTableByIdQuery, GetWorkConditionStatementTableByIdQueryVariables>(GetWorkConditionStatementTableByIdDocument, options);
      }
export function useGetWorkConditionStatementTableByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkConditionStatementTableByIdQuery, GetWorkConditionStatementTableByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkConditionStatementTableByIdQuery, GetWorkConditionStatementTableByIdQueryVariables>(GetWorkConditionStatementTableByIdDocument, options);
        }
export type GetWorkConditionStatementTableByIdQueryHookResult = ReturnType<typeof useGetWorkConditionStatementTableByIdQuery>;
export type GetWorkConditionStatementTableByIdLazyQueryHookResult = ReturnType<typeof useGetWorkConditionStatementTableByIdLazyQuery>;
export type GetWorkConditionStatementTableByIdQueryResult = Apollo.QueryResult<GetWorkConditionStatementTableByIdQuery, GetWorkConditionStatementTableByIdQueryVariables>;
export const GetWorkConditionStatementTablesFullDocument = gql`
    query GetWorkConditionStatementTablesFull($where: WorkConditionStatementTableFilterInput) {
  workConditionStatementTable_getWorkConditionStatementTables {
    result(where: $where, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        contractId
        filledBy
        user {
          parentId
          id
          userType
        }
        contract {
          accuserDepartmentUserId
          accusedDepartmentUserId
        }
        userId
        workConditionStatements {
          id
          workConditionStatementTableId
          amountApprovedByEmployer
          amountConfirmedByConsultant
          amountPaid
          amountProvidedByContractor
          dateApprovedByEmployer
          dateConfirmedByConsultant
          datePaid
          dateProvidedByContractor
          operationPeriodEndDate
          operationPeriodStartDate
          filledBy
          title
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetWorkConditionStatementTablesFullQuery__
 *
 * To run a query within a React component, call `useGetWorkConditionStatementTablesFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkConditionStatementTablesFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkConditionStatementTablesFullQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetWorkConditionStatementTablesFullQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkConditionStatementTablesFullQuery, GetWorkConditionStatementTablesFullQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkConditionStatementTablesFullQuery, GetWorkConditionStatementTablesFullQueryVariables>(GetWorkConditionStatementTablesFullDocument, options);
      }
export function useGetWorkConditionStatementTablesFullLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkConditionStatementTablesFullQuery, GetWorkConditionStatementTablesFullQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkConditionStatementTablesFullQuery, GetWorkConditionStatementTablesFullQueryVariables>(GetWorkConditionStatementTablesFullDocument, options);
        }
export type GetWorkConditionStatementTablesFullQueryHookResult = ReturnType<typeof useGetWorkConditionStatementTablesFullQuery>;
export type GetWorkConditionStatementTablesFullLazyQueryHookResult = ReturnType<typeof useGetWorkConditionStatementTablesFullLazyQuery>;
export type GetWorkConditionStatementTablesFullQueryResult = Apollo.QueryResult<GetWorkConditionStatementTablesFullQuery, GetWorkConditionStatementTablesFullQueryVariables>;
export const GetWorkConditionStatementsFullDocument = gql`
    query GetWorkConditionStatementsFull($filter: WorkConditionStatementFilterInput, $orderBy: [WorkConditionStatementSortInput!]) {
  workConditionStatement_getWorkConditionStatements {
    result(where: $filter, order: $orderBy, take: 20000) {
      items {
        id
        createdDate
        lastModifiedDate
        workConditionStatementTableId
        workConditionStatementTable {
          contractId
          contract {
            accuserDepartmentUserId
            accusedDepartmentUserId
          }
          user {
            parentId
            id
            userType
          }
          userId
        }
        filledBy
        id
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
        title
        isDeleted
        createdDate
        lastModifiedDate
      }
    }
    status
  }
}
    `;

/**
 * __useGetWorkConditionStatementsFullQuery__
 *
 * To run a query within a React component, call `useGetWorkConditionStatementsFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkConditionStatementsFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkConditionStatementsFullQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetWorkConditionStatementsFullQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkConditionStatementsFullQuery, GetWorkConditionStatementsFullQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkConditionStatementsFullQuery, GetWorkConditionStatementsFullQueryVariables>(GetWorkConditionStatementsFullDocument, options);
      }
export function useGetWorkConditionStatementsFullLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkConditionStatementsFullQuery, GetWorkConditionStatementsFullQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkConditionStatementsFullQuery, GetWorkConditionStatementsFullQueryVariables>(GetWorkConditionStatementsFullDocument, options);
        }
export type GetWorkConditionStatementsFullQueryHookResult = ReturnType<typeof useGetWorkConditionStatementsFullQuery>;
export type GetWorkConditionStatementsFullLazyQueryHookResult = ReturnType<typeof useGetWorkConditionStatementsFullLazyQuery>;
export type GetWorkConditionStatementsFullQueryResult = Apollo.QueryResult<GetWorkConditionStatementsFullQuery, GetWorkConditionStatementsFullQueryVariables>;
export const GetWorkConditionStatementDocument = gql`
    query GetWorkConditionStatement($id: Int!) {
  workConditionStatement_getWorkConditionStatement(entityId: $id) {
    result {
      id
      createdDate
      lastModifiedDate
      workConditionStatementTableId
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
      title
      workConditionStatementParts {
        id
        createdDate
        lastModifiedDate
        workConditionStatementId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetWorkConditionStatementQuery__
 *
 * To run a query within a React component, call `useGetWorkConditionStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkConditionStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkConditionStatementQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkConditionStatementQuery(baseOptions: Apollo.QueryHookOptions<GetWorkConditionStatementQuery, GetWorkConditionStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkConditionStatementQuery, GetWorkConditionStatementQueryVariables>(GetWorkConditionStatementDocument, options);
      }
export function useGetWorkConditionStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkConditionStatementQuery, GetWorkConditionStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkConditionStatementQuery, GetWorkConditionStatementQueryVariables>(GetWorkConditionStatementDocument, options);
        }
export type GetWorkConditionStatementQueryHookResult = ReturnType<typeof useGetWorkConditionStatementQuery>;
export type GetWorkConditionStatementLazyQueryHookResult = ReturnType<typeof useGetWorkConditionStatementLazyQuery>;
export type GetWorkConditionStatementQueryResult = Apollo.QueryResult<GetWorkConditionStatementQuery, GetWorkConditionStatementQueryVariables>;
export const GetWorkConditionStatementPartDocument = gql`
    query GetWorkConditionStatementPart($id: Int!) {
  workConditionStatementPart_getWorkConditionStatementPart(entityId: $id) {
    result {
      id
      amountApprovedByEmployer
      amountConfirmedByConsultant
      amountPaid
      amountProvidedByContractor
      dateApprovedByEmployer
      dateConfirmedByConsultant
      datePaid
      dateProvidedByContractor
      operationPeriodEndDate
      operationPeriodStartDate
      filledBy
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetWorkConditionStatementPartQuery__
 *
 * To run a query within a React component, call `useGetWorkConditionStatementPartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkConditionStatementPartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkConditionStatementPartQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkConditionStatementPartQuery(baseOptions: Apollo.QueryHookOptions<GetWorkConditionStatementPartQuery, GetWorkConditionStatementPartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkConditionStatementPartQuery, GetWorkConditionStatementPartQueryVariables>(GetWorkConditionStatementPartDocument, options);
      }
export function useGetWorkConditionStatementPartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkConditionStatementPartQuery, GetWorkConditionStatementPartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkConditionStatementPartQuery, GetWorkConditionStatementPartQueryVariables>(GetWorkConditionStatementPartDocument, options);
        }
export type GetWorkConditionStatementPartQueryHookResult = ReturnType<typeof useGetWorkConditionStatementPartQuery>;
export type GetWorkConditionStatementPartLazyQueryHookResult = ReturnType<typeof useGetWorkConditionStatementPartLazyQuery>;
export type GetWorkConditionStatementPartQueryResult = Apollo.QueryResult<GetWorkConditionStatementPartQuery, GetWorkConditionStatementPartQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($userName: String!, $password: String!) {
  user_signIn(input: {password: $password, userName: $userName}) {
    result {
      user {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        parentId
        userRoles {
          roleType
          id
        }
        userType
        isJury
      }
      token
      expireDate
    }
    status {
      code
      value
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const ForgetPasswordMutationDocument = gql`
    mutation ForgetPasswordMutation($input: ForgotPasswordDtoInput!) {
  user_forgotPassword(input: $input) {
    code
    value
  }
}
    `;
export type ForgetPasswordMutationMutationFn = Apollo.MutationFunction<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>;

/**
 * __useForgetPasswordMutationMutation__
 *
 * To run a mutation, you first call `useForgetPasswordMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetPasswordMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetPasswordMutationMutation, { data, loading, error }] = useForgetPasswordMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgetPasswordMutationMutation(baseOptions?: Apollo.MutationHookOptions<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>(ForgetPasswordMutationDocument, options);
      }
export type ForgetPasswordMutationMutationHookResult = ReturnType<typeof useForgetPasswordMutationMutation>;
export type ForgetPasswordMutationMutationResult = Apollo.MutationResult<ForgetPasswordMutationMutation>;
export type ForgetPasswordMutationMutationOptions = Apollo.BaseMutationOptions<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>;
export const UserSignInOtpMutationDocument = gql`
    mutation UserSignInOTPMutation($input: LoginOTPDtoInput!) {
  user_signInOTP(input: $input) {
    result {
      user {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        parentId
        userRoles {
          roleType
          id
        }
        isJury
        userType
      }
      token
      expireDate
    }
    status {
      code
      value
    }
  }
}
    `;
export type UserSignInOtpMutationMutationFn = Apollo.MutationFunction<UserSignInOtpMutationMutation, UserSignInOtpMutationMutationVariables>;

/**
 * __useUserSignInOtpMutationMutation__
 *
 * To run a mutation, you first call `useUserSignInOtpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignInOtpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignInOtpMutationMutation, { data, loading, error }] = useUserSignInOtpMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignInOtpMutationMutation(baseOptions?: Apollo.MutationHookOptions<UserSignInOtpMutationMutation, UserSignInOtpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignInOtpMutationMutation, UserSignInOtpMutationMutationVariables>(UserSignInOtpMutationDocument, options);
      }
export type UserSignInOtpMutationMutationHookResult = ReturnType<typeof useUserSignInOtpMutationMutation>;
export type UserSignInOtpMutationMutationResult = Apollo.MutationResult<UserSignInOtpMutationMutation>;
export type UserSignInOtpMutationMutationOptions = Apollo.BaseMutationOptions<UserSignInOtpMutationMutation, UserSignInOtpMutationMutationVariables>;
export const SentOtpMutationDocument = gql`
    mutation SentOTPMutation($phoneNumber: String!) {
  user_oneTimePassword(input: {phoneNumber: $phoneNumber}) {
    code
    value
  }
}
    `;
export type SentOtpMutationMutationFn = Apollo.MutationFunction<SentOtpMutationMutation, SentOtpMutationMutationVariables>;

/**
 * __useSentOtpMutationMutation__
 *
 * To run a mutation, you first call `useSentOtpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSentOtpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sentOtpMutationMutation, { data, loading, error }] = useSentOtpMutationMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSentOtpMutationMutation(baseOptions?: Apollo.MutationHookOptions<SentOtpMutationMutation, SentOtpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SentOtpMutationMutation, SentOtpMutationMutationVariables>(SentOtpMutationDocument, options);
      }
export type SentOtpMutationMutationHookResult = ReturnType<typeof useSentOtpMutationMutation>;
export type SentOtpMutationMutationResult = Apollo.MutationResult<SentOtpMutationMutation>;
export type SentOtpMutationMutationOptions = Apollo.BaseMutationOptions<SentOtpMutationMutation, SentOtpMutationMutationVariables>;
export const UserSignUpDocument = gql`
    mutation UserSignUp($confirmPassword: String!, $email: String, $fullName: String!, $nationalCode: String, $password: String!, $phoneNumber: String, $userName: String!, $birthDate: Date, $userType: UserType!, $parentId: String, $isJury: Boolean! = false) {
  user_signUp(
    input: {userType: $userType, birthDate: $birthDate, confirmPassword: $confirmPassword, email: $email, fullName: $fullName, nationalCode: $nationalCode, password: $password, phoneNumber: $phoneNumber, userName: $userName, parentId: $parentId, isJury: $isJury}
  ) {
    result {
      id
      userName
      email
      fullName
      phoneNumber
      nationalCode
      isJury
      parentId
      userRoles {
        roleType
        id
      }
      userType
    }
    status {
      code
      value
    }
    __typename
  }
}
    `;
export type UserSignUpMutationFn = Apollo.MutationFunction<UserSignUpMutation, UserSignUpMutationVariables>;

/**
 * __useUserSignUpMutation__
 *
 * To run a mutation, you first call `useUserSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignUpMutation, { data, loading, error }] = useUserSignUpMutation({
 *   variables: {
 *      confirmPassword: // value for 'confirmPassword'
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      nationalCode: // value for 'nationalCode'
 *      password: // value for 'password'
 *      phoneNumber: // value for 'phoneNumber'
 *      userName: // value for 'userName'
 *      birthDate: // value for 'birthDate'
 *      userType: // value for 'userType'
 *      parentId: // value for 'parentId'
 *      isJury: // value for 'isJury'
 *   },
 * });
 */
export function useUserSignUpMutation(baseOptions?: Apollo.MutationHookOptions<UserSignUpMutation, UserSignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignUpMutation, UserSignUpMutationVariables>(UserSignUpDocument, options);
      }
export type UserSignUpMutationHookResult = ReturnType<typeof useUserSignUpMutation>;
export type UserSignUpMutationResult = Apollo.MutationResult<UserSignUpMutation>;
export type UserSignUpMutationOptions = Apollo.BaseMutationOptions<UserSignUpMutation, UserSignUpMutationVariables>;
export const SendCallToMeetingSmsDocument = gql`
    mutation SendCallToMeetingSMS($input: SendInviteToMeetingSMSDtoInput!) {
  sms_sendInviteToMeetingSMS(input: $input) {
    code
    value
  }
}
    `;
export type SendCallToMeetingSmsMutationFn = Apollo.MutationFunction<SendCallToMeetingSmsMutation, SendCallToMeetingSmsMutationVariables>;

/**
 * __useSendCallToMeetingSmsMutation__
 *
 * To run a mutation, you first call `useSendCallToMeetingSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCallToMeetingSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCallToMeetingSmsMutation, { data, loading, error }] = useSendCallToMeetingSmsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendCallToMeetingSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendCallToMeetingSmsMutation, SendCallToMeetingSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCallToMeetingSmsMutation, SendCallToMeetingSmsMutationVariables>(SendCallToMeetingSmsDocument, options);
      }
export type SendCallToMeetingSmsMutationHookResult = ReturnType<typeof useSendCallToMeetingSmsMutation>;
export type SendCallToMeetingSmsMutationResult = Apollo.MutationResult<SendCallToMeetingSmsMutation>;
export type SendCallToMeetingSmsMutationOptions = Apollo.BaseMutationOptions<SendCallToMeetingSmsMutation, SendCallToMeetingSmsMutationVariables>;
export const GenarateDateOfBirthDocument = gql`
    mutation GenarateDateOfBirth($input: String!) {
  test_convertToGregorian(input: $input)
}
    `;
export type GenarateDateOfBirthMutationFn = Apollo.MutationFunction<GenarateDateOfBirthMutation, GenarateDateOfBirthMutationVariables>;

/**
 * __useGenarateDateOfBirthMutation__
 *
 * To run a mutation, you first call `useGenarateDateOfBirthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenarateDateOfBirthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [genarateDateOfBirthMutation, { data, loading, error }] = useGenarateDateOfBirthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenarateDateOfBirthMutation(baseOptions?: Apollo.MutationHookOptions<GenarateDateOfBirthMutation, GenarateDateOfBirthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenarateDateOfBirthMutation, GenarateDateOfBirthMutationVariables>(GenarateDateOfBirthDocument, options);
      }
export type GenarateDateOfBirthMutationHookResult = ReturnType<typeof useGenarateDateOfBirthMutation>;
export type GenarateDateOfBirthMutationResult = Apollo.MutationResult<GenarateDateOfBirthMutation>;
export type GenarateDateOfBirthMutationOptions = Apollo.BaseMutationOptions<GenarateDateOfBirthMutation, GenarateDateOfBirthMutationVariables>;
export const UserDeleteDocument = gql`
    mutation UserDelete($id: String!) {
  user_deleteUser(userId: $id) {
    code
    value
  }
}
    `;
export type UserDeleteMutationFn = Apollo.MutationFunction<UserDeleteMutation, UserDeleteMutationVariables>;

/**
 * __useUserDeleteMutation__
 *
 * To run a mutation, you first call `useUserDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteMutation, { data, loading, error }] = useUserDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserDeleteMutation(baseOptions?: Apollo.MutationHookOptions<UserDeleteMutation, UserDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(UserDeleteDocument, options);
      }
export type UserDeleteMutationHookResult = ReturnType<typeof useUserDeleteMutation>;
export type UserDeleteMutationResult = Apollo.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = Apollo.BaseMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>;
export const UserUpdateDocument = gql`
    mutation UserUpdate($fullName: String!, $nationalCode: String!, $userName: String, $birthDate: Date!, $userType: UserType!) {
  user_updateProfile(
    input: {fullName: $fullName, nationalCode: $nationalCode, userName: $userName, birthDate: $birthDate, userType: $userType}
  ) {
    result {
      id
      userName
      email
      fullName
      phoneNumber
      nationalCode
      isJury
    }
    status {
      code
      value
    }
  }
}
    `;
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      fullName: // value for 'fullName'
 *      nationalCode: // value for 'nationalCode'
 *      userName: // value for 'userName'
 *      birthDate: // value for 'birthDate'
 *      userType: // value for 'userType'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, options);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserUpdatePasswordDocument = gql`
    mutation UserUpdatePassword($oldPassword: String!, $newPassword: String!, $confirmPassword: String!, $id: String!) {
  user_changePassword(
    input: {confirmPassword: $confirmPassword, currentPassword: $oldPassword, newPassword: $newPassword, userId: $id}
  ) {
    code
    value
  }
}
    `;
export type UserUpdatePasswordMutationFn = Apollo.MutationFunction<UserUpdatePasswordMutation, UserUpdatePasswordMutationVariables>;

/**
 * __useUserUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUserUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdatePasswordMutation, { data, loading, error }] = useUserUpdatePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *      confirmPassword: // value for 'confirmPassword'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdatePasswordMutation, UserUpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdatePasswordMutation, UserUpdatePasswordMutationVariables>(UserUpdatePasswordDocument, options);
      }
export type UserUpdatePasswordMutationHookResult = ReturnType<typeof useUserUpdatePasswordMutation>;
export type UserUpdatePasswordMutationResult = Apollo.MutationResult<UserUpdatePasswordMutation>;
export type UserUpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UserUpdatePasswordMutation, UserUpdatePasswordMutationVariables>;
export const AddRoleToUserDocument = gql`
    mutation AddRoleToUser($userId: String!, $roleType: RoleType!) {
  userRole_addUserToRole(roleType: $roleType, userId: $userId) {
    code
    value
    __typename
  }
}
    `;
export type AddRoleToUserMutationFn = Apollo.MutationFunction<AddRoleToUserMutation, AddRoleToUserMutationVariables>;

/**
 * __useAddRoleToUserMutation__
 *
 * To run a mutation, you first call `useAddRoleToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoleToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoleToUserMutation, { data, loading, error }] = useAddRoleToUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      roleType: // value for 'roleType'
 *   },
 * });
 */
export function useAddRoleToUserMutation(baseOptions?: Apollo.MutationHookOptions<AddRoleToUserMutation, AddRoleToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRoleToUserMutation, AddRoleToUserMutationVariables>(AddRoleToUserDocument, options);
      }
export type AddRoleToUserMutationHookResult = ReturnType<typeof useAddRoleToUserMutation>;
export type AddRoleToUserMutationResult = Apollo.MutationResult<AddRoleToUserMutation>;
export type AddRoleToUserMutationOptions = Apollo.BaseMutationOptions<AddRoleToUserMutation, AddRoleToUserMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  user_getUsers {
    result(take: 2000) {
      items {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        userType
        parentId
        childUsers {
          parentId
          fullName
          id
        }
        userRoles {
          id
          roleType
          userId
          isDeleted
          createdDate
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersWithParentIdDocument = gql`
    query GetUsersWithParentID($id: String!) {
  user_getUsers {
    result(
      where: {and: [{parentId: {eq: $id}}, {userRoles: {none: {roleType: {eq: SENIOR_USER}}}}]}
    ) {
      items {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        userType
        parentId
        childUsers {
          parentId
          fullName
          id
        }
        userRoles {
          id
          roleType
          userId
          isDeleted
          createdDate
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetUsersWithParentIdQuery__
 *
 * To run a query within a React component, call `useGetUsersWithParentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersWithParentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersWithParentIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUsersWithParentIdQuery(baseOptions: Apollo.QueryHookOptions<GetUsersWithParentIdQuery, GetUsersWithParentIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersWithParentIdQuery, GetUsersWithParentIdQueryVariables>(GetUsersWithParentIdDocument, options);
      }
export function useGetUsersWithParentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersWithParentIdQuery, GetUsersWithParentIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersWithParentIdQuery, GetUsersWithParentIdQueryVariables>(GetUsersWithParentIdDocument, options);
        }
export type GetUsersWithParentIdQueryHookResult = ReturnType<typeof useGetUsersWithParentIdQuery>;
export type GetUsersWithParentIdLazyQueryHookResult = ReturnType<typeof useGetUsersWithParentIdLazyQuery>;
export type GetUsersWithParentIdQueryResult = Apollo.QueryResult<GetUsersWithParentIdQuery, GetUsersWithParentIdQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  user_getUser(entityId: $id) {
    result {
      id
      userName
      email
      fullName
      phoneNumber
      nationalCode
      userType
      parentId
      parent {
        fullName
        id
        parent {
          fullName
          id
          parent {
            fullName
            id
          }
        }
      }
      childUsers {
        parentId
        fullName
        id
      }
      userRoles {
        id
        roleType
        userId
        isDeleted
        createdDate
      }
    }
    status {
      code
      value
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const Get_User_QueriableDocument = gql`
    query GET_USER_QUERIABLE($id: String!) {
  user_getUserQueryable(entityId: $id) {
    result {
      items {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        userType
        parentId
        parent {
          fullName
          id
          parent {
            fullName
            id
            parent {
              fullName
              id
            }
          }
        }
        childUsers {
          parentId
          fullName
          id
        }
        userRoles {
          id
          roleType
          userId
          isDeleted
          createdDate
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGet_User_QueriableQuery__
 *
 * To run a query within a React component, call `useGet_User_QueriableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_User_QueriableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_User_QueriableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGet_User_QueriableQuery(baseOptions: Apollo.QueryHookOptions<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>(Get_User_QueriableDocument, options);
      }
export function useGet_User_QueriableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>(Get_User_QueriableDocument, options);
        }
export type Get_User_QueriableQueryHookResult = ReturnType<typeof useGet_User_QueriableQuery>;
export type Get_User_QueriableLazyQueryHookResult = ReturnType<typeof useGet_User_QueriableLazyQuery>;
export type Get_User_QueriableQueryResult = Apollo.QueryResult<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>;
export const GetAllOganizationUsersDocument = gql`
    query getAllOganizationUsers {
  user_getUsers {
    result(
      take: 2000
      where: {or: [{userType: {eq: ORGANIZATION}}, {userType: {eq: CONTRACTOR_OR_CONSULTANT}}]}
    ) {
      items {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        childUsers {
          parentId
          fullName
          id
          userType
        }
        userType
        userRoles {
          id
          roleType
          userId
          isDeleted
          createdDate
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGetAllOganizationUsersQuery__
 *
 * To run a query within a React component, call `useGetAllOganizationUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOganizationUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOganizationUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOganizationUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>(GetAllOganizationUsersDocument, options);
      }
export function useGetAllOganizationUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>(GetAllOganizationUsersDocument, options);
        }
export type GetAllOganizationUsersQueryHookResult = ReturnType<typeof useGetAllOganizationUsersQuery>;
export type GetAllOganizationUsersLazyQueryHookResult = ReturnType<typeof useGetAllOganizationUsersLazyQuery>;
export type GetAllOganizationUsersQueryResult = Apollo.QueryResult<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>;
export const Get_Organization_Individual_Users_With_RoleDocument = gql`
    query GET_ORGANIZATION_INDIVIDUAL_USERS_WITH_ROLE($organizationId: String!) {
  user_getUsers {
    result(
      take: 2000
      where: {userType: {eq: INDIVIDUAL}, and: {parentId: {eq: $organizationId}}}
    ) {
      items {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        childUsers {
          parentId
          fullName
          id
        }
        userRoles {
          id
          roleType
          userId
          isDeleted
          createdDate
        }
      }
    }
    status
  }
}
    `;

/**
 * __useGet_Organization_Individual_Users_With_RoleQuery__
 *
 * To run a query within a React component, call `useGet_Organization_Individual_Users_With_RoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Organization_Individual_Users_With_RoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Organization_Individual_Users_With_RoleQuery({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useGet_Organization_Individual_Users_With_RoleQuery(baseOptions: Apollo.QueryHookOptions<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>(Get_Organization_Individual_Users_With_RoleDocument, options);
      }
export function useGet_Organization_Individual_Users_With_RoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>(Get_Organization_Individual_Users_With_RoleDocument, options);
        }
export type Get_Organization_Individual_Users_With_RoleQueryHookResult = ReturnType<typeof useGet_Organization_Individual_Users_With_RoleQuery>;
export type Get_Organization_Individual_Users_With_RoleLazyQueryHookResult = ReturnType<typeof useGet_Organization_Individual_Users_With_RoleLazyQuery>;
export type Get_Organization_Individual_Users_With_RoleQueryResult = Apollo.QueryResult<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>;
export const GetUserWithFilterDocument = gql`
    query GetUserWithFilter($filter: UserFilterInput, $take: Int, $skip: Int, $order: [UserSortInput!] = [{createdDate: DESC}]) {
  user_getUsers {
    result(take: $take, skip: $skip, order: $order, where: $filter) {
      items {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        userType
        parentId
        childUsers {
          parentId
          fullName
          id
        }
        userRoles {
          id
          roleType
          userId
          isDeleted
          createdDate
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserWithFilterQuery__
 *
 * To run a query within a React component, call `useGetUserWithFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWithFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWithFilterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetUserWithFilterQuery(baseOptions?: Apollo.QueryHookOptions<GetUserWithFilterQuery, GetUserWithFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWithFilterQuery, GetUserWithFilterQueryVariables>(GetUserWithFilterDocument, options);
      }
export function useGetUserWithFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWithFilterQuery, GetUserWithFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWithFilterQuery, GetUserWithFilterQueryVariables>(GetUserWithFilterDocument, options);
        }
export type GetUserWithFilterQueryHookResult = ReturnType<typeof useGetUserWithFilterQuery>;
export type GetUserWithFilterLazyQueryHookResult = ReturnType<typeof useGetUserWithFilterLazyQuery>;
export type GetUserWithFilterQueryResult = Apollo.QueryResult<GetUserWithFilterQuery, GetUserWithFilterQueryVariables>;
export const TokenCheckDocument = gql`
    query TokenCheck {
  user_isTokenValid
}
    `;

/**
 * __useTokenCheckQuery__
 *
 * To run a query within a React component, call `useTokenCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenCheckQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenCheckQuery(baseOptions?: Apollo.QueryHookOptions<TokenCheckQuery, TokenCheckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenCheckQuery, TokenCheckQueryVariables>(TokenCheckDocument, options);
      }
export function useTokenCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenCheckQuery, TokenCheckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenCheckQuery, TokenCheckQueryVariables>(TokenCheckDocument, options);
        }
export type TokenCheckQueryHookResult = ReturnType<typeof useTokenCheckQuery>;
export type TokenCheckLazyQueryHookResult = ReturnType<typeof useTokenCheckLazyQuery>;
export type TokenCheckQueryResult = Apollo.QueryResult<TokenCheckQuery, TokenCheckQueryVariables>;
export const GetArgumentDocument = gql`
    query getArgument($id: Int!) {
  complaintArgument_getComplaintArgument(entityId: $id) {
    result {
      id
      summary
      description
      suggestedAmount
      accusedResponse
      complaintId
      councilOpinion
      netCouncilApprovedAmount
      grossCouncilApprovedAmount
      accuserAnswerToAccusedResponse
      accuserAnswerToAccusedResponseFileName
      expertOpinion
      expertOpinionFileName
      expertVerdict
      netApprovedAmount
      grossApprovedAmount
      financialSituation
    }
  }
}
    `;

/**
 * __useGetArgumentQuery__
 *
 * To run a query within a React component, call `useGetArgumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArgumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArgumentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArgumentQuery(baseOptions: Apollo.QueryHookOptions<GetArgumentQuery, GetArgumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArgumentQuery, GetArgumentQueryVariables>(GetArgumentDocument, options);
      }
export function useGetArgumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArgumentQuery, GetArgumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArgumentQuery, GetArgumentQueryVariables>(GetArgumentDocument, options);
        }
export type GetArgumentQueryHookResult = ReturnType<typeof useGetArgumentQuery>;
export type GetArgumentLazyQueryHookResult = ReturnType<typeof useGetArgumentLazyQuery>;
export type GetArgumentQueryResult = Apollo.QueryResult<GetArgumentQuery, GetArgumentQueryVariables>;