/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useMutation } from "@apollo/client";
import { Box, Button, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { UserDelete, UserUpdate } from "../../../GraphQL/Users/Mutations";
import {
  Blue,
  BlueLight,
  Green,
  GreenLight,
  Red,
  RedLight,
  background,
  primary,
  primaryTransparent,
} from "../../../theme/color";
import NewModal from "../../Modals";
interface Props {
  firstName?: string;
  lastName?: string;
  personalCode?: string;
  department?: string;
  userName?: string;
  id: string | number;
  refetch: () => void;
}
const UserCard = (props: Props) => {
  const [editModal, setEditModal] = useState({
    open: false,
    username: "",
    firstName: "",
    lastName: "",
    nationalCode: "",
  });

  const [editUser] = useMutation(UserUpdate,{
    variables: {
      firstName: editModal.firstName,
      lastName: editModal.lastName,
      userName: editModal.username,
      nationalCode: editModal.nationalCode,
    },
    onCompleted(data) {
      console.log(data);      
      alert("کاربر با موفقیت ویرایش شد");
      props.refetch();
    },
    onError(error) {
      console.error(error);
      alert("مشکلی در ویرایش کاربر به وجود آمده است");
    }
  })
  const [deleteUser] = useMutation(UserDelete, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log(data);
      alert("کاربر با موفقیت حذف شد");
      props.refetch();
    },
    onError(error) {
      console.log(error);
      alert("مشکلی در حذف کاربر به وجود آمده است");
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,1)",
        width: "100%",
        height: "100%",
        padding: 1.5,
        borderBottom: "1px solid rgba(100,100,100,0.2)",
        display: "grid",
        alignItems: "center",
        gap: 1,
        gridTemplateAreas: {
          xs: `"firstName lastName personalCode" "operation operation operation"`,
          md: `"firstName lastName personalCode" "operation operation operation"`,
          lg: `"firstName lastName personalCode department status operation"`,
          xl: `"firstName lastName personalCode department status operation"`,
        },
        gridAutoColumns: "1fr",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.6)",
          cursor: "pointer",
        },
      }}
      onClick={() => {
        console.log(props.id);
      }}
    >
      <Typography
        gridArea={"firstName"}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.firstName && props.firstName}
      </Typography>

      <Typography
        gridArea={"lastName"}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.lastName && props.lastName}
      </Typography>

      <Typography
        gridArea={"personalCode"}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.personalCode ? props.personalCode : "ندارد"}
      </Typography>

      <Typography
        gridArea={"department"}
        display={{ xs: "none", md: "block" }}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
        // sx={{
        //   outline:'2px solid red'
        // }}
      >
        {props.department && props.department}
      </Typography>

      <Typography
        gridArea={"status"}
        display={{ xs: "none", md: "block" }}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
        // sx={{
        //   outline:'2px solid red'
        // }}
      >
        {props.userName && props.userName}
      </Typography>
      <Box
        gridArea={"operation"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // outline: "1px solid red",
          gap: 2,
          // width: "100%",
          // outline: "1px solid red",
        }}
      >
        <Tooltip title={"ویرایش کاربر"}>
          <IconButton
            sx={{
              // backgroundColor: Blue,
              outline: `2px solid ${Blue}`,
              color: Blue,
              "&:hover": {
                backgroundColor: BlueLight,
              },
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.4rem",
              },
            }}
            onClick={() => {
              setEditModal({
                open: true,
                username: props.userName ? props.userName : "",
                firstName: props.firstName ? props.firstName : "",
                lastName: props.lastName ? props.lastName : "",
                nationalCode: props.personalCode
                  ? props.personalCode
                  : "",
              });
            }}
          >
            <AiOutlineEdit />
          </IconButton>
        </Tooltip>
        <Tooltip title={"حذف کاربر"}>
          <IconButton
            onClick={() => {
              const agree = confirm(
                `آیا از حذف کاربر '${props.firstName} ${props.lastName}' مطمئن هستید؟`
              );
              if (agree) {
                void deleteUser();
              }
            }}
            sx={{
              // backgroundColor: Red,
              outline: `2px solid ${Red}`,
              color: Red,
              "&:hover": {
                backgroundColor: RedLight,
              },
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.4rem",
              },
            }}
          >
            <AiOutlineDelete />
          </IconButton>
        </Tooltip>

        <Tooltip title={"تغییر دسترسی ها"}>
          <IconButton
            sx={{
              // backgroundColor: Green,
              outline: `2px solid ${Green}`,
              color: Green,
              "&:hover": {
                backgroundColor: GreenLight,
              },
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.4rem",
              },
            }}
          >
            <VscPreview />
          </IconButton>
        </Tooltip>

        <Tooltip title={"تغییر رمز عبور"}>
          <IconButton
            sx={{
              // backgroundColor: primary,
              outline: `2px solid ${primary}`,
              color: primary,
              "&:hover": {
                backgroundColor: primaryTransparent,
              },
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.4rem",
              },
            }}
          >
            <BsKey />
          </IconButton>
        </Tooltip>
      </Box>

      <NewModal
        open={editModal.open}
        onClose={() => {
          setEditModal({
            open: false,
            username: "",
            firstName: "",
            lastName: "",
            nationalCode: "",
          });
        }}
        name="ویرایش کاربر"
        background={background}
        isCloseable={true}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          <TextField
            fullWidth
            label={"نام"}
            variant={"outlined"}
            value={editModal.firstName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setEditModal({ ...editModal, firstName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"نام خانوادگی"}
            variant={"outlined"}
            value={editModal.lastName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setEditModal({ ...editModal, lastName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"کد ملی"}
            variant={"outlined"}
            value={editModal.nationalCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setEditModal({ ...editModal, nationalCode: e.target.value })
            }
          />

          <Button
            fullWidth
            variant={"contained"}
            sx={{
              backgroundColor: primary,
              color: "#fff",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: primaryTransparent,
              },
            }}
            onClick={() => {
              void editUser();
            }
            }
          >
            ویرایش
          </Button>
        </Box>
      </NewModal>
    </Box>
  );
};

export default UserCard;
