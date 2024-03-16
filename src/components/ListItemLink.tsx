/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLayoutStore from "../Context/LayoutStore";
import { secondaryDark } from "../theme/color";
import { useUserStore } from "../Context/UserStore";

interface ListItemLinkProps extends ListItemButtonProps {
  to: string;
  open?: boolean;
  primary: string;
  icon?: React.ReactElement;
  hasCollapse?: boolean;
  collapseOpen?: boolean;
  hasLink?: boolean;
  setCollapseOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  display?: string;
  accessNeeded?:
    | [
        "NORMAL",
        "SENIOR_USER",
        "EXPERT",
        "SUPER_ADMIN",
        "MAIL_ROOM",
        "JURY_EXPERT"
      ]
    | string[];
}

function ListItemLink(props: ListItemLinkProps) {
  const { user } = useUserStore((state) => state);
  const { to, open, primary, display, ...other } = props;
  const [collapseOpen, setCollapseOpen] = React.useState(
    props.collapseOpen || false
  );
  const setPageTitle = useLayoutStore((state) => state.setPageTitle);
  const PageTitle = useLayoutStore((state) => state.pageTitle);
  useEffect(() => {
    // collapseOpen && !open && setCollapseOpen(false);
  }, [collapseOpen, open]);
  const navigate = useNavigate();

  return (
    <ListItem
      key={primary}
      disablePadding
      sx={{
        display:
          display ||
          (user &&
            user.userRoles?.some((role) =>
              props.accessNeeded?.includes(role.roleType)
            ))
            ? "block"
            : "none",
        width: "90%",
        minWidth: "max-content",
        margin: "1rem auto",
        borderRadius: "1rem",
        backgroundColor:
          primary == PageTitle
            ? "rgb(136, 212, 152)"
            : collapseOpen
            ? "rgba(255,255,255,0.1)"
            : "transparent",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          // outline: "1px solid red",
          minWidth: "max-content",
        }}
        display={"flex"}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            color: primary == PageTitle ? secondaryDark : "white",
            width: "100%",
            overflow: "clip",
            textOverflow: "ellipsis",
          }}
          onClick={() => {
            // console.log("to", to);\
            if (props.hasLink) {
              setPageTitle(primary);
              navigate(to);
            } else {
              if (props.setCollapseOpen) {
                props.setCollapseOpen(!props.collapseOpen);
              }
              setCollapseOpen(!collapseOpen);
            }
          }}
          {...other}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 1 : "auto",
              justifyContent: "center",
              color: primary == PageTitle ? secondaryDark : "white",
            }}
          >
            {props.icon}
          </ListItemIcon>
          <ListItemText
            primary={primary}
            sx={{
              width: "max-content",
              // outline:'1px solid red',
              opacity: open ? 1 : 0,
              display: open ? "block" : "none",
              transition: "opacity 0.5s ease-in-out",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          />
        </ListItemButton>
        {props.hasCollapse && props.open && (
          <IconButton
            onClick={() => {
              if (props.setCollapseOpen) {
                props.setCollapseOpen(!props.collapseOpen);
              }
              setCollapseOpen(!collapseOpen);
            }}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "0",
              },
            }}
          >
            {props.collapseOpen || collapseOpen ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </IconButton>
        )}
      </Box>
      <Collapse in={collapseOpen} timeout={"auto"} unmountOnExit>
        <List
          sx={{
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: "0 0 10px 10px",
            // display: "flex",
            // gap: "0rem",
            // flexDirection: "column",
            // alignItems: "stretch",
            // justifyContent: "stretch",
          }}
        >
          {props.children}
        </List>
      </Collapse>
    </ListItem>
  );
}

export default ListItemLink;
