import { gql } from "@apollo/client";

export const setCouncilList = gql`
  mutation setCouncilListMutation($ids: [Int!]!) {
    complaint_setInCouncilList(entityIds: $ids) {
      result {
        key
        value
      }
      status {
        code
        value
      }
    }
  }
`;
