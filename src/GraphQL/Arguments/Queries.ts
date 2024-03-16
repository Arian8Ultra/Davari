import { gql } from "@apollo/client";

export const GetNonFeasibleArguments = gql`
  query GetNonFeasibleArguments(
    $filer: ComplaintNonFeasibleArgumentFilterInput
    $order: [ComplaintNonFeasibleArgumentSortInput!]
  ) {
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
