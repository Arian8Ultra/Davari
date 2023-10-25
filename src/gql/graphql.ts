/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The built-in `Decimal` scalar type. */
  Decimal: { input: any; output: any; }
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

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
  projectName: Scalars['String']['output'];
  projectNumber: Scalars['String']['output'];
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

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
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
  createdDate: Scalars['DateTime']['output'];
  expertOpinion?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ComplaintArgument = {
  __typename?: 'ComplaintArgument';
  accusedResponse?: Maybe<Scalars['String']['output']>;
  accusedResponseFileName?: Maybe<Scalars['String']['output']>;
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
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  expertOpinion?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintInput = {
  arbitrationCost?: InputMaybe<Scalars['Decimal']['input']>;
  assignedUserId?: InputMaybe<Scalars['String']['input']>;
  complaintState?: InputMaybe<ComplaintState>;
  contractId?: InputMaybe<Scalars['Int']['input']>;
  expertOpinion?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintNote = {
  __typename?: 'ComplaintNote';
  complaintId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  myProperty?: Maybe<Complaint>;
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
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  myProperty?: InputMaybe<ComplaintFilterInput>;
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
  complaintId?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  myProperty?: InputMaybe<ComplaintSortInput>;
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
  createdDate?: InputMaybe<SortEnumType>;
  expertOpinion?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export enum ComplaintState {
  AccusedAnsweredArguments = 'ACCUSED_ANSWERED_ARGUMENTS',
  AccusedApprovedArgumentsAnswers = 'ACCUSED_APPROVED_ARGUMENTS_ANSWERS',
  AccusedCompletedArbitrationTerms = 'ACCUSED_COMPLETED_ARBITRATION_TERMS',
  AccusedCompletedContract = 'ACCUSED_COMPLETED_CONTRACT',
  AccusedNotifiedOfOfferorChangingResult = 'ACCUSED_NOTIFIED_OF_OFFEROR_CHANGING_RESULT',
  AccuserAcceptedAccusedAnswers = 'ACCUSER_ACCEPTED_ACCUSED_ANSWERS',
  AccuserAddedAnswer = 'ACCUSER_ADDED_ANSWER',
  AccuserAddedArbitrationTerms = 'ACCUSER_ADDED_ARBITRATION_TERMS',
  AccuserAddedComplaint = 'ACCUSER_ADDED_COMPLAINT',
  AccuserAddedContract = 'ACCUSER_ADDED_CONTRACT',
  AccuserApprovedArguments = 'ACCUSER_APPROVED_ARGUMENTS',
  AccuserNotifiedOfSuccessfulChangingOfTheOfferor = 'ACCUSER_NOTIFIED_OF_SUCCESSFUL_CHANGING_OF_THE_OFFEROR',
  AccuserRegisteredArguments = 'ACCUSER_REGISTERED_ARGUMENTS',
  AccuserViewedArguments = 'ACCUSER_VIEWED_ARGUMENTS',
  AddingToComplaintList = 'ADDING_TO_COMPLAINT_LIST',
  CheckingAndUploadingTheSignedDecree = 'CHECKING_AND_UPLOADING_THE_SIGNED_DECREE',
  CheckingForBeingConstructive = 'CHECKING_FOR_BEING_CONSTRUCTIVE',
  ComplaintDetermined = 'COMPLAINT_DETERMINED',
  ComplaintIsCanceledByAccuser = 'COMPLAINT_IS_CANCELED_BY_ACCUSER',
  DeterminingCaseExpert = 'DETERMINING_CASE_EXPERT',
  DidNotFulfillFirstPayment = 'DID_NOT_FULFILL_FIRST_PAYMENT',
  MailRoomChiefReviewingTheFinalReport = 'MAIL_ROOM_CHIEF_REVIEWING_THE_FINAL_REPORT',
  MailRoomExpertReviewingTheFinalReport = 'MAIL_ROOM_EXPERT_REVIEWING_THE_FINAL_REPORT',
  NewOfferorNotified = 'NEW_OFFEROR_NOTIFIED',
  NotAcceptedForBeingConstructive = 'NOT_ACCEPTED_FOR_BEING_CONSTRUCTIVE',
  RedeterminingCaseExpert = 'REDETERMINING_CASE_EXPERT',
  ResultNotifiedAbilityToViewScannedPhysicalResult = 'RESULT_NOTIFIED_ABILITY_TO_VIEW_SCANNED_PHYSICAL_RESULT',
  ReviewingExpertOpinionOnOfferorChanging = 'REVIEWING_EXPERT_OPINION_ON_OFFEROR_CHANGING',
  UploadingDocumentsAndReviewingComplaint = 'UPLOADING_DOCUMENTS_AND_REVIEWING_COMPLAINT',
  WaitingForAccusedToFillForms = 'WAITING_FOR_ACCUSED_TO_FILL_FORMS',
  WaitingForAccusedToSignDecree = 'WAITING_FOR_ACCUSED_TO_SIGN_DECREE',
  WaitingForAccuserAndAccusedToSignDecree = 'WAITING_FOR_ACCUSER_AND_ACCUSED_TO_SIGN_DECREE',
  WaitingForAccuserToSignDecree = 'WAITING_FOR_ACCUSER_TO_SIGN_DECREE',
  WaitingForCaseExpertRegistry = 'WAITING_FOR_CASE_EXPERT_REGISTRY',
  WaitingForCouncilResult = 'WAITING_FOR_COUNCIL_RESULT',
  WaitingForExpertsCouncilPayment = 'WAITING_FOR_EXPERTS_COUNCIL_PAYMENT',
  WaitingForFinalReportRegistration = 'WAITING_FOR_FINAL_REPORT_REGISTRATION',
  WaitingForFinalResultUpload = 'WAITING_FOR_FINAL_RESULT_UPLOAD',
  WaitingForFirstPayment = 'WAITING_FOR_FIRST_PAYMENT',
  WaitingForLetterResponseFromMinistersCouncil = 'WAITING_FOR_LETTER_RESPONSE_FROM_MINISTERS_COUNCIL',
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
  contractNumberByAccused?: Maybe<Scalars['String']['output']>;
  contractNumberByAccuser?: Maybe<Scalars['String']['output']>;
  contractStatusAndDateInArbitrationByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractStatusAndDateInArbitrationByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  contractSubjectByAccused?: Maybe<Scalars['String']['output']>;
  contractSubjectByAccuser?: Maybe<Scalars['String']['output']>;
  contractTypeByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractTypeByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  createdDate: Scalars['DateTime']['output'];
  departmentUser?: Maybe<User>;
  doesContainAdjustmentByAccused?: Maybe<Scalars['String']['output']>;
  doesContainAdjustmentByAccuser?: Maybe<Scalars['String']['output']>;
  fileNamesByAccused?: Maybe<Array<Scalars['String']['output']>>;
  fileNamesByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  financialProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  financialProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  initialBudgetByAccused?: Maybe<Scalars['Decimal']['output']>;
  initialBudgetByAccuser?: Maybe<Scalars['Decimal']['output']>;
  initialTimePeriodByAccused?: Maybe<Scalars['Int']['output']>;
  initialTimePeriodByAccuser?: Maybe<Scalars['Int']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  isExecutiveByAccused?: Maybe<Scalars['Boolean']['output']>;
  isExecutiveByAccuser?: Maybe<Scalars['Boolean']['output']>;
  isSpecialPriceListAttachedToContractByAccused?: Maybe<Scalars['String']['output']>;
  isSpecialPriceListAttachedToContractByAccuser?: Maybe<Scalars['String']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  operationStartDateByAccused?: Maybe<Scalars['Date']['output']>;
  operationStartDateByAccuser?: Maybe<Scalars['Date']['output']>;
  otherContractTypeByAccused?: Maybe<Scalars['String']['output']>;
  otherContractTypeByAccuser?: Maybe<Scalars['String']['output']>;
  physicalProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  physicalProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  priceListOfBasicUnitOfFieldByAccused?: Maybe<Scalars['String']['output']>;
  priceListOfBasicUnitOfFieldByAccuser?: Maybe<Scalars['String']['output']>;
  recommendedCoefficientByAccused?: Maybe<Scalars['Int']['output']>;
  recommendedCoefficientByAccuser?: Maybe<Scalars['Int']['output']>;
  supervisionDepartmentByAccused?: Maybe<Scalars['String']['output']>;
  supervisionDepartmentByAccuser?: Maybe<Scalars['String']['output']>;
  unauthorizedDelaysByAccused?: Maybe<Scalars['Int']['output']>;
  unauthorizedDelaysByAccuser?: Maybe<Scalars['Int']['output']>;
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
  contractNumberByAccused?: InputMaybe<StringOperationFilterInput>;
  contractNumberByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  contractSubjectByAccused?: InputMaybe<StringOperationFilterInput>;
  contractSubjectByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractTypeByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractTypeByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  departmentUser?: InputMaybe<UserFilterInput>;
  doesContainAdjustmentByAccused?: InputMaybe<StringOperationFilterInput>;
  doesContainAdjustmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  fileNamesByAccused?: InputMaybe<ListStringOperationFilterInput>;
  fileNamesByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  initialBudgetByAccused?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialBudgetByAccuser?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialTimePeriodByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  initialTimePeriodByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByAccused?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<StringOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<StringOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationStartDateByAccused?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationStartDateByAccuser?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<ContractFilterInput>>;
  otherContractTypeByAccused?: InputMaybe<StringOperationFilterInput>;
  otherContractTypeByAccuser?: InputMaybe<StringOperationFilterInput>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<StringOperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<StringOperationFilterInput>;
  recommendedCoefficientByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  recommendedCoefficientByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  supervisionDepartmentByAccused?: InputMaybe<StringOperationFilterInput>;
  supervisionDepartmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  unauthorizedDelaysByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  unauthorizedDelaysByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
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
  contractNumberByAccused?: InputMaybe<Scalars['String']['input']>;
  contractNumberByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  contractSubjectByAccused?: InputMaybe<Scalars['String']['input']>;
  contractSubjectByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractTypeByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractTypeByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  doesContainAdjustmentByAccused?: InputMaybe<Scalars['String']['input']>;
  doesContainAdjustmentByAccuser?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  fileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initialBudgetByAccused?: InputMaybe<Scalars['Decimal']['input']>;
  initialBudgetByAccuser?: InputMaybe<Scalars['Decimal']['input']>;
  initialTimePeriodByAccused?: InputMaybe<Scalars['Int']['input']>;
  initialTimePeriodByAccuser?: InputMaybe<Scalars['Int']['input']>;
  isExecutiveByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  isExecutiveByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<Scalars['String']['input']>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<Scalars['String']['input']>;
  operationStartDateByAccused?: InputMaybe<Scalars['Date']['input']>;
  operationStartDateByAccuser?: InputMaybe<Scalars['Date']['input']>;
  otherContractTypeByAccused?: InputMaybe<Scalars['String']['input']>;
  otherContractTypeByAccuser?: InputMaybe<Scalars['String']['input']>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<Scalars['String']['input']>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<Scalars['String']['input']>;
  recommendedCoefficientByAccused?: InputMaybe<Scalars['Int']['input']>;
  recommendedCoefficientByAccuser?: InputMaybe<Scalars['Int']['input']>;
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
  contractNumberByAccused?: InputMaybe<SortEnumType>;
  contractNumberByAccuser?: InputMaybe<SortEnumType>;
  contractSubjectByAccused?: InputMaybe<SortEnumType>;
  contractSubjectByAccuser?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  departmentUser?: InputMaybe<UserSortInput>;
  doesContainAdjustmentByAccused?: InputMaybe<SortEnumType>;
  doesContainAdjustmentByAccuser?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  initialBudgetByAccused?: InputMaybe<SortEnumType>;
  initialBudgetByAccuser?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccused?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccuser?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isExecutiveByAccused?: InputMaybe<SortEnumType>;
  isExecutiveByAccuser?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
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

export type Mutation = {
  __typename?: 'Mutation';
  FileGallery_deleteFile: ResponseStatus;
  FileGallery_updateFile: ResponseBaseOfFileGallery;
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
  complaint_updateComplaint: ResponseBaseOfComplaint;
  contract_addContract: ResponseBaseOfContract;
  contract_deleteContract: ResponseBaseOfContract;
  contract_updateContract: ResponseBaseOfContract;
  letter_addLetter: ResponseBaseOfLetter;
  letter_deleteLetter: ResponseBaseOfLetter;
  letter_updateLetter: ResponseBaseOfLetter;
  userRole_addUserToRole: ResponseStatus;
  userRole_removeUserFromRole: ResponseStatus;
  user_changePassword: ResponseStatus;
  user_deleteUser: ResponseStatus;
  user_saveUserCurrentRole: ResponseStatus;
  user_signIn: ResponseBaseOfUserTokenDto;
  user_signUp: ResponseStatus;
  user_updateProfile: ResponseBaseOfUser;
};


export type MutationFileGallery_DeleteFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationFileGallery_UpdateFileArgs = {
  input: FileGalleryInput;
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


export type MutationLetter_AddLetterArgs = {
  input: LetterInput;
};


export type MutationLetter_DeleteLetterArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationLetter_UpdateLetterArgs = {
  input: LetterInput;
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


export type MutationUser_DeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUser_SaveUserCurrentRoleArgs = {
  roleType: RoleType;
};


export type MutationUser_SignInArgs = {
  input: LoginDtoInput;
};


export type MutationUser_SignUpArgs = {
  input: SignUpDtoInput;
};


export type MutationUser_UpdateProfileArgs = {
  input: UserInput;
};

export enum NoteType {
  Type1 = 'TYPE1',
  Type2 = 'TYPE2',
  Type3 = 'TYPE3'
}

export type NoteTypeOperationFilterInput = {
  eq?: InputMaybe<NoteType>;
  in?: InputMaybe<Array<NoteType>>;
  neq?: InputMaybe<NoteType>;
  nin?: InputMaybe<Array<NoteType>>;
};

export type NullableOfRoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<InputMaybe<RoleType>>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<InputMaybe<RoleType>>>;
};

export type Query = {
  __typename?: 'Query';
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
  fileGallery_getFile: ResponseBaseOfFileGallery;
  fileGallery_getFiles: ListResponseBaseOfFileGallery;
  letter_getLetter: ResponseBaseOfLetter;
  letter_getLetters: ListResponseBaseOfLetter;
  userRole_getUserRole: ResponseBaseOfUserRole;
  userRole_getUserRoles: ListResponseBaseOfUserRole;
  user_getCurrentUser: ResponseBaseOfUser;
  user_getUser: ResponseBaseOfUser;
  user_getUserQueryable: ListResponseBaseOfUser;
  user_getUsers: ListResponseBaseOfUser;
  user_isTokenValid: Scalars['Boolean']['output'];
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


export type QueryFileGallery_GetFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryLetter_GetLetterArgs = {
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

export type ResponseBaseOfFileGallery = {
  __typename?: 'ResponseBaseOfFileGallery';
  result?: Maybe<FileGallery>;
  status: ResponseStatus;
};

export type ResponseBaseOfLetter = {
  __typename?: 'ResponseBaseOfLetter';
  result?: Maybe<Letter>;
  status: ResponseStatus;
};

export type ResponseBaseOfUser = {
  __typename?: 'ResponseBaseOfUser';
  result?: Maybe<User>;
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

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  code: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export enum RoleType {
  Expert = 'EXPERT',
  Normal = 'NORMAL',
  SeniorUser = 'SENIOR_USER',
  SuperAdmin = 'SUPER_ADMIN'
}

export type RoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<RoleType>>;
};

export type SignUpDtoInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  confirmPassword: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
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
  birthDate?: Maybe<Scalars['Date']['output']>;
  childUsers?: Maybe<Array<User>>;
  complaintArguments?: Maybe<Array<ComplaintArgument>>;
  complaints?: Maybe<Array<Complaint>>;
  concurrencyStamp?: Maybe<Scalars['String']['output']>;
  contracts?: Maybe<Array<Contract>>;
  createdDate: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  fullName: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
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
  and?: InputMaybe<Array<UserFilterInput>>;
  birthDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  childUsers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  complaintArguments?: InputMaybe<ListFilterInputTypeOfComplaintArgumentFilterInput>;
  complaints?: InputMaybe<ListFilterInputTypeOfComplaintFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contracts?: InputMaybe<ListFilterInputTypeOfContractFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
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
  birthDate?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
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
  Individual = 'INDIVIDUAL',
  Organization = 'ORGANIZATION'
}

export type UserTypeOperationFilterInput = {
  eq?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  neq?: InputMaybe<UserType>;
  nin?: InputMaybe<Array<UserType>>;
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
}>;


export type UpdateComplaintMutation = { __typename?: 'Mutation', complaint_updateComplaint: { __typename: 'ResponseBaseOfComplaint', result?: { __typename: 'Complaint', id: number, assignedUserId?: string | null, complaintState: ComplaintState, arbitrationTermsForms?: Array<{ __typename: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type CreateArbitrationTermsFormMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
  filledBy: RegistrarType;
  firstCondition: Scalars['String']['input'];
  firstConditionFileName: Scalars['String']['input'];
  secondCondition: Scalars['String']['input'];
  secondConditionFileName: Scalars['String']['input'];
  thirdCondition: Scalars['String']['input'];
  thirdConditionFileName: Scalars['String']['input'];
  fourthCondition: Scalars['String']['input'];
  fourthConditionFileName: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
  projectNumber: Scalars['String']['input'];
  hasReadAgreement: Scalars['Boolean']['input'];
}>;


export type CreateArbitrationTermsFormMutation = { __typename?: 'Mutation', arbitrationTermsForm_addArbitrationTermsForm: { __typename?: 'ResponseBaseOfArbitrationTermsForm', result?: { __typename?: 'ArbitrationTermsForm', id: number, complaintId: number, userId: string, filledBy: RegistrarType, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, projectName: string, projectNumber: string, hasReadAgreement: boolean } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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

export type Get_ComplaintsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null } | null }> | null } | null } };

export type GetComplaintQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintQuery = { __typename?: 'Query', complaint_getComplaint: { __typename?: 'ResponseBaseOfComplaint', result?: { __typename?: 'Complaint', userId: string, id: number, contractId: number, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null } | null } };

export type Get_Accused_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accused_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Accuser_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accuser_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetComplaintArgumentsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintArgumentsQuery = { __typename?: 'Query', complaintArgument_getComplaintArguments: { __typename?: 'ListResponseBaseOfComplaintArgument', status?: any | null, result?: { __typename?: 'ComplaintArgumentCollectionSegment', items?: Array<{ __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, approvedAmount?: any | null, complaintId: number, councilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, mailRoomChiefSuggestedAmount?: any | null, mailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string }> | null } | null } };

export type Get_Complaint_AssignedQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_Complaint_AssignedQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Create_ContractMutationVariables = Exact<{
  AccuserRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccusedRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccuserNationality: Scalars['String']['input'];
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
  RecommendedCoefficient?: InputMaybe<Scalars['Int']['input']>;
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
  AccuserNationality: Scalars['String']['input'];
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
  RecommendedCoefficient?: InputMaybe<Scalars['Int']['input']>;
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

export type DeleteContractMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteContractMutation = { __typename?: 'Mutation', contract_deleteContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContractsQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null }> | null } | null } };

export type GetContractQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetContractQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', status?: any | null, result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, accuserNationality?: string | null, accusedNationality?: string | null, accuserRelatedPeopleByAccuser?: string | null, accuserRelatedPeopleByAccused?: string | null, accusedRelatedPeopleByAccuser?: string | null, accusedRelatedPeopleByAccused?: string | null, contractTypeByAccused?: Array<string> | null, contractTypeByAccuser?: Array<string> | null, otherContractTypeByAccused?: string | null, otherContractTypeByAccuser?: string | null, circularNumberByAccused?: string | null, circularNumberByAccuser?: string | null, circularDateByAccused?: any | null, circularDateByAccuser?: any | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null, contractNumberByAccused?: string | null, contractNumberByAccuser?: string | null, contractDateByAccused?: any | null, contractDateByAccuser?: any | null, initialBudgetByAccused?: any | null, initialBudgetByAccuser?: any | null, initialTimePeriodByAccused?: number | null, initialTimePeriodByAccuser?: number | null, priceListOfBasicUnitOfFieldByAccused?: string | null, priceListOfBasicUnitOfFieldByAccuser?: string | null, isSpecialPriceListAttachedToContractByAccused?: string | null, isSpecialPriceListAttachedToContractByAccuser?: string | null, recommendedCoefficientByAccused?: number | null, recommendedCoefficientByAccuser?: number | null, coefficientTypeByAccused?: string | null, coefficientTypeByAccuser?: string | null, assigningTypeByAccused?: string | null, assigningTypeByAccuser?: string | null, doesContainAdjustmentByAccused?: string | null, doesContainAdjustmentByAccuser?: string | null, baseIndexPeriodByAccused?: string | null, baseIndexPeriodByAccuser?: string | null, operationStartDateByAccused?: any | null, operationStartDateByAccuser?: any | null, physicalProgressInArbitrationDateByAccused?: number | null, physicalProgressInArbitrationDateByAccuser?: number | null, financialProgressInArbitrationDateByAccused?: number | null, financialProgressInArbitrationDateByAccuser?: number | null, contractStatusAndDateInArbitrationByAccused?: Array<string> | null, contractStatusAndDateInArbitrationByAccuser?: Array<string> | null, supervisionDepartmentByAccused?: string | null, supervisionDepartmentByAccuser?: string | null, authorizedDelaysByAccused?: number | null, authorizedDelaysByAccuser?: number | null, unauthorizedDelaysByAccused?: number | null, unauthorizedDelaysByAccuser?: number | null, isExecutiveByAccused?: boolean | null, isExecutiveByAccuser?: boolean | null, fileNamesByAccused?: Array<string> | null, fileNamesByAccuser?: Array<string> | null }> | null } | null } };

export type LoginUserMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', user_signIn: { __typename?: 'ResponseBaseOfUserTokenDto', result?: { __typename?: 'UserTokenDto', token?: string | null, expireDate?: any | null, user?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UserSignUpMutationVariables = Exact<{
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  nationalCode: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  userName: Scalars['String']['input'];
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  userType: UserType;
  parentId: Scalars['String']['input'];
}>;


export type UserSignUpMutation = { __typename?: 'Mutation', user_signUp: { __typename: 'ResponseStatus', code: number, value: string } };

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


export type GetUsersQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user_getUser: { __typename?: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null } | null } | null } | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Get_User_QueriableQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_User_QueriableQuery = { __typename?: 'Query', user_getUserQueryable: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null } | null } | null } | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetAllOganizationUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOganizationUsersQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type Get_Organization_Individual_Users_With_RoleQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type Get_Organization_Individual_Users_With_RoleQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type TokenCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenCheckQuery = { __typename?: 'Query', user_isTokenValid: boolean };


export const CreateComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_addComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintState"},"value":{"kind":"EnumValue","value":"WAITING_FOR_ACCUSED_TO_FILL_FORMS"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUserId"}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CreateComplaintMutation, CreateComplaintMutationVariables>;
export const UpdateComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignedUserId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_updateComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assignedUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignedUserId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintState"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUserId"}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<UpdateComplaintMutation, UpdateComplaintMutationVariables>;
export const CreateArbitrationTermsFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArbitrationTermsForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstConditionFileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"secondCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"secondConditionFileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thirdCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thirdConditionFileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fourthCondition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fourthConditionFileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasReadAgreement"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForm_addArbitrationTermsForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"secondCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"secondCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"secondConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"secondConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"thirdCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thirdCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"thirdConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thirdConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fourthCondition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fourthCondition"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fourthConditionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fourthConditionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"projectNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hasReadAgreement"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasReadAgreement"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"projectNumber"}},{"kind":"Field","name":{"kind":"Name","value":"hasReadAgreement"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CreateArbitrationTermsFormMutation, CreateArbitrationTermsFormMutationVariables>;
export const AddArgumentToComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddArgumentToComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_addComplaintArgument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponseFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"approvedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"councilApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertVerdict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"suggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<AddArgumentToComplaintMutation, AddArgumentToComplaintMutationVariables>;
export const UpdateArgumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArgument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrarType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_updateComplaintArgument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedResponseFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accuserResponseFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"approvedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approvedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"complaintId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"councilApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"councilApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertOpinionFileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertOpinionFileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expertVerdict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expertVerdict"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filledBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filledBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"suggestedAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"suggestedAmount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateArgumentMutation, UpdateArgumentMutationVariables>;
export const DeleteArgumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArgument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_deleteComplaintArgument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteArgumentMutation, DeleteArgumentMutationVariables>;
export const DeleteCompainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCompain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_deleteComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCompainMutation, DeleteCompainMutationVariables>;
export const Get_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMPLAINTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_ComplaintsQuery, Get_ComplaintsQueryVariables>;
export const GetComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetComplaintQuery, GetComplaintQueryVariables>;
export const Get_Accused_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ACCUSED_COMPLAINTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contract"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accusedDepartmentUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Accused_ComplaintsQuery, Get_Accused_ComplaintsQueryVariables>;
export const Get_Accuser_ComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ACCUSER_COMPLAINTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contract"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accuserDepartmentUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departmentId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Accuser_ComplaintsQuery, Get_Accuser_ComplaintsQueryVariables>;
export const GetComplaintArgumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComplaintArguments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaintArgument_getComplaintArguments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponse"}},{"kind":"Field","name":{"kind":"Name","value":"accusedResponseFileName"}},{"kind":"Field","name":{"kind":"Name","value":"approvedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"complaintId"}},{"kind":"Field","name":{"kind":"Name","value":"councilApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expertId"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"expertOpinionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"expertVerdict"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"filledBy"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomChiefSuggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mailRoomExpertApprovedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetComplaintArgumentsQuery, GetComplaintArgumentsQueryVariables>;
export const Get_Complaint_AssignedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMPLAINT_ASSIGNED"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complaint_getComplaints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assignedUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"arbitrationTermsForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstCondition"}},{"kind":"Field","name":{"kind":"Name","value":"firstConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"secondCondition"}},{"kind":"Field","name":{"kind":"Name","value":"secondConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"thirdCondition"}},{"kind":"Field","name":{"kind":"Name","value":"thirdConditionFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fourthCondition"}},{"kind":"Field","name":{"kind":"Name","value":"fourthConditionFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complaintState"}},{"kind":"Field","name":{"kind":"Name","value":"complaintCode"}},{"kind":"Field","name":{"kind":"Name","value":"assignedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Complaint_AssignedQuery, Get_Complaint_AssignedQueryVariables>;
export const Create_ContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_CONTRACT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedDepartmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserDepartmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_addContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accuserRelatedPeopleByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedRelatedPeopleByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserNationality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularNumberByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractSubjectByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractNumberByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialBudgetByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialTimePeriodByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recommendedCoefficientByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"coefficientTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assigningTypeByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"doesContainAdjustmentByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"baseIndexPeriodByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationStartDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"supervisionDepartmentByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorizedDelaysByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unauthorizedDelaysByAccuser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedDepartmentUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedDepartmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserDepartmentUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserDepartmentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Create_ContractMutation, Create_ContractMutationVariables>;
export const Update_Contract_By_AccusedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_CONTRACT_BY_ACCUSED"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_updateContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accuserRelatedPeopleByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedRelatedPeopleByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccusedRelatedPeople"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"accusedNationality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AccuserNationality"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractTypeByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularNumberByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"circularDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CircularDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractSubjectByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractSubject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractNumberByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialBudgetByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialBudget"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"initialTimePeriodByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"InitialTimePeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PriceListOfBasicUnitOfField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"IsSpecialPriceListAttachedToContract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recommendedCoefficientByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"RecommendedCoefficient"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"coefficientTypeByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CoefficientType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"assigningTypeByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AssigningType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"doesContainAdjustmentByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"DoesContainAdjustment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"baseIndexPeriodByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"BaseIndexPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"operationStartDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"OperationStartDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PhysicalProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"FinancialProgressInArbitrationDateAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ContractStatusInArbitration"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"supervisionDepartmentByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SupervisionDepartment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorizedDelaysByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"AuthorizedDelaysAccuser"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unauthorizedDelaysByAccused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UnauthorizedDelaysAccuser"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Contract_By_AccusedMutation, Update_Contract_By_AccusedMutationVariables>;
export const DeleteContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_deleteContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteContractMutation, DeleteContractMutationVariables>;
export const GetContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_getContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContractsQuery, GetContractsQueryVariables>;
export const GetContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_getContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accuserDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accusedDepartmentUserId"}},{"kind":"Field","name":{"kind":"Name","value":"accuserNationality"}},{"kind":"Field","name":{"kind":"Name","value":"accusedNationality"}},{"kind":"Field","name":{"kind":"Name","value":"accuserRelatedPeopleByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accuserRelatedPeopleByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"accusedRelatedPeopleByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"accusedRelatedPeopleByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"otherContractTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"otherContractTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"circularNumberByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"circularNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"circularDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"circularDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractSubjectByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractSubjectByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumberByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"initialBudgetByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"initialTimePeriodByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"initialTimePeriodByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"priceListOfBasicUnitOfFieldByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPriceListAttachedToContractByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"recommendedCoefficientByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"recommendedCoefficientByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"coefficientTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"coefficientTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"assigningTypeByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"assigningTypeByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"doesContainAdjustmentByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"doesContainAdjustmentByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"baseIndexPeriodByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"baseIndexPeriodByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"operationStartDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"operationStartDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"physicalProgressInArbitrationDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"financialProgressInArbitrationDateByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"contractStatusAndDateInArbitrationByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"supervisionDepartmentByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"supervisionDepartmentByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedDelaysByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedDelaysByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorizedDelaysByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorizedDelaysByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"isExecutiveByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"isExecutiveByAccuser"}},{"kind":"Field","name":{"kind":"Name","value":"fileNamesByAccused"}},{"kind":"Field","name":{"kind":"Name","value":"fileNamesByAccuser"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetContractQuery, GetContractQueryVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expireDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const UserSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"confirmPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nationalCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<UserSignUpMutation, UserSignUpMutationVariables>;
export const UserDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UserDeleteMutation, UserDeleteMutationVariables>;
export const UserUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nationalCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nationalCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserUpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"confirmPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"currentPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UserUpdatePasswordMutation, UserUpdatePasswordMutationVariables>;
export const AddRoleToUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddRoleToUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRole_addUserToRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleType"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<AddRoleToUserMutation, AddRoleToUserMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const Get_User_QueriableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_QUERIABLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUserQueryable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Get_User_QueriableQuery, Get_User_QueriableQueryVariables>;
export const GetAllOganizationUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllOganizationUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"ORGANIZATION"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAllOganizationUsersQuery, GetAllOganizationUsersQueryVariables>;
export const Get_Organization_Individual_Users_With_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ORGANIZATION_INDIVIDUAL_USERS_WITH_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2000"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"INDIVIDUAL"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"nationalCode"}},{"kind":"Field","name":{"kind":"Name","value":"childUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleType"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Get_Organization_Individual_Users_With_RoleQuery, Get_Organization_Individual_Users_With_RoleQueryVariables>;
export const TokenCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TokenCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_isTokenValid"}}]}}]} as unknown as DocumentNode<TokenCheckQuery, TokenCheckQueryVariables>;
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
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

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
  projectName: Scalars['String']['output'];
  projectNumber: Scalars['String']['output'];
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

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
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
  createdDate: Scalars['DateTime']['output'];
  expertOpinion?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ComplaintArgument = {
  __typename?: 'ComplaintArgument';
  accusedResponse?: Maybe<Scalars['String']['output']>;
  accusedResponseFileName?: Maybe<Scalars['String']['output']>;
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
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  expertOpinion?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ComplaintFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ComplaintInput = {
  arbitrationCost?: InputMaybe<Scalars['Decimal']['input']>;
  assignedUserId?: InputMaybe<Scalars['String']['input']>;
  complaintState?: InputMaybe<ComplaintState>;
  contractId?: InputMaybe<Scalars['Int']['input']>;
  expertOpinion?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ComplaintNote = {
  __typename?: 'ComplaintNote';
  complaintId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  myProperty?: Maybe<Complaint>;
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
  complaintId?: InputMaybe<ComparableInt32OperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  myProperty?: InputMaybe<ComplaintFilterInput>;
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
  complaintId?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  myProperty?: InputMaybe<ComplaintSortInput>;
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
  createdDate?: InputMaybe<SortEnumType>;
  expertOpinion?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export enum ComplaintState {
  AccusedAnsweredArguments = 'ACCUSED_ANSWERED_ARGUMENTS',
  AccusedApprovedArgumentsAnswers = 'ACCUSED_APPROVED_ARGUMENTS_ANSWERS',
  AccusedCompletedArbitrationTerms = 'ACCUSED_COMPLETED_ARBITRATION_TERMS',
  AccusedCompletedContract = 'ACCUSED_COMPLETED_CONTRACT',
  AccusedNotifiedOfOfferorChangingResult = 'ACCUSED_NOTIFIED_OF_OFFEROR_CHANGING_RESULT',
  AccuserAcceptedAccusedAnswers = 'ACCUSER_ACCEPTED_ACCUSED_ANSWERS',
  AccuserAddedAnswer = 'ACCUSER_ADDED_ANSWER',
  AccuserAddedArbitrationTerms = 'ACCUSER_ADDED_ARBITRATION_TERMS',
  AccuserAddedComplaint = 'ACCUSER_ADDED_COMPLAINT',
  AccuserAddedContract = 'ACCUSER_ADDED_CONTRACT',
  AccuserApprovedArguments = 'ACCUSER_APPROVED_ARGUMENTS',
  AccuserNotifiedOfSuccessfulChangingOfTheOfferor = 'ACCUSER_NOTIFIED_OF_SUCCESSFUL_CHANGING_OF_THE_OFFEROR',
  AccuserRegisteredArguments = 'ACCUSER_REGISTERED_ARGUMENTS',
  AccuserViewedArguments = 'ACCUSER_VIEWED_ARGUMENTS',
  AddingToComplaintList = 'ADDING_TO_COMPLAINT_LIST',
  CheckingAndUploadingTheSignedDecree = 'CHECKING_AND_UPLOADING_THE_SIGNED_DECREE',
  CheckingForBeingConstructive = 'CHECKING_FOR_BEING_CONSTRUCTIVE',
  ComplaintDetermined = 'COMPLAINT_DETERMINED',
  ComplaintIsCanceledByAccuser = 'COMPLAINT_IS_CANCELED_BY_ACCUSER',
  DeterminingCaseExpert = 'DETERMINING_CASE_EXPERT',
  DidNotFulfillFirstPayment = 'DID_NOT_FULFILL_FIRST_PAYMENT',
  MailRoomChiefReviewingTheFinalReport = 'MAIL_ROOM_CHIEF_REVIEWING_THE_FINAL_REPORT',
  MailRoomExpertReviewingTheFinalReport = 'MAIL_ROOM_EXPERT_REVIEWING_THE_FINAL_REPORT',
  NewOfferorNotified = 'NEW_OFFEROR_NOTIFIED',
  NotAcceptedForBeingConstructive = 'NOT_ACCEPTED_FOR_BEING_CONSTRUCTIVE',
  RedeterminingCaseExpert = 'REDETERMINING_CASE_EXPERT',
  ResultNotifiedAbilityToViewScannedPhysicalResult = 'RESULT_NOTIFIED_ABILITY_TO_VIEW_SCANNED_PHYSICAL_RESULT',
  ReviewingExpertOpinionOnOfferorChanging = 'REVIEWING_EXPERT_OPINION_ON_OFFEROR_CHANGING',
  UploadingDocumentsAndReviewingComplaint = 'UPLOADING_DOCUMENTS_AND_REVIEWING_COMPLAINT',
  WaitingForAccusedToFillForms = 'WAITING_FOR_ACCUSED_TO_FILL_FORMS',
  WaitingForAccusedToSignDecree = 'WAITING_FOR_ACCUSED_TO_SIGN_DECREE',
  WaitingForAccuserAndAccusedToSignDecree = 'WAITING_FOR_ACCUSER_AND_ACCUSED_TO_SIGN_DECREE',
  WaitingForAccuserToSignDecree = 'WAITING_FOR_ACCUSER_TO_SIGN_DECREE',
  WaitingForCaseExpertRegistry = 'WAITING_FOR_CASE_EXPERT_REGISTRY',
  WaitingForCouncilResult = 'WAITING_FOR_COUNCIL_RESULT',
  WaitingForExpertsCouncilPayment = 'WAITING_FOR_EXPERTS_COUNCIL_PAYMENT',
  WaitingForFinalReportRegistration = 'WAITING_FOR_FINAL_REPORT_REGISTRATION',
  WaitingForFinalResultUpload = 'WAITING_FOR_FINAL_RESULT_UPLOAD',
  WaitingForFirstPayment = 'WAITING_FOR_FIRST_PAYMENT',
  WaitingForLetterResponseFromMinistersCouncil = 'WAITING_FOR_LETTER_RESPONSE_FROM_MINISTERS_COUNCIL',
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
  contractNumberByAccused?: Maybe<Scalars['String']['output']>;
  contractNumberByAccuser?: Maybe<Scalars['String']['output']>;
  contractStatusAndDateInArbitrationByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractStatusAndDateInArbitrationByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  contractSubjectByAccused?: Maybe<Scalars['String']['output']>;
  contractSubjectByAccuser?: Maybe<Scalars['String']['output']>;
  contractTypeByAccused?: Maybe<Array<Scalars['String']['output']>>;
  contractTypeByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  createdDate: Scalars['DateTime']['output'];
  departmentUser?: Maybe<User>;
  doesContainAdjustmentByAccused?: Maybe<Scalars['String']['output']>;
  doesContainAdjustmentByAccuser?: Maybe<Scalars['String']['output']>;
  fileNamesByAccused?: Maybe<Array<Scalars['String']['output']>>;
  fileNamesByAccuser?: Maybe<Array<Scalars['String']['output']>>;
  financialProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  financialProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  initialBudgetByAccused?: Maybe<Scalars['Decimal']['output']>;
  initialBudgetByAccuser?: Maybe<Scalars['Decimal']['output']>;
  initialTimePeriodByAccused?: Maybe<Scalars['Int']['output']>;
  initialTimePeriodByAccuser?: Maybe<Scalars['Int']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  isExecutiveByAccused?: Maybe<Scalars['Boolean']['output']>;
  isExecutiveByAccuser?: Maybe<Scalars['Boolean']['output']>;
  isSpecialPriceListAttachedToContractByAccused?: Maybe<Scalars['String']['output']>;
  isSpecialPriceListAttachedToContractByAccuser?: Maybe<Scalars['String']['output']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']['output']>;
  operationStartDateByAccused?: Maybe<Scalars['Date']['output']>;
  operationStartDateByAccuser?: Maybe<Scalars['Date']['output']>;
  otherContractTypeByAccused?: Maybe<Scalars['String']['output']>;
  otherContractTypeByAccuser?: Maybe<Scalars['String']['output']>;
  physicalProgressInArbitrationDateByAccused?: Maybe<Scalars['Int']['output']>;
  physicalProgressInArbitrationDateByAccuser?: Maybe<Scalars['Int']['output']>;
  priceListOfBasicUnitOfFieldByAccused?: Maybe<Scalars['String']['output']>;
  priceListOfBasicUnitOfFieldByAccuser?: Maybe<Scalars['String']['output']>;
  recommendedCoefficientByAccused?: Maybe<Scalars['Int']['output']>;
  recommendedCoefficientByAccuser?: Maybe<Scalars['Int']['output']>;
  supervisionDepartmentByAccused?: Maybe<Scalars['String']['output']>;
  supervisionDepartmentByAccuser?: Maybe<Scalars['String']['output']>;
  unauthorizedDelaysByAccused?: Maybe<Scalars['Int']['output']>;
  unauthorizedDelaysByAccuser?: Maybe<Scalars['Int']['output']>;
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
  contractNumberByAccused?: InputMaybe<StringOperationFilterInput>;
  contractNumberByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  contractSubjectByAccused?: InputMaybe<StringOperationFilterInput>;
  contractSubjectByAccuser?: InputMaybe<StringOperationFilterInput>;
  contractTypeByAccused?: InputMaybe<ListStringOperationFilterInput>;
  contractTypeByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  departmentUser?: InputMaybe<UserFilterInput>;
  doesContainAdjustmentByAccused?: InputMaybe<StringOperationFilterInput>;
  doesContainAdjustmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  fileNamesByAccused?: InputMaybe<ListStringOperationFilterInput>;
  fileNamesByAccuser?: InputMaybe<ListStringOperationFilterInput>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  initialBudgetByAccused?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialBudgetByAccuser?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  initialTimePeriodByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  initialTimePeriodByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByAccused?: InputMaybe<BooleanOperationFilterInput>;
  isExecutiveByAccuser?: InputMaybe<BooleanOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<StringOperationFilterInput>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<StringOperationFilterInput>;
  lastModifiedDate?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  operationStartDateByAccused?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  operationStartDateByAccuser?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  or?: InputMaybe<Array<ContractFilterInput>>;
  otherContractTypeByAccused?: InputMaybe<StringOperationFilterInput>;
  otherContractTypeByAccuser?: InputMaybe<StringOperationFilterInput>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<StringOperationFilterInput>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<StringOperationFilterInput>;
  recommendedCoefficientByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  recommendedCoefficientByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  supervisionDepartmentByAccused?: InputMaybe<StringOperationFilterInput>;
  supervisionDepartmentByAccuser?: InputMaybe<StringOperationFilterInput>;
  unauthorizedDelaysByAccused?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  unauthorizedDelaysByAccuser?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
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
  contractNumberByAccused?: InputMaybe<Scalars['String']['input']>;
  contractNumberByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractStatusAndDateInArbitrationByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractStatusAndDateInArbitrationByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  contractSubjectByAccused?: InputMaybe<Scalars['String']['input']>;
  contractSubjectByAccuser?: InputMaybe<Scalars['String']['input']>;
  contractTypeByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  contractTypeByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  doesContainAdjustmentByAccused?: InputMaybe<Scalars['String']['input']>;
  doesContainAdjustmentByAccuser?: InputMaybe<Scalars['String']['input']>;
  fileNamesByAccused?: InputMaybe<Array<Scalars['String']['input']>>;
  fileNamesByAccuser?: InputMaybe<Array<Scalars['String']['input']>>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initialBudgetByAccused?: InputMaybe<Scalars['Decimal']['input']>;
  initialBudgetByAccuser?: InputMaybe<Scalars['Decimal']['input']>;
  initialTimePeriodByAccused?: InputMaybe<Scalars['Int']['input']>;
  initialTimePeriodByAccuser?: InputMaybe<Scalars['Int']['input']>;
  isExecutiveByAccused?: InputMaybe<Scalars['Boolean']['input']>;
  isExecutiveByAccuser?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<Scalars['String']['input']>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<Scalars['String']['input']>;
  operationStartDateByAccused?: InputMaybe<Scalars['Date']['input']>;
  operationStartDateByAccuser?: InputMaybe<Scalars['Date']['input']>;
  otherContractTypeByAccused?: InputMaybe<Scalars['String']['input']>;
  otherContractTypeByAccuser?: InputMaybe<Scalars['String']['input']>;
  physicalProgressInArbitrationDateByAccused?: InputMaybe<Scalars['Int']['input']>;
  physicalProgressInArbitrationDateByAccuser?: InputMaybe<Scalars['Int']['input']>;
  priceListOfBasicUnitOfFieldByAccused?: InputMaybe<Scalars['String']['input']>;
  priceListOfBasicUnitOfFieldByAccuser?: InputMaybe<Scalars['String']['input']>;
  recommendedCoefficientByAccused?: InputMaybe<Scalars['Int']['input']>;
  recommendedCoefficientByAccuser?: InputMaybe<Scalars['Int']['input']>;
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
  contractNumberByAccused?: InputMaybe<SortEnumType>;
  contractNumberByAccuser?: InputMaybe<SortEnumType>;
  contractSubjectByAccused?: InputMaybe<SortEnumType>;
  contractSubjectByAccuser?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  departmentUser?: InputMaybe<UserSortInput>;
  doesContainAdjustmentByAccused?: InputMaybe<SortEnumType>;
  doesContainAdjustmentByAccuser?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccused?: InputMaybe<SortEnumType>;
  financialProgressInArbitrationDateByAccuser?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  initialBudgetByAccused?: InputMaybe<SortEnumType>;
  initialBudgetByAccuser?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccused?: InputMaybe<SortEnumType>;
  initialTimePeriodByAccuser?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isExecutiveByAccused?: InputMaybe<SortEnumType>;
  isExecutiveByAccuser?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccused?: InputMaybe<SortEnumType>;
  isSpecialPriceListAttachedToContractByAccuser?: InputMaybe<SortEnumType>;
  lastModifiedDate?: InputMaybe<SortEnumType>;
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

export type Mutation = {
  __typename?: 'Mutation';
  FileGallery_deleteFile: ResponseStatus;
  FileGallery_updateFile: ResponseBaseOfFileGallery;
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
  complaint_updateComplaint: ResponseBaseOfComplaint;
  contract_addContract: ResponseBaseOfContract;
  contract_deleteContract: ResponseBaseOfContract;
  contract_updateContract: ResponseBaseOfContract;
  letter_addLetter: ResponseBaseOfLetter;
  letter_deleteLetter: ResponseBaseOfLetter;
  letter_updateLetter: ResponseBaseOfLetter;
  userRole_addUserToRole: ResponseStatus;
  userRole_removeUserFromRole: ResponseStatus;
  user_changePassword: ResponseStatus;
  user_deleteUser: ResponseStatus;
  user_saveUserCurrentRole: ResponseStatus;
  user_signIn: ResponseBaseOfUserTokenDto;
  user_signUp: ResponseStatus;
  user_updateProfile: ResponseBaseOfUser;
};


export type MutationFileGallery_DeleteFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationFileGallery_UpdateFileArgs = {
  input: FileGalleryInput;
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


export type MutationLetter_AddLetterArgs = {
  input: LetterInput;
};


export type MutationLetter_DeleteLetterArgs = {
  entityId: Scalars['Int']['input'];
};


export type MutationLetter_UpdateLetterArgs = {
  input: LetterInput;
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


export type MutationUser_DeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUser_SaveUserCurrentRoleArgs = {
  roleType: RoleType;
};


export type MutationUser_SignInArgs = {
  input: LoginDtoInput;
};


export type MutationUser_SignUpArgs = {
  input: SignUpDtoInput;
};


export type MutationUser_UpdateProfileArgs = {
  input: UserInput;
};

export enum NoteType {
  Type1 = 'TYPE1',
  Type2 = 'TYPE2',
  Type3 = 'TYPE3'
}

export type NoteTypeOperationFilterInput = {
  eq?: InputMaybe<NoteType>;
  in?: InputMaybe<Array<NoteType>>;
  neq?: InputMaybe<NoteType>;
  nin?: InputMaybe<Array<NoteType>>;
};

export type NullableOfRoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<InputMaybe<RoleType>>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<InputMaybe<RoleType>>>;
};

export type Query = {
  __typename?: 'Query';
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
  fileGallery_getFile: ResponseBaseOfFileGallery;
  fileGallery_getFiles: ListResponseBaseOfFileGallery;
  letter_getLetter: ResponseBaseOfLetter;
  letter_getLetters: ListResponseBaseOfLetter;
  userRole_getUserRole: ResponseBaseOfUserRole;
  userRole_getUserRoles: ListResponseBaseOfUserRole;
  user_getCurrentUser: ResponseBaseOfUser;
  user_getUser: ResponseBaseOfUser;
  user_getUserQueryable: ListResponseBaseOfUser;
  user_getUsers: ListResponseBaseOfUser;
  user_isTokenValid: Scalars['Boolean']['output'];
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


export type QueryFileGallery_GetFileArgs = {
  entityId: Scalars['Int']['input'];
};


export type QueryLetter_GetLetterArgs = {
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

export type ResponseBaseOfFileGallery = {
  __typename?: 'ResponseBaseOfFileGallery';
  result?: Maybe<FileGallery>;
  status: ResponseStatus;
};

export type ResponseBaseOfLetter = {
  __typename?: 'ResponseBaseOfLetter';
  result?: Maybe<Letter>;
  status: ResponseStatus;
};

export type ResponseBaseOfUser = {
  __typename?: 'ResponseBaseOfUser';
  result?: Maybe<User>;
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

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  code: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export enum RoleType {
  Expert = 'EXPERT',
  Normal = 'NORMAL',
  SeniorUser = 'SENIOR_USER',
  SuperAdmin = 'SUPER_ADMIN'
}

export type RoleTypeOperationFilterInput = {
  eq?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  neq?: InputMaybe<RoleType>;
  nin?: InputMaybe<Array<RoleType>>;
};

export type SignUpDtoInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  confirmPassword: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
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
  birthDate?: Maybe<Scalars['Date']['output']>;
  childUsers?: Maybe<Array<User>>;
  complaintArguments?: Maybe<Array<ComplaintArgument>>;
  complaints?: Maybe<Array<Complaint>>;
  concurrencyStamp?: Maybe<Scalars['String']['output']>;
  contracts?: Maybe<Array<Contract>>;
  createdDate: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  fullName: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
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
  and?: InputMaybe<Array<UserFilterInput>>;
  birthDate?: InputMaybe<ComparableNullableOfDateOnlyOperationFilterInput>;
  childUsers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  complaintArguments?: InputMaybe<ListFilterInputTypeOfComplaintArgumentFilterInput>;
  complaints?: InputMaybe<ListFilterInputTypeOfComplaintFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contracts?: InputMaybe<ListFilterInputTypeOfContractFilterInput>;
  createdDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
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
  birthDate?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  createdDate?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
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
  Individual = 'INDIVIDUAL',
  Organization = 'ORGANIZATION'
}

export type UserTypeOperationFilterInput = {
  eq?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  neq?: InputMaybe<UserType>;
  nin?: InputMaybe<Array<UserType>>;
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
}>;


export type UpdateComplaintMutation = { __typename?: 'Mutation', complaint_updateComplaint: { __typename: 'ResponseBaseOfComplaint', result?: { __typename: 'Complaint', id: number, assignedUserId?: string | null, complaintState: ComplaintState, arbitrationTermsForms?: Array<{ __typename: 'ArbitrationTermsForm', userId: string, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null } | null, status: { __typename: 'ResponseStatus', code: number, value: string } } };

export type CreateArbitrationTermsFormMutationVariables = Exact<{
  complaintId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
  filledBy: RegistrarType;
  firstCondition: Scalars['String']['input'];
  firstConditionFileName: Scalars['String']['input'];
  secondCondition: Scalars['String']['input'];
  secondConditionFileName: Scalars['String']['input'];
  thirdCondition: Scalars['String']['input'];
  thirdConditionFileName: Scalars['String']['input'];
  fourthCondition: Scalars['String']['input'];
  fourthConditionFileName: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
  projectNumber: Scalars['String']['input'];
  hasReadAgreement: Scalars['Boolean']['input'];
}>;


export type CreateArbitrationTermsFormMutation = { __typename?: 'Mutation', arbitrationTermsForm_addArbitrationTermsForm: { __typename?: 'ResponseBaseOfArbitrationTermsForm', result?: { __typename?: 'ArbitrationTermsForm', id: number, complaintId: number, userId: string, filledBy: RegistrarType, firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null, projectName: string, projectNumber: string, hasReadAgreement: boolean } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

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

export type Get_ComplaintsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null } | null }> | null } | null } };

export type GetComplaintQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintQuery = { __typename?: 'Query', complaint_getComplaint: { __typename?: 'ResponseBaseOfComplaint', result?: { __typename?: 'Complaint', userId: string, id: number, contractId: number, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null } | null } | null } };

export type Get_Accused_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accused_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Get_Accuser_ComplaintsQueryVariables = Exact<{
  departmentId: Scalars['String']['input'];
}>;


export type Get_Accuser_ComplaintsQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type GetComplaintArgumentsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetComplaintArgumentsQuery = { __typename?: 'Query', complaintArgument_getComplaintArguments: { __typename?: 'ListResponseBaseOfComplaintArgument', status?: any | null, result?: { __typename?: 'ComplaintArgumentCollectionSegment', items?: Array<{ __typename?: 'ComplaintArgument', id: number, accusedResponse?: string | null, accusedResponseFileName?: string | null, approvedAmount?: any | null, complaintId: number, councilApprovedAmount?: any | null, description?: string | null, expertId?: string | null, expertOpinion?: string | null, expertOpinionFileName?: string | null, expertVerdict?: string | null, fileName?: string | null, filledBy: RegistrarType, mailRoomChiefSuggestedAmount?: any | null, mailRoomExpertApprovedAmount?: any | null, suggestedAmount: any, summary?: string | null, userId: string }> | null } | null } };

export type Get_Complaint_AssignedQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_Complaint_AssignedQuery = { __typename?: 'Query', complaint_getComplaints: { __typename?: 'ListResponseBaseOfComplaint', result?: { __typename?: 'ComplaintCollectionSegment', items?: Array<{ __typename?: 'Complaint', userId: string, id: number, contractId: number, createdDate: any, complaintState: ComplaintState, complaintCode?: string | null, arbitrationTermsForms?: Array<{ __typename?: 'ArbitrationTermsForm', firstCondition: string, firstConditionFileName?: string | null, secondCondition: string, secondConditionFileName?: string | null, thirdCondition: string, thirdConditionFileName?: string | null, fourthCondition: string, fourthConditionFileName?: string | null }> | null, assignedUser?: { __typename?: 'User', userName?: string | null, fullName: string, phoneNumber?: string | null } | null, contract?: { __typename?: 'Contract', contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null, initialBudgetByAccuser?: any | null, accusedDepartmentUserId?: string | null, accuserDepartmentUserId?: string | null } | null }> | null } | null } };

export type Create_ContractMutationVariables = Exact<{
  AccuserRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccusedRelatedPeople?: InputMaybe<Scalars['String']['input']>;
  AccuserNationality: Scalars['String']['input'];
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
  RecommendedCoefficient?: InputMaybe<Scalars['Int']['input']>;
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
  AccuserNationality: Scalars['String']['input'];
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
  RecommendedCoefficient?: InputMaybe<Scalars['Int']['input']>;
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

export type DeleteContractMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteContractMutation = { __typename?: 'Mutation', contract_deleteContract: { __typename?: 'ResponseBaseOfContract', result?: { __typename?: 'Contract', id: number } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type GetContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContractsQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, contractNumberByAccuser?: string | null, contractDateByAccuser?: any | null }> | null } | null } };

export type GetContractQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetContractQuery = { __typename?: 'Query', contract_getContracts: { __typename?: 'ListResponseBaseOfContract', status?: any | null, result?: { __typename?: 'ContractCollectionSegment', items?: Array<{ __typename?: 'Contract', id: number, accuserDepartmentUserId?: string | null, accusedDepartmentUserId?: string | null, accuserNationality?: string | null, accusedNationality?: string | null, accuserRelatedPeopleByAccuser?: string | null, accuserRelatedPeopleByAccused?: string | null, accusedRelatedPeopleByAccuser?: string | null, accusedRelatedPeopleByAccused?: string | null, contractTypeByAccused?: Array<string> | null, contractTypeByAccuser?: Array<string> | null, otherContractTypeByAccused?: string | null, otherContractTypeByAccuser?: string | null, circularNumberByAccused?: string | null, circularNumberByAccuser?: string | null, circularDateByAccused?: any | null, circularDateByAccuser?: any | null, contractSubjectByAccused?: string | null, contractSubjectByAccuser?: string | null, contractNumberByAccused?: string | null, contractNumberByAccuser?: string | null, contractDateByAccused?: any | null, contractDateByAccuser?: any | null, initialBudgetByAccused?: any | null, initialBudgetByAccuser?: any | null, initialTimePeriodByAccused?: number | null, initialTimePeriodByAccuser?: number | null, priceListOfBasicUnitOfFieldByAccused?: string | null, priceListOfBasicUnitOfFieldByAccuser?: string | null, isSpecialPriceListAttachedToContractByAccused?: string | null, isSpecialPriceListAttachedToContractByAccuser?: string | null, recommendedCoefficientByAccused?: number | null, recommendedCoefficientByAccuser?: number | null, coefficientTypeByAccused?: string | null, coefficientTypeByAccuser?: string | null, assigningTypeByAccused?: string | null, assigningTypeByAccuser?: string | null, doesContainAdjustmentByAccused?: string | null, doesContainAdjustmentByAccuser?: string | null, baseIndexPeriodByAccused?: string | null, baseIndexPeriodByAccuser?: string | null, operationStartDateByAccused?: any | null, operationStartDateByAccuser?: any | null, physicalProgressInArbitrationDateByAccused?: number | null, physicalProgressInArbitrationDateByAccuser?: number | null, financialProgressInArbitrationDateByAccused?: number | null, financialProgressInArbitrationDateByAccuser?: number | null, contractStatusAndDateInArbitrationByAccused?: Array<string> | null, contractStatusAndDateInArbitrationByAccuser?: Array<string> | null, supervisionDepartmentByAccused?: string | null, supervisionDepartmentByAccuser?: string | null, authorizedDelaysByAccused?: number | null, authorizedDelaysByAccuser?: number | null, unauthorizedDelaysByAccused?: number | null, unauthorizedDelaysByAccuser?: number | null, isExecutiveByAccused?: boolean | null, isExecutiveByAccuser?: boolean | null, fileNamesByAccused?: Array<string> | null, fileNamesByAccuser?: Array<string> | null }> | null } | null } };

export type LoginUserMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', user_signIn: { __typename?: 'ResponseBaseOfUserTokenDto', result?: { __typename?: 'UserTokenDto', token?: string | null, expireDate?: any | null, user?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, userRoles?: Array<{ __typename?: 'UserRole', roleType: RoleType, id: number }> | null } | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type UserSignUpMutationVariables = Exact<{
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  nationalCode: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  userName: Scalars['String']['input'];
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  userType: UserType;
  parentId: Scalars['String']['input'];
}>;


export type UserSignUpMutation = { __typename?: 'Mutation', user_signUp: { __typename: 'ResponseStatus', code: number, value: string } };

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


export type GetUsersQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user_getUser: { __typename?: 'ResponseBaseOfUser', result?: { __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null } | null } | null } | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null } | null, status: { __typename?: 'ResponseStatus', code: number, value: string } } };

export type Get_User_QueriableQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Get_User_QueriableQuery = { __typename?: 'Query', user_getUserQueryable: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, userType: UserType, parentId?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null, parent?: { __typename?: 'User', fullName: string, id?: string | null } | null } | null } | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type GetAllOganizationUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOganizationUsersQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type Get_Organization_Individual_Users_With_RoleQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type Get_Organization_Individual_Users_With_RoleQuery = { __typename?: 'Query', user_getUsers: { __typename?: 'ListResponseBaseOfUser', status?: any | null, result?: { __typename?: 'UserCollectionSegment', items?: Array<{ __typename?: 'User', id?: string | null, userName?: string | null, email?: string | null, fullName: string, phoneNumber?: string | null, nationalCode?: string | null, childUsers?: Array<{ __typename?: 'User', parentId?: string | null, fullName: string, id?: string | null }> | null, userRoles?: Array<{ __typename?: 'UserRole', id: number, roleType: RoleType, userId: string, isDeleted: boolean, createdDate: any }> | null }> | null } | null } };

export type TokenCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenCheckQuery = { __typename?: 'Query', user_isTokenValid: boolean };


export const CreateComplaintDocument = gql`
    mutation CreateComplaint($contractId: Int!, $userId: String!) {
  complaint_addComplaint(
    input: {contractId: $contractId, userId: $userId, complaintState: WAITING_FOR_ACCUSED_TO_FILL_FORMS}
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
    mutation UpdateComplaint($id: Int!, $assignedUserId: String, $contractId: Int, $userId: String, $complaintState: ComplaintState) {
  complaint_updateComplaint(
    input: {id: $id, assignedUserId: $assignedUserId, contractId: $contractId, userId: $userId, complaintState: $complaintState}
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
export const CreateArbitrationTermsFormDocument = gql`
    mutation CreateArbitrationTermsForm($complaintId: Int!, $userId: String!, $filledBy: RegistrarType!, $firstCondition: String!, $firstConditionFileName: String!, $secondCondition: String!, $secondConditionFileName: String!, $thirdCondition: String!, $thirdConditionFileName: String!, $fourthCondition: String!, $fourthConditionFileName: String!, $projectName: String!, $projectNumber: String!, $hasReadAgreement: Boolean!) {
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
    mutation UpdateArgument($id: Int!, $accuserResponse: String, $accuserResponseFileName: String, $approvedAmount: Decimal, $complaintId: Int, $councilApprovedAmount: Decimal, $description: String, $expertId: String, $expertOpinion: String, $expertOpinionFileName: String, $expertVerdict: String, $fileName: String, $filledBy: RegistrarType, $mailRoomChiefSuggestedAmount: Decimal, $mailRoomExpertApprovedAmount: Decimal, $suggestedAmount: Decimal, $summary: String, $userId: String) {
  complaintArgument_updateComplaintArgument(
    input: {accusedResponse: $accuserResponse, accusedResponseFileName: $accuserResponseFileName, approvedAmount: $approvedAmount, complaintId: $complaintId, councilApprovedAmount: $councilApprovedAmount, description: $description, expertId: $expertId, expertOpinion: $expertOpinion, expertOpinionFileName: $expertOpinionFileName, expertVerdict: $expertVerdict, fileName: $fileName, filledBy: $filledBy, mailRoomChiefSuggestedAmount: $mailRoomChiefSuggestedAmount, mailRoomExpertApprovedAmount: $mailRoomExpertApprovedAmount, suggestedAmount: $suggestedAmount, summary: $summary, userId: $userId, id: $id}
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
export const Get_ComplaintsDocument = gql`
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
    result(where: {contract: {accusedDepartmentUserId: {eq: $departmentId}}}) {
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
    result(where: {contract: {accuserDepartmentUserId: {eq: $departmentId}}}) {
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
export const Create_ContractDocument = gql`
    mutation CREATE_CONTRACT($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String!, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Int, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Int, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: [String!], $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $AccusedDepartmentId: String, $AccuserDepartmentId: String) {
  contract_addContract(
    input: {accuserRelatedPeopleByAccused: $AccuserRelatedPeople, accusedRelatedPeopleByAccused: $AccusedRelatedPeople, accuserNationality: $AccuserNationality, contractTypeByAccuser: $ContractType, circularNumberByAccuser: $CircularNumber, circularDateByAccuser: $CircularDate, contractSubjectByAccuser: $ContractSubject, contractNumberByAccuser: $ContractNumber, contractDateByAccuser: $ContractDate, initialBudgetByAccuser: $InitialBudget, initialTimePeriodByAccuser: $InitialTimePeriod, priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField, isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract, recommendedCoefficientByAccuser: $RecommendedCoefficient, coefficientTypeByAccuser: $CoefficientType, assigningTypeByAccuser: $AssigningType, doesContainAdjustmentByAccuser: $DoesContainAdjustment, baseIndexPeriodByAccuser: $BaseIndexPeriod, operationStartDateByAccuser: $OperationStartDateAccuser, physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser, financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser, contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration, supervisionDepartmentByAccuser: $SupervisionDepartment, authorizedDelaysByAccuser: $AuthorizedDelaysAccuser, unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser, accusedDepartmentUserId: $AccusedDepartmentId, accuserDepartmentUserId: $AccuserDepartmentId}
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
    mutation UPDATE_CONTRACT_BY_ACCUSED($AccuserRelatedPeople: String, $AccusedRelatedPeople: String, $AccuserNationality: String!, $ContractType: [String!], $CircularNumber: String, $CircularDate: Date, $ContractSubject: String, $ContractNumber: String, $ContractDate: Date, $InitialBudget: Decimal, $InitialTimePeriod: Int, $PriceListOfBasicUnitOfField: String, $IsSpecialPriceListAttachedToContract: String, $RecommendedCoefficient: Int, $CoefficientType: String, $AssigningType: String, $DoesContainAdjustment: String, $BaseIndexPeriod: String, $OperationStartDateAccuser: Date, $PhysicalProgressInArbitrationDateAccuser: Int, $FinancialProgressInArbitrationDateAccuser: Int, $ContractStatusInArbitration: [String!], $SupervisionDepartment: String, $AuthorizedDelaysAccuser: Int, $UnauthorizedDelaysAccuser: Int, $id: Int!) {
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
export const UserSignUpDocument = gql`
    mutation UserSignUp($confirmPassword: String!, $email: String!, $fullName: String!, $nationalCode: String!, $password: String!, $phoneNumber: String!, $userName: String!, $birthDate: Date, $userType: UserType!, $parentId: String!) {
  user_signUp(
    input: {userType: $userType, birthDate: $birthDate, confirmPassword: $confirmPassword, email: $email, fullName: $fullName, nationalCode: $nationalCode, password: $password, phoneNumber: $phoneNumber, userName: $userName, parentId: $parentId}
  ) {
    code
    value
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
    result(take: 2000, where: {userType: {eq: ORGANIZATION}}) {
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