import { User } from "../../gql/graphql";




export type Department = {
    title: string;
    id: number;
    users: User[];
    identificationCode: string;
}