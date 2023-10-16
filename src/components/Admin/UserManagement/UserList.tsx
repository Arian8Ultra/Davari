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
import { GET_ALL_USERS } from "../../../GraphQL/Users/Queries";
import { User } from "../../../static/Types";

const UserList = () => {
  const {data,loading,error,refetch} = useQuery(GET_ALL_USERS,{
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    }
  })
  return (
    <Stack
      width={"100%"}
      spacing={0}
      sx={{
        // outline: '1px solid red',
        backgroundColor: primaryTransparent,
        // padding: 2,
        borderRadius: 2,
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
            md:"10px 10px 0px 0px"
          },
          borderBottom: "1px solid grey",
          position: "sticky",
          top: {
            xs:theme.spacing(7),
            md:theme.spacing(8),
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
          gap:1,
          gridTemplateAreas:{
            xs: `"firstName lastName personalCode" "operation operation operation"`,
            md: `"firstName lastName personalCode" "operation operation operation"`,
            lg: `"firstName lastName personalCode department status operation"`,
            xl: `"firstName lastName personalCode department status operation"`,
          },
          gridAutoColumns: "1fr",

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
          نام
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
          نام خانوادگی
        </Typography>

        <Typography
          textAlign={"center"}
          gridArea={"personalCode"}
          // display={{ xs: "none", md: "block" }}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
          }}
        >
          کد پرسنلی
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
          gridArea={"status"}
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
          gridArea={"operation"}
          textAlign={"center"}
          fontSize={{
            xs: 11,
            sm: 12,
            md: 14,
            lg: 16,
          }}
        >
          عملیات ها
        </Typography>
      </Box>

      {loading && <p>در حال بارگذاری</p>}
      {error && <p>خطا در بارگذاری</p>}

      {data?.user_getUsers?.result?.items?.map((user:User) => (
        <UserCard
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          personalCode={user.personnelCode}
          department={String(user.departmentId)}
          id={user.id}
          userName={user.userName}
          refetch={refetch}
          userRoles={user.userRoles}
        />
      ))}
    </Stack>
  );
};

export default UserList;
