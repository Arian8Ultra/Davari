import { gql } from "@apollo/client";
import { GraphQLEnumType } from "graphql";

// UserLogin
export const UserLogin = gql`
  mutation LoginUser($userName: String!, $password: String!) {
    user_signIn(input: { password: $password, userName: $userName }) {
      result {
        user {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          parentId
          userRoles {
            roleType
            id
          }
          userType
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

export const ForgetPasswordMutation = gql`
  mutation ForgetPasswordMutation($input: ForgotPasswordDtoInput!) {
    user_forgotPassword(input: $input) {
      code
      value
    }
  }
`;

export const OTPMutation = gql`
  mutation UserSignInOTPMutation($input: LoginOTPDtoInput!) {
    user_signInOTP(input: $input) {
      result {
        user {
          id
          userName
          email
          fullName
          phoneNumber
          nationalCode
          parentId
          userRoles {
            roleType
            id
          }
          userType
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

export const SentOTP = gql`
  mutation SentOTPMutation($phoneNumber: String!) {
    user_oneTimePassword(input: { phoneNumber: $phoneNumber }) {
      code
      value
    }
  }
`;

// UserSignUp
export const UserSignUp = gql`
  mutation UserSignUp(
    $confirmPassword: String!
    $email: String
    $fullName: String!
    $nationalCode: String
    $password: String!
    $phoneNumber: String
    $userName: String!
    $birthDate: Date
    $userType: UserType!
    $parentId: String
  ) {
    user_signUp(
      input: {
        userType: $userType
        birthDate: $birthDate
        confirmPassword: $confirmPassword
        email: $email
        fullName: $fullName
        nationalCode: $nationalCode
        password: $password
        phoneNumber: $phoneNumber
        userName: $userName
        parentId: $parentId
      }
    ) {
      result {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
        parentId
        userRoles {
          roleType
          id
        }
        userType
      }
      status {
        code
        value
      }
      __typename
    }
  }
`;

export const SendCallToMeetingSMS = gql`
  mutation SendCallToMeetingSMS(
    $input: SendInviteToMeetingSMSDtoInput!
  ) {
    sms_sendInviteToMeetingSMS(input: $input) {
      code
      value
    }
  }
`;

export const GenarateDateOfBirth = gql`
  mutation GenarateDateOfBirth($input: String!) {
    test_convertToGregorian(input: $input)
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
    $fullName: String!
    $nationalCode: String!
    $userName: String
    $birthDate: Date!
    $userType: UserType!
  ) {
    user_updateProfile(
      input: {
        fullName: $fullName
        nationalCode: $nationalCode
        userName: $userName
        birthDate: $birthDate
        userType: $userType
      }
    ) {
      result {
        id
        userName
        email
        fullName
        phoneNumber
        nationalCode
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

export const ADD_USER_TO_ROLE = gql`
  mutation AddRoleToUser($userId: String!, $roleType: RoleType!) {
    userRole_addUserToRole(roleType: $roleType, userId: $userId) {
      code
      value
      __typename
    }
  }
`;

export const RoleType = new GraphQLEnumType({
  name: "RoleType",
  values: {
    SENIOR_USER: { value: "SENIOR_USER" },
    NORMAL: { value: "NORMAL" },
    EDITOR: { value: "EDITOR" },
    EXPERT: { value: "EXPERT" },
    SUPERADMIN: { value: "SUPERADMIN" },
  },
});
