import { Button, Typography } from "@mui/material";
import React from "react";
import BackButton from "../components/BackButton";

const NoAccess = () => {
  return (
    <>
      <Typography variant="h3" color={"error"}>
        عدم دسترسی
      </Typography>
      <BackButton to="/"/>
    </>
  );
};

export default NoAccess;
