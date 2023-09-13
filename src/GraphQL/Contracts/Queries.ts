import { gql } from "@apollo/client";

export const GET_CONTRACTS = gql`
    query GetContracts {
        contract_getContracts{
            result{
                items{
                    organizationId
                    contractorId
                    contractNumber
                    isExecutive
                    department{
                        title
                        id
                        departmentType
                    }
                    complaints{
                        userId
                        id
                        accuserDepartmentId
                        accusedDepartmentId
                        contractId
                        assignedUserId
                        complaintFormId
                        complaintResponseFormId
                        complaintCode
                        complaintState
                    }
                    id
                    lastModifiedDate
                }
            }
        }
    }`