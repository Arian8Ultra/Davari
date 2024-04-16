/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql, useMutation, useQuery } from "@apollo/client";
import { CheckCircle, DeleteOutlineTwoTone } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Modal,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BsCloudDownloadFill,
  BsDownload,
  BsPlusCircleDotted,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteNonFeasibleArgumentMutation,
  useGetArgumentsWithFilterQuery,
  useGetComplaintStatesQuery,
  useGetNonFeasibleArgumentsLazyQuery,
  useSendAccusedRespondedSmsMutation,
  useSetFirstAndSecondPaymentCostMutation,
  useSmsComplaintAddedMutation,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import { GET_COMPLAINT } from "../../../GraphQL/Complaints/Queries";
import ArgumentCard from "../../../components/Arguments/ArgumentCard";
import ArgumentHeader from "../../../components/Arguments/ArgumentHeader";
import ArgumentInfoModal from "../../../components/Arguments/ArgumentInfoModal";
import ArgumentModal from "../../../components/Arguments/ArgumentModal";
import FaTextField from "../../../components/FaComponents/FaTextField";
import FaTypography from "../../../components/FaComponents/FaTypography";
import NewModal from "../../../components/Modals";
import TimeLine from "../../../components/TimeLine";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import { convertToPersianDigits } from "../../../functions/Functions";
import {
  AddComplaintNoteDocument,
  ComplaintArgument,
  ComplaintStateStatus,
  GetComplaintsNotesDocument,
  NoteType,
  RegistrarType,
  SendAccusedRespondedSmsDocument,
  UpdateComplaintDocument,
  UpdateComplaintFullDocument,
} from "../../../gql/graphql";
import NoAccess from "../../../layout/NoAccess";
import { Argument } from "../../../static/Types";
import states from "../../../static/states.json";
import {
  GreenLight,
  Red,
  RedLight,
  background,
  onSecondary,
  primary,
  primaryDark,
  secondary,
  secondaryDark,
} from "../../../theme/color";

const AddArgument = () => {
  const { complaintId, state } = useParams();
  const navigate = useNavigate();
  const complaintIdInt = complaintId && parseInt(complaintId);
  const user = useUserStore((state) => state.user);
  const stateInt = state ? parseInt(state) : 0;
  const [arguements, setArguements] = React.useState<ComplaintArgument[]>([]);
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
    React.useState<ComplaintArgument>({} as ComplaintArgument);

  const [viewMoreModal, setViewMoreModal] = React.useState({
    open: false,
    argument: {} as ComplaintArgument,
  });

  const [updateCompaint] = useMutation(UpdateComplaintFullDocument, {
    variables: {
      input: {
        id: complaintIdInt || 0,
        // error for the next line with status
        complaintStateId: getComplaintStateWithEnum(
          ComplaintStateStatus.WaitingForAccuserToApproveAccusedAnswers
        ).id,
      },
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
      if (!data?.complaintNote_getComplaintNotes.result?.items?.length) return;
      setNoteModal({
        note:
          data?.complaintNote_getComplaintNotes.result?.items?.[0]?.content ||
          "",
        open: true,
      });
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
  const [sendSms] = useSmsComplaintAddedMutation({
    variables: {
      id: complaintId ? parseInt(complaintId) : 0,
    },
  });

  const [SetFirstAndSecondPaymentCost] =
    useSetFirstAndSecondPaymentCostMutation({
      variables: {
        complaintId: complaintId ? parseInt(complaintId) : 0,
      },
    });

  const { data, loading, refetch } = useGetArgumentsWithFilterQuery({
    variables: {
      filter: {
        complaintId: {
          eq: complaintIdInt || 0,
        },
      },
    },
    onCompleted(data) {
      console.log(data);
    },
  });

  const [
    getNonFeasibleArguments,
    { data: NonFeasibleArguments, refetch: NonFeasibleRefetch },
  ] = useGetNonFeasibleArgumentsLazyQuery({
    variables: {
      filer: {
        complaintId: {
          eq: complaintIdInt || 0,
        },
        isDeleted: {
          eq: false,
        },
      },
    },
  });

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
          data?.complaint_getComplaint?.result?.contract?.accuserDepartmentId
      ) {
        console.log(
          "accuserDepartmentId",
          data?.complaint_getComplaint.result.contract?.accuserDepartmentId
        );
        setNoAccess(true);
        return <NoAccess />;
      } else if (
        state &&
        parseInt(state) == 0 &&
        user.id !=
          data?.complaint_getComplaint?.result?.contract?.accuserDepartmentId
      ) {
        setNoAccess(true);
        console.log(
          "accuserDepartmentId",
          data?.complaint_getComplaint.result.contract?.accuserDepartmentId
        );
      } else {
        setNoAccess(false);

        console.log(
          "accuserDepartmentId",
          data?.complaint_getComplaint.result.contract?.accuserDepartmentId
        );
      }
      if (
        state &&
        parseInt(state) == 0 &&
        user.id ==
          data?.complaint_getComplaint?.result?.contract?.accusedDepartmentId
      ) {
        console.log(
          "accusedDepartmentId",
          data?.complaint_getComplaint.result.contract?.accusedDepartmentId
        );
        setNoAccess(true);
        return <NoAccess />;
      } else {
        setNoAccess(false);
        console.log(
          "accusedDepartmentId",
          data?.complaint_getComplaint.result.contract?.accusedDepartmentId
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

  const [sendSMS] = useMutation(SendAccusedRespondedSmsDocument);
  const [SendAccusedRespondedSMS] = useSendAccusedRespondedSmsMutation({
    variables:{
      complaintId: complaintId ? parseInt(complaintId) : 0
    }
  })

  const [DeleteNonFeasibleArgument] = useDeleteNonFeasibleArgumentMutation();

  useEffect(() => {
    if (parseInt(state || "0") == 0) {
      void getNonFeasibleArguments();
    }
  }, [getNonFeasibleArguments, state]);

  return (
    <>
      <Box
        display={!compaintLoading && noAccess ? "none" : "block"}
        position={"relative"}
      >
        {notes?.complaintNote_getComplaintNotes.result?.items?.length &&
          notes?.complaintNote_getComplaintNotes.result?.items?.map((note) => (
            <Alert
              severity="info"
              sx={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateY(-50%) translateX(-50%)",
                width: "20%",
                zIndex: 1000,
                borderRadius: "1rem",
              }}
            >
              {note.content}
            </Alert>
          ))}
        <NewModal
          title="ثبت نظر"
          open={newNoteModal.open}
          onClose={() =>
            setNewNoteModal({
              ...newNoteModal,
              open: false,
            })
          }
          isCloseable={false}
          background={background}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            justifyContent={"center"}
            gap={"1rem"}
          >
            <FaTextField label="نظر" fullWidth multiline minRows={4} required />
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
                    if (stateInt == 5) {
                      const agreed = confirm("آیا مطمئن هستید؟");
                      if (!agreed) return;
                      void updateCompaint({
                        variables: {
                          input: {
                            id: complaintIdInt || 0,
                            complaintStateId: getComplaintStateWithEnum(
                              ComplaintStateStatus.MailRoomExpertReviewingTheFinalReport
                            ).id,
                          },
                        },
                        onCompleted() {
                          alert("ثبت شد");
                          navigate("/portal");
                        },
                      });
                    } else if (stateInt == 4) {
                      const agreed = confirm("آیا مطمئن هستید؟");
                      if (!agreed) return;
                      void updateCompaint({
                        variables: {
                          input: {
                            id: complaintIdInt || 0,
                            complaintStateId: getComplaintStateWithEnum(
                              ComplaintStateStatus.RequestingDocuments
                            ).id,
                          },
                        },
                        onCompleted() {
                          alert("ثبت شد");
                          navigate("/portal");
                        },
                      });
                    } else if (stateInt == 3) {
                      void updateCompaint({
                        variables: {
                          input: {
                            id: complaintIdInt || 0,
                            complaintStateId: getComplaintStateWithEnum(
                              ComplaintStateStatus.CheckingForBeingConstructive
                            ).id,
                            isApprovedByChief: false,
                          },
                        },
                        onCompleted() {
                          alert("ثبت شد");
                          navigate("/portal");
                        },
                      });
                    }
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

        {parseInt(state || "") < 3 && <TimeLine stage={5} />}
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
            gap: "3rem",
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
            <TableBody
              sx={{
                "& td": {
                  padding: "0.5rem",
                  borderBottom: `1px solid ${secondary}`,
                  borderRight: `1px solid ${secondary}`,
                },
                // add border to first column
                "& td:first-child": {
                  borderRight: `1px solid ${secondary}`,
                  width: "max-content",
                },
                // add border to last column
                "& td:last-child": {
                  borderLeft: `1px solid ${secondary}`,
                  borderRight: `0px solid ${secondary}`,
                },
              }}
            >
              {loading && <Skeleton />}
              {data?.complaintArgument_getComplaintArguments?.result &&
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
              {/* {NonFeasibleArguments?.complaintNonFeasibleArgument_getComplaintNonFeasibleArguments.result?.items?.map(
                (item, index) =>
                  ArgumentCard({
                    state: stateInt,
                    addModal: addModal,
                    arguement: {
                      complaintId: item.complaintId,
                      createdDate: item.createdDate,
                      id: item.id,
                      filledBy: RegistrarType.Accuser,
                      isDeleted: item.isDeleted,
                      userId: item.userId,
                      summary: item.summary,
                      description: item.description,
                      financialSituation: item.financialSituation,
                      suggestedAmount: "",
                      fileName: item.financialStatusFileName,
                    },
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
              )} */}
              <TableRow
                sx={{
                  display: stateInt != 2 ? "none" : "table-row",
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
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: secondary,
                  }}
                >
                  جمع کل مبلغ مورد تایید کارشناس:
                  {convertToPersianDigits(
                    data?.complaintArgument_getComplaintArguments?.result?.items
                      ?.reduce(
                        (a, b) => a + (b?.netMailRoomExpertApprovedAmount ?? 0),
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
                      ?.reduce((a, b) => a + (b?.suggestedAmount ?? 0), 0)
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
                    color: "white",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: secondary,
                  }}
                >
                  هزینه داوری :
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

          {parseInt(state || "0") == 0 &&
          NonFeasibleArguments
            ?.complaintNonFeasibleArgument_getComplaintNonFeasibleArguments
            .result?.items?.length ? (
            <Table
              sx={{
                // backgroundColor: primaryGreyLightTransparent,
                // center every text
                "& thead": {
                  borderRadius: "2rem",
                  "& tr": {
                    "& th": {
                      color: "#fff",
                      background: secondary,
                      textAlign: "center",
                    },
                  },
                },
              }}
            >
              <TableHead
                sx={{
                  background: secondary,
                  borderRadius: "0.5rem",
                  color: "white",
                }}
              >
                <TableRow>
                  <TableCell
                    colSpan={5}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    دعاوی غیر قابل رسیدگی
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    شناسه
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    نوع بار مالی
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    فایل پیوست
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    ...
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& td": {
                    padding: "0.5rem",
                    borderBottom: `1px solid ${secondary}`,
                    borderRight: `1px solid ${secondary}`,
                  },
                  // add border to first column
                  "& td:first-child": {
                    borderRight: `1px solid ${secondary}`,
                    width: "max-content",
                  },
                  // add border to last column
                  "& td:last-child": {
                    borderLeft: `1px solid ${secondary}`,
                    borderRight: `0px solid ${secondary}`,
                  },
                }}
              >
                {loading && <Skeleton />}
                {NonFeasibleArguments?.complaintNonFeasibleArgument_getComplaintNonFeasibleArguments.result?.items?.map(
                  (item, index) => (
                    <TableRow>
                      <TableCell>{convertToPersianDigits(index + 1)}</TableCell>
                      <TableCell>
                        {item?.financialSituation &&
                          (JSON.parse(item?.financialSituation)?.title ==
                          "withFinancialEffects"
                            ? "دارای بار مالی"
                            : JSON.parse(item?.financialSituation)?.title ==
                              "withoutFinancialEffects"
                            ? "بدون بار مالی"
                            : "") +
                            "، " +
                            JSON.parse(item?.financialSituation)?.subtitle}
                      </TableCell>
                      <TableCell>
                        <Button
                          fullWidth
                          variant="text"
                          onClick={() => {
                            window.open(
                              "http://172.16.23.50:7030/files/" +
                                item.financialStatusFileName
                            );
                          }}
                          sx={{
                            color: primaryDark,
                            display: "flex",
                            gap: 3,
                            // outline:"2px solid",
                            // fontWeight:"bold",
                            fontSize: "1rem",
                          }}
                        >
                          <BsCloudDownloadFill />
                          دانلود فایل پیوست
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                        >
                          <Button
                            variant="text"
                            onClick={() => {
                              void DeleteNonFeasibleArgument({
                                variables: {
                                  input: item.id,
                                },
                                onCompleted(data) {
                                  console.log(data);

                                  void NonFeasibleRefetch();
                                },
                              });
                            }}
                            color="error"
                            sx={{
                              display: "flex",
                              gap: 3,
                              justifySelf: "center",
                              "&:hover": {
                                color: Red,
                              },
                            }}
                          >
                            <DeleteOutlineTwoTone />
                            حذف
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          ) : (
            ""
          )}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <IconButton
            sx={{
              background: Red,
              color: "white",
              // position: "fixed",
              // bottom: 10,
              // right: 200,
              fontSize: "3rem",
              display: 2 < stateInt && stateInt < 6 ? "flex" : "none",
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
            {/* <BsCheck /> */}
            <Typography
              fontSize={"1.2rem"}
              sx={{
                marginInline: "1rem",
              }}
            >
              عدم تایید
            </Typography>
          </IconButton>

          <IconButton
            sx={{
              background: primary,
              color: secondaryDark,
              // position: "fixed",
              // bottom: 10,
              // right: 10,
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
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForAccusedToRegisterContract
                      ).id,
                      arbitrationCost:
                        (data?.complaintArgument_getComplaintArguments?.result?.items?.reduce(
                          (a, b) => a + (b?.suggestedAmount ?? 0),
                          0
                        ) ?? 0) / 100,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate(
                      `/complaints/${complaintId || ""}/confirmComplaint`
                    );
                    void SetFirstAndSecondPaymentCost();
                    void sendSms();
                  },
                });
              } else if (stateInt == 1) {
                const agreed = confirm("آیا مطمئن هستید؟");
                if (!agreed) return;
                void updateCompaint({
                  variables: {
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForAccuserToViewArguments
                      ).id,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate("/complaints");
                    // here we goooooooooooooooooo
                    void SendAccusedRespondedSMS()
                    // void sendSMS({
                    //   variables: {
                    //     complaintId: complaintIdInt || 0,
                    //   },
                    // });
                  },
                });
              } else if (stateInt == -1) {
                const agreed = confirm("آیا مطمئن هستید؟");
                if (!agreed) return;
                void updateCompaint({
                  variables: {
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForChiefToAssign
                      ).id,
                    },
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
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForChiefToApproveExpertsAnswersToArguments
                      ).id,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate("/portal");
                  },
                });
              } else if (stateInt == 3) {
                const agreed = confirm("آیا مطمئن هستید؟");
                if (!agreed) return;
                void updateCompaint({
                  variables: {
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.GivingTrackingCodeToComplaint
                      ).id,
                      isApprovedByChief: true,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate("/portal");
                  },
                });
              } else if (stateInt == 4) {
                const agreed = confirm("آیا مطمئن هستید؟");
                if (!agreed) return;
                void updateCompaint({
                  variables: {
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.MailRoomChiefReviewingTheFinalReport
                      ).id,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate("/portal");
                  },
                });
              } else if (stateInt == 5) {
                const agreed = confirm("آیا مطمئن هستید؟");
                if (!agreed) return;
                void updateCompaint({
                  variables: {
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForCouncilResult
                      ).id,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate("/portal");
                  },
                });
              } else if (stateInt == 6) {
                const agreed = confirm("آیا مطمئن هستید؟");
                if (!agreed) return;
                void updateCompaint({
                  variables: {
                    input: {
                      id: complaintIdInt || 0,
                      complaintStateId: getComplaintStateWithEnum(
                        ComplaintStateStatus.WaitingForFinalResultUpload
                      ).id,
                    },
                  },
                  onCompleted() {
                    alert("ثبت شد");
                    navigate("/portal");
                  },
                });
              }
            }}
          >
            {/* <BsCheck /> */}
            <Typography
              fontSize={"1.2rem"}
              sx={{
                marginInline: "1rem",
              }}
            >
              تایید و ادامه
            </Typography>
          </IconButton>
        </Box>
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
        argumentId={selectedArgument.id ? selectedArgument.id : 0}
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
          void NonFeasibleRefetch();
        }}
      />
    </>
  );
};

export default AddArgument;
