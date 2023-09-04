import React from "react";
import { FormObj } from "../../GraphQL/FormObj/Queries";
import { MenuItem, TextField, Typography } from "@mui/material";
interface Props extends FormObj {
  name: string;
  gridColumn?: number;
  girdColumnStart?: number;
  gridRow?: number;
  setValue?: (value: string) => void;
  value?: string;
  //   isDeletable?: boolean;
  //   handleDelete?: (
  //     gridRow: number | undefined,
  //     gridColumn: number | undefined,
  //     girdColumnStart: number | undefined,
  //     id: number | undefined
  //   ) => void;
}
const FormObj = (props: Props) => {
  switch (props.formObjectType) {
    case "TEXT":
      return (
        <TextField
          id={props.id.toString()}
          label={props.label}
          name={props.name}
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: props.unit ? (
              <Typography>{props.unit}</Typography>
            ) : null,
            startAdornment: props.stickyText ? (
              <Typography>{props.stickyText}</Typography>
            ) : null,
          }}
          sx={{
            gridColumnStart: props.girdColumnStart,
            gridRow: props.gridRow,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
            marginBlock: "1rem",
            position: "relative",
            testOverflow: "ellipsis",
            padding: "5px",
            width: "100%",
          }}
          onChange={(e) => {
            if (props.setValue) {
              props.setValue(e.target.value);
            }
          }}
          value={props.value}
        />
      );
    //   case "TEXT_WITH_FILE":
    //   case "TITLE_H1":
      case "SELECT":
        return (
            <TextField
                id={props.id.toString()}
                label={props.label}
                name={props.name}
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: props.unit ? (
                        <Typography>{props.unit}</Typography>
                    ) : null,
                    startAdornment: props.stickyText ? (
                        <Typography>{props.stickyText}</Typography>
                    ) : null,
                }}
                sx={{
                    gridColumnStart: props.girdColumnStart,
                    gridRow: props.gridRow,
                    gridColumnEnd:
                        props.gridColumn && props.girdColumnStart
                            ? props.gridColumn + props.girdColumnStart
                            : props.gridColumn
                            ? props.gridColumn
                            : 4,
                    marginBlock: "1rem",
                    position: "relative",
                    testOverflow: "ellipsis",
                    padding: "5px",
                    width: "100%",
                }}
                onChange={(e) => {
                    if (props.setValue) {
                        props.setValue(e.target.value);
                    }
                }}
                value={props.value}
                select
            >
                {props.menuItems && props.menuItems.map((item) => (
                    <MenuItem key={item.id} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </TextField>
        )
      case "TYPOGRAPHY":
        return (
            <Typography
                variant="h6"
                sx={{
                    gridColumnStart: props.girdColumnStart,
                    gridRow: props.gridRow,
                    gridColumnEnd:
                        props.gridColumn && props.girdColumnStart
                            ? props.gridColumn + props.girdColumnStart
                            : props.gridColumn
                            ? props.gridColumn
                            : 4,
                    marginBlock: "1rem",
                    position: "relative",
                    testOverflow: "ellipsis",
                    padding: "5px",
                    width: "100%",
                }}
            >
                {props.value}
            </Typography>
        )
  }
};

export default FormObj;
