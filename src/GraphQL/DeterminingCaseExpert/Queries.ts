import { gql } from "@apollo/client";

export const GetChildrenOfParent = gql`
  query GetChildrenOfParent($parentType: HandlingType!) {
    user_getChildrenOfParent(parentType: $parentType) {
      result {
        fullName
        parentId
        id
      }
      status {
        code
        value
      }
    }
  }
`;
