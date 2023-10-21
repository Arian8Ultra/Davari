import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetUsers {
    user_getUsers {
      result(take: 2000) {
        items {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          childUsers{
            parentId
            fullName
            id
          }
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

export const TOKEN_CHECK = gql`
  query TokenCheck {
    user_isTokenValid
  }
`;


export type UserRole = {
  id: string;
  roleType: "SUPER_ADMIN" | "SENIOR_USER" | "EXPERT" | "NORMAL";
  userId: string;
  isDeleted: boolean;
  createdDate: string;
};
