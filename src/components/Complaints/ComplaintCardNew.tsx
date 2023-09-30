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
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  background,
  primary,
  primaryLight,
  primaryLightTransparent,
} from "../../theme/color";
import NewModal from "../Modals";
import { grey, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
interface Props {
  id: number;
  complaintId?: number;
  contractId?: number;
  date?: string;
  acussed?: string;
  acussedId?: number;
  acusser?: string;
  acusserId?: number;
  state?: string;
  summary?: string;
  projectId?: number;
  type?: "accused" | "accuser";
}
const ComplaintCardNew = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

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
        gap: "0.5rem",
      }}
    >
      <Typography
        textAlign={"center"}
        fontSize={{
          xs: "0.8rem",
          sm: "0.6rem",
          md: "0.8rem",
          lg: "1rem",
        }}
        sx={{ userSelect: "none" }}
      >
        شماره قرارداد:
        {props.contractId}
      </Typography>
      <Typography
        textAlign={"center"}
        fontSize={{
          xs: "0.8rem",
          sm: "0.6rem",
          md: "0.8rem",
          lg: "1rem",
        }}
        sx={{ userSelect: "none" }}
      >
        شماره شکایت:
        {props.id}
      </Typography>
      <Typography
        textAlign={"center"}
        fontSize={{
          xs: "0.8rem",
          sm: "0.6rem",
          md: "0.8rem",
          lg: "1rem",
        }}
        sx={{ userSelect: "none" }}
      >
        شماره پرونده:
        {
          // if title is not provided, use id + title
          // props.title ? String(props.title) : String(props.id) + " title "
        }
      </Typography>
      <Typography
        textAlign={"center"}
        fontSize={{
          xs: "0.8rem",
          sm: "0.6rem",
          md: "0.8rem",
          lg: "1rem",
        }}
        sx={{ userSelect: "none" }}
      >
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
        variant={"determinate"}
        // change color of progress bar based on status
        value={25}
        sx={{
          gridColumn: "span 5",
          height: 10,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
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
        <Box width={"100%"}>
          <Box sx={style}>
            <TableContainer>
              <Table>
                <TableHead
                  sx={{
                    backgroundColor: primaryLightTransparent,
                    borderBottom: `1px solid ${primary}`,
                  }}
                ></TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره شکایت:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره شکایت
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      خونده:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      خونده
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      خواهان:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      خواهان
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      وضعیت:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      وضعیت
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      خلاصه:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      خلاصه
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره قرارداد:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره قرارداد
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره طرح:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره طرح
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره پروژه:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      شماره پروژه
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      تاریخ ثبت:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      تایخ ثبت
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            display={props.type == "accuser" ? "none" : "grid"}
            gridTemplateColumns={"repeat(2,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
            <Button
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: Red,
                color: "white",
                "&:hover": {
                  backgroundColor: red[100],
                  color: Red,
                },
              }}
              onClick={handleClose}
            >
              انصراف
            </Button>
            <Button
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: Green,
                color: "white",
                "&:hover": {
                  backgroundColor: GreenLight,
                  color: Green,
                },
              }}
              onClick={() => {
                navigate(`${props.id}/addArguements/1`);
              }}
            >
              پاسخ به شکایت
            </Button>
          </Box>
          <Box
            display={props.type == "accused" ? "none" : "grid"}
            gridTemplateColumns={"repeat(2,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
            <Button
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: Red,
                color: "white",
                "&:hover": {
                  backgroundColor: red[100],
                  color: Red,
                },
              }}
              onClick={handleClose}
            >
              انصراف
            </Button>
            <Button
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: primary,
                color: "white",
                "&:hover": {
                  backgroundColor: primaryLight,
                  color: 'white',
                },
              }}
              onClick={() => {
                navigate(`${props.id}/addArguements/0`);
              }}
            >
              ادامه شکایت
            </Button>
          </Box>
        </Box>
      </NewModal>
    </Box>
  );
};

export default ComplaintCardNew;
