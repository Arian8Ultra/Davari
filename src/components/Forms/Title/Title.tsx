/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Typography } from "@mui/material";
import React from "react";
import { primary } from "../../../theme/color";
import { useQuery } from "@apollo/client";
import { GET_TITLE } from "../../../GraphQL/Form/Titles/Queies";
import FormObjectWihQuery from "../../FormObj/FormObjectWihQuery";
interface Props {
  id: number;
  children?: React.ReactNode;
  // setValue?: (value: string) => void;
  // value?: string;
  row?: number;
}
const Title = (props: Props) => {
    const { data: dataTitle } = useQuery(GET_TITLE, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log("dataTitle :", data);
    },
  });
  return (
    <Box
      sx={{
        gridRow: props.row && `${props.row}`,
        gridColumn: "1/span 12",
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
        {dataTitle?.formTitle_getFormTitle?.result?.content}
      </Typography>
      {dataTitle?.formTitle_getFormTitle?.result?.formObjectFormTitles.map((item:{
        formObjectId: number
        formTitleId: number
        gridColumn: number
        gridColumnStart: number
        gridRow: number
        id: number
      })=>(
        <FormObjectWihQuery
        id={item.formObjectId}
        gridColumn={item.gridColumn}
        gridRow={item.gridRow}
        girdColumnStart={item.gridColumnStart}
        key={item.id}
        name=""
        />
      ))}

      {props.children}
    </Box>
  );
};

export default Title;
