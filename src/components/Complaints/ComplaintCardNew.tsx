import {
  Box,
  Button,
  LinearProgress,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
        ":hover": { backgroundColor: "#DAFFFB" },
        gap: "0.5rem",
      }}
    >
      <Typography
        textAlign={"center"}
        fontSize={"16px"}
        sx={{ fontWeight: "light" }}
      >
        شماره قرارداد:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography textAlign={"center"}>
        شماره شکایت:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography textAlign={"center"}>
        شماره پرونده:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography textAlign={"center"}>
        تاریخ ثبت:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Button onClick={handleOpen}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>شماره شکایت</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>شماره قرارداد</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>شماره طرح </TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>شماره پرونده</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>شماره ثبت</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>تاریخ ثبت</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>خوانده</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>خواهان</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>وضعیت</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>خلاصه</TableCell>
                  <TableCell>خلاصه</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </Box>
  );
};

export default ComplaintCardNew;
