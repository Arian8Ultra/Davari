import { gql } from "@apollo/client";

export const CREATE_COMPLAINT_FORM = gql`
  mutation complaintForm_createComplaintForm(
    $description: String!
    $title: String!
  ) {
    complaintForm_addComplaintForm(
      input: { description: $description, title: $title }
    ) {
      result {
        title
        description
        formObjectForms {
          formId
          id
        }
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_COMPLAINT_FORM = gql`
  mutation complaintForm_deleteComplaintForm($id: Int!) {
    complaintForm_deleteComplaintForm(entityId: $id) {
      result {
        id
        title
      }
      status {
        code
        value
      }
    }
  }
`;

export const CREATE_COMPLAINT_RESPONSE_FORM = gql`
  mutation complaintResponseForm_addComplaintResponseForm(
    $description: String!
    $title: String!
  ) {
    complaintResponseForm_addComplaintResponseForm(
      input: { description: $description, title: $title }
    ) {
      result {
        title
        description
        id
        formObjectForms {
          formId
          id
        }
      }
    }
  }
`;


export const DELETE_COMPLAINT_RESPONSE_FORM = gql`
  mutation complaintResponseForm_deleteComplaintResponseForm($id: Int!) {
    complaintResponseForm_deleteComplaintResponseForm(entityId: $id) {
      result {
        id
        title
      }
      status {
        code
        value
      }
    }
  }
`;