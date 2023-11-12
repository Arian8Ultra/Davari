/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  EditOutlined
} from "@mui/icons-material";
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
import { GET_CONTRACT } from "../../../GraphQL/Contracts/Queries";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import {
  AdjustmentStatement,
  AdjustmentStatementPart,
  CREATE_ADJUSTMENT_STATEMENT,
  CREATE_ADJUSTMENT_STATEMENT_PART,
  CREATE_ADJUSTMENT_STATEMENT_TABLE,
  UPDATE_ADJUSTMENT_STATEMENT
} from "../../../GraphQL/Tables/Mutations";
import { GET_ADJUSTMENT_STATEMENT_TABLE_BY_CONTRACT_ID } from "../../../GraphQL/Tables/Queries";
import {
  Red,
  background,
  primary,
  primaryLight,
  secondary,
  secondaryDark
} from "../../../theme/color";
import DateButton from "../../DateButton";
import FaTextField from "../../FaComponents/FaTextField";
import FaTypography from "../../FaComponents/FaTypography";
import NewModal from "../../Modals";
import AdjustmentStatementCard from "./AdjustmentStatementCard";

interface Props extends TableContainerProps {
  AdjustmentStatementTableId?: number;
  type?: "ACCUSED" | "ACCUSER";
}
const AdjustmentStatementTable = (props: Props) => {
  const { contractId } = useParams<{ contractId: string }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [AdjustmentStatement, setAdjustmentStatements] = React.useState<
    AdjustmentStatement[]
  >([
    // {
    //   amount: 100000,
    //   filledBy: "ACCUSED",
    //   id: 1,
    //   date: new Date(),
    //   title: "قسط اول",
    //   AdjustmentStatementTableId: 1,
    // },
  ]);
  const [pageError, setPageError] = React.useState<string>();
  const [tableId, setTableId] = React.useState<number>();
  const [addAdjustmentStatementPartModal, setAddAdjustmentStatementPartModal] =
    React.useState<{
      open: boolean;
      AdjustmentStatementPart: AdjustmentStatementPart;
      adjustmentStatementId?: number;
    }>({
      open: false,
      AdjustmentStatementPart: {} as AdjustmentStatementPart,
    });

  const [newAdjustmentStatement, setNewAdjustmentStatement] =
    React.useState<AdjustmentStatement>({} as AdjustmentStatement);

  const {
    handleMutation: addAdjustmentStatement,
    loading: loadingAddAdjustmentStatement,
    error: errorAddAdjustmentStatement,
  } = MutationWrapper(
    CREATE_ADJUSTMENT_STATEMENT,
    "adjustmentStatement_addAdjustmentStatement"
  );
  const {
    handleMutation: addAdjustmentStatementTable,
    loading: loadingAddAdjustmentStatementTable,
    error: errorAddAdjustmentStatementTable,
  } = MutationWrapper(
    CREATE_ADJUSTMENT_STATEMENT_TABLE,
    "adjustmentStatementTable_addAdjustmentStatementTable"
  );


  const {
    handleMutation: editAdjustmentStatement,
    loading: loadingEditAdjustmentStatement,
    error: errorEditAdjustmentStatement,
  } = MutationWrapper(
    UPDATE_ADJUSTMENT_STATEMENT,
    "adjustmentStatement_updateAdjustmentStatement"
  );

  const { data, loading, error, refetch } = QueryWrapper(
    GET_ADJUSTMENT_STATEMENT_TABLE_BY_CONTRACT_ID,
    "adjustmentStatementTable_getAdjustmentStatementTables",
    {
      id: contractId && parseInt(contractId),
    },
    {
      onCompleted(data) {
        console.log("GET_ADJUSTMENT_STATEMENT_TABLE_BY_CONTRACT_ID", data);
      },
      onError(error) {
        console.log("error", error);
      },
    }
  );

  const {
    data: contractData,
    loading: contractLoading,
    error: contractError,
  } = QueryWrapper(GET_CONTRACT, "contract_getContracts", {
    id: contractId && parseInt(contractId),
  });

  const {
    handleMutation: createAdjustmentStatementPart,
    loading: loadingCreateAdjustmentStatementPart,
    error: errorCreateAdjustmentStatementPart,
  } = MutationWrapper(
    CREATE_ADJUSTMENT_STATEMENT_PART,
    "adjustmentStatementPart_addAdjustmentStatementPart"
  );

  React.useEffect(() => {
    if (data?.items?.length > 0 && loading == false) {
      console.log("GET_AdjustmentStatement_TABLE_BY_CONTRACT_ID", data);
      setAdjustmentStatements(data?.items[0]?.AdjustmentStatements);
      // setNewAdjustmentStatement({
      //   ...newAdjustmentStatement,
      //   AdjustmentStatementTableId: data?.items[0]?.id,
      // })

      setTableId(data?.items[0]?.id);
    } else {
      console.log("GET_AdjustmentStatement_TABLE_BY_CONTRACT_ID", data);

      if (data instanceof Error) {
        void addAdjustmentStatementTable({
          variables: {
            contractId: contractId && parseInt(contractId),
            userId: user.id,
            filledBy:
              contractData?.items[0]?.accuserDepartmentUserId == user.id ||
              contractData?.items[0]?.accuserDepartmentUserId == user.parentId
                ? "ACCUSER"
                : "ACCUSED",
          },
          options: {
            onCompleted(data, clientOptions) {
              console.log("addAdjustmentStatementTable", data);
              void refetch();
            },
          },
        });
      } else {
        if(!data) {
          void addAdjustmentStatementTable({
            variables: {
              contractId: contractId && parseInt(contractId),
              userId: user.id,
              filledBy:
              contractData?.items[0]?.accuserDepartmentUserId == user.id ||
              contractData?.items[0]?.accuserDepartmentUserId == user.parentId
                ? "ACCUSER"
                : "ACCUSED",
            },
            options: {
              onCompleted(data, clientOptions) {
                console.log("addAdjustmentStatementTable", data);
                void refetch();
              },
            },
          });
        }
        if (data?.items?.length > 0) {
          void addAdjustmentStatementTable({
            variables: {
              contractId: contractId && parseInt(contractId),
              userId: user.id,
              filledBy:
              contractData?.items[0]?.accuserDepartmentUserId == user.id ||
              contractData?.items[0]?.accuserDepartmentUserId == user.parentId
                ? "ACCUSER"
                : "ACCUSED",
            },
            options: {
              onCompleted(data, clientOptions) {
                console.log("addAdjustmentStatementTable", data);
                void refetch();
              },
            },
          });
        }
      }

      // void addAdjustmentStatementTable({
      //   variables: {
      //     contractId: contractId && parseInt(contractId),
      //     userId: user.id,
      //   },
      //   options: {
      //     onCompleted(data, clientOptions) {
      //       console.log("addAdjustmentStatementTable", data);
      //       void refetch();
      //     },
      //   },
      // });
    }
  }, [data]);

  const handleEmptyFields = () => {
    if (!newAdjustmentStatement.title) {
      setPageError("عنوان را وارد کنید");
      return true;
    }
    if (!newAdjustmentStatement.amountProvidedByContractor) {
      setPageError("مبلغ ارائه شده توسط پیمانکار را وارد کنید");
      return true;
    }
    if (!newAdjustmentStatement.dateProvidedByContractor) {
      setPageError("تاریخ ارائه شده توسط پیمانکار را وارد کنید");
      return true;
    }
    if (!newAdjustmentStatement.amountConfirmedByConsultant) {
      setPageError("مبلغ تایید شده توسط مشاور را وارد کنید");
      return true;
    }
    if (!newAdjustmentStatement.dateConfirmedByConsultant) {
      setPageError("تاریخ تایید شده توسط مشاور را وارد کنید");
      return true;
    }
    if (!newAdjustmentStatement.amountApprovedByEmployer) {
      setPageError("مبلغ تایید شده توسط کارفرما را وارد کنید");
      return true;
    }
    if (!newAdjustmentStatement.dateApprovedByEmployer) {
      setPageError("تاریخ تایید شده توسط کارفرما را وارد کنید");
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
              colSpan={12}
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
                جدول صورت وضعیت تعدیل 
                </FaTypography>
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
              }}
              rowSpan={2}
            >
              عنوان
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
              colSpan={2}
            >
              ارائه شده توسط پیمانکار
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
              colSpan={2}

            >
              تایید شده توسط مشاور
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
              colSpan={2}

            >
              تایید شده توسط کارفرما
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
              colSpan={2}

            >
              پرداخت
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              ...
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              تاريخ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              تاريخ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              تاريخ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
              }}
            >
              تاريخ
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
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    title: e.target.value,
                  })
                }
                value={newAdjustmentStatement.title}
                focused={newAdjustmentStatement.title ? true : false}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountProvidedByContractor: parseInt(e.target.value),
                  })
                }
                value={newAdjustmentStatement.amountProvidedByContractor}
                fullWidth
                focused={newAdjustmentStatement.amountProvidedByContractor ? true : false}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                date={newAdjustmentStatement.dateProvidedByContractor}
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountConfirmedByConsultant: parseInt(e.target.value),
                  })
                }
                value={newAdjustmentStatement.amountConfirmedByConsultant}
                fullWidth
                focused={newAdjustmentStatement.amountConfirmedByConsultant ? true : false}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    dateConfirmedByConsultant: date || new Date(),
                  })
                }
                date={newAdjustmentStatement.dateConfirmedByConsultant}
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountConfirmedByConsultant: parseInt(e.target.value),
                  })
                }
                value={newAdjustmentStatement.amountApprovedByEmployer}
                fullWidth
                focused={newAdjustmentStatement.amountApprovedByEmployer ? true : false}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                date={newAdjustmentStatement.dateApprovedByEmployer}
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountPaid: parseInt(e.target.value),
                  })
                }
                value={newAdjustmentStatement.amountPaid}
                fullWidth
                focused={newAdjustmentStatement.amountPaid ? true : false}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                date={newAdjustmentStatement.datePaid}
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
                      void editAdjustmentStatement({
                        variables: {
                          AdjustmentStatementTableId: tableId && tableId,
                          amountApprovedByEmployer: newAdjustmentStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer: newAdjustmentStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant: newAdjustmentStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant: newAdjustmentStatement.dateConfirmedByConsultant,
                          amountPaid: newAdjustmentStatement.amountPaid,
                          datePaid: newAdjustmentStatement.datePaid,
                          amountProvidedByContractor: newAdjustmentStatement.amountProvidedByContractor,
                          dateProvidedByContractor: newAdjustmentStatement.dateProvidedByContractor,
                          title: newAdjustmentStatement.title,
                          registrarType:
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.id ||
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newAdjustmentStatement.id,
                        },
                      }).then((res) => {
                        void refetch();
                        setEditMode(false);
                        setNewAdjustmentStatement({} as AdjustmentStatement);
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
                    onClick={() => {
                      // if(handleEmptyFields()) return;
                      void addAdjustmentStatement({
                        variables: {
                          adjustmentStatementTableId: tableId && tableId,
                          amountApprovedByEmployer: newAdjustmentStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer: newAdjustmentStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant: newAdjustmentStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant: newAdjustmentStatement.dateConfirmedByConsultant,
                          amountPaid: newAdjustmentStatement.amountPaid,
                          datePaid: newAdjustmentStatement.datePaid,
                          amountProvidedByContractor: newAdjustmentStatement.amountProvidedByContractor,
                          dateProvidedByContractor: newAdjustmentStatement.dateProvidedByContractor,
                          title: newAdjustmentStatement.title,
                          filledBy:
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.id ||
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                        },
                      })
                        .then((res) => {
                          setNewAdjustmentStatement({} as AdjustmentStatement);
                          void refetch();
                          setPageError('');
                        })
                        .catch((err) => {
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
          {/* {tableId} */}
          {pageError && <Typography color={Red}>{pageError}</Typography>}
          {AdjustmentStatement &&
            AdjustmentStatement.length > 0 &&
            AdjustmentStatement.map((AdjustmentStatement) => (
              <AdjustmentStatementCard
                AdjustmentStatement={AdjustmentStatement}
                refetch={refetch}
                setEditMode={setEditMode}
                setNewAdjustmentStatement={setNewAdjustmentStatement}
                key={AdjustmentStatement.id}
                setAddAdjustmentStatementPartModal={
                  setAddAdjustmentStatementPartModal
                }
              />
            ))}
        </TableBody>
        <NewModal
          title="افزودن زیرمجموعه"
          open={addAdjustmentStatementPartModal.open}
          onClose={() => {
            setAddAdjustmentStatementPartModal({
              ...addAdjustmentStatementPartModal,
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
              onChange={(e) =>
                setAddAdjustmentStatementPartModal({
                  ...addAdjustmentStatementPartModal,
                  AdjustmentStatementPart: {
                    ...addAdjustmentStatementPartModal.AdjustmentStatementPart,
                    amount: parseInt(e.target.value),
                  },
                })
              }
              value={addAdjustmentStatementPartModal.AdjustmentStatementPart.amount}
              fullWidth
              type="number"
            />
            <DateButton
              label="تاریخ پرداخت"
              setDate={(date) =>
                setAddAdjustmentStatementPartModal({
                  ...addAdjustmentStatementPartModal,
                  AdjustmentStatementPart: {
                    ...addAdjustmentStatementPartModal.AdjustmentStatementPart,
                    // @ts-ignore
                    date: date || new Date(),
                  },
                })
              }
              date={addAdjustmentStatementPartModal.AdjustmentStatementPart.date}
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
                  void createAdjustmentStatementPart({
                    variables: {
                      AdjustmentStatementId:
                        addAdjustmentStatementPartModal.AdjustmentStatementId,
                      amount:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .amount,
                      date: addAdjustmentStatementPartModal.AdjustmentStatementPart
                        .date,
                    },
                  })
                    .then((res) => {
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddAdjustmentStatementPartModal({
                        ...addAdjustmentStatementPartModal,
                        AdjustmentStatementPart: {} as AdjustmentStatementPart,
                        open: false,
                      });
                      void refetch();
                    })
                    .catch((err) => {
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

export default AdjustmentStatementTable;
