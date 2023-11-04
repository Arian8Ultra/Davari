import { User } from "../../static/Types";




export type Department = {
    title: string;
    id: number;
    users: User[];
    identificationCode: string;
}