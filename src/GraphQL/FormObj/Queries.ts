import { gql } from "@apollo/client";

export const GET_FORM_OBJS = gql`
  query formObject_getFormObjects {
    formObject_getFormObjects {
      result (take: 2000){
        items {
          name
          label
          unit
          stickyText
          color
          id
          formObjectType
        }
      }
      status
    }
  }
`;
export const GET_FORM_OBJS_BY_SEARCH = gql`
  query formObject_getFormObjects ($search: String!) {
    formObject_getFormObjects {
      result (take: 2000, where: {name: {contains: $search} or: {label: {contains: $search}}}){
        items {
          name
          label
          unit
          stickyText
          color
          id
          formObjectType
        }
      }
      status
    }
  }
`;

export const GET_FORM_OBJ = gql`
  query formObject_getFormObject($id: Int!) {
    formObject_getFormObject(entityId: $id) {
      result{
        label
          unit
          stickyText
          color
          id
          formObjectType
      }
      status{
        code
        value
      }
    }
  }
  `

export type FormObj = {
  name?: string;
  label: string;
  unit: string;
  stickyText: string;
  color: string;
  id: number;
  formObjectType: string;
};
export type FormObjComplete = {
  formObjectId: number;
  label: string;
  unit: string;
  stickyText: string;
  color: string;
  id: number;
  formObjectType: string;
  gridColumn: number;
  gridRow: number;
  gridColumnStart: number;
  required: boolean;
};

export const FormObjType = {
  0: "Text",
  1: "TextwithFile",
  2: "Title_h1",
  3: "Title_h2"
};


export enum FormObjTypeEnum{
  Text = 0,
  Text_with_File = 1,
  Title_h1 = 2,
  Title_h2 = 3
}

export const FormObjTypeText = {
  Text: 0,
  TextwithFile: 1,
  Title_h1: 2,
  Title_h2: 3
};
