/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputBaseComponentProps,
  MenuItem,
  OutlinedTextFieldProps,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useRef } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
interface TextInputProps extends OutlinedTextFieldProps {
  hasInfo?: boolean;
  info?: string;
  title?: string;
  formClassName?: string;
  hasCheckBox?: boolean;
  checkBoxLable?: string;
  checkBoxRegister?: InputBaseComponentProps;
  setValue?: React.Dispatch<
    React.SetStateAction<number | string | undefined>
  >;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  checked?: boolean;
  hasCalculator?: boolean;
  isDateInput?: boolean;
  dateValue?: Date;
  setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
const TextInput = ({
  hasInfo,
  formClassName,
  hasCheckBox,
  checkBoxLable,
  checkBoxRegister,
  setValue,
  setChecked,
  checked,
  hasCalculator,
  isDateInput,
  dateValue,
  setDate,
  ...props
}: TextInputProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <FormControl
      fullWidth
      variant="outlined"
      className={formClassName}
    >
      {props.title || hasInfo ? (
        <div
          className="flex gap-2 items-center w-max rtl my-0 relative"
          style={{
            direction: "rtl",
          }}
          ref={ref}
        >
          {props.title && (
            <FormLabel className="text-bold_16 text-black-100 flex gap-2 select-none">
              <Typography fontWeight={"600"}>
                {props.title}
              </Typography>
              {props.required && (
                <span className="text-error500 text-lg font-bold">
                  *
                </span>
              )}
            </FormLabel>
          )}

          {hasInfo && (
            <Tooltip
              title={props.info}
              arrow
              placement="left"
              className="relative"
            >
              <div>
                <BsInfoCircleFill className="w-[22px] h-[22px]" />
              </div>
            </Tooltip>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 justify-stretch">
          {isDateInput ? (
            <DatePicker
              value={dateValue as Date}
              onChange={(date) => {
                setDate && setDate(date as Date);
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  // borderWidth:'1px',
                },
                "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                "input[type=number]": {
                  MozAppearance: "textfield",
                },
                ...props.sx,
              }}
            />
          ) : (
            <TextField
              {...props}
              size="medium"
              fullWidth={
                props.fullWidth != undefined ? props.fullWidth : true
              }
              placeholder={props.placeholder || "اینجا بنویسید"}
              value={props.value}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  // borderWidth:'1px',
                },
                "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                "input[type=number]": {
                  MozAppearance: "textfield",
                },
                ...props.sx,
              }}
            >
              {props.select && (
                <MenuItem value={"انتخاب کنید"}>انتخاب کنید</MenuItem>
              )}
              {props.children}
            </TextField>
          )}

          {hasCheckBox && (
            <FormControlLabel
              sx={{
                width: "max-content",
                wordWrap: "nowrap",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
              }}
              checked={checked}
              onChange={(e) => {
                if (setChecked) {
                  setChecked(
                    // @ts-ignore
                    e.target.checked ? true : false
                  );
                }
              }}
              control={<Checkbox inputProps={checkBoxRegister} />}
              label={checkBoxLable || "دارد"}
            />
          )}
        </div>
      </div>
    </FormControl>
  );
};

export default TextInput;