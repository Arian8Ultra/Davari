/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  useGetComplaintsWithFilterQuery,
  useGetReqestedDocsQueryLazyQuery,
  useGetReqestedDocsQueryQuery,
  useGetUserWithFilterLazyQuery,
  useUpdateComplaintFullMutation,
} from "../../../../generated-types";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { primary, secondary } from "../../../theme/color";
import { useUserStore } from "../../../Context/UserStore";
import { ComplaintState, TargetType } from "../../../gql/graphql";
import FileBox from "../../../components/FileBox";
import UploadDocCard from "./UploadDocCard";

const UploadDocs = () => {
  const { complaintId } = useParams<{ complaintId: string }>();
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const { data: complaint } = useGetComplaintsWithFilterQuery({
    variables: {
      filter: {
        id: { eq: parseInt(complaintId || "") || 0 },
      },
    },
    onCompleted(data) {
      void GetAccuser();
      void GetAccused();
    },
  });
  const [updateComplaint, { loading }] =
    useUpdateComplaintFullMutation();

  const [GetAccuser, { data: AccuserData }] =
    useGetUserWithFilterLazyQuery({
      variables: {
        filter: {
          id: {
            eq: complaint?.complaint_getComplaints.result?.items?.[0]
              ?.contract?.accuserDepartmentUserId,
          },
        },
      },
      onCompleted(data) {
        void getRequests();
      },
    });

  const [
    getRequests,
    { data: requestedDocsData, refetch: requestedDocsRefetch },
  ] = useGetReqestedDocsQueryLazyQuery({
    variables: {
      filter: {
        and: [
          {
            complaintId: {
              eq: parseInt(complaintId || "") || 0,
            },
          },
          {
            or: [
              {
                target: {
                  eq:
                    user?.id ==
                    AccuserData?.user_getUsers.result?.items?.[0]?.id
                      ? TargetType.Accuser
                      : TargetType.Accused,
                },
              },
              {
                target: {
                  eq: TargetType.Both,
                },
              },
              {
                target: {
                  eq: null,
                },
              },
            ],
          },
        ],
      },
    },
    onCompleted(data) {
      console.log("🚀 ~ onCompleted ~ data:", data);
    },
  });

  const { data: allRequests, refetch } = useGetReqestedDocsQueryQuery(
    {
      variables: {
        filter: {
          complaintId: {
            eq: parseInt(complaintId || "") || 0,
          },
        },
      },
    }
  );

  const [GetAccused, { data: AccusedData }] =
    useGetUserWithFilterLazyQuery({
      variables: {
        filter: {
          id: {
            eq: complaint?.complaint_getComplaints.result?.items?.[0]
              ?.contract?.accusedDepartmentUserId,
          },
        },
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
            مدارک مورد نیاز
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
        }}
      >
        <Table
          sx={{
            // backgroundColor: primaryGreyLightTransparent,
            borderRadius: "0.5rem",
            "& MuiTableCell-root": {
              textAlign: "center",
              padding: "0.1rem",
            },
          }}
        >
          <TableHead
            sx={{
              background: secondary,
              borderRadius: "0.5rem",
              color: "white",
              // center the text in cells
              "& th": {
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              },
            }}
          >
            <TableRow>
              <TableCell>نام مدرک</TableCell>
              <TableCell>وضعیت</TableCell>
              <TableCell>فایل</TableCell>
              <TableCell>آپلود</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              // delete padding of cells
              "& td": {
                padding: "0.5rem",
                borderBottom: `1px solid ${secondary}`,
              },
              // add border to first column
              "& td:first-child": {
                borderRight: `1px solid ${secondary}`,
                width: "max-content",
              },
              // add border to last column
              "& td:last-child": {
                borderLeft: `1px solid ${secondary}`,
              },
            }}
          >
            {requestedDocsData?.documentRequest_getDocumentRequests.result?.items?.map(
              (item) => (
                <UploadDocCard
                  complaintId={item.complaintId}
                  createdDate={item.createdDate}
                  isDeleted={item.isDeleted}
                  id={item.id}
                  requestedDocumentName={item.requestedDocumentName}
                  userId={item.userId}
                  requestedDocumentFileName={
                    item.requestedDocumentFileName
                  }
                  target={item.target as TargetType}
                  key={item.id}
                  reftech={() => {
                    void requestedDocsRefetch();
                    void refetch();
                  }}
                  __typename={item.__typename}
                />
              )
            )}
          </TableBody>
        </Table>
      </Box>

      <Box display={"flex"} justifyContent={"flex-end"} my={2}>
        {loading && <Typography>در حال ثبت اطلاعات</Typography>}
        {loading && <LinearProgress sx={{ width: "100%" }} />}
        <Button
          variant={"contained"}
          sx={{
            backgroundColor: primary,
            padding: "0.5rem 2rem",
            borderRadius: "3rem",
            color: secondary,
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: secondary,
              color: primary,
            },
          }}
          onClick={() => {
            const agree = confirm(
              "آیا از ثبت نهایی اطلاعات اطمینان دارید؟"
            );
            if (agree) {
              if (
                allRequests?.documentRequest_getDocumentRequests.result?.items?.some(
                  (item) => item.requestedDocumentFileName == null
                )
              ) {
                if (
                  requestedDocsData?.documentRequest_getDocumentRequests.result?.items?.some(
                    (item) => item.requestedDocumentFileName == null
                  )
                ) {
                  alert("لطفا تمامی مدارک را آپلود کنید");
                  return;
                } else {
                  alert("طرف مقابل هنوز مدارک را آپلود نکرده است");
                  navigate(`/complaints`);
                }
              } else {
                void updateComplaint({
                  variables: {
                    input: {
                      id: parseInt(complaintId || "") || 0,
                      complaintState:
                        ComplaintState.ReviewingCaseByCaseExpert,
                    },
                  },
                  onCompleted(data, clientOptions) {
                    console.log("🚀 ~ onCompleted ~ data", data);
                    navigate(`/complaints`);
                  },
                });
              }
            }
          }}
        >
          ثبت و تایید نهایی
        </Button>
      </Box>
    </>
  );
};

export default UploadDocs;
