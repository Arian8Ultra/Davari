import { gql } from "@apollo/client";

export const CREATE_FORM_TITLE = gql`
mutation formTitle_createFormTitle(
    $content : String!
    $formId : Int!
    $value : String
    $row : Int
) {
    formTitle_addFormTitle(input: {
        content : $content
        formId : $formId
        value : $value
        row: $row
    }){
        result{
            content
            value
            id
        }
    }
}`



export type FormTitleMutation = {
    content: string;
    value?: string;
    formId: number;
    row?: number;
}