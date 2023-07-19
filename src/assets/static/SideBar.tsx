import { BsViewStacked } from "react-icons/bs";
import { VscHome, VscWarning } from "react-icons/vsc";
import { Titles } from "./Titles";

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
        hasCollapse: false,
        children: []
    }
]