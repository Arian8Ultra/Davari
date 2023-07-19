import { Box, Button } from "@mui/material";
import { BsPersonAdd } from "react-icons/bs";
import UserList from "../../../components/Admin/UserManagement/UserList";
import { Green, GreenLight } from "../../../theme/color";

const UserManagement = () => {
  return (
    <>
    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} paddingY={1}>
      <Button
      variant="contained"
      endIcon={<BsPersonAdd />}
      sx={{
        borderRadius: 2,
        backgroundColor:Green,
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "1rem",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: GreenLight,
        },
      }}
      >
        افزودن کاربر
      </Button>
    </Box>
      <UserList />
    </>
  );
};

export default UserManagement;
