import { Box, Stack, Typography } from "@mui/material";
import { primaryGrey, primaryTransparent } from "../../../theme/color";
import theme from "../../../theme/theme";
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <Stack
      width={"100%"}
      spacing={0}
      sx={{
        // outline: '1px solid red',
        backgroundColor: primaryTransparent,
        // padding: 2,
        borderRadius: 2,
        boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          backgroundColor: primaryGrey,
          color: "white",
          width: "100%",
          height: "100%",
          padding: 2,
          borderRadius: "10px 10px 0px 0px",
          borderBottom: "1px solid grey",
          position: "sticky",
          top: theme.spacing(8),
          // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
          },
        }}
      >
        <Typography textAlign={"center"}>نام</Typography>

        <Typography textAlign={"center"}>نام خانوادگی</Typography>

        <Typography textAlign={"center"}>کد پرسنلی</Typography>

        <Typography textAlign={"center"}>بخش</Typography>

        <Typography textAlign={"center"}>وضعیت</Typography>
        <Typography textAlign={"center"}>عملیات ها</Typography>
      </Box>
      
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <UserCard key={item} firstName={"علی"} lastName={"محمدی"} id={item} />
      ))}
    </Stack>
  );
};

export default UserList;
