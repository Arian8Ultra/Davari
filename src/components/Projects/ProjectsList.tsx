/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  Box,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { primaryGrey, primaryTransparent } from "../../theme/color";
import theme from "../../theme/theme";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 110,
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
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          },
          color: !trigger ? "black" : "white",
        }}
      >
        <Typography textAlign={"center"}>نام طرح</Typography>

        <Typography textAlign={"center"}>شماره طرح</Typography>

        <Typography textAlign={"center"}>تاریخ شروع</Typography>

        <Typography textAlign={"center"}>تاریخ پایان</Typography>

        <Typography textAlign={"center"}>وضعیت</Typography>
        <Typography textAlign={"center"}>شماره پیگیری</Typography>
        <Typography textAlign={"center"}>تاریخ ثبت</Typography>
      </Box>

      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20,
      ].map((item, index) => (
        <ProjectsCard
          id={item}
          key={index}
          title={"طرح شماره " + item}
          projectNumber={"123456789"}
          startDate={new Date()}
          endDate={new Date()}
          status={"در حال اجرا"}
          trackingNumber={"123456789"}
          createdDate={new Date()}
        />
      ))}
    </Stack>
  );
};

export default ProjectsList;
