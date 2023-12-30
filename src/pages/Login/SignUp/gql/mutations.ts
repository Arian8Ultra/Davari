import { gql } from "@apollo/client";

export const user_getUserInfo = gql`
  mutation user_getUserInfo(
    $dateOfBirth: String!
    $nationalCode: String!
  ) {
    user_getUserInfo(
      input: {
        dateOfBirth: $dateOfBirth
        nationalCode: $nationalCode
      }
    ) {
      result {
        firstName
        lastName
        fatherName
        isAlive
        isAlive
        gender
      }
      status {
        code
        value
      }
    }
  }
`;

export const validatePhoneNumber = gql`
  mutation validatePhoneNumber(
    $phoneNumber: String!
    $nationalCode: String!
  ) {
    user_validatePhoneNumber(
      input: {
        nationalCode: $nationalCode
        phoneNumber: $phoneNumber
      }
    ) {
      code
      value
    }
  }
`;

export const sendCode = gql`
  mutation sendCode($phoneNumber: String!) {
    user_sendVerificationCode(phoneNumber: $phoneNumber) {
      code
      value
    }
  }
`;

export const confirmPhoneNumeber = gql`
  mutation confirmPhoneNumber(
    $phoneNumber: String!
    $verificationCode: String!
  ) {
    user_confirmPhoneNumber(
      input: {
        phoneNumber: $phoneNumber
        verificationCode: $verificationCode
      }
    ) {
      code
      value
    }
  }
`;

export const generatePassword = gql`
  mutation test_generatePassword {
    test_generatePassword
  }
`;

