/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  BoxProps,
  Typography,
  useScrollTrigger
} from "@mui/material";
import { useRef, useState } from "react";
import {
  primaryGrey,
  primaryTransparent,
} from "../../../theme/color";
import theme from "../../../theme/theme";
import MessagesCard from "./MessagesCard";


interface Props extends BoxProps{
  isMobile?: boolean
}
const MessagesList = (props: Props) => {
  const { isMobile, ...rest } = props
  const [scrollTarget, setScrollTarget] = useState(undefined) 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    // set the target as stack ref
    target: scrollTarget,
  });
  
  return (
    <Box
    {...rest}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      id='scrollableDiv'
      ref={(node)=>{
        if(node){
          // @ts-ignore
          setScrollTarget(node)
        }
      }}
      maxHeight={`calc(100vh - ${theme.spacing(20)})`}
      sx={{
        overflow: "auto",
        gap: 0,
        backgroundColor: primaryTransparent,
        // padding: trigger ? 0 : 2,
        borderRadius: 2,
        boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)",
        "&::-webkit-scrollbar": {
          width: '10px',
          height: '10px'
        },
        "&::-webkit-scrollbar-track": {
          background: 'transparent'
        },
        "&::-webkit-scrollbar-thumb": {
          background: 'var(--color-primaryLight)',
          borderRadius: '0px 50px 50px 0px'
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: '#555'
        }
      }}
    >
            <Box
        sx={{
          backgroundColor: primaryGrey,
          backdropFilter: "blur(10px) ",
          width: "100%",
          height: "100%",
          padding: 2,
          // borderRadius: trigger ? "0px" : "10px 10px 0px 0px",
          // borderBottom: !trigger ? "1px solid grey" : "none",
          position: "sticky",
          top: theme.spacing(0),
          // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography textAlign={"center"}>نامه ها</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: !trigger
            ? "rgba(255,255,255,0.6)"
            : primaryGrey,
          backdropFilter: "blur(10px) ",
          width: "100%",
          height: "100%",
          padding: 2,
          // borderRadius: trigger ? "0px" : "10px 10px 0px 0px",
          borderBottom: !trigger ? "1px solid grey" : "none",
          position: "sticky",
          top: theme.spacing(0),
          // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
            lg: "repeat(6, 1fr)",
          },
          color: !trigger ? "black" : "white",
        }}
      >
        <Typography textAlign={"center"} fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}>شماره نامه</Typography>

        <Typography textAlign={"center"} fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}>عنوان</Typography>


        <Typography textAlign={"center"} fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}>تاریخ</Typography>
        <Typography textAlign={"center"} fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}>مبدا</Typography>

        <Typography textAlign={"center"} fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}>مقصد</Typography>
        <Typography textAlign={"center"} fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}>وضعیت</Typography>
      </Box>

      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
      ].map((item) => (
        <MessagesCard
          key={item}
          id={item}
          date={new Date()}
          from='مدیریت مالی'
          to='مدیریت مالی'
          title='تاییدیه پرداخت'
          number={item.toString()}
          status='در انتظار تایید'
        />
      ))}
    </Box>
  );
};

export default MessagesList;
