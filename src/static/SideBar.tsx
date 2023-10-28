/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BsPeopleFill,
  BsPersonCircle,
  BsViewStacked
} from "react-icons/bs";
import { FaBalanceScale, FaHome } from "react-icons/fa";
import { Titles } from "./Titles";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { Dashboard, DashboardOutlined, SpaceDashboardOutlined } from "@mui/icons-material";

export const SideBarMenu = [
  {
    primary: Titles.home,
    to: "/home",
    icon: <FaHome />,
    hasLink: true,
    hasCollapse: false,
    children: [],
    accessNeeded: ["NORMAL","SENIOR_USER","EXPERT","SUPER_ADMIN"],
    mailRoom: true,
    justMailRoom: false,
  },
  {
    primary: Titles.complaints,
    to: "/complaints",
    icon: <FaBalanceScale />,
    hasLink: true,
    hasCollapse: false,
    children: [],
    accessNeeded: ["SENIOR_USER","SUPER_ADMIN","EXPERT"],
    mailRoom: false,
    justMailRoom: false,
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
    icon: <SpaceDashboardOutlined />,
    hasLink: true,
    hasCollapse: false,
    accessNeeded: ["EXPERT" ,"SENIOR_USER"],
    mailRoom: true,
    justMailRoom: true,
  },
  {
    primary: Titles.adminPanel,
    to: "",
    icon: <BsPersonCircle />,
    hasLink: false,
    hasCollapse: true,
    accessNeeded: ["SUPER_ADMIN","SENIOR_USER"],
    mailRoom: true,
    justMailRoom: false,
    children: [
      {
        primary: Titles.userManagement,
        to: "/admin/usermanagement",
        icon: <BsPeopleFill />,
        hasLink: true,
        hasCollapse: false,
        mailRoom: true,
        justMailRoom: false,
      },
      // {
      //   primary: Titles.formManager,
      //   to: "/admin/formanager",
      //   icon: <BsInputCursorText />,
      //   hasLink: true,
      //   hasCollapse: false,
      // },
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
  mailRoom?: boolean;
  justMailRoom?: boolean;
};
