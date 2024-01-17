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
  UPDATE_ARGUMENT_FULL,
  UPDATE_COMPLAINT,
} from "../../GraphQL/Complaints/Mutations";
import { UPLOAD_FILE } from "../../api/upload";
import {
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../static/Types";
import {
  Green,
  GreenLight,
  background,
  primary,
  secondaryDark,
} from "../../theme/color";
import FileBox from "../FileBox";
import NewModal from "../Modals";
import { newStatesObj } from "../../static/States";
import { ComplaintArgument } from "../../gql/graphql";
import { FaCheck } from "react-icons/fa";
import { useUpdateArgumentFullMutation } from "../../../generated-types";

interface Props {
  state?: number;
  open: boolean;
  onClose: () => void;
  setArgumentModal?: React.Dispatch<
    React.SetStateAction<OptionalArgument>
  >;
  ArgumentFromParent?: ComplaintArgument;
  AddArgument?: ({
    Argument,
  }: {
    Argument: OptionalArgument;
  }) => void;

  argumentId?: number;
  complaintId?: number;
  editMode?: boolean;
  refetch?: () => void;
  isFirst?: boolean;
}
const ArgumentModal = (props: Props) => {
  const [Argument, setArgument] = React.useState<ComplaintArgument>(
    {} as ComplaintArgument
  );
  const [files, setFiles] = React.useState<File>();
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
      setArgument({} as ComplaintArgument);
      props.isFirst &&
        void updateCompaint({
          variables: {
            id: props.complaintId,
            complaintState:
              newStatesObj.waitingForAccuserToApproveArguments.cap,
          },
        });
      props.refetch && props.refetch();
    },
  });
  const [UpdateArgument] = useUpdateArgumentFullMutation({
    onCompleted(data) {
      console.log(data);
      props.onClose();
      setArgument({} as ComplaintArgument);
      props.refetch && props.refetch();
    },
  });

  const [updateCompaint] = useMutation(UPDATE_COMPLAINT);
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
            councilOpinion
            councilApprovedAmount
            accuserAnswerToAccusedResponse
            accuserAnswerToAccusedResponseFileName
            expertOpinion
            expertOpinionFileName
            expertVerdict
            approvedAmount
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
    case -1:
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
              label={"پاسخ"}
              variant={"outlined"}
              focused={Argument?.accuserAnswerToAccusedResponse != ""}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.accuserAnswerToAccusedResponse}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  accuserAnswerToAccusedResponse: e.target.value,
                });
              }}
            />

            <Button
              onClick={() => {
                void UpdateArgument({
                  variables: {
                    input: {
                      id: props.argumentId,
                      accuserAnswerToAccusedResponse:
                        Argument?.accuserAnswerToAccusedResponse,
                    },
                  },
                });
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
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
                height: "100%",
                gridRow: "span 2",
                gridColumn: "span 1",
              }}
              setFiles={setFiles}
              fileTypes={["pdf", "jpeg"]}
              files={files}
            >
              آپلود مستندات
            </FileBox>
            <Button
              onClick={() => {
                if (props.editMode) {
                  if (files?.length && files?.length > 0) {
                    void UPLOAD_FILE({
                      file: files ? files : undefined,
                      // @ts-ignore
                      token: localStorage.getItem("token")
                        ? localStorage.getItem("token")
                        : undefined,
                      onSuccess(res) {
                        console.log(res);
                        void UpdateArgument({
                          variables: {
                            input: {
                              id: props.argumentId,
                              summary: Argument?.summary,
                              description: Argument?.description,
                              suggestedAmount:
                                Argument.suggestedAmount,
                              // @ts-ignore
                              fileName: res.result[0].newFileName,
                            },
                          },
                        });
                      },
                    });
                  } else {
                    void UpdateArgument({
                      variables: {
                        input: {
                          id: props.argumentId,
                          summary: Argument?.summary,
                          description: Argument?.description,
                          suggestedAmount: Argument.suggestedAmount,
                        },
                      },
                    });
                  }
                } else if (files?.length && files?.length > 0)
                  void UPLOAD_FILE({
                    file: files ? files : undefined,
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
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                // width: "50%",
                "&:hover": {
                  background: GreenLight,
                },
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
            gridTemplateColumns={"1fr 1fr"}
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
                height: "100%",
                gridRow: "span 2",
                gridColumn: "span 1",
              }}
              setFiles={setFiles}
              files={files}
              fileTypes={["pdf", "jpeg"]}
            >
              آپلود مستندات
            </FileBox>

            <Button
              onClick={() => {
                if (files?.length && files?.length > 0)
                  void UPLOAD_FILE({
                    file: files ? files : undefined,
                    // @ts-ignore
                    token: localStorage.getItem("token")
                      ? localStorage.getItem("token")
                      : undefined,
                    onSuccess(res) {
                      console.log(res);
                      void UpdateArgument({
                        variables: {
                          input: {
                            id: props.argumentId,
                            accuserAnswerToAccusedResponse:
                              Argument?.accusedResponse,
                            accuserAnswerToAccusedResponseFileName:
                              res.result[0].newFileName,
                          },
                        },
                      });
                    },
                  });
                else {
                  void UpdateArgument({
                    variables: {
                      input: {
                        id: props.argumentId,
                        accuserAnswerToAccusedResponse:
                          Argument?.accusedResponse,
                      },
                    },
                  });
                }
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
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
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"نظر کارشناسی به طور مفصل"}
              variant={"outlined"}
              focused={Argument?.expertOpinion != ""}
              sx={{
                borderRadius: "1rem",
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.expertOpinion}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  expertOpinion: e.target.value,
                });
              }}
            />
            <TextField
              label={"متن رای پیشنهادی کارشناس"}
              variant={"outlined"}
              focused={Argument?.expertVerdict != ""}
              sx={{
                borderRadius: "1rem",
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.expertVerdict}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  expertVerdict: e.target.value,
                });
              }}
            />

            <TextField
              label={"مبلغ مورد تایید کارشناس"}
              variant={"outlined"}
              focused={Argument?.mailRoomExpertApprovedAmount != 0}
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
                Argument?.mailRoomExpertApprovedAmount == 0
                  ? ""
                  : Argument?.mailRoomExpertApprovedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  mailRoomExpertApprovedAmount: parseFloat(
                    e.target.value
                  ),
                });
              }}
            />
            <FileBox
              sx={{
                height: "100%",
                gridRow: "span 2",
                gridColumn: "span 1",
              }}
              setFiles={setFiles}
              files={files}
              fileTypes={["pdf", "jpeg"]}
            >
              آپلود مستندات
            </FileBox>

            <Button
              onClick={() => {
                if (files?.length && files?.length > 0)
                  void UPLOAD_FILE({
                    file: files ? files : undefined,
                    // @ts-ignore
                    token: localStorage.getItem("token")
                      ? localStorage.getItem("token")
                      : undefined,
                    onSuccess(res) {
                      console.log(res);
                      void UpdateArgument({
                        variables: {
                          input: {
                            id: props.argumentId,
                            expertOpinion: Argument?.expertOpinion,
                            expertVerdict: Argument?.expertVerdict,
                            mailRoomExpertApprovedAmount:
                              Argument.mailRoomExpertApprovedAmount,
                            expertOpinionFileName:
                              res.result[0].newFileName,
                          },
                        },
                      });
                    },
                  });
                else {
                  void UpdateArgument({
                    variables: {
                      input: {
                        id: props.argumentId,
                        accuserAnswerToAccusedResponse:
                          Argument?.accusedResponse,
                      },
                    },
                  });
                }
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
    case 6:
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
              label={"متن رای شورا"}
              variant={"outlined"}
              focused={Argument?.expertOpinion != ""}
              sx={{
                borderRadius: "1rem",
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.councilOpinion}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  councilOpinion: e.target.value,
                });
              }}
            />
            {Argument?.councilOpinion}

            <TextField
              label={"مبلغ مورد تایید شورا"}
              variant={"outlined"}
              focused={Argument?.councilApprovedAmount != 0}
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
                Argument?.councilApprovedAmount == 0
                  ? ""
                  : Argument?.councilApprovedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  councilApprovedAmount: parseFloat(e.target.value),
                });
              }}
            />

            <Button
              onClick={() => {
                void UpdateArgument({
                  variables: {
                    input: {
                      id: props.argumentId,
                      councilOpinion: Argument?.councilOpinion,
                      councilApprovedAmount:
                        Argument.councilApprovedAmount,
                    },
                  },
                  onCompleted(data) {
                    console.log(data);
                    props.onClose();
                    setArgument({} as ComplaintArgument);
                    props.refetch && props.refetch();
                  },
                });
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                display: "flex",
                gap: 3,
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              <FaCheck />
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
  }
};

export default ArgumentModal;
