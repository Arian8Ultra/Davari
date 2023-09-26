import {
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  background,
  primary,
  primaryLightTransparent
} from "../../theme/color";
import NewModal from "../Modals";
interface Props {
  id: number;
  complaintId?: number;
  conteactId?: number;
  date?: string;
  acussed?: string;
  acussedId?: number;
  acusser?: string;
  acusserId?: number;
  state?: string;
  summary?: string;
  projectId?: number;
}
const ComplaintCardNew = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: "100%",
    border: `1px solid ${primary}`,
    borderRadius: "0.5rem",
  };

  return (
    <Box
      sx={{
        width: "100%",
        pt: "0.5rem",
        backgroundColor: "white",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        alignItems: "center",
        borderRadius: "5px",
        // ":hover": { backgroundColor: "#DAFFFB" },
        gap: "0.5rem",
      }}
    >
      <Typography
        textAlign={"center"}
        fontSize={"16px"}
        sx={{ userSelect: "none" }}
      >
        شماره قرارداد:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography textAlign={"center"} sx={{ userSelect: "none" }}>
        شماره شکایت:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography textAlign={"center"} sx={{ userSelect: "none" }}>
        شماره پرونده:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography textAlign={"center"} sx={{ userSelect: "none" }}>
        تاریخ ثبت:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Button
        onClick={handleOpen}
        sx={{
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: primaryLightTransparent,
          },
        }}
      >
        <FiMoreHorizontal />
      </Button>
      <LinearProgress
        variant={"buffer"}
        // change color of progress bar based on status
        value={25}
        sx={{
          gridColumn: "span 5",
          height: 10,
          // borderRadius: 5,
        }}
      />
      <NewModal
        open={open}
        onClose={handleClose}
        height={"70dvh"}
        isCloseable={true}
        background={background}
        name={"شکایت"}
        width={{
          xs: "90vw",
          sm: "80vw",
          md: "60vw",
          lg: "50vw",
        }}
      >
        <Box sx={style}>
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: primaryLightTransparent,
                  borderBottom: `1px solid ${primary}`,
                }}
              >
                <TableRow
                  sx={{
                    borderBottom: `1px solid ${primary}`,
                  }}
                >
                  <TableCell
                    sx={{
                      color: primary,
                    }}
                  >
                    شماره شکایت
                  </TableCell>
                  <TableCell
                    sx={{
                      color: primary,
                    }}
                  >
                    خلاصه
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>شماره شکایت:</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </NewModal>
    </Box>
  );
};

export default ComplaintCardNew;
