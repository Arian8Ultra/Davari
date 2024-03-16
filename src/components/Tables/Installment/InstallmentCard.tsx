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
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import {
  DELETE_INSTALLMENT,
  DELETE_INSTALLMENT_PART,
  Installment,
  InstallmentPart,
} from "../../../GraphQL/Tables/Mutations";
import { GET_INSTALLMENT } from "../../../GraphQL/Tables/Queries";
import {
  Red,
  RedLight,
  primary,
  primaryLight,
  primaryTransparent,
  secondaryDark,
  secondaryLighter,
} from "../../../theme/color";
import FaTypography from "../../FaComponents/FaTypography";
import { convertToPersianDigits } from "../../../functions/Functions";

interface InstallmentCardProps {
  installment: Installment;
  setNewInstallment: React.Dispatch<React.SetStateAction<Installment>>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  setAddInstallmentPartModal: (
    value: React.SetStateAction<{
      open: boolean;
      installmentPart: InstallmentPart;
      installmentId?: number | undefined;
      edit?: boolean;
    }>
  ) => void;
}
export default function InstallmentStatementCard({
  installment,
  setNewInstallment,
  setEditMode,
  refetch,
  setAddInstallmentPartModal,
}: InstallmentCardProps) {
  const { handleMutation: deleteInstallment } = MutationWrapper(
    DELETE_INSTALLMENT,
    "installment_deleteInstallment"
  );
  const [installmentParts, setInstallmentParts] = useState<InstallmentPart[]>();

  const { handleMutation: deleteInstallmentPart } = MutationWrapper(
    DELETE_INSTALLMENT_PART,
    "installmentPart_deleteInstallmentPart"
  );

  const { data } = QueryWrapper(
    GET_INSTALLMENT,
    "installment_getInstallment",
    { id: installment.id },
    {
      onCompleted(data) {
        console.log("installment_getInstallment", data);
        setInstallmentParts(data.installmentParts);
      },
    }
  );

  useEffect(() => {
    // console.log("TESTTEST", data);
    setInstallmentParts(data?.installmentParts);
  }, [data]);

  return (
    <>
      <TableRow key={installment.id}>
        <TableCell>{installment.title}</TableCell>
        <TableCell>
          {convertToPersianDigits(installment.amount)}
          </TableCell>
        <TableCell>
          {new Date(installment?.date).toLocaleDateString("fa-IR")}
        </TableCell>
        <TableCell>
          
        </TableCell>
        <TableCell>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3,auto)",
              gap: "0.4rem",
            }}
          >
            {installment.title.trim() == "میزان مبلغ مستهلک شده" ? (
              ""
            ) : (
              <Button
                variant="text"
                sx={{
                  color: primary,
                  "&:hover": {
                    color: primary,
                  },
                }}
                onClick={() => {
                  setAddInstallmentPartModal({
                    open: true,
                    installmentPart: {} as InstallmentPart,
                    installmentId: installment.id,
                  });
                }}
              >
                <Add />
                افزودن زیرمجموعه
              </Button>
            )}

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
                  setAddInstallmentPartModal({
                    open: true,
                    installmentPart: {} as InstallmentPart,
                    installmentId: installment.id,
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
                setNewInstallment(installment);
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
                  setNewInstallment(installment);
                  setEditMode(true);
                }}
              >
                <EditOutlined />
                <Typography variant="body2">ویرایش</Typography>
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
                void deleteInstallment({
                  variables: {
                    id: installment.id,
                  },
                }).then(() => {
                  setNewInstallment({} as Installment);
                  void refetch();
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
                  void deleteInstallment({
                    variables: {
                      id: installment.id,
                    },
                  }).then(() => {
                    setNewInstallment({} as Installment);
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
      {installmentParts?.map((installmentPart: InstallmentPart, i) => (
        <TableRow
          key={installmentPart.id}
          sx={{
            backgroundColor: primaryTransparent,
            borderLeft: `2px solid ${primary}`,
          }}
        >
          <TableCell>{installment.title + " - " + String(i + 1)}</TableCell>
          <TableCell>{convertToPersianDigits(installmentPart.amount)}</TableCell>
          <TableCell>
            {new Date(installmentPart?.date).toLocaleDateString("fa-IR")}
          </TableCell>
          <TableCell>
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
                    edit: true,
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
                  }).then(() => {
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
