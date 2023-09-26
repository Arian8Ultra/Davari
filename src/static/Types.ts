import { UserRole } from "../GraphQL/Users/Queries";

export type User = {
    userRoles: UserRole[] | undefined;
    firstName: string;
    lastName: string;
    nationalCode: string;
    personnelCode: string;
    departmentId: number;
    phoneNumber: string;
    userName: string;
    email: string;
    id: string;
}


export type Argument = {
    Summary: string;
    Description: string;
    FileName: string;
    SuggestedAmount: number;
    AccuserResponse: string;
    AccuserResponseFileName: string;
    ExpertOpinion: string;
    ExpertVerdict: string;
    ExpertOpinionFileName: string;
    ApprovedAmount: number;
    MailRoomExpertApprovedAmount: number;
    MailRoomChiefSuggestedAmount: number;
    CouncilApprovedAmount: number;
    ContractId: number;
}


