/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { PublicContract } from "../../gql/graphql";
import { Box, Typography } from "@mui/material";
interface Props extends PublicContract {
  type: "small" | "detailed";
}
const ContractCard = (props: Props) => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"1fr 1fr"}
      gap={2}
      sx={{
        padding: 2,
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: "100%",
        transition: "all 0.3s",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        },
      }}
    >
      <Typography
        variant={"body2"}
        sx={{ color: "black", gridColumn: "span 2" }}
      >
        شناسه :{props.contractID}
      </Typography>
      <Typography
        variant={"body2"}
        sx={{ color: "black", gridColumn: "span 2" }}
      >
        عنوان قرارداد : {props.fullName}
      </Typography>
      <Typography
        variant={"body2"}
        sx={{ color: "black", gridColumn: "span 2" }}
      >
        کارفرما : {props.executiveTitle}
      </Typography>
    </Box>
  );
};

export default ContractCard;
