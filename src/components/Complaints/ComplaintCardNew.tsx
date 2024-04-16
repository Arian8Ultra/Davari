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
import { FileOpenOutlined } from "@mui/icons-material";
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
import { BsCloudUploadFill, BsExclamation } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  ComplaintState,
  ComplaintStateStatus,
  ResponsibleUserType,
  useAddComplaintFileMutationMutation,
  useGetFileFullLazyQuery,
  useSendAssignToExpertSmsMutation,
  useSendComplaintGotCancelledSmsMutation,
  useUpdateComplaintFullMutation,
} from "../../../generated-types";
import { useUserStore } from "../../Context/UserStore";
import { DELETE_COMPLAINT } from "../../GraphQL/Complaints/Mutations";
import {
  GET_ALL_ORGANIZATION_USERS,
  GET_USER,
  GET_USER_QUERIABLE,
} from "../../GraphQL/Users/Queries";
import { UPLOAD_FILE } from "../../api/upload";
import { getComplaintStateWithEnum } from "../../functions/ComplaintStatesFunc";
import { convertToPersianDigits } from "../../functions/Functions";
import { User } from "../../static/Types";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  background,
  primary,
  primaryDark,
  primaryLightTransparent,
  secondary,
  secondaryDark,
} from "../../theme/color";
import FileBox from "../FileBox";
import NewModal from "../Modals";
import TextInput from "../TextInput";
import router from "../../Routes/Router";
interface Props {
  id: number;
  trackingCode?: string;
  complaintId?: number;
  contractId?: number;
  contractNumber?: string;
  date?: string;
  acussed?: string;
  acussedId?: string;
  acusser?: string;
  acusserId?: string;
  state?: ComplaintStateStatus;
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
  complaintState?: ComplaintState;
  refetch?: () => void;
}
const ComplaintCardNew = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File>();
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

  const [sendAssignToExpertSMS] = useSendAssignToExpertSmsMutation({
    variables: {
      complaintId: props.id,
    },
  });

  const [assignedUser, setAssignedUser] = useState<{
    fullName: string;
    id: string;
  }>();
  const [departmentsUsers, setDepartmentsUsers] = useState<User[]>([]);
  const [expertsCouncilPaymentCost, setExpertsCouncilPaymentCost] =
    useState<number>();
  const [updateComplaint] = useUpdateComplaintFullMutation();
  const [deleteComplaint] = useMutation(DELETE_COMPLAINT, {
    variables: {
      id: props.id,
    },
    onCompleted() {
      props.refetch && props.refetch();
      void sendComplaintGotCancelledSMS();
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

  const [, setDepartments] = useState<{ label: string; id: string }[]>([]);
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

  const [addFile] = useAddComplaintFileMutationMutation();
  const [getFile] = useGetFileFullLazyQuery();
  const [sendComplaintGotCancelledSMS] =
    useSendComplaintGotCancelledSmsMutation({
      variables: {
        complaintId: props.id,
      },
    });

  const buttons = () => {
    switch (props.state) {
      case ComplaintStateStatus.WaitingForAccuserToRegisterContract:
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
                    `/complaints/${props.contractId}/${props.id}/update/contractPageToFill`
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
      case ComplaintStateStatus.WaitingForAccuserToRegisterComplaint:
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
      // case ComplaintStateStatus.WaitingForAccusedToRegisterArbitrationTerms:
      //   if (props.type == "accuser")
      //     return (
      //       <Box
      //         display={"grid"}
      //         gridTemplateColumns={"repeat(2,1fr)"}
      //         mt={"1rem"}
      //         gap={"6rem"}
      //       >
      //         <Button
      //           sx={{
      //             borderRadius: "0.5rem",
      //             backgroundColor: Red,
      //             color: "white",
      //             "&:hover": {
      //               backgroundColor: red[100],
      //               color: Red,
      //             },
      //           }}
      //           onClick={() => {
      //             const agree = confirm(
      //               "آیا از انصراف از این درخواست داوری مطمئن هستید؟"
      //             );
      //             if (agree) {
      //               void deleteComplaint();
      //             }
      //           }}
      //         >
      //           انصراف از درخواست داوری
      //         </Button>
      //         <Button
      //           sx={{
      //             borderRadius: "0.5rem",
      //             backgroundColor: primaryDark,
      //             color: "white",
      //             "&:hover": {
      //               backgroundColor: primary,
      //               color: "white",
      //             },
      //           }}
      //           onClick={() => {
      //             navigate(
      //               `/complaints/${props.contractId}/${props.id}/addComplaint`
      //             );
      //           }}
      //         >
      //           ادامه درخواست داوری
      //         </Button>
      //       </Box>
      //     );
      //   else {
      //     break;
      //   }

      case ComplaintStateStatus.WaitingForAccuserToRegisterArbitrationTerms:
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
      case ComplaintStateStatus.WaitingForAccuserToRegisterArguments:
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

      case ComplaintStateStatus.WaitingForAccuserToApproveArguments:
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

      case ComplaintStateStatus.WaitingForAccusedToRegisterContract:
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
                      `/complaints/${props.contractId}/${props.id}/update/contractPageToFill`
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
                    `/complaints/${props.contractId}/${props.id}/update/contractPageToFill`
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
      case ComplaintStateStatus.WaitingForAccusedToRegisterArbitrationTerms:
        if (props.type == "accused" || props.type == "assigned")
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
      case ComplaintStateStatus.WaitingForAccusedToAnswerArguments:
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
      case ComplaintStateStatus.WaitingForAccusedToApproveArgumentsAnswers:
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

      case ComplaintStateStatus.WaitingForAccuserToViewArguments:
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

      case ComplaintStateStatus.WaitingForAccuserToApproveAccusedAnswers:
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

      case ComplaintStateStatus.WaitingForChiefToAssign:
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
      case ComplaintStateStatus.CheckingForBeingConstructive:
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
                  navigate(`/contract/${props.contractId}/${props.id}`, {
                    state: {
                      complaintId: props.id,
                    },
                  });
                }}
              >
                مشاهده قرارداد و بررسی احراز شرایط داوری
              </Button>
            </Box>
          );
        else {
          break;
        }
      case ComplaintStateStatus.WaitingForMailRoomExpertToGiveAnswersToArguments:
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
                ComplaintStateStatus.WaitingForMailRoomExpertToGiveAnswersToArguments
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
      case ComplaintStateStatus.AcceptedForBeingConstructive:
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
              props.state == ComplaintStateStatus.AcceptedForBeingConstructive
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
      case ComplaintStateStatus.WaitingForMailRoomExpertToApproveAnswersToArguments:
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
              // @ts-ignore
              props.state ==
                ComplaintStateStatus.WaitingForMailRoomExpertToGiveAnswersToArguments
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

      case ComplaintStateStatus.WaitingForChiefToApproveExpertsAnswersToArguments:
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

      case getComplaintStateWithEnum(
        ComplaintStateStatus.WaitingForFirstPayment
      ).state:
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
                  navigate(`/complaints/${props.id}/pay/1`);
                }}
              >
                پرداخت هزینه اول داوری
              </Button>
            </Box>
          );
        } else {
          break;
        }

      case getComplaintStateWithEnum(
        ComplaintStateStatus.WaitingForMailRoomExpertToDownloadDecree
      ).state:
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
                    `http://172.16.23.50:7030/files/Decree_253645234_0345.docx`
                  );
                  void updateComplaint({
                    variables: {
                      input: {
                        complaintStateId: getComplaintStateWithEnum(
                          ComplaintStateStatus.WaitingForExpertsCouncilPayment
                        ).id,
                        id: props.id,
                      },
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

      case getComplaintStateWithEnum(
        ComplaintStateStatus.WaitingForExpertsCouncilPayment
      ).state:
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
                  navigate(`/complaints/${props.id}/pay/2`);
                }}
              >
                پرداخت هزینه قوه قضایی
              </Button>
            </Box>
          );
        } else {
          break;
        }
      case getComplaintStateWithEnum(ComplaintStateStatus.DeterminingCaseExpert)
        .state:
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
                    `/signUp/determiningCaseExpert/newUser/${props.id || ""}`
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
      case getComplaintStateWithEnum(
        ComplaintStateStatus.DeterminingMeetingByMailRoomExpert
      ).state:
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
          else {
            break;
          }
        }

      case ComplaintStateStatus.CheckingAndUploadingTheSignedDecree:
        if (props.type == "mainRoomExpert" || props.type == "chief") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(3,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <div className="">آپلود قرار نامه امضا شده : </div>

              <FileBox setFiles={setFiles} files={files} fullWidth />
              <Button
                sx={{
                  borderRadius: "0.5rem",
                  backgroundColor: primaryDark,
                  color: "white",
                  gap: "0.5rem",
                  "&:hover": {
                    backgroundColor: primary,
                    color: "white",
                  },
                }}
                disabled={!files}
                onClick={() => {
                  void UPLOAD_FILE({
                    file: files,
                    token: localStorage.getItem("token") as string,
                    onFail: (err) => {
                      console.log(err);
                    },
                    onSuccess(res) {
                      console.log(res);
                      void getFile({
                        variables: {
                          filter: {
                            name: {
                              eq: res.result?.[0]?.newFileName,
                            },
                          },
                        },
                        onCompleted(data) {
                          console.log("File", data);
                          void addFile({
                            variables: {
                              input: {
                                complaintId: props.id,
                                title: "قرارنامه امضا شده",
                                fileId:
                                  data.fileGallery_getFiles.result?.items?.[0]
                                    ?.id,
                              },
                            },
                            onCompleted(data, clientOptions) {
                              console.log("addedFile", data);
                              if (
                                data.complaintFile_addComplaintFile.status
                                  .code == 1
                              ) {
                                void updateComplaint({
                                  variables: {
                                    input: {
                                      id: props.id,
                                      complaintStateId:
                                        getComplaintStateWithEnum(
                                          ComplaintStateStatus.RequestingDocuments
                                        ).id,
                                    },
                                  },
                                  onCompleted(data, clientOptions) {
                                    props.refetch && props.refetch();
                                  },
                                });
                              }
                            },
                          });
                        },
                      });
                      // void addFile({
                      //   variables:{
                      //     input:{
                      //       complaintId: props.id,
                      //       title: "قرارنامه امضا شده",

                      //     }
                      //   }
                      // })
                    },
                  });
                }}
              >
                <BsCloudUploadFill />
                ثبت و آپلود
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }

      case ComplaintStateStatus.RequestingDocuments:
        if (props.type == "juryExpert") {
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
                  navigate(`/complaints/${props.id}/docReq`);
                }}
              >
                مشاهده درخواست داوری و درخواست مدارک مورد نیاز
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.UploadingDocumentsByAccused:
        if (props.type == "accused") {
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
                  navigate(`/complaints/${props.id}/docUpload`);
                }}
              >
                آپلود مدارک مورد نیاز
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.UploadingDocumentsByAccuser:
        if (props.type == "accuser") {
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
                  navigate(`/complaints/${props.id}/docUpload`);
                }}
              >
                آپلود مدارک مورد نیاز
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }

      case ComplaintStateStatus.ReviewingCaseByCaseExpert:
        if (props.type == "juryExpert") {
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
                  navigate(`/complaints/${props.id}/expertReview`);
                }}
              >
                بررسی درخواست داوری و مدارک
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.MailRoomExpertReviewingTheFinalReport:
        if (props.type == "mainRoomExpert") {
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
                    // complaints/:contractId/:complaintId/addArguements/:state
                    `/complaints/${props.contractId}/${props.id}/addArguements/4`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
              >
                بررسی درخواست داوری
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.MailRoomChiefReviewingTheFinalReport:
        if (props.type == "chief") {
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
                    // complaints/:contractId/:complaintId/addArguements/:state
                    `/complaints/${props.contractId}/${props.id}/addArguements/5`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
              >
                بررسی درخواست داوری
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }

      case ComplaintStateStatus.WaitingForCouncilResult:
        if (props.type == "mainRoomExpert") {
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
                    // complaints/:contractId/:complaintId/addArguements/:state
                    `/complaints/${props.contractId}/${props.id}/addArguements/6`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
              >
                افزودن نظر شورای
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.WaitingForFinalResultUpload:
        if (props.type == "mainRoomExpert") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
            >
              <div className=""></div>
              {/* <Button
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
              </Button> */}
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
                  navigate(`/complaints/${props.id}/verdict`);
                }}
              >
                افزودن رای نهایی
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.WaitingForSecondPayment:
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
                  navigate(`/complaints/${props.id}/pay/3`);
                }}
              >
                پرداخت هزینه دوم داوری
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }
      case ComplaintStateStatus.WaitingForDeterminingExpertsCouncilPayment:
        if (props.type === "chief" || props.type === "mainRoomExpert") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
            >
              <TextInput
                variant="outlined"
                label="مبلغ هزینه کارشناسی"
                value={expertsCouncilPaymentCost}
                onChange={(e) => {
                  setExpertsCouncilPaymentCost(parseInt(e.target.value) || 0);
                }}
                InputProps={{
                  endAdornment: "ریال",
                }}
              />

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
                  void updateComplaint({
                    variables: {
                      input: {
                        id: props.id,
                        expertArbitrationCost: expertsCouncilPaymentCost,
                        complaintStateId: getComplaintStateWithEnum(
                          ComplaintStateStatus.WaitingForExpertsCouncilPayment
                        ).id,
                      },
                    },
                  });
                }}
              >
                تایید مبلغ
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }

      case ComplaintStateStatus.WaitingForExpertsCouncilPayment:
        if (props.type === "accuser") {
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
                  void updateComplaint({
                    variables: {
                      input: {
                        id: props.id,
                        // expertArbitrationCost: expertsCouncilPaymentCost,
                        complaintStateId: getComplaintStateWithEnum(
                          ComplaintStateStatus.DeterminingCaseExpert
                        ).id,
                      },
                    },
                  });
                }}
              >
                پرداخت هزینه کارشناسی
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
        }

        // case getComplaintStateWithEnum(ComplaintStateStatus.DeterminingCaseExpert):
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
                  `/signUp/determiningCaseExpert/newUser/${props.id || ""}`
                );
              }}
            >
              افزودن کارشناس
            </Button>
          </Box>
        );
      case ComplaintStateStatus.ComplaintDetermined:
        if (props.type == "accuser" || props.type == "accused") {
          return (
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              mt={"1rem"}
              gap={"6rem"}
            >
              {/* <div className=""></div> */}
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
                    // complaints/:contractId/:complaintId/addArguements/:state
                    `/complaints/${props.id}/files`,
                    {
                      state: {
                        complaintId: props.id,
                      },
                    }
                  );
                }}
              >
                مشاهده فایل ها
              </Button>
              <Button
                sx={{
                  borderRadius: "0.5rem",
                  backgroundColor: RedLight,
                  color: Red,
                  "&:hover": {
                    backgroundColor: primary,
                    color: "white",
                  },
                }}
                onClick={() => {
                  navigate(`/complaints/${props.id}/requestCorrection`, {
                    state: {
                      complaintId: props.id,
                    },
                  });
                }}
              >
                درخواست اصلاح
              </Button>
            </Box>
          );
        } else {
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
          else {
            break;
          }
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

  const AlertNotif = () => {
    if (
      props.complaintState?.responsibleRole == ResponsibleUserType.Accused &&
      props.type == "accused"
    ) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "0rem",
            right: "0rem",
            zIndex: 100,
            borderRadius: "0 0 0 0.8rem",
            width: "2rem",
            // height: "1rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(255, 64, 129)",
            color: "white",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
          }}
        >
          <BsExclamation
            style={{
              fontSize: "1.8rem",
            }}
          />
        </Box>
      );
    } else if (
      props.complaintState?.responsibleRole == ResponsibleUserType.Accuser &&
      props.type == "accuser"
    ) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "0rem",
            right: "0rem",
            zIndex: 100,
            borderRadius: "0 0 0 0.8rem",
            width: "2rem",
            // height: "1rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(255, 64, 129)",
            color: "white",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
          }}
        >
          <BsExclamation
            style={{
              fontSize: "1.8rem",
            }}
          />
        </Box>
      );
    } else if (
      props.complaintState?.responsibleRole ==
        ResponsibleUserType.MailRoomExpert &&
      props.type == "mainRoomExpert"
    ) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "0rem",
            right: "0rem",
            zIndex: 100,
            borderRadius: "0 0 0 0.8rem",
            width: "2rem",
            // height: "1rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(255, 64, 129)",
            color: "white",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
          }}
        >
          <BsExclamation
            style={{
              fontSize: "1.8rem",
            }}
          />
        </Box>
      );
    } else if (
      props.complaintState?.responsibleRole ==
        ResponsibleUserType.LegalExpert &&
      props.type == "juryExpert"
    ) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "0rem",
            right: "0rem",
            zIndex: 100,
            borderRadius: "0 0 0 0.8rem",
            width: "2rem",
            // height: "1rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(255, 64, 129)",
            color: "white",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
          }}
        >
          <BsExclamation
            style={{
              fontSize: "1.8rem",
            }}
          />
        </Box>
      );
    } else if (
      props.complaintState?.responsibleRole ==
        ResponsibleUserType.MailRoomChief &&
      props.type == "chief"
    ) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "0rem",
            right: "0rem",
            zIndex: 100,
            borderRadius: "0 0 0 0.8rem",
            width: "2rem",
            // height: "1rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(255, 64, 129)",
            color: "white",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
          }}
        >
          <BsExclamation
            style={{
              fontSize: "1.8rem",
            }}
          />
        </Box>
      );
    } else {
      return null;
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
        position: "relative",
        gridTemplateColumns: "repeat(4,1fr)",
        gridAutoColumns: "1fr",
        alignItems: "center",
        borderRadius: "10px",
        gap: "0.5rem",
        rowGap: 0,
        cursor: "pointer",
        overflow: "clip",
        transition: "all 0.2s ease",
        "&:hover": {
          // background: "rgba(240,240,240)",
          scale: "1.02",
          boxShadow: "5px 5px 20px rgba(0,0,0,0.2)",
        },
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <AlertNotif />
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
            شناسه قرارداد :
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
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          sx={{
            borderTop: "1px solid #ccc",
            paddingTop: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
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
              width: "100%",
            }}
            textAlign={"center"}
          >
            {
              getComplaintStateWithEnum(
                props.state || ComplaintStateStatus.ComplaintDetermined
              )?.persianName
            }
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
          width: "100%",
        }}
      ></Box>

      <LinearProgress
        value={
          // @ts-ignore
          (
            getComplaintStateWithEnum(
              props.state || ComplaintStateStatus.ComplaintDetermined
            )?.priority / 54
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
                  {props.trackingCode && (
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
                        کد پیگیری:
                      </TableCell>
                      <TableCell
                        sx={{
                          color: secondaryDark,
                        }}
                      >
                        {convertToPersianDigits(props.trackingCode)}
                      </TableCell>
                    </TableRow>
                  )}

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
                      {
                        getComplaintStateWithEnum(
                          props.state ||
                            ComplaintStateStatus.ComplaintDetermined
                        )?.persianName
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
                      شناسه قرارداد :
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
                      {new Date(props.date!).toLocaleDateString("fa-IR")}
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
                  <TextField {...params} label="نام کارشناس برای ارجاع" />
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
                    props.state == ComplaintStateStatus.WaitingForChiefToAssign
                  ) {
                    void updateComplaint({
                      variables: {
                        input: {
                          id: props.id,
                          assignedUserId: assignedUser?.id,
                          complaintStateId: getComplaintStateWithEnum(
                            ComplaintStateStatus.CheckingForBeingConstructive
                          ).id,
                        },
                      },

                      onCompleted(data) {
                        console.log(data);
                        alert("درخواست داوری با موفقیت ارسال شد");
                      },
                    });
                  } else {
                    void updateComplaint({
                      variables: {
                        input: {
                          id: props.id,
                          assignedUserId: assignedUser?.id,
                        },
                      },

                      onCompleted(data) {
                        console.log(data);
                        alert("درخواست داوری با موفقیت ارسال شد");
                      },
                    });
                  }
                  void sendAssignToExpertSMS();
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
