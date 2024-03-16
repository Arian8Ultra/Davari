import { gql } from "@apollo/client";

export const GET_COMPLAINT_STATES = gql`
query getComplaintStates($filter:ComplaintStateFilterInput,$order:[ComplaintStateSortInput!],$take:Int,$skip:Int) {
    complaintState_getComplaintStates{
        result(where: $filter,order:$order,take:$take,skip:$skip){
            items{
                id
                englishName
                persianName
                state
                createdDate
                isDeleted
                priority
                # responsibleRole
            }
        }
    }
}`