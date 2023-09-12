import { gql } from "@apollo/client";
import { FormObjComplete } from "../../FormObj/Queries";

export const GET_TITLES = gql`
  query getTitles {
    formTitle_getFormTitles {
      result {
        items {
          content
          complaintFormId
          complaintResponseFormId
          value
          row
          formObjectFormTitles {
            formTitleId
            formObjectId
            id
            gridColumn
            gridColumnStart
            gridRow
          }
          id
          isDeleted
        }
      }
    }
  }
`;

export const GET_TITLE = gql`
  query getTitle($id: Int!) {
    formTitle_getFormTitle(entityId: $id) {
      result {
        content
        complaintFormId
        complaintResponseFormId
        value
        row
        formObjectFormTitles {
          formTitleId
          formObjectId
          id
          gridColumn
          gridColumnStart
          gridRow
        }
        id
        isDeleted
      }
      status {
        code
        value
      }
    }
  }
`;

export type FormTitle = {
  content: string;
  complaintFormId?: number;
  complaintResponseFormId?: number;
  value: string;
  formObjects: FormObjComplete[];
  id: number;
  isDeleted: boolean;
  row: number;
};
