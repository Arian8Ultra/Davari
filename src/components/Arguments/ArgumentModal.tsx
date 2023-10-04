/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { Argument, OptionalArgument, OptionalArgumentSamll } from "../../static/Types";
import NewModal from "../Modals";
import { Green, background } from "../../theme/color";
import { Box, Button, TextField } from "@mui/material";
import FileButton from "../FileButton";
import { BsCloudUploadFill } from "react-icons/bs";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  ADD_ARGUMENT_TO_COMPLAINT,
  UPDATE_ARGUMENT,
} from "../../GraphQL/Complaints/Mutations";
import { UPLOAD_FILE } from "../../api/upload";
import { useUserStore } from "../../Context/UserStore";

interface Props {
  state?: number;
  open: boolean;
  onClose: () => void;
  setArgumentModal?: React.Dispatch<
    React.SetStateAction<OptionalArgument>
  >;
  ArgumentFromParent?: OptionalArgumentSamll;
  AddArgument?: ({
    Argument,
  }: {
    Argument: OptionalArgument;
  }) => void;

  argumentId?: number;
  complaintId?: number;
}
const ArgumentModal = (props: Props) => {
  const [Argument, setArgument] = React.useState<OptionalArgumentSamll>(
    {} as OptionalArgumentSamll
  );
  //   set argument from parent if exists
  React.useEffect(() => {
    if (props.ArgumentFromParent) {
      setArgument(props.ArgumentFromParent);
    }
  }, [props.ArgumentFromParent]);

  const [AddArgument] = useMutation(ADD_ARGUMENT_TO_COMPLAINT, {
    onCompleted(data) {
      console.log(data);
      props.onClose();

    },
  });
  const [UpdateArgument] = useMutation(UPDATE_ARGUMENT,{
    onCompleted(data) {
      console.log(data);
      props.onClose();
    },
  });
  const user = useUserStore((state) => state.user);

  const { data } = useQuery(
    gql`
      query getArgument($id: Int!) {
        complaintArgument_getComplaintArgument(entityId: $id) {
          result {
            id
            summary
            description
            suggestedAmount
            accuserResponse
            complaintId
          }
        }
      }
    `,
    {
      variables: {
        id: props.argumentId,
      },
    }
  );

  useEffect(() => {
    if (props.argumentId) {
      setArgument(
        data?.complaintArgument_getComplaintArgument.result
      );
    }
  }, [data, props.argumentId]);

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
              value={Argument?.summary}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  summary: e.target.value,
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
              value={Argument?.description}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  description: e.target.value,
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
                Argument?.suggestedAmount == 0
                  ? ""
                  : Argument?.suggestedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  suggestedAmount: parseFloat(e.target.value),
                });
              }}
            />
            <FileButton
              width={"100%"}
              multiple
              height={"100%"}
              setFiles={(files: File[]) => {
                setArgument({
                  ...Argument,
                  Files: files,
                });
              }}
            >
              مستندات و نامه خوانده
              <BsCloudUploadFill
                style={{
                  marginRight: "0.5rem",
                }}
              />
            </FileButton>

            <Button
              onClick={() => {
                void UPLOAD_FILE({
                  file: Argument?.Files
                    ? Argument?.Files[0]
                    : undefined,
                  // @ts-ignore
                  token: localStorage.getItem("token")
                    ? localStorage.getItem("token")
                    : undefined,
                  onSuccess(res) {
                    console.log(res);
                    void AddArgument({
                      variables: {
                        complaintId: props.complaintId,
                        summary: Argument?.summary,
                        description: Argument?.description,
                        suggestedAmount: Argument.suggestedAmount,
                        // @ts-ignore
                        fileName: res.result[0].newFileName,
                        userId: user.id,
                        filledBy: "ACCUSER",
                      },
                    });
                  },
                });
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
              value={Argument?.accuserResponse}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  accuserResponse: e.target.value,
                });
              }}
            />
            <FileButton
              width={"100%"}
              multiple
              height={"100%"}
              setFiles={(files: File[]) => {
                setArgument({
                  ...Argument,
                  Files: files,
                });
              }}
            >
              مستندات و نامه خوانده
              <BsCloudUploadFill
                style={{
                  marginRight: "0.5rem",
                }}
              />
            </FileButton>

            <Button
              onClick={() => {
                void UPLOAD_FILE({
                  file: Argument?.Files
                    ? Argument?.Files[0]
                    : undefined,
                  // @ts-ignore
                  token: localStorage.getItem("token")
                    ? localStorage.getItem("token")
                    : undefined,
                  onSuccess(res) {
                    console.log(res);
                    void UpdateArgument({
                      variables: {
                        id: props.argumentId,
                        accuserResponse: Argument?.accuserResponse,
                        accuserResponseFileName: res.result[0].newFileName,
                      },
                    });
                  },
                });
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
