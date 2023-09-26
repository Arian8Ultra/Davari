import { gql } from "@apollo/client";

export const GET_CONTRACTS = gql`
  query GetContracts {
    contract_getContracts {
      result {
        items {
          id
          contractNumber
          contractDate
        }
      }
    }
  }
`;

export const GET_CONTRACT = gql`
  query GetContract($id: Int!) {
    contract_getContract(entityId:$id) {
      result {
        id
        contractNumber
        contractDate
        accuserDepartmentId
        initialBudget
        initialTimePeriod
        priceListOfBasicUnitOfField
        isSpecialPriceListAttachedToContract
        recommendedCoefficient
        coefficientType
        assigningType
        doesContainAdjustment
        baseIndexPeriod
        accusedDepartmentId
        operationStartDateAccuser
        operationStartDateAccused
        physicalProgressInArbitrationDateAccuser
        physicalProgressInArbitrationDateAccused
        financialProgressInArbitrationDateAccused
        financialProgressInArbitrationDateAccuser
        contractStatusInArbitration
        contractStatusInArbitrationDate
        supervisionDepartment
        accuserNationality
        authorizedDelaysAccuser
        authorizedDelaysAccused
        unauthorizedDelaysAccuser
        unauthorizedDelaysAccused
        isExecutive
        department{
          title
          id
        }
      }
      status{
        code
        value
      }
    }
  }
`;
