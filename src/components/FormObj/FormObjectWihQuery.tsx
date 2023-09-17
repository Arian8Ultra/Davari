/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  FormObj,
  FormObjComplete,
  GET_FORM_OBJ,
} from "../../GraphQL/FormObj/Queries";
import { Cancel } from "@mui/icons-material";
import FileButton from "../FileButton";
import { useMutation, useQuery } from "@apollo/client";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { DELETE_FORM_OBJ_FROM_COMPLAINT_FORM, DELETE_FORM_OBJ_FROM_TITLE } from "../../GraphQL/FormObj/Mutation";


interface Props{
  name: string;
  gridColumn?: number;
  girdColumnStart?: number;
  gridRow?: number;
  id: number;
  setValue?: (value: string) => void;
  value?: string;
  isDeletable?: boolean;
  deleteId?:number
  handleDelete?: (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    girdColumnStart: number | undefined,
    id: number | undefined
  ) => void;
}
const FormObjectWihQuery = (props: Props) => {
  const { data } = useQuery(GET_FORM_OBJ, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log("FORM_OBJ_DATA :", data);
    },
  });


  const [deleteFormObj]= useMutation(DELETE_FORM_OBJ_FROM_TITLE,{
    variables:{
      id:props.deleteId
    },
    onCompleted(data, clientOptions) {
      console.log(data);
      
    },
  })

  //   return (
  //     <Box
  //       sx={{
  //         gridColumnStart: props.girdColumnStart,
  //         gridRow: props.gridRow,
  //         gridColumnEnd:
  //           props.gridColumn && props.girdColumnStart
  //             ? props.gridColumn + props.girdColumnStart
  //             : props.gridColumn
  //             ? props.gridColumn
  //             : 4,

  //         outline: "1px solid red",
  //         color:'black'
  //       }}
  //     >
  //         {label}
  //     </Box>
  //   );

  switch (data?.formObject_getFormObject?.result?.formObjectType) {
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
            // outline: "1px solid red",
          }}
        >
          <TextField
            id={props.id.toString()}
            label={data.formObject_getFormObject.result?.label}
            name={props.name}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: data.formObject_getFormObject.result
                ?.unit ? (
                <Typography>
                  {data.formObject_getFormObject.result?.unit}
                </Typography>
              ) : null,
              startAdornment: data.formObject_getFormObject.result
                ?.stickyText ? (
                <Typography>
                  {data.formObject_getFormObject.result?.stickyText}
                </Typography>
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
                void deleteFormObj()
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
          }}
        >
          <TextField
            id={props.id.toString()}
            label={data.formObject_getFormObject.result?.label}
            name={props.name}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: data.formObject_getFormObject.result
                ?.unit ? (
                <Typography>
                  {data.formObject_getFormObject.result?.unit}
                </Typography>
              ) : null,
              startAdornment: data.formObject_getFormObject.result
                ?.stickyText ? (
                <Typography>
                  {data.formObject_getFormObject.result?.stickyText}
                </Typography>
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
            {data.formObject_getFormObject.result?.menuItems &&
              data.formObject_getFormObject.result?.menuItems.map(
                (item: {
                  id: Key | null | undefined;
                  value:
                    | string
                    | number
                    | readonly string[]
                    | undefined;
                  label:
                    | string
                    | number
                    | boolean
                    | ReactElement<
                        any,
                        | string
                        | JSXElementConstructor</* eslint-disable @typescript-eslint/no-unsafe-member-access */
                          /* eslint-disable @typescript-eslint/no-unsafe-assignment */
                          any>
                      >
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                }) => {
                  item= JSON.parse(String(item))
                  return (
                    // @ts-ignore
                    <MenuItem key={item.id} value={item.label}>
                      {item.label}
                    </MenuItem>
                  );
                }
              )}
          </TextField>
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                void deleteFormObj()
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
            {data.formObject_getFormObject.result.label}
          </Typography>
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                void deleteFormObj()
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
            {data.formObject_getFormObject.result?.label}
          </Typography>
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                void deleteFormObj()
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
          <FileButton
            setFiles={props.setValue}
            text={data.formObject_getFormObject.result?.label}
          />
          {props.isDeletable && (
            <IconButton
              onClick={() => {
                void deleteFormObj()
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
      

    default:
      return (
        <Box
          sx={{
            position: "relative",
            gridRow: props.gridRow,
            gridColumn: "span 12",
            // outline: "2px solid black",
          }}
        >
          {data?.formObject_getFormObject?.result?.label}
        </Box>
      );
  }
};

export default FormObjectWihQuery;
