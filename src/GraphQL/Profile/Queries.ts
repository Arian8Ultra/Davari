import { gql } from "@apollo/client";

export const GetUserProile = gql`
  query GetUserProile($nationalCode: String!) {
    companyProfile_getCompanyProfiles {
      status
      result (where: {nationalCode: {eq: $nationalCode}}){
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
