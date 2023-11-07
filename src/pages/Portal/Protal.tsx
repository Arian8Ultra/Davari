import { useUserStore } from "../../Context/UserStore";
import ComplaintsList from "../../components/Complaints/ComplaintsList";

const Protal = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
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
