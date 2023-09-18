import { gql } from "@apollo/client";

export const CREATE_CONTRACT = gql`
  mutation CreateComplaint(
    $RelatedPeople: [String!]
    $AccuserNationality: String!
    $AccusedNationality: String!
    $ContractType: [String!]
    $CircularNumber: String!
    $CircularDate: Date!
    $ContractSubject: String!
    $ContractNumber: String!
    $ContractDate: Date!
    $InitialBudget: Decimal!
    $InitialTimePeriod: Int!
    $PriceListOfBasicUnitOfField: [String!]
    $IsSpecialPriceListAttachedToContract: Boolean!
    $RecommendedCoefficient: Int!
    $CoefficientType: String!
    $AssigningType: String!
    $DoesContainAdjustment: Boolean!
    $BaseIndexPeriod: Int!
    $OperationStartDateAccuser: Date!
    $OperationStartDateAccused: Date!
    $PhysicalProgressInArbitrationDateAccuser: Int!
    $PhysicalProgressInArbitrationDateAccused: Int!
    $FinancialProgressInArbitrationDateAccuser: Int!
    $FinancialProgressInArbitrationDateAccused: Int!
    $ContractStatusInArbitration: String!
    $ContractStatusInArbitrationDate: Date!
    $SupervisionDepartment: String!
    $AuthorizedDelaysAccuser: Int!
    $AuthorizedDelaysAccused: Int!
    $UnauthorizedDelaysAccuser: Int!
    $UnauthorizedDelaysAccused: Int!
  ) {
    contract_addContract(
      input: {
        relatedPeople: $RelatedPeople
        accuserNationality: $AccuserNationality
        accusedNationality: $AccusedNationality
        contractType: $ContractType
        circularNumber: $CircularNumber
        circularDate: $CircularDate
        contractSubject: $ContractSubject
        contractNumber: $ContractNumber
        contractDate: $ContractDate
        initialBudget: $InitialBudget
        initialTimePeriod: $InitialTimePeriod
        priceListOfBasicUnitOfField: $PriceListOfBasicUnitOfField
        isSpecialPriceListAttachedToContract: $IsSpecialPriceListAttachedToContract
        recommendedCoefficient: $RecommendedCoefficient
        coefficientType: $CoefficientType
        assigningType: $AssigningType
        doesContainAdjustment: $DoesContainAdjustment
        baseIndexPeriod: $BaseIndexPeriod
        operationStartDateAccuser: $OperationStartDateAccuser
        operationStartDateAccused: $OperationStartDateAccused
        physicalProgressInArbitrationDateAccuser: $PhysicalProgressInArbitrationDateAccuser
        physicalProgressInArbitrationDateAccused: $PhysicalProgressInArbitrationDateAccused
        financialProgressInArbitrationDateAccuser: $FinancialProgressInArbitrationDateAccuser
        financialProgressInArbitrationDateAccused: $FinancialProgressInArbitrationDateAccused
        contractStatusInArbitration: $ContractStatusInArbitration
        contractStatusInArbitrationDate: $ContractStatusInArbitrationDate
        supervisionDepartment: $SupervisionDepartment
        authorizedDelaysAccuser: $AuthorizedDelaysAccuser
        authorizedDelaysAccused: $AuthorizedDelaysAccused
        unauthorizedDelaysAccuser: $UnauthorizedDelaysAccuser
        unauthorizedDelaysAccused: $UnauthorizedDelaysAccused
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
