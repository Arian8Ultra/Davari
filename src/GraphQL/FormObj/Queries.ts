import { gql } from "@apollo/client";

export const GET_FORM_OBJS = gql`
  query formObject_getFormObjects {
    formObject_getFormObjects {
      result {
        items {
          label
          unit
          stickyText
          color
          id
          formObjectType
        }
      }
    }
  }
`;

export type FormObj = {
  label: string;
  unit: string;
  stickyText: string;
  color: string;
  id: number;
  formObjectType: string;
};

export const FormObjType = {
  0: "Text",
  1: "TextwithFile",
  2: "Title_h1",
  3: "Title_h2"
};


export enum FormObjTypeEnum{
  Text = 0,
  TextwithFile = 1,
  Title_h1 = 2,
  Title_h2 = 3
}

export const FormObjTypeText = {
  Text: 0,
  TextwithFile: 1,
  Title_h1: 2,
  Title_h2: 3
};
