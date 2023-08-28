/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Close, UploadFile } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import { FormObj, GET_FORM_OBJ } from "../../GraphQL/FormObj/Queries";
import { Red, RedLight, primary } from "../../theme/color";
import "./FormObjPreview.css";
import { useQuery } from "@apollo/client";
interface Props {
  gridColumn?: number;
  girdColumnStart?: number;
  gridRow?: number;
  formObjectId: number;
  //   isDeletable?: boolean;
  //   handleDelete?: (
  //     gridRow: number | undefined,
  //     gridColumn: number | undefined,
  //     girdColumnStart: number | undefined
  //   ) => void;
}
const FormObjPreviewWithQuery = (props: Props) => {

    const {data,loading,error} = useQuery(GET_FORM_OBJ,{
        variables:{
            id:props.formObjectId
        },
        onCompleted(data){
            console.log(data);
        },
        onError(error){
            console.log(error);
        }
    })
  switch (data?.formObject_getFormObject?.result?.formObjectType) {
    case "TEXT":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            outline: `1px solid ${
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
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
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.stickyText}</span>
          </Box>

          <Box
            sx={{
              gridColumn: "span 2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.9rem",
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.label}</span>
          </Box>

          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.unit}</span>
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
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
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
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.stickyText}</span>
          </Box>
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.label}</span>
          </Box>
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: `color-mix(white, ${
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.unit}</span>
          </Box>

          <IconButton
            sx={{
              gridColumn: "span 0.5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
              borderRadius: "10px",
              outline: `1px solid ${
                data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary
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
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "stretch",
              alignItems: "center",
              color: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
              // textDecoration: "underLine",
              textAlign: "start",
              fontSize: "1.2rem",
              width: "100%",
              // outline: `1px solid red`,
            }}
          >
            <span>{data?.formObject_getFormObject?.result?.label}</span>
            <Divider
              sx={{
                width: "50%",
                color: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
                borderColor: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
              }}
            />
          </Box>
        </Box>
      );
    case "TITLE_H2":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            // outline: `1px solid ${
            //   props.color ? props.color : primary
            // }`,
            borderRadius: "10px",
            width: "100%",
            textAlign: "start",
            color: data?.formObject_getFormObject?.result?.color ? data?.formObject_getFormObject?.result?.color : primary,
            fontSize: "1rem",
            padding: "5px",
            paddingInlineStart: "1.5rem",
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
          <span spellCheck>{data?.formObject_getFormObject?.result?.label}</span>
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
          <span>{data?.formObject_getFormObject?.result?.label}</span>
          <span>{data?.formObject_getFormObject?.result?.unit}</span>
          <span>{data?.formObject_getFormObject?.result?.formObjectType}</span>
          <span>{data?.formObject_getFormObject?.result?.stickyText}</span>
        </Box>
      );
  }
};

export default FormObjPreviewWithQuery;
