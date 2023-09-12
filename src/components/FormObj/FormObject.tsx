/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Box,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormObj } from "../../GraphQL/FormObj/Queries";
import { Cancel } from "@mui/icons-material";
import FileButton from "../FileButton";
import { useEffect } from "react";
interface Props extends FormObj {
  name: string;
  gridColumn?: number;
  girdColumnStart?: number;
  gridRow?: number;
  setValue?: (value: string) => void;
  value?: string;
  isDeletable?: boolean;
  handleDelete?: (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    girdColumnStart: number | undefined,
    id: number | undefined
  ) => void;
}
const FormObject = (props: Props) => {
  useEffect(() => {
    console.log(props.menuItems);
  }, []);
  switch (props.formObjectType) {
    case "TEXT":
      return (
        <Box
          sx={{
            position: "relative",
            gridColumnStart: props.girdColumnStart,
            gridRow: props.gridRow,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
          }}
        >
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
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                props.handleDelete &&
                  props.handleDelete(
                    props.gridRow,
                    props.gridColumn,
                    props.girdColumnStart,
                    props.id
                  );
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
              }}
            >
              <Cancel />
            </IconButton>
          )}
        </Box>
      );
    //   case "TEXT_WITH_FILE":
    //   case "TITLE_H1":
    case "SELECT":
      return (
        <Box
          sx={{
            position: "relative",
            gridColumnStart: props.girdColumnStart,
            gridRow: props.gridRow,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,

            // outline: "2px solid red",
          }}
        >
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
            {props.menuItems &&
              props.menuItems.map((item) => {
                item= JSON.parse(String(item))
                return (
                  <MenuItem key={item.id} value={item.value}>
                    {item.label}
                  </MenuItem>
                );
              })}
          </TextField>
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                props.handleDelete &&
                  props.handleDelete(
                    props.gridRow,
                    props.gridColumn,
                    props.girdColumnStart,
                    props.id
                  );
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
              }}
            >
              <Cancel />
            </IconButton>
          )}
        </Box>
      );
    case "TYPOGRAPHY":
      return (
        <Box
          sx={{
            position: "relative",
            gridColumnStart: props.girdColumnStart,
            gridRow: props.gridRow,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBlock: "1rem",
              position: "relative",
              testOverflow: "ellipsis",
              padding: "5px",
              width: "100%",
            }}
          >
            {props.value}
          </Typography>
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                props.handleDelete &&
                  props.handleDelete(
                    props.gridRow,
                    props.gridColumn,
                    props.girdColumnStart,
                    props.id
                  );
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
              }}
            >
              <Cancel />
            </IconButton>
          )}
        </Box>
      );

    case "TITLE_H1":
      return (
        <Box
          sx={{
            position: "relative",
            gridColumn: "span 12",
            gridRow: props.gridRow,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBlock: "1rem",
              position: "relative",
              testOverflow: "ellipsis",
              padding: "5px",
              width: "100%",
            }}
          >
            {props.label}
          </Typography>
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                props.handleDelete &&
                  props.handleDelete(
                    props.gridRow,
                    props.gridColumn,
                    props.girdColumnStart,
                    props.id
                  );
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
              }}
            >
              <Cancel />
            </IconButton>
          )}
        </Box>
      );

    case "FILE":
      return (
        <Box
          sx={{
            position: "relative",
            gridColumnStart: props.girdColumnStart,
            gridRow: props.gridRow,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
          }}
        >
          <FileButton setFiles={props.setValue} text={props.label} />
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                props.handleDelete &&
                  props.handleDelete(
                    props.gridRow,
                    props.gridColumn,
                    props.girdColumnStart,
                    props.id
                  );
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
              }}
            >
              <Cancel />
            </IconButton>
          )}
        </Box>
      );
  }
};

export default FormObject;
