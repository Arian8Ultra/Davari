/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const Error = () => {
  // @ts-ignore
  const error: {
    statusText: string;
    status: number;
    error: { message: string; stack: string };
  } = useRouteError();
  return (
    <Box
      height={"100dvh"}
      // width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"3rem"}
    >
      <Box
        zIndex={2}
        sx={{
          backgroundColor: "rgba(255,0,0,0.2)",
          borderRadius: "25px",
          padding: "2rem",
          direction: "rtl",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography
          variant='h2'
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            fontSize: "10rem",
            opacity: "0.1",
            zIndex: "-1",
            userSelect: "none",
          }}
        >
          {error?.status}
        </Typography>
        <Typography variant='body1'>{error?.statusText}</Typography>
        <Typography variant='caption'>
          {error?.error.message}
        </Typography>
        <Typography
          variant='caption'
          whiteSpace={"pre-line"}
          color={"gray"}
          sx={{
            padding: "1rem",
            border: "1px solid gray",
            borderRadius: "15px",
          }}
        >
          {error?.error.stack}
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
