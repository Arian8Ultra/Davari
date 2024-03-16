/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import { useUserStore } from "../../../Context/UserStore";
import {
  GET_ALL_USERS,
  GET_ALL_USERS_WITH_PARENT_ID,
} from "../../../GraphQL/Users/Queries";
import { User } from "../../../static/Types";
import {
  primaryTransparent,
  secondary
} from "../../../theme/color";
import theme from "../../../theme/theme";
import UserCard from "./UserCard";

const UserList = () => {
  const user = useUserStore((state) => state.user);
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
  const {
    data: parentData,
  } = useQuery(GET_ALL_USERS_WITH_PARENT_ID, {
    variables: {
      id: user.userType == "ORGANIZATION" ? user.id : user.parentId,
    },
    onCompleted(data) {
      console.log("parentData", data);
    },
    onError(error) {
      console.log(error);
    },
  });
  return (
    <Stack
      width={"100%"}
      spacing={0}
      sx={{
        // outline: '1px solid red',
        backgroundColor: primaryTransparent,
        // padding: 2,
        borderRadius: "0.5rem",
        overflow:"clip",
        mb: 2,
        // boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          backgroundColor: secondary,
          color: "white",
          width: "100%",
          height: "100%",
          padding: 2,
          zIndex: 1,
          borderRadius: {
            xs: 0,
            md: "0.5rem 0.5rem 0px 0px",
          },
          borderBottom: "1px solid grey",
          position: "sticky",
          top: {
            xs: theme.spacing(7),
            md: theme.spacing(8),
          },
          // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
          display: "grid",
          alignItems: "center",
          // gridTemplateColumns: {
          //   xs: "repeat(2, 1fr)",
          //   sm: "repeat(3, 1fr)",
          //   md: "repeat(4, 1fr)",
          //   lg: "repeat(6, 1fr)",
          // },
          gap: 1,
          gridTemplateColumns:{
            xs: "repeat(3,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(6,1fr)",
            xl: "repeat(6,1fr)",
          },
          gridAutoColumns: "1fr",
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: 10,
            sm: 11,
            md: 12,
            lg: 14,
          }}
        >
          نام
        </Typography>

        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          fontSize={{
            xs: 10,
            sm: 11,
            md: 12,
            lg: 14,
          }}
        >
          بخش
        </Typography>

        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          fontSize={{
            xs: 10,
            sm: 11,
            md: 12,
            lg: 14,
          }}
        >
          نام کاربری
        </Typography>
        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          fontSize={{
            xs: 10,
            sm: 11,
            md: 12,
            lg: 14,
          }}
        >
          نقش کاربر
        </Typography>
        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          fontSize={{
            xs: 10,
            sm: 11,
            md: 12,
            lg: 14,
          }}
        >
          نوع کاربر
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: 10,
            sm: 11,
            md: 12,
            lg: 14,
          }}
        >
          ...
        </Typography>
      </Box>

      {loading && <p>در حال بارگذاری</p>}
      {error && <p>خطا در بارگذاری</p>}

      {user.userRoles?.some((role) => role.roleType == "SUPER_ADMIN")
        ? data?.user_getUsers?.result?.items?.map((user: User) => (
            <UserCard
              key={user.id}
              fullName={user.fullName}
              department={user.parent?.fullName}
              id={user.id}
              userName={user.userName}
              refetch={refetch}
              userRoles={user.userRoles}
              parentId={user.parentId}
              userType={
                user.userType == "INDIVIDUAL" ? "حقیقی" : user.userType == "CONTRACTOR_OR_CONSULTANT" ? "پیمانکار / مشاور" : "دستگاه"              }
            />
          ))
        : parentData?.user_getUsers?.result?.items?.map(
            (user: User) => (
              <UserCard
                key={user.id}
                fullName={user.fullName}
                department={user.parent?.fullName}
                id={user.id}
                userName={user.userName}
                refetch={refetch}
                userRoles={user.userRoles}
                parentId={user.parentId}
                userType={
                  user.userType == "INDIVIDUAL" ? "حقیقی" : user.userType == "CONTRACTOR_OR_CONSULTANT" ? "پیمانکار / مشاور" : "دستگاه"
                }
              />
            )
          )}
    </Stack>
  );
};

export default UserList;
