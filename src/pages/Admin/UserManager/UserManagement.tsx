import { Box, Button, Stack, TextField } from "@mui/material";
import { BsPersonAdd } from "react-icons/bs";
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

const UserManagement = () => {
  const [addModal, setAddModal] = useState({
    open: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
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
          variant='contained'
          endIcon={<BsPersonAdd />}
          onClick={() => [setAddModal({ ...addModal, open: true })]}
          sx={{
            "borderRadius": 2,
            "backgroundColor": Green,
            "fontWeight": 700,
            "fontStyle": "normal",
            "fontSize": "1rem",
            "boxShadow": "none",
            "&:hover": {
              backgroundColor: GreenLight,
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
            label={"ایمیل"}
            variant={"outlined"}
            value={addModal.email}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
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
            value={addModal.password}
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

          <Button
            variant='contained'
            sx={{
              "borderRadius": 2,
              "backgroundColor": Green,
              "fontWeight": 700,
              "fontStyle": "normal",
              "fontSize": "1rem",
              "boxShadow": "none",
              "gridColumn": {
                xs: "1/2",
                lg: "1/3",
              },
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
          >
            افزودن
          </Button>
        </Box>
      </NewModal>
    </>
  );
};

export default UserManagement;
