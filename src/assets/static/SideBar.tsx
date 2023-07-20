import { BsPeopleFill, BsPersonCircle, BsViewStacked } from "react-icons/bs";
import { VscHome, VscWarning } from "react-icons/vsc";
import { Titles } from "./Titles";
import { AiFillMessage } from "react-icons/ai";

export const SideBarMenu = [
    {
        primary: Titles.home,
        to: '/home',
        icon: <VscHome />,
        hasLink: true,
        hasCollapse: false,
        children: []
    },
    {
        primary: Titles.complaints,
        to: '/complaints',
        icon: <VscWarning />,
        hasLink: true,
        hasCollapse: false,
        children: []
    },
    {
        primary: Titles.portal,
        to: '/portal',
        icon: <BsViewStacked />,
        hasLink: true,
        hasCollapse: true,
        children: [
            {
                primary: Titles.messages,
                to: '/portal/messages',
                icon: <AiFillMessage />,
                hasLink: true,
                hasCollapse: false,
            },{
                primary: Titles.employeeManagement,
                to: '/portal/employee_management',
                icon: <BsPeopleFill />,
                hasLink: true,
                hasCollapse: false,
            }
        ]
    },
    {
        primary: Titles.adminPanel,
        to: '',
        icon: <BsPersonCircle />,
        hasLink: false,
        hasCollapse: true,
        children: [
            {
                primary: Titles.userManagement,
                to: '/admin/usermanagement',
                icon: <BsPeopleFill />,
                hasLink: true,
                hasCollapse: false,
            }
        ]
    }
]

// Side bar type
export type SideBarLinkType = {
    primary: string,
    to: string,
    icon?: JSX.Element,
    hasLink?: boolean,
    hasCollapse?: boolean,
    children?: SideBarLinkType[]
}