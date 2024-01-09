/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { BsDownload, BsGearFill } from "react-icons/bs";
import { useUserStore } from "../../Context/UserStore";
import { GET_ALL_ORGANIZATION_USERS } from "../../GraphQL/Users/Queries";
import {
  ComplaintState,
  GetComplaintsWithFilterDocument,
  Get_Complaint_AssignedDocument,
  SetCouncilListMutationDocument,
  UpdateComplaintDocument,
} from "../../gql/graphql";
import { newStatesCap, newStatesFa } from "../../static/States";
import {
  primary,
  secondary
} from "../../theme/color";
import { equal } from "assert";

const CouncilList = () => {
  const [selectedList, setSelectedList] = React.useState<number[]>(
    []
  );

  const [files, setFiles] = React.useState<string[]>([]); // [
  const user = useUserStore((state) => state.user);
  const {
    data: assignedData,
    loading,
    refetch: assignedRefetch,
  } = useQuery(Get_Complaint_AssignedDocument, {
    variables: {
      id: user.id,
    },
    refetchWritePolicy: "overwrite",
    pollInterval: 2000,
    onCompleted(data) {
      console.log("assigned data", data);
    },
  });


  const {data :filteredData} = useQuery(GetComplaintsWithFilterDocument,{
    variables:{
      filter:{
        and:[
          {
            assignedUserId:{
              eq:user.id
            }
          },
          {
            complaintState:{
              in:[ComplaintState.GivingTrackingCodeToComplaint]
            }
          }
        ]
      }
    },
    onCompleted(data) {
      console.log("filtered data", data);
    },
  })

  const [updateComplaint, { data: updateData }] = useMutation(
    UpdateComplaintDocument
  );

  const [departments, setDepartments] = React.useState<
    {
      label: string;
      id: string;
      type:
        | "INDIVIDUAL"
        | "ORGANIZATION"
        | "CONTRACTOR_OR_CONSULTANT";
    }[]
  >([]);
  useQuery(GET_ALL_ORGANIZATION_USERS, {
    onCompleted(data) {
      console.log(data);
      setDepartments(
        data?.user_getUsers?.result?.items?.map(
          (item: {
            id: number;
            fullName: string;
            userType:
              | "INDIVIDUAL"
              | "ORGANIZATION"
              | "CONTRACTOR_OR_CONSULTANT";
          }) => ({
            label: item.fullName,
            id: item.id,
            type: item.userType,
          })
        )
      );
    },
    onError(error) {
      console.log(error);
    },
  });

  const [setCouncilList, { data, loading: mutationLoading }] =
    useMutation(SetCouncilListMutationDocument, {
      variables: {
        ids: selectedList,
      },
    });
  return (
    <>
      <TableContainer
        sx={{
          gridColumn: "1 / span 12",
          m: 0,
          // outline: "2px solid #000",
          // change the table head background color
          borderRadius: "0.5rem",
          // border:'none',
          "& .MuiTableCell-head": {
            backgroundColor: secondary,
            color: primary,
            outline: `1px solid ${primary}`,
            padding: "0.2rem",
            textAlign: "center",
          },
          // give each cell border
          "& .MuiTableCell-root": {
            border: `1px solid ${secondary}`,
          },
          "& .MuiTableCell-body": {
            fontSize: "1rem",
            padding: "0.2rem",
            textAlign: "center",
          },
        }}
      >
        <Table>
          <TableHead
            sx={{
              fontSize: "1.2rem",
            }}
          >
            <TableCell>
              <Checkbox
                checked={
                  filteredData?.complaint_getComplaints.result?.items
                    ?.length === selectedList.length
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedList(
                      filteredData?.complaint_getComplaints.result?.items?.map(
                        (item) => item.id
                      )!
                    );
                  } else {
                    setSelectedList([]);
                  }
                }}
                sx={{
                  color: primary,
                  accentColor: primary,
                  ":checked": {
                    color: primary,
                  },
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.1rem",
              }}
            >
              شماره درخواست
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.1rem",
              }}
            >
              شماره قرارداد
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.1rem",
              }}
            >
              خواهان
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.1rem",
              }}
            >
              خوانده
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.1rem",
              }}
            >
              وضعیت
            </TableCell>
          </TableHead>
          <TableBody>
            {filteredData?.complaint_getComplaints.result?.items?.map(
              (item) => (
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={selectedList.includes(item.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedList([...selectedList, item.id]);
                        } else {
                          setSelectedList(
                            selectedList.filter(
                              (id) => id !== item.id
                            )
                          );
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.contractId}</TableCell>
                  <TableCell>
                    {
                      departments.find(
                        (department) =>
                          department.id ===
                          item.contract?.accuserDepartmentUserId
                      )?.label
                    }
                  </TableCell>
                  <TableCell>
                    {
                      departments.find(
                        (department) =>
                          department.id ===
                          item.contract?.accusedDepartmentUserId
                      )?.label
                    }
                  </TableCell>
                  <TableCell>
                    {
                      newStatesFa[
                        newStatesCap.indexOf(item.complaintState)
                      ]
                    }
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="end" mt={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: secondary,
            color: primary,
            paddingX: "3rem",
          }}
          endIcon={<BsGearFill />}
          disabled={selectedList.length === 0}
          onClick={() => {
            void setCouncilList({
              onCompleted(data) {
                console.log(data);
                if (
                  data.complaint_setInCouncilList.result?.result.some(
                    (item) => item.value == false
                  ) ||
                  data.complaint_setInCouncilList.result?.result
                    .length === 0
                ) {
                  alert("خطا در تولید نامه ها");
                } else {
                  setFiles(
                    data.complaint_setInCouncilList.result?.fileNames!
                  );
                  data.complaint_setInCouncilList.result?.result?.map(
                    (complaint) => {
                      void updateComplaint({
                        variables: {
                          id: complaint.key,
                          complaintState:
                            ComplaintState.WaitingForFirstPayment,
                        },
                      });
                    }
                  );
                }
              },
            });
          }}
        >
          تولید نامه
        </Button>
      </Box>
      {data?.complaint_setInCouncilList?.result?.result.length !==
        0 &&
        data?.complaint_setInCouncilList?.status.code === 1 && (
          <Box sx={{ mt: 2 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              // justifyContent={"space-between"}
              sx={{
                backgroundColor: green[100],
                width: "100%",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <Box>نامه های تولید شده:</Box>
              {files.map((file) =>
                file.includes("Attachment") ? (
                  <Box
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    onClick={() => {
                      window.open(
                        `http://172.16.23.50:7030/files/letters/${file}`
                      );
                    }}
                    sx={{
                      backgroundColor: green["A100"],
                      boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    فایل پیوست
                    <IconButton>
                      <BsDownload />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    onClick={() => {
                      window.open(
                        `http://172.16.23.50:7030/files/letters/${file}`
                      );
                    }}
                    sx={{
                      backgroundColor: green["A100"],
                      boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    فایل نامه
                    <IconButton>
                      <BsDownload />
                    </IconButton>
                  </Box>
                )
              )}
            </Box>
          </Box>
        )}
    </>
  );
};

export default CouncilList;
