/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  Box,
  Collapse,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

interface Props {
  title?: string | number | object;
  number?: string;
  status?: string;
  description?: string;
  id: string | number;
  progress?: number;
}
const ComplaintCard = (props: Props) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={openCollapse ? 2 : 0}
      sx={{
        backgroundColor: "rgba(255,255,255,1)",
        padding: 2,
        borderRadius: 5,
        transition: "all 0.3s ease",
        scrollSnapAlign: "start",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateAreas={`"title title number number status icon"
            "progress progress progress progress progress progress"

        `}
        gap={2}
        sx={{
          // outline: "1px solid red",
          userSelect: "none",
        }}
        onClick={() => {
          setOpenCollapse(!openCollapse);
        }}
      >
        <Typography textAlign={"center"} gridArea={"title"}>
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography textAlign={"center"} gridArea={"number"}>
          شماره شکایت:
          {
            // if number is not provided, use id + "number"
            props.number ? props.number : props.id + " number "
          }
        </Typography>
        <Typography textAlign={"center"} gridArea={"status"}>
          شماره پرونده:
          {
            // if status is not provided, use id + "status"
            props.status ? props.status : props.id + " status "
          }
        </Typography>
        <Typography textAlign={"center"}>
          شماره طرح:
          {
            // if status is not provided, use id + "status"
            props.status ? props.status : props.id + " status "
          }
        </Typography>
     
        <Box
          gridArea={"icon"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          {openCollapse ? <BsArrowUpShort /> : <BsArrowDownShort />}
        </Box>

        <LinearProgress
          variant={"buffer"}
          // change color of progress bar based on status
          value={25}
          sx={{
            gridArea: "progress",
            height: 10,
            borderRadius: 5,
          }}
        />
      </Box>
      <Collapse in={openCollapse}>
        <Box
          sx={{
            backgroundColor: "rgba(50,50,120,0.1)",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography>توضیحات:</Typography>
          <Typography>
            {
              // if title is not provided, use id + title
              props.description
                ? props.description
                : props.id + " description "
            }
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ComplaintCard;
