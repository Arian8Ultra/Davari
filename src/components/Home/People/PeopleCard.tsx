/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { User } from "../../../static/Types";
import { Card, Stack, Typography } from "@mui/material";
import { primary, secondaryLighter } from "../../../theme/color";
interface PeopleCardProps {
  people: {
    id: number;
    firstName: string;
    lastName: string;
    nationalCode: string;
    email?: string;
  }[];
  columns?: string;
  rows?: string;
}
const PeopleCard = ({ people, columns, rows }: PeopleCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "40dvh",
        gridColumn: columns,
        gridRow: rows,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        background: "rgba(200,200,200,0.7)",
        borderRadius: "1rem",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        // textAlign={"center"}
        sx={{
          background: "rgba(255,255,255,0.3)",
          width: "100%",
          padding: "1rem",
          paddingInline:'3rem'
        }}
      >
        کارشناسان
      </Typography>
      <Stack
        width={"100%"}
        height={"100%"}
        overflow={"auto"}
        spacing={1}
        sx={{ padding: "1rem" }}
      >
        {people.map((person) => (
          <Card
            key={person.id}
            sx={{
              width: "100%",
            //   height: "10vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(255,255,255,0.2)",
              boxShadow:"0",
              borderRadius: "0.5rem",
              padding: "1.5rem",
            }}
          >
            <Typography variant="body2" component="h2">
              {person.firstName + " " + person.lastName}
            </Typography>
            <Typography variant="body2" component="h2">
              {person.nationalCode}
            </Typography>
            <Typography variant="body2" component="h2">
              {person.email}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Card>
  );
};

export default PeopleCard;
