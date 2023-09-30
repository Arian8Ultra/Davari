import React from "react";
import { Argument, OptionalArgument } from "../../static/Types";
import NewModal from "../Modals";
import { Green, background } from "../../theme/color";
import { Box, Button, TextField } from "@mui/material";
import FileButton from "../FileButton";
import { BsCloudUploadFill, BsUpload } from "react-icons/bs";

interface Props {
  state?: number;
  open: boolean;
  onClose: () => void;
  setArgumentModal?: React.Dispatch<
    React.SetStateAction<OptionalArgument>
  >;
  ArgumentFromParent?: OptionalArgument;
  AddArgument?: ({
    Argument,
  }: {
    Argument: OptionalArgument;
  }) => void;
}
const ArgumentModal = (props: Props) => {
  const [Argument, setArgument] = React.useState<OptionalArgument>(
    {} as OptionalArgument
  );
  //   set argument from parent if exists
  React.useEffect(() => {
    if (props.ArgumentFromParent) {
      setArgument(props.ArgumentFromParent);
    }
  }, [props.ArgumentFromParent]);


  switch (props.state) {
    case 0:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"خلاصه ادعا"}
              variant={"outlined"}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
                gridColumn: "1/3",
              }}
              fullWidth
              value={Argument.Summary}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  Summary: e.target.value,
                });
              }}
            />
            <TextField
              label={"مشروح ادعا"}
              variant={"outlined"}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
                gridColumn: "1/3",
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument.Description}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  Description: e.target.value,
                });
              }}
            />

            <TextField
              label={"مبلغ پیشنهادی ادعا"}
              variant={"outlined"}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              type="number"
              InputProps={{
                endAdornment: "ریال",
              }}
              value={
                Argument.SuggestedAmount == 0
                  ? ""
                  : Argument.SuggestedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  SuggestedAmount: parseFloat(e.target.value),
                });
              }}
            />
            <FileButton width={"100%"} multiple height={"100%"}>
              مستندات و نامه خوانده
              <BsCloudUploadFill
                style={{
                  marginRight: "0.5rem",
                }}
              />
            </FileButton>

            <Button
              onClick={() => {
                props.AddArgument && props.AddArgument({ Argument });
              }}
              sx={{
                background: Green,
                color: "white",
                borderRadius: "0.5rem",
                gridColumn: "1/3",
                // width: "50%",
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
    case 1:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"پاسخ"}
              variant={"outlined"}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  AccuserResponse: e.target.value,
                });
              }}
            />
            <FileButton width={"50%"} multiple>
              مستندات و نامه خوانده
              <BsCloudUploadFill
                style={{
                  marginRight: "0.5rem",
                }}
              />
            </FileButton>

            <Button
              onClick={() => {
                props.AddArgument && props.AddArgument({ Argument });
              }}
              sx={{
                background: Green,
                color: "white",
                borderRadius: "0.5rem",
                width: "50%",
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
    case 2:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <div>hello</div>
        </NewModal>
      );
  }
};

export default ArgumentModal;
