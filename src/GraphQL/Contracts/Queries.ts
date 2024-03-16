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
        }
      }
      status
    }
  }
`;

export const GetPublicContracts = gql`
  query GetPublicContracts(
    $filter: PublicContractFilterInput
    $order: [PublicContractSortInput!]
    $skip: Int
    $take: Int
  ) {
    publicContract_getPublicContracts {
      result(
        where: $filter
        order: $order
        skip: $skip
        take: $take
      ) {
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
