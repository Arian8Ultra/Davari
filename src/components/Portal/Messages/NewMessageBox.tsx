/* eslint-disable @typescript-eslint/ban-ts-comment */
import theme from "../../../theme/theme";
import {
  GreenLight,
  primary,
  primaryGrey,
  primaryLighter,
  primaryTransparent,
} from "../../../theme/color";
import {
  Box,
  Button,
  TextField,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";

const NewMessageBox = () => {
  const [scrollTarget, setScrollTarget] = useState(undefined);
  const [newMessage, setNewMessage] = useState({
    title: "" as string,
    content: "" as string,
    to: "" as string,
    from: "" as string,
  });
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    // set the target as stack ref
    target: scrollTarget,
  });
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      id="scrollableDiv"
      ref={(node) => {
        if (node) {
          // @ts-ignore
          setScrollTarget(node);
        }
      }}
      maxHeight={`calc(100vh - ${theme.spacing(20)})`}
      minHeight={`calc(100vh - ${theme.spacing(20)})`}
      sx={{
        overflow: "auto",
        gap: 0,
        backgroundColor: primaryTransparent,
        // padding: trigger ? 0 : 2,
        borderRadius: 2,
        boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)",
        "&::-webkit-scrollbar": {
          width: "10px",
          height: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "var(--color-primaryLight)",
          borderRadius: " 0px 50px 50px 0px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: primaryGrey,
          backdropFilter: "blur(10px) ",
          width: "100%",
          height: "max-content",
          padding: 2,
          // borderRadius: trigger ? "0px" : "10px 10px 0px 0px",
          // borderBottom: !trigger ? "1px solid grey" : "none",
          position: "sticky",
          top: theme.spacing(0),
          // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography textAlign={"center"}>نامه جدید</Typography>
      </Box>
      <Box
        sx={{ padding: 2 }}
        height={"max-content"}
        gap={2}
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        <TextField
          fullWidth
          label={"به :"}
          variant={"outlined"}
          value={newMessage.to}
          select
          SelectProps={{
            native: true,
          }}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
              {
                borderRadius: "15px",
              },
          }}
          onChange={(e) =>
            setNewMessage({ ...newMessage, to: e.target.value })
          }
        >
          {/* {[
            { name: "مدیریت", id: "1" },
            { name: "کاربران", id: "2" },
          ].map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))} */}
        </TextField>
        <TextField
          fullWidth
          label={"عنوان"}
          variant={"outlined"}
          value={newMessage.title}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
              {
                borderRadius: "15px",
              },
          }}
          onChange={(e) =>
            setNewMessage({ ...newMessage, title: e.target.value })
          }
        ></TextField>
        <TextField
          fullWidth
          label={"محتوا"}
          variant={"outlined"}
          value={newMessage.content}
          multiline
          minRows={10}
          sx={{
            gridColumn: "1 / 3",
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
              {
                borderRadius: "15px",
              },
          }}
          onChange={(e) =>
            setNewMessage({ ...newMessage, title: e.target.value })
          }
        ></TextField>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          flexDirection={"column"}
          gridColumn={"1/3"}
          height={"100%"}
        //   fill the rest of the space of the grid container
        sx={{
            // outline: "1px solid red"
        }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 2,
              backgroundColor: primary,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: "1/3",
              height: "max-content",
              "&:hover": {
                backgroundColor: primaryLighter,
              },
            }}
          >
            افزودن
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewMessageBox;
