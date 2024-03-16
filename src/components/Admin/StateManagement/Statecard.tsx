/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { ComplaintState } from "../../../gql/graphql";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { useUpdateComplaintStateMutation } from "../../../../generated-types";

const Statecard = (props: ComplaintState) => {
  const [editMode, setEditMode] = React.useState(false);
  const [complaintState, setComplaintState] =
    React.useState<ComplaintState>(props);
  const [updateState] = useUpdateComplaintStateMutation({
    variables: {
      input: {
        id: props.id,
        englishName: complaintState.englishName,
        persianName: complaintState.persianName,
        priority: complaintState.priority,
        state: complaintState.state,
      },
    },
  });
  return (
    <TableRow key={props.id}>
      <TableCell>{props.id}</TableCell>
      <TableCell>{props.priority}</TableCell>
      <TableCell>
        <TextField
          disabled={!editMode}
          value={props.persianName}
          fullWidth
          onChange={(e) => {
            setComplaintState({
              ...complaintState,
              persianName: e.target.value,
            });
          }}
        />
      </TableCell>
      <TableCell>
        <TextField
          disabled={!editMode}
          value={props.englishName}
          fullWidth
          onChange={(e) => {
            setComplaintState({
              ...complaintState,
              englishName: e.target.value,
            });
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Button
          variant="text"
          sx={{
            display: editMode ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onClick={() => setEditMode(true)}
        >
          <FaEdit />
          ویرایش
        </Button>
        <Button
          variant="text"
          sx={{
            display: editMode ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
          color="success"
            onClick={() => {
                updateState({
                    onCompleted(data, clientOptions) {
                        alert("تغییرات ذخیره شدند");
                        setEditMode(false);

                    },
                });
            }}
        >
          ذخیره
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Statecard;
