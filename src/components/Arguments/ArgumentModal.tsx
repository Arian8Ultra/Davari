/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useMutation, useQuery } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useUserStore } from "../../Context/UserStore";
import {
  ADD_ARGUMENT_TO_COMPLAINT,
  UPDATE_ARGUMENT,
} from "../../GraphQL/Complaints/Mutations";
import { UPLOAD_FILE } from "../../api/upload";
import {
  OptionalArgument,
  OptionalArgumentSamll
} from "../../static/Types";
import { Green, background } from "../../theme/color";
import FileBox from "../FileBox";
import NewModal from "../Modals";

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
  editMode?: boolean;
  refetch?: () => void;
}
const ArgumentModal = (props: Props) => {
  const [Argument, setArgument] =
    React.useState<OptionalArgumentSamll>(
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
      props.refetch && props.refetch();
    },
  });
  const [UpdateArgument] = useMutation(UPDATE_ARGUMENT, {
    onCompleted(data) {
      console.log(data);
      props.onClose();
      props.refetch && props.refetch();
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
            accusedResponse
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
              focused={Argument?.summary != ""}
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
              focused={Argument?.description != ""}
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
              focused={Argument?.suggestedAmount != 0}
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

            <FileBox
              sx={{
                height:"100%",
                gridRow:'span 2',
                gridColumn: "span 1",
              }}
              setFiles={(files: File[]) => {
                setArgument({
                  ...Argument,
                  Files: files,
                });
              }}
              files={Argument?.Files}
            >
              آپلود مستندات
            </FileBox>
            <Button
              onClick={() => {
                if(props.editMode){
                  void UpdateArgument({
                    variables: {
                      id: props.argumentId,
                      summary: Argument?.summary,
                      description: Argument?.description,
                      suggestedAmount: Argument.suggestedAmount,
                    },
                  });
                }
                else if (
                  Argument?.Files?.length &&
                  Argument?.Files?.length > 0
                )
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
                else {
                  void AddArgument({
                    variables: {
                      complaintId: props.complaintId,
                      summary: Argument?.summary,
                      description: Argument?.description,
                      suggestedAmount: Argument.suggestedAmount,
                      userId: user.id,
                      filledBy: "ACCUSER",
                    },
                  });
                }
              }}
              sx={{
                background: Green,
                color: "white",
                borderRadius: "0.5rem",
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
            display={"grid"}
            gridTemplateColumns={'1fr 1fr'}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"پاسخ"}
              variant={"outlined"}
              focused={Argument?.accusedResponse != ""}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.accusedResponse}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  accusedResponse: e.target.value,
                });
              }}
            />
            <FileBox
              sx={{
                height:"100%",
                gridRow:'span 2',
                gridColumn: "span 1",
              }}
              setFiles={(files: File[]) => {
                setArgument({
                  ...Argument,
                  Files: files,
                });
              }}
              files={Argument?.Files}
            >
              آپلود مستندات
            </FileBox>

            <Button
              onClick={() => {
                if (
                  Argument?.Files?.length &&
                  Argument?.Files?.length > 0
                )
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
                          accuserResponse: Argument?.accusedResponse,
                          accuserResponseFileName:
                            res.result[0].newFileName,
                        },
                      });
                    },
                  });
                else {
                  void UpdateArgument({
                    variables: {
                      id: props.argumentId,
                      accuserResponse: Argument?.accusedResponse,
                    },
                  });
                }
              }}
              sx={{
                background: Green,
                color: "white",
                borderRadius: "0.5rem",
                width: "100%",
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
