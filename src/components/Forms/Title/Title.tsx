import { Box, Typography } from "@mui/material";
import React from "react";
import { primary } from "../../../theme/color";
interface Props {
  title?: string;
  id: string;
  children?: React.ReactNode;
  setValue?: (value: string) => void;
  value?: string;
}
const Title = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        outline: `1px solid ${primary}`,
        borderRadius: "15px",
        marginBlock: "2rem",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "-15px",
          left: "15px",
          backgroundColor: "white",
          paddingInline: "10px",
          color: primary,
        }}
      >
        {props.title}
      </Typography>
      {props.children}
    </Box>
  );
};

export default Title;
