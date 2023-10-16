/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation, useQuery } from "@apollo/client";
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
import {
  DELETE_COMPLAINT,
  UPDATE_COMPLAINT,
} from "../../GraphQL/Complaints/Mutations";
import {
  Department,
  GET_DEPARTMENTS,
} from "../../GraphQL/Departments/Queries";
import { GET_DEPARTMENTS_USERS } from "../../GraphQL/Users/Queries";
import { convertToPersianDigits } from "../../functions/Functions";
import { ComplaintStatus, User } from "../../static/Types";
import states from "../../static/states.json";
import {
  Green,
  GreenLight,
  Red,
  background,
  primary,
  primaryDark,
  primaryLight,
  primaryLightTransparent,
  secondary,
  secondaryDark,
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
  state?: number;
  summary?: string;
  projectId?: number;
  type?: "accused" | "accuser" | "assigned";
  refetch?: ()=>void 
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
    border: `1px solid ${secondary}`,
    borderRadius: "0.5rem",
  };

  const [assignedUser, setAssignedUser] = useState<{
    fullName: string;
    id: string;
  }>();
  const { data: departmentData } = useQuery(GET_DEPARTMENTS);
  const [departmentsUsers, setDepartmentsUsers] = useState<User[]>(
    []
  );
  const [updateComplaint] = useMutation(UPDATE_COMPLAINT);
  const [deleteComplaint] = useMutation(DELETE_COMPLAINT, {
    variables: {
      id: props.id,
    },
    onCompleted(data, clientOptions) {
      props.refetch && props.refetch()
    },
  });
  useQuery(GET_DEPARTMENTS_USERS, {
    variables: {
      departmentId: props.acussedId,
    },
    onCompleted(data) {
      console.log("departmentsUsersData", data);

      data.user_getUsers.result.items.forEach((item: User) => {
        // @ts-ignore
        setDepartmentsUsers((prev: User) => [
          // @ts-ignore
          ...prev,
          {
            label: item.firstName + " " + item.lastName,
            id: item.id,
          },
        ]);
      });
    },
  });
  return (
    <Box
      sx={{
        width: "100%",
        // pt: "0.5rem",
        backgroundColor: "white",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        alignItems: "center",
        // borderRadius: "5px",
        gap: "0.5rem",
        rowGap: 0,
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
        sx={{ userSelect: "none", paddingBlock: "0.5rem" }}
      >
        شماره قرارداد:
        {convertToPersianDigits(props.contractId)}
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
        شماره درخواست داوری:
        {convertToPersianDigits(props.id)}
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
            (item: Department) =>
              item.id === props.acussedId
          ).title
        }
      </Typography>
      <Button
        onClick={handleOpen}
        sx={{
          borderRadius: "0 0 0 0",
          height: "100%",
          color: secondary,
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
        value={
          // @ts-ignore
          ((states[ComplaintStatus[props.state!]].id - 2) / 33) * 100
        }
        sx={{
          gridColumn: "span 5",
          height: 5,
          background: primaryLightTransparent,
          "& .MuiLinearProgress-bar": {
            background: secondary,
            borderRadius: 2,
          },
          "& .MuiLinearProgress-root": {
            background: primaryLight,
          },
          // borderBottomLeftRadius: 5,
          // borderBottomRightRadius: 5,
        }}
      />
      <NewModal
        open={open}
        onClose={handleClose}
        height={"70dvh"}
        isCloseable={true}
        background={background}
        name={"درخواست داوری"}
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
                    borderBottom: `1px solid ${secondary}`,
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
                        color: secondaryDark,
                      }}
                    >
                      شماره درخواست داوری:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {convertToPersianDigits(props.id)}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      خوانده:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {
                        departmentData?.department_getDepartments?.result.items.find(
                          (item: Department) =>
                            item.id=== props.acussedId
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
                        color: secondaryDark,
                      }}
                    >
                      خواهان:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {
                        departmentData?.department_getDepartments?.result.items.find(
                          (item: Department) =>
                            item.id === props.acusserId
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
                        color: secondaryDark,
                      }}
                    >
                      وضعیت:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {/* @ts-ignore */}
                      {states[ComplaintStatus[props.state!-1]].fa}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      شماره قرارداد:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {convertToPersianDigits(props.contractId)}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      borderBottom: `2px solid ${grey[300]}`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      شماره طرح:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {props.projectId}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      تاریخ ثبت:
                    </TableCell>
                    <TableCell
                      sx={{
                        color: secondaryDark,
                      }}
                    >
                      {new Date(props.date!).toLocaleDateString(
                        "fa-IR"
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            display={props.type != "accused" ? "none" : "grid"}
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
              ارسال درخواست داوری به کارشناس
            </Button>
          </Box>
          <Box
            display={props.type != "assigned" ? "none" : "grid"}
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
                
                if(states[ComplaintStatus[props.state!-1] as keyof typeof states]?.id == 3){
                  navigate(`/complaints/${props.contractId}/${props.id}/UpdateContractPage`);
                }else{
                  navigate(`${props.contractId}/${props.id}/addArguements/1`);
                }
              }}
            >
              پاسخ به درخواست داوری
            </Button>
          </Box>
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
            <Box
              width={"100%"}
              height={"20dvh"}
              display={"flex"}
              flexDirection={"column"}
              sx={{
                border: `1px solid ${primary}`,
                borderRadius: "0.5rem",
                gap: "1rem",
                p: "1rem",
                justifyContent: "space-between",
              }}
            >
              <Autocomplete
                disablePortal
                options={departmentsUsers}
                sx={{ width: "100%", gridColumn: "9/span 4" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="نام کارشناس برای ارجاع"
                  />
                )}
                onChange={(_e, value) => {
                  console.log(value);
                  setAssignedUser({
                    // @ts-ignore
                    fullName: value?.label,
                    // @ts-ignore
                    id: value?.id,
                  });
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
                  mt: "0.5rem",
                }}
                onClick={() => {
                  void updateComplaint({
                    variables: {
                      id: props.id,
                      assignedUserId: assignedUser?.id,
                    },

                    onCompleted(data) {
                      console.log(data);
                    },
                  });
                  setAddModal({
                    open: false,
                  });
                }}
              >
                ارسال درخواست داوری به کارشناس
              </Button>
            </Box>
          </NewModal>
          <Box
            display={props.type != "accuser" ? "none" : "grid"}
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
              onClick={() => {
                const agree = confirm(
                  "آیا از انصراف از این درخواست داوری مطمئن هستید؟"
                );
                if (agree) {
                  void deleteComplaint();
                }
              }}
            >
              انصراف از درخواست داوری
            </Button>
            <Button
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: primaryDark,
                color: "white",
                "&:hover": {
                  backgroundColor: primary,
                  color: "white",
                },
              }}
              onClick={() => {
                navigate(`${props.contractId}/${props.id}/addArguements/0`);
              }}
            >
              ادامه درخواست داوری
            </Button>
          </Box>
        </Box>
      </NewModal>
    </Box>
  );
};

export default ComplaintCardNew;
