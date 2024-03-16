import { Box, Button, List } from "@mui/material";
import { useUserStore } from "../../Context/UserStore";
import ComplaintsList from "../../components/Complaints/ComplaintsList";
import { primary, secondary, secondaryDark } from "../../theme/color";
import { ListRounded, PeopleOutline } from "@mui/icons-material";

const Protal = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <Box position={"relative"} display={"flex"} my={2} mt={-5} sx={{
        justifyContent:"flex-end",
        gap:2
      }}>
        <Button variant="contained" color="primary" sx={{
          background:primary,
          color:secondaryDark,
          boxShadow:"none",
          "&:hover":{
            background:secondary,
            color:primary
          }
        }}
        href="/portal/council_List">
         ایجاد لیست دولت
          <ListRounded sx={{ml:1}}/>
        </Button>
        <Button variant="contained" color="primary" sx={{
          background:primary,
          color:secondaryDark,
          boxShadow:"none",
          "&:hover":{
            background:secondary,
            color:primary
          }
        }}
        href="/portal/determining_List">
         تعیین کارشناس پرونده
          <PeopleOutline sx={{ml:1}}/>
        </Button>
      </Box>
      {user?.userRoles?.find(
        (role) => role.roleType === "SENIOR_USER"
      ) && (
        <ComplaintsList
          type="chief"
          userId={user.id}
          departmentId={user.parentId}
        />
      )}
      {user?.userRoles?.find(
        (role) => role.roleType === "SENIOR_USER"
      ) && (
        <ComplaintsList
          type="all"
          userId={user.id}
          departmentId={user.parentId}
        />
      )}
      {user?.userRoles?.find(
        (role) => role.roleType === "EXPERT"
      ) && (
        <ComplaintsList
          type="mainRoomExpert"
          userId={user.id}
          departmentId={user.parentId}
        />
      )}
    </>
  );
};

export default Protal;
