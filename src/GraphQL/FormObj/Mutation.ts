import { gql } from "@apollo/client";

export const CREATE_FORM_OBJ = gql`
  mutation formObject_createFormObject(
    $color: String
    $formObjectType: FormObjectType
    $isRequired: Boolean!
    $label: String
    $name: String
    $stickyText: String!
    $unit: String!
    $menuItems: [String!]
    $parentId: Int
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
        menuItems:$menuItems
        parentId: $parentId
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
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_FORM_OBJ_FROM_COMPLAINT_FORM = gql`
  mutation formObjectForm_deleteFormObjectForm($id: Int!) {
    formObjectComplaintForm_deleteFormObjectComplaintForm(
      entityId: $id
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

export const ADD_FORM_OBJ_TO_COMPLAINT_RESPONSE_FORM = gql`
  mutation formObjectComplaintResponseForm_addFormObjectComplaintResponseForm(
    $complaintResponseFormId: Int!
    $formObjectId: Int
    $gridColumn: Int
    $gridColumnStart: Int
    $gridRow: Int
  ) {
    formObjectComplaintResponseForm_addFormObjectComplaintResponseForm(
      input: {
        complaintResponseFormId: $complaintResponseFormId
        formObjectId: $formObjectId
        gridColumn: $gridColumn
        gridColumnStart: $gridColumnStart
        gridRow: $gridRow
      }
    ) {
      result {
        complaintResponseFormId
        gridColumn
        gridRow
        gridColumnStart
        formObjectId
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_FORM_OBJ_FROM_COMPLAINT_RESPONSE_FORM = gql`
  mutation formObjectForm_deleteFormObjectForm($id: Int!) {
    formObjectComplaintResponseForm_deleteFormObjectComplaintResponseForm(
      entityId: $id
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

export const DELETE_FORM_OBJ = gql`
  mutation formObject_deleteFormObject($id: Int!) {
    formObject_deleteFormObject(entityId: $id) {
      result {
        id
        label
      }
      status {
        code
        value
      }
    }
  }
`;




export type MenuItemType = {
  id: number;
  label: string;
  value:boolean;
}