import { gql } from "@apollo/client";

export const CREATE_CONTRACT = gql`
  mutation CREATE_CONTRACT(
    $AccuserRelatedPeople: String
    $AccusedRelatedPeople: String
    $AccuserNationality: String
    $ContractType: [String!]
    $CircularNumber: String
    $CircularDate: Date
    $ContractSubject: String
    $ContractNumber: String
    $ContractDate: Date
    $InitialBudget: Decimal
    $InitialTimePeriod: Float
    # $ExecutionProvinceByAccused:String
    # $ExecutionProvinceByAccuser:String
    $PriceListOfBasicUnitOfField: String
    $IsSpecialPriceListAttachedToContract: String
    $RecommendedCoefficient: Float
    $CoefficientType: String
    $AssigningType: String
    $DoesContainAdjustment: String
    $BaseIndexPeriod: String
    $OperationStartDateAccuser: Date
    $PhysicalProgressInArbitrationDateAccuser: Int
    $FinancialProgressInArbitrationDateAccuser: Int
    $ContractStatusInArbitration: String!
    $SupervisionDepartment: String
    $AuthorizedDelaysAccuser: Int
    $UnauthorizedDelaysAccuser: Int
    $AccusedDepartmentId: String
    $AccuserDepartmentId: String
    $Currency: String
    $fileNamesByAccuser: [String!]
    $generalConditionsFileName: String
    $ContractGeneralType: ContractGeneralType
    $agreementFileName: String
    $privateTermsFileName: String
    $otherAttachmentFileName: [String!]
  ) {
    contract_addContract(
      input: {
        accuserRelatedPeopleByAccuser: $AccuserRelatedPeople
        accusedRelatedPeopleByAccuser: $AccusedRelatedPeople
        accuserNationality: $AccuserNationality
        contractTypeByAccuser: $ContractType
        circularNumberByAccuser: $CircularNumber
        circularDateByAccuser: $CircularDate
        contractSubjectByAccuser: $ContractSubject
        contractNumberByAccuser: $ContractNumber
        contractDateByAccuser: $ContractDate
        initialBudgetByAccuser: $InitialBudget
        initialTimePeriodByAccuser: $InitialTimePeriod
        priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField
        isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract
        recommendedCoefficientByAccuser: $RecommendedCoefficient
        coefficientTypeByAccuser: $CoefficientType
        assigningTypeByAccuser: $AssigningType
        doesContainAdjustmentByAccuser: $DoesContainAdjustment
        baseIndexPeriodByAccuser: $BaseIndexPeriod
        operationStartDateByAccuser: $OperationStartDateAccuser
        physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser
        financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser
        contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration
        supervisionDepartmentByAccuser: $SupervisionDepartment
        authorizedDelaysByAccuser: $AuthorizedDelaysAccuser
        unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser
        accusedDepartmentUserId: $AccusedDepartmentId
        accuserDepartmentUserId: $AccuserDepartmentId
        currencyByAccuser: $Currency
        fileNamesByAccuser: $fileNamesByAccuser
        generalConditionsFileNameByAccuser: $generalConditionsFileName
        contractGeneralTypeByAccuser:$ContractGeneralType
        agreementFileNameByAccuser: $agreementFileName
        privateTermsFileNameByAccuser: $privateTermsFileName
        otherAttachmentFileNamesByAccuser: $otherAttachmentFileName
        # executionProvinceByAccuser:$ExecutionProvinceByAccuser
        # executionProvinceByAccused:$ExecutionProvinceByAccused
      }
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
export const UPDATE_CONTRACT_BY_ACCUSED = gql`
  mutation UPDATE_CONTRACT_BY_ACCUSED(
    $AccuserRelatedPeople: String
    $AccusedRelatedPeople: String
    $AccuserNationality: String
    $ContractType: [String!]
    $CircularNumber: String
    $CircularDate: Date
    $ContractSubject: String
    $ContractNumber: String
    $ContractDate: Date
    $InitialBudget: Decimal
    $InitialTimePeriod: Float
    $PriceListOfBasicUnitOfField: String
    $IsSpecialPriceListAttachedToContract: String
    $RecommendedCoefficient: Float
    $CoefficientType: String
    $AssigningType: String
    $DoesContainAdjustment: String
    $BaseIndexPeriod: String
    $OperationStartDateAccuser: Date
    $PhysicalProgressInArbitrationDateAccuser: Int
    $FinancialProgressInArbitrationDateAccuser: Int
    $ContractStatusInArbitration: String!
    $SupervisionDepartment: String
    $AuthorizedDelaysAccuser: Int
    $UnauthorizedDelaysAccuser: Int
    $id: Int!
    $Currency: String
    $fileNamesByAccused: [String!]
    $generalConditionsFileName: String
    $ContractGeneralType: ContractGeneralType
    $agreementFileName: String
    $privateTermsFileName: String
    $otherAttachmentFileName: [String!]
  ) {
    contract_updateContract(
      input: {
        id: $id
        accuserRelatedPeopleByAccused: $AccuserRelatedPeople
        accusedRelatedPeopleByAccused: $AccusedRelatedPeople
        accusedNationality: $AccuserNationality
        contractTypeByAccused: $ContractType
        circularNumberByAccused: $CircularNumber
        circularDateByAccused: $CircularDate
        contractSubjectByAccused: $ContractSubject
        contractNumberByAccused: $ContractNumber
        contractDateByAccused: $ContractDate
        initialBudgetByAccused: $InitialBudget
        initialTimePeriodByAccused: $InitialTimePeriod
        priceListOfBasicUnitOfFieldByAccused: $PriceListOfBasicUnitOfField
        isSpecialPriceListAttachedToContractByAccused: $IsSpecialPriceListAttachedToContract
        recommendedCoefficientByAccused: $RecommendedCoefficient
        coefficientTypeByAccused: $CoefficientType
        assigningTypeByAccused: $AssigningType
        doesContainAdjustmentByAccused: $DoesContainAdjustment
        baseIndexPeriodByAccused: $BaseIndexPeriod
        operationStartDateByAccused: $OperationStartDateAccuser
        physicalProgressInArbitrationDateByAccused: $PhysicalProgressInArbitrationDateAccuser
        financialProgressInArbitrationDateByAccused: $FinancialProgressInArbitrationDateAccuser
        contractStatusAndDateInArbitrationByAccused: $ContractStatusInArbitration
        supervisionDepartmentByAccused: $SupervisionDepartment
        authorizedDelaysByAccused: $AuthorizedDelaysAccuser
        unauthorizedDelaysByAccused: $UnauthorizedDelaysAccuser
        currencyByAccused: $Currency
        fileNamesByAccused: $fileNamesByAccused
        generalConditionsFileNameByAccused: $generalConditionsFileName
        contractGeneralTypeByAccused:$ContractGeneralType
        agreementFileNameByAccused: $agreementFileName
        privateTermsFileNameByAccused: $privateTermsFileName
        otherAttachmentFileNamesByAccused: $otherAttachmentFileName
      }
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

export const UPDATE_CONTRACT_BY_ACCUSER = gql`
  mutation UPDATE_CONTRACT_BY_ACCUSER(
    $AccuserRelatedPeople: String
    $AccusedRelatedPeople: String
    $AccuserNationality: String
    $ContractType: [String!]
    $CircularNumber: String
    $CircularDate: Date
    $ContractSubject: String
    $ContractNumber: String
    $ContractDate: Date
    $InitialBudget: Decimal
    $InitialTimePeriod: Float
    $PriceListOfBasicUnitOfField: String
    $IsSpecialPriceListAttachedToContract: String
    $RecommendedCoefficient: Float
    $CoefficientType: String
    $AssigningType: String
    $DoesContainAdjustment: String
    $BaseIndexPeriod: String
    $OperationStartDateAccuser: Date
    $PhysicalProgressInArbitrationDateAccuser: Int
    $FinancialProgressInArbitrationDateAccuser: Int
    $ContractStatusInArbitration: String!
    $SupervisionDepartment: String
    $AuthorizedDelaysAccuser: Int
    $UnauthorizedDelaysAccuser: Int
    $id: Int!
    $AccusedDepartmentId: String
    $AccuserDepartmentId: String
    $Currency: String
    $fileNamesByAccuser: [String!]
    $generalConditionsFileName: String
    $ContractGeneralType: ContractGeneralType
    $agreementFileName: String
    $privateTermsFileName: String
    $otherAttachmentFileName: [String!]
  ) {
    contract_updateContract(
      input: {
        id: $id
        accuserRelatedPeopleByAccuser: $AccuserRelatedPeople
        accusedRelatedPeopleByAccuser: $AccusedRelatedPeople
        accuserNationality: $AccuserNationality
        contractTypeByAccuser: $ContractType
        circularNumberByAccuser: $CircularNumber
        circularDateByAccuser: $CircularDate
        contractSubjectByAccuser: $ContractSubject
        contractNumberByAccuser: $ContractNumber
        contractDateByAccuser: $ContractDate
        initialBudgetByAccuser: $InitialBudget
        initialTimePeriodByAccuser: $InitialTimePeriod
        priceListOfBasicUnitOfFieldByAccuser: $PriceListOfBasicUnitOfField
        isSpecialPriceListAttachedToContractByAccuser: $IsSpecialPriceListAttachedToContract
        recommendedCoefficientByAccuser: $RecommendedCoefficient
        coefficientTypeByAccuser: $CoefficientType
        assigningTypeByAccuser: $AssigningType
        doesContainAdjustmentByAccuser: $DoesContainAdjustment
        baseIndexPeriodByAccuser: $BaseIndexPeriod
        operationStartDateByAccuser: $OperationStartDateAccuser
        physicalProgressInArbitrationDateByAccuser: $PhysicalProgressInArbitrationDateAccuser
        financialProgressInArbitrationDateByAccuser: $FinancialProgressInArbitrationDateAccuser
        contractStatusAndDateInArbitrationByAccuser: $ContractStatusInArbitration
        supervisionDepartmentByAccuser: $SupervisionDepartment
        authorizedDelaysByAccuser: $AuthorizedDelaysAccuser
        unauthorizedDelaysByAccuser: $UnauthorizedDelaysAccuser
        accusedDepartmentUserId: $AccusedDepartmentId
        accuserDepartmentUserId: $AccuserDepartmentId
        currencyByAccuser: $Currency
        fileNamesByAccuser: $fileNamesByAccuser
        generalConditionsFileNameByAccuser: $generalConditionsFileName
        contractGeneralTypeByAccuser:$ContractGeneralType
        agreementFileNameByAccuser: $agreementFileName
        privateTermsFileNameByAccuser: $privateTermsFileName
        otherAttachmentFileNamesByAccuser: $otherAttachmentFileName
      }
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

export const UPDATE_CONTRACT_BY_EXPERT = gql`
  mutation UPDATE_CONTRACT_BY_EXPERT(
    $isExecutive: Boolean!
    $id: Int!
  ) {
    contract_updateContract(
      input: { id: $id, isExecutiveByExpert: $isExecutive }
    ) {
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

export const DELETE_CONTRACT = gql`
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

export type Contract = {
  AccuserDepartmentId: number;
  AccusedDepartmentId: number;
  AccuserNationality?: string;
  AccusedNationality?: string;
  AccuserRelatedPeopleByAccuser?: string[];
  AccuserRelatedPeopleByAccused?: string[];
  AccusedRelatedPeopleByAccuser?: string[];
  AccusedRelatedPeopleByAccused?: string[];
  ContractTypeByAccused?: string[];
  ContractTypeByAccuser?: string[];
  OtherContractTypeByAccused?: string;
  OtherContractTypeByAccuser?: string;
  CircularNumberByAccused?: string;
  CircularNumberByAccuser?: string;
  CircularDateByAccused?: Date;
  CircularDateByAccuser?: Date;
  ContractSubjectByAccused?: string;
  ContractSubjectByAccuser?: string;
  ContractNumberByAccused?: string;
  ContractNumberByAccuser?: string;
  ContractDateByAccused?: Date;
  ContractDateByAccuser?: Date;
  InitialBudgetByAccused?: number;
  InitialBudgetByAccuser?: number;
  InitialTimePeriodByAccused?: number;
  InitialTimePeriodByAccuser?: number;
  PriceListOfBasicUnitOfFieldByAccused?: string[];
  PriceListOfBasicUnitOfFieldByAccuser?: string[];
  IsSpecialPriceListAttachedToContractByAccused?: string;
  IsSpecialPriceListAttachedToContractByAccuser?: string;
  RecommendedCoefficientByAccused?: number;
  RecommendedCoefficientByAccuser?: number;
  CoefficientTypeByAccused?: string;
  CoefficientTypeByAccuser?: string;
  AssigningTypeByAccused?: string;
  AssigningTypeByAccuser?: string;
  DoesContainAdjustmentByAccused?: string;
  DoesContainAdjustmentByAccuser?: string;
  BaseIndexPeriodByAccused?: string;
  BaseIndexPeriodByAccuser?: string;
  OperationStartDateByAccused?: Date;
  OperationStartDateByAccuser?: Date;
  PhysicalProgressInArbitrationDateByAccused?: number;
  PhysicalProgressInArbitrationDateByAccuser?: number;
  FinancialProgressInArbitrationDateByAccused?: number;
  FinancialProgressInArbitrationDateByAccuser?: number;
  ContractStatusAndDateInArbitrationByAccused?: string[];
  ContractStatusAndDateInArbitrationByAccuser?: string[];
  SupervisionDepartmentByAccused?: string;
  SupervisionDepartmentByAccuser?: string;
  AuthorizedDelaysByAccused?: number;
  AuthorizedDelaysByAccuser?: number;
  UnauthorizedDelaysByAccused?: number;
  UnauthorizedDelaysByAccuser?: number;
  IsExecutiveByAccused?: boolean;
  IsExecutiveByAccuser?: boolean;
  isExecutiveByExpret?: boolean;
  FileNamesByAccused?: string[];
  FileNamesByAccuser?: string[];
};

export type ContractSmall = {
  accuserDepartmentUserId: string;
  accusedDepartmentUserId: string;
  accuserNationality?: string;
  accusedNationality?: string;
  accuserRelatedPeopleByAccuser?: string;
  accuserRelatedPeopleByAccused?: string;
  accusedRelatedPeopleByAccuser?: string;
  accusedRelatedPeopleByAccused?: string;
  contractTypeByAccused?: string[];
  contractTypeByAccuser?: string[];
  otherContractTypeByAccused?: string;
  otherContractTypeByAccuser?: string;
  circularNumberByAccused?: string;
  circularNumberByAccuser?: string;
  circularDateByAccused?: Date;
  circularDateByAccuser?: Date;
  contractSubjectByAccused?: string;
  contractSubjectByAccuser?: string;
  contractNumberByAccused?: string;
  contractNumberByAccuser?: string;
  contractDateByAccused?: Date;
  contractDateByAccuser?: Date;
  initialBudgetByAccused?: number;
  initialBudgetByAccuser?: number;
  initialTimePeriodByAccused?: number;
  initialTimePeriodByAccuser?: number;
  priceListOfBasicUnitOfFieldByAccused?: string;
  priceListOfBasicUnitOfFieldByAccuser?: string;
  isSpecialPriceListAttachedToContractByAccused?: string;
  isSpecialPriceListAttachedToContractByAccuser?: string;
  recommendedCoefficientByAccused?: number;
  recommendedCoefficientByAccuser?: number;
  coefficientTypeByAccused?: string;
  coefficientTypeByAccuser?: string;
  assigningTypeByAccused?: string;
  assigningTypeByAccuser?: string;
  doesContainAdjustmentByAccused?: string;
  doesContainAdjustmentByAccuser?: string;
  baseIndexPeriodByAccused?: string;
  baseIndexPeriodByAccuser?: string;
  operationStartDateByAccused?: Date;
  operationStartDateByAccuser?: Date;
  physicalProgressInArbitrationDateByAccused?: number;
  physicalProgressInArbitrationDateByAccuser?: number;
  financialProgressInArbitrationDateByAccused?: number;
  financialProgressInArbitrationDateByAccuser?: number;
  contractStatusAndDateInArbitrationByAccused?: string;
  contractStatusAndDateInArbitrationByAccuser?: string;
  supervisionDepartmentByAccused?: string;
  supervisionDepartmentByAccuser?: string;
  authorizedDelaysByAccused?: number;
  authorizedDelaysByAccuser?: number;
  unauthorizedDelaysByAccused?: number;
  unauthorizedDelaysByAccuser?: number;
  isExecutiveByAccused?: boolean;
  isExecutiveByAccuser?: boolean;
  fileNamesByAccused?: string[];
  fileNamesByAccuser?: string[];
};
