import { gql } from "@apollo/client";

export const CREATE_COMPLAINT_FORM = gql`
    mutation complaintForm_createComplaintForm($description: String!, $title: String! , $id: Int!) {
        complaintForm_addComplaintForm(input: {
            description: $description
            id: $id
            title: $title
            
        }) {
            result{
                title
                description
                formObjectForms{
                    formId
                    id
                }
            }
            status{
                code
                value
            }
        }
    }`;
