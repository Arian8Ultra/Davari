import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetUsers {
    user_getUsers {
      result {
        items {
          id
          departmentId
          userName
          email
          firstName
          lastName
          phoneNumber
          nationalCode
          personnelCode
          userRoles {
            id
            roleType
            userId
            isDeleted
            createdDate
          }
        }
      }
      status
    }
  }
`;

export type UserRole = {
  id: string;
  roleType: string;
  userId: string;
  isDeleted: boolean;
  createdDate: string;
};

