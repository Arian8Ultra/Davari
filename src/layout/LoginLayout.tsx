import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import sazmanImage from "../assets/Sazman.jpeg";
import { background } from "../theme/color";
import pboLogo from "../assets/PboLogo.png";
import { FaBalanceScale } from "react-icons/fa";

const LoginLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        width={"100%"}
        height={"100dvh"}
        sx={{
          background: `url(${sazmanImage})`,
          boxSizing: "border-box",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            backdropFilter: "blur(5px) brightness(0.8)",
          }}
        >
          <img
            src={pboLogo}
            alt="logo"
            style={{
              position: "absolute",
              // top: "50%",
              // left: "65%",
              top: "3%",
              left: "50%",
              // width: "20%",
              width: "15%",
              transform: "translate(-50%, 5%)",
              // transform: "translate(-50%, -50%)",
              filter:
                "drop-shadow(0px 0px 5px rgba(0,0,0,0.1)) contrast(1.5) saturate(0) brightness(0)",
              // filter:
              //   "drop-shadow(0px 0px 5px rgba(0,0,0,0.5)) contrast(1.5) saturate(0) brightness(10)",
            }}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              backgroundColor: background,
              transform: "translate(50%, -50%)",
              top: "50%",
              right: "50%",
              position: "absolute",
              borderRadius: "15px",
              transition: "all 0.2s ease-in-out",
            }}
            width={{
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "40%",
              xl: "30%",
            }}
            height={"max-content"}
            padding={5}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              padding={1}
              borderRadius={"1rem"}
              marginBottom={"1rem"}
              width={"100%"}
              gap={2}
              sx={{
                fontSize: "2rem",
              }}
            >
              <FaBalanceScale size="3rem" />
              سامانه هوشمند داوری
            </Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginLayout;
