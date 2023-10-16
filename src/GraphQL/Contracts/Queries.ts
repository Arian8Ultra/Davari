import { gql } from "@apollo/client";

export const GET_CONTRACTS = gql`
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

export const GET_CONTRACT = gql`
  query GetContract($id: Int!) {
    contract_getContracts {
      result(where: { id: { eq: $id } }) {
        items {
          id
          accuserDepartmentId
          accusedDepartmentId
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
          department {
            title
            id
          }
        }
      }
      status
    }
  }
`;
