import React from "react";
import { ComplaintState } from "../../../../generated-types";
import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { background, secondary } from "../../../theme/color";
import Statecard from "../../../components/Admin/StateManagement/Statecard";

const StateManagementPage = () => {
  const complaintStates = JSON.parse(
    localStorage.getItem("complaintStates") || "[]"
  ) as ComplaintState[];
  return (
    <TableContainer
      sx={{
        borderRadius: "10px",
        background: background,
        my: "1rem",
        // change the color of header to grey
        "& thead": {
          "& tr": {
            "& th": {
              color: "#fff",
              background: secondary,
              padding: "0.75rem",
            },
          },
        },

        // change padding of cells
        "& td": {
          padding: "0.75rem",
        },
      }}
    >
      <Table
        sx={{
          borderRadius: "10px",
          background: background,
          // change the color of header to grey
          "& thead": {
            "& tr": {
              "& th": {
                color: "#fff",
                background: secondary,
                textAlign: "center",
              },
            },
          },

          //   center the text of cells
          "& td": {
            textAlign: "center",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>شناسه</TableCell>
            <TableCell>اولویت</TableCell>
            <TableCell>نام فارسی</TableCell>
            <TableCell>نام لاتین</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complaintStates.map((state) => (
            <Statecard {...state} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StateManagementPage;
