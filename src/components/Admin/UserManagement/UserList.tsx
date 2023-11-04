/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Stack, Typography } from "@mui/material";
import {
  primaryGrey,
  primaryTransparent,
  secondary,
} from "../../../theme/color";
import theme from "../../../theme/theme";
import UserCard from "./UserCard";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_USERS,
  GET_ALL_USERS_WITH_PARENT_ID,
} from "../../../GraphQL/Users/Queries";
import { User } from "../../../static/Types";
import { useUserStore } from "../../../Context/UserStore";

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
    loading: parentLoading,
    error: parentError,
    refetch: parentRefetch,
  } = useQuery(GET_ALL_USERS_WITH_PARENT_ID, {
    variables: {
      id: user.parentId,
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
          gridTemplateAreas: {
            xs: `"fullName department userName type" "operation operation operation"`,
            md: `"fullName department userName type" "operation operation operation"`,
            lg: `"fullName  department userName type operation"`,
            xl: `"fullName department userName type operation"`,
          },
          gridAutoColumns: "1fr",
        }}
      >
        <Typography
          gridArea={"fullName"}
          textAlign={"center"}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
          }}
        >
          نام
        </Typography>

        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          gridArea={"department"}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
          }}
        >
          بخش
        </Typography>

        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          gridArea={"userName"}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
          }}
        >
          نام کاربری
        </Typography>
        <Typography
          display={{ xs: "none", md: "block" }}
          textAlign={"center"}
          gridArea={"type"}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
          }}
        >
          نوع کاربر
        </Typography>
        <Typography
          gridArea={"operation"}
          textAlign={"center"}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
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
              userType={
                user.userType == "INDIVIDUAL" ? "حقیقی" : "دستگاه"
              }
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
                userType={
                  user.userType == "INDIVIDUAL" ? "حقیقی" : "دستگاه"
                }
              />
            )
          )}
    </Stack>
  );
};

export default UserList;
