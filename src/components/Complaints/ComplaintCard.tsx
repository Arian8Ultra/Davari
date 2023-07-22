/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Box, LinearProgress, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  title?: string;
  number?: string;
  status?: string;
  id: string | number;
  progress?: number;
}
const ComplaintCard = (props: Props) => {
    const [openCollapse, setOpenCollapse] = useState(false)
  return (
    <Box
      display={"grid"}
      width={"100%"}
      gridTemplateAreas={`   "title number status"
            "progress progress progress"

        `}
      gap={2}
      sx={{
        backgroundColor: "rgba(255,255,255,1)",
        padding: 2,
        borderRadius: 5,
      }}
    >
      <Typography textAlign={"center"} gridArea={"title"}>
        عنوان: 
        {
            // if title is not provided, use id + title
            props.title ? props.title : props.id + " title "
        }
      </Typography>
      <Typography textAlign={"center"} gridArea={"number"}>
        شناسه شکایت:
        {
            // if number is not provided, use id + "number"
            props.number ? props.number : props.id + " number "
        }
      </Typography>
      <Typography textAlign={"center"} gridArea={"status"}>
        وضعیت:
        {
            // if status is not provided, use id + "status"
            props.status ? props.status : props.id + " status "
        }
      </Typography>

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
  );
};

export default ComplaintCard;
