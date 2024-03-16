/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApolloQueryResult } from "@apollo/client";
import { Add, CancelOutlined, EditOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import {
  AdjustmentStatement,
  AdjustmentStatementPart,
  CREATE_ADJUSTMENT_STATEMENT_PART,
  DELETE_ADJUSTMENT_STATEMENT,
  DELETE_ADJUSTMENT_STATEMENT_PART,
} from "../../../GraphQL/Tables/Mutations";
import { GET_ADJUSTMENT_STATEMENT } from "../../../GraphQL/Tables/Queries";
import { convertToPersianDigits } from "../../../functions/Functions";
import {
  Red,
  RedLight,
  primary,
  primaryLight,
  primaryTransparent,
  secondaryDark,
  secondaryLighter,
} from "../../../theme/color";
import { useDelete_Adjustment_StatementMutation } from "../../../../generated-types";

interface AdjustmentStatementCardProps {
  AdjustmentStatement: AdjustmentStatement;
  setNewAdjustmentStatement: React.Dispatch<
    React.SetStateAction<AdjustmentStatement>
  >;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  setAddAdjustmentStatementPartModal: (
    value: React.SetStateAction<{
      open: boolean;
      AdjustmentStatementPart: AdjustmentStatementPart;
      AdjustmentStatementId?: number | undefined;
    }>
  ) => void;
  isConsultant?: boolean;
  refetchBoolean?: boolean;
}
export default function AdjustmentStatementCard({
  AdjustmentStatement,
  setNewAdjustmentStatement,
  setEditMode,
  refetch,
  setAddAdjustmentStatementPartModal,
  isConsultant,
  refetchBoolean,
}: AdjustmentStatementCardProps) {
  const [deleteAdjustmentStatement] = useDelete_Adjustment_StatementMutation();
  const [AdjustmentStatementParts, setAdjustmentStatementParts] =
    useState<AdjustmentStatementPart[]>();

  const { handleMutation: deleteAdjustmentStatementPart } = MutationWrapper(
    DELETE_ADJUSTMENT_STATEMENT_PART,
    "AdjustmentStatementPart_deleteAdjustmentStatementPart"
  );

  const { data, refetch: AdjustmentStatementRefetch } = QueryWrapper(
    GET_ADJUSTMENT_STATEMENT,
    "adjustmentStatement_getAdjustmentStatement",
    { id: AdjustmentStatement.id },
    {
      onCompleted(data) {
        console.log("AdjustmentStatement_getAdjustmentStatement", data);
        setAdjustmentStatementParts(data.AdjustmentStatementParts);
      },
    }
  );

  useEffect(() => {
    setAdjustmentStatementParts(data?.adjustmentStatementParts);
  }, [data]);

  // if refetch function called from parent component then refetch the data with AdjustmentStatementRefetch
  useEffect(() => {
    void AdjustmentStatementRefetch();
  }, [refetchBoolean]);

  return (
    <>
      <TableRow key={AdjustmentStatement.id}>
        <TableCell>{AdjustmentStatement.title}</TableCell>
        <TableCell>
          {convertToPersianDigits(
            AdjustmentStatement.amountProvidedByContractor
          )
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </TableCell>
        <TableCell>
          {new Date(
            AdjustmentStatement?.dateProvidedByContractor
          ).toLocaleDateString("fa-IR")}
        </TableCell>
        {/* <TableCell>
          {convertToPersianDigits(
            AdjustmentStatement.amountConfirmedByConsultant
          )
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </TableCell>
        <TableCell>
          {new Date(
            AdjustmentStatement?.dateConfirmedByConsultant
          ).toLocaleDateString("fa-IR")}
        </TableCell> */}

        {!isConsultant && (
          <>
            <TableCell>
              {convertToPersianDigits(
                AdjustmentStatement.amountConfirmedByConsultant
              )
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </TableCell>
            <TableCell>
              {new Date(
                AdjustmentStatement?.dateConfirmedByConsultant
              ).toLocaleDateString("fa-IR")}
            </TableCell>
          </>
        )}
        <TableCell>
          {convertToPersianDigits(AdjustmentStatement.amountApprovedByEmployer)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </TableCell>
        <TableCell>
          {new Date(
            AdjustmentStatement?.dateApprovedByEmployer
          ).toLocaleDateString("fa-IR")}
        </TableCell>
        <TableCell>
          {convertToPersianDigits(AdjustmentStatement.amountPaid)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </TableCell>
        <TableCell>
          {new Date(AdjustmentStatement?.datePaid).toLocaleDateString("fa-IR")}
        </TableCell>
        <TableCell></TableCell>
        <TableCell>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3,auto)",
              gap: "0.5rem",
              // flexWrap:'wrap'
            }}
          >
            <Button
              variant="text"
              sx={{
                color: primary,
                "&:hover": {
                  color: primary,
                },
              }}
              onClick={() => {
                setAddAdjustmentStatementPartModal({
                  open: true,
                  AdjustmentStatementPart: {} as AdjustmentStatementPart,
                  AdjustmentStatementId: AdjustmentStatement.id,
                });
              }}
            >
              <Add />
              افزودن زیرمجموعه
            </Button>
            {/* <Tooltip title={"افزودن زیرمجموعه"}>
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
                  setAddAdjustmentStatementPartModal({
                    open: true,
                    AdjustmentStatementPart:
                      {} as AdjustmentStatementPart,
                    AdjustmentStatementId: AdjustmentStatement.id,
                  });
                }}
              >
                <Add />
              </IconButton>
            </Tooltip> */}

            <Button
              variant="text"
              sx={{
                color: secondaryDark,
                "&:hover": {
                  color: secondaryDark,
                },
              }}
              onClick={() => {
                setNewAdjustmentStatement({
                  adjustmentStatementTableId:
                    AdjustmentStatement.adjustmentStatementTableId,
                  amountApprovedByEmployer:
                    AdjustmentStatement.amountApprovedByEmployer,
                  amountConfirmedByConsultant:
                    AdjustmentStatement.amountConfirmedByConsultant,
                  amountPaid: AdjustmentStatement.amountPaid,
                  amountProvidedByContractor:
                    AdjustmentStatement.amountProvidedByContractor,
                  dateApprovedByEmployer: new Date(
                    AdjustmentStatement.dateApprovedByEmployer
                  ),
                  dateConfirmedByConsultant: new Date(
                    AdjustmentStatement.dateConfirmedByConsultant
                  ),
                  datePaid: new Date(AdjustmentStatement.datePaid),
                  dateProvidedByContractor: new Date(
                    AdjustmentStatement.dateProvidedByContractor
                  ),
                  filledBy: AdjustmentStatement.filledBy,
                  id: AdjustmentStatement.id,
                  operationPeriodEndDate: new Date(
                    AdjustmentStatement.operationPeriodEndDate
                  ),
                  operationPeriodStartDate: new Date(
                    AdjustmentStatement.operationPeriodStartDate
                  ),
                  title: AdjustmentStatement.title,
                });
                setEditMode(true);
              }}
            >
              <EditOutlined />
              ویرایش
            </Button>

            {/* <Tooltip title={"ویرایش"}>
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
                  setNewAdjustmentStatement(AdjustmentStatement);
                  setEditMode(true);
                }}
              >
                <EditOutlined />
              </IconButton>
            </Tooltip> */}

            <Button
              variant="text"
              sx={{
                color: Red,
                "&:hover": {
                  color: Red,
                },
              }}
              onClick={() => {
                void deleteAdjustmentStatement({
                  variables: {
                    id: AdjustmentStatement.id,
                  },
                  onCompleted(data, clientOptions) {
                    console.log("deleteAdjustmentStatement", data);
                    if (
                      data?.adjustmentStatement_deleteAdjustmentStatement
                        ?.status?.code === 1
                    ) {
                      setNewAdjustmentStatement({} as AdjustmentStatement);
                      window.location.reload();
                      // void refetch();
                    }
                  },
                });
              }}
            >
              <CancelOutlined />
              حذف
            </Button>

            {/* <Tooltip title={"حذف"}>
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
                  void deleteAdjustmentStatement({
                    variables: {
                      id: AdjustmentStatement.id,
                    },
                  }).then((res) => {
                    setNewAdjustmentStatement(
                      {} as AdjustmentStatement
                    );
                    void refetch();
                  });
                }}
              >
                <CancelOutlined />
              </IconButton>
            </Tooltip> */}
          </Box>
        </TableCell>
      </TableRow>
      {/* {JSON.stringify(AdjustmentStatementParts)} */}
      {AdjustmentStatementParts?.map(
        (AdjustmentStatementPart: AdjustmentStatementPart, index) => (
          <TableRow
            key={AdjustmentStatementPart.id}
            sx={{
              backgroundColor: primaryTransparent,
              borderLeft: `2px solid ${primary}`,
            }}
          >
            <TableCell>
              {AdjustmentStatement.title + " - " + String(index + 1)}
            </TableCell>

            <TableCell>
              {/* {convertToPersianDigits(
                AdjustmentStatementPart.amountProvidedByContractor
              )
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
            </TableCell>
            <TableCell>
              {/* {new Date(
                AdjustmentStatementPart?.dateProvidedByContractor
              ).toLocaleDateString("fa-IR")} */}
            </TableCell>
            <TableCell>
              {/* {convertToPersianDigits(
                AdjustmentStatementPart.amountConfirmedByConsultant
              )
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
            </TableCell>
            <TableCell>
              {/* {new Date(
                AdjustmentStatementPart?.dateConfirmedByConsultant
              ).toLocaleDateString("fa-IR")} */}
            </TableCell>
            <TableCell>
              {/* {convertToPersianDigits(
                AdjustmentStatementPart.amountApprovedByEmployer
              )
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
            </TableCell>
            <TableCell>
              {/* {new Date(
                AdjustmentStatementPart?.dateApprovedByEmployer
              ).toLocaleDateString("fa-IR")} */}
            </TableCell>
            <TableCell>
              {convertToPersianDigits(AdjustmentStatementPart.amountPaid)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </TableCell>
            <TableCell>
              {new Date(AdjustmentStatementPart?.datePaid).toLocaleDateString(
                "fa-IR"
              )}
            </TableCell>
            <TableCell>
              {/* {new Date(AdjustmentStatementPart?.datePaid).toLocaleDateString(
                "fa-IR"
              )} */}
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
                      setAddAdjustmentStatementPartModal({
                        open: true,
                        AdjustmentStatementPart: AdjustmentStatementPart,
                        AdjustmentStatementId: AdjustmentStatement.id,
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
                      void deleteAdjustmentStatementPart({
                        variables: {
                          id: AdjustmentStatementPart.id,
                        },
                      }).then((res) => {
                        setNewAdjustmentStatement({} as AdjustmentStatement);
                        void refetch();
                        void AdjustmentStatementRefetch();
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
