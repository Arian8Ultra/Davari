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
  CREATE_WORK_CONDITION_STATEMENT,
  CREATE_WORK_CONDITION_STATEMENT_PART,
  CREATE_WORK_CONDITION_STATEMENT_TABLE,
  UPDATE_WORK_CONDITION_STATEMENT,
  WorkConditionStatement,
  WorkConditionStatementPart
} from "../../../GraphQL/Tables/Mutations";
import { GET_WORK_CONDITION_STATEMENT_TABLE_BY_CONTRACT_ID } from "../../../GraphQL/Tables/Queries";
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
import WorkConditionStatementCard from "../WorkConditionStatement/WorkConditionStatementCard";

interface Props extends TableContainerProps {
  WorkConditionStatementTableId?: number;
  type?: "ACCUSED" | "ACCUSER";
}
const WorkConditionStatementTable = (props: Props) => {
  const { contractId } = useParams<{ contractId: string }>();
  const user = useUserStore((state) => state.user);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [WorkConditionStatement, setWorkConditionStatements] =
    React.useState<WorkConditionStatement[]>([
      // {
      //   amount: 100000,
      //   filledBy: "ACCUSED",
      //   id: 1,
      //   date: new Date(),
      //   title: "قسط اول",
      //   WorkConditionStatementTableId: 1,
      // },
    ]);
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

  const {
    handleMutation: addWorkConditionStatement,
  } = MutationWrapper(
    CREATE_WORK_CONDITION_STATEMENT,
    "workConditionStatement_addWorkConditionStatement"
  );
  const {
    handleMutation: addWorkConditionStatementTable,
  } = MutationWrapper(
    CREATE_WORK_CONDITION_STATEMENT_TABLE,
    "workConditionStatementTable_addWorkConditionStatementTable"
  );

  const {
    handleMutation: editWorkConditionStatement,
  } = MutationWrapper(
    UPDATE_WORK_CONDITION_STATEMENT,
    "workConditionStatement_updateWorkConditionStatement"
  );

  const { data, loading, refetch } = QueryWrapper(
    GET_WORK_CONDITION_STATEMENT_TABLE_BY_CONTRACT_ID,
    "workConditionStatementTable_getWorkConditionStatementTables",
    {
      id: contractId && parseInt(contractId),
    },
    {
      onCompleted(data) {
        console.log("OnComplete", data);
        setWorkConditionStatements(data.items[0].workConditionStatements);
      },
      onError(error) {
        console.log("error", error);
      },
    }
  );


  const {
    handleMutation: createWorkConditionStatementPart,
  } = MutationWrapper(
    CREATE_WORK_CONDITION_STATEMENT_PART,
    "workConditionStatementPart_addWorkConditionStatementPart"
  );

  React.useEffect(() => {
    console.log("GET_WorkConditionStatement_TABLE_BY_CONTRACT_ID", data);
    const userType = data?.items[0]?.accuserDepartmentUserId ==
    user.parentId
    ? "ACCUSER"
    : "ACCUSED"
    console.warn("userType",userType);

    if (data?.items?.length >0) {
      console.log("TestNew", data);
      setWorkConditionStatements(data?.items[0]?.workConditionStatements.filter((workConditionStatement:WorkConditionStatement)=> workConditionStatement.filledBy == userType));

      setTableId(data?.items[0]?.id);
    } else {
      console.log("else",data);
      if (data instanceof Error) {
        console.log("adding");
        void addWorkConditionStatementTable({
          variables: {
            contractId: contractId && parseInt(contractId),
            userId: user.id,
          },
          options: {
            onCompleted(data) {
              console.log("addWorkConditionStatementTable", data);
              setTableId(data?.id);
              void refetch();
            },
          },
        });
      } else {
        if (data?.items?.length == 0 || (!data && !loading)) {
          console.log("adding");
          void addWorkConditionStatementTable({
            variables: {
              contractId: contractId && parseInt(contractId),
              userId: user.id,
            },
            options: {
              onCompleted(data) {
                console.log("addWorkConditionStatementTable", data);
                setTableId(data?.id);
                void refetch();
              },
            },
          });
        }
      }
    }
  }, [data]);
  //   if (data?.items?.length > 0 && loading == false) {
  //     console.log("GET_WorkConditionStatement_TABLE_BY_CONTRACT_ID", data);
  //     setWorkConditionStatements(data?.items[0]?.WorkConditionStatements);
  //     // setNewWorkConditionStatement({
  //     //   ...newWorkConditionStatement,
  //     //   WorkConditionStatementTableId: data?.items[0]?.id,
  //     // })

  //     setTableId(data?.items[0]?.id);
  //   } else {
  //     console.log("GET_WorkConditionStatement_TABLE_BY_CONTRACT_ID", data);

  //     if (data instanceof Error) {
  //       void addWorkConditionStatementTable({
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
  //             console.log("addWorkConditionStatementTable", data);
  //             void refetch();
  //           },
  //         },
  //       });
  //     } else {
  //       if(!data) {
  //         void addWorkConditionStatementTable({
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
  //               console.log("addWorkConditionStatementTable", data);
  //               void refetch();
  //             },
  //           },
  //         });
  //       }
  //       if (data?.items?.length > 0) {
  //         void addWorkConditionStatementTable({
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
  //               console.log("addWorkConditionStatementTable", data);
  //               void refetch();
  //             },
  //           },
  //         });
  //       }
  //     }

  //     // void addWorkConditionStatementTable({
  //     //   variables: {
  //     //     contractId: contractId && parseInt(contractId),
  //     //     userId: user.id,
  //     //   },
  //     //   options: {
  //     //     onCompleted(data, clientOptions) {
  //     //       console.log("addWorkConditionStatementTable", data);
  //     //       void refetch();
  //     //     },
  //     //   },
  //     // });
  //   }
  // }, [data]);

  // const handleEmptyFields = () => {
  //   if (!newWorkConditionStatement.title) {
  //     setPageError("عنوان را وارد کنید");
  //     return true;
  //   }
  //   if (!newWorkConditionStatement.amountProvidedByContractor) {
  //     setPageError("مبلغ ارائه شده توسط پیمانکار را وارد کنید");
  //     return true;
  //   }
  //   if (!newWorkConditionStatement.dateProvidedByContractor) {
  //     setPageError("تاریخ ارائه شده توسط پیمانکار را وارد کنید");
  //     return true;
  //   }
  //   if (!newWorkConditionStatement.amountConfirmedByConsultant) {
  //     setPageError("مبلغ تایید شده توسط مشاور را وارد کنید");
  //     return true;
  //   }
  //   if (!newWorkConditionStatement.dateConfirmedByConsultant) {
  //     setPageError("تاریخ تایید شده توسط مشاور را وارد کنید");
  //     return true;
  //   }
  //   if (!newWorkConditionStatement.amountApprovedByEmployer) {
  //     setPageError("مبلغ تایید شده توسط کارفرما را وارد کنید");
  //     return true;
  //   }
  //   if (!newWorkConditionStatement.dateApprovedByEmployer) {
  //     setPageError("تاریخ تایید شده توسط کارفرما را وارد کنید");
  //     return true;
  //   }

  //   return false;
  // };

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
                  جدول صورت وضعیت کار
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
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
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
                  newWorkConditionStatement.title
                    ? newWorkConditionStatement.title
                    : ""
                }
                focused={newWorkConditionStatement.title ? true : false}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    amountProvidedByContractor: parseInt(
                      e.target.value
                    ),
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
              <DateButton
                label="تاریخ پرداخت"
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
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
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
              <DateButton
                label="تاریخ پرداخت"
                fontSize={"12px"}
                setDate={(date) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    dateConfirmedByConsultant: date || new Date(),
                  })
                }
                direction="column"
                date={
                  newWorkConditionStatement.dateConfirmedByConsultant
                }
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    amountApprovedByEmployer: parseInt(
                      e.target.value
                    ),
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
              <DateButton
                label="تاریخ پرداخت"
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
              />
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
                focused={
                  newWorkConditionStatement.amountPaid ? true : false
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
                  setNewWorkConditionStatement({
                    ...newWorkConditionStatement,
                    // @ts-ignore
                    datePaid: date || new Date(),
                  })
                }
                direction="column"
                date={newWorkConditionStatement.datePaid}
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
                      void editWorkConditionStatement({
                        variables: {
                          workConditionStatementTableId:
                            tableId && tableId,
                          amountApprovedByEmployer:
                            newWorkConditionStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newWorkConditionStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newWorkConditionStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newWorkConditionStatement.dateConfirmedByConsultant,
                          amountPaid:
                            newWorkConditionStatement.amountPaid,
                          datePaid: newWorkConditionStatement.datePaid,
                          amountProvidedByContractor:
                            newWorkConditionStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newWorkConditionStatement.dateProvidedByContractor,
                          title: newWorkConditionStatement.title,
                          filledBy:
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.id ||
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.parentId
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
                      void addWorkConditionStatement({
                        variables: {
                          workConditionStatementTableId:
                            tableId && tableId,
                          amountApprovedByEmployer:
                            newWorkConditionStatement.amountApprovedByEmployer,
                          dateApprovedByEmployer:
                            newWorkConditionStatement.dateApprovedByEmployer,
                          amountConfirmedByConsultant:
                            newWorkConditionStatement.amountConfirmedByConsultant,
                          dateConfirmedByConsultant:
                            newWorkConditionStatement.dateConfirmedByConsultant,
                          amountPaid:
                            newWorkConditionStatement.amountPaid,
                          datePaid: newWorkConditionStatement.datePaid,
                          amountProvidedByContractor:
                            newWorkConditionStatement.amountProvidedByContractor,
                          dateProvidedByContractor:
                            newWorkConditionStatement.dateProvidedByContractor,
                          title: newWorkConditionStatement.title,
                          filledBy:
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.id ||
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.parentId
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
          {WorkConditionStatement &&
            WorkConditionStatement.length > 0 &&
            WorkConditionStatement.map((WorkConditionStatement) => (
              <WorkConditionStatementCard
                WorkConditionStatement={WorkConditionStatement}
                refetch={refetch}
                setEditMode={setEditMode}
                setNewWorkConditionStatement={setNewWorkConditionStatement}
                key={WorkConditionStatement.id}
                setAddWorkConditionStatementPartModal={
                  setAddWorkConditionStatementPartModal
                }
              />
            ))}
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
                    .WorkConditionStatementPart.dateProvidedByContractor
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
                    .WorkConditionStatementPart.dateConfirmedByConsultant
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
                    .WorkConditionStatementPart.amountApprovedByEmployer
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
                  setAddWorkConditionStatementPartModal({
                    ...addWorkConditionStatementPartModal,
                    WorkConditionStatementPart: {
                      ...addWorkConditionStatementPartModal.WorkConditionStatementPart,
                      amountPaid: parseInt(e.target.value),
                    },
                  })
                }
                value={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart.amountPaid
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
                      datePaid: date || new Date(),
                    },
                  })
                }
                date={
                  addWorkConditionStatementPartModal
                    .WorkConditionStatementPart.datePaid
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
                  void createWorkConditionStatementPart({
                    variables: {
                      workConditionStatementId:
                        addWorkConditionStatementPartModal.WorkConditionStatementId,
                      amountApprovedByEmployer:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
                          .amountApprovedByEmployer,
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
                          .WorkConditionStatementPart
                          .dateApprovedByEmployer,
                      dateConfirmedByConsultant:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
                          .dateConfirmedByConsultant,
                      datePaid:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart.datePaid,
                      dateProvidedByContractor:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
                          .dateProvidedByContractor,
                      operationPeriodEndDate:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
                          .operationPeriodEndDate,
                      operationPeriodStartDate:
                        addWorkConditionStatementPartModal
                          .WorkConditionStatementPart
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
                      console.log("RES",res);
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddWorkConditionStatementPartModal({
                        ...addWorkConditionStatementPartModal,
                        WorkConditionStatementPart:
                          {} as WorkConditionStatementPart,
                        open: false,
                      });
                      window.location.reload()
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
