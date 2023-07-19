import { Box, IconButton, Typography } from "@mui/material";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { Blue, BlueLight, Green, GreenLight, Red, RedLight, primary, primaryTransparent } from "../../../theme/color";
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
      "justifyContent": "center",
      "alignItems": "center",
      "gridTemplateColumns": {
        xs: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(6, 1fr)",
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
    <Typography textAlign={"center"}>
      {props.firstName && props.firstName}
    </Typography>

    <Typography textAlign={"center"}>
      {props.lastName && props.lastName}
    </Typography>

    <Typography textAlign={"center"}>
      {props.personalCode && props.personalCode}
    </Typography>

    <Typography textAlign={"center"}>
      {props.department && props.department}
    </Typography>

    <Typography textAlign={"center"}>
      {props.status && props.status}
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        // width: "100%",
        // outline: "1px solid red",
      }}
    >
      <IconButton sx={{ 
        // backgroundColor: Blue, 
        outline: `2px solid ${Blue}`,
        color: Blue,
        "&:hover": {
          backgroundColor: BlueLight,
        }
        }}>
        <AiOutlineEdit />
      </IconButton>
      <IconButton sx={{ 
        // backgroundColor: Red, 
        outline: `2px solid ${Red}`,
        color: Red,
        "&:hover": {
          backgroundColor: RedLight,
        }
        }}>
        <AiOutlineDelete/>
      </IconButton>
      <IconButton
        sx={{
          // backgroundColor: Green,
          outline: `2px solid ${Green}`,
          color: Green,
          "&:hover": {
            backgroundColor: GreenLight,
          }
        }}
      >
        <VscPreview />
      </IconButton>
      <IconButton sx={{ 
        // backgroundColor: primary, 
        outline: `2px solid ${primary}`,
        color: primary,
        "&:hover": {
          backgroundColor: primaryTransparent,
        }
        }}>
        <BsKey />
      </IconButton>
    </Box>
  </Box>
);

export default UserCard;
