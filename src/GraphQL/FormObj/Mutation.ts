import { gql } from "@apollo/client";

export const ADD_FORM_OBJ_TO_FORM = gql`
mutation formObjectForm_addFormObjectForm (
    $formId:Int!
    $formObjectId:Int
    $gridColumn:Int
    $gridColumnStart:Int
    $gridRow:Int
){
    formObjectForm_addFormObjectForm(input: {
        formId: $formId
        formObjectId: $formObjectId
        gridColumn: $gridColumn
        gridColumnStart: $gridColumnStart
        gridRow: $gridRow
    }){
        result{
            formId
            gridColumn
            gridRow
            gridColumnStart
            formObjectId
        }
    }
}
`