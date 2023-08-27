import { gql } from "@apollo/client";

export const CREATE_FORM_OBJ = gql`
  mutation formObject_createFormObject(
    $color: String!
    $formObjectType: FormObjectType
    $isRequired: Boolean!
    $label: String!
    $name: String!
    $stickyText: String!
    $unit: String!
  ) {
    formObject_addFormObject(
      input: {
        color: $color
        formObjectType: $formObjectType
        isRequired: $isRequired
        label: $label
        name: $name
        stickyText: $stickyText
        unit: $unit
      }
    ) {
      result {
        name
        id
        label
      }
    }
  }
`;

export const ADD_FORM_OBJ_TO_COMPLAINT_FORM = gql`
  mutation formObjectForm_addFormObjectForm(
    $complaintFormId: Int!
    $formObjectId: Int
    $gridColumn: Int
    $gridColumnStart: Int
    $gridRow: Int
  ) {
    formObjectComplaintForm_addFormObjectComplaintForm(
      input: {
        complaintFormId: $complaintFormId
        formObjectId: $formObjectId
        gridColumn: $gridColumn
        gridColumnStart: $gridColumnStart
        gridRow: $gridRow
      }
    ) {
      result {
        complaintFormId
        gridColumn
        gridRow
        gridColumnStart
        formObjectId
      }
    }
  }
`;
