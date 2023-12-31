/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { EditOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  MenuItem,
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
  UPDATE_ADJUSTMENT_STATEMENT,
} from "../../../GraphQL/Tables/Mutations";
import { GET_ADJUSTMENT_STATEMENT_TABLE_BY_CONTRACT_ID } from "../../../GraphQL/Tables/Queries";
import {
  Red,
  background,
  primary,
  primaryLight,
  secondary,
  secondaryDark,
  secondaryLight,
  secondaryLighter,
} from "../../../theme/color";
import DateButton from "../../DateButton";
import FaTextField from "../../FaComponents/FaTextField";
import FaTypography from "../../FaComponents/FaTypography";
import NewModal from "../../Modals";
import AdjustmentStatementCard from "./AdjustmentStatementCard";

const currencies = [
  {
    value: "دلار آمریکا",
    label: "$",
  },
  {
    value: "یورو",
    label: "€",
  },
  {
    value: "بیتکوین",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "روپیه",
    label: "₽",
  },
  {
    value: "ريال",
    label: "ريال",
  },
];

interface Props extends TableContainerProps {
  AdjustmentStatementTableId?: number;
  type?: "ACCUSED" | "ACCUSER";
}
const AdjustmentStatementTable = (props: Props) => {
  const { contractId } = useParams<{ contractId: string }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [TableHeader, setTableHeader] = React.useState<string>();
  const [TableHeaderOther, setTableHeaderOther] =
    React.useState<string>();
  const [AdjustmentStatement, setAdjustmentStatements] =
    React.useState<AdjustmentStatement[]>([
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
  const [
    addAdjustmentStatementPartModal,
    setAddAdjustmentStatementPartModal,
  ] = React.useState<{
    open: boolean;
    AdjustmentStatementPart: AdjustmentStatementPart;
    AdjustmentStatementId?: number;
  }>({
    open: false,
    AdjustmentStatementPart: {} as AdjustmentStatementPart,
  });

  const [newAdjustmentStatement, setNewAdjustmentStatement] =
    React.useState<AdjustmentStatement>({} as AdjustmentStatement);

  const { handleMutation: addAdjustmentStatement } = MutationWrapper(
    CREATE_ADJUSTMENT_STATEMENT,
    "adjustmentStatement_addAdjustmentStatement"
  );
  const { handleMutation: addAdjustmentStatementTable } =
    MutationWrapper(
      CREATE_ADJUSTMENT_STATEMENT_TABLE,
      "adjustmentStatementTable_addAdjustmentStatementTable"
    );

  const { handleMutation: editAdjustmentStatement } = MutationWrapper(
    UPDATE_ADJUSTMENT_STATEMENT,
    "adjustmentStatement_updateAdjustmentStatement"
  );

  const { data, refetch } = QueryWrapper(
    GET_ADJUSTMENT_STATEMENT_TABLE_BY_CONTRACT_ID,
    "adjustmentStatementTable_getAdjustmentStatementTables",
    {
      id: contractId && parseInt(contractId),
    },
    {
      onCompleted(data) {
        console.log("OnComplete", data);
        const userType =
          data?.items[0]?.accuserDepartmentUserId == user.parentId
            ? "ACCUSER"
            : "ACCUSED";

        setAdjustmentStatements(
          data.items[0].adjustmentStatements.filter(
            (adjustmentStatement: AdjustmentStatement) =>
              adjustmentStatement.filledBy == userType
          )
        );
      },
      onError(error) {
        console.log("error", error);
      },
    }
  );

  const { handleMutation: createAdjustmentStatementPart } =
    MutationWrapper(
      CREATE_ADJUSTMENT_STATEMENT_PART,
      "adjustmentStatementPart_addAdjustmentStatementPart"
    );

  React.useEffect(() => {
    console.log("GET_AdjustmentStatement_TABLE_BY_CONTRACT_ID", data);
    const userType =
      data?.items[0]?.accuserDepartmentUserId == user.parentId
        ? "ACCUSER"
        : "ACCUSED";
    console.warn("userType", userType);
    if (data?.items?.length > 0) {
      console.log("TestNew", data);
      const userType =
        data?.items[0]?.accuserDepartmentUserId == user.parentId
          ? "ACCUSER"
          : "ACCUSED";
      setAdjustmentStatements(
        data.items[0].adjustmentStatements.filter(
          (adjustmentStatement: AdjustmentStatement) =>
            adjustmentStatement.filledBy == userType
        )
      );
      // setAdjustmentStatements(data?.items[0]?.adjustmentStatements && data?.items[0]?.adjustmentStatements);
      // setNewInstallment({
      //   ...newInstallment,
      //   installmentTableId: data?.items[0]?.id,
      // })

      setTableId(data?.items[0]?.id);
    } else {
      // console.log("else",data?.items?.length);
      if (data instanceof Error) {
        console.log("adding");
        void addAdjustmentStatementTable({
          variables: {
            contractId: contractId && parseInt(contractId),
            userId: user.id,
          },
          options: {
            onCompleted(data, clientOptions) {
              console.log("addAdjustmentStatementTable", data);
              setTableId(data?.id);
              void refetch();
            },
          },
        });
      } else {
        if (data?.items?.length == 0) {
          console.log("adding");
          void addAdjustmentStatementTable({
            variables: {
              contractId: contractId && parseInt(contractId),
              userId: user.id,
            },
            options: {
              onCompleted(data, clientOptions) {
                console.log("addAdjustmentStatementTable", data);
                setTableId(data?.id);
                void refetch();
              },
            },
          });
        }
      }
    }
  }, [data, refetch]);
  //   if (data?.items?.length > 0 && loading == false) {
  //     console.log("GET_AdjustmentStatement_TABLE_BY_CONTRACT_ID", data);
  //     setAdjustmentStatements(data?.items[0]?.AdjustmentStatements);
  //     // setNewAdjustmentStatement({
  //     //   ...newAdjustmentStatement,
  //     //   AdjustmentStatementTableId: data?.items[0]?.id,
  //     // })

  //     setTableId(data?.items[0]?.id);
  //   } else {
  //     console.log("GET_AdjustmentStatement_TABLE_BY_CONTRACT_ID", data);

  //     if (data instanceof Error) {
  //       void addAdjustmentStatementTable({
  //         variables: {
  //           contractId: contractId && parseInt(contractId),
  //           userId: user.id,
  //           filledBy:
  //             contractData?.items[0]?.accuserDepartmentUserId == user.id ||
  //             contractData?.items[0]?.accuserDepartmentUserId == user.parentId
  //               ? "ACCUSER"
  //               : "ACCUSED",
  //         },
  //         options: {
  //           onCompleted(data, clientOptions) {
  //             console.log("addAdjustmentStatementTable", data);
  //             void refetch();
  //           },
  //         },
  //       });
  //     } else {
  //       if(!data) {
  //         void addAdjustmentStatementTable({
  //           variables: {
  //             contractId: contractId && parseInt(contractId),
  //             userId: user.id,
  //             filledBy:
  //             contractData?.items[0]?.accuserDepartmentUserId == user.id ||
  //             contractData?.items[0]?.accuserDepartmentUserId == user.parentId
  //               ? "ACCUSER"
  //               : "ACCUSED",
  //           },
  //           options: {
  //             onCompleted(data, clientOptions) {
  //               console.log("addAdjustmentStatementTable", data);
  //               void refetch();
  //             },
  //           },
  //         });
  //       }
  //       if (data?.items?.length > 0) {
  //         void addAdjustmentStatementTable({
  //           variables: {
  //             contractId: contractId && parseInt(contractId),
  //             userId: user.id,
  //             filledBy:
  //             contractData?.items[0]?.accuserDepartmentUserId == user.id ||
  //             contractData?.items[0]?.accuserDepartmentUserId == user.parentId
  //               ? "ACCUSER"
  //               : "ACCUSED",
  //           },
  //           options: {
  //             onCompleted(data, clientOptions) {
  //               console.log("addAdjustmentStatementTable", data);
  //               void refetch();
  //             },
  //           },
  //         });
  //       }
  //     }

  //     // void addAdjustmentStatementTable({
  //     //   variables: {
  //     //     contractId: contractId && parseInt(contractId),
  //     //     userId: user.id,
  //     //   },
  //     //   options: {
  //     //     onCompleted(data, clientOptions) {
  //     //       console.log("addAdjustmentStatementTable", data);
  //     //       void refetch();
  //     //     },
  //     //   },
  //     // });
  //   }
  // }, [data]);

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
        my: "1rem",
        // change the color of header to grey
        "& thead": {
          "& tr": {
            "& th": {
              color: "#fff",
              background: secondary,
              padding: "0.5rem",
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
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <FaTypography variant="h6" textAlign={"center"}>
                  جدول صورت حساب
                </FaTypography>
                <FaTextField
                  label="انتخاب کنید"
                  select
                  sx={{
                    color: primary,
                    width: "130px",
                  }}
                  InputLabelProps={{
                    sx: {
                      color: primary,
                    },
                  }}
                  value={TableHeader}
                  onChange={(e) => {
                    setTableHeader(e.target.value);
                  }}
                  InputProps={{
                    sx: {
                      // change the color of text in select
                      color: primary,
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  <MenuItem value="REDUCE">تعدیل</MenuItem>
                  <MenuItem value="CASH">ارز</MenuItem>
                  <MenuItem value="MATERIAL">مصالح</MenuItem>
                  <MenuItem value="OTHER">سایر</MenuItem>
                </FaTextField>

                <FaTextField
                  value={TableHeaderOther}
                  label="سایر"
                  onChange={(e) => {
                    setTableHeaderOther(e.target.value);
                  }}
                  sx={{
                    color: primary,
                    display:
                      TableHeader === "OTHER" ? "flex" : "none",
                  }}
                  InputLabelProps={{
                    sx: {
                      color: primary,
                    },
                  }}
                  InputProps={{
                    sx: {
                      // change the color of text in select
                      color: primary,
                      fontSize: "1.3rem",
                    },
                  }}
                />

                <FaTextField
                  label="شماره بخشنامه"
                  sx={{
                    color: primary,
                    display:
                      TableHeader === "REDUCE" ? "flex" : "none",
                  }}
                  InputLabelProps={{
                    sx: {
                      color: primary,
                    },
                  }}
                  InputProps={{
                    sx: {
                      // change the color of text in select
                      color: primary,
                      fontSize: "1.3rem",
                    },
                  }}
                />
                <FaTextField
                  label="تاریخ بخشنامه"
                  sx={{
                    color: primary,
                    display:
                      TableHeader === "REDUCE" ? "flex" : "none",
                  }}
                  InputLabelProps={{
                    sx: {
                      color: primary,
                    },
                  }}
                  InputProps={{
                    sx: {
                      // change the color of text in select
                      color: primary,
                      fontSize: "1.3rem",
                    },
                  }}
                  type="date"
                />
                {/* <FaTextField
                  label="ارزی"
                  sx={{
                    color: primary,
                    display: TableHeader === "CASH" ? "flex" : "none",
                  }}
                  InputLabelProps={{
                    sx: {
                      color: primary,
                    },
                  }}
                  InputProps={{
                    sx: {
                      color: primary,
                      fontSize: "1.3rem",
                    },
                  }}
                  select
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label} {option.value}
                    </MenuItem>
                  ))}
                </FaTextField> */}
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
              rowSpan={2}
            >
              عنوان
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
              colSpan={2}
            >
              ارائه شده توسط پیمانکار
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
              colSpan={2}
            >
              تایید شده توسط مشاور
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
              colSpan={2}
            >
              تایید شده توسط کارفرما
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
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
                borderRight: "1px solid white",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              تاريخ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              تاريخ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              تاريخ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight: "1px solid white",
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
                InputLabelProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                value={
                  newAdjustmentStatement.title
                    ? newAdjustmentStatement.title
                    : ""
                }
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
                    amountProvidedByContractor: parseInt(
                      e.target.value
                    ),
                  })
                }
                value={
                  newAdjustmentStatement.amountProvidedByContractor
                    ? newAdjustmentStatement.amountProvidedByContractor
                    : ""
                }
                fullWidth
                focused={
                  newAdjustmentStatement.amountProvidedByContractor
                    ? true
                    : false
                }
                InputLabelProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                direction="column"
                date={newAdjustmentStatement.dateProvidedByContractor}
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountConfirmedByConsultant: parseInt(
                      e.target.value
                    ),
                  })
                }
                InputLabelProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                value={
                  newAdjustmentStatement.amountConfirmedByConsultant
                    ? newAdjustmentStatement.amountConfirmedByConsultant
                    : ""
                }
                fullWidth
                focused={
                  newAdjustmentStatement.amountConfirmedByConsultant
                    ? true
                    : false
                }
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    dateConfirmedByConsultant: date || new Date(),
                  })
                }
                direction="column"
                date={
                  newAdjustmentStatement.dateConfirmedByConsultant
                }
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountApprovedByEmployer: parseInt(
                      e.target.value
                    ),
                  })
                }
                value={
                  newAdjustmentStatement.amountApprovedByEmployer
                    ? newAdjustmentStatement.amountApprovedByEmployer
                    : ""
                }
                fullWidth
                focused={
                  newAdjustmentStatement.amountApprovedByEmployer
                    ? true
                    : false
                }
                InputLabelProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                direction="column"
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
                value={
                  newAdjustmentStatement.amountPaid
                    ? newAdjustmentStatement.amountPaid
                    : ""
                }
                fullWidth
                focused={
                  newAdjustmentStatement.amountPaid ? true : false
                }
                InputLabelProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "12px",
                  },
                }}
                type="number"
              />
            </TableCell>
            <TableCell>
              <DateButton
                label="تاریخ پرداخت"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                direction="column"
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
                          adjustmentStatementTableId:
                            tableId && tableId,
                          amountApprovedByEmployer:
                            newAdjustmentStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newAdjustmentStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newAdjustmentStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newAdjustmentStatement.dateConfirmedByConsultant,
                          amountPaid:
                            newAdjustmentStatement.amountPaid,
                          datePaid: newAdjustmentStatement.datePaid,
                          amountProvidedByContractor:
                            newAdjustmentStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newAdjustmentStatement.dateProvidedByContractor,
                          title: newAdjustmentStatement.title,
                          filledBy:
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
                        setNewAdjustmentStatement(
                          {} as AdjustmentStatement
                        );
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
                          adjustmentStatementTableId:
                            tableId && tableId,
                          amountApprovedByEmployer:
                            newAdjustmentStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newAdjustmentStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newAdjustmentStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newAdjustmentStatement.dateConfirmedByConsultant,
                          amountPaid:
                            newAdjustmentStatement.amountPaid,
                          datePaid: newAdjustmentStatement.datePaid,
                          amountProvidedByContractor:
                            newAdjustmentStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newAdjustmentStatement.dateProvidedByContractor,
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
                          setNewAdjustmentStatement(
                            {} as AdjustmentStatement
                          );
                          void refetch();
                          setPageError("");
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
          {pageError && (
            <Typography color={Red}>{pageError}</Typography>
          )}
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
          width={"60%"}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr 1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
          >
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gap={"1rem"}
              width={"100%"}
              gridColumn={"span 1"}
              sx={{
                borderRadius: "10px",
                outline: `2px solid ${secondary}`,
                padding: "0.5rem",
              }}
            >
              <FaTypography textAlign={"center"}>
                ارائه شده توسط پیمانکار
              </FaTypography>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setAddAdjustmentStatementPartModal({
                    ...addAdjustmentStatementPartModal,
                    AdjustmentStatementPart: {
                      ...addAdjustmentStatementPartModal.AdjustmentStatementPart,
                      amountProvidedByContractor: parseInt(
                        e.target.value
                      ),
                    },
                  })
                }
                value={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart
                    .amountProvidedByContractor
                }
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
                      dateProvidedByContractor: date || new Date(),
                    },
                  })
                }
                date={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart.dateProvidedByContractor
                }
              />
            </Box>
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gap={"1rem"}
              width={"100%"}
              gridColumn={"span 1"}
              sx={{
                borderRadius: "10px",
                outline: `2px solid ${secondary}`,
                padding: "0.5rem",
              }}
            >
              <FaTypography
                gridColumn={"span 1"}
                textAlign={"center"}
              >
                تایید شده توسط مشاور
              </FaTypography>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setAddAdjustmentStatementPartModal({
                    ...addAdjustmentStatementPartModal,
                    AdjustmentStatementPart: {
                      ...addAdjustmentStatementPartModal.AdjustmentStatementPart,
                      amountConfirmedByConsultant: parseInt(
                        e.target.value
                      ),
                    },
                  })
                }
                value={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart
                    .amountConfirmedByConsultant
                }
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
                      dateConfirmedByConsultant: date || new Date(),
                    },
                  })
                }
                date={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart.dateConfirmedByConsultant
                }
              />
            </Box>
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gap={"1rem"}
              width={"100%"}
              gridColumn={"span 1"}
              sx={{
                borderRadius: "10px",
                outline: `2px solid ${secondary}`,
                padding: "0.5rem",
              }}
            >
              <FaTypography
                gridColumn={"span 1"}
                textAlign={"center"}
              >
                تایید شده توسط کارفرما
              </FaTypography>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setAddAdjustmentStatementPartModal({
                    ...addAdjustmentStatementPartModal,
                    AdjustmentStatementPart: {
                      ...addAdjustmentStatementPartModal.AdjustmentStatementPart,
                      amountApprovedByEmployer: parseInt(
                        e.target.value
                      ),
                    },
                  })
                }
                value={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart.amountApprovedByEmployer
                }
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
                      dateApprovedByEmployer: date || new Date(),
                    },
                  })
                }
                date={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart.dateApprovedByEmployer
                }
              />
            </Box>
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gap={"1rem"}
              width={"100%"}
              gridColumn={"span 1"}
              sx={{
                borderRadius: "10px",
                outline: `2px solid ${secondary}`,
                padding: "0.5rem",
              }}
            >
              <FaTypography
                gridColumn={"span 1"}
                textAlign={"center"}
                sx={
                  {
                    // background: primary,
                  }
                }
              >
                پرداخت
              </FaTypography>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setAddAdjustmentStatementPartModal({
                    ...addAdjustmentStatementPartModal,
                    AdjustmentStatementPart: {
                      ...addAdjustmentStatementPartModal.AdjustmentStatementPart,
                      amountPaid: parseInt(e.target.value),
                    },
                  })
                }
                value={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart.amountPaid
                }
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
                      datePaid: date || new Date(),
                    },
                  })
                }
                date={
                  addAdjustmentStatementPartModal
                    .AdjustmentStatementPart.datePaid
                }
              />
            </Box>
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
                      adjustmentStatementId:
                        addAdjustmentStatementPartModal.AdjustmentStatementId,
                      amountApprovedByEmployer:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .amountApprovedByEmployer,
                      amountConfirmedByConsultant:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .amountConfirmedByConsultant,
                      amountPaid:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart.amountPaid,
                      amountProvidedByContractor:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .amountProvidedByContractor,
                      dateApprovedByEmployer:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .dateApprovedByEmployer,
                      dateConfirmedByConsultant:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .dateConfirmedByConsultant,
                      datePaid:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart.datePaid,
                      dateProvidedByContractor:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .dateProvidedByContractor,
                      operationPeriodEndDate:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .operationPeriodEndDate,
                      operationPeriodStartDate:
                        addAdjustmentStatementPartModal
                          .AdjustmentStatementPart
                          .operationPeriodStartDate,
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
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddAdjustmentStatementPartModal({
                        ...addAdjustmentStatementPartModal,
                        AdjustmentStatementPart:
                          {} as AdjustmentStatementPart,
                        open: false,
                      });
                      window.location.reload();
                      void refetch();
                    })
                    .catch((err) => {
                      alert("خطا در افزودن زیرمجموعه");
                      void refetch();
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
