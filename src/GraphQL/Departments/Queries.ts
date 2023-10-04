import { gql } from "@apollo/client";
import { User } from "../../static/Types";

export const GET_DEPARTMENTS = gql`
  query department_getDepartments {
    department_getDepartments {
        result{
            items{
                title
                id
                users{
                    userName
                    firstName
                    lastName
                }
                identificationCode
            }
        }
    }
  }`






export type Department = {
    title: string;
    id: string;
    users: User[];
    identificationCode: string;
}