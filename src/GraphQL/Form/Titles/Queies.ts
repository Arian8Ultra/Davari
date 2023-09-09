import { gql } from "@apollo/client";
import { FormObjComplete } from "../../FormObj/Queries";

export const GET_TITLES = gql`
query getTitles {
    formTitle_getFormTitles {
        result{
            items{
                content
                formId
                value
                row
                formObjectFormTitles{
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
`


export type FormTitle = {
    content: string;
    formId: number;
    value: string;
    formObjects: FormObjComplete[];
    id: number;
    isDeleted: boolean;
    row: number;
}