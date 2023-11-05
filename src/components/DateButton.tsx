import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Modal,
} from "@mui/material";
import React from "react";
import {
  Green,
  GreenLight,
  background,
  primary,
  secondary,
} from "../theme/color";
import { Calendar, CalendarProvider } from "zaman";

interface DateButtonProps extends BoxProps {
  date?: Date;
  setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
  label?: string;
}
const DateButton = (props: DateButtonProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box {...props}>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: 1,
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "1rem",
          boxShadow: "none",
          color: secondary,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          outline: props.date ? `2px solid ${secondary}` : undefined,
          // change color of outline
          "& .MuiButton-outlined .MuiButton-outlined": {
            borderRadius: "0.1rem",
          },
        }}
        onClick={() => setOpen(true)}
      >
        {props.label ?? "انتخاب تاریخ"}
        {props.date && (
          <Box
            component={"span"}
            sx={{
              color: secondary,
              fontSize: "0.8rem",
              marginInline: 1,
            }}
          >
            {new Date(props.date).toLocaleDateString("fa-IR")}
          </Box>
        )}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          width={"max-content"}
          height={"max-content"}
          display={"flex"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: background,
            transform: "translate(-50%, -50%)",
            flexDirection: "column",
            borderRadius: "0.5rem",
          }}
        >
          <CalendarProvider
            locale={"fa"}
            direction="rtl"
            accentColor={"#4c5760"}
          >
            <Calendar
              defaultValue={props.date}
              onChange={(day) => props.setDate && props.setDate(day)}
            />
          </CalendarProvider>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: primary,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              margin: 2,
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
            onClick={() => setOpen(false)}
          >
            تایید
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default DateButton;
