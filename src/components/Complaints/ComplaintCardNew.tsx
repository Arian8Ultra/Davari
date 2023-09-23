import { Box, Collapse, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { primaryGreyTransparent } from "../../theme/color";
interface Props {
  id: number;
  complaintId: number;
  conteactId: number;
  date: string;
  acussed: string;
  acussedId: number;
  acusser: string;
  acusserId: number;
  state: string;
  summary: string;
  projectId: number;
}
const ComplaintCardNew = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      display={"block"}
      sx={{ width: "100%", backgroundColor: "white" }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          // padding: "1rem",
          paddingTop: "1rem",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => setOpen(!open)}
      >
        <Typography
          textAlign={"center"}
          sx={{
            userSelect: "none",
          }}
        >
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{
            userSelect: "none",
          }}
        >
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{
            userSelect: "none",
          }}
        >
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{
            userSelect: "none",
          }}
        >
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <LinearProgress variant="determinate" value={50} sx={{
          height: 7,
          marginTop: "1rem",
          width: "100%",
          gridColumn: "1/5",
        }} />
      </Box>
      <Collapse in={open} timeout="auto">
        <Box
          sx={{
            width: "100%",
            backgroundColor: primaryGreyTransparent,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            padding: "1rem",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              userSelect: "none",
            }}
          >
            شماره قرارداد:
            {
              // if title is not provided, use id + title
              // props.title ? String(props.title) : String(props.id) + " title "
            }
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              userSelect: "none",
            }}
          >
            شماره قرارداد:
            {
              // if title is not provided, use id + title
              // props.title ? String(props.title) : String(props.id) + " title "
            }
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              userSelect: "none",
            }}
          >
            شماره قرارداد:
            {
              // if title is not provided, use id + title
              // props.title ? String(props.title) : String(props.id) + " title "
            }
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              userSelect: "none",
            }}
          >
            شماره قرارداد:
            {
              // if title is not provided, use id + title
              // props.title ? String(props.title) : String(props.id) + " title "
            }
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ComplaintCardNew;
