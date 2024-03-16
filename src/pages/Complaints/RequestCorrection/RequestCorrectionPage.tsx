/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  useAddCorrectionRequestsMutation,
  useDeleteRequestedDocMutationMutation,
  useGetCorrectionRequestsFullQueryQuery,
  useUpdateCorrectionRequestsMutation,
} from "../../../../generated-types";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  GreenLight,
  Red,
  RedLight,
  primary,
  primaryDark,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import { BsPlus, BsPlusCircle } from "react-icons/bs";
import { useUserStore } from "../../../Context/UserStore";
import { Delete } from "@mui/icons-material";

const RequestCorrectionPage = () => {
  const { complaintId } = useParams<{ complaintId: string }>();
  const user = useUserStore.getState().user;
  const [tempRequest, setTempRequest] = React.useState({
    clause: "",
    reason: "",
    suggestion: "",
  });
  const [selectedRequest, setSelectedRequest] = React.useState({
    clause: "",
    reason: "",
    suggestion: "",
    id: 0,
  });
  const [addRequest] = useAddCorrectionRequestsMutation({
    variables: {
      input: {
        clause: tempRequest.clause,
        reason: tempRequest.reason,
        suggestion: tempRequest.suggestion,
        complaintId: parseInt(complaintId || ""),
        userId: user.id,
      },
    },
  });

  const {
    data: addRequestData,
    loading: addRequestLoading,
    error: addRequestError,
    refetch,
  } = useGetCorrectionRequestsFullQueryQuery({
    variables: {
      filter: {
        complaintId: { eq: parseInt(complaintId || "") },
      },
    },
  });

  const [deleteRequest] = useDeleteRequestedDocMutationMutation({
    onCompleted() {
      void refetch();
    },
  });
  const [updateRequest] = useUpdateCorrectionRequestsMutation({
    onCompleted() {
      void refetch();
    },
  });

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box
          borderRadius={"3rem"}
          sx={{
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            justifySelf: "center",
            zIndex: 1000,
          }}
        >
          <Typography variant={"h6"} sx={{ color: secondary }}>
            طرح درخواست اصلاح
          </Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            backgroundColor: secondary,
            height: "0.2rem",
            margin: "1rem 0",
            position: "absolute",
          }}
        />
      </Box>

      <Box
        sx={{
          borderRadius: "0.5rem",
          outline: `2px solid ${secondary}`,
          backgroundColor: "rgb(220,220,220)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          my: "2rem",
          overflow: "hidden",
          width: "100%",
          mx: "auto",
        }}
      >
        <Table
          sx={{
            // backgroundColor: primaryGreyLightTransparent,
            borderRadius: "0.5rem",
          }}
        >
          <TableHead
            sx={{
              background: secondary,
              borderRadius: "0.5rem",
              color: "white",
              "& th": {
                textAlign: "center",
              },
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                شماره بند
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                دلیل درخواست اصلاح
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                پیشنهاد اصلاح
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              // delete padding of cells
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
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                <TextField
                  label={"شماره بند"}
                  fullWidth
                  value={tempRequest.clause}
                  onChange={(e) =>
                    setTempRequest({
                      ...tempRequest,
                      clause: e.target.value,
                    })
                  }
                />
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                <TextField
                  label={"دلیل درخواست اصلاح"}
                  fullWidth
                  value={tempRequest.reason}
                  onChange={(e) =>
                    setTempRequest({
                      ...tempRequest,
                      reason: e.target.value,
                    })
                  }
                />
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                <TextField
                  label={"پیشنهاد اصلاح"}
                  fullWidth
                  value={tempRequest.suggestion}
                  onChange={(e) =>
                    setTempRequest({
                      ...tempRequest,
                      suggestion: e.target.value,
                    })
                  }
                />
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                <IconButton
                  onClick={() => {
                    void addRequest({
                      onCompleted(data, clientOptions) {
                        void refetch();
                      },
                    });
                  }}
                  sx={{
                    // borderRadius: "0",
                    marginBlock: "-0.5rem",
                    background: primary,
                    // width:"100%"
                    "&:hover": {
                      color: primaryDark,
                    },
                  }}
                >
                  <BsPlusCircle />
                </IconButton>
              </TableCell>
            </TableRow>
            {addRequestData?.correctionRequest_getCorrectionRequests.result?.items?.map(
              (request) => (
                <TableRow key={request.id}>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {request.clause}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {request.reason}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {request.suggestion}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        void deleteRequest({
                          variables: {
                            id: request.id,
                          },
                        });
                      }}
                      sx={{
                        // borderRadius: "0",
                        background: RedLight,
                        // width:"100%"
                        "&:hover": {
                          color: Red,
                        },
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Box>

      <Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
        <Button
          sx={{
            background: primary,
            color: secondaryDark,
            bottom: 10,
            right: 10,
            fontSize: "1.2rem",
            borderRadius: "1.5rem",
            "&:hover": {
              backgroundColor: GreenLight,
              color: secondaryDark,
            },
          }}
          onClick={() => {
            window.location.href = `/complaints`;
          }}
        >
          تایید و ادامه
        </Button>
      </Box>
    </>
  );
};

export default RequestCorrectionPage;
