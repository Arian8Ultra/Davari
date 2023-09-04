import {
  Close,
  UploadFile
} from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import { FormObj } from "../../GraphQL/FormObj/Queries";
import {
  Red,
  RedLight,
  primary
} from "../../theme/color";
import "./FormObjPreview.css";
interface Props extends FormObj {
  name: string;
  gridColumn?: number;
  girdColumnStart?: number;
  gridRow?: number;
  isDeletable?: boolean;
  handleDelete?: (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    girdColumnStart: number | undefined,
    id:number | undefined,
  ) => void;
}
const FormObjPreview = (props: Props) => {
  switch (props.formObjectType) {
    case "TEXT":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            outline: `1px solid ${
              props.color ? props.color : primary
            }`,
            borderRadius: "10px",
            padding: "5px",
            width: "100%",
            textOverflow: "ellipsis",
            // overflow: "hidden",
            gridRow: props.gridRow ? props.gridRow : "span 1",
            gridColumnStart: props.girdColumnStart
              ? props.girdColumnStart
              : 0,
            position: "relative",
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
          }}
        >
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
                // width:'100%',
                height: "20px",
                fontSize:"10px",
                top: "-10px",
                right: "-10px",
                color: props.color ? props.color : "white",
                borderRadius: "5px",
                // borderBottomLeftRadius: 0,
                background: Red,
                // aspectRatio: "1/1",
                zIndex: 200,
                // outline: `2px solid ${
                //   props.color ? props.color : Red
                // }`,
                // backgroundColor: "white",
                "&:hover": {
                  backgroundColor: props.color
                    ? props.color
                    : RedLight,
                  // outline: `2px solid ${
                  //   props.color ? props.color : Red
                  // }`,
                  color: Red,
                },
              }}
            >
              <Close />
            </IconButton>
          )}
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                props.color ? props.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{props.stickyText}</span>
          </Box>

          <Box
            sx={{
              gridColumn: "span 2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: props.color ? props.color : primary,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.9rem",
            }}
          >
            <span>{props.label}</span>
          </Box>

          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                props.color ? props.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{props.unit}</span>
          </Box>
        </Box>
      );
    case "TEXT_WITH_FILE":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            outline: `1px solid ${
              props.color ? props.color : primary
            }`,
            position: "relative",
            borderRadius: "10px",
            padding: "5px",
            width: "100%",
            textOverflow: "ellipsis",
            // overflow: "hidden",
            gridRow: props.gridRow ? props.gridRow : "span 1",
            gridColumnStart: props.girdColumnStart
              ? props.girdColumnStart
              : 0,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
          }}
        >
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
                // width:'100%',
                height: "20px",
                top: "-10px",
                right: "-10px",
                color: props.color ? props.color : "white",
                borderRadius: "5px",
                // borderBottomLeftRadius: 0,
                background: Red,
                // aspectRatio: "1/1",
                zIndex: 200,
                // outline: `2px solid ${
                //   props.color ? props.color : Red
                // }`,
                // backgroundColor: "white",
                "&:hover": {
                  backgroundColor: props.color
                    ? props.color
                    : RedLight,
                  // outline: `2px solid ${
                  //   props.color ? props.color : Red
                  // }`,
                  color: Red,
                },
              }}
            >
              <Close />
            </IconButton>
          )}
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                props.color ? props.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{props.stickyText}</span>
          </Box>
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: props.color ? props.color : primary,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{props.label}</span>
          </Box>
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                props.color ? props.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{props.unit}</span>
          </Box>

          <IconButton
            sx={{
              gridColumn: "span 0.5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: props.color ? props.color : primary,
              borderRadius: "10px",
              outline: `1px solid ${
                props.color ? props.color : primary
              }`,
            }}
          >
            <UploadFile />
          </IconButton>
        </Box>
      );
    case "TITLE_H1":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            // outline: `1px solid ${
            //   props.color ? props.color : primary
            // }`,
            borderRadius: "10px",
            padding: "5px",
            paddingInlineStart: "0rem",

            // textDecoration: "underLine",
            width: "100%",
            gridRow: props.gridRow ? props.gridRow : "span 1",
            gridColumnStart: props.girdColumnStart
              ? props.girdColumnStart
              : 0,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
            position: "relative",
          }}
        >
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
                // width:'100%',
                height: "20px",
                top: "-10px",
                right: "-10px",
                color: props.color ? props.color : "white",
                borderRadius: "5px",
                // borderBottomLeftRadius: 0,
                background: Red,
                // aspectRatio: "1/1",
                zIndex: 200,
                // outline: `2px solid ${
                //   props.color ? props.color : Red
                // }`,
                // backgroundColor: "white",
                "&:hover": {
                  backgroundColor: props.color
                    ? props.color
                    : RedLight,
                  // outline: `2px solid ${
                  //   props.color ? props.color : Red
                  // }`,
                  color: Red,
                },
              }}
            >
              <Close />
            </IconButton>
          )}
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "stretch",
              alignItems: "center",
              color: props.color ? props.color : primary,
              // textDecoration: "underLine",
              textAlign: "start",
              fontSize: "1.2rem",
              width: "100%",
              // outline: `1px solid red`,
            }}
          >
            <span>{props.label}</span>
            <Divider
              sx={{
                width: "50%",
                color: props.color ? props.color : primary,
                borderColor: props.color ? props.color : primary,
              }}
            />
          </Box>
        </Box>
      );
    

    default:
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            outline: `1px solid ${primary}`,
            borderRadius: "10px",
            padding: "5px",
            gridRow: props.gridRow
              ? `span ${props.gridRow}`
              : "span 1",
            gridColumnStart: props.girdColumnStart
              ? props.girdColumnStart
              : 0,
            gridColumnEnd:
              props.gridColumn && props.girdColumnStart
                ? props.gridColumn + props.girdColumnStart
                : props.gridColumn
                ? props.gridColumn
                : 4,
          }}
        >
          <span>{props.label}</span>
          <span>{props.unit}</span>
          <span>{props.formObjectType}</span>
          <span>{props.stickyText}</span>
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
          >
            <Close />
          </IconButton>
        </Box>
      );
  }
};

export default FormObjPreview;
