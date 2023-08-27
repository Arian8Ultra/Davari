import { gql } from "@apollo/client";

export const GET_COMPLAINT_FORMS = gql`
  query complaintForm_getComplaintForms {
    complaintForm_getComplaintForms {
      result {
        items {
          id
          title
          description
          formObjectComplaintForms {
            gridColumn
            gridRow
            gridColumnStart
            formObjectId
            formObject {
              label
              formObjectType
              color
              unit
              isRequired
              id
            }
          }
        }
      }
      status
      __typename
    }
  }
`;

export const GET_COMPLAINT_FORM = gql`
  query complaintForm_getComplaintForm($id: Int!) {
    complaintForm_getComplaintForm(entityId: $id) {
      result {
        id
        title
        description
        formObjectComplaintForms {
          gridColumn
          gridRow
          gridColumnStart
          formObjectId
          formObject {
            label
            formObjectType
            color
            unit
            isRequired
            id
          }
        }
      }
      status {
        code
        value
      }
      __typename
    }
  }
`;

export const GET_COMPLAINT_ANSWER_FORMS = gql`
  query complaintResponseForm_getComplaintResponseForms {
    complaintResponseForm_getComplaintResponseForms {
      result {
        items {
          title
          description
          id
          formObjectComplaintResponseForms {
            gridColumn
            gridRow
            gridColumnStart
            formObjectId
            formObject {
              label
              formObjectType
              color
              unit
              isRequired
              id
            }
          }
        }
      }
      status
      __typename
    }
  }
`;

export const GET_COMPLAINT_ANSWER_FORM = gql`
  query complaintResponseForm_getComplaintResponseForm($id: Int!) {
    complaintResponseForm_getComplaintResponseForm(entityId: $id) {
      result {
        id
        title
        description
        formObjectComplaintResponseForms {
          gridColumn
          gridRow
          gridColumnStart
          formObjectId
          formObject {
            label
            formObjectType
            color
            unit
            isRequired
            id
          }
        }
      }
      status {
        code
        value
      }
      __typename
    }
  }
`;
