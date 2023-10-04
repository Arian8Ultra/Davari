import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetUsers {
    user_getUsers {
      result(take: 2000) {
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

export const TOKEN_CHECK = gql`
  query TokenCheck {
    user_isTokenValid
  }
`;

export const GET_DEPARTMENTS_USERS = gql`
  query GetDepartmentsUsers($departmentId: Int!) {
    user_getUsers {
      result(
        where: { departmentId: { eq: $departmentId } }
        take: 2000
      ) {
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
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

export type UserRole = {
  id: string;
  roleType: "SUPER_ADMIN" | "SENIOR_USER" | "EXPERT" | "NORMAL";
  userId: string;
  isDeleted: boolean;
  createdDate: string;
};
