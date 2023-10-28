/* eslint-disable @typescript-eslint/no-explicit-any */
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
  CircularProgress,
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
import { useNavigate } from "react-router-dom";
import {
  DELETE_COMPLAINT,
  UPDATE_COMPLAINT,
} from "../../GraphQL/Complaints/Mutations";
import { convertToPersianDigits } from "../../functions/Functions";
import { States, StatesCap, StatesFa } from "../../static/States";
import { User } from "../../static/Types";
import states from "../../static/states.json";
import {
  Green,
  GreenLight,
  Red,
  background,
  primary,
  primaryDark,
  primaryLightTransparent,
  secondary,
  secondaryDark,
} from "../../theme/color";
import NewModal from "../Modals";
import {
  GET_ALL_ORGANIZATION_USERS,
  GET_USER,
  GET_USER_QUERIABLE,
} from "../../GraphQL/Users/Queries";
import { useUserStore } from "../../Context/UserStore";
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
  type?: "accused" | "accuser" | "assigned";
  refetch?: () => void;
}
const ComplaintCardNew = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useUserStore((state) => state.user);
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
  const [departmentsUsers, setDepartmentsUsers] = useState<User[]>(
    []
  );
  const [updateComplaint] = useMutation(UPDATE_COMPLAINT);
  const [deleteComplaint] = useMutation(DELETE_COMPLAINT, {
    variables: {
      id: props.id,
    },
    onCompleted() {
      props.refetch && props.refetch();
    },
  });

  const { data: accuser } = useQuery(GET_USER, {
    variables: {
      id: props.acusserId,
    },
    onCompleted(data) {
      props.acusser = data.user_getUser?.result;
    },
  });

  const { data: accused } = useQuery(GET_USER, {
    variables: {
      id: props.acussedId,
    },
    onCompleted(data) {
      props.acussed = data.user_getUser?.result;
    },
  });

  useQuery(GET_USER_QUERIABLE, {
    variables: {
      id: user.id,
    },
    onCompleted(data) {
      console.log("IndivisualsFromOrg", data);
      setDepartmentsUsers(
        data.user_getUserQueryable?.result?.items[0]?.childUsers?.map(
          (user: any) => ({
            id: user.id,
            label: user.fullName,
          })
        )
      );
    },
  });

  const [, setDepartments] = useState<
    { label: string; id: string }[]
  >([]);
  useQuery(GET_ALL_ORGANIZATION_USERS, {
    onCompleted(data) {
      console.log(data);
      setDepartments(
        data?.user_getUsers?.result?.items?.map(
          (item: { id: number; fullName: string }) => ({
            label: item.fullName,
            id: item.id,
          })
        )
      );
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        // pt: "0.5rem",
        backgroundColor: "white",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridAutoColumns: "1fr",
        alignItems: "center",
        borderRadius: "10px",
        gap: "0.5rem",
        rowGap: 0,
        cursor: "pointer",
        "&:hover": {
          background: "rgba(240,240,240)",
        },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gridColumn={"span 2"}
        padding={"0.5rem"}
        onClick={handleOpen}
      >
        <Typography fontWeight={700}>
          شماره درخواست :{convertToPersianDigits(props.id)}
        </Typography>
        <Typography>
          شماره قرارداد :{convertToPersianDigits(props.contractId)}
        </Typography>
        <Typography>
          خواهان : {accuser?.user_getUser?.result?.fullName}
        </Typography>
        <Typography>
          خوانده :{accused?.user_getUser?.result?.fullName}
        </Typography>
      </Box>
      <Box
        position={"relative"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={handleOpen}
      >
        <CircularProgress
          size={"88%"}
          variant="determinate"
          value={100}
          thickness={1.75}
          sx={{
            gridColumn: "3",
            padding: "1rem",
            position: "absolute",
            translate: "-50% -50%",
            top: "50%",
            right: "50%",
            "& .MuiCircularProgress-circle": {
              backgroundColor: "rgba(0,0,0,1)",
              color: secondary,
              borderRadius: "0.5rem",
            },
            "&.MuiCircularProgress-circleDeterminate": {
              borderRadius: "1rem",
              background:'red'
            },
          }}
        />
        <CircularProgress
          size={"90%"}
          variant="determinate"
          thickness={3.5}
          value={
            // @ts-ignore
            (StatesCap.indexOf(props.state) / StatesCap.length).toFixed(2) * 100
          }
          sx={{
            width: "90%",
            gridColumn: "3",
            padding: "1rem",
            borderRadius: "1rem",
            // gridRow: "1/3",
            "& .MuiCircularProgress-circle": {
              backgroundColor: "rgba(0,0,0,1)",
              color: primary,
              borderRadius: "1rem",
            }
          }}
        />
        <Typography
          position={"absolute"}
          textAlign={"center"}
          fontSize={"1.4rem"}
          sx={{
            translate: "-50% -50%",
            top: "50%",
            right: "55%",
          }}
        >
          {String(
            convertToPersianDigits(
              // @ts-ignore
              (StatesCap.indexOf(props.state) / 44).toFixed(2) * 100
            )
          ).split(".")[0] + "%"}
        </Typography>
      </Box>

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
                      {accused?.user_getUser?.result?.fullName}
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
                      {accuser?.user_getUser?.result?.fullName}
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
                      {StatesFa[StatesCap.indexOf(props.state)]}
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
                  {/* <TableRow
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
                  </TableRow> */}
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
                if (
                  States[StatesCap.indexOf(props.state!)] ==
                  states.WaitingForAccusedToFillForms.name
                ) {
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/UpdateContractPage`
                  );
                } else {
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/1`
                  );
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
                navigate(
                  `/complaints/${props.contractId}/${props.id}/addArguements/0`
                );
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
