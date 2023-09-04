import { gql } from "@apollo/client";

export const GET_FORM_OBJS = gql`
  query formObject_getFormObjects {
    formObject_getFormObjects {
      result(take: 2000) {
        items {
          name
          label
          unit
          stickyText
          color
          id
          formObjectType
          menuItems
          children{
            id
            label
            parentId
            unit
            stickyText
            color
            formObjectType
            menuItems
          }
        }
      }
      status
    }
  }
`;
export const GET_FORM_OBJS_BY_SEARCH = gql`
  query formObject_getFormObjects($search: String!) {
    formObject_getFormObjects {
      result(
        take: 2000
        where: {
          name: { contains: $search }
          or: { label: { contains: $search } }
        }
      ) {
        items {
          name
          label
          unit
          stickyText
          color
          id
          formObjectType
          menuItems
          children{
            id
            label
            parentId
            unit
            stickyText
            color
            formObjectType
            menuItems
          }
        }
      }
      status
    }
  }
`;

export const GET_FORM_OBJ = gql`
  query formObject_getFormObject($id: Int!) {
    formObject_getFormObject(entityId: $id) {
      result {
        name
          label
          unit
          stickyText
          color
          id
          formObjectType
          menuItems
          children{
            id
            label
            parentId
            unit
            stickyText
            color
            formObjectType
            menuItems
          }
      }
      status {
        code
        value
      }
    }
  }
`;

export type FormObj = {
  name?: string;
  label: string;
  unit: string;
  stickyText: string;
  color: string;
  id: number;
  formObjectType: "TEXT" | "FILE" | "TEXT_WITH_FILE" | "TITLE_H1" | "SELECT" | "TYPOGRAPHY";
  menuItems?: [{
    label: string;
    value: string;
    id: number;
  }]
};
export type FormObjComplete = {
  formObjectId: number;
  label: string;
  unit: string;
  stickyText: string;
  color: string;
  id: number;
  formObjectType: "TEXT" | "FILE" | "TEXT_WITH_FILE" | "TITLE_H1" | "SELECT" | "TYPOGRAPHY";
  gridColumn: number;
  gridRow: number;
  gridColumnStart: number;
  required: boolean;
};

export const FormObjType = {
  0: "Text",
  1: "File",
  2: "TextwithFile",
  3: "Title",
  4: "Select",
  5: "Typography",
};

export enum FormObjTypeEnum {
  Text = 0,
  File = 1,
  Text_with_File = 2,
  Title_h1 = 3,
  Select = 4,
  Typography = 5,
}

export const FormObjTypeText = {
  Text: 0,
  File: 1,
  TextwithFile: 2,
  Title_h1: 3,
  Select: 4,
  Typography: 5,
};
