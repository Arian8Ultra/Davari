/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import {
  ComplaintStateStatus,
  useGetComplaintsWithFilterQuery,
  useUpdateComplaintFullMutation,
} from "../../../../generated-types";
import TreeChart from "../../../components/TreeChart";
import { useState } from "react";
import { ComplaintInput, ComplaintState } from "../../../gql/graphql";

const Test = () => {
  const [updateComplaint] = useUpdateComplaintFullMutation();
  const [id, setId] = useState<string>();
  const [stateId, setStateId] = useState<string>();
  const [textInput, setTextInput] = useState<string>("");
  const complaintStates = JSON.parse(
    localStorage.getItem("complaintStates") || "[]"
  ) as ComplaintState[];
  const {data:complaints} =useGetComplaintsWithFilterQuery({
    variables:{
      take:1000
    }
  })
  return (
    <div>
      <Typography variant={"body2"}>Update State</Typography>
      <Box
        display={"flex"}
        // justifyContent={"center"}
        alignItems={"center"}
        my={3}
      >
        <TextField
          label={"Complaint ID"}
          value={id}
          fullWidth
          onChange={(e) => setId(e.target.value)}
          select
        >
          {complaints?.complaint_getComplaints.result?.items?.map((complaint) => (
            <MenuItem key={complaint.id} value={complaint.id}>
              {complaint.contract?.contractSubjectByAccuser}{"  "}{complaint.id}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label={"Complaint State"}
          value={stateId}
          onChange={(e) => setStateId(e.target.value)}
          select
          fullWidth
        >
          {complaintStates.map((state) => (
            <MenuItem key={state.id} value={state.id}>
              {state.persianName}
            </MenuItem>
          ))}
        </TextField>
        <Button
          onClick={() =>
            updateComplaint({
              variables: {
                input: {
                  id: parseInt(id || "0") || 0,
                  complaintStateId: parseInt(stateId || "0"),
                }
              },
              onCompleted(data, clientOptions) {
                alert("Updated");
              },
            })
          }
        >
          Update
        </Button>
      </Box>
    </div>
  );
};

export default Test;
