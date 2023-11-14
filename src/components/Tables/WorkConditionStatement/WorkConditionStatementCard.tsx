/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApolloQueryResult } from "@apollo/client";
import {
  Add,
  CancelOutlined,
  EditOutlined,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  TableCell,
  TableRow,
  Tooltip
} from "@mui/material";
import { useEffect, useState } from "react";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import {
  DELETE_WORK_CONDITION_STATEMENT,
  DELETE_WORK_CONDITION_STATEMENT_PART,
  WorkConditionStatement,
  WorkConditionStatementPart
} from "../../../GraphQL/Tables/Mutations";
import { GET_WORK_CONDITION_STATEMENT } from "../../../GraphQL/Tables/Queries";
import { convertToPersianDigits } from "../../../functions/Functions";
import {
  Red,
  RedLight,
  primary,
  primaryLight,
  primaryTransparent,
  secondaryDark,
  secondaryLighter
} from "../../../theme/color";
  
  interface WorkConditionStatementCard {
    WorkConditionStatement: WorkConditionStatement;
    setNewWorkConditionStatement: React.Dispatch<
      React.SetStateAction<WorkConditionStatement>
    >;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: (
      variables?: Partial<any> | undefined
    ) => Promise<ApolloQueryResult<any>>;
    setAddWorkConditionStatementPartModal: (
      value: React.SetStateAction<{
        open: boolean;
        WorkConditionStatementPart: WorkConditionStatementPart;
        WorkConditionStatementId?: number | undefined;
      }>
    ) => void;
  }
  export default function WorkConditionStatementCard({
    WorkConditionStatement,
    setNewWorkConditionStatement,
    setEditMode,
    refetch,
    setAddWorkConditionStatementPartModal,
  }: WorkConditionStatementCard) {
    const {
      handleMutation: deleteWorkConditionStatement,
    } = MutationWrapper(
      DELETE_WORK_CONDITION_STATEMENT,
      "workConditionStatement_deleteWorkConditionStatement"
    );
    const [WorkConditionStatementParts, setWorkConditionStatementParts] =
      useState<WorkConditionStatementPart[]>();
  
    const {
      handleMutation: deleteWorkConditionStatementPart,
    } = MutationWrapper(
      DELETE_WORK_CONDITION_STATEMENT_PART,
      "workConditionStatementPart_deleteWorkConditionStatementPart"
    );
  
    const { data,refetch:WorkConditionStatementRefetch } = QueryWrapper(
      GET_WORK_CONDITION_STATEMENT,
      "workConditionStatement_getWorkConditionStatement",
      { id: WorkConditionStatement.id },
      {
        onCompleted(data) {
          console.log(
            "workConditionStatement_getWorkConditionStatement",
            data
          );
          setWorkConditionStatementParts(data.workConditionStatementParts);
        },
      }
    );
  
    useEffect(() => {
      setWorkConditionStatementParts(data?.workConditionStatementParts);
    }, [data]);
  
    return (
      <>
        <TableRow key={WorkConditionStatement.id}>
          <TableCell>{WorkConditionStatement.title}</TableCell>
          <TableCell>
            {convertToPersianDigits(
              WorkConditionStatement.amountProvidedByContractor
            )
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TableCell>
          <TableCell>
            {new Date(
              WorkConditionStatement?.dateProvidedByContractor
            ).toLocaleDateString("fa-IR")}
          </TableCell>
          <TableCell>
            {convertToPersianDigits(
              WorkConditionStatement.amountConfirmedByConsultant
            )
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TableCell>
          <TableCell>
            {new Date(
              WorkConditionStatement?.dateConfirmedByConsultant
            ).toLocaleDateString("fa-IR")}
          </TableCell>
          <TableCell>
            {convertToPersianDigits(
              WorkConditionStatement.amountApprovedByEmployer
            )
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TableCell>
          <TableCell>
            {new Date(
              WorkConditionStatement?.dateApprovedByEmployer
            ).toLocaleDateString("fa-IR")}
          </TableCell>
          <TableCell>
            {convertToPersianDigits(WorkConditionStatement.amountPaid)
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TableCell>
          <TableCell>
            {new Date(WorkConditionStatement?.datePaid).toLocaleDateString(
              "fa-IR"
            )}
          </TableCell>
          <TableCell>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
                // flexWrap:'wrap'
              }}
            >
              <Tooltip title={"افزودن زیرمجموعه"}>
                <IconButton
                  sx={{
                    borderRadius: "10px",
                    background: primary,
                    color: secondaryDark,
                    "&:hover": {
                      background: primaryLight,
                    },
                    gap: "0.5rem",
                  }}
                  onClick={() => {
                    setAddWorkConditionStatementPartModal({
                      open: true,
                      WorkConditionStatementPart:
                        {} as WorkConditionStatementPart,
                      WorkConditionStatementId: WorkConditionStatement.id,
                    });
                  }}
                >
                  <Add />
                </IconButton>
              </Tooltip>
              <Tooltip title={"ویرایش"}>
                <IconButton
                  sx={{
                    borderRadius: "10px",
                    background: secondaryLighter,
                    color: secondaryDark,
                    "&:hover": {
                      background: primaryLight,
                    },
                    gap: "0.5rem",
                  }}
                  onClick={() => {
                    setNewWorkConditionStatement(WorkConditionStatement);
                    setEditMode(true);
                  }}
                >
                  {/* <FaTypography variant="body2" textAlign={"center"}>
                    ویرایش
                  </FaTypography> */}
                  <EditOutlined />
                </IconButton>
              </Tooltip>
  
              <Tooltip title={"حذف"}>
                <IconButton
                  sx={{
                    borderRadius: "10px",
                    background: Red,
                    color: "white",
                    "&:hover": {
                      background: RedLight,
                      color: Red,
                    },
                    gap: "0.5rem",
                  }}
                  onClick={() => {
                    void deleteWorkConditionStatement({
                      variables: {
                        id: WorkConditionStatement.id,
                      },
                    }).then(() => {
                      setNewWorkConditionStatement(
                        {} as WorkConditionStatement
                      );
                      void refetch();
                    });
                  }}
                >
                  {/* <FaTypography variant="body2" textAlign={"center"}>
                    حذف
                  </FaTypography> */}
                  <CancelOutlined />
                </IconButton>
              </Tooltip>
            </Box>
          </TableCell>
        </TableRow>
        {/* {JSON.stringify(WorkConditionStatementParts)} */}
        {WorkConditionStatementParts?.map(
          (WorkConditionStatementPart: WorkConditionStatementPart) => (
            <TableRow
              key={WorkConditionStatementPart.id}
              sx={{
                backgroundColor: primaryTransparent,
                borderLeft: `2px solid ${primary}`,
              }}
            >
              <TableCell></TableCell>
  
              <TableCell>
                {convertToPersianDigits(
                  WorkConditionStatementPart.amountProvidedByContractor
                )
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </TableCell>
              <TableCell>
                {new Date(
                  WorkConditionStatementPart?.dateProvidedByContractor
                ).toLocaleDateString("fa-IR")}
              </TableCell>
              <TableCell>
                {convertToPersianDigits(
                  WorkConditionStatementPart.amountConfirmedByConsultant
                )
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </TableCell>
              <TableCell>
                {new Date(
                  WorkConditionStatementPart?.dateConfirmedByConsultant
                ).toLocaleDateString("fa-IR")}
              </TableCell>
              <TableCell>
                {convertToPersianDigits(
                  WorkConditionStatementPart.amountApprovedByEmployer
                )
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </TableCell>
              <TableCell>
                {new Date(
                  WorkConditionStatementPart?.dateApprovedByEmployer
                ).toLocaleDateString("fa-IR")}
              </TableCell>
              <TableCell>
                {convertToPersianDigits(
                  WorkConditionStatementPart.amountPaid
                )
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </TableCell>
              <TableCell>
                {new Date(
                  WorkConditionStatementPart?.datePaid
                ).toLocaleDateString("fa-IR")}
              </TableCell>
  
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1rem",
                    // flexWrap:'wrap'
                  }}
                >
                  <Tooltip title={"ویرایش"}>
                    <IconButton
                      sx={{
                        borderRadius: "10px",
                        background: secondaryLighter,
                        color: secondaryDark,
                        "&:hover": {
                          background: primaryLight,
                        },
                        gap: "0.5rem",
                      }}
                      onClick={() => {
                        setAddWorkConditionStatementPartModal({
                          open: true,
                          WorkConditionStatementPart:
                            WorkConditionStatementPart,
                          WorkConditionStatementId: WorkConditionStatement.id,
                        });
                      }}
                    >
                      {/* <FaTypography variant="body2" textAlign={"center"}>
                    ویرایش
                  </FaTypography> */}
                      <EditOutlined />
                    </IconButton>
                  </Tooltip>
  
                  <Tooltip title={"حذف"}>
                    <IconButton
                      sx={{
                        borderRadius: "10px",
                        background: Red,
                        color: "white",
                        "&:hover": {
                          background: RedLight,
                          color: Red,
                        },
                        gap: "0.5rem",
                      }}
                      onClick={() => {
                        void deleteWorkConditionStatementPart({
                          variables: {
                            id: WorkConditionStatementPart.id,
                          },
                        }).then(() => {
                          setNewWorkConditionStatement(
                            {} as WorkConditionStatement
                          );
                          void refetch();
                          void WorkConditionStatementRefetch()
                        });
                      }}
                    >
                      {/* <FaTypography variant="body2" textAlign={"center"}>
                    حذف
                  </FaTypography> */}
                      <CancelOutlined />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          )
        )}
      </>
    );
  }
  