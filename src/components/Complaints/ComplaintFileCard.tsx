/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Download } from "@mui/icons-material";
import { Box } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            bgcolor: Green,
            // background:`linear-gradient(90deg,${primary},${Green})`,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            ":hover": {
              bgcolor: primary,
              transition: "all 0.2s ease-in-out",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: grey[300],
              justifyContent: "center",
              alignItems: "center",
              bgcolor: Red,
              // background:`linear-gradient(90deg,${primary},${Green})`,
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              ":hover": {
                bgcolor: red[500],
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <Download
              sx={{ color: grey[300] }}
              onClick={() => {
                props.fileName &&
                  window.open(
                    "http://172.16.23.50:7030/files/letters/" +
                      props.fileName +
                      ".pdf"
                  );
              }}
            />
            PDF
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: grey[300],
              justifyContent: "center",
              alignItems: "center",
              bgcolor: Blue,
              // background:`linear-gradient(90deg,${primary},${Green})`,
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              ":hover": {
                bgcolor: blue[500],
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <Download
              sx={{ color: grey[300] }}
              onClick={() => {
                props.fileName &&
                  window.open(
                    "http://172.16.23.50:7030/files/letters/" +
                      props.fileName +
                      ".docx"
                  );
              }}
            />
            DOCX
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ComplaintFileCard;
