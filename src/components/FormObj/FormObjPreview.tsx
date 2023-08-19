import React from "react";
import "./FormObjPreview.css";
import { FormObj } from "../../GraphQL/FormObj/Queries";
import { Box, IconButton } from "@mui/material";
import {
  primary,
  primaryLight,
  primaryLightTransparent,
} from "../../theme/color";
import { VscFile } from "react-icons/vsc";
import { UploadFile } from "@mui/icons-material";
interface Props extends FormObj {
  name: string;
}
const FormObjPreview = (props: Props) => {
  switch (props.formObjectType) {
    case "TEXT":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            outline: `1px solid ${primary}`,
            borderRadius: "10px",
            padding: "5px",
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
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
                props.color ? props.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
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
            outline: `1px solid ${primary}`,
            borderRadius: "10px",
            padding: "5px",
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
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
                props.color ? props.color : primary
              }, 50%)`,
              textOverflow: "ellipsis",
              overflow: "hidden",
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
            }}
          >
            <span>{props.unit}</span>
          </Box>

          <IconButton
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              color: props.color ? props.color : primary,
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
            outline: `1px solid ${primary}`,
            borderRadius: "10px",
            padding: "5px",
            textDecoration: "underLine",
            width: "100%",
          }}
        >
          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: props.color ? props.color : primary,
              textDecoration: "underLine",
              textAlign: "center",
            }}
          >
            <h1>{props.label}</h1>
          </Box>
        </Box>
      );
    case "TITLE_H2":
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            outline: `1px solid ${primary}`,
            borderRadius: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2>{props.label}</h2>
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
          }}
        >
          <span>{props.label}</span>
          <span>{props.unit}</span>
          <span>{props.formObjectType}</span>
          <span>{props.stickyText}</span>
        </Box>
      );
  }
};

export default FormObjPreview;
