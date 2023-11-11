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
} from "../../../theme/color";
import FaTypography from "../../FaComponents/FaTypography";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { ApolloQueryResult } from "@apollo/client";
import { useState } from "react";
import FaTextField from "../../FaComponents/FaTextField";
import DateButton from "../../DateButton";

export default function InstallmentCard(
  installment: Installment,
  setNewInstallment: React.Dispatch<
    React.SetStateAction<Installment>
  >,
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<any>>
) {
  const {
    handleMutation: deleteInstallment,
    loading: loadingDeleteInstallment,
    error: errorDeleteInstallment,
  } = MutationWrapper(
    DELETE_INSTALLMENT,
    "installment_deleteInstallment"
  );
  const {
    handleMutation: createInstallmentPart,
    loading: loadingCreateInstallmentPart,
    error: errorCreateInstallmentPart,
  } = MutationWrapper(
    CREATE_INSTALLMENT_PART,
    "installmentPart_addInstallmentPart"
  );

  const [newInstallmentPart, setNewInstallmentPart] =
    useState<InstallmentPart>();
  const [open, setOpen] = useState(false);
  return (
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
              setOpen(!open);
              setNewInstallmentPart({} as InstallmentPart);
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
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Table>
            <TableRow>
              <TableCell>
                <FaTextField
                  label="مبلغ"
                  value={newInstallmentPart?.amount}
                  type="number"
                  fullWidth
                  onChange={(e) => {
                    // @ts-ignore
                    setNewInstallmentPart({
                      ...newInstallmentPart,
                      amount: parseInt(e.target.value),
                    });
                  }}
                />
              </TableCell>
              <TableCell>
                <DateButton
                  date={newInstallmentPart?.date}
                  label="تاریخ پرداخت"
                  setDate={(date) => {
                    // @ts-ignore
                    setNewInstallmentPart((prevState) => {
                      return {
                        ...prevState,
                        date: date,
                      };
                    });
                  }}
                />
              </TableCell>
            </TableRow>
          </Table>
        </Collapse>
    </TableRow>
  );
}
