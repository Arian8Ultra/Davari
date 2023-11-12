/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableCell,
  TableRow,
} from "@mui/material";
import {
  CREATE_ADJUSTMENT_STATEMENT_PART,
  DELETE_ADJUSTMENT_STATEMENT,
  DELETE_ADJUSTMENT_STATEMENT_PART,
  AdjustmentStatement,
  AdjustmentStatementPart,
  AdjustmentStatementTable,
} from "../../../GraphQL/Tables/Mutations";
import {
  Add,
  EditOutlined,
  CancelOutlined,
} from "@mui/icons-material";
import {
  primary,
  secondaryDark,
  primaryLight,
  Red,
  RedLight,
  primaryTransparent,
} from "../../../theme/color";
import FaTypography from "../../FaComponents/FaTypography";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { ApolloQueryResult, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import FaTextField from "../../FaComponents/FaTextField";
import DateButton from "../../DateButton";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import { GET_ADJUSTMENT_STATEMENT } from "../../../GraphQL/Tables/Queries";

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
}
export default function AdjustmentStatementCard({
  AdjustmentStatement,
  setNewAdjustmentStatement,
  setEditMode,
  refetch,
  setAddAdjustmentStatementPartModal,
}: AdjustmentStatementCardProps) {
  const {
    handleMutation: deleteAdjustmentStatement,
    loading: loadingDeleteAdjustmentStatement,
    error: errorDeleteAdjustmentStatement,
  } = MutationWrapper(
    DELETE_ADJUSTMENT_STATEMENT,
    "AdjustmentStatement_deleteAdjustmentStatement"
  );
  const [AdjustmentStatementParts, setAdjustmentStatementParts] = useState<AdjustmentStatementPart[]>();

  // const [deleteAdjustmentStatement,{loading,error}] = useMutation(DELETE_AdjustmentStatement)
  const {
    handleMutation: createAdjustmentStatementPart,
    loading: loadingCreateAdjustmentStatementPart,
    error: errorCreateAdjustmentStatementPart,
  } = MutationWrapper(
    CREATE_ADJUSTMENT_STATEMENT_PART,
    "AdjustmentStatementPart_addAdjustmentStatementPart"
  );
  const {
    handleMutation: deleteAdjustmentStatementPart,
    loading: loadingDeleteAdjustmentStatementPart,
    error: errorDeleteAdjustmentStatementPart,
  } = MutationWrapper(
    DELETE_ADJUSTMENT_STATEMENT_PART,
    "AdjustmentStatementPart_deleteAdjustmentStatementPart"
  );

  const { data, loading, error } = QueryWrapper(
    GET_ADJUSTMENT_STATEMENT,
    "AdjustmentStatement_getAdjustmentStatement",
    { id: AdjustmentStatement.id },
    {
      onCompleted(data) {
        console.log("AdjustmentStatement_getAdjustmentStatement",data);
        setAdjustmentStatementParts(data.AdjustmentStatementParts);
      },
    }
  );

  const [newAdjustmentStatementPart, setNewAdjustmentStatementPart] =
    useState<AdjustmentStatementPart>();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    console.log("TESTTEST",data);
    setAdjustmentStatementParts(data?.AdjustmentStatementParts);
  }, [data]);

  return (
    <>
      <TableRow key={AdjustmentStatement.id}>
        <TableCell>{AdjustmentStatement.title}</TableCell>
        <TableCell>{AdjustmentStatement.amountProvidedByContractor}</TableCell>
        <TableCell>{new Date(AdjustmentStatement?.dateProvidedByContractor).toLocaleDateString("fa-IR")}</TableCell>
        <TableCell>{AdjustmentStatement.amountConfirmedByConsultant}</TableCell>
        <TableCell>{new Date(AdjustmentStatement?.dateConfirmedByConsultant).toLocaleDateString("fa-IR")}</TableCell>
        <TableCell>{AdjustmentStatement.amountApprovedByEmployer}</TableCell>
        <TableCell>{new Date(AdjustmentStatement?.dateApprovedByEmployer).toLocaleDateString("fa-IR")}</TableCell>
        <TableCell>{AdjustmentStatement.amountPaid}</TableCell>
        <TableCell>{new Date(AdjustmentStatement?.datePaid).toLocaleDateString("fa-IR")}</TableCell>
        <TableCell>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
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
                  AdjustmentStatementPart: {} as AdjustmentStatementPart,
                  AdjustmentStatementId: AdjustmentStatement.id,
                });
              }}
            >
              <FaTypography variant="body2" textAlign={"center"}>
                افزودن زیرمجموعه
              </FaTypography>
              <Add />
            </IconButton>
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
                setNewAdjustmentStatement(AdjustmentStatement);
                setEditMode(true);
              }}
            >
              <FaTypography variant="body2" textAlign={"center"}>
                ویرایش
              </FaTypography>
              <EditOutlined />
            </IconButton>

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
                  setNewAdjustmentStatement({} as AdjustmentStatement);
                  void refetch();
                });
              }}
            >
              <FaTypography variant="body2" textAlign={"center"}>
                حذف
              </FaTypography>
              <CancelOutlined />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
      {/* {AdjustmentStatementParts?.map((AdjustmentStatementPart: AdjustmentStatementPart) => (
        <TableRow key={AdjustmentStatementPart.id} sx={{
          backgroundColor: primaryTransparent,
          borderLeft: `2px solid ${primary}`,
        }}>
          <TableCell></TableCell>
          <TableCell>{AdjustmentStatementPart.amount}</TableCell>
          <TableCell>
            {new Date(AdjustmentStatementPart?.date).toLocaleDateString(
              "fa-IR"
            )}
          </TableCell>
          <TableCell>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
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
                    AdjustmentStatementPart: AdjustmentStatementPart,
                    AdjustmentStatementId: AdjustmentStatement.id,
                  });
                }}
              >
                <FaTypography variant="body2" textAlign={"center"}>
                  ویرایش
                </FaTypography>
                <EditOutlined />
              </IconButton>
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
                  });
                }}
              >
                <FaTypography variant="body2" textAlign={"center"}>
                  حذف
                </FaTypography>
                <CancelOutlined />
              </IconButton>
            </Box>
          </TableCell>
        </TableRow>
      ))} */}
    </>
  );
}
