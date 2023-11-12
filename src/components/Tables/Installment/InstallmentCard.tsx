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
  CREATE_INSTALLMENT_PART,
  DELETE_INSTALLMENT,
  DELETE_INSTALLMENT_PART,
  Installment,
  InstallmentPart,
  InstallmentTable,
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
import { GET_INSTALLMENT } from "../../../GraphQL/Tables/Queries";

interface InstallmentCardProps {
  installment: Installment;
  setNewInstallment: React.Dispatch<
    React.SetStateAction<Installment>
  >;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  setAddInstallmentPartModal: (
    value: React.SetStateAction<{
      open: boolean;
      installmentPart: InstallmentPart;
      installmentId?: number | undefined;
    }>
  ) => void;
}
export default function AdjustmentStatementCard({
  installment,
  setNewInstallment,
  setEditMode,
  refetch,
  setAddInstallmentPartModal,
}: InstallmentCardProps) {
  const {
    handleMutation: deleteInstallment,
    loading: loadingDeleteInstallment,
    error: errorDeleteInstallment,
  } = MutationWrapper(
    DELETE_INSTALLMENT,
    "installment_deleteInstallment"
  );
  const [installmentParts, setInstallmentParts] = useState<InstallmentPart[]>();

  // const [deleteInstallment,{loading,error}] = useMutation(DELETE_INSTALLMENT)
  const {
    handleMutation: createInstallmentPart,
    loading: loadingCreateInstallmentPart,
    error: errorCreateInstallmentPart,
  } = MutationWrapper(
    CREATE_INSTALLMENT_PART,
    "installmentPart_addInstallmentPart"
  );
  const {
    handleMutation: deleteInstallmentPart,
    loading: loadingDeleteInstallmentPart,
    error: errorDeleteInstallmentPart,
  } = MutationWrapper(
    DELETE_INSTALLMENT_PART,
    "installmentPart_deleteInstallmentPart"
  );

  const { data, loading, error } = QueryWrapper(
    GET_INSTALLMENT,
    "installment_getInstallment",
    { id: installment.id },
    {
      onCompleted(data) {
        console.log("installment_getInstallment",data);
        setInstallmentParts(data.installmentParts);
      },
    }
  );

  const [newInstallmentPart, setNewInstallmentPart] =
    useState<InstallmentPart>();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    console.log("TESTTEST",data);
    setInstallmentParts(data?.installmentParts);
  }, [data]);

  return (
    <>
      <TableRow key={installment.id}>
        <TableCell>{installment.title}</TableCell>
        <TableCell>{installment.amount}</TableCell>
        <TableCell>
          {new Date(installment?.date).toLocaleDateString("fa-IR")}
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
                setAddInstallmentPartModal({
                  open: true,
                  installmentPart: {} as InstallmentPart,
                  installmentId: installment.id,
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
                setNewInstallment(installment);
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
                void deleteInstallment({
                  variables: {
                    id: installment.id,
                  },
                }).then((res) => {
                  setNewInstallment({} as Installment);
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
      {installmentParts?.map((installmentPart: InstallmentPart) => (
        <TableRow key={installmentPart.id} sx={{
          backgroundColor: primaryTransparent,
          borderLeft: `2px solid ${primary}`,
        }}>
          <TableCell></TableCell>
          <TableCell>{installmentPart.amount}</TableCell>
          <TableCell>
            {new Date(installmentPart?.date).toLocaleDateString(
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
                  setAddInstallmentPartModal({
                    open: true,
                    installmentPart: installmentPart,
                    installmentId: installment.id,
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
                  void deleteInstallmentPart({
                    variables: {
                      id: installmentPart.id,
                    },
                  }).then((res) => {
                    setNewInstallment({} as Installment);
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
      ))}
    </>
  );
}
