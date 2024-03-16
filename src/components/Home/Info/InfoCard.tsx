/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { primary } from "../../../theme/color";

interface InfoCardProps {
  data: {
    title: string;
    description: string;
    date: string;
  }[];
  columns?: string | object;
  rows?: string;
  topColor?: string;
  backgrounColor?: string;
}

const InfoCard = ({ data, columns, rows,topColor,backgrounColor }: InfoCardProps) => {
  return (
    <Card
    elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        gridColumn: columns,
        gridRow: rows,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        background: backgrounColor || primary,
        borderRadius: "1rem",
        
        // padding:'2rem',
        // paddingTop:'1rem'
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        textAlign={"center"}
        sx={{
          background: topColor || "rgba(255,255,255,0.3)",
          width: "100%",
          padding: "1rem",
          paddingInline:'3rem'
        }}
      >
         اطلاعیه ها
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2rem",
        //   background:'red',
          height: "80%",
          width: "100%",
        }}
      >
        <Typography variant="h6" component="h2" textAlign={'center'}>
          {data[0].title}
        </Typography>
        <Typography variant="body1" component="h2" textAlign={'justify'} sx={{
            textJustify:'inter-word'
        }}>
          {data[0].description}
        </Typography>
      </Box>
    </Card>
  );
};

export default InfoCard;
