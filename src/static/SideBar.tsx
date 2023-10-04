/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import {
  BsInputCursorText,
  BsPeopleFill,
  BsPersonCircle,
  BsViewStacked,
} from "react-icons/bs";
import {
  VscDebug,
  VscFile,
  VscHome,
  VscWarning,
} from "react-icons/vsc";
import { Titles } from "./Titles";
import { UserRole } from "../GraphQL/Users/Queries";

export const SideBarMenu = [
  {
    primary: Titles.home,
    to: "/home",
    icon: <VscHome />,
    hasLink: true,
    hasCollapse: false,
    children: [],
    accessNeeded: ["NORMAL","SENIOR_USER","EXPERT","SUPER_ADMIN"],
  },
  {
    primary: Titles.complaints,
    to: "/complaints",
    icon: <VscWarning />,
    hasLink: true,
    hasCollapse: false,
    children: [],
    accessNeeded: ["SENIOR_USER","SUPER_ADMIN","EXPERT"],
  },
  // {
  //   primary: Titles.contracts,
  //   to: "/contracts",
  //   icon: <VscFile />,
  //   hasLink: true,
  //   hasCollapse: false,
  //   children: [],
  // },
  {
    primary: Titles.portal,
    to: "/portal",
    icon: <BsViewStacked />,
    hasLink: true,
    hasCollapse: true,
    accessNeeded: ["EXPERT" ,"SENIOR_USER","SUPER_ADMIN"],
    children: [
      {
        primary: Titles.messages,
        to: "/portal/messages",
        icon: <AiFillMessage />,
        hasLink: true,
        hasCollapse: false,
      },
      // {
      //   primary: Titles.employeeManagement,
      //   to: "/portal/employee_management",
      //   icon: <BsPeopleFill />,
      //   hasLink: true,
      //   hasCollapse: false,
      // },
      {
        primary: Titles.answerToComplaints,
        to: "/portal/complain_answers",
        icon: <AiOutlineMessage />,
        hasLink: true,
        hasCollapse: false,
      },
    ],
  },
  {
    primary: Titles.adminPanel,
    to: "",
    icon: <BsPersonCircle />,
    hasLink: false,
    hasCollapse: true,
    accessNeeded: ["SUPER_ADMIN"],
    children: [
      {
        primary: Titles.userManagement,
        to: "/admin/usermanagement",
        icon: <BsPeopleFill />,
        hasLink: true,
        hasCollapse: false,
      },
      {
        primary: Titles.formManager,
        to: "/admin/formanager",
        icon: <BsInputCursorText />,
        hasLink: true,
        hasCollapse: false,
      },
    ],
  },
];

// Side bar type
export type SideBarLinkType = {
  primary: string;
  to: string;
  icon?: JSX.Element;
  hasLink?: boolean;
  hasCollapse?: boolean;
  children?: SideBarLinkType[];
  accessNeeded?: ["NORMAL","SENIOR_USER","EXPERT","SUPER_ADMIN"];
};
