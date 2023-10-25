/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Box, BoxProps } from "@mui/material";
import React from "react";
import { primary, secondary, secondaryDark } from "../theme/color";

interface TreeChartProps extends BoxProps {
  object?: {
    fullName: string;
    children?: TreeChartProps["object"][];
  };
  stage?: number;
  gridColumn?: string;
  gridRow?: string;
}
const TreeChart = (props: TreeChartProps) => {
  // if stage is undefined, set it to 0
  const stage = props.stage ?? 0;

  const object = {
    fullName: "وزارت راه و شهرسازی",
    id: "1f0056b7-c46d-4f88-ba4c-808637baf2ac",
    children: {
      fullName: "شرکت راه آهن جمهوری اسلامی ایران",
      id: "4bf19d0c-8f2c-4cc5-a37f-ba8b496bbc5c",
      children: {
        fullName: "شرکت راه آهن اراک",
        id: "ea9f658c-b54d-4dc5-8164-2d6d3696213a",
      },
    },
  };
  return (
    <Box
      {...props}
      sx={{
        display: props.object ? "flex" : "none",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
        color: secondaryDark,
        gridColumn: props.gridColumn,
        gridRow: props.gridRow,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          color: primary,
          backgroundColor: secondary,
          padding: "0.5rem",
          borderRadius: "0.5rem",
          fontSize: "75%",
        }}
      >
        {props.object?.fullName}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          margin: "1rem",
          marginBlock: 0,
          borderLeft: `1px dashed ${primary}`,
          justifyContent: "center",
          alignItems: "start",
          paddingLeft: "1rem",
          borderRadius: "0.5rem",
          borderBottom: stage == 0 ? `1px dashed ${primary}` : "none",
        }}
      >
        {props.object?.children?.map((child, index) => (
          <TreeChart key={index} object={child} stage={stage + 1} />
        ))}
        {/* {JSON.stringify(props.object?.children)} */}
      </Box>
    </Box>
  );
};

export default TreeChart;
