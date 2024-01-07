/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The built-in `Decimal` scalar type. */
  Decimal: { input: any; output: any; }
  /** The `TimeSpan` scalar represents an ISO-8601 compliant duration type. */
  TimeSpan: { input: any; output: any; }
};

export type AccusedDocsAfterCouncilRequestLetterDtoInput = {
  canonDate: Scalars['String']['input'];
  canonNum: Scalars['String']['input'];
  clause: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['String']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccusedDocsRequestLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  previousLetterDate: Scalars['String']['input'];
  previousLetterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccuserDidNotRespondLetterDtoInput = {
  canonDate: Scalars['String']['input'];
  canonNum: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  previousLetterDate: Scalars['String']['input'];
  previousLetterDate2: Scalars['String']['input'];
  previousLetterNum: Scalars['String']['input'];
  previousLetterNum2: Scalars['String']['input'];
  previousLetterNum3: Scalars['String']['input'];
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
  letterDate: Scalars['String']['input'];
  letterDate2: Scalars['String']['input'];
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
  thirdConditionFileName?: Maybe<Scalars['String']['output']>;
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
  thirdConditionFileName?: InputMaybe<StringOperationFilterInput>;
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
  thirdConditionFileName?: InputMaybe<Scalars['String']['input']>;
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
  thirdConditionFileName?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type AssignToExpertLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['String']['input'];
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
  canonDate: Scalars['String']['input'];
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

export type Complaint = {
  __typename?: 'Complaint';
  arbitrationCost: Scalars['Decimal']['output'];
  arbitrationTermsForms?: Maybe<Array<ArbitrationTermsForm>>;
  arguments?: Maybe<Array<ComplaintArgument>>;
  assignedUser?: Maybe<User>;
  assignedUserId?: Maybe<Scalars['String']['output']>;
  complaintCode?: Maybe<Scalars['String']['output']>;
  complaintFiles?: Maybe<Array<ComplaintFile>>;
  complaintState: ComplaintState;
  contract?: Maybe<Contract>;
  contractId: Scalars['Int']['output'];
  correctionRequests?: Maybe<Array<CorrectionRequest>>;
  councilExpertId?: Maybe<Scalars['String']['output']>;
  councilListStatus: CouncilListStatus;
  createdDate: Scalars['DateTime']['output'];
  eventHistories?: Maybe<Array<EventHistory>>;
  id: Scalars['Int']['output'];
  isApprovedByChief: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isFirstPaymentPaid: Scalars['Boolean']['output'];
  isSecondPaymentPaid: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ComplaintArgument = {
  __typename?: 'ComplaintArgument';
  accusedResponse?: Maybe<Scalars['String']['output']>;
  accusedResponseFileName?: Maybe<Scalars['String']['output']>;
  accuserAnswerToAccusedResponse?: Maybe<Scalars['String']['output']>;
  accuserAnswerToAccusedResponseFileName?: Maybe<Scalars['String']['output']>;
  approvedAmount?: Maybe<Scalars['Decimal']['output']>;
  complaint?: Maybe<Complaint>;
  complaintId: Scalars['Int']['output'];
  councilApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  createdDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expertId?: Maybe<Scalars['String']['output']>;
  expertOpinion?: Maybe<Scalars['String']['output']>;
  expertOpinionFileName?: Maybe<Scalars['String']['output']>;
  expertVerdict?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  filledBy: RegistrarType;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mailRoomChiefOpinionOnArgument?: Maybe<Scalars['String']['output']>;
  mailRoomChiefOpinionOnExpertOpinion?: Maybe<Scalars['String']['output']>;
  mailRoomChiefSuggestedAmount?: Maybe<Scalars['Decimal']['output']>;
  mailRoomExpertApprovedAmount?: Maybe<Scalars['Decimal']['output']>;
  mailRoomExpertOpinionOnArgument?: Maybe<Scalars['String']['output']>;
  mailRoomExpertOpinionOnExpertOpinion?: Maybe<Scalars['String']['output']>;
  suggestedAmount: Scalars['Decimal']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
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
  approvedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  complaint?: InputMaybe<ComplaintFilterInput>;
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  councilApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  expertId?: InputMaybe<StringOperationFilterInput>;
  expertOpinion?: InputMaybe<StringOperationFilterInput>;
  expertOpinionFileName?: InputMaybe<StringOperationFilterInput>;
  expertVerdict?: InputMaybe<StringOperationFilterInput>;
  fileName?: InputMaybe<StringOperationFilterInput>;
  filledBy?: InputMaybe<RegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  mailRoomChiefOpinionOnArgument?: InputMaybe<StringOperationFilterInput>;
  mailRoomChiefOpinionOnExpertOpinion?: InputMaybe<StringOperationFilterInput>;
  mailRoomChiefSuggestedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  mailRoomExpertApprovedAmount?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  mailRoomExpertOpinionOnArgument?: InputMaybe<StringOperationFilterInput>;
  mailRoomExpertOpinionOnExpertOpinion?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintArgumentFilterInput>>;
  suggestedAmount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  summary?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintArgumentInput = {
  accusedResponse?: InputMaybe<Scalars['String']['input']>;
  accusedResponseFileName?: InputMaybe<Scalars['String']['input']>;
  accuserAnswerToAccusedResponse?: InputMaybe<Scalars['String']['input']>;
  accuserAnswerToAccusedResponseFileName?: InputMaybe<Scalars['String']['input']>;
  approvedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  councilApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expertId?: InputMaybe<Scalars['String']['input']>;
  expertOpinion?: InputMaybe<Scalars['String']['input']>;
  expertOpinionFileName?: InputMaybe<Scalars['String']['input']>;
  expertVerdict?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mailRoomChiefOpinionOnArgument?: InputMaybe<Scalars['String']['input']>;
  mailRoomChiefOpinionOnExpertOpinion?: InputMaybe<Scalars['String']['input']>;
  mailRoomChiefSuggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  mailRoomExpertApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  mailRoomExpertOpinionOnArgument?: InputMaybe<Scalars['String']['input']>;
  mailRoomExpertOpinionOnExpertOpinion?: InputMaybe<Scalars['String']['input']>;
  suggestedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintArgumentSortInput = {
  accusedResponse?: InputMaybe<SortEnumType>;
  accusedResponseFileName?: InputMaybe<SortEnumType>;
  accuserAnswerToAccusedResponse?: InputMaybe<SortEnumType>;
  accuserAnswerToAccusedResponseFileName?: InputMaybe<SortEnumType>;
  approvedAmount?: InputMaybe<SortEnumType>;
  complaint?: InputMaybe<ComplaintSortInput>;
  complaintId?: InputMaybe<SortEnumType>;
  councilApprovedAmount?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  expertId?: InputMaybe<SortEnumType>;
  expertOpinion?: InputMaybe<SortEnumType>;
  expertOpinionFileName?: InputMaybe<SortEnumType>;
  expertVerdict?: InputMaybe<SortEnumType>;
  fileName?: InputMaybe<SortEnumType>;
  filledBy?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  mailRoomChiefOpinionOnArgument?: InputMaybe<SortEnumType>;
  mailRoomChiefOpinionOnExpertOpinion?: InputMaybe<SortEnumType>;
  mailRoomChiefSuggestedAmount?: InputMaybe<SortEnumType>;
  mailRoomExpertApprovedAmount?: InputMaybe<SortEnumType>;
  mailRoomExpertOpinionOnArgument?: InputMaybe<SortEnumType>;
  mailRoomExpertOpinionOnExpertOpinion?: InputMaybe<SortEnumType>;
  suggestedAmount?: InputMaybe<SortEnumType>;
  summary?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
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
  and?: InputMaybe<Array<ComplaintFilterInput>>;
  arbitrationCost?: InputMaybe<ComparableDecimalOperationFilterInput>;
  arbitrationTermsForms?: InputMaybe<ListFilterInputTypeOfArbitrationTermsFormFilterInput>;
  arguments?: InputMaybe<ListFilterInputTypeOfComplaintArgumentFilterInput>;
  assignedUser?: InputMaybe<UserFilterInput>;
  assignedUserId?: InputMaybe<StringOperationFilterInput>;
  complaintCode?: InputMaybe<StringOperationFilterInput>;
  complaintFiles?: InputMaybe<ListFilterInputTypeOfComplaintFileFilterInput>;
  complaintState?: InputMaybe<ComplaintStateOperationFilterInput>;
  contract?: InputMaybe<ContractFilterInput>;
  contractId?: InputMaybe<ComparableInt32OperationFilterInput>;
  correctionRequests?: InputMaybe<ListFilterInputTypeOfCorrectionRequestFilterInput>;
  councilExpertId?: InputMaybe<StringOperationFilterInput>;
  councilListStatus?: InputMaybe<CouncilListStatusOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  eventHistories?: InputMaybe<ListFilterInputTypeOfEventHistoryFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isApprovedByChief?: InputMaybe<BooleanOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isFirstPaymentPaid?: InputMaybe<BooleanOperationFilterInput>;
  isSecondPaymentPaid?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintGotCancelledLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['String']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ComplaintInput = {
  arbitrationCost?: InputMaybe<Scalars['Decimal']['input']>;
  assignedUserId?: InputMaybe<Scalars['String']['input']>;
  complaintState?: InputMaybe<ComplaintState>;
  contractId?: InputMaybe<Scalars['Int']['input']>;
  councilExpertId?: InputMaybe<Scalars['String']['input']>;
  councilListStatus?: InputMaybe<CouncilListStatus>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isApprovedByChief?: InputMaybe<Scalars['Boolean']['input']>;
  isFirstPaymentPaid?: InputMaybe<Scalars['Boolean']['input']>;
  isSecondPaymentPaid?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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

export type ComplaintSortInput = {
  arbitrationCost?: InputMaybe<SortEnumType>;
  assignedUser?: InputMaybe<UserSortInput>;
  assignedUserId?: InputMaybe<SortEnumType>;
  complaintCode?: InputMaybe<SortEnumType>;
  complaintState?: InputMaybe<SortEnumType>;
  contract?: InputMaybe<ContractSortInput>;
  contractId?: InputMaybe<SortEnumType>;
  councilExpertId?: InputMaybe<SortEnumType>;
  councilListStatus?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isApprovedByChief?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isFirstPaymentPaid?: InputMaybe<SortEnumType>;
  isSecondPaymentPaid?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export enum ComplaintState {
  AcceptedForBeingConstructive = 'ACCEPTED_FOR_BEING_CONSTRUCTIVE',
  AccusedNotifiedOfOfferorChangingResult = 'ACCUSED_NOTIFIED_OF_OFFEROR_CHANGING_RESULT',
  AccuserNotifiedOfSuccessfulChangingOfTheOfferor = 'ACCUSER_NOTIFIED_OF_SUCCESSFUL_CHANGING_OF_THE_OFFEROR',
  CheckingAndUploadingTheSignedDecree = 'CHECKING_AND_UPLOADING_THE_SIGNED_DECREE',
  CheckingForBeingConstructive = 'CHECKING_FOR_BEING_CONSTRUCTIVE',
  ComplaintDetermined = 'COMPLAINT_DETERMINED',
  DeterminingCaseExpert = 'DETERMINING_CASE_EXPERT',
  DeterminingMeetingByMailRoomExpert = 'DETERMINING_MEETING_BY_MAIL_ROOM_EXPERT',
  DidNotFulfillFirstPayment = 'DID_NOT_FULFILL_FIRST_PAYMENT',
  GivingTrackingCodeToComplaint = 'GIVING_TRACKING_CODE_TO_COMPLAINT',
  MailRoomChiefReviewingTheFinalReport = 'MAIL_ROOM_CHIEF_REVIEWING_THE_FINAL_REPORT',
  MailRoomExpertReviewingTheFinalReport = 'MAIL_ROOM_EXPERT_REVIEWING_THE_FINAL_REPORT',
  NewOfferorNotified = 'NEW_OFFEROR_NOTIFIED',
  NotAcceptedForBeingConstructive = 'NOT_ACCEPTED_FOR_BEING_CONSTRUCTIVE',
  RedeterminingCaseExpert = 'REDETERMINING_CASE_EXPERT',
  ResultNotifiedAbilityToViewScannedPhysicalResult = 'RESULT_NOTIFIED_ABILITY_TO_VIEW_SCANNED_PHYSICAL_RESULT',
  ReviewingExpertOpinionOnOfferorChanging = 'REVIEWING_EXPERT_OPINION_ON_OFFEROR_CHANGING',
  UploadingDocumentsAndReviewingComplaint = 'UPLOADING_DOCUMENTS_AND_REVIEWING_COMPLAINT',
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
  WaitingForRelatedFormsCompletionAndCommentingOnOfferorChanging = 'WAITING_FOR_RELATED_FORMS_COMPLETION_AND_COMMENTING_ON_OFFEROR_CHANGING',
  WaitingForSecondPayment = 'WAITING_FOR_SECOND_PAYMENT',
  WaitingToDetermineIfTheOldOrTheNewOfferorIsTheAccused = 'WAITING_TO_DETERMINE_IF_THE_OLD_OR_THE_NEW_OFFEROR_IS_THE_ACCUSED'
}

export type ComplaintStateOperationFilterInput = {
  eq?: InputMaybe<ComplaintState>;
  in?: InputMaybe<Array<ComplaintState>>;
  neq?: InputMaybe<ComplaintState>;
  nin?: InputMaybe<Array<ComplaintState>>;
};

export type ComplaintVerdictLetterDtoInput = {
  complaintId: Scalars['Int']['input'];
  letterDate: Scalars['String']['input'];
  letterDate2: Scalars['String']['input'];
  letterDate3: Scalars['String']['input'];
  letterNum: Scalars['String']['input'];
  letterNum2: Scalars['String']['input'];
  letterNum3: Scalars['String']['input'];
  pageCountNum: Scalars['Int']['input'];
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
  contractHasAdjustmentByAccused?: Maybe<Scalars['Boolean']['output']>;
  contractHasAdjustmentByAccuser?: Maybe<Scalars['Boolean']['output']>;
  contractNumberByAccused?: Maybe<Scalars['String']['output']>;
  contractNumberByAccuser?: Maybe<Scalars['String']['output']>;
  contractStatusAndDateInArbitrationByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractStatusAndDateInArbitrationByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  contractSubjectByAccused?: Maybe<Scalars['String']['output']>;
  contractSubjectByAccuser?: Maybe<Scalars['String']['output']>;
  contractTypeByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractTypeByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  createdDate: Scalars['DateTime']['output'];
  currencyByAccused?: Maybe<Scalars['String']['output']>;
  currencyByAccuser?: Maybe<Scalars['String']['output']>;
  departmentUser?: Maybe<User>;
  doesContainAdjustmentByAccused?: Maybe<Scalars['String']['output']>;
  doesContainAdjustmentByAccuser?: Maybe<Scalars['String']['output']>;
  fileNamesByAccused?: Maybe<Array<Scalars['String']['output']>>;
  fileNamesByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  finalBudgetByAccused?: Maybe<Scalars['Decimal']['output']>;
  finalBudgetByAccuser?: Maybe<Scalars['Decimal']['output']>;
  financialProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  financialProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  incrementalDecreasingCommunicationByAccused?: Maybe<Scalars['Boolean']['output']>;
  incrementalDecreasingCommunicationByAccuser?: Maybe<Scalars['Boolean']['output']>;
  initialBudgetByAccused?: Maybe<Scalars['Decimal']['output']>;
  initialBudgetByAccuser?: Maybe<Scalars['Decimal']['output']>;
  initialTimePeriodByAccused?: Maybe<Scalars['Int']['output']>;
  initialTimePeriodByAccuser?: Maybe<Scalars['Int']['output']>;
  installmentTables?: Maybe<Array<InstallmentTable>>;
  isDeleted: Scalars['Boolean']['output'];
  isExecutive?: Maybe<Scalars['Boolean']['output']>;
  isSpecialPriceListAttachedToContractByAccused?: Maybe<Scalars['String']['output']>;
  isSpecialPriceListAttachedToContractByAccuser?: Maybe<Scalars['String']['output']>;
  isTransferred?: Maybe<Scalars['Boolean']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  newAccusedDepartmentUserId?: Maybe<Scalars['String']['output']>;
  operationStartDateByAccused?: Maybe<Scalars['Date']['output']>;
  operationStartDateByAccuser?: Maybe<Scalars['Date']['output']>;
  otherContractTypeByAccused?: Maybe<Scalars['String']['output']>;
  otherContractTypeByAccuser?: Maybe<Scalars['String']['output']>;
  physicalProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  physicalProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  priceListOfBasicUnitOfFieldByAccused?: Maybe<Scalars['String']['output']>;
  priceListOfBasicUnitOfFieldByAccuser?: Maybe<Scalars['String']['output']>;
  recommendedCoefficientByAccused?: Maybe<Scalars['Float']['output']>;
  recommendedCoefficientByAccuser?: Maybe<Scalars['Float']['output']>;
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
  contractHasAdjustmentByAccused?: InputMaybe<BooleanOperationFilterInput>;
  contractHasAdjustmentByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  contractNumberByAccused?: InputMaybe<StringOperationFilterInput>;
  contractNumberByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  contractSubjectByAccused?: InputMaybe<StringOperationFilterInput>;
  contractSubjectByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractTypeByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractTypeByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  currencyByAccused?: InputMaybe<StringOperationFilterInput>;
  currencyByAccuser?: InputMaybe<StringOperationFilterInput>;
  departmentUser?: InputMaybe<UserFilterInput>;
  doesContainAdjustmentByAccused?: InputMaybe<StringOperationFilterInput>;
  doesContainAdjustmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  fileNamesByAccused?: InputMaybe<ListStringOperationFilterInput>;
  fileNamesByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  finalBudgetByAccused?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  finalBudgetByAccuser?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  incrementalDecreasingCommunicationByAccused?: InputMaybe<BooleanOperationFilterInput>;
  incrementalDecreasingCommunicationByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  initialBudgetByAccused?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialBudgetByAccuser?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialTimePeriodByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  initialTimePeriodByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  installmentTables?: InputMaybe<ListFilterInputTypeOfInstallmentTableFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isExecutive?: InputMaybe<BooleanOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<StringOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<StringOperationFilterInput>;
  isTransferred?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  newAccusedDepartmentUserId?: InputMaybe<StringOperationFilterInput>;
  operationStartDateByAccused?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationStartDateByAccuser?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<ContractFilterInput>>;
  otherContractTypeByAccused?: InputMaybe<StringOperationFilterInput>;
  otherContractTypeByAccuser?: InputMaybe<StringOperationFilterInput>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<StringOperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<StringOperationFilterInput>;
  recommendedCoefficientByAccused?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  recommendedCoefficientByAccuser?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  supervisionDepartmentByAccused?: InputMaybe<StringOperationFilterInput>;
  supervisionDepartmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  unauthorizedDelaysByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  unauthorizedDelaysByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  workConditionStatementTables?: InputMaybe<ListFilterInputTypeOfWorkConditionStatementTableFilterInput>;
};

export type ContractInput = {
  accusedDepartmentUserId?: InputMaybe<Scalars['String']['input']>;
  accusedNationality?: InputMaybe<Scalars['String']['input']>;
  accusedRelatedPeopleByAccused?: InputMaybe<Scalars['String']['input']>;
  accusedRelatedPeopleByAccuser?: InputMaybe<Scalars['String']['input']>;
  accuserDepartmentUserId?: InputMaybe<Scalars['String']['input']>;
  accuserNationality?: InputMaybe<Scalars['String']['input']>;
  accuserRelatedPeopleByAccused?: InputMaybe<Scalars['String']['input']>;
  accuserRelatedPeopleByAccuser?: InputMaybe<Scalars['String']['input']>;
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
  contractHasAdjustmentByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  contractHasAdjustmentByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  contractNumberByAccused?: InputMaybe<Scalars['String']['input']>;
  contractNumberByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  contractSubjectByAccused?: InputMaybe<Scalars['String']['input']>;
  contractSubjectByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractTypeByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractTypeByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyByAccused?: InputMaybe<Scalars['String']['input']>;
  currencyByAccuser?: InputMaybe<Scalars['String']['input']>;
  doesContainAdjustmentByAccused?: InputMaybe<Scalars['String']['input']>;
  doesContainAdjustmentByAccuser?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  fileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  finalBudgetByAccused?: InputMaybe<Scalars['Decimal']['input']>;
  finalBudgetByAccuser?: InputMaybe<Scalars['Decimal']['input']>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  incrementalDecreasingCommunicationByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  incrementalDecreasingCommunicationByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  initialBudgetByAccused?: InputMaybe<Scalars['Decimal']['input']>;
  initialBudgetByAccuser?: InputMaybe<Scalars['Decimal']['input']>;
  initialTimePeriodByAccused?: InputMaybe<Scalars['Int']['input']>;
  initialTimePeriodByAccuser?: InputMaybe<Scalars['Int']['input']>;
  isExecutive?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<Scalars['String']['input']>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<Scalars['String']['input']>;
  isTransferred?: InputMaybe<Scalars['Boolean']['input']>;
  newAccusedDepartmentUserId?: InputMaybe<Scalars['String']['input']>;
  operationStartDateByAccused?: InputMaybe<Scalars['Date']['input']>;
  operationStartDateByAccuser?: InputMaybe<Scalars['Date']['input']>;
  otherContractTypeByAccused?: InputMaybe<Scalars['String']['input']>;
  otherContractTypeByAccuser?: InputMaybe<Scalars['String']['input']>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<Scalars['String']['input']>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<Scalars['String']['input']>;
  recommendedCoefficientByAccused?: InputMaybe<Scalars['Float']['input']>;
  recommendedCoefficientByAccuser?: InputMaybe<Scalars['Float']['input']>;
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
  contractHasAdjustmentByAccused?: InputMaybe<SortEnumType>;
  contractHasAdjustmentByAccuser?: InputMaybe<SortEnumType>;
  contractNumberByAccused?: InputMaybe<SortEnumType>;
  contractNumberByAccuser?: InputMaybe<SortEnumType>;
  contractSubjectByAccused?: InputMaybe<SortEnumType>;
  contractSubjectByAccuser?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  currencyByAccused?: InputMaybe<SortEnumType>;
  currencyByAccuser?: InputMaybe<SortEnumType>;
  departmentUser?: InputMaybe<UserSortInput>;
  doesContainAdjustmentByAccused?: InputMaybe<SortEnumType>;
  doesContainAdjustmentByAccuser?: InputMaybe<SortEnumType>;
  finalBudgetByAccused?: InputMaybe<SortEnumType>;
  finalBudgetByAccuser?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  incrementalDecreasingCommunicationByAccused?: InputMaybe<SortEnumType>;
  incrementalDecreasingCommunicationByAccuser?: InputMaybe<SortEnumType>;
  initialBudgetByAccused?: InputMaybe<SortEnumType>;
  initialBudgetByAccuser?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccused?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccuser?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isExecutive?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<SortEnumType>;
  isTransferred?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  newAccusedDepartmentUserId?: InputMaybe<SortEnumType>;
  operationStartDateByAccused?: InputMaybe<SortEnumType>;
  operationStartDateByAccuser?: InputMaybe<SortEnumType>;
  otherContractTypeByAccused?: InputMaybe<SortEnumType>;
  otherContractTypeByAccuser?: InputMaybe<SortEnumType>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<SortEnumType>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<SortEnumType>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<SortEnumType>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<SortEnumType>;
  recommendedCoefficientByAccused?: InputMaybe<SortEnumType>;
  recommendedCoefficientByAccuser?: InputMaybe<SortEnumType>;
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
  accusedBIPeriod: Scalars['String']['input'];
  accusedFinalOpinion: Scalars['String']['input'];
  accusedResponses: Scalars['String']['input'];
  accusedSignDate: Scalars['String']['input'];
  accuserArguments: Scalars['String']['input'];
  accuserBIPeriod: Scalars['String']['input'];
  accuserSignDate: Scalars['String']['input'];
  canonDate: Scalars['String']['input'];
  canonDate2: Scalars['String']['input'];
  canonNum: Scalars['String']['input'];
  canonNum2: Scalars['String']['input'];
  circularDate: Scalars['String']['input'];
  circularNum: Scalars['String']['input'];
  clause: Scalars['String']['input'];
  coefficient: Scalars['String']['input'];
  coefficientPercent: Scalars['String']['input'];
  complaintId: Scalars['Int']['input'];
  deliveryDate: Scalars['String']['input'];
  finalWantedPrice: Scalars['Decimal']['input'];
  priceList: Scalars['String']['input'];
  userId: Scalars['String']['input'];
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

export type Installment = {
  __typename?: 'Installment';
  amount: Scalars['Decimal']['output'];
  createdDate: Scalars['DateTime']['output'];
  date: Scalars['Date']['output'];
  filledBy?: Maybe<RegistrarType>;
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
  id?: InputMaybe<Scalars['Int']['input']>;
  paymentTotal?: InputMaybe<Scalars['Decimal']['input']>;
  registrarType?: InputMaybe<RegistrarType>;
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
  correctionRequestPeriod: Scalars['Int']['output'];
  councilPaymentPeriod: Scalars['Int']['output'];
  createdDate: Scalars['DateTime']['output'];
  firstPaymentPeriod: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
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
  correctionRequestPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  councilPaymentPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  firstPaymentPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<MainSettingFilterInput>>;
  secondPaymentPeriod?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type MainSettingInput = {
  accusedResponsePeriod: Scalars['Int']['input'];
  accuserResponsePeriod: Scalars['Int']['input'];
  correctionRequestPeriod: Scalars['Int']['input'];
  councilPaymentPeriod: Scalars['Int']['input'];
  firstPaymentPeriod: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  secondPaymentPeriod: Scalars['Int']['input'];
};

export type MainSettingSortInput = {
  accusedResponsePeriod?: InputMaybe<SortEnumType>;
  accuserResponsePeriod?: InputMaybe<SortEnumType>;
  correctionRequestPeriod?: InputMaybe<SortEnumType>;
  councilPaymentPeriod?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  firstPaymentPeriod?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
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
  complaintArgument_addComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintArgument_deleteComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintArgument_updateComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintFile_addComplaintFile: ResponseBaseOfComplaintFile;
  complaintFile_deleteComplaintFile: ResponseBaseOfComplaintFile;
  complaintFile_updateComplaintFile: ResponseBaseOfComplaintFile;
  complaintNote_addComplaintNote: ResponseBaseOfComplaintNote;
  complaintNote_deleteComplaintNote: ResponseBaseOfComplaintNote;
  complaintNote_updateComplaintNote: ResponseBaseOfComplaintNote;
  complaint_addComplaint: ResponseBaseOfComplaint;
  complaint_deleteComplaint: ResponseBaseOfComplaint;
  complaint_setInCouncilList: ResponseBaseOfSetInCouncilListResponseDto;
  complaint_updateComplaint: ResponseBaseOfComplaint;
  contract_addContract: ResponseBaseOfContract;
  contract_deleteContract: ResponseBaseOfContract;
  contract_updateContract: ResponseBaseOfContract;
  correctionRequest_addCorrectionRequest: ResponseBaseOfCorrectionRequest;
  correctionRequest_deleteCorrectionRequest: ResponseBaseOfCorrectionRequest;
  correctionRequest_updateCorrectionRequest: ResponseBaseOfCorrectionRequest;
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
  sms_sendAccusedRespondedSMS: ResponseStatus;
  sms_sendComplaintAddedSMS: ResponseStatus;
  sms_sendComplaintCodeSMS: ResponseStatus;
  sms_sendInviteToMeetingSMS: ResponseStatus;
  test_convertNumToPersianWriting: Scalars['String']['output'];
  test_convertToGregorian: Scalars['Date']['output'];
  test_generateAccusedDocsAfterCouncilRequestLetter: ResponseStatus;
  test_generateAccusedDocsRequestLetter: ResponseStatus;
  test_generateAccuserDidNotRespondLetter: ResponseStatus;
  test_generateArbitrationRejectionLetter: ResponseStatus;
  test_generateAssignToExpertLetter: ResponseStatus;
  test_generateCallToMeetingLetter: ResponseStatus;
  test_generateComplaintGotCancelledLetter: ResponseStatus;
  test_generateComplaintVerdictLetter: ResponseStatus;
  test_generateCouncilListLetter: ResponseStatus;
  test_generateDecree: ResponseStatus;
  test_generatePassword: Scalars['String']['output'];
  test_generateProjectNotConstructiveLetter: ResponseStatus;
  test_generateReferToExpertLetter: ResponseStatus;
  test_sendVerificationCode: Scalars['String']['output'];
  test_testSMS: Scalars['String']['output'];
  test_testSabtAhval?: Maybe<PersonDataDto>;
  test_testShahkar: Scalars['String']['output'];
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


export type MutationComplaint_AddComplaintArgs = {
  input: ComplaintInput;
};


export type MutationComplaint_DeleteComplaintArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationComplaint_SetInCouncilListArgs = {
  entityIds: Array<Scalars['Int']['input']>;
};


export type MutationComplaint_UpdateComplaintArgs = {
  input: ComplaintInput;
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


export type MutationSms_SendAccusedRespondedSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendComplaintAddedSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendComplaintCodeSmsArgs = {
  complaintId: Scalars['Int']['input'];
};


export type MutationSms_SendInviteToMeetingSmsArgs = {
  input: SendInviteToMeetingSmsDtoInput;
};


export type MutationTest_ConvertNumToPersianWritingArgs = {
  input: Scalars['Decimal']['input'];
};


export type MutationTest_ConvertToGregorianArgs = {
  input: Scalars['String']['input'];
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


export type MutationTest_GenerateComplaintVerdictLetterArgs = {
  input: ComplaintVerdictLetterDtoInput;
};


export type MutationTest_GenerateCouncilListLetterArgs = {
  input: Array<Scalars['Int']['input']>;
};


export type MutationTest_GenerateDecreeArgs = {
  input: DecreeDtoInput;
};


export type MutationTest_GenerateProjectNotConstructiveLetterArgs = {
  input: ProjectNotConstructiveLetterDtoInput;
};


export type MutationTest_GenerateReferToExpertLetterArgs = {
  input: ReferToExpertLetterDtoInput;
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

export type NullableOfGenderTypeOperationFilterInput = {
  eq?: InputMaybe<GenderType>;
  in?: InputMaybe<Array<InputMaybe<GenderType>>>;
  neq?: InputMaybe<GenderType>;
  nin?: InputMaybe<Array<InputMaybe<GenderType>>>;
};

export type NullableOfRegistrarTypeOperationFilterInput = {
  eq?: InputMaybe<RegistrarType>;
  in?: InputMaybe<Array<InputMaybe<RegistrarType>>>;
  neq?: InputMaybe<RegistrarType>;
  nin?: InputMaybe<Array<InputMaybe<RegistrarType>>>;
};

export type NullableOfRoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<InputMaybe<RoleType>>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<InputMaybe<RoleType>>>;
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
  letterDate: Scalars['String']['input'];
  letterNum: Scalars['String']['input'];
  userId: Scalars['String']['input'];
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
  complaintArgument_getComplaintArgument: ResponseBaseOfComplaintArgument;
  complaintArgument_getComplaintArguments: ListResponseBaseOfComplaintArgument;
  complaintFile_getComplaintFile: ResponseBaseOfComplaintFile;
  complaintFile_getComplaintFiles: ListResponseBaseOfComplaintFile;
  complaintNote_getComplaintNote: ResponseBaseOfComplaintNote;
  complaintNote_getComplaintNotes: ListResponseBaseOfComplaintNote;
  complaint_getComplaint: ResponseBaseOfComplaint;
  complaint_getComplaints: ListResponseBaseOfComplaint;
  contract_getContract: ResponseBaseOfContract;
  contract_getContracts: ListResponseBaseOfContract;
  correctionRequest_getCorrectionRequest: ResponseBaseOfCorrectionRequest;
  correctionRequest_getCorrectionRequests: ListResponseBaseOfCorrectionRequest;
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
  userPayment_getUserPayment: ResponseBaseOfUserPayment;
  userPayment_getUserPayments: ListResponseBaseOfUserPayment;
  userRole_getUserRole: ResponseBaseOfUserRole;
  userRole_getUserRoles: ListResponseBaseOfUserRole;
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


export type QueryComplaintArgument_GetComplaintArgumentArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintFile_GetComplaintFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaintNote_GetComplaintNoteArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryComplaint_GetComplaintArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryContract_GetContractArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryCorrectionRequest_GetCorrectionRequestArgs = {
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


export type QueryUserPayment_GetUserPaymentArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryUserRole_GetUserRoleArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryUserRole_GetUserRolesArgs = {
  userId: Scalars['String']['input'];
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

export type ResponseBaseOfComplaintNote = {
  __typename?: 'ResponseBaseOfComplaintNote';
  result?: Maybe<ComplaintNote>;
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

export type ResponseBaseOfSetInCouncilListResponseDto = {
  __typename?: 'ResponseBaseOfSetInCouncilListResponseDto';
  result?: Maybe<SetInCouncilListResponseDto>;
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
  landlinePhone?: InputMaybe<Scalars['String']['input']>;
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
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

export type User = {
  __typename?: 'User';
  accessFailedCount: Scalars['Int']['output'];
  address?: Maybe<Scalars['String']['output']>;
  adjustmentStatementTables?: Maybe<Array<AdjustmentStatementTable>>;
  arbitrationTermsForms?: Maybe<Array<ArbitrationTermsForm>>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  childUsers?: Maybe<Array<User>>;
  complaintArguments?: Maybe<Array<ComplaintArgument>>;
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
  operationPeriodEndDate: Scalars['Date']['output'];
  operationPeriodStartDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
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
  amountApprovedByEmployer?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountConfirmedByConsultant?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountPaid?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountProvidedByContractor?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<WorkConditionStatementFilterInput>>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dateApprovedByEmployer?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateConfirmedByConsultant?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  datePaid?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  dateProvidedByContractor?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  filledBy?: InputMaybe<NullableOfRegistrarTypeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationPeriodEndDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
  operationPeriodStartDate?: InputMaybe<ComparableDateOnlyOperationFilterInput>;
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
  id?: InputMaybe<Scalars['Int']['input']>;
  operationPeriodEndDate?: InputMaybe<Scalars['Date']['input']>;
  operationPeriodStartDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  workConditionStatementTableId?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkConditionStatementPart = {
  __typename?: 'WorkConditionStatementPart';
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
  amountApprovedByEmployer?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountConfirmedByConsultant?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountPaid?: InputMaybe<ComparableDecimalOperationFilterInput>;
  amountProvidedByContractor?: InputMaybe<ComparableDecimalOperationFilterInput>;
  and?: InputMaybe<Array<WorkConditionStatementPartFilterInput>>;
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
  or?: InputMaybe<Array<WorkConditionStatementPartFilterInput>>;
  workConditionStatement?: InputMaybe<WorkConditionStatementFilterInput>;
  workConditionStatementId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type WorkConditionStatementPartInput = {
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
  workConditionStatementId?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkConditionStatementPartSortInput = {
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
};

export type WorkConditionStatementTableInput = {
  contractId?: InputMaybe<Scalars['Int']['input']>;
  filledBy?: InputMaybe<RegistrarType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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
};

export type CreateComplaintMutationVariables = Exact<{
  contractId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
}>;


export type CreateComplaintMutation = { __typename?: 'Mutation', complaint_addComplaint: { __typename?: 'ResponseBaseOfComplaint', result?: { __typename?: 'Complaint', id: number, assignedUserId?: string | null, complaintState: ComplaintState, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UpdateComplaintMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  assignedUserId?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  complaintState?: InputMaybe<ComplaintState>;
  isApprovedByChief?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateComplaintMutation = { __typename?: 'Mutation', complaint_updateComplaint: { __typename: 'ResponseBaseOfComplaint', result?: { __typename: 'Complaint', id: number, assignedUserId?: string | null, complaintState: ComplaintState, arbitrationTermsForms?: Array<{ __typename: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type UpdateComplaintFullMutationVariables = Exact<{
  input: ComplaintInput;
}>;


export type UpdateComplaintFullMutation = { __typename?: 'Mutation', complaint_updateComplaint: { __typename: 'ResponseBaseOfComplaint', result?: { __typename: 'Complaint', id: number, assignedUserId?: string | null, complaintState: ComplaintState, arbitrationTermsForms?: Array<{ __typename: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type CreateArbitrationTermsFormMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
  filledBy: RegistrarType;
  firstCondition: Scalars['String']['input'];
  firstConditionFileName?: InputMaybe<Scalars['String']['input']>;
  secondCondition: Scalars['String']['input'];
  secondConditionFileName?: InputMaybe<Scalars['String']['input']>;
  thirdCondition: Scalars['String']['input'];
  thirdConditionFileName?: InputMaybe<Scalars['String']['input']>;
  fourthCondition: Scalars['String']['input'];
  fourthConditionFileName?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  projectNumber?: InputMaybe<Scalars['String']['input']>;
  hasReadAgreement: Scalars['Boolean']['input'];
}>;


export type CreateArbitrationTermsFormMutation = { __typename?: 'Mutation', arbitrationTermsForm_addArbitrationTermsForm: { __typename?: 'ResponseBaseOfArbitrationTermsForm', result?: { __typename?: 'ArbitrationTermsForm', id: number, complaintId: number, userId: string, filledBy: RegistrarType, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, projectName?: string | null, projectNumber?: string | null, hasReadAgreement: boolean } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type AddArgumentToComplaintMutationVariables = Exact<{
  accuserResponse?: InputMaybe<Scalars['String']['input']>;
  accuserResponseFileName?: InputMaybe<Scalars['String']['input']>;
  approvedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  councilApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
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
  userId: Scalars['String']['input'];
}>;


export type AddArgumentToComplaintMutation = { __typename?: 'Mutation', complaintArgument_addComplaintArgument: { __typename: 'ResponseBaseOfComplaintArgument', result?: { __typename: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, approvedAmount?: any | null, complaintId: number, councilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, mailRoomChiefSuggestedAmount?: any | null, mailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type UpdateArgumentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  accuserResponse?: InputMaybe<Scalars['String']['input']>;
  accuserResponseFileName?: InputMaybe<Scalars['String']['input']>;
  approvedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  complaintId?: InputMaybe<Scalars['Int']['input']>;
  councilApprovedAmount?: InputMaybe<Scalars['Decimal']['input']>;
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


export type UpdateArgumentMutation = { __typename?: 'Mutation', complaintArgument_updateComplaintArgument: { __typename?: 'ResponseBaseOfComplaintArgument', result?: { __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, approvedAmount?: any | null, complaintId: number, councilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, mailRoomChiefSuggestedAmount?: any | null, mailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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

export type Get_ComplaintsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename: 'ListResponseBaseOfComplaint', status?: any | null, result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetComplaintQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintQuery = { __typename?: 'Query', complaint_getComplaint: { __typename?: 'ResponseBaseOfComplaint', result?: { __typename?: 'Complaint', userId: string, id: number, contractId: number, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null } | null } | null } };

export type Get_Accused_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accused_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Accuser_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accuser_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Chief_ComplaintsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Chief_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetComplaintArgumentsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintArgumentsQuery = { __typename?: 'Query', complaintArgument_getComplaintArguments: { __typename?: 'ListResponseBaseOfComplaintArgument', status?: any | null, result?: { __typename?: 'ComplaintArgumentCollectionSegment', items?: Array<{ __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, approvedAmount?: any | null, complaintId: number, councilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, mailRoomChiefSuggestedAmount?: any | null, mailRoomExpertApprovedAmount?: any | null, accuserAnswerToAccusedResponse?: string | null, suggestedAmount: any, summary?: string | null, userId: string }> | null } | null } };

export type Get_Complaint_AssignedQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_Complaint_AssignedQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Arbitration_Terms_FormQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Get_Arbitration_Terms_FormQuery = { __typename?: 'Query', arbitrationTermsForm_getArbitrationTermsForms: { __typename?: 'ListResponseBaseOfArbitrationTermsForm', result?: { __typename?: 'ArbitrationTermsFormCollectionSegment', items?: Array<{ __typename?: 'ArbitrationTermsForm', id: number, complaintId: number, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, filledBy: RegistrarType }> | null } | null } };

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

export type GetComplaintsWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<ComplaintFilterInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComplaintSortInput> | ComplaintSortInput>;
}>;


export type GetComplaintsWithFilterQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, isApprovedByChief: boolean, councilListStatus: CouncilListStatus, complaintState: ComplaintState, complaintCode?: string | null, councilExpertId?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetArgumentsWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<ComplaintArgumentFilterInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComplaintArgumentSortInput> | ComplaintArgumentSortInput>;
}>;


export type GetArgumentsWithFilterQuery = { __typename?: 'Query', complaintArgument_getComplaintArguments: { __typename?: 'ListResponseBaseOfComplaintArgument', status?: any | null, result?: { __typename?: 'ComplaintArgumentCollectionSegment', items?: Array<{ __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, approvedAmount?: any | null, complaintId: number, councilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, mailRoomChiefSuggestedAmount?: any | null, mailRoomExpertApprovedAmount?: any | null, accuserAnswerToAccusedResponse?: string | null, suggestedAmount: any, summary?: string | null, userId: string }> | null } | null } };

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
  InitialTimePeriod?: InputMaybe<Scalars['Int']['input']>;
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
  ContractStatusInArbitration?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  SupervisionDepartment?: InputMaybe<Scalars['String']['input']>;
  AuthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  UnauthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  AccusedDepartmentId?: InputMaybe<Scalars['String']['input']>;
  AccuserDepartmentId?: InputMaybe<Scalars['String']['input']>;
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
  InitialTimePeriod?: InputMaybe<Scalars['Int']['input']>;
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
  ContractStatusInArbitration?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  SupervisionDepartment?: InputMaybe<Scalars['String']['input']>;
  AuthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  UnauthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
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
  InitialTimePeriod?: InputMaybe<Scalars['Int']['input']>;
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
  ContractStatusInArbitration?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  SupervisionDepartment?: InputMaybe<Scalars['String']['input']>;
  AuthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  UnauthorizedDelaysAccuser?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  AccusedDepartmentId?: InputMaybe<Scalars['String']['input']>;
  AccuserDepartmentId?: InputMaybe<Scalars['String']['input']>;
}>;


export type Update_Contract_By_AccuserMutation = { __typename?: 'Mutation', contract_updateContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Update_Contract_By_ExpertMutationVariables = Exact<{
  isExecutive: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
}>;


export type Update_Contract_By_ExpertMutation = { __typename?: 'Mutation', contract_updateContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number, isExecutive?: boolean | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type DeleteContractMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteContractMutation = { __typename?: 'Mutation', contract_deleteContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContractsQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null }> | null } | null } };

export type GetContractQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetContractQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', status?: any | null, result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, accuserNationality?: string | null, accusedNationality?: string | null, accuserRelatedPeopleByAccuser?: string | null, accuserRelatedPeopleByAccused?: string | null, accusedRelatedPeopleByAccuser?: string | null, accusedRelatedPeopleByAccused?: string | null, contractTypeByAccused?: Array<string> | null, contractTypeByAccuser?: Array<string> | null, otherContractTypeByAccused?: string | null, otherContractTypeByAccuser?: string | null, circularNumberByAccused?: string | null, circularNumberByAccuser?: string | null, circularDateByAccused?: any | null, circularDateByAccuser?: any | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null, contractNumberByAccused?: string | null, contractNumberByAccuser?: string | null, contractDateByAccused?: any | null, contractDateByAccuser?: any | null, initialBudgetByAccused?: any | null, initialBudgetByAccuser?: any | null, initialTimePeriodByAccused?: number | null, initialTimePeriodByAccuser?: number | null, priceListOfBasicUnitOfFieldByAccused?: string | null, priceListOfBasicUnitOfFieldByAccuser?: string | null, isSpecialPriceListAttachedToContractByAccused?: string | null, isSpecialPriceListAttachedToContractByAccuser?: string | null, recommendedCoefficientByAccused?: number | null, recommendedCoefficientByAccuser?: number | null, coefficientTypeByAccused?: string | null, coefficientTypeByAccuser?: string | null, assigningTypeByAccused?: string | null, assigningTypeByAccuser?: string | null, doesContainAdjustmentByAccused?: string | null, doesContainAdjustmentByAccuser?: string | null, baseIndexPeriodByAccused?: string | null, baseIndexPeriodByAccuser?: string | null, operationStartDateByAccused?: any | null, operationStartDateByAccuser?: any | null, physicalProgressInArbitrationDateByAccused?: number | null, physicalProgressInArbitrationDateByAccuser?: number | null, financialProgressInArbitrationDateByAccused?: number | null, financialProgressInArbitrationDateByAccuser?: number | null, contractStatusAndDateInArbitrationByAccused?: Array<string> | null, contractStatusAndDateInArbitrationByAccuser?: Array<string> | null, supervisionDepartmentByAccused?: string | null, supervisionDepartmentByAccuser?: string | null, authorizedDelaysByAccused?: number | null, authorizedDelaysByAccuser?: number | null, unauthorizedDelaysByAccused?: number | null, unauthorizedDelaysByAccuser?: number | null, isExecutive?: boolean | null, fileNamesByAccused?: Array<string> | null, fileNamesByAccuser?: Array<string> | null }> | null } | null } };

export type SetCouncilListMutationMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type SetCouncilListMutationMutation = { __typename?: 'Mutation', complaint_setInCouncilList: { __typename?: 'ResponseBaseOfSetInCouncilListResponseDto', result?: { __typename?: 'SetInCouncilListResponseDto', fileNames: Array<string>, result: Array<{ __typename?: 'KeyValuePairOfInt32AndBoolean', key: number, value: boolean }> } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetFileQueryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFileQueryQuery = { __typename?: 'Query', fileGallery_getFile: { __typename?: 'ResponseBaseOfFileGallery', result?: { __typename?: 'FileGallery', id: number, name: string, createdDate: any, isDeleted: boolean, lastModifiedDate?: any | null, user?: { __typename?: 'User', fullName: string, id?: string | null } | null, complaintFiles?: Array<{ __typename?: 'ComplaintFile', fileId: number, title: string, description?: string | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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


export type Create_Work_Condition_StatementMutation = { __typename?: 'Mutation', workConditionStatement_addWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', workConditionStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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


export type Update_Work_Condition_StatementMutation = { __typename?: 'Mutation', workConditionStatement_updateWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', workConditionStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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


export type Create_Work_Condition_Statement_PartMutation = { __typename?: 'Mutation', workConditionStatementPart_addWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number, workConditionStatementId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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


export type Update_Work_Condition_Statement_PartMutation = { __typename?: 'Mutation', workConditionStatementPart_updateWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number, workConditionStatementId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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


export type GetInstallmentTablesQuery = { __typename?: 'Query', installmentTable_getInstallmentTables: { __typename?: 'ListResponseBaseOfInstallmentTable', status?: any | null, result?: { __typename?: 'InstallmentTableCollectionSegment', items?: Array<{ __typename?: 'InstallmentTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, paymentTotal: any, remainingPayment: any, filledBy?: RegistrarType | null, userId: string, contract?: { __typename?: 'Contract', accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, installments?: Array<{ __typename?: 'Installment', installmentTableId: number, title: string, amount: any, date: any, filledBy?: RegistrarType | null, id: number, installmentParts?: Array<{ __typename?: 'InstallmentPart', amount: any, date: any, filledBy?: RegistrarType | null, id: number }> | null }> | null }> | null } | null } };

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


export type GetAdjustmentStatementTableQuery = { __typename?: 'Query', adjustmentStatementTable_getAdjustmentStatementTable: { __typename?: 'ResponseBaseOfAdjustmentStatementTable', result?: { __typename?: 'AdjustmentStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, adjustmentStatements?: Array<{ __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetAdjustmentStatementTablesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetAdjustmentStatementTablesQuery = { __typename?: 'Query', adjustmentStatementTable_getAdjustmentStatementTables: { __typename?: 'ListResponseBaseOfAdjustmentStatementTable', status?: any | null, result?: { __typename?: 'AdjustmentStatementTableCollectionSegment', items?: Array<{ __typename?: 'AdjustmentStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, adjustmentStatements?: Array<{ __typename?: 'AdjustmentStatement', id: number, adjustmentStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null }> | null } | null } };

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


export type GetWorkConditionStatementTableQuery = { __typename?: 'Query', workConditionStatementTable_getWorkConditionStatementTable: { __typename?: 'ResponseBaseOfWorkConditionStatementTable', result?: { __typename?: 'WorkConditionStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, workConditionStatements?: Array<{ __typename?: 'WorkConditionStatement', id: number, workConditionStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetWorkConditionStatementTableByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementTableByIdQuery = { __typename?: 'Query', workConditionStatementTable_getWorkConditionStatementTables: { __typename?: 'ListResponseBaseOfWorkConditionStatementTable', status?: any | null, result?: { __typename?: 'WorkConditionStatementTableCollectionSegment', items?: Array<{ __typename?: 'WorkConditionStatementTable', id: number, createdDate: any, lastModifiedDate?: any | null, contractId: number, filledBy?: RegistrarType | null, userId: string, user?: { __typename?: 'User', parentId?: string | null, id?: string | null, userType: UserType } | null, workConditionStatements?: Array<{ __typename?: 'WorkConditionStatement', id: number, workConditionStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string }> | null }> | null } | null } };

export type GetWorkConditionStatementQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementQuery = { __typename?: 'Query', workConditionStatement_getWorkConditionStatement: { __typename?: 'ResponseBaseOfWorkConditionStatement', result?: { __typename?: 'WorkConditionStatement', id: number, createdDate: any, lastModifiedDate?: any | null, workConditionStatementTableId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate: any, operationPeriodStartDate: any, filledBy?: RegistrarType | null, title: string, workConditionStatementParts?: Array<{ __typename?: 'WorkConditionStatementPart', id: number, createdDate: any, lastModifiedDate?: any | null, workConditionStatementId: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetWorkConditionStatementPartQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkConditionStatementPartQuery = { __typename?: 'Query', workConditionStatementPart_getWorkConditionStatementPart: { __typename?: 'ResponseBaseOfWorkConditionStatementPart', result?: { __typename?: 'WorkConditionStatementPart', id: number, amountApprovedByEmployer: any, amountConfirmedByConsultant: any, amountPaid: any, amountProvidedByContractor: any, dateApprovedByEmployer: any, dateConfirmedByConsultant: any, datePaid: any, dateProvidedByContractor: any, operationPeriodEndDate?: any | null, operationPeriodStartDate?: any | null, filledBy?: RegistrarType | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type LoginUserMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', user_signIn: { __typename?: 'ResponseBaseOfUserTokenDto', result?: { __typename?: 'UserTokenDto', token?: string | null, expireDate?: any | null, user?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, parentId?: string | null, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type ForgetPasswordMutationMutationVariables = Exact<{
  input: ForgotPasswordDtoInput;
}>;


export type ForgetPasswordMutationMutation = { __typename?: 'Mutation', user_forgotPassword: { __typename?: 'ResponseStatus', code: number, value: string } };

export type UserSignInOtpMutationMutationVariables = Exact<{
  input: LoginOtpDtoInput;
}>;


export type UserSignInOtpMutationMutation = { __typename?: 'Mutation', user_signInOTP: { __typename?: 'ResponseBaseOfUserTokenDto', result?: { __typename?: 'UserTokenDto', token?: string | null, expireDate?: any | null, user?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, parentId?: string | null, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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
}>;


export type UserSignUpMutation = { __typename?: 'Mutation', user_signUp: { __typename: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, parentId?: string | null, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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


export type UserUpdateMutation = { __typename?: 'Mutation', user_updateProfile: { __typename?: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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

export type TokenCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenCheckQuery = { __typename?: 'Query', user_isTokenValid: boolean };


export const CreateComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_addComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintState"},"value":{"kind":"EnumValue","value":"WAITING_FOR_ACCUSER_TO_REGISTER_ARBITRATION_TERMS"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUserId"}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CreateComplaintMutation, CreateComplaintMutationVariables>;
export const UpdateComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignedUserId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isApprovedByChief"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_updateComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assignedUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignedUserId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintState"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isApprovedByChief"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isApprovedByChief"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUserId"}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<UpdateComplaintMutation, UpdateComplaintMutationVariables>;
export const UpdateComplaintFullDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateComplaintFull"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_updateComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUserId"}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<UpdateComplaintFullMutation, UpdateComplaintFullMutationVariables>;
export const CreateArbitrationTermsFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArbitrationTermsForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstConditionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"secondCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"secondConditionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thirdCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thirdConditionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fourthCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fourthConditionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasReadAgreement"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForm_addArbitrationTermsForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"secondCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"secondCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"secondConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"secondConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"thirdCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thirdCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"thirdConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thirdConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fourthCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fourthCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fourthConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fourthConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"projectNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hasReadAgreement"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasReadAgreement"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"projectNumber"}},{"kind":"Field","name":{"kind":"Name","value":"hasReadAgreement"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CreateArbitrationTermsFormMutation, CreateArbitrationTermsFormMutationVariables>;
export const AddArgumentToComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddArgumentToComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_addComplaintArgument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponseFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"approvedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"councilApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertVerdict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"suggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<AddArgumentToComplaintMutation, AddArgumentToComplaintMutationVariables>;
export const UpdateArgumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArgument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserAnswerToAccusedResponse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_updateComplaintArgument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponseFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"approvedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"councilApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertVerdict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"suggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserAnswerToAccusedResponse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserAnswerToAccusedResponse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateArgumentMutation, UpdateArgumentMutationVariables>;
export const DeleteArgumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArgument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_deleteComplaintArgument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteArgumentMutation, DeleteArgumentMutationVariables>;
export const DeleteCompainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCompain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_deleteComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCompainMutation, DeleteCompainMutationVariables>;
export const AddComplaintNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComplaintNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintNote_addComplaintNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteType"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}}]} as unknown as DocumentNode<AddComplaintNoteMutation, AddComplaintNoteMutationVariables>;
export const SendAccusedRespondedSmsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendAccusedRespondedSMS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sms_sendAccusedRespondedSMS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SendAccusedRespondedSmsMutation, SendAccusedRespondedSmsMutationVariables>;
export const Get_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMPLAINTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdDate"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>;
export const GetComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"contractSubjectByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractSubjectByAccuser"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetComplaintQuery, GetComplaintQueryVariables>;
export const Get_Accused_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ACCUSED_COMPLAINTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contract"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accusedDepartmentUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdDate"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>;
export const Get_Accuser_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ACCUSER_COMPLAINTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contract"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accuserDepartmentUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdDate"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>;
export const Get_Chief_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_CHIEF_COMPLAINTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintState"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"WAITING_FOR_CHIEF_TO_ASSIGN"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintState"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"WAITING_FOR_CHIEF_TO_APPROVE_EXPERTS_ANSWERS_TO_ARGUMENTS"}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdDate"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Chief_ComplaintsQuery, Get_Chief_ComplaintsQueryVariables>;
export const GetComplaintArgumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComplaintArguments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_getComplaintArguments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"accuserAnswerToAccusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>;
export const Get_Complaint_AssignedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMPLAINT_ASSIGNED"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assignedUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>;
export const Get_Arbitration_Terms_FormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ARBITRATION_TERMS_FORM"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForm_getArbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Arbitration_Terms_FormQuery, Get_Arbitration_Terms_FormQueryVariables>;
export const GetContractsFilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContractsFilesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintFile_getComplaintFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fileGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContractsFilesQueryQuery, GetContractsFilesQueryQueryVariables>;
export const GetContractFilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContractFilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintFile_getComplaintFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fileGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContractFilesQueryQuery, GetContractFilesQueryQueryVariables>;
export const GetComplaintsNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getComplaintsNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintNote_getComplaintNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetComplaintsNotesQuery, GetComplaintsNotesQueryVariables>;
export const GetComplaintsWithFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComplaintsWithFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintSortInput"}}}},"defaultValue":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdDate"},"value":{"kind":"EnumValue","value":"DESC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isApprovedByChief"}},{"kind":"Field","name":{"kind":"Name","value":"councilListStatus"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"councilExpertId"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetComplaintsWithFilterQuery, GetComplaintsWithFilterQueryVariables>;
export const GetArgumentsWithFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArgumentsWithFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintArgumentFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintArgumentSortInput"}}}},"defaultValue":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdDate"},"value":{"kind":"EnumValue","value":"DESC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_getComplaintArguments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"accuserAnswerToAccusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetArgumentsWithFilterQuery, GetArgumentsWithFilterQueryVariables>;
export const Create_ContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_CONTRACT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedDepartmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserDepartmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_addContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accuserRelatedPeopleByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedRelatedPeopleByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserNationality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularNumberByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractSubjectByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractNumberByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialBudgetByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialTimePeriodByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recommendedCoefficientByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"coefficientTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assigningTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"doesContainAdjustmentByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"baseIndexPeriodByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationStartDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"supervisionDepartmentByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorizedDelaysByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unauthorizedDelaysByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedDepartmentUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedDepartmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserDepartmentUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserDepartmentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_ContractMutation, Create_ContractMutationVariables>;
export const Update_Contract_By_AccusedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_CONTRACT_BY_ACCUSED"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_updateContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserRelatedPeopleByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedRelatedPeopleByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedNationality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractTypeByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularNumberByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractSubjectByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractNumberByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialBudgetByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialTimePeriodByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recommendedCoefficientByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"coefficientTypeByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assigningTypeByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"doesContainAdjustmentByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"baseIndexPeriodByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationStartDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"supervisionDepartmentByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorizedDelaysByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unauthorizedDelaysByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Contract_By_AccusedMutation, Update_Contract_By_AccusedMutationVariables>;
export const Update_Contract_By_AccuserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_CONTRACT_BY_ACCUSER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedDepartmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserDepartmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_updateContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserRelatedPeopleByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedRelatedPeopleByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserNationality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularNumberByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractSubjectByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractNumberByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialBudgetByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialTimePeriodByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recommendedCoefficientByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"coefficientTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assigningTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"doesContainAdjustmentByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"baseIndexPeriodByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationStartDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"supervisionDepartmentByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorizedDelaysByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unauthorizedDelaysByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedDepartmentUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedDepartmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserDepartmentUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserDepartmentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Contract_By_AccuserMutation, Update_Contract_By_AccuserMutationVariables>;
export const Update_Contract_By_ExpertDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_CONTRACT_BY_EXPERT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isExecutive"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_updateContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isExecutive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isExecutive"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isExecutive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Contract_By_ExpertMutation, Update_Contract_By_ExpertMutationVariables>;
export const DeleteContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_deleteContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteContractMutation, DeleteContractMutationVariables>;
export const GetContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_getContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContractsQuery, GetContractsQueryVariables>;
export const GetContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_getContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserNationality"}},{"kind":"Field","name":{"kind":"Name","value":"accusedNationality"}},{"kind":"Field","name":{"kind":"Name","value":"accuserRelatedPeopleByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accuserRelatedPeopleByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"accusedRelatedPeopleByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedRelatedPeopleByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"otherContractTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"otherContractTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"circularNumberByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"circularNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"circularDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"circularDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractSubjectByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractSubjectByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialTimePeriodByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"initialTimePeriodByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"recommendedCoefficientByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"recommendedCoefficientByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"coefficientTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"coefficientTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"assigningTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"assigningTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"doesContainAdjustmentByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"doesContainAdjustmentByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"baseIndexPeriodByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"baseIndexPeriodByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"operationStartDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"operationStartDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"supervisionDepartmentByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"supervisionDepartmentByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedDelaysByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedDelaysByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorizedDelaysByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorizedDelaysByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"isExecutive"}},{"kind":"Field","name":{"kind":"Name","value":"fileNamesByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"fileNamesByAccuser"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetContractQuery, GetContractQueryVariables>;
export const SetCouncilListMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setCouncilListMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_setInCouncilList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileNames"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<SetCouncilListMutationMutation, SetCouncilListMutationMutationVariables>;
export const GetFileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileGallery_getFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetFileQueryQuery, GetFileQueryQueryVariables>;
export const Create_Installment_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_INSTALLMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentTotal"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"remainingPayment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTable_addInstallmentTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"paymentTotal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentTotal"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registrarType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"remainingPayment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"remainingPayment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTotal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Installment_TableMutation, Create_Installment_TableMutationVariables>;
export const Update_Installment_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_INSTALLMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentTotal"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"remainingPayment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTable_updateInstallmentTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"paymentTotal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentTotal"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registrarType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"remainingPayment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"remainingPayment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTotal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Installment_TableMutation, Update_Installment_TableMutationVariables>;
export const Delete_Installment_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_INSTALLMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTable_deleteInstallmentTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Installment_TableMutation, Delete_Installment_TableMutationVariables>;
export const Create_InstallmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_INSTALLMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installmentTableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installment_addInstallment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"installmentTableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installmentTableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registrarType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_InstallmentMutation, Create_InstallmentMutationVariables>;
export const Update_InstallmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_INSTALLMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installmentTableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installment_updateInstallment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"installmentTableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installmentTableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registrarType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_InstallmentMutation, Update_InstallmentMutationVariables>;
export const Delete_InstallmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_INSTALLMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installment_deleteInstallment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_InstallmentMutation, Delete_InstallmentMutationVariables>;
export const Create_Installment_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_INSTALLMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentPart_addInstallmentPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"installmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registrarType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Installment_PartMutation, Create_Installment_PartMutationVariables>;
export const Update_Installment_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_INSTALLMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentPart_updateInstallmentPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"installmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registrarType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registrarType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Installment_PartMutation, Update_Installment_PartMutationVariables>;
export const Delete_Installment_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_INSTALLMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentPart_deleteInstallmentPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Installment_PartMutation, Delete_Installment_PartMutationVariables>;
export const Create_Adjustment_Statement_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_ADJUSTMENT_STATEMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTable_addAdjustmentStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Adjustment_Statement_TableMutation, Create_Adjustment_Statement_TableMutationVariables>;
export const Update_Adjustment_Statement_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_ADJUSTMENT_STATEMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTable_updateAdjustmentStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Adjustment_Statement_TableMutation, Update_Adjustment_Statement_TableMutationVariables>;
export const Delete_Adjustment_Statement_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_ADJUSTMENT_STATEMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTable_deleteAdjustmentStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Adjustment_Statement_TableMutation, Delete_Adjustment_Statement_TableMutationVariables>;
export const Create_Adjustment_StatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_ADJUSTMENT_STATEMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementTableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatement_addAdjustmentStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"adjustmentStatementTableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementTableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Adjustment_StatementMutation, Create_Adjustment_StatementMutationVariables>;
export const Update_Adjustment_StatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_ADJUSTMENT_STATEMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementTableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatement_updateAdjustmentStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"adjustmentStatementTableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementTableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Adjustment_StatementMutation, Update_Adjustment_StatementMutationVariables>;
export const Delete_Adjustment_StatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_ADJUSTMENT_STATEMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatement_deleteAdjustmentStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Adjustment_StatementMutation, Delete_Adjustment_StatementMutationVariables>;
export const Create_Adjustment_Statement_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_ADJUSTMENT_STATEMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementPart_addAdjustmentStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"adjustmentStatementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Adjustment_Statement_PartMutation, Create_Adjustment_Statement_PartMutationVariables>;
export const Update_Adjustment_Statement_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_ADJUSTMENT_STATEMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementPart_updateAdjustmentStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"adjustmentStatementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjustmentStatementId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Adjustment_Statement_PartMutation, Update_Adjustment_Statement_PartMutationVariables>;
export const Delete_Adjustment_Statement_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_ADJUSTMENT_STATEMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementPart_deleteAdjustmentStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Adjustment_Statement_PartMutation, Delete_Adjustment_Statement_PartMutationVariables>;
export const Create_Work_Condition_Statement_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_WORK_CONDITION_STATEMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTable_addWorkConditionStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Work_Condition_Statement_TableMutation, Create_Work_Condition_Statement_TableMutationVariables>;
export const Update_Work_Condition_Statement_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_WORK_CONDITION_STATEMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTable_updateWorkConditionStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Work_Condition_Statement_TableMutation, Update_Work_Condition_Statement_TableMutationVariables>;
export const Delete_Work_Condition_Statement_TableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_WORK_CONDITION_STATEMENT_TABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTable_deleteWorkConditionStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Work_Condition_Statement_TableMutation, Delete_Work_Condition_Statement_TableMutationVariables>;
export const Create_Work_Condition_StatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_WORK_CONDITION_STATEMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementTableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatement_addWorkConditionStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"workConditionStatementTableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementTableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Work_Condition_StatementMutation, Create_Work_Condition_StatementMutationVariables>;
export const Update_Work_Condition_StatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_WORK_CONDITION_STATEMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementTableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatement_updateWorkConditionStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"workConditionStatementTableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementTableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Work_Condition_StatementMutation, Update_Work_Condition_StatementMutationVariables>;
export const Delete_Work_Condition_StatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_WORK_CONDITION_STATEMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatement_deleteWorkConditionStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Work_Condition_StatementMutation, Delete_Work_Condition_StatementMutationVariables>;
export const Create_Work_Condition_Statement_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_WORK_CONDITION_STATEMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementPart_addWorkConditionStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"workConditionStatementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_Work_Condition_Statement_PartMutation, Create_Work_Condition_Statement_PartMutationVariables>;
export const Update_Work_Condition_Statement_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_WORK_CONDITION_STATEMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementPart_updateWorkConditionStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"workConditionStatementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workConditionStatementId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountPaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountPaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amountProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateApprovedByEmployer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateApprovedByEmployer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateConfirmedByConsultant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateConfirmedByConsultant"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"datePaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datePaid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dateProvidedByContractor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateProvidedByContractor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodEndDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodEndDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationPeriodStartDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operationPeriodStartDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Work_Condition_Statement_PartMutation, Update_Work_Condition_Statement_PartMutationVariables>;
export const Delete_Work_Condition_Statement_PartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_WORK_CONDITION_STATEMENT_PART"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementPart_deleteWorkConditionStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_Work_Condition_Statement_PartMutation, Delete_Work_Condition_Statement_PartMutationVariables>;
export const GetInstallmentTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstallmentTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTable_getInstallmentTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTotal"}},{"kind":"Field","name":{"kind":"Name","value":"remainingPayment"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTableId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"installmentParts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstallmentTableQuery, GetInstallmentTableQueryVariables>;
export const GetInstallmentTablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstallmentTables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTable_getInstallmentTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"20000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTotal"}},{"kind":"Field","name":{"kind":"Name","value":"remainingPayment"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentTableId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"installmentParts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetInstallmentTablesQuery, GetInstallmentTablesQueryVariables>;
export const GetInstallmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstallment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installment_getInstallment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"installmentTableId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"installmentParts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstallmentQuery, GetInstallmentQueryVariables>;
export const GetInstallmentPartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstallmentPart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installmentPart_getInstallmentPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"installmentId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstallmentPartQuery, GetInstallmentPartQueryVariables>;
export const GetAdjustmentStatementTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentStatementTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTable_getAdjustmentStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdjustmentStatementTableQuery, GetAdjustmentStatementTableQueryVariables>;
export const GetAdjustmentStatementTablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentStatementTables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTable_getAdjustmentStatementTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"20000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAdjustmentStatementTablesQuery, GetAdjustmentStatementTablesQueryVariables>;
export const GetAdjustmentStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatement_getAdjustmentStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementParts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdjustmentStatementQuery, GetAdjustmentStatementQueryVariables>;
export const GetAdjustmentStatementPartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentStatementPart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentStatementPart_getAdjustmentStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdjustmentStatementPartQuery, GetAdjustmentStatementPartQueryVariables>;
export const GetWorkConditionStatementTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkConditionStatementTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTable_getWorkConditionStatementTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkConditionStatementTableQuery, GetWorkConditionStatementTableQueryVariables>;
export const GetWorkConditionStatementTableByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkConditionStatementTableByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTable_getWorkConditionStatementTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"20000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetWorkConditionStatementTableByIdQuery, GetWorkConditionStatementTableByIdQueryVariables>;
export const GetWorkConditionStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkConditionStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatement_getWorkConditionStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementTableId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementParts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementId"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkConditionStatementQuery, GetWorkConditionStatementQueryVariables>;
export const GetWorkConditionStatementPartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkConditionStatementPart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workConditionStatementPart_getWorkConditionStatementPart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amountApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"amountConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"dateApprovedByEmployer"}},{"kind":"Field","name":{"kind":"Name","value":"dateConfirmedByConsultant"}},{"kind":"Field","name":{"kind":"Name","value":"datePaid"}},{"kind":"Field","name":{"kind":"Name","value":"dateProvidedByContractor"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodEndDate"}},{"kind":"Field","name":{"kind":"Name","value":"operationPeriodStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkConditionStatementPartQuery, GetWorkConditionStatementPartQueryVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expireDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const ForgetPasswordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgetPasswordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ForgotPasswordDtoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>;
export const UserSignInOtpMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignInOTPMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginOTPDtoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_signInOTP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expireDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UserSignInOtpMutationMutation, UserSignInOtpMutationMutationVariables>;
export const SentOtpMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SentOTPMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_oneTimePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SentOtpMutationMutation, SentOtpMutationMutationVariables>;
export const UserSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"confirmPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nationalCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<UserSignUpMutation, UserSignUpMutationVariables>;
export const SendCallToMeetingSmsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendCallToMeetingSMS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendInviteToMeetingSMSDtoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sms_sendInviteToMeetingSMS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SendCallToMeetingSmsMutation, SendCallToMeetingSmsMutationVariables>;
export const GenarateDateOfBirthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenarateDateOfBirth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"test_convertToGregorian"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<GenarateDateOfBirthMutation, GenarateDateOfBirthMutationVariables>;
export const UserDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UserDeleteMutation, UserDeleteMutationVariables>;
export const UserUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nationalCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserUpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"confirmPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"currentPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UserUpdatePasswordMutation, UserUpdatePasswordMutationVariables>;
export const AddRoleToUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddRoleToUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRole_addUserToRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleType"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<AddRoleToUserMutation, AddRoleToUserMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersWithParentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersWithParentID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userRoles"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"none"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"roleType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"SENIOR_USER"}}]}}]}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetUsersWithParentIdQuery, GetUsersWithParentIdQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const Get_User_QueriableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_QUERIABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUserQueryable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>;
export const GetAllOganizationUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllOganizationUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"ORGANIZATION"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"CONTRACTOR_OR_CONSULTANT"}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>;
export const Get_Organization_Individual_Users_With_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ORGANIZATION_INDIVIDUAL_USERS_WITH_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"INDIVIDUAL"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>;
export const TokenCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TokenCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_isTokenValid"}}]}}]} as unknown as DocumentNode<TokenCheckQuery, TokenCheckQueryVariables>;