/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TextField, TextFieldProps } from "@mui/material";
import {
  convertToEnglishDigits,
  convertToPersianDigits,
} from "../../functions/Functions";
import React from "react";

const FaTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      value={
        props.type != "number"
          ? convertToPersianDigits(props.value)
          : props.value
      }
      onChange={(e) => {
        e.target.value = convertToEnglishDigits(e.target.value);
        if (props.type == "number")
          // @ts-ignore
          e.target.value = parseInt(
            convertToEnglishDigits(e.target.value)
          );
        if (props.onChange != undefined) props.onChange(e);
      }}
    />
  );
};

export default FaTextField;
