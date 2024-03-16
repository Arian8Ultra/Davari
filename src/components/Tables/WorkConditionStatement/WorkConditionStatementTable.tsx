/* eslint-disable @typescript-eslint/restrict-plus-operands */
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
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  useCreate_Work_Condition_Statement_TableMutation,
  useGetWorkConditionStatementTableByIdQuery,
  useGetWorkConditionStatementsFullLazyQuery,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import {
  CREATE_WORK_CONDITION_STATEMENT,
  CREATE_WORK_CONDITION_STATEMENT_PART,
  UPDATE_WORK_CONDITION_STATEMENT,
  WorkConditionStatement,
  WorkConditionStatementPart,
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
import FaTextField from "../../FaComponents/FaTextField";
import FaTypography from "../../FaComponents/FaTypography";
import FileBox from "../../FileBox";
import NewModal from "../../Modals";
import WorkConditionStatementCard from "../WorkConditionStatement/WorkConditionStatementCard";

interface Props extends TableContainerProps {
  WorkConditionStatementTableId?: number;
  type?: "ACCUSED" | "ACCUSER";
  isConsultant?: boolean;
}
const WorkConditionStatementTable = (props: Props) => {
  const { contractId } = useParams<{ contractId: string }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [DefiniteWorkConditionStatement, setDefiniteWorkConditionStatement] =
    React.useState<WorkConditionStatement>({} as WorkConditionStatement);
  const [pageError, setPageError] = React.useState<string>();
  const [tableId, setTableId] = React.useState<number>();
  const [
    addWorkConditionStatementPartModal,
    setAddWorkConditionStatementPartModal,
  ] = React.useState<{
    open: boolean;
    WorkConditionStatementPart: WorkConditionStatementPart;
    WorkConditionStatementId?: number;
  }>({
    open: false,
    WorkConditionStatementPart: {} as WorkConditionStatementPart,
  });

  const [newWorkConditionStatement, setNewWorkConditionStatement] =
    React.useState<WorkConditionStatement>({} as WorkConditionStatement);

  const { handleMutation: addWorkConditionStatement } = MutationWrapper(
    CREATE_WORK_CONDITION_STATEMENT,
    "workConditionStatement_addWorkConditionStatement"
  );
  const [addWorkConditionStatementTable] =
    useCreate_Work_Condition_Statement_TableMutation();

  const { handleMutation: editWorkConditionStatement } = MutationWrapper(
    UPDATE_WORK_CONDITION_STATEMENT,
    "workConditionStatement_updateWorkConditionStatement"
  );

  const [getStatements, { data: workStatements, refetch }] =
    useGetWorkConditionStatementsFullLazyQuery();

  const { data } = useGetWorkConditionStatementTableByIdQuery({
    variables: {
      id: (contractId && parseInt(contractId)) || 0,
    },
    onCompleted(data) {
      console.log("OnComplete", data);

      void getStatements({
        variables: {
          filter: {
            workConditionStatementTableId: {
              eq:
                data.workConditionStatementTable_getWorkConditionStatementTables
                  .result?.items?.[0]?.id || null,
            },
            filledBy: {
              eq:
                data.workConditionStatementTable_getWorkConditionStatementTables
                  .result?.items?.[0]?.contract?.accuserDepartmentUserId ==
                user.parentId
                  ? RegistrarType.Accuser
                  : RegistrarType.Accused,
            },
          },
        },
      });
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const { handleMutation: createWorkConditionStatementPart } = MutationWrapper(
    CREATE_WORK_CONDITION_STATEMENT_PART,
    "workConditionStatementPart_addWorkConditionStatementPart"
  );

  React.useEffect(() => {
    const userType =
      data?.workConditionStatementTable_getWorkConditionStatementTables.result
        ?.items?.[0]?.contract?.accuserDepartmentUserId == user.id ||
      data?.workConditionStatementTable_getWorkConditionStatementTables.result
        ?.items?.[0]?.contract?.accuserDepartmentUserId == user.parentId
        ? "ACCUSER"
        : "ACCUSED";
    if (
      data?.workConditionStatementTable_getWorkConditionStatementTables?.result
        ?.items?.length &&
      data?.workConditionStatementTable_getWorkConditionStatementTables?.result
        ?.items?.length > 0
    ) {
      void getStatements({
        variables: {
          filter: {
            and: [
              {
                workConditionStatementTableId: {
                  eq:
                    data
                      ?.workConditionStatementTable_getWorkConditionStatementTables
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
        data?.workConditionStatementTable_getWorkConditionStatementTables
          ?.result?.items?.[0]?.id
      );
    }
  }, [contractId, data, getStatements, refetch, user.id, user.parentId]);

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
                }}
              >
                {props.isConsultant ? (
                  <FaTypography variant="h6" textAlign={"center"}>
                    جدول صورت حساب کارکرد
                  </FaTypography>
                ) : (
                  <FaTypography variant="h6" textAlign={"center"}>
                    جدول صورت وضعیت کارکرد
                  </FaTypography>
                )}
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
              ارائه شده توسط {props.isConsultant ? "مشاور" : "پیمانکار"}
            </TableCell>
            {!props.isConsultant && (
              <TableCell
                sx={{
                  textAlign: "center",
                  borderRight: "1px solid white",
                }}
                colSpan={2}
              >
                تایید شده توسط مشاور
              </TableCell>
            )}
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
            <TableCell></TableCell>
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
            {!props.isConsultant && (
              <TableCell
                sx={{
                  textAlign: "center",
                  borderRight: "1px solid white",
                }}
              >
                مبلغ
              </TableCell>
            )}
            {!props.isConsultant && (
              <TableCell
                sx={{
                  textAlign: "center",
                  borderRight: "1px solid white",
                }}
              >
                تاريخ
              </TableCell>
            )}
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
                //   setNewWorkConditionStatement({
                //     ...newWorkConditionStatement,
                //     title: e.target.value,
                //   })
                // }
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
                  "صورت وضعیت" +
                  " " +
                  (workStatements
                    ?.workConditionStatement_getWorkConditionStatements?.result
                    ?.items?.length || 0 + 1)
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
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    amountProvidedByContractor: parseInt(e.target.value),
                  })
                }
                value={
                  newWorkConditionStatement.amountProvidedByContractor
                    ? newWorkConditionStatement.amountProvidedByContractor
                    : ""
                }
                fullWidth
                focused={
                  newWorkConditionStatement.amountProvidedByContractor
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
                onChange={(date) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                value={
                    newWorkConditionStatement.dateProvidedByContractor
                }
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                direction="column"
                date={newWorkConditionStatement.dateProvidedByContractor}
              /> */}
            </TableCell>
            {!props.isConsultant && (
              <>
                <TableCell>
                  <FaTextField
                    label="مبلغ"
                    onChange={(e) =>
                      setNewWorkConditionStatement({
                        ...newWorkConditionStatement,
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
                      newWorkConditionStatement.amountConfirmedByConsultant
                        ? newWorkConditionStatement.amountConfirmedByConsultant
                        : ""
                    }
                    fullWidth
                    focused={
                      newWorkConditionStatement.amountConfirmedByConsultant
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
                      setNewWorkConditionStatement({
                        ...newWorkConditionStatement,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    value={
                        newWorkConditionStatement.dateConfirmedByConsultant
                    }
                  />
                  {/* <DateButton
                    label="تاریخ"
                    fontSize={"12px"}
                    setDate={(date) =>
                      setNewWorkConditionStatement({
                        ...newWorkConditionStatement,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    direction="column"
                    date={newWorkConditionStatement.dateConfirmedByConsultant}
                  /> */}
                </TableCell>
              </>
            )}

            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    amountApprovedByEmployer: parseInt(e.target.value),
                  })
                }
                value={
                  newWorkConditionStatement.amountApprovedByEmployer
                    ? newWorkConditionStatement.amountApprovedByEmployer
                    : ""
                }
                fullWidth
                focused={
                  newWorkConditionStatement.amountApprovedByEmployer
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
                onChange={(date) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                value={
                  newWorkConditionStatement.dateApprovedByEmployer
                }
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                direction="column"
                date={newWorkConditionStatement.dateApprovedByEmployer}
              /> */}
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    amountPaid: parseInt(e.target.value),
                  })
                }
                value={
                  newWorkConditionStatement.amountPaid
                    ? newWorkConditionStatement.amountPaid
                    : ""
                }
                fullWidth
                focused={newWorkConditionStatement.amountPaid ? true : false}
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
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                value={
                  newWorkConditionStatement.datePaid
                }
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                direction="column"
                date={newWorkConditionStatement.datePaid}
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
                      void editWorkConditionStatement({
                        variables: {
                          workConditionStatementTableId: tableId && tableId,
                          amountApprovedByEmployer:
                            newWorkConditionStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newWorkConditionStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newWorkConditionStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newWorkConditionStatement.dateConfirmedByConsultant,
                          amountPaid: newWorkConditionStatement.amountPaid,
                          datePaid: newWorkConditionStatement.datePaid,
                          amountProvidedByContractor:
                            newWorkConditionStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newWorkConditionStatement.dateProvidedByContractor,
                          title: newWorkConditionStatement.title,
                          filledBy:
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newWorkConditionStatement.id,
                        },
                      }).then(() => {
                        void refetch();
                        setEditMode(false);
                        setNewWorkConditionStatement(
                          {} as WorkConditionStatement
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
                      void addWorkConditionStatement({
                        variables: {
                          workConditionStatementTableId: tableId && tableId,
                          amountApprovedByEmployer:
                            newWorkConditionStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newWorkConditionStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newWorkConditionStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newWorkConditionStatement.dateConfirmedByConsultant,
                          amountPaid: newWorkConditionStatement.amountPaid,
                          datePaid: newWorkConditionStatement.datePaid,
                          amountProvidedByContractor:
                            newWorkConditionStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newWorkConditionStatement.dateProvidedByContractor,
                          title:
                            "صورت وضعیت" +
                            " " +
                            (workStatements
                              ?.workConditionStatement_getWorkConditionStatements
                              ?.result?.items?.length || 0 + 1),
                          filledBy:
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                        },
                      })
                        .then(() => {
                          setNewWorkConditionStatement(
                            {} as WorkConditionStatement
                          );
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
          {workStatements?.workConditionStatement_getWorkConditionStatements.result?.items?.map(
            (WorkConditionStatement) => (
              <WorkConditionStatementCard
                WorkConditionStatement={{
                  amountApprovedByEmployer:
                    WorkConditionStatement.amountApprovedByEmployer,
                  amountConfirmedByConsultant:
                    WorkConditionStatement.amountConfirmedByConsultant,
                  amountPaid: WorkConditionStatement.amountPaid,
                  amountProvidedByContractor:
                    WorkConditionStatement.amountProvidedByContractor,
                  dateApprovedByEmployer:
                    WorkConditionStatement.dateApprovedByEmployer,
                  dateConfirmedByConsultant:
                    WorkConditionStatement.dateConfirmedByConsultant,
                  datePaid: WorkConditionStatement.datePaid,
                  dateProvidedByContractor:
                    WorkConditionStatement.dateProvidedByContractor,
                  filledBy: WorkConditionStatement.filledBy,
                  operationPeriodEndDate:
                    WorkConditionStatement.operationPeriodEndDate,
                  operationPeriodStartDate:
                    WorkConditionStatement.operationPeriodStartDate,
                  title: WorkConditionStatement.title || "",
                  id: WorkConditionStatement.id,
                  workConditionStatementTableId:
                    WorkConditionStatement.workConditionStatementTableId,
                }}
                refetch={refetch}
                setEditMode={setEditMode}
                setNewWorkConditionStatement={setNewWorkConditionStatement}
                key={WorkConditionStatement.id}
                isConsultant={props.isConsultant}
                setAddWorkConditionStatementPartModal={
                  setAddWorkConditionStatementPartModal
                }
              />
            )
          )}
          <TableRow>
            <TableCell>
              <FaTypography textAlign={"center"}>صورت وضعیت قطعی</FaTypography>
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    amountProvidedByContractor: parseInt(e.target.value),
                  })
                }
                value={
                  DefiniteWorkConditionStatement.amountProvidedByContractor
                    ? DefiniteWorkConditionStatement.amountProvidedByContractor
                    : ""
                }
                fullWidth
                focused={
                  DefiniteWorkConditionStatement.amountProvidedByContractor
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
                onChange={(date) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                value={
                    DefiniteWorkConditionStatement.dateProvidedByContractor
                }
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    // @ts-ignore
                    dateProvidedByContractor: date || new Date(),
                  })
                }
                direction="column"
                date={DefiniteWorkConditionStatement.dateProvidedByContractor}
              /> */}
            </TableCell>
            {!props.isConsultant && (
              <>
                <TableCell>
                  <FaTextField
                    label="مبلغ"
                    onChange={(e) =>
                      setDefiniteWorkConditionStatement({
                        ...DefiniteWorkConditionStatement,
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
                      DefiniteWorkConditionStatement.amountConfirmedByConsultant
                        ? DefiniteWorkConditionStatement.amountConfirmedByConsultant
                        : ""
                    }
                    fullWidth
                    focused={
                      DefiniteWorkConditionStatement.amountConfirmedByConsultant
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
                      setDefiniteWorkConditionStatement({
                        ...DefiniteWorkConditionStatement,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    value={
                        DefiniteWorkConditionStatement.dateConfirmedByConsultant
                    }
                  />
                  {/* <DateButton
                    label="تاریخ"
                    fontSize={"12px"}
                    setDate={(date) =>
                      setDefiniteWorkConditionStatement({
                        ...DefiniteWorkConditionStatement,
                        // @ts-ignore
                        dateConfirmedByConsultant: date || new Date(),
                      })
                    }
                    direction="column"
                    date={DefiniteWorkConditionStatement.dateConfirmedByConsultant}
                  /> */}
                </TableCell>
              </>
            )}

            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    amountApprovedByEmployer: parseInt(e.target.value),
                  })
                }
                value={
                  DefiniteWorkConditionStatement.amountApprovedByEmployer
                    ? DefiniteWorkConditionStatement.amountApprovedByEmployer
                    : ""
                }
                fullWidth
                focused={
                  DefiniteWorkConditionStatement.amountApprovedByEmployer
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
                onChange={(date) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                value={
                    DefiniteWorkConditionStatement.dateApprovedByEmployer
                  
                }
              />
              {/* <DateButton
                label="تاریخ"
                fontSize={"12px"}
                setDate={(date) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    // @ts-ignore
                    dateApprovedByEmployer: date || new Date(),
                  })
                }
                direction="column"
                date={DefiniteWorkConditionStatement.dateApprovedByEmployer}
              /> */}
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    amountPaid: parseInt(e.target.value),
                  })
                }
                value={
                  DefiniteWorkConditionStatement.amountPaid
                    ? DefiniteWorkConditionStatement.amountPaid
                    : ""
                }
                fullWidth
                focused={
                  DefiniteWorkConditionStatement.amountPaid ? true : false
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
                  setDefiniteWorkConditionStatement({
                    ...DefiniteWorkConditionStatement,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                value={DefiniteWorkConditionStatement.datePaid }
              />
            </TableCell>
            <TableCell>
              <FileBox  />
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
                      void editWorkConditionStatement({
                        variables: {
                          workConditionStatementTableId: tableId && tableId,
                          amountApprovedByEmployer:
                            DefiniteWorkConditionStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            DefiniteWorkConditionStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            DefiniteWorkConditionStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            DefiniteWorkConditionStatement.dateConfirmedByConsultant,
                          amountPaid: DefiniteWorkConditionStatement.amountPaid,
                          datePaid: DefiniteWorkConditionStatement.datePaid,
                          amountProvidedByContractor:
                            DefiniteWorkConditionStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            DefiniteWorkConditionStatement.dateProvidedByContractor,
                          title: "صورت وضعیت قطعی",
                          filledBy:
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newWorkConditionStatement.id,
                        },
                      }).then(() => {
                        void refetch();
                        setEditMode(false);
                        setNewWorkConditionStatement(
                          {} as WorkConditionStatement
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
                      void addWorkConditionStatement({
                        variables: {
                          workConditionStatementTableId: tableId && tableId,
                          amountApprovedByEmployer:
                            DefiniteWorkConditionStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            DefiniteWorkConditionStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            DefiniteWorkConditionStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            DefiniteWorkConditionStatement.dateConfirmedByConsultant,
                          amountPaid: DefiniteWorkConditionStatement.amountPaid,
                          datePaid: DefiniteWorkConditionStatement.datePaid,
                          amountProvidedByContractor:
                            DefiniteWorkConditionStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            DefiniteWorkConditionStatement.dateProvidedByContractor,
                          title: "صورت وضعیت قطعی",
                          filledBy:
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.id ||
                            data
                              ?.workConditionStatementTable_getWorkConditionStatementTables
                              .result?.items?.[0]?.contract
                              ?.accuserDepartmentUserId == user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                        },
                      })
                        .then(() => {
                          setDefiniteWorkConditionStatement(
                            {} as WorkConditionStatement
                          );
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
        </TableBody>
        <NewModal
          title="افزودن زیرمجموعه"
          open={addWorkConditionStatementPartModal.open}
          onClose={() => {
            setAddWorkConditionStatementPartModal({
              ...addWorkConditionStatementPartModal,
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
            {/* <Box
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
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      amountProvidedByContractor: parseInt(
                        e.target.value
                      ),
                    },
                  })
                }
                value={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart
                    .amountProvidedByContractor
                }
                fullWidth
                type="number"
              />
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      // @ts-ignore
                      dateProvidedByContractor: date || new Date(),
                    },
                  })
                }
                date={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart
                    .dateProvidedByContractor
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
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      amountConfirmedByConsultant: parseInt(
                        e.target.value
                      ),
                    },
                  })
                }
                value={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart
                    .amountConfirmedByConsultant
                }
                fullWidth
                type="number"
              />
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      // @ts-ignore
                      dateConfirmedByConsultant: date || new Date(),
                    },
                  })
                }
                date={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart
                    .dateConfirmedByConsultant
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
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      amountApprovedByEmployer: parseInt(
                        e.target.value
                      ),
                    },
                  })
                }
                value={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart
                    .amountApprovedByEmployer
                }
                fullWidth
                type="number"
              />
              <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      // @ts-ignore
                      dateApprovedByEmployer: date || new Date(),
                    },
                  })
                }
                date={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart.dateApprovedByEmployer
                }
              />
            </Box> */}
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
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      amountPaid: parseInt(e.target.value),
                    },
                  })
                }
                value={
                  addWorkConditionStatementPartModal.WorkConditionStatementPart
                    .amountPaid
                }
                fullWidth
                type="number"
              />
              <DatePicker
                label="تاریخ"
                onChange={(date) =>
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      // @ts-ignore
                      datePaid: date || new Date(),
                    },
                  })
                }
                value={
                  new Date(
                    addWorkConditionStatementPartModal.WorkConditionStatementPart.datePaid
                  ) || ""
                }
              />
              {/* <DateButton
                label="تاریخ پرداخت"
                setDate={(date) =>
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      // @ts-ignore
                      datePaid: date || new Date(),
                    },
                  })
                }
                date={
                  addWorkConditionStatementPartModal.WorkConditionStatementPart
                    .datePaid
                }
              /> */}
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
                  void createWorkConditionStatementPart({
                    variables: {
                      workConditionStatementId:
                        addWorkConditionStatementPartModal.WorkConditionStatementId,
                      amountApprovedByEmployer:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.amountApprovedByEmployer,
                      amountConfirmedByConsultant:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
                          .amountConfirmedByConsultant,
                      amountPaid:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.amountPaid,
                      amountProvidedByContractor:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
                          .amountProvidedByContractor,
                      dateApprovedByEmployer:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.dateApprovedByEmployer,
                      dateConfirmedByConsultant:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.dateConfirmedByConsultant,
                      datePaid:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.datePaid,
                      dateProvidedByContractor:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.dateProvidedByContractor,
                      operationPeriodEndDate:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.operationPeriodEndDate,
                      operationPeriodStartDate:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.operationPeriodStartDate,
                      filledBy:
                        data
                          ?.workConditionStatementTable_getWorkConditionStatementTables
                          .result?.items?.[0]?.contract
                          ?.accuserDepartmentUserId == user.id ||
                        data
                          ?.workConditionStatementTable_getWorkConditionStatementTables
                          .result?.items?.[0]?.contract
                          ?.accuserDepartmentUserId == user.parentId
                          ? "ACCUSER"
                          : "ACCUSED",
                    },
                  })
                    .then((res) => {
                      console.log("RES", res);
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddWorkConditionStatementPartModal({
                        ...addWorkConditionStatementPartModal,
                        WorkConditionStatementPart:
                          {} as WorkConditionStatementPart,
                        open: false,
                      });
                      window.location.reload();
                      void refetch();
                    })
                    .catch(() => {
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

export default WorkConditionStatementTable;
