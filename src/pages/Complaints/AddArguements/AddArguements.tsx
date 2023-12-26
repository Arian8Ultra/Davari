/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  BsCheck,
  BsGearFill,
  BsPlusCircleDotted,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import { UPDATE_COMPLAINT } from "../../../GraphQL/Complaints/Mutations";
import {
  GET_COMPLAINT,
  GET_COMPLAINT_ARGUMENTS,
} from "../../../GraphQL/Complaints/Queries";
import ArgumentCard from "../../../components/Arguments/ArgumentCard";
import ArgumentHeader from "../../../components/Arguments/ArgumentHeader";
import ArgumentInfoModal from "../../../components/Arguments/ArgumentInfoModal";
import ArgumentModal from "../../../components/Arguments/ArgumentModal";
import FaTypography from "../../../components/FaComponents/FaTypography";
import { convertToPersianDigits } from "../../../functions/Functions";
import NoAccess from "../../../layout/NoAccess";
import { newStatesObj } from "../../../static/States";
import {
  Argument,
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../../static/Types";
import states from "../../../static/states.json";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  background,
  onSecondary,
  primary,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import TimeLine from "../../../components/TimeLine";
import NewModal from "../../../components/Modals";
import FaTextField from "../../../components/FaComponents/FaTextField";
import { CheckCircle } from "@mui/icons-material";
import {
  AddComplaintNoteDocument,
  GetComplaintsNotesDocument,
  NoteType,
} from "../../../gql/graphql";

const AddArgument = () => {
  const { complaintId, state } = useParams();
  const navigate = useNavigate();
  const complaintIdInt = complaintId && parseInt(complaintId);
  const user = useUserStore((state) => state.user);
  const stateInt = state ? parseInt(state) : 0;
  const [arguements, setArguements] = React.useState<
    OptionalArgument[]
  >([]);
  const [addModal, setAddModal] = React.useState({
    open: false,
    Argument: {} as Argument,
    editMode: false as boolean,
  });
  const [noAccess, setNoAccess] = useState(false);
  const [noteModal, setNoteModal] = useState({
    open: false,
    note: "",
  });
  const [newNoteModal, setNewNoteModal] = useState({
    open: false,
    note: "",
  });

  const [selectedArgument, setSelectedArgument] =
    React.useState<OptionalArgument>({} as OptionalArgument);

  const [viewMoreModal, setViewMoreModal] = React.useState({
    open: false,
    argument: {} as OptionalArgument,
  });

  const [updateCompaint] = useMutation(UPDATE_COMPLAINT, {
    variables: {
      id: complaintIdInt,
      complaintState: states.AccuserApprovedArguments.cap,
    },
    onCompleted(data) {
      console.log("state", states.AccuserApprovedArguments.cap);
      console.log(data);
      alert("ثبت شد");
    },
  });

  const { data: notes } = useQuery(GetComplaintsNotesDocument, {
    variables: {
      id: parseInt(complaintId || "") || 0,
    },
    onCompleted(data) {
      if(!data?.complaintNote_getComplaintNotes.result?.items?.length) return;
      setNoteModal({
        note: data?.complaintNote_getComplaintNotes.result?.items?.[0]?.content || "",
        open: true,
      })
    },
  });

  const [addNote] = useMutation(AddComplaintNoteDocument, {
    variables: {
      input: {
        complaintId: parseInt(complaintId || "") || 0,
        content: newNoteModal.note,
        userId: user.id,
        noteType: NoteType.MailRoomChiefOpinionOnRejectingComplaint,
      },
    },
  });

  const { data, loading, refetch } = useQuery(
    GET_COMPLAINT_ARGUMENTS,
    {
      variables: {
        id: complaintIdInt,
      },
      onCompleted(data: {
        complaintArgument_getComplaintArguments: {
          result: {
            items: OptionalArgumentSamll[];
          };
        };
      }) {
        console.log(data);
      },
    }
  );

  const { loading: compaintLoading } = useQuery(GET_COMPLAINT, {
    variables: {
      id: complaintId && parseInt(complaintId),
    },
    onCompleted(data) {
      console.log("compaint", data);
      if (
        state &&
        parseInt(state) == 1 &&
        user.id ==
          data?.complaint_getComplaint?.result?.contract
            ?.accuserDepartmentId
      ) {
        console.log(
          "accuserDepartmentId",
          data?.complaint_getComplaint.result.contract
            ?.accuserDepartmentId
        );
        setNoAccess(true);
        return <NoAccess />;
      } else if (
        state &&
        parseInt(state) == 0 &&
        user.id !=
          data?.complaint_getComplaint?.result?.contract
            ?.accuserDepartmentId
      ) {
        setNoAccess(true);
        console.log(
          "accuserDepartmentId",
          data?.complaint_getComplaint.result.contract
            ?.accuserDepartmentId
        );
      } else {
        setNoAccess(false);

        console.log(
          "accuserDepartmentId",
          data?.complaint_getComplaint.result.contract
            ?.accuserDepartmentId
        );
      }
      if (
        state &&
        parseInt(state) == 0 &&
        user.id ==
          data?.complaint_getComplaint?.result?.contract
            ?.accusedDepartmentId
      ) {
        console.log(
          "accusedDepartmentId",
          data?.complaint_getComplaint.result.contract
            ?.accusedDepartmentId
        );
        setNoAccess(true);
        return <NoAccess />;
      } else {
        setNoAccess(false);
        console.log(
          "accusedDepartmentId",
          data?.complaint_getComplaint.result.contract
            ?.accusedDepartmentId
        );
      }
    },
    onError(error) {
      console.log("compaint", error);
    },
  });

  const [DeleteArgument] = useMutation(
    gql`
      mutation DeleteArgument($id: Int!) {
        complaintArgument_deleteComplaintArgument(entityId: $id) {
          result {
            id
          }
          status {
            code
            value
          }
        }
      }
    `,
    {
      onCompleted(data) {
        console.log(data);
        void refetch();
      },
    }
  );

  return (
    <>
      <Box
        display={!compaintLoading && noAccess ? "none" : "block"}
        position={"relative"}
      >
        <NewModal
          title="ثبت نظر"
          open={newNoteModal.open}
          onClose={() =>
            setNewNoteModal({
              ...newNoteModal,
              open: false,
            })
          }
          background={background}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            justifyContent={"center"}
            gap={"1rem"}
          >
            <FaTextField
              label="نظر"
              fullWidth
              multiline
              minRows={4}
              required
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: secondary,
                color: primary,
                paddingX: "3rem",
              }}
              endIcon={<CheckCircle />}
              onClick={() => {
                void addNote({
                  onCompleted(data) {
                    console.log(data);
                    setNewNoteModal({
                      ...newNoteModal,
                      open: false,
                    });
                    void updateCompaint({
                      variables: {
                        id: complaintIdInt,
                        complaintState:
                          newStatesObj.checkingForBeingConstructive
                            .cap,
                        isApprovedByChief: false,
                      } as {
                        id: number | "" | undefined;
                        complaintState: string;
                        isApprovedByChief: boolean;
                      },
                      onCompleted() {
                        alert("ثبت شد");
                        navigate("/portal");
                      },
                    });
                  },
                });
              }}
            >
              تایید
            </Button>
          </Box>
        </NewModal>

        <Modal
          open={noteModal.open}
          onClose={() =>
            setNoteModal({
              ...noteModal,
              open: false,
            })
          }
          >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateY(-50%) translateX(-50%)",
              background: background,
              padding: "1rem",
              userSelect: "none",
              width: "20%",
              zIndex: 1000,
              borderRadius: "1rem",
            }}
            >
            <FaTypography variant="h6" textAlign={"center"}>
              {noteModal.note}
            </FaTypography>
            </Box>
          </Modal>

        <TimeLine stage={5} />
        {/* <Box
          gridColumn={"span 12"}
          borderRadius={"1rem"}
          sx={{
            position: "sticky",
            top: 100,
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            zIndex: 1000,
            my:'3rem'
          }}
        >
          <FaTypography variant="h6" textAlign={"center"}>
            فرم ثبت دعاوی
          </FaTypography>
        </Box> */}
        <Box
          sx={{
            borderRadius: "0.5rem",
            outline: `2px solid ${primary}`,
            backgroundColor: "rgb(220,220,220)",
            // padding: "0.1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            my: "2rem",
          }}
        >
          <Table
            sx={{
              // backgroundColor: primaryGreyLightTransparent,
              borderRadius: "0.5rem",
            }}
          >
            <ArgumentHeader state={stateInt} />
            <TableBody>
              {loading && <Skeleton />}
              {data?.complaintArgument_getComplaintArguments
                ?.result &&
                data?.complaintArgument_getComplaintArguments?.result?.items?.map(
                  (arguement, index) =>
                    ArgumentCard({
                      state: stateInt,
                      addModal: addModal,
                      arguement: arguement,
                      id: index,
                      setAddModal: setAddModal,
                      setSelectedArgument: setSelectedArgument,
                      deleteArgument(id) {
                        void DeleteArgument({
                          variables: {
                            id: id,
                          },
                        });
                      },
                      setVewMoreModal: setViewMoreModal,
                    })
                )}
              <TableRow
                sx={{
                  display: stateInt != 0 ? "none" : "table-row",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: secondary,
                  }}
                >
                  جمع کل مبلغ خواسته شده ادعا:
                  {convertToPersianDigits(
                    data?.complaintArgument_getComplaintArguments?.result?.items
                      ?.reduce(
                        (a, b) => a + (b?.suggestedAmount ?? 0),
                        0
                      )
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  ) + " ریال"}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
              </TableRow>
              <TableRow
                sx={{
                  display: stateInt != 0 ? "none" : "table-row",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: secondary,
                  }}
                >
                  مبلغ داوری :
                  {
                    // 10% of all suggestedAmounts
                    convertToPersianDigits(
                      (
                        (data?.complaintArgument_getComplaintArguments?.result?.items?.reduce(
                          (a, b) => a + (b?.suggestedAmount ?? 0),
                          0
                        ) ?? 0) / 100
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    ) + " ریال"
                  }
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                ></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <IconButton
            onClick={() => {
              setAddModal({
                open: true,
                Argument: {} as Argument,
                editMode: false,
              });
              console.log(addModal);
            }}
            sx={{
              background: primary,
              margin: "1rem",
              display: stateInt != 0 ? "none" : "flex",
              width: "50px",
              aspectRatio: "1/1",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: secondary,
                color: onSecondary,
              },
            }}
          >
            <BsPlusCircleDotted />
          </IconButton>
        </Box>
        <IconButton
          sx={{
            background: primary,
            color: secondaryDark,
            position: "fixed",
            bottom: 10,
            right: 10,
            fontSize: "3rem",
            borderRadius: "1.5rem",
            "&:hover": {
              backgroundColor: GreenLight,
              color: secondaryDark,
            },
          }}
          onClick={() => {
            if (stateInt == 0) {
              const agreed = confirm("آیا مطمئن هستید؟");
              if (!agreed) return;
              void updateCompaint({
                variables: {
                  id: complaintIdInt,
                  complaintState:
                    newStatesObj.waitingForAccusedToRegisterContract
                      .cap,
                },
                onCompleted() {
                  alert("ثبت شد");
                  navigate("/complaints");
                },
              });
            } else if (stateInt == 1) {
              const agreed = confirm("آیا مطمئن هستید؟");
              if (!agreed) return;
              void updateCompaint({
                variables: {
                  id: complaintIdInt,
                  complaintState:
                    newStatesObj.waitingForAccuserToViewArguments.cap,
                },
                onCompleted() {
                  alert("ثبت شد");
                  navigate("/complaints");
                },
              });
            } else if (stateInt == -1) {
              const agreed = confirm("آیا مطمئن هستید؟");
              if (!agreed) return;
              void updateCompaint({
                variables: {
                  id: complaintIdInt,
                  complaintState:
                    newStatesObj.waitingForChiefToAssign.cap,
                },
                onCompleted() {
                  alert("ثبت شد");
                  navigate("/complaints");
                },
              });
            } else if (stateInt == 2) {
              const agreed = confirm("آیا مطمئن هستید؟");
              if (!agreed) return;
              void updateCompaint({
                variables: {
                  id: complaintIdInt,
                  complaintState:
                    newStatesObj
                      .waitingForChiefToApproveExpertsAnswersToArguments
                      .cap,
                },
                onCompleted() {
                  alert("ثبت شد");
                  navigate("/complaints");
                },
              });
            } else if (stateInt == 3) {
              const agreed = confirm("آیا مطمئن هستید؟");
              if (!agreed) return;
              void updateCompaint({
                variables: {
                  id: complaintIdInt,
                  complaintState:
                    newStatesObj.givingTrackingCodeToComplaint.cap,
                  isApprovedByChief: true,
                } as {
                  id: number | "" | undefined;
                  complaintState: string;
                  isApprovedByChief: boolean;
                },
                onCompleted() {
                  alert("ثبت شد");
                  navigate("/portal");
                },
              });
            }
          }}
        >
          <BsCheck />
          <Typography
            fontSize={"1.2rem"}
            sx={{
              marginInline: "1rem",
            }}
          >
            تایید
          </Typography>
        </IconButton>
        <IconButton
          sx={{
            background: Red,
            color: "white",
            position: "fixed",
            bottom: 10,
            right: 200,
            fontSize: "3rem",
            display: stateInt != 3 ? "none" : "flex",
            borderRadius: "1.5rem",
            "&:hover": {
              backgroundColor: RedLight,
              color: Red,
            },
          }}
          onClick={() => {
            setNewNoteModal({
              ...newNoteModal,
              open: true,
            });
          }}
        >
          <BsCheck />
          <Typography
            fontSize={"1.2rem"}
            sx={{
              marginInline: "1rem",
            }}
          >
            رد
          </Typography>
        </IconButton>
      </Box>
      <Box display={!compaintLoading && noAccess ? "block" : "none"}>
        <NoAccess />
      </Box>
      <ArgumentInfoModal
        open={viewMoreModal.open}
        handleClose={() => {
          setViewMoreModal({
            ...viewMoreModal,
            open: false,
          });
        }}
        argument={viewMoreModal.argument}
        state={stateInt}
      />
      <ArgumentModal
        isFirst={
          data?.complaintArgument_getComplaintArguments?.result?.items
            ?.length == 0
        }
        argumentId={
          selectedArgument.id ? parseInt(selectedArgument.id) : 0
        }
        complaintId={complaintIdInt || 0}
        state={stateInt}
        open={addModal.open}
        onClose={() => {
          setAddModal({
            editMode: false,
            open: false,
            Argument: {} as Argument,
          });
        }}
        AddArgument={(data) => {
          setArguements([...arguements, data.Argument]);
          console.log(data);
          setAddModal({
            editMode: false,
            open: false,
            Argument: {} as Argument,
          });
        }}
        editMode={addModal.editMode}
        ArgumentFromParent={selectedArgument}
        refetch={() => {
          void refetch();
        }}
      />
    </>
  );
};

export default AddArgument;
