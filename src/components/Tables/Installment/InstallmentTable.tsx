/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from "@apollo/client";
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
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  useCreate_Installment_PartMutation,
  useUpdate_Installment_PartMutation,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import {
  CREATE_INSTALLMENT,
  Installment,
  InstallmentPart,
  UPDATE_INSTALLMENT,
} from "../../../GraphQL/Tables/Mutations";
import { GetInstallmentTablesDocument } from "../../../gql/graphql";
import {
  Red,
  background,
  primary,
  primaryLight,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import FaTextField from "../../FaComponents/FaTextField";
import FaTypography from "../../FaComponents/FaTypography";
import FileBox from "../../FileBox";
import NewModal from "../../Modals";
import InstallmentStatementCard from "./InstallmentCard";
import { convertToPersianDigits } from "../../../functions/Functions";

interface Props extends TableContainerProps {
  InstallmentTableId?: number;
  type?: "ACCUSED" | "ACCUSER";
}
const InstallmentTable = (props: Props) => {
  const { contractId, complaintId } = useParams<{
    contractId: string;
    complaintId: string;
  }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [amountError, setAmountError] = React.useState<boolean>(false);
  const [installments, setInstallments] = React.useState<Installment[]>([]);
  const [pageError, setPageError] = React.useState<string>();
  const [tableId, setTableId] = React.useState<number>();
  const [addInstallmentPartModal, setAddInstallmentPartModal] = React.useState<{
    open: boolean;
    installmentPart: InstallmentPart;
    installmentId?: number;
    edit?: boolean;
  }>({
    open: false,
    installmentPart: {} as InstallmentPart,
  });

  const [newInstallment, setNewInstallment] = React.useState<Installment>(
    {} as Installment
  );

  const [InvisibleAmount, setInvisibleAmount] = React.useState<{
    amount: number;
    date: Date;
  }>();

  const { handleMutation: addInstallment } = MutationWrapper(
    CREATE_INSTALLMENT,
    "installment_addInstallment"
  );
  const { handleMutation: editInstallment } = MutationWrapper(
    UPDATE_INSTALLMENT,
    "installment_updateInstallment"
  );

  const { data, refetch } = useQuery(GetInstallmentTablesDocument, {
    variables: {
      id: contractId ? parseInt(contractId) : 0,
    },
    onCompleted(data) {
      console.log("GET_INSTALLMENT_TABLE_BY_CONTRACT_ID", data);
      setInstallments(
        // @ts-ignore
        data?.installmentTable_getInstallmentTables?.result?.items?.find(
          (a) => a.filledBy == props.type
        )?.installments
      );
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const [createInstallmentPart] = useCreate_Installment_PartMutation();

  const [updatePart] = useUpdate_Installment_PartMutation();

  React.useEffect(() => {
    const userType =
      data?.installmentTable_getInstallmentTables?.result?.items?.[0]?.contract
        ?.accuserDepartmentUserId == user.parentId
        ? "ACCUSER"
        : "ACCUSED";
    console.warn("userType", userType);
    if (
      data?.installmentTable_getInstallmentTables?.result?.items?.length &&
      data?.installmentTable_getInstallmentTables?.result?.items?.length > 0
    ) {
      const userType =
        data?.installmentTable_getInstallmentTables?.result?.items?.[0]
          ?.contract?.accuserDepartmentUserId == user.parentId
          ? "ACCUSER"
          : "ACCUSED";
      console.warn("userType", userType);
      data?.installmentTable_getInstallmentTables?.result?.items?.[0]
        ?.installments &&
        setInstallments(
          // @ts-ignore
          data?.installmentTable_getInstallmentTables?.result?.items?.[0]
            ?.installments
        );
      setTableId(
        data?.installmentTable_getInstallmentTables?.result?.items?.[0]?.id
      );
    }
  }, [contractId, data, refetch, user.id, user.parentId]);

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
          padding: "0.5rem 0.1rem",
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
              colSpan={5}
              sx={{
                textAlign: "center",
                position: "relative",
                height: "3.5rem",
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
                  جدول پیش پرداخت
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
                borderRight: "1px solid white",
                width: "10%",
              }}
            >
              روکش مالی
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
                  "پیش پرداخت " +
                  convertToPersianDigits((data?.installmentTable_getInstallmentTables.result
                    ?.items?.[0]?.installments?.length || 0) +
                  1)
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
                value={newInstallment.amount ? newInstallment.amount : ""}
                fullWidth
                focused={newInstallment.amount ? true : false}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DatePicker
                value={newInstallment.date}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    width: "100%",
                  },
                }}
                onChange={(date) =>
                  setNewInstallment({
                    ...newInstallment,
                    amount: newInstallment.amount || 0,
                    date: date || new Date(),
                  })
                }
                label="تاریخ پرداخت"
              />
              {/* <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setNewInstallment({
                    ...newInstallment,
                    // @ts-ignore
                    date: date || new Date(),
                  })
                }
                date={newInstallment.date}
              /> */}
            </TableCell>
            <TableCell>
              <FileBox />
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
                            data?.installmentTable_getInstallmentTables?.result
                              ?.items?.[0]?.contract?.accuserDepartmentUserId ==
                              user.id ||
                            data?.installmentTable_getInstallmentTables?.result
                              ?.items?.[0]?.contract?.accuserDepartmentUserId ==
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
                    <FaTypography variant="body2" textAlign={"center"}>
                      ویرایش
                    </FaTypography>
                    <EditOutlined />
                  </IconButton>
                ) : (
                  <IconButton
                    disabled={
                      (data?.installmentTable_getInstallmentTables.result
                        ?.items?.[0]?.installments &&
                        data?.installmentTable_getInstallmentTables.result
                          ?.items?.[0]?.installments.length >= 3) ||
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
                            data?.installmentTable_getInstallmentTables.result
                              ?.items?.[0]?.installments?.length == 0 ||
                            data?.installmentTable_getInstallmentTables.result
                              ?.items?.[0]?.installments?.length == undefined
                              ? "پیش پرداخت اول"
                              : data?.installmentTable_getInstallmentTables
                                  .result?.items?.[0]?.installments?.length == 1
                              ? "پیش پرداخت دوم"
                              : "پیش پرداخت سوم",
                          registrarType:
                            data?.installmentTable_getInstallmentTables?.result
                              ?.items?.[0]?.contract?.accuserDepartmentUserId ==
                              user.id ||
                            data?.installmentTable_getInstallmentTables?.result
                              ?.items?.[0]?.contract?.accuserDepartmentUserId ==
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
                          alert("خطا در افزودن پیش پرداخت");
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
                    <FaTypography variant="body2" textAlign={"center"}>
                      ثبت
                    </FaTypography>
                    <BsPlusCircle />
                  </IconButton>
                )}
              </Box>
            </TableCell>
          </TableRow>

          {pageError && <Typography color={Red}>{pageError}</Typography>}
          {installments &&
            installments?.length > 0 &&
            installments?.map((installment) => (
              <InstallmentStatementCard
                installment={installment}
                refetch={refetch}
                setEditMode={setEditMode}
                setNewInstallment={setNewInstallment}
                key={installment.id}
                setAddInstallmentPartModal={setAddInstallmentPartModal}
              />
            ))}
          <TableRow>
            <TableCell>جمع کل پیش پرداخت داده شده</TableCell>
            <TableCell>
              <FaTypography variant="body2" textAlign={"start"}>
                {installments
                  ?.filter((a) => a.title != "میزان مبلغ مستهلک شده")
                  ?.reduce((a, b) => {
                    return a + b.amount;
                  }, 0)}
              </FaTypography>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {!installments?.find((a) => a.title == "میزان مبلغ مستهلک شده") && (
            <TableRow>
              <TableCell>
                <FaTextField
                  // label="میزان مبلغ مستهلک شده"
                  focused={newInstallment.title ? true : false}
                  value={"میزان مبلغ مستهلک شده"}
                  disabled
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <FaTextField
                  label="مبلغ"
                  onChange={(e) =>
                    setInvisibleAmount({
                      amount: parseInt(e.target.value),
                      date: new Date(),
                    })
                  }
                  value={InvisibleAmount?.amount}
                  fullWidth
                  focused={InvisibleAmount?.amount ? true : false}
                  type="number"
                />
              </TableCell>

              <TableCell>
                <DatePicker
                  value={InvisibleAmount?.date}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      width: "100%",
                    },
                  }}
                  onChange={(date) =>
                    setInvisibleAmount({
                      ...InvisibleAmount,
                      amount: InvisibleAmount?.amount || 0,
                      date: date || new Date(),
                    })
                  }
                />
              </TableCell>
              <TableCell></TableCell>
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
                              data?.installmentTable_getInstallmentTables
                                ?.result?.items?.[0]?.contract
                                ?.accuserDepartmentUserId == user.id ||
                              data?.installmentTable_getInstallmentTables
                                ?.result?.items?.[0]?.contract
                                ?.accuserDepartmentUserId == user.parentId
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
                      <FaTypography variant="body2" textAlign={"center"}>
                        ویرایش
                      </FaTypography>
                      <EditOutlined />
                    </IconButton>
                  ) : (
                    <IconButton
                      disabled={
                        (data?.installmentTable_getInstallmentTables.result
                          ?.items?.[0]?.installments &&
                          data?.installmentTable_getInstallmentTables.result
                            ?.items?.[0]?.installments.length >= 3) ||
                        false
                      }
                      onClick={() => {
                        void addInstallment({
                          variables: {
                            installmentTableId: tableId && tableId,
                            amount: InvisibleAmount?.amount,
                            date: InvisibleAmount?.date,
                            title: "میزان مبلغ مستهلک شده",
                            registrarType:
                              data?.installmentTable_getInstallmentTables
                                ?.result?.items?.[0]?.contract
                                ?.accuserDepartmentUserId == user.id ||
                              data?.installmentTable_getInstallmentTables
                                ?.result?.items?.[0]?.contract
                                ?.accuserDepartmentUserId == user.parentId
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
                            alert("خطا در افزودن پیش پرداخت");
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
                      <FaTypography variant="body2" textAlign={"center"}>
                        ثبت
                      </FaTypography>
                      <BsPlusCircle />
                    </IconButton>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          )}

          <TableRow>
            <TableCell>مبلغ باقیمانده نزد پیمانکار</TableCell>
            <TableCell>
              <FaTypography variant="body2" textAlign={"start"}>
                {installments
                  ?.filter((a) => a.title != "میزان مبلغ مستهلک شده")
                  ?.reduce((a, b) => {
                    return a + b.amount;
                  }, 0) -
                  (installments?.find((a) => a.title == "میزان مبلغ مستهلک شده")
                    ?.amount ?? 0) || 0}
              </FaTypography>
            </TableCell>
          </TableRow>
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
              error={amountError}
              helperText={amountError ? "مبلغ بیشتر از کبلغ کل است" : ""}
              onChange={(e) => {
                const remainingAmount =
                  data?.installmentTable_getInstallmentTables.result?.items?.[0].installments?.find(
                    (a) => a.id == addInstallmentPartModal.installmentId
                  )?.amount -
                  // @ts-ignore
                  data?.installmentTable_getInstallmentTables?.result?.items?.[0].installments
                    ?.find((a) => a.id == addInstallmentPartModal.installmentId)
                    ?.installmentParts?.reduce((a, b) => {
                      return a + b.amount;
                    }, "");
                if (parseInt(e.target.value) > remainingAmount) {
                  setAmountError(true);
                  setAddInstallmentPartModal({
                    ...addInstallmentPartModal,
                    installmentPart: {
                      ...addInstallmentPartModal.installmentPart,
                      amount: parseInt(e.target.value),
                    },
                  });
                } else {
                  setAmountError(false);
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
            <DatePicker
              value={addInstallmentPartModal.installmentPart.date}
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  width: "100%",
                },
              }}
              onChange={(date) =>
                setAddInstallmentPartModal({
                  ...addInstallmentPartModal,
                  installmentPart: {
                    ...addInstallmentPartModal.installmentPart,
                    amount: addInstallmentPartModal.installmentPart.amount,
                    date: date || new Date(),
                  },
                })
              }
              label="تاریخ پرداخت"
            />
            {/* <DateButton
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
            /> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <IconButton
                onClick={() => {
                  if (addInstallmentPartModal.edit) {
                    void updatePart({
                      variables: {
                        id: addInstallmentPartModal.installmentPart.id,
                        amount: addInstallmentPartModal.installmentPart.amount,
                        date: addInstallmentPartModal.installmentPart.date,
                        installmentId:
                          addInstallmentPartModal.installmentId || 0,
                      },
                      onCompleted(data, clientOptions) {
                        alert("زیرمجموعه با موفقیت افزوده شد");
                        setAddInstallmentPartModal({
                          ...addInstallmentPartModal,
                          installmentPart: {} as InstallmentPart,
                          open: false,
                          edit: false,
                        });
                        void refetch();
                      },
                    });
                  } else
                    void createInstallmentPart({
                      variables: {
                        installmentId:
                          addInstallmentPartModal.installmentId || 0,
                        amount: addInstallmentPartModal.installmentPart.amount,
                        date: addInstallmentPartModal.installmentPart.date,
                      },
                      onCompleted(data, clientOptions) {
                        alert("زیرمجموعه با موفقیت افزوده شد");
                        setAddInstallmentPartModal({
                          ...addInstallmentPartModal,
                          installmentPart: {} as InstallmentPart,
                          open: false,
                          edit: false,
                        });
                        void refetch();
                      },
                      onError(error, clientOptions) {
                        alert("خطا در افزودن زیرمجموعه");
                      },
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
