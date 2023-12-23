import { Box, Button } from "@mui/material";
import { useUserStore } from "../../Context/UserStore";
import ComplaintsList from "../../components/Complaints/ComplaintsList";
import { primary, secondary } from "../../theme/color";

const Protal = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <Box position={"relative"} display={"flex"} my={2} mt={-5} sx={{
        justifyContent:"flex-end"
      }}>
        <Button variant="contained" color="primary" sx={{
          background:secondary
        }}
        href="/portal/council_List">
         ایجاد لیست دولت
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
