/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Download } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import {
  Blue,
  Green,
  Red,
  RedLight,
  background,
  primary,
} from "../../theme/color";
import FaTypography from "../FaComponents/FaTypography";

interface Props {
  gridColumn?: string;
  title?: string;
  complaintId?: number;
  description?: string | null;
  id?: number;
  fileName?: string;
}
const ComplaintFileCard = (props: Props) => {
  return (
    <Box
      sx={{
        background: background,
        borderRadius: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        boxShadow: 4,
        overflow: "clip",
      }}
    >
      <Box
        gridColumn={"span 4"}
        sx={{ display: "flex", flexDirection: "column", padding: 2 }}
      >
        <FaTypography
          fontSize={"1.2rem"}
          sx={{
            wordWrap: "break-word",
            textOverflow: "ellipsis",
            overflow: "clip",
          }}
        >
          {props.title}
        </FaTypography>

        <FaTypography
          fontSize={"1rem"}
          color={grey[500]}
          sx={{
            wordWrap: "break-word",
            textOverflow: "ellipsis",
            overflow: "clip",
          }}
        >
          {props.description ? props.description : "بدون توضیحات"}
        </FaTypography>
      </Box>
      {props.fileName && (
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: Green,
            borderRadius: "0",
            // background:`linear-gradient(90deg,${primary},${Green})`,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            ":hover": {
              bgcolor: green[500],
              borderRadius: "1rem",
              transition: "all 0.2s ease-in-out",
            },
          }}
          onClick={() => {
            props.fileName &&
              window.open(
                "http://172.16.23.50:7030/files/letters/" +
                  props.fileName +
                  ".docx"
              );
          }}
          // href={
          //   "http://172.16.23.50:7030/files/letters/" +
          //   props.fileName +
          //   ".docx"
          // }
        >
          <Download sx={{ color: grey[300] }} />
        </IconButton>
      )}
    </Box>
  );
};

export default ComplaintFileCard;
