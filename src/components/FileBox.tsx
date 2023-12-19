/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import {
  CancelOutlined,
  FileCopyOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonProps,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Red } from "../theme/color";
interface Props extends ButtonProps {
  setFiles?: (files: File[]) => void;
  files?: File[];
  fileTypes?: string[];
  // multiple?: boolean;
}
const FileBox = ({
  setFiles,
  files,
  fileTypes,
  // multiple = false,
  ...props
}: Props) => {
  const [, setFile] = React.useState(files);
  const [fileName, setFileName] = React.useState<string>("");

  useEffect(() => {
    setFile(files);
  }, [files]);

  const handleFile = (e: { target: { files: any } }) => {
    const newFiles = e.target.files;
    console.log(newFiles);
    setFile(newFiles[0]);
    setFiles && setFiles(newFiles);
    setFileName(newFiles[0].name.split(".")[0]);
  };
  return (
    //   @ts-ignore
    <Button
      variant="outlined"
      component="label"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      <input
        type="file"
        multiple={true}
        onChange={handleFile}
        hidden
        // just accept image and pdf
        accept={"image/*,application/pdf"}
        // style={{
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   width: "100%",
        //   height: "100%",
        //   outline:'1px solid red',
        //   zIndex:1000
        // }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //   border: "1px dotted #ccc",
          borderRadius: "5px",
        }}
      >
        {fileName == "" && <UploadFileOutlined />}
        {fileName == "" && props.children}

        {/* {fileNames?.length > 0 &&
          fileNames.map((name, index) => (
            <Box>
              <FileCopyOutlined key={index} />
              {name}
            </Box>
          ))} */}
        {fileName != "" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FileCopyOutlined />
            {fileName}
            <Typography>برای ویرایش کلیک کنید</Typography>
            {props.children}

            <IconButton
            sx={{
              position:'absolute',
              zIndex:1000,
              top:-20,
              left:-20,
              padding:'3px',
              background:'white',
              color:Red,
              "&:hover": {
                background: Red,
                color: "white",
              }
            }}
              onClick={() => {
                setFile(undefined);
                setFileName("");
              }}
            >
              <CancelOutlined />
            </IconButton>
          </Box>
        )}
        {fileName == "" && fileTypes?.join(",")}
      </Box>
    </Button>
  );
};

export default FileBox;
