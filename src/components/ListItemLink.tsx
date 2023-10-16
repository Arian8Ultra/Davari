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
}

function ListItemLink(props: ListItemLinkProps) {
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
        display: display || "block",
        width: "90%",
        margin: "1rem auto",
        borderRadius:'1rem',
        backgroundColor:
          primary == PageTitle
            ? "rgb(136, 212, 152)"
            : collapseOpen
            ? "rgba(255,255,255,0.1)"
            : "transparent",
      }}
    >
      <Box sx={{ flexGrow: 1 }} display={"flex"}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            color: primary == PageTitle ? secondaryDark : 'white',
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
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: primary == PageTitle ? secondaryDark : 'white',
            }}
          >
            {props.icon}
          </ListItemIcon>
          <ListItemText
            primary={primary}
            sx={{
              opacity: open ? 1 : 0,
              display: open ? "block" : "none",
              transition: "opacity 0.5s ease-in-out",
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
          }}
        >
          {props.children}
        </List>
      </Collapse>
    </ListItem>
  );
}

export default ListItemLink;
