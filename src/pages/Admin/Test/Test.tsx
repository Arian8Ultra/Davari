/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useUpdateComplaintFullMutation } from "../../../../generated-types";
import TreeChart from "../../../components/TreeChart";
import { useState } from "react";
import { ComplaintInput, ComplaintState } from "../../../gql/graphql";

const Test = () => {
  const [updateComplaint] = useUpdateComplaintFullMutation();
  const [input, setInput] = useState<ComplaintInput>();
  const [textInput, setTextInput] = useState<string>("");
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
          value={input?.id}
          fullWidth
          onChange={(e) =>
            setInput({ ...input, id: parseInt(e.target.value) })
          }
        />
        <TextField
          label={"Complaint State"}
          value={input?.complaintState}
          onChange={(e) =>
            setInput({
              ...input,
              // @ts-ignore
              complaintState: ComplaintState[e.target.value],
            })
          }
          select
          fullWidth
        >
          {Object.keys(ComplaintState).map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <Button
          onClick={() =>
            updateComplaint({
              variables: {
                // @ts-ignore
                input: input,
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
