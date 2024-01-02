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
import { BoySharp, FileOpenOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
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
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../Context/UserStore";
import {
  DELETE_COMPLAINT,
  UPDATE_COMPLAINT,
} from "../../GraphQL/Complaints/Mutations";
import {
  GET_ALL_ORGANIZATION_USERS,
  GET_USER,
  GET_USER_QUERIABLE,
} from "../../GraphQL/Users/Queries";
import { convertToPersianDigits } from "../../functions/Functions";
import {
  ComplaintState,
  UpdateComplaintDocument,
} from "../../gql/graphql";
import {
  newStatesCap,
  newStatesFa,
  newStatesObj,
} from "../../static/States";
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
interface Props {
  id: number;
  complaintId?: number;
  contractId?: number;
  contractNumber?: string;
  date?: string;
  acussed?: string;
  acussedId?: string;
  acusser?: string;
  acusserId?: string;
  state?: string;
  summary?: string;
  projectId?: number;
  type?:
    | "accused"
    | "accuser"
    | "assigned"
    | "chief"
    | "mainRoomExpert"
    | "juryExpert"
    | "all";
  departmentId?: string;
  isPortal?: boolean;
  refetch?: () => void;
}
const ComplaintCardNew = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
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
  const [updateComplaint] = useMutation(UpdateComplaintDocument);
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
      id: user.userType == "ORGANIZATION" ? user.id : user.parentId,
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

  const buttons = () => {
    switch (props.state) {
      case newStatesObj.waitingForAccuserToRegisterContract.cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                    `/complaints/${props.contractId}/${props.id}/UpdateContractPage`
                  );
                }}
              >
                ادامه درخواست داوری
              </Button>
            </Box>
          );
        else {
          break;
        }
      case newStatesObj.waitingForAccuserToRegisterComplaint.cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                    `/complaints/${props.contractId}/${props.id}/addComplaint`
                  );
                }}
              >
                ادامه درخواست داوری
              </Button>
            </Box>
          );
        else {
          break;
        }

      case newStatesObj.waitingForAccuserToRegisterArbitrationTerms
        .cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                    `/complaints/${props.contractId}/${props.id}/addComplaint`
                  );
                }}
              >
                ادامه درخواست داوری
              </Button>
            </Box>
          );
        else {
          break;
        }
      case newStatesObj.waitingForAccuserToRegisterArguments.cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                ادامه درخواست داوری و افزودن دعاوی
              </Button>
            </Box>
          );
        else {
          break;
        }

      case newStatesObj.waitingForAccuserToApproveArguments.cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                ادامه درخواست داوری و افزودن دعاوی
              </Button>
            </Box>
          );
        else {
          return (
            <Box
              display={"grid"}
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
            </Box>
          );
        }

      case newStatesObj.waitingForAccusedToRegisterContract.cap:
        if (props.type == "accused") {
          if (user.userType == "INDIVIDUAL")
            return (
              <Box
                display={"grid"}
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
            );
          else {
            return (
              <Box
                display={"grid"}
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
                    navigate(
                      `/complaints/${props.contractId}/${props.id}/UpdateContractPage`
                    );
                  }}
                >
                  پاسخ به درخواست داوری
                </Button>
              </Box>
            );
          }
        } else if (props.type == "assigned") {
          return (
            <Box
              display={"grid"}
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
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/UpdateContractPage`
                  );
                }}
              >
                پاسخ به درخواست داوری
              </Button>
            </Box>
          );
        } else {
          return (
            <Box
              display={"grid"}
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
            </Box>
          );
        }
      case newStatesObj.waitingForAccusedToRegisterArbitrationTerms
        .cap:
        if (props.type == "accused")
          return (
            <Box
              display={"grid"}
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
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addComplaint`
                  );
                }}
              >
                پاسخ به درخواست داوری
              </Button>
            </Box>
          );
        else {
          break;
        }
      case newStatesObj.waitingForAccusedToAnswerArguments.cap:
        if (props.type == "accused")
          return (
            <Box
              display={"grid"}
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
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/1`
                  );
                }}
              >
                پاسخ به درخواست داوری
              </Button>
            </Box>
          );
        else {
          break;
        }
      case newStatesObj.waitingForAccusedToApproveArgumentsAnswers
        .cap:
        if (props.type == "accused")
          return (
            <Box
              display={"grid"}
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
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/1`
                  );
                }}
              >
                پاسخ به درخواست داوری
              </Button>
            </Box>
          );
        else {
          break;
        }

      case newStatesObj.waitingForAccuserToViewArguments.cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                  backgroundColor: Green,
                  color: "white",
                  "&:hover": {
                    backgroundColor: GreenLight,
                    color: Green,
                  },
                }}
                onClick={() => {
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/-1`
                  );
                }}
              >
                مشاهده پاسخ خوانده
              </Button>
            </Box>
          );
        else {
          break;
        }

      case newStatesObj.waitingForAccuserToApproveAccusedAnswers.cap:
        if (props.type == "accuser")
          return (
            <Box
              display={"grid"}
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
                  backgroundColor: Green,
                  color: "white",
                  "&:hover": {
                    backgroundColor: GreenLight,
                    color: Green,
                  },
                }}
                onClick={() => {
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/-1`
                  );
                }}
              >
                مشاهده پاسخ خوانده
              </Button>
            </Box>
          );
        else {
          break;
        }

      case newStatesObj.waitingForChiefToAssign.cap:
        if (props.type == "chief")
          return (
            <Box
              display={"grid"}
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
          );
        else {
          break;
        }
      case newStatesObj.checkingForBeingConstructive.cap:
        if (props.type == "mainRoomExpert")
          return (
            <Box
              display={"grid"}
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
                  navigate(
                    `/contract/${props.contractId}/${props.id}`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
              >
                مشاهده قرارداد و تایید عمرانی بودن
              </Button>
            </Box>
          );
        else {
          break;
        }
      case newStatesObj
        .waitingForMailRoomExpertToGiveAnswersToArguments.cap:
        if (
          user.parentId == props.acusserId ||
          user.parentId == props.acusser ||
          user.id == props.acusserId ||
          user.id == props.acusser
        )
          return (
            <Box
              display={"grid"}
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
            </Box>
          );
        return (
          <Box
            display={
              props.type == "mainRoomExpert" &&
              props.state ==
                newStatesObj
                  .waitingForMailRoomExpertToGiveAnswersToArguments
                  .cap
                ? "grid"
                : "none"
            }
            gridTemplateColumns={"repeat(2,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
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
                navigate(
                  // complaints/:contractId/:complaintId/addArguements/:state
                  `/complaints/${props.contractId}/${props.id}/addArguements/2`,
                  {
                    state: {
                      complaintId: props.id,
                    },
                  }
                );
              }}
            >
              مشاهده دعاوی
            </Button>
          </Box>
        );
      case newStatesObj.acceptedForBeingConstructive.cap:
        if (
          user.parentId == props.acusserId ||
          user.parentId == props.acusser ||
          user.id == props.acusserId ||
          user.id == props.acusser
        )
          return (
            <Box
              display={"grid"}
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
            </Box>
          );
        return (
          <Box
            display={
              props.type == "mainRoomExpert" &&
              props.state ==
                newStatesObj.acceptedForBeingConstructive.cap
                ? "grid"
                : "none"
            }
            gridTemplateColumns={"repeat(2,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
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
                navigate(
                  // complaints/:contractId/:complaintId/addArguements/:state
                  `/complaints/${props.contractId}/${props.id}/addArguements/2`,
                  {
                    state: {
                      complaintId: props.id,
                    },
                  }
                );
              }}
            >
              مشاهده دعاوی
            </Button>
          </Box>
        );
      case newStatesObj
        .waitingForMailRoomExpertToApproveAnswersToArguments.cap:
        if (
          user.parentId == props.acusserId ||
          user.parentId == props.acusser ||
          user.id == props.acusserId ||
          user.id == props.acusser
        )
          return (
            <Box
              display={"grid"}
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
            </Box>
          );
        return (
          <Box
            display={
              props.type == "mainRoomExpert" &&
              props.state ==
                newStatesObj
                  .waitingForMailRoomExpertToGiveAnswersToArguments
                  .cap
                ? "grid"
                : "none"
            }
            gridTemplateColumns={"repeat(3,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
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
                navigate(
                  // complaints/:contractId/:complaintId/addArguements/:state
                  `/complaints/${props.contractId}/${props.id}/addArguements/2`,
                  {
                    state: {
                      complaintId: props.id,
                    },
                  }
                );
              }}
            >
              مشاهده دعاوی
            </Button>
          </Box>
        );

      case newStatesObj
        .waitingForChiefToApproveExpertsAnswersToArguments.cap:
        if (props.type == "chief") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
            >
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
                  navigate(
                    // complaints/:contractId/:complaintId/addArguements/:state
                    `/complaints/${props.contractId}/${props.id}/addArguements/3`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
              >
                مشاهده پاسخ کارشناس
              </Button>
            </Box>
          );
        } else {
          break;
        }

      case ComplaintState.WaitingForFirstPayment:
        if (props.type == "accuser") {
          return (
            <Box
              display={"grid"}
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
                  navigate(`/complaints/${props.id}/pay`);
                }}
              >
                پرداخت هزینه اول داوری
              </Button>
            </Box>
          );
        } else {
          break;
        }

      case ComplaintState.WaitingForMailRoomExpertToDownloadDecree:
        if (props.type == "mainRoomExpert") {
          return (
            <Box
              display={"grid"}
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
                  window.open(
                    `http://172.16.23.50:7030/files/letters/Decree_253645234_0345.docx`
                  );
                  void updateComplaint({
                    variables: {
                      complaintState:
                        ComplaintState.WaitingForExpertsCouncilPayment,
                      id: props.id,
                    },
                  });
                }}
              >
                دانلود و تایید قرارنامه
              </Button>
            </Box>
          );
        } else {
          break;
        }

      case ComplaintState.WaitingForExpertsCouncilPayment:
        if (props.type == "accuser") {
          return (
            <Box
              display={"grid"}
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
                  navigate(`/complaints/${props.id}/pay/100000`);
                }}
              >
                پرداخت هزینه قوه قضایی
              </Button>
            </Box>
          );
        } else {
          break;
        }
      case ComplaintState.DeterminingCaseExpert:
        if (props.type == "mainRoomExpert" || props.type == "chief") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
            >
              <div className=""></div>
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
                    `/signUp/determiningCaseExpert/${props.id}`
                  );
                }}
              >
                تعیین کارشناس پرونده
              </Button>
            </Box>
          );
        } else {
          break;
        }
      case ComplaintState.DeterminingMeetingByMailRoomExpert:
        if (props.type == "mainRoomExpert" || props.type == "chief") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
            >
              <div className=""></div>
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
                  navigate(`/complaints/${props.id}/setMeeting`);
                }}
              >
                تعیین زمان جلسه پرونده
              </Button>
            </Box>
          );
        } else {
          break;
        }

      default:
        if (
          user.parentId == props.acusserId ||
          user.parentId == props.acusser ||
          user.id == props.acusserId ||
          user.id == props.acusser
        )
          return (
            <Box
              display={"grid"}
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
            </Box>
          );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        // pt: "0.5rem",
        // minHeight : "150px",
        backgroundColor: "white",
        display: "grid",
        position:'relative',
        gridTemplateColumns: "repeat(4,1fr)",
        gridAutoColumns: "1fr",
        alignItems: "center",
        borderRadius: "10px",
        gap: "0.5rem",
        rowGap: 0,
        cursor: "pointer",
        overflow:'clip',
        "&:hover": {
          background: "rgba(240,240,240)",
        },
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gridColumn={"span 4"}
        padding={"0.7rem"}
        onClick={handleOpen}
        sx={{
          textOverflow: "ellipsis",
          overflow: "clip",
          transition: "all 0.3s ease",
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={{
            xs: "0.8rem",
            sm: "0.6rem",
            md: "0.8rem",
            lg: "1rem",
          }}
        >
          شماره درخواست :{convertToPersianDigits(props.id)}
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.8rem",
              lg: "1rem",
            }}
          >
            شماره قرارداد:
          </Typography>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.7rem",
              lg: "0.9rem",
            }}
            color={secondary}
          >
            {convertToPersianDigits(props.contractNumber)}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.8rem",
              lg: "1rem",
            }}
          >
            خواهان:
          </Typography>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.7rem",
              lg: "0.9rem",
            }}
            color={secondary}
          >
            {accuser?.user_getUser?.result?.fullName}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.8rem",
              lg: "1rem",
            }}
          >
            خوانده:
          </Typography>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.7rem",
              lg: "0.9rem",
            }}
            color={secondary}
          >
            {accused?.user_getUser?.result?.fullName}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1} sx={{
          borderTop:'1px solid #ccc',
          paddingTop:'0.5rem',
          marginTop:'0.5rem',
        }}>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.8rem",
              lg: "1rem",
            }}
          >
            وضعیت:
          </Typography>
          <Typography
            fontSize={{
              xs: "0.8rem",
              sm: "0.6rem",
              md: "0.7rem",
              lg: "0.8rem",
            }}
            color={secondary}
            sx={{
              width:'100%',
            }}
            textAlign={'center'}
          >
            {newStatesFa[newStatesCap.indexOf(props.state || "")]}
          </Typography>
        </Box>
      </Box>

      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gridColumn={"span 1"}
        onClick={handleOpen}
        sx={{
          // background: "red",
          width: "100%",
        }}
      >
        {/* <Box
          sx={{
            zIndex: 100,
            width: "100%",
            height: "100%",
            outlineColor: primary,
            padding: "0.2rem 0.5rem",
            borderRadius: "0.5rem",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            // wordWrap: "normal",
            // boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
          }}
        >

          <CircularProgress
            size={70}
            variant="determinate"
            value={100}
            thickness={1.75}
            sx={{
              // padding: "1rem",
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
                background: "red",
              },
            }}
          />
          <CircularProgress
            size={73}
            variant="determinate"
            thickness={3.5}
            value={
              // @ts-ignore
              (
                newStatesCap.indexOf(props.state || "") /
                newStatesCap.length
              ).toFixed(2) * 100
            }
            sx={{
              position: "absolute",
              translate: "-50% -50%",
              top: "50%",
              right: "50%",
              // gridRow: "1/3",
              "& .MuiCircularProgress-circle": {
                backgroundColor: "rgba(0,0,0,1)",
                color: primary,
                borderRadius: "1rem",
              },

              "&.MuiCircularProgress-circleDeterminate": {
                borderRadius: "1rem",
                background: "red",
              },
            }}
          />
          <Typography
            position={"absolute"}
            textAlign={"center"}
            fontSize={"1.4rem"}
            sx={{
              translate: "-50% -50%",
              top: "51%",
              right: "50%",
            }}
          >
            {String(
              convertToPersianDigits(
                // @ts-ignore
                (
                  newStatesCap.indexOf(props.state || "") /
                  newStatesCap.length
                ).toFixed(2) * 100
              )
            ).split(".")[0] + "%"}
          </Typography>
        </Box> */}
      </Box>

      <LinearProgress
        value={
          // @ts-ignore
          (
            newStatesCap.indexOf(props.state || "") /
            newStatesCap.length
          ).toFixed(2) * 100
        }
        variant="determinate"
        sx={{
          gridColumn: "span 4",
          height: "0.4rem",
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: grey[200],
          
          // change the color of the bar
          "& .MuiLinearProgress-bar": {
            backgroundColor: primary,
            borderRadius: "0.5rem",
          },
          // change the color of the track
          "& .MuiLinearProgress-root": {
            backgroundColor: secondary,
          },
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
          <Box display={"flex"} justifyContent={"flex-end"} m={1}>
            {props.isPortal && (
              <Button
                sx={{
                  borderRadius: "0.5rem",
                  backgroundColor: grey[700],
                  color: "white",
                  "&:hover": {
                    backgroundColor: grey[600],
                    color: "white",
                  },
                }}
                onClick={() => {
                  navigate(
                    // complaints/:contractId/:complaintId/addArguements/:state
                    `/complaints/${props.id}/files`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
                endIcon={<FileOpenOutlined />}
              >
                مشاهده نامه ها
              </Button>
            )}
          </Box>
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
                      {newStatesFa[newStatesCap.indexOf(props.state)]}
                      {/* {props.state} */}
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
                      {convertToPersianDigits(props.contractNumber)}
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
          {buttons()}
          {/* <Box
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
            display={
              props.type == "mainRoomExpert" &&
              props.state ==
                newStatesObj.checkingForBeingConstructive.cap
                ? "grid"
                : "none"
            }
            gridTemplateColumns={"repeat(2,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
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
                navigate(
                  `/contract/${props.contractId}/${props.id}`,
                  {
                    state: {
                      complaintId: props.id,
                    },
                  }
                );
              }}
            >
              مشاهده قرارداد و تایید عمرانی بودن
            </Button>
          </Box>
          <Box
            display={
              props.type == "mainRoomExpert" &&
              props.state ==
                newStatesObj
                  .waitingForMailRoomExpertToGiveAnswersToArguments
                  .cap
                ? "grid"
                : "none"
            }
            gridTemplateColumns={"repeat(2,1fr)"}
            mt={"1rem"}
            gap={"6rem"}
          >
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
                navigate(
                  // complaints/:contractId/:complaintId/addArguements/:state
                  `/complaints/${props.contractId}/${props.id}/addArguements/2`,
                  {
                    state: {
                      complaintId: props.id,
                    },
                  }
                );
              }}
            >
              مشاهده دعاوی
            </Button>
          </Box>

          <Box
            display={props.type != "chief" ? "none" : "grid"}
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
                  newStates[newStatesCap.indexOf(props.state!)] ==
                  "waitingForAccuserToRegisterContract"
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
          </Box> */}
          {/* <Box
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
                display:
                  props.state ==
                  newStatesObj.waitingForAccuserToViewArguments.cap
                    ? "flex"
                    : props.state ==
                      newStatesObj
                        .waitingForAccuserToRegisterArguments.cap
                    ? "flex"
                    : "none",
                "&:hover": {
                  backgroundColor: primary,
                  color: "white",
                },
              }}
              onClick={() => {
                if (
                  props.state ==
                  newStatesObj.waitingForAccuserToViewArguments.cap
                ) {
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/-1`
                  );
                } else if (
                  props.state ==
                  newStatesObj.waitingForAccuserToRegisterArguments
                    .cap
                ) {
                  navigate(
                    `/complaints/${props.contractId}/${props.id}/addArguements/0`
                  );
                }
              }}
            >
              {props.state ==
              newStatesObj.waitingForAccuserToViewArguments.cap
                ? "مشاهده پاسخ خوانده"
                : props.state ==
                  newStatesObj.waitingForAccuserToRegisterArguments
                    .cap
                ? "ادامه درخواست داوری و افزودن دعاوی"
                : ""}
            </Button>
          </Box> */}
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
                  if (
                    props.state ==
                    newStatesObj.waitingForChiefToAssign.cap
                  ) {
                    void updateComplaint({
                      variables: {
                        id: props.id,
                        assignedUserId: assignedUser?.id,
                        complaintState:
                          ComplaintState.CheckingForBeingConstructive,
                      },

                      onCompleted(data) {
                        console.log(data);
                        alert("درخواست داوری با موفقیت ارسال شد");
                      },
                    });
                  } else {
                    void updateComplaint({
                      variables: {
                        id: props.id,
                        assignedUserId: assignedUser?.id,
                      },

                      onCompleted(data) {
                        console.log(data);
                        alert("درخواست داوری با موفقیت ارسال شد");
                      },
                    });
                  }
                  setAddModal({
                    open: false,
                  });
                }}
              >
                ارسال درخواست داوری به کارشناس
              </Button>
            </Box>
          </NewModal>
        </Box>
      </NewModal>
    </Box>
  );
};

export default ComplaintCardNew;
