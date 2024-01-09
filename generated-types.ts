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

export type GetUserWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<UserFilterInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<UserSortInput> | UserSortInput>;
}>;


export type GetUserWithFilterQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type TokenCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenCheckQuery = { __typename?: 'Query', user_isTokenValid: boolean };


export const CreateComplaintDocument = gql`
    mutation CreateComplaint($contractId: Int!, $userId: String!) {
  complaint_addComplaint(
    input: {contractId: $contractId, userId: $userId, complaintState: WAITING_FOR_ACCUSER_TO_REGISTER_ARBITRATION_TERMS}
  ) {
    result {
      id
      assignedUserId
      complaintState
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
    mutation UpdateComplaint($id: Int!, $assignedUserId: String, $contractId: Int, $userId: String, $complaintState: ComplaintState, $isApprovedByChief: Boolean) {
  complaint_updateComplaint(
    input: {id: $id, assignedUserId: $assignedUserId, contractId: $contractId, userId: $userId, complaintState: $complaintState, isApprovedByChief: $isApprovedByChief}
  ) {
    result {
      id
      assignedUserId
      complaintState
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
 *      complaintState: // value for 'complaintState'
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
      complaintState
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
    mutation CreateArbitrationTermsForm($complaintId: Int!, $userId: String!, $filledBy: RegistrarType!, $firstCondition: String!, $firstConditionFileName: String, $secondCondition: String!, $secondConditionFileName: String, $thirdCondition: String!, $thirdConditionFileName: String, $fourthCondition: String!, $fourthConditionFileName: String, $projectName: String, $projectNumber: String, $hasReadAgreement: Boolean!) {
  arbitrationTermsForm_addArbitrationTermsForm(
    input: {complaintId: $complaintId, userId: $userId, filledBy: $filledBy, firstCondition: $firstCondition, firstConditionFileName: $firstConditionFileName, secondCondition: $secondCondition, secondConditionFileName: $secondConditionFileName, thirdCondition: $thirdCondition, thirdConditionFileName: $thirdConditionFileName, fourthCondition: $fourthCondition, fourthConditionFileName: $fourthConditionFileName, projectName: $projectName, projectNumber: $projectNumber, hasReadAgreement: $hasReadAgreement}
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
 *      thirdConditionFileName: // value for 'thirdConditionFileName'
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
    mutation AddArgumentToComplaint($accuserResponse: String, $accuserResponseFileName: String, $approvedAmount: Decimal, $complaintId: Int, $councilApprovedAmount: Decimal, $description: String, $expertId: String, $expertOpinion: String, $expertOpinionFileName: String, $expertVerdict: String, $fileName: String, $filledBy: RegistrarType, $mailRoomChiefSuggestedAmount: Decimal, $mailRoomExpertApprovedAmount: Decimal, $suggestedAmount: Decimal, $summary: String, $userId: String!) {
  complaintArgument_addComplaintArgument(
    input: {accusedResponse: $accuserResponse, accusedResponseFileName: $accuserResponseFileName, approvedAmount: $approvedAmount, complaintId: $complaintId, councilApprovedAmount: $councilApprovedAmount, description: $description, expertId: $expertId, expertOpinion: $expertOpinion, expertOpinionFileName: $expertOpinionFileName, expertVerdict: $expertVerdict, fileName: $fileName, filledBy: $filledBy, mailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount, mailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount, suggestedAmount: $suggestedAmount, summary: $summary, userId: $userId}
  ) {
    result {
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
 *      accuserResponse: // value for 'accuserResponse'
 *      accuserResponseFileName: // value for 'accuserResponseFileName'
 *      approvedAmount: // value for 'approvedAmount'
 *      complaintId: // value for 'complaintId'
 *      councilApprovedAmount: // value for 'councilApprovedAmount'
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
    mutation UpdateArgument($id: Int!, $accuserResponse: String, $accuserResponseFileName: String, $approvedAmount: Decimal, $complaintId: Int, $councilApprovedAmount: Decimal, $description: String, $expertId: String, $expertOpinion: String, $expertOpinionFileName: String, $expertVerdict: String, $fileName: String, $filledBy: RegistrarType, $mailRoomChiefSuggestedAmount: Decimal, $mailRoomExpertApprovedAmount: Decimal, $suggestedAmount: Decimal, $summary: String, $userId: String, $accuserAnswerToAccusedResponse: String) {
  complaintArgument_updateComplaintArgument(
    input: {accusedResponse: $accuserResponse, accusedResponseFileName: $accuserResponseFileName, approvedAmount: $approvedAmount, complaintId: $complaintId, councilApprovedAmount: $councilApprovedAmount, description: $description, expertId: $expertId, expertOpinion: $expertOpinion, expertOpinionFileName: $expertOpinionFileName, expertVerdict: $expertVerdict, fileName: $fileName, filledBy: $filledBy, mailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount, mailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount, suggestedAmount: $suggestedAmount, summary: $summary, userId: $userId, accuserAnswerToAccusedResponse: $accuserAnswerToAccusedResponse, id: $id}
  ) {
    result {
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
      where: {or: [{complaintState: {eq: WAITING_FOR_CHIEF_TO_ASSIGN}}, {complaintState: {eq: WAITING_FOR_CHIEF_TO_APPROVE_EXPERTS_ANSWERS_TO_ARGUMENTS}}]}
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
        thirdConditionFileName
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
export const Create_ContractDocument = gql`
    mutation CREATE_CONTRACT($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Int, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Float, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: [String!], $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $AccusedDepartmentId: String, $AccuserDepartmentId: String) {
  contract_addContract(
    input: {accuserRelatedPeopleByAccuser: $AccuserRelatedPeople, accusedRelatedPeopleByAccuser: $AccusedRelatedPeople, accuserNationality: $AccuserNationality, contractTypeByAccuser: $ContractType, circularNumberByAccuser: $CircularNumber, circularDateByAccuser: $CircularDate, contractSubjectByAccuser: $ContractSubject, contractNumberByAccuser: $ContractNumber, contractDateByAccuser: $ContractDate, initialBudgetByAccuser: $InitialBudget, initialTimePeriodByAccuser: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccuser: $RecommendedCoefficient, coefficientTypeByAccuser: $CoefficientType, assigningTypeByAccuser: $AssigningType, doesContainAdjustmentByAccuser: $DoesContainAdjustment, baseIndexPeriodByAccuser: $BaseIndexPeriod, operationStartDateByAccuser: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration, supervisionDepartmentByAccuser: $SupervisionDepartment, authorizedDelaysByAccuser: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser, accusedDepartmentUserId: $AccusedDepartmentId, accuserDepartmentUserId: $AccuserDepartmentId}
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
    mutation UPDATE_CONTRACT_BY_ACCUSED($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Int, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Float, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: [String!], $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $id: Int!) {
  contract_updateContract(
    input: {id: $id, accuserRelatedPeopleByAccused: $AccuserRelatedPeople, accusedRelatedPeopleByAccused: $AccusedRelatedPeople, accusedNationality: $AccuserNationality, contractTypeByAccused: $ContractType, circularNumberByAccused: $CircularNumber, circularDateByAccused: $CircularDate, contractSubjectByAccused: $ContractSubject, contractNumberByAccused: $ContractNumber, contractDateByAccused: $ContractDate, initialBudgetByAccused: $InitialBudget, initialTimePeriodByAccused: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccused: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccused: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccused: $RecommendedCoefficient, coefficientTypeByAccused: $CoefficientType, assigningTypeByAccused: $AssigningType, doesContainAdjustmentByAccused: $DoesContainAdjustment, baseIndexPeriodByAccused: $BaseIndexPeriod, operationStartDateByAccused: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccused: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccused: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccused: $ContractStatusInArbitration, supervisionDepartmentByAccused: $SupervisionDepartment, authorizedDelaysByAccused: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccused: $UnauthorizedDelaysAccuser}
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
    mutation UPDATE_CONTRACT_BY_ACCUSER($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Int, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Float, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: [String!], $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $id: Int!, $AccusedDepartmentId: String, $AccuserDepartmentId: String) {
  contract_updateContract(
    input: {id: $id, accuserRelatedPeopleByAccuser: $AccuserRelatedPeople, accusedRelatedPeopleByAccuser: $AccusedRelatedPeople, accuserNationality: $AccuserNationality, contractTypeByAccuser: $ContractType, circularNumberByAccuser: $CircularNumber, circularDateByAccuser: $CircularDate, contractSubjectByAccuser: $ContractSubject, contractNumberByAccuser: $ContractNumber, contractDateByAccuser: $ContractDate, initialBudgetByAccuser: $InitialBudget, initialTimePeriodByAccuser: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccuser: $RecommendedCoefficient, coefficientTypeByAccuser: $CoefficientType, assigningTypeByAccuser: $AssigningType, doesContainAdjustmentByAccuser: $DoesContainAdjustment, baseIndexPeriodByAccuser: $BaseIndexPeriod, operationStartDateByAccuser: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration, supervisionDepartmentByAccuser: $SupervisionDepartment, authorizedDelaysByAccuser: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser, accusedDepartmentUserId: $AccusedDepartmentId, accuserDepartmentUserId: $AccuserDepartmentId}
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
  contract_updateContract(input: {id: $id, isExecutive: $isExecutive}) {
    result {
      id
      isExecutive
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
        isExecutive
        fileNamesByAccused
        fileNamesByAccuser
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
export const Create_Installment_TableDocument = gql`
    mutation CREATE_INSTALLMENT_TABLE($contractId: Int, $paymentTotal: Decimal, $registrarType: RegistrarType, $remainingPayment: Decimal, $userId: String) {
  installmentTable_addInstallmentTable(
    input: {contractId: $contractId, paymentTotal: $paymentTotal, registrarType: $registrarType, remainingPayment: $remainingPayment, userId: $userId}
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
    input: {contractId: $contractId, paymentTotal: $paymentTotal, registrarType: $registrarType, remainingPayment: $remainingPayment, userId: $userId, id: $id}
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
    mutation CREATE_WORK_CONDITION_STATEMENT_TABLE($contractId: Int, $filledBy: RegistrarType, $userId: String) {
  workConditionStatementTable_addWorkConditionStatementTable(
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
          installmentParts {
            amount
            date
            filledBy
            id
          }
        }
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
    mutation UserSignUp($confirmPassword: String!, $email: String, $fullName: String!, $nationalCode: String, $password: String!, $phoneNumber: String, $userName: String!, $birthDate: Date, $userType: UserType!, $parentId: String) {
  user_signUp(
    input: {userType: $userType, birthDate: $birthDate, confirmPassword: $confirmPassword, email: $email, fullName: $fullName, nationalCode: $nationalCode, password: $password, phoneNumber: $phoneNumber, userName: $userName, parentId: $parentId}
  ) {
    result {
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