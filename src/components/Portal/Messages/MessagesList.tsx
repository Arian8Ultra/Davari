import { Box, Stack, Typography, useScrollTrigger } from "@mui/material"
import { primaryGrey, primaryTransparent } from "../../../theme/color"
import theme from "../../../theme/theme";
import MessagesCard from "./MessagesCard";
import { useRef } from "react";

const MessagesList = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        target: window ? window : undefined,
      });
  return (
    <Stack
      width={"100%"}
      spacing={0}
      sx={{
        // outline: '1px solid red',
        backgroundColor: primaryTransparent,
        padding: 2,
        borderRadius: 2,
        boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          backgroundColor: !trigger
            ? "rgba(255,255,255,0.6)"
            : primaryGrey,
          backdropFilter: "blur(10px) ",
          width: "100%",
          height: "100%",
          padding: 2,
          borderRadius: trigger ? "0px" : "10px 10px 0px 0px",
          borderBottom: !trigger ? "1px solid grey" : "none",
          position: "sticky",
          top: theme.spacing(8),
          // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
            lg: "repeat(6, 1fr)",
          },
          color: !trigger ? "black" : "white",
        }}
      >
        <Typography textAlign={"center"}>شماره نامه</Typography>

        <Typography textAlign={"center"}>عنوان</Typography>

        <Typography textAlign={"center"}>مبدا</Typography>

        <Typography textAlign={"center"}>مقصد</Typography>

        <Typography textAlign={"center"}>تاریخ</Typography>
        <Typography textAlign={"center"}>وضعیت</Typography>
      </Box>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((item) => (
        <MessagesCard
            key={item}
            id={item}
            date={new Date()}
            from="مدیریت مالی"
            to="مدیریت مالی"
            title="تاییدیه پرداخت"
            number={item.toString()}
            status="در انتظار تایید"
        />
      ))}

    </Stack>
  )
}

export default MessagesList