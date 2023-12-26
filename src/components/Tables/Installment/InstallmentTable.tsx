/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { EditOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import {
  CREATE_INSTALLMENT,
  CREATE_INSTALLMENT_PART,
  CREATE_INSTALLMENT_TABLE,
  Installment,
  InstallmentPart,
  UPDATE_INSTALLMENT,
} from "../../../GraphQL/Tables/Mutations";
import { GET_INSTALLMENT_TABLE_BY_CONTRACT_ID } from "../../../GraphQL/Tables/Queries";
import {
  Red,
  background,
  primary,
  primaryLight,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import DateButton from "../../DateButton";
import FaTextField from "../../FaComponents/FaTextField";
import FaTypography from "../../FaComponents/FaTypography";
import NewModal from "../../Modals";
import InstallmentStatementCard from "./InstallmentCard";
import {
  Create_Installment_TableDocument,
  GetInstallmentTablesDocument,
} from "../../../gql/graphql";
import { useMutation, useQuery } from "@apollo/client";

interface Props extends TableContainerProps {
  InstallmentTableId?: number;
  type?: "ACCUSED" | "ACCUSER";
}
const InstallmentTable = (props: Props) => {
  const { contractId } = useParams<{ contractId: string }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [installments, setInstallments] = React.useState<
    Installment[]
  >([
    // {
    //   amount: 100000,
    //   filledBy: "ACCUSED",
    //   id: 1,
    //   date: new Date(),
    //   title: "قسط اول",
    //   installmentTableId: 1,
    // },
  ]);
  const [pageError, setPageError] = React.useState<string>();
  const [tableId, setTableId] = React.useState<number>();
  const [addInstallmentPartModal, setAddInstallmentPartModal] =
    React.useState<{
      open: boolean;
      installmentPart: InstallmentPart;
      installmentId?: number;
    }>({
      open: false,
      installmentPart: {} as InstallmentPart,
    });

  const [newInstallment, setNewInstallment] =
    React.useState<Installment>({} as Installment);

  const { handleMutation: addInstallment } = MutationWrapper(
    CREATE_INSTALLMENT,
    "installment_addInstallment"
  );
  const [addInstallmentTable] = useMutation(
    Create_Installment_TableDocument
  );

  const { handleMutation: editInstallment } = MutationWrapper(
    UPDATE_INSTALLMENT,
    "installment_updateInstallment"
  );

  // const { data, refetch } = QueryWrapper(
  //   GetInstallmentTablesDocument,
  //   "installmentTable_getInstallmentTables",
  //   {
  //     id: contractId && parseInt(contractId),
  //   },
  //   {
  //     onCompleted(data) {
  //       console.log("GET_INSTALLMENT_TABLE_BY_CONTRACT_ID", data);
  //     },
  //     onError(error) {
  //       console.log("error", error);
  //     },
  //   }
  // );

  const { data, refetch } = useQuery(GetInstallmentTablesDocument, {
    variables: {
      id: contractId ? parseInt(contractId) : 0,
    },
    onCompleted(data) {
      console.log("GET_INSTALLMENT_TABLE_BY_CONTRACT_ID", data);
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const { handleMutation: createInstallmentPart } = MutationWrapper(
    CREATE_INSTALLMENT_PART,
    "installmentPart_addInstallmentPart"
  );

  React.useEffect(() => {
    const userType =
      data?.installmentTable_getInstallmentTables?.result?.items?.[0]
        ?.contract?.accuserDepartmentUserId == user.parentId
        ? "ACCUSER"
        : "ACCUSED";
    console.warn("userType", userType);
    if (
      data?.installmentTable_getInstallmentTables?.result?.items
        ?.length &&
      data?.installmentTable_getInstallmentTables?.result?.items
        ?.length > 0
    ) {
      const userType =
        data?.installmentTable_getInstallmentTables?.result
          ?.items?.[0]?.contract?.accuserDepartmentUserId ==
        user.parentId
          ? "ACCUSER"
          : "ACCUSED";
      console.warn("userType", userType);
      data?.installmentTable_getInstallmentTables?.result?.items?.[0]
        ?.installments &&
        setInstallments(
          // @ts-ignore
          data?.installmentTable_getInstallmentTables?.result
            ?.items?.[0]?.installments
        );
      setTableId(
        data?.installmentTable_getInstallmentTables?.result
          ?.items?.[0]?.id
      );
    } else {
      if (
        data?.installmentTable_getInstallmentTables.status.code != 1
      ) {
        console.log("error", data);
        void addInstallmentTable({
          variables: {
            contractId:
              contractId && parseInt(contractId)
                ? parseInt(contractId)
                : 0,
            userId: user.id,
          },
          onCompleted(data) {
            console.log("addInstallmentTable", data);
            setTableId(
              data?.installmentTable_addInstallmentTable?.result?.id
            );
            void refetch();
          },
        });
      } else {
        if (
          data?.installmentTable_getInstallmentTables?.result?.items
            ?.length == 0
        ) {
          console.log("adding", data);
          // void addInstallmentTable({
          //   variables: {
          //     contractId: contractId && parseInt(contractId),
          //     userId: user.id,
          //   },
          //   options: {
          //     onCompleted(data) {
          //       console.log("addInstallmentTable", data);
          //       setTableId(data?.id);
          //       void refetch();
          //     },
          //   },
          // });
        }
      }
    }
  }, [
    addInstallmentTable,
    contractId,
    data,
    refetch,
    user.id,
    user.parentId,
  ]);

  const handleEmptyFields = () => {
    if (!newInstallment.amount) {
      setPageError("مبلغ را وارد کنید");
      return true;
    }
    if (!newInstallment.date) {
      setPageError("تاریخ را وارد کنید");
      return true;
    }

    return false;
  };

  return (
    <TableContainer
      {...props}
      sx={{
        borderRadius: "10px",
        background: background,
        my: "1rem",
        // change the color of header to grey
        "& thead": {
          "& tr": {
            "& th": {
              color: "#fff",
              background: secondary,
              padding: "0.75rem",
            },
          },
        },

        // change padding of cells
        "& td": {
          padding: "0.75rem",
        },
      }}
    >
      <Table
        sx={{
          borderRadius: "10px",
          background: background,
          // change the color of header to grey
          "& thead": {
            "& tr": {
              "& th": {
                color: "#fff",
                background: secondary,
              },
            },
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{
                textAlign: "center",
                position: "relative",
                height: "4rem",
              }}
            >
              <Box
                sx={{
                  // background: primary,
                  color: primary,
                  // padding: "0.5rem 1rem",
                  userSelect: "none",
                  width: "max-content",
                  zIndex: 1000,
                  justifySelf: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <FaTypography variant="h6" textAlign={"center"}>
                  جدول اقساط
                </FaTypography>
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              عنوان
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              مبلغ(ریال)
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              تاریخ پرداخت
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              ...
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <FaTextField
                label="عنوان"
                // onChange={(e) =>
                //   setNewInstallment({
                //     ...newInstallment,
                //     title: e.target.value,
                //   })
                // }
                disabled
                value={
                  data?.installmentTable_getInstallmentTables.result
                    ?.items?.[0]?.installments?.length == 0
                    ? "قسط اول"
                    : data?.installmentTable_getInstallmentTables
                        .result?.items?.[0]?.installments?.length == 1
                    ? "قسط دوم"
                    : "قسط سوم"
                }
                focused={newInstallment.title ? true : false}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                disabled={
                  (data?.installmentTable_getInstallmentTables.result
                    ?.items?.[0]?.installments &&
                    data?.installmentTable_getInstallmentTables.result
                      ?.items?.[0]?.installments?.length >= 3) ||
                  false
                }
                onChange={(e) =>
                  setNewInstallment({
                    ...newInstallment,
                    amount: parseInt(e.target.value),
                  })
                }
                value={
                  newInstallment.amount ? newInstallment.amount : ""
                }
                fullWidth
                focused={newInstallment.amount ? true : false}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setNewInstallment({
                    ...newInstallment,
                    // @ts-ignore
                    date: date || new Date(),
                  })
                }
                date={newInstallment.date}
              />
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {editMode ? (
                  <IconButton
                    onClick={() => {
                      void editInstallment({
                        variables: {
                          installmentTableId: tableId && tableId,
                          amount: newInstallment.amount,
                          date: newInstallment.date,
                          title: newInstallment.title,
                          registrarType:
                            data
                              ?.installmentTable_getInstallmentTables
                              ?.result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.installmentTable_getInstallmentTables
                              ?.result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId ==
                              user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newInstallment.id,
                        },
                      }).then(() => {
                        void refetch();
                        setEditMode(false);
                        setNewInstallment({} as Installment);
                      });
                    }}
                    sx={{
                      borderRadius: "10px",
                      background: primary,
                      color: secondaryDark,
                      "&:hover": {
                        background: primaryLight,
                      },
                      gap: "0.5rem",
                      width: "100%",
                    }}
                  >
                    <FaTypography
                      variant="body2"
                      textAlign={"center"}
                    >
                      ویرایش
                    </FaTypography>
                    <EditOutlined />
                  </IconButton>
                ) : (
                  <IconButton
                    disabled={
                      (data?.installmentTable_getInstallmentTables
                        .result?.items?.[0]?.installments &&
                        data?.installmentTable_getInstallmentTables
                          .result?.items?.[0]?.installments.length >=
                          3) ||
                      false
                    }
                    onClick={() => {
                      if (handleEmptyFields()) return;
                      void addInstallment({
                        variables: {
                          installmentTableId: tableId && tableId,
                          amount: newInstallment.amount,
                          date: newInstallment.date,
                          title:
                            data
                              ?.installmentTable_getInstallmentTables
                              .result?.items?.[0]?.installments
                              ?.length == 0
                              ? "قسط اول"
                              : data
                                  ?.installmentTable_getInstallmentTables
                                  .result?.items?.[0]?.installments
                                  ?.length == 1
                              ? "قسط دوم"
                              : "قسط سوم",
                          registrarType:
                            data
                              ?.installmentTable_getInstallmentTables
                              ?.result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.installmentTable_getInstallmentTables
                              ?.result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId ==
                              user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                        },
                      })
                        .then(() => {
                          setNewInstallment({} as Installment);
                          void refetch();
                          setPageError("");
                        })
                        .catch(() => {
                          alert("خطا در افزودن قسط");
                        });
                    }}
                    sx={{
                      borderRadius: "10px",
                      background: primary,
                      color: secondaryDark,
                      "&:hover": {
                        background: primaryLight,
                      },
                      gap: "0.5rem",
                      width: "100%",
                    }}
                  >
                    {/* {tableId} */}
                    <FaTypography
                      variant="body2"
                      textAlign={"center"}
                    >
                      ثبت
                    </FaTypography>
                    <BsPlusCircle />
                  </IconButton>
                )}
              </Box>
            </TableCell>
          </TableRow>
          {pageError && (
            <Typography color={Red}>{pageError}</Typography>
          )}
          {installments &&
            installments?.length > 0 &&
            installments?.map((installment) => (
              <InstallmentStatementCard
                installment={installment}
                refetch={refetch}
                setEditMode={setEditMode}
                setNewInstallment={setNewInstallment}
                key={installment.id}
                setAddInstallmentPartModal={
                  setAddInstallmentPartModal
                }
              />
            ))}
        </TableBody>
        <NewModal
          title="افزودن زیرمجموعه"
          open={addInstallmentPartModal.open}
          onClose={() => {
            setAddInstallmentPartModal({
              ...addInstallmentPartModal,
              open: false,
            });
          }}
          isCloseable={true}
          background={background}
          width={"40%"}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
          >
            <FaTextField
              label="مبلغ"
              onChange={(e) => {
                const remainingAmount =
                  data?.installmentTable_getInstallmentTables.result
                    ?.items?.[0].installments?.find(
                      (a) =>
                        a.id == addInstallmentPartModal.installmentId
                    )?.amount -
                    // @ts-ignore
                  data?.installmentTable_getInstallmentTables?.result
                    ?.items?.[0].installments?.find(
                      (a) =>
                        a.id == addInstallmentPartModal.installmentId
                    )?.installmentParts?.reduce((a, b) => {
                      return a + b.amount;
                    }, '');
                if (
                  parseInt(e.target.value) > remainingAmount
                ) {
                  alert("مبلغ وارد شده بیشتر از مبلغ قسط است");
                  return;
                } else {
                  setAddInstallmentPartModal({
                    ...addInstallmentPartModal,
                    installmentPart: {
                      ...addInstallmentPartModal.installmentPart,
                      amount: parseInt(e.target.value),
                    },
                  });
                }
              }}
              value={addInstallmentPartModal.installmentPart.amount}
              fullWidth
              type="number"
            />
            <DateButton
              label="تاریخ پرداخت"
              setDate={(date) =>
                setAddInstallmentPartModal({
                  ...addInstallmentPartModal,
                  installmentPart: {
                    ...addInstallmentPartModal.installmentPart,
                    // @ts-ignore
                    date: date || new Date(),
                  },
                })
              }
              date={addInstallmentPartModal.installmentPart.date}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <IconButton
                onClick={() => {
                  void createInstallmentPart({
                    variables: {
                      installmentId:
                        addInstallmentPartModal.installmentId,
                      amount:
                        addInstallmentPartModal.installmentPart
                          .amount,
                      date: addInstallmentPartModal.installmentPart
                        .date,
                    },
                  })
                    .then(() => {
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddInstallmentPartModal({
                        ...addInstallmentPartModal,
                        installmentPart: {} as InstallmentPart,
                        open: false,
                      });
                      void refetch();
                    })
                    .catch(() => {
                      alert("خطا در افزودن زیرمجموعه");
                    });
                }}
                sx={{
                  borderRadius: "10px",
                  background: primary,
                  color: secondaryDark,
                  "&:hover": {
                    background: primaryLight,
                  },
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                <FaTypography variant="body2" textAlign={"center"}>
                  ثبت
                </FaTypography>
                <BsPlusCircle />
              </IconButton>
            </Box>
          </Box>
        </NewModal>
      </Table>
    </TableContainer>
  );
};

export default InstallmentTable;
