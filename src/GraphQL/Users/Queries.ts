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
          userType
          parentId
          childUsers {
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



export const GET_ALL_USERS_WITH_PARENT_ID = gql`
query GetUsersWithParentID ($id:String!){
  user_getUsers{
    result(where: {and:[{parentId: {eq: $id}},{userRoles: {none: {roleType: {eq: SENIOR_USER}}}}]}){
      items {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          userType
          parentId
          childUsers {
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
}`
export const GET_USER = gql`
  query GetUser($id: String!) {
    user_getUser(entityId: $id) {
      result {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        userType
        parentId
        parent {
          fullName
          id
          parent {
            fullName
            id
            parent {
              fullName
              id
              # parent {
              #   fullName
              #   id
              # }
            }
          }
        }
        childUsers {
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
      status {
        code
        value
      }
    }
  }
`;


export const GET_USER_QUERIABLE = gql`
  query GET_USER_QUERIABLE($id: String!) {
    user_getUserQueryable(entityId: $id) {
      result {
        items {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          userType
          parentId
          parent {
            fullName
            id
            parent {
              fullName
              id
              parent {
                fullName
                id
                # parent {
                #   fullName
                #   id
                # }
              }
            }
          }
          childUsers {
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
export const GET_ALL_ORGANIZATION_USERS = gql`
  query getAllOganizationUsers {
    user_getUsers {
      result(
        take: 2000
        where: {
          or : [
            {userType: {eq: ORGANIZATION}},
            {userType: {eq: CONTRACTOR_OR_CONSULTANT}}
          ]
        }
      ) {
        items {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          childUsers {
            parentId
            fullName
            id
            userType
          }
          userType
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
export const GET_ORGANIZATION_INDIVIDUAL_USERS_WITH_ROLE = gql`
  query GET_ORGANIZATION_INDIVIDUAL_USERS_WITH_ROLE(
    $organizationId: String!
  ) # $roleType: RoleType!
  {
    user_getUsers {
      result(
        take: 2000
        where: {
          userType: { eq: INDIVIDUAL }
          # and: {
          #   userRoles: { some: { roleType: { eq: $roleType } } }
          and: { parentId: { eq: $organizationId } }
          # }
        }
      ) {
        items {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          childUsers {
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
