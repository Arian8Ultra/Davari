import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius:'1rem',
        width:'40%',
        margin:'auto',
        padding:'1rem 2rem'
      }}
    >
      <h1>ثبت نام کاربر</h1>
      <Outlet/>
    </Box>
  );
};

export default SignUp;
