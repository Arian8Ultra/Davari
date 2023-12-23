/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { BsGearFill } from "react-icons/bs";
import { useUserStore } from "../../Context/UserStore";
import { GET_ALL_ORGANIZATION_USERS } from "../../GraphQL/Users/Queries";
import {
  Get_Complaint_AssignedDocument,
  SetCouncilListMutationDocument,
} from "../../gql/graphql";
import {
  newStatesCap,
  newStatesFa
} from "../../static/States";
import { primary, secondary } from "../../theme/color";

const CouncilList = () => {
  const [selectedList, setSelectedList] = React.useState<number[]>(
    []
  );
  const user = useUserStore((state) => state.user);
  const {
    data: assignedData,
    loading,
    refetch: assignedRefetch,
  } = useQuery(Get_Complaint_AssignedDocument, {
    variables: {
      id: user.id,
    },
    onCompleted(data) {
      console.log("assigned data", data);
    },
  });

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
          }
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
                  assignedData?.complaint_getComplaints.result?.items
                    ?.length === selectedList.length
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedList(
                      assignedData?.complaint_getComplaints.result?.items?.map(
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
            {assignedData?.complaint_getComplaints.result?.items?.map(
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
          onClick={() => {
            void setCouncilList();
          }}
        >
          تولید نامه
        </Button>
      </Box>
      {data?.complaint_setInCouncilList.status.code === 200 && (
        <Alert severity="success" sx={{ mt: 2 }}>
          نامه با موفقیت تولید شد
        </Alert>
      )}
    </>
  );
};

export default CouncilList;
