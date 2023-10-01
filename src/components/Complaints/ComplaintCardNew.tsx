/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from "@apollo/client";
import {
  Autocomplete,
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Department, GET_DEPARTMENTS } from "../../GraphQL/Departments/Queries";
import {
  Green,
  GreenLight,
  Red,
  background,
  primary,
  primaryLight,
  primaryLightTransparent,
} from "../../theme/color";
import NewModal from "../Modals";
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
  const [addModal, setAddModal] = useState({
    open: false,
  });

  const style = {
    width: "100%",
    border: `1px solid ${primary}`,
    borderRadius: "0.5rem",
  };

  const { data: departmentData } = useQuery(GET_DEPARTMENTS);
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        pt: "0.5rem",
        backgroundColor: "white",
        display: "grid",
        gridTemplateColumns: "repeat(5,auto)",
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
          lg: "0.9rem",
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
          lg: "0.9rem",
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
          lg: "0.9rem",
        }}
        sx={{ userSelect: "none" }}
      >
        تاریخ ثبت:
        {new Date(props.date!).toLocaleDateString("fa-IR")}
      </Typography>
      <Typography
        textAlign={"center"}
        fontSize={{
          xs: "0.8rem",
          sm: "0.6rem",
          md: "0.8rem",
          lg: "0.9rem",
        }}
        sx={{ userSelect: "none" }}
      >
        خوانده:
        {
          departmentData?.department_getDepartments?.result.items.find(
            (item: Department) => item.id === props.acusserId
          ).title
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
                      {props.id}
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
                      خوانده:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: primary,
                      }}
                    >
                      {
                        departmentData?.department_getDepartments?.result.items.find(
                          (item: Department) => item.id === props.acussedId
                        ).title
                      }
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
                      {
                        departmentData?.department_getDepartments?.result.items.find(
                          (item: Department) => item.id === props.acusserId
                        ).title
                      }
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
                      {props.state}
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
                      {props.contractId}
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
                      {props.projectId}
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
                      {new Date(props.date!).toLocaleDateString("fa-IR")}
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
                setAddModal({
                  open: true,
                });
              }}
            >
                ارسال شکایت
           </Button>
            <NewModal
              open={addModal.open}
              onClose={() => {
                setAddModal({
                  open: false,
                });
              }}
              height={"70dvh"}
              isCloseable={true}
              background={background}
              name={"کارشناس مورد نظر را انتخاب کنید"}
              width={{
                xs: "90vw",
                sm: "80vw",
                md: "60vw",
                lg: "50vw",
              }}
            >
              <Box width={"100%"} height={"50dvh"} display={"flex"} flexDirection={"column"}>
                <Autocomplete
                  disablePortal
                  options={top100Films}
                  sx={{ width: "100%", gridColumn: "9/span 4" }}
                  renderInput={(params) => (
                    <TextField {...params} label="نام بخش خواهان" />
                  )}
                  onChange={(_e, value) => {
                    console.log(value);
                    // @ts-ignore
                  }}
                />
                <Button
                  sx={{
                    borderRadius: "0.5rem",
                    backgroundColor: Green,
                    color: "white",
                    "&:hover": {
                      backgroundColor: GreenLight,
                      color: Green,
                    },
                    mt:"0.5rem"
                  }}
                  onClick={() => {
                    setAddModal({
                      open: true,
                    });
                  }}
                >
                   ارسال شکایت
                </Button>
              </Box>
            </NewModal>
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
                  color: "white",
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
