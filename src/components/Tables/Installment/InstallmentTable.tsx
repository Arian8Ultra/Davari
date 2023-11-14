/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
import { useParams } from "react-router-dom";
import {
  Red,
  RedLight,
  background,
  primary,
  primaryLight,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import {
  CREATE_INSTALLMENT,
  CREATE_INSTALLMENT_PART,
  CREATE_INSTALLMENT_TABLE,
  DELETE_INSTALLMENT,
  Installment,
  InstallmentPart,
  UPDATE_INSTALLMENT,
} from "../../../GraphQL/Tables/Mutations";
import FaTypography from "../../FaComponents/FaTypography";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import FaTextField from "../../FaComponents/FaTextField";
import DateButton from "../../DateButton";
import { BsPlusCircle } from "react-icons/bs";
import { QueryWrapper, errors } from "../../../GraphQL/QueryWrapper";
import { GET_INSTALLMENT_TABLE_BY_CONTRACT_ID } from "../../../GraphQL/Tables/Queries";
import {
  Add,
  CancelOutlined,
  Edit,
  EditOutlined,
} from "@mui/icons-material";
import { Errors } from "../../../GraphQL/Errors";
import { useUserStore } from "../../../Context/UserStore";
import AdjustmentStatementTable from "./InstallmentCard";
import { GET_CONTRACT } from "../../../GraphQL/Contracts/Queries";
import NewModal from "../../Modals";

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

  const {
    handleMutation: addInstallment,
    loading: loadingAddInstallment,
    error: errorAddInstallment,
  } = MutationWrapper(
    CREATE_INSTALLMENT,
    "installment_addInstallment"
  );
  const {
    handleMutation: addInstallmentTable,
    loading: loadingAddInstallmentTable,
    error: errorAddInstallmentTable,
  } = MutationWrapper(
    CREATE_INSTALLMENT_TABLE,
    "installmentTable_addInstallmentTable"
  );

  const {
    handleMutation: deleteInstallment,
    loading: loadingDeleteInstallment,
    error: errorDeleteInstallment,
  } = MutationWrapper(
    DELETE_INSTALLMENT,
    "installment_deleteInstallment"
  );

  const {
    handleMutation: editInstallment,
    loading: loadingEditInstallment,
    error: errorEditInstallment,
  } = MutationWrapper(
    UPDATE_INSTALLMENT,
    "installment_updateInstallment"
  );

  const { data, loading, error, refetch } = QueryWrapper(
    GET_INSTALLMENT_TABLE_BY_CONTRACT_ID,
    "installmentTable_getInstallmentTables",
    {
      id: contractId && parseInt(contractId),
    },
    {
      onCompleted(data) {
        console.log("GET_INSTALLMENT_TABLE_BY_CONTRACT_ID", data);
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
    handleMutation: createInstallmentPart,
    loading: loadingCreateInstallmentPart,
    error: errorCreateInstallmentPart,
  } = MutationWrapper(
    CREATE_INSTALLMENT_PART,
    "installmentPart_addInstallmentPart"
  );

  React.useEffect(() => {
    console.log("GET_INSTALLMENT_TABLE_BY_CONTRACT_ID",data);
    const userType = data?.items[0]?.accuserDepartmentUserId ==
    user.parentId
    ? "ACCUSER"
    : "ACCUSED"
    console.warn("userType",userType);

    if (data?.items?.length > 0 ) {
      console.log("GET_INSTALLMENT_TABLE_BY_CONTRACT_ID", data);
      const userType = data?.items[0]?.accuserDepartmentUserId ==
      user.parentId
      ? "ACCUSER"
      : "ACCUSED"
      console.warn("userType",userType);
      
      
      setInstallments(data?.items[0]?.installments.filter((installment:Installment)=> installment.filledBy == userType ));
      // setNewInstallment({
      //   ...newInstallment,
      //   installmentTableId: data?.items[0]?.id,
      // data?.items[0]?.accuserDepartmentUserId ==
      //                         user.id ||
      //                       data?.items[0]?.accuserDepartmentUserId ==
      //                         user.parentId
      //                         ? "ACCUSER"
      //                         : "ACCUSED"
      // })

      setTableId(data?.items[0]?.id);
    } else {
      // console.log("else",data?.items?.length);
      if (data instanceof Error) {
        console.log("adding");
        void addInstallmentTable({
          variables: {
            contractId: contractId && parseInt(contractId),
            userId: user.id,
          },
          options: {
            onCompleted(data, clientOptions) {
              console.log("addInstallmentTable", data);
              setTableId(data?.id);
              void refetch();
            },
          },
        });
      } else {
        if (data?.items?.length == 0) {
          console.log("adding");
          void addInstallmentTable({
            variables: {
              contractId: contractId && parseInt(contractId),
              userId: user.id,
            },
            options: {
              onCompleted(data, clientOptions) {
                console.log("addInstallmentTable", data);
                setTableId(data?.id);
                void refetch();
              },
            },
          });
        }
      }

      // void addInstallmentTable({
      //   variables: {
      //     contractId: contractId && parseInt(contractId),
      //     userId: user.id,
      //   },
      //   options: {
      //     onCompleted(data, clientOptions) {
      //       console.log("addInstallmentTable", data);
      //       void refetch();
      //     },
      //   },
      // });
    }
  }, [addInstallmentTable, contractId, data, refetch, user.id]);

  const handleEmptyFields = () => {
    if (!newInstallment.title) {
      setPageError("عنوان را وارد کنید");
      return true;
    }
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
        my:'1rem',
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
                borderRight:"1px solid white"
              }}
            >
              عنوان
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight:"1px solid white"
              }}
            >
              مبلغ(ریال)
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                borderRight:"1px solid white"
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
                onChange={(e) =>
                  setNewInstallment({
                    ...newInstallment,
                    title: e.target.value,
                  })
                }
                value={newInstallment.title ? newInstallment.title : ''}
                focused={newInstallment.title ? true : false}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <FaTextField
                label="مبلغ"
                onChange={(e) =>
                  setNewInstallment({
                    ...newInstallment,
                    amount: parseInt(e.target.value),
                  })
                }
                value={newInstallment.amount ? newInstallment.amount : ''}
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
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.id ||
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                          id: newInstallment.id,
                        },
                      }).then((res) => {
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
                    onClick={() => {
                      if(handleEmptyFields()) return;
                      void addInstallment({
                        variables: {
                          installmentTableId: tableId && tableId,
                          amount: newInstallment.amount,
                          date: newInstallment.date,
                          title: newInstallment.title,
                          registrarType:
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.id ||
                            data?.items[0]?.accuserDepartmentUserId ==
                              user.parentId
                              ? "ACCUSER"
                              : "ACCUSED",
                        },
                      })
                        .then((res) => {
                          setNewInstallment({} as Installment);
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
          {pageError && <Typography color={Red}>{pageError}</Typography>}
          {installments &&
            installments.length > 0 &&
            installments.map((installment) => (
              <AdjustmentStatementTable
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
              onChange={(e) =>
                setAddInstallmentPartModal({
                  ...addInstallmentPartModal,
                  installmentPart: {
                    ...addInstallmentPartModal.installmentPart,
                    amount: parseInt(e.target.value),
                  },
                })
              }
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
                    .then((res) => {
                      alert("زیرمجموعه با موفقیت افزوده شد");
                      setAddInstallmentPartModal({
                        ...addInstallmentPartModal,
                        installmentPart: {} as InstallmentPart,
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

export default InstallmentTable;
