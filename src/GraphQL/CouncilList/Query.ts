import { gql } from "@apollo/client";

export const setCouncilList = gql`
  mutation setCouncilListMutation($ids: [Int!]!) {
    complaint_setInCouncilList(entityIds: $ids) {
      result {
        generateResult {
          key
          value
        }
        generatedFileNames
      }
      status {
        code
        value
      }
    }
  }
`;
