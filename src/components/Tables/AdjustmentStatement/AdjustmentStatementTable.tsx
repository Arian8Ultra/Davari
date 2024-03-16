/* eslint-disable @typescript-eslint/restrict-plus-operands */
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
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  useCreate_Adjustment_StatementMutation,
  useCreate_Adjustment_Statement_PartMutation,
  useCreate_Adjustment_Statement_TableMutation,
  useGetAdjustmentStatementTablesQuery,
  useGetAdjustmentStatementsFullLazyQuery,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import {
  AdjustmentStatement,
  AdjustmentStatementPart,
  CREATE_ADJUSTMENT_STATEMENT,
  CREATE_ADJUSTMENT_STATEMENT_PART,
  UPDATE_ADJUSTMENT_STATEMENT,
} from "../../../GraphQL/Tables/Mutations";
import { RegistrarType } from "../../../gql/graphql";
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
import AdjustmentStatementCard from "./AdjustmentStatementCard";
import FileBox from "../../FileBox";

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
  isConsultant?: boolean;
}
const AdjustmentStatementTable = (props: Props) => {
  const { contractId } = useParams<{ contractId: string }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [TableHeader, setTableHeader] = React.useState<string>();
  const [TableHeaderOther, setTableHeaderOther] = React.useState<string>();
  const [refetchBoolean, setRefetchBoolean] = React.useState<boolean>(false);
  const [AdjustmentStatement, setAdjustmentStatements] = React.useState<
    AdjustmentStatement[]
  >([
    // {
    //   amount: 100000,
    //   filledBy: "ACCUSED",
    //   id: 1,
    //   date: new Date(),
    //   title: "پیش پرداخت اول",
    //   AdjustmentStatementTableId: 1,
    // },
  ]);
  const [pageError, setPageError] = React.useState<string>();
  const [tableId, setTableId] = React.useState<number>();
  const [DefiniteAdjustmentStatementPart, setDefiniteAdjustmentStatementPart] =
    React.useState<AdjustmentStatement>({} as AdjustmentStatement);
  const [addAdjustmentStatementPartModal, setAddAdjustmentStatementPartModal] =
    React.useState<{
      open: boolean;
      AdjustmentStatementPart: AdjustmentStatementPart;
      AdjustmentStatementId?: number;
    }>({
      open: false,
      AdjustmentStatementPart: {} as AdjustmentStatementPart,
    });

  const [newAdjustmentStatement, setNewAdjustmentStatement] =
    React.useState<AdjustmentStatement>({} as AdjustmentStatement);

  const [addAdjustmentStatement] = useCreate_Adjustment_StatementMutation();

  const [addAdjustmentStatementTable] =
    useCreate_Adjustment_Statement_TableMutation();

  const { handleMutation: editAdjustmentStatement } = MutationWrapper(
    UPDATE_ADJUSTMENT_STATEMENT,
    "adjustmentStatement_updateAdjustmentStatement"
  );

  const { data } = useGetAdjustmentStatementTablesQuery({
    variables: {
      id: (contractId && parseInt(contractId)) || 0,
    },
    onCompleted(data) {
      console.log("OnComplete", data);
      const userType =
        data?.adjustmentStatementTable_getAdjustmentStatementTables?.result
          ?.items?.[0]?.contract?.accuserDepartmentUserId == user.parentId
          ? "ACCUSER"
          : "ACCUSED";

      void getStatements({
        variables: {
          filter: {
            adjustmentStatementTableId: {
              eq:
                data?.adjustmentStatementTable_getAdjustmentStatementTables
                  ?.result?.items?.[0]?.id || null,
            },
            filledBy: {
              eq:
                data?.adjustmentStatementTable_getAdjustmentStatementTables
                  ?.result?.items?.[0]?.contract?.accuserDepartmentUserId ==
                user.parentId
                  ? RegistrarType.Accuser
                  : RegistrarType.Accused,
            },
          },
        },
      });

      // setAdjustmentStatements(
      //   data.items[0].adjustmentStatements.filter(
      //     (adjustmentStatement: AdjustmentStatement) =>
      //       adjustmentStatement.filledBy == userType
      //   )
      // );
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const [getStatements, { data: adjustmentStatements, refetch }] =
    useGetAdjustmentStatementsFullLazyQuery({
      variables: {
        filter: {
          adjustmentStatementTableId: {
            eq:
              data?.adjustmentStatementTable_getAdjustmentStatementTables
                ?.result?.items?.[0]?.id || null,
          },
          filledBy: {
            eq:
              data?.adjustmentStatementTable_getAdjustmentStatementTables
                ?.result?.items?.[0]?.contract?.accuserDepartmentUserId ==
              user.parentId
                ? RegistrarType.Accuser
                : RegistrarType.Accused,
          },
        },
      },
      onCompleted(data) {
        console.log("😊 OnComplete", data);
      },
    });

  // const { handleMutation: createAdjustmentStatementPart } =
  //   MutationWrapper(
  //     CREATE_ADJUSTMENT_STATEMENT_PART,
  //     "adjustmentStatementPart_addAdjustmentStatementPart"
  //   );

  const [createAdjustmentStatementPart] =
    useCreate_Adjustment_Statement_PartMutation();

  React.useEffect(() => {
    const userType =
      data?.adjustmentStatementTable_getAdjustmentStatementTables?.result
        ?.items?.[0]?.contract?.accuserDepartmentUserId == user.parentId
        ? "ACCUSER"
        : "ACCUSED";
    console.warn("userType", userType);
    if (
      data?.adjustmentStatementTable_getAdjustmentStatementTables?.result?.items
        ?.length &&
      data?.adjustmentStatementTable_getAdjustmentStatementTables?.result?.items
        ?.length > 0
    ) {
      const userType =
        data?.adjustmentStatementTable_getAdjustmentStatementTables.result
          ?.items?.[0]?.contract?.accuserDepartmentUserId == user.id ||
        data?.adjustmentStatementTable_getAdjustmentStatementTables.result
          ?.items?.[0]?.contract?.accuserDepartmentUserId == user.parentId
          ? "ACCUSER"
          : "ACCUSED";
      console.warn("userType", userType);
      void getStatements({
        variables: {
          filter: {
            and: [
              {
                adjustmentStatementTableId: {
                  eq:
                    data?.adjustmentStatementTable_getAdjustmentStatementTables
                      ?.result?.items?.[0]?.id || null,
                },
              },
              {
                filledBy: {
                  eq:
                    userType == "ACCUSER"
                      ? RegistrarType.Accuser
                      : RegistrarType.Accused,
                },
              },
            ],
          },
        },
      });
      setTableId(
        data?.adjustmentStatementTable_getAdjustmentStatementTables?.result
          ?.items?.[0]?.id
      );
    }
  }, [
    addAdjustmentStatementTable,
    contractId,
    data,
    getStatements,
    user.id,
    user.parentId,
  ]);

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
            {props.isConsultant ? (
              <TableCell
                colSpan={12}
                sx={{
                  textAlign: "center",
                  position: "relative",
                  height: "3.5rem",
                  color: primary,
                }}
              >
                <FaTypography
                  variant="h6"
                  textAlign={"center"}
                  sx={{
                    color: primary,
                  }}
                >
                  صورت حساب کارکرد
                </FaTypography>
              </TableCell>
            ) : (
              <TableCell
                colSpan={12}
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
                      display: TableHeader === "OTHER" ? "flex" : "none",
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
                        TableHeader === "REDUCE" ||
                        TableHeader === "MATERIAL" ||
                        TableHeader === "CASH"
                          ? "flex"
                          : "none",
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
                  {/* <FaTextField
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
                /> */}
                  <DatePicker
                    label="تاریخ بخشنامه"
                    value={new Date()}
                    onChange={(date) => console.log(date)}
                    disableFuture
                    sx={{
                      display:
                        TableHeader === "REDUCE" ||
                        TableHeader === "MATERIAL" ||
                        TableHeader === "CASH"
                          ? "flex"
                          : "none",
                      // change the color of label
                      "& label": {
                        color: primary,
                      },
                      // change the color of text
                      "& .MuiInputBase-input": {
                        color: primary,
                      },
                    }}
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
            )}
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
                borderRight: "1px solid white",
              }}
              colSpan={1}
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
                borderRight: "1px solid white",
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
                  "صورت حساب" +
                  " " +
                  (adjustmentStatements
                    ?.adjustmentStatement_getAdjustmentStatements.result?.items
                    ?.length || 0 + 1)
                }
                disabled
                focused={true}
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
              <DatePicker
                label="تاریخ پرداخت"
                value={newAdjustmentStatement.dateProvidedByContractor}
                onChange={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    dateProvidedByContractor: date || new Date(),
                  })
                }
              />
              {/* <DateButton
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
              /> */}
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
              <DatePicker
                label="تاریخ پرداخت"
                value={newAdjustmentStatement.dateConfirmedByConsultant}
                onChange={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    dateConfirmedByConsultant: date || new Date(),
                  })
                }
              />
              {/* <DateButton
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
                date={newAdjustmentStatement.dateConfirmedByConsultant}
              /> */}
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    amountApprovedByEmployer: parseInt(e.target.value),
                  })
                }
                value={
                  newAdjustmentStatement.amountApprovedByEmployer
                    ? newAdjustmentStatement.amountApprovedByEmployer
                    : ""
                }
                fullWidth
                focused={
                  newAdjustmentStatement.amountApprovedByEmployer ? true : false
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
              <DatePicker
                label="تاریخ پرداخت"
                value={newAdjustmentStatement.dateApprovedByEmployer}
                onChange={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
              />
              {/* <DateButton
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
              /> */}
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
                focused={newAdjustmentStatement.amountPaid ? true : false}
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
              <DatePicker
                label="تاریخ پرداخت"
                value={newAdjustmentStatement.datePaid}
                onChange={(date) =>
                  setNewAdjustmentStatement({
                    ...newAdjustmentStatement,
                    datePaid: date || new Date(),
                  })
                }
              />
              {/* <DateButton
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
                      void editAdjustmentStatement({
                        variables: {
                          adjustmentStatementTableId: tableId && tableId,
                          amountApprovedByEmployer:
                            newAdjustmentStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newAdjustmentStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newAdjustmentStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newAdjustmentStatement.dateConfirmedByConsultant,
                          amountPaid: newAdjustmentStatement.amountPaid,
                          datePaid: newAdjustmentStatement.datePaid,
                          amountProvidedByContractor:
                            newAdjustmentStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newAdjustmentStatement.dateProvidedByContractor,
                          title: newAdjustmentStatement.title,
                          filledBy:
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newAdjustmentStatement.id,
                        },
                      }).then((res) => {
                        void getStatements();
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
                    <FaTypography variant="body2" textAlign={"center"}>
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
                          adjustmentStatementTableId: tableId || 0,
                          amountApprovedByEmployer:
                            newAdjustmentStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newAdjustmentStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newAdjustmentStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newAdjustmentStatement.dateConfirmedByConsultant,
                          amountPaid: newAdjustmentStatement.amountPaid,
                          datePaid: newAdjustmentStatement.datePaid,
                          amountProvidedByContractor:
                            newAdjustmentStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newAdjustmentStatement.dateProvidedByContractor,
                          title:
                            "صورت وضعیت" +
                            " " +
                            (adjustmentStatements
                              ?.adjustmentStatement_getAdjustmentStatements
                              ?.result?.items?.length || 0 + 1),
                          filledBy:
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? RegistrarType.Accuser
                              : RegistrarType.Accused,
                        },
                      })
                        .then((res) => {
                          setNewAdjustmentStatement({} as AdjustmentStatement);
                          void getStatements();
                          setPageError("");
                        })
                        .catch((err) => {
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
          {/* {tableId} */}
          {pageError && <Typography color={Red}>{pageError}</Typography>}
          {adjustmentStatements?.adjustmentStatement_getAdjustmentStatements.result?.items?.map(
            (AdjustmentStatement) => (
              <AdjustmentStatementCard
                AdjustmentStatement={{
                  adjustmentStatementTableId:
                    AdjustmentStatement.adjustmentStatementTableId,
                  amountApprovedByEmployer:
                    AdjustmentStatement.amountApprovedByEmployer,
                  amountPaid: AdjustmentStatement.amountPaid,
                  amountConfirmedByConsultant:
                    AdjustmentStatement.amountConfirmedByConsultant,
                  amountProvidedByContractor:
                    AdjustmentStatement.amountProvidedByContractor,
                  dateApprovedByEmployer:
                    AdjustmentStatement.dateApprovedByEmployer,
                  dateConfirmedByConsultant:
                    AdjustmentStatement.dateConfirmedByConsultant,
                  datePaid: AdjustmentStatement.datePaid,
                  dateProvidedByContractor:
                    AdjustmentStatement.dateProvidedByContractor,
                  filledBy: AdjustmentStatement.filledBy || "ACCUSER",
                  id: AdjustmentStatement.id,
                  operationPeriodEndDate:
                    AdjustmentStatement.operationPeriodEndDate,
                  operationPeriodStartDate:
                    AdjustmentStatement.operationPeriodStartDate,
                  title: AdjustmentStatement.title,
                }}
                refetch={getStatements}
                setEditMode={setEditMode}
                setNewAdjustmentStatement={setNewAdjustmentStatement}
                key={AdjustmentStatement.id}
                isConsultant={props.isConsultant}
                refetchBoolean={refetchBoolean}
                setAddAdjustmentStatementPartModal={
                  setAddAdjustmentStatementPartModal
                }
              />
            )
          )}

          <TableRow>
            <TableCell>
              <FaTypography textAlign={"center"}>صورت حساب قطعی</FaTypography>
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    amountProvidedByContractor: parseInt(e.target.value),
                  })
                }
                value={
                  DefiniteAdjustmentStatementPart.amountProvidedByContractor
                    ? DefiniteAdjustmentStatementPart.amountProvidedByContractor
                    : ""
                }
                fullWidth
                focused={
                  DefiniteAdjustmentStatementPart.amountProvidedByContractor
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
              <DatePicker
                label="تاریخ"
                value={DefiniteAdjustmentStatementPart.dateProvidedByContractor}
                onChange={(date) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    dateProvidedByContractor: date || new Date(),
                  })
                }
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                direction="column"
                date={DefiniteAdjustmentStatementPart.dateProvidedByContractor}
              /> */}
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                direction="column"
                date={DefiniteAdjustmentStatementPart.dateProvidedByContractor}
              /> */}
            </TableCell>
            {!props.isConsultant && (
              <>
                <TableCell>
                  <FaTextField
                    label="مبلغ"
                    onChange={(e) =>
                      setDefiniteAdjustmentStatementPart({
                        ...DefiniteAdjustmentStatementPart,
                        amountConfirmedByConsultant: parseInt(e.target.value),
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
                      DefiniteAdjustmentStatementPart.amountConfirmedByConsultant
                        ? DefiniteAdjustmentStatementPart.amountConfirmedByConsultant
                        : ""
                    }
                    fullWidth
                    focused={
                      DefiniteAdjustmentStatementPart.amountConfirmedByConsultant
                        ? true
                        : false
                    }
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <DatePicker
                    label="تاریخ"
                    onChange={(date) =>
                      setDefiniteAdjustmentStatementPart({
                        ...DefiniteAdjustmentStatementPart,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    value={
                      DefiniteAdjustmentStatementPart.dateConfirmedByConsultant
                    }
                  />
                  {/* <DateButton
                    label="تاریخ"
                    fontSize={"12px"}
                    setDate={(date) =>
                      setDefiniteAdjustmentStatementPart({
                        ...DefiniteAdjustmentStatementPart,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    direction="column"
                    date={
                      DefiniteAdjustmentStatementPart.dateConfirmedByConsultant
                    }
                  /> */}
                  {/* <DateButton
                    label="تاریخ"
                    fontSize={"12px"}
                    setDate={(date) =>
                      setDefiniteAdjustmentStatementPart({
                        ...DefiniteAdjustmentStatementPart,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    direction="column"
                    date={
                      DefiniteAdjustmentStatementPart.dateConfirmedByConsultant
                    }
                  /> */}
                </TableCell>
              </>
            )}

            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    amountApprovedByEmployer: parseInt(e.target.value),
                  })
                }
                value={
                  DefiniteAdjustmentStatementPart.amountApprovedByEmployer
                    ? DefiniteAdjustmentStatementPart.amountApprovedByEmployer
                    : ""
                }
                fullWidth
                focused={
                  DefiniteAdjustmentStatementPart.amountApprovedByEmployer
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
              <DatePicker
                label="تاریخ"
                value={DefiniteAdjustmentStatementPart.dateApprovedByEmployer}
                onChange={(date) => {
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  });
                }}
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                date={DefiniteAdjustmentStatementPart.dateApprovedByEmployer}
              /> */}
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                direction="column"
                date={DefiniteAdjustmentStatementPart.dateApprovedByEmployer}
              /> */}
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    amountPaid: parseInt(e.target.value),
                  })
                }
                value={
                  DefiniteAdjustmentStatementPart.amountPaid
                    ? DefiniteAdjustmentStatementPart.amountPaid
                    : ""
                }
                fullWidth
                focused={
                  DefiniteAdjustmentStatementPart.amountPaid ? true : false
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
              <DatePicker
                label="تاریخ"
                onChange={(date) =>
                  setDefiniteAdjustmentStatementPart({
                    ...DefiniteAdjustmentStatementPart,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                value={DefiniteAdjustmentStatementPart.datePaid}
              />
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
                      void editAdjustmentStatement({
                        variables: {
                          workConditionStatementTableId: tableId && tableId,
                          amountApprovedByEmployer:
                            DefiniteAdjustmentStatementPart.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            DefiniteAdjustmentStatementPart.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            DefiniteAdjustmentStatementPart.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            DefiniteAdjustmentStatementPart.dateConfirmedByConsultant,
                          amountPaid:
                            DefiniteAdjustmentStatementPart.amountPaid,
                          datePaid: DefiniteAdjustmentStatementPart.datePaid,
                          amountProvidedByContractor:
                            DefiniteAdjustmentStatementPart.amountProvidedByContractor,
                          dateProvidedByContractor:
                            DefiniteAdjustmentStatementPart.dateProvidedByContractor,
                          title: "صورت وضعیت قطعی",
                          filledBy:
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newAdjustmentStatement.id,
                        },
                      }).then(() => {
                        void getStatements();
                        setEditMode(false);
                        setDefiniteAdjustmentStatementPart(
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
                    <FaTypography variant="body2" textAlign={"center"}>
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
                          adjustmentStatementTableId: tableId || 0,
                          amountApprovedByEmployer:
                            DefiniteAdjustmentStatementPart.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            DefiniteAdjustmentStatementPart.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            DefiniteAdjustmentStatementPart.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            DefiniteAdjustmentStatementPart.dateConfirmedByConsultant,
                          amountPaid:
                            DefiniteAdjustmentStatementPart.amountPaid,
                          datePaid: DefiniteAdjustmentStatementPart.datePaid,
                          amountProvidedByContractor:
                            DefiniteAdjustmentStatementPart.amountProvidedByContractor,
                          dateProvidedByContractor:
                            DefiniteAdjustmentStatementPart.dateProvidedByContractor,
                          title: "صورت وضعیت قطعی",
                          filledBy:
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.adjustmentStatementTable_getAdjustmentStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? RegistrarType.Accuser
                              : RegistrarType.Accused,
                        },
                      })
                        .then(() => {
                          setDefiniteAdjustmentStatementPart(
                            {} as AdjustmentStatement
                          );
                          void getStatements();
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
            gridTemplateColumns={"1fr"}
            gap={"1rem"}
            width={"100%"}
          >
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr 1fr"}
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
                gridColumn={"span 2"}
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
                  addAdjustmentStatementPartModal.AdjustmentStatementPart
                    .amountPaid
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
                  addAdjustmentStatementPartModal.AdjustmentStatementPart
                    .datePaid
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
                        addAdjustmentStatementPartModal.AdjustmentStatementId ||
                        0,
                      amountApprovedByEmployer:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .amountApprovedByEmployer,
                      amountConfirmedByConsultant:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .amountConfirmedByConsultant,
                      amountPaid:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .amountPaid,
                      amountProvidedByContractor:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .amountProvidedByContractor,
                      dateApprovedByEmployer:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .dateApprovedByEmployer,
                      dateConfirmedByConsultant:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .dateConfirmedByConsultant,
                      datePaid:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .datePaid,
                      dateProvidedByContractor:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .dateProvidedByContractor,
                      operationPeriodEndDate:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .operationPeriodEndDate,
                      operationPeriodStartDate:
                        addAdjustmentStatementPartModal.AdjustmentStatementPart
                          .operationPeriodStartDate,
                      filledBy:
                        data
                          ?.adjustmentStatementTable_getAdjustmentStatementTables
                          ?.result?.items?.[0]?.contract
                          ?.accuserDepartmentUserId == user.id ||
                        data
                          ?.adjustmentStatementTable_getAdjustmentStatementTables
                          ?.result?.items?.[0]?.contract
                          ?.accuserDepartmentUserId == user.parentId
                          ? RegistrarType.Accuser
                          : RegistrarType.Accused,
                    },
                    onCompleted(data, clientOptions) {
                      void getStatements();
                      setRefetchBoolean(!refetchBoolean);
                      void refetch();
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddAdjustmentStatementPartModal({
                        ...addAdjustmentStatementPartModal,
                        AdjustmentStatementPart: {} as AdjustmentStatementPart,
                        open: false,
                      });
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

export default AdjustmentStatementTable;
