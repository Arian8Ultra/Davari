import { gql } from "@apollo/client";

export const CREATE_FORM_TITLE = gql`
  mutation formTitle_createFormTitle(
    $content: String!
    $complaintFormId: Int
    $complaintResponseFormId: Int
    $value: String
    $row: Int
  ) {
    formTitle_addFormTitle(
      input: {
        content: $content
        complaintFormId: $complaintFormId
        complaintResponseFormId: $complaintResponseFormId
        value: $value
        row: $row
      }
    ) {
      result {
        content
        value
        id
      }
    }
  }
`;

export const UPDATE_FORM_TITLE = gql`
  mutation formTitle_updateFormTitle(
    $content: String!
    $complaintFormId: Int
    $complaintResponseFormId: Int
    $value: String
    $row: Int
    $id: Int!
  ) {
    formTitle_updateFormTitle(
      input: {
        content: $content
        complaintFormId: $complaintFormId
        complaintResponseFormId: $complaintResponseFormId
        row: $row
        value: $value
        id: $id
      }
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_FORM_TITLE = gql`
  mutation formTitle_deleteFormTitle($id: Int!) {
    formTitle_deleteFormTitle(entityId: $id) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type FormTitleMutation = {
  content: string;
  value?: string;
  complaintFormId?: number;
  complaintResponseFormId?: number;
  row?: number;
};
