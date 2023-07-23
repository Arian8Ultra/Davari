/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import {
  Blue,
  BlueLight,
  Green,
  GreenLight,
  Red,
  RedLight,
  primary,
  primaryTransparent,
} from "../../../theme/color";
interface Props {
  firstName?: string;
  lastName?: string;
  personalCode?: string;
  department?: string;
  status?: string;
  id: string | number;
}
const UserCard = (props: Props) => (
  <Box
    sx={{
      "backgroundColor": "rgba(255,255,255,1)",
      "width": "100%",
      "height": "100%",
      "padding": 1.5,
      "borderBottom": "1px solid rgba(100,100,100,0.2)",
      // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
      "display": "grid",
      "gap": 1,
      "alignItems": "center",
      // "gridTemplateColumns": {
      //   xs: "repeat(2, 1fr)",
      //   sm: "repeat(3, 1fr)",
      //   md: "repeat(4, 1fr)",
      //   lg: "repeat(6, 1fr)",
      // },
      gridTemplateAreas:{
        xs: `"firstName lastName personalCode" "operation operation operation"`,
        md: `"firstName lastName personalCode" "operation operation operation"`,
        lg: `"firstName lastName personalCode department status operation"`,
        xl: `"firstName lastName personalCode department status operation"`,
      },
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.6)",
        cursor: "pointer",
      },
    }}
    onClick={() => {
      console.log(props.id);
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
      {props.firstName && props.firstName}
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
      {props.lastName && props.lastName}
    </Typography>

    <Typography
      gridArea={"personalCode"}
      // display={{ xs: "none", md: "block" }}
      textAlign={"center"}
      fontSize={{
        xs: 11,
        sm: 12,
        md: 14,
        lg: 16,
      }}
    >
      {props.personalCode && props.personalCode}
    </Typography>

    <Typography
      gridArea={"department"}
      display={{ xs: "none", md: "block" }}
      textAlign={"center"}
      fontSize={{
        xs: 11,
        sm: 12,
        md: 14,
        lg: 16,
      }}
    >
      {props.department && props.department}
    </Typography>

    <Typography
      gridArea={"status"}
      display={{ xs: "none", md: "block" }}
      textAlign={"center"}
      fontSize={{
        xs: 11,
        sm: 12,
        md: 14,
        lg: 16,
      }}
    >
      {props.status && props.status}
    </Typography>
    <Box
      gridArea={"operation"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // outline: "1px solid red",
        gap: 2,
        // width: "100%",
        // outline: "1px solid red",
      }}
    >
      <Tooltip title={"ویرایش کاربر"}>
        <IconButton
          sx={{
            // backgroundColor: Blue,
            "outline": `2px solid ${Blue}`,
            "color": Blue,
            "&:hover": {
              backgroundColor: BlueLight,
            },
            "fontSize": {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
            },
          }}
        >
          <AiOutlineEdit />
        </IconButton>
      </Tooltip>
      <Tooltip title={"حذف کاربر"}>
        <IconButton
          onClick={() => {
            const agree = confirm(
              `آیا از حذف کاربر '${props.firstName} ${props.lastName}' مطمئن هستید؟`,
            );
            if (agree) {
              console.log("deleted");
            }
          }}
          sx={{
            // backgroundColor: Red,
            "outline": `2px solid ${Red}`,
            "color": Red,
            "&:hover": {
              backgroundColor: RedLight,
            },
            "fontSize": {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
            },
          }}
        >
          <AiOutlineDelete />
        </IconButton>
      </Tooltip>

      <Tooltip title={"تغییر دسترسی ها"}>
        <IconButton
          sx={{
            // backgroundColor: Green,
            "outline": `2px solid ${Green}`,
            "color": Green,
            "&:hover": {
              backgroundColor: GreenLight,
            },
            "fontSize": {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
            },
          }}
        >
          <VscPreview />
        </IconButton>
      </Tooltip>

      <Tooltip title={"تغییر رمز عبور"}>
        <IconButton
          sx={{
            // backgroundColor: primary,
            "outline": `2px solid ${primary}`,
            "color": primary,
            "&:hover": {
              backgroundColor: primaryTransparent,
            },
            "fontSize": {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
            },
          }}
        >
          <BsKey />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
);

export default UserCard;
