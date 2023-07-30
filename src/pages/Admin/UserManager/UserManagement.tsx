/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { BsEye, BsEyeSlash, BsPersonAdd } from "react-icons/bs";
import UserList from "../../../components/Admin/UserManagement/UserList";
import {
  Green,
  GreenLight,
  background,
  primaryLighter,
} from "../../../theme/color";
import NewModal from "../../../components/Modals";
import { useState } from "react";
import { Titles } from "../../../assets/static/Titles";
import { useMutation } from "@apollo/client";
import { UserSignUp } from "../../../GraphQL/Users/Mutations";
import { red } from "@mui/material/colors";

const UserManagement = () => {
  const [addModal, setAddModal] = useState({
    open: false,
    confirmPassword: "",
    departmentId: 0,
    email: "",
    firstName: "",
    lastName: "",
    nationalCode: "",
    personnelCode: "",
    password: "",
    phoneNumber: "",
    userName: "",
    showPassword: false,
  });

  const [userSignUp, { loading, error }] = useMutation(UserSignUp, {
    variables: {
      firstName: addModal.firstName,
      lastName: addModal.lastName,
      userName: addModal.userName,
      nationalCode: addModal.nationalCode,
      personnelCode: addModal.personnelCode,
      password: addModal.password,
      confirmPassword: addModal.confirmPassword,
      email: addModal.email,
      departmentId: addModal.departmentId,
      phoneNumber: addModal.phoneNumber,
    },
    onCompleted(data, clientOptions) {
      console.log(data);
      alert("کاربر با موفقیت افزوده شد");
    },
    onError(error) {
      console.error(error);
      alert("مشکلی در افزودن کاربر به وجود آمده است");
    },
  });
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingY={1}
      >
        <Button
          variant="contained"
          endIcon={<BsPersonAdd />}
          onClick={() => [setAddModal({ ...addModal, open: true })]}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: GreenLight,
              color:Green
            },
          }}
        >
          افزودن کاربر
        </Button>
      </Box>
      <UserList />

      <NewModal
        open={addModal.open}
        onClose={() => setAddModal({ ...addModal, open: false })}
        name={Titles.usersCreate}
        width={{
          xs: "90%",
          sm: "60%",
          md: "40%",
          lg: "30%",
        }}
        isCloseable={true}
        backgroundColor={background}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            lg: "repeat(2, 1fr)",
          }}
          gap={2}
          width={"100%"}
        >
          <TextField
            fullWidth
            label={"نام"}
            variant={"outlined"}
            autoComplete="firstName"
            value={addModal.firstName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, firstName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"نام خانوادگی"}
            variant={"outlined"}
            autoComplete="lastName"
            value={addModal.lastName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, lastName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"نام کاربری"}
            variant={"outlined"}
            autoComplete="userName"
            value={addModal.userName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                userName: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"کد ملی"}
            type="number"
            variant={"outlined"}
            autoComplete="nationalCode"
            value={addModal.nationalCode}

            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                nationalCode: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"کد پرسنلی"}
            type="number"
            variant={"outlined"}
            autoComplete="personnelCode"
            value={addModal.personnelCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                personnelCode: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"ایمیل"}
            variant={"outlined"}
            autoComplete="email"
            value={addModal.email}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"رمز عبور"}
            variant={"outlined"}
            autoComplete="password"
            value={addModal.password}
            type={addModal.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setAddModal({
                      ...addModal,
                      showPassword: !addModal.showPassword,
                    })
                  }
                >
                  {addModal.showPassword ? <BsEye /> : <BsEyeSlash />}
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, password: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"تکرار رمز عبور"}
            variant={"outlined"}
            type="password"
            value={addModal.confirmPassword}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                confirmPassword: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"شماره تماس"}
            variant={"outlined"}
            type="phoneNumber"
            autoComplete="phoneNumber"
            value={addModal.phoneNumber}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                phoneNumber: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"دپارتمان"}
            variant={"outlined"}
            value={addModal.departmentId}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                departmentId: parseInt(e.target.value),
              })
            }
          />

          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: error ? red[500] : Green,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
            type="submit"
            onClick={() => userSignUp()}
          >
            {loading && "در حال افزودن..."}
            افزودن
          </Button>
        </Box>
      </NewModal>
    </>
  );
};

export default UserManagement;
