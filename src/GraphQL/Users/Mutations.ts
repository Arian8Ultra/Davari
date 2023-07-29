import { gql } from "@apollo/client";

// UserLogin
export const UserLogin = gql`
  mutation LoginUser($userName: String!, $password: String!) {
    user_signIn(input: { password: $password, userName: $userName }) {
      result {
        user {
          id
          departmentId
          userName
          email
          firstName
          lastName
          phoneNumber
          nationalCode
          personnelCode
        }
        token
        expireDate
      }
      status {
        code
        value
      }
    }
  }
`;
export type UserLoginInput = {
  userName: string;
  password: string;
};



// UserSignUp
export const UserSignUp = gql`
  mutation UserSignUp(
    $confirmPassword: String!
    $departmentId: Int!
    $email: String!
    $firstName: String!
    $lastName: String!
    $nationalCode: String!
    $personnelCode: String!
    $password: String!
    $phoneNumber: String!
    $userName: String!
  ) {
    user_signUp(
      input: {
        confirmPassword: $confirmPassword
        departmentId: $departmentId
        email: $email
        firstName: $firstName
        lastName: $lastName
        nationalCode: $nationalCode
        personnelCode: $personnelCode
        password: $password
        phoneNumber: $phoneNumber
        userName: $userName
      }
    ) {
      code
      value
      __typename
    }
  }
`;
export type UserSignUpInput = {
  confirmPassword: string;
  departmentId: number;
  email: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  personnelCode: string;
  password: string;
  phoneNumber: string;
  userName: string;
};




// UserDelete
export const UserDelete = gql`
  mutation UserDelete($id: String!) {
    user_deleteUser(userId: $id) {
      code
      value
    }
  }
`;
export type UserDeleteInput = {
  id: string;
};



// UserUpdate
export const UserUpdate = gql`
  mutation UserUpdate(
    $firstName: String!
    $lastName: String!
    $nationalCode: String!
    $userName: String!
  ) {
    user_updateProfile(
      input: {
        firstName: $firstName
        lastName: $lastName
        nationalCode: $nationalCode
        userName: $userName
      }
    ) {
      result {
        id
        departmentId
        userName
        email
        firstName
        lastName
        phoneNumber
        nationalCode
        personnelCode
      }
      status {
        code
        value
      }
    }
  }
`;
export type UserUpdateInput = {
  firstName: string;
  lastName: string;
  nationalCode: string;
  userName: string;
};



// UserUpdatePassword
export const UserUpdatePassword = gql`
  mutation UserUpdatePassword(
    $oldPassword: String!
    $newPassword: String!
    $confirmPassword: String!
    $id: String!
  ) {
    user_changePassword(
      input: {
        confirmPassword: $confirmPassword
        currentPassword: $oldPassword
        newPassword: $newPassword
        userId: $id
      }
    ) {
      code
      value
    }
  }
`;
export type UserUpdatePasswordInput = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  id: string;
};
