/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CancelOutlined, FileCopyOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Red } from "../theme/color";
interface Props extends ButtonProps {
  setFiles?: ((files: File[]) => void);
  files?: File | File[];
  fileTypes?: string[];
  title?: string;
}
const FilesBox = ({
  title,
  setFiles,
  files,
  fileTypes,
  ...props
}: Props) => {
    const [file, setFile] = React.useState(files);
    const [fileNames, setFileNames] = React.useState<string[]>([]);
  
    useEffect(() => {
      setFile(files);
    }, [files]);
  
    const handleFiles = (e: { target: { files: any } }) => {
      const newFiles = e.target.files;
      console.log(newFiles);
      const keys = Object.keys(newFiles) as (keyof typeof newFiles)[];
      setFiles && setFiles(keys.map((key) => newFiles[key]));
      newFiles && setFileNames(keys.map((key) => newFiles[key].name));
    };
  return (
    //   @ts-ignore
    <Button
      variant="outlined"
      component="label"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      <input
        type="file"
        multiple={true}
        onChange={handleFiles}
        hidden
        accept={"image/*,application/pdf"}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //   border: "1px dotted #ccc",
          flexDirection: "column",
          borderRadius: "5px",
        }}
      >
        {fileNames.length  && fileNames.length > 0 ? "" : <UploadFileOutlined />}
        {fileNames.length  && fileNames.length > 0 ? props.children : ""}
        <Typography variant="body2">{title}</Typography>

        {/* {fileNames?.length > 0 &&
          fileNames.map((name, index) => (
            <Box>
              <FileCopyOutlined key={index} />
              {name}
            </Box>
          ))} */}

        {fileNames.length  && fileNames.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FileCopyOutlined />
            {fileNames.reduce((acc, name, index) => {
                if (index == 0) return name;
                return acc + ", " + name;
                }
            )}
            <Typography>برای ویرایش کلیک کنید</Typography>
            {props.children}

            <IconButton
              sx={{
                position: "absolute",
                zIndex: 1000,
                top: -20,
                left: -20,
                padding: "3px",
                background: "white",
                color: Red,
                "&:hover": {
                  background: Red,
                  color: "white",
                },
              }}
              onClick={() => {
                setFile(undefined);
                setFileNames([]);
              }}
            >
              <CancelOutlined />
            </IconButton>
          </Box>
        ) : ""}
        {fileNames.length  && fileNames.length > 0 ? fileTypes?.join(",") : ""}
      </Box>
    </Button>
  );
};

export default FilesBox;
