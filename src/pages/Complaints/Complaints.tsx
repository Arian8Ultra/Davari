/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Skeleton,
  Table,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGetPublicContractsLazyQuery } from "../../../generated-types";
import { useUserStore } from "../../Context/UserStore";
import { CREATE_COMPLAINT } from "../../GraphQL/Complaints/Mutations";
import ComplaintsList from "../../components/Complaints/ComplaintsList";
import ContractCard from "../../components/Contract/ContractCard";
import FaTextField from "../../components/FaComponents/FaTextField";
import NewModal from "../../components/Modals";
import {
  GreenLight,
  background,
  backgroundDark,
  primary,
  secondary,
  secondaryDark,
  secondaryLight,
  secondaryLighter,
} from "../../theme/color";
import theme from "../../theme/theme";
import CTable from "../../components/CustomTable/CTable";

const Complaints = () => {
  const [addModal, setAddModal] = useState({
    open: false as boolean,
    contractId: 0 as number,
    search: "" as string,
    executorSearch: "" as string,
    idSearch: "" as string,
    titleSearch: "" as string,
    fullName: "" as string,
  });
  const [take, setTake] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const [addComplaint] = useMutation(CREATE_COMPLAINT, {
    onCompleted(data, clientOptions) {
      console.log(data);
    },
  });

  const [getPublicContract, { data: contracts, loading }] =
    useGetPublicContractsLazyQuery({
      variables: {
        take: take,
        skip: (page - 1) * take,
        filter: {
          or: [
            { fullName: { contains: addModal.search } },
            { contractID: { contains: addModal.search } },
            { contractSubject: { contains: addModal.titleSearch } },
            { contractID: { contains: addModal.idSearch } },
            { executiveTitle: { contains: addModal.executorSearch } },
            { nationalCode: { contains: addModal.search } },
          ],
        },
      },
    });
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingY={1}
        position={"relative"}
      >
        <Button
          variant="contained"
          endIcon={<AiFillFileAdd />}
          onClick={() => {
            void getPublicContract();
            setAddModal({ ...addModal, open: true });
          }}
          sx={{
            borderRadius: "0.7rem",
            backgroundColor: primary,
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "1.2rem",
            boxShadow: "none",
            position: "fixed",
            top: theme.spacing(10),
            right: 20,
            color: secondaryDark,
            "&:hover": {
              backgroundColor: GreenLight,
              color: secondary,
              boxShadow: "none",
            },
            display: user?.userRoles?.some(
              (role) =>
                role.roleType === "SENIOR_USER" || role.roleType === "EXPERT"
            )
              ? "flex"
              : "none",
          }}
        >
          افزودن درخواست داوری
        </Button>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 1,
        }}
      >
        {user?.userRoles?.some((role) => role.roleType === "SENIOR_USER") && (
          <ComplaintsList
            type="accuser"
            departmentId={
              user.userType === "CONTRACTOR_OR_CONSULTANT" ||
              user.userType === "ORGANIZATION"
                ? user.id
                : user.parentId
            }
          />
        )}

        {user?.userRoles?.some((role) => role.roleType === "SENIOR_USER") && (
          <ComplaintsList
            type="accused"
            departmentId={
              user.userType === "CONTRACTOR_OR_CONSULTANT" ||
              user.userType === "ORGANIZATION"
                ? user.id
                : user.parentId
            }
          />
        )}

        {user?.userRoles?.some((role) => role.roleType === "EXPERT") && (
          <ComplaintsList
            type="assigned"
            departmentId={user.parentId}
            userId={user.id}
          />
        )}
        {user?.userRoles?.some((role) => role.roleType === "SUPER_ADMIN") && (
          <ComplaintsList type="all" />
        )}
      </Box>

      <NewModal
        name="ثبت درخواست داوری"
        width={{
          xs: "100%",
          sm: "100%",
          md: "90%",
          lg: "80%",
          xl: "80%",
        }}
        isCloseable={true}
        open={addModal.open}
        onClose={() => setAddModal({ ...addModal, open: false })}
        backgroundColor={background}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(4, 1fr)",
            },
            justifyContent: "center",
            alignItems: "stretch",
            gap: 2,
          }}
        >
          <FaTextField
            label="جستجو"
            variant="outlined"
            value={addModal.search}
            onChange={(e) => {
              setAddModal({
                ...addModal,
                search: e.target.value,
              });
              void getPublicContract({
                variables: {
                  take: take,
                  skip: (page - 1) * take,
                  filter: {
                    or: [
                      { fullName: { contains: e.target.value } },
                      { contractID: { contains: e.target.value } },
                    ],
                  },
                },
              });
            }}
            sx={{
              gridColumn: {
                xs: "span 1",
                md: "span 2",
                lg: "span 3",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: primary,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: {
                xs: "span 1",
                md: "span 2",
                lg: "span 1",
              },
              // height: "max-content",
              color: secondaryDark,
              "&:hover": {
                backgroundColor: GreenLight,
                boxShadow: "none",
              },
            }}
            onClick={() => {
              void getPublicContract({
                variables: {
                  take: take,
                  skip: (page - 1) * take,
                  filter: {
                    or: [
                      { fullName: { contains: addModal.search } },
                      { contractID: { contains: addModal.search } },
                    ],
                  },
                },
              });
            }}
          >
            جستجو
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: primary,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: {
                xs: "span 1",
                md: "span 2",
                lg: "span 4",
              },
              // height: "max-content",
              color: secondaryDark,
              "&:hover": {
                backgroundColor: GreenLight,
                boxShadow: "none",
              },
            }}
            onClick={() => {
              navigate("create/contractPageToFill/");
            }}
          >
            نبود قرارداد و ادامه
          </Button>
          {loading &&
            [...Array(10)].map((item) => (
              <Skeleton
                variant="rectangular"
                key={item}
                width="100%"
                height={100}
                sx={{
                  borderRadius: "1rem",
                }}
              />
            ))}
          <Box
            sx={{
              gridColumn: {
                xs: "span 2",
                md: "span 2",
                lg: "span 4",
              },
            }}
          >
            <CTable
              colNum={5}
              page={page}
              setPage={setPage}
              totalRecords={
                contracts?.publicContract_getPublicContracts?.result
                  ?.totalCount || 0
              }
              recordsPerPage={take}
              setRecordsPerPage={setTake}
              tableHeader={
                <TableRow
                  sx={{
                    th: {
                      padding: "10px",
                    },
                  }}
                >
                  <th>شماره قرارداد</th>
                  <th>نام طرف قرارداد</th>
                  <th>نام شرکت</th>
                  <th>عنوان اجرا</th>
                  <th>تاریخ انعقاد</th>
                </TableRow>
              }
            >
              {" "}
              <TableRow
                sx={{
                  background: "white", 
                }}
              >
                <td
                  style={{
                    padding: "5px",
                  }}
                >
                  {" "}
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="شماره قرارداد"
                    value={addModal.idSearch}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        idSearch: e.target.value,
                      })
                    }
                  />
                </td>
                <td
                  style={{
                    padding: "5px",
                  }}
                >
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="نام طرف قرارداد"
                    value={addModal.executorSearch}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        executorSearch: e.target.value,
                      })
                    }
                  />
                </td>
                <td
                  style={{
                    padding: "5px",
                  }}
                >
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="نام شرکت"
                    value={addModal.fullName}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        fullName: e.target.value,
                      })
                    }
                  />
                </td>
                <td
                  style={{
                    padding: "5px",
                  }}
                >
                  {" "}
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="عنوان اجرا"
                    value={addModal.titleSearch}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        titleSearch: e.target.value,
                      })
                    }
                  />
                </td>
                <td></td>
                <td></td>
              </TableRow>
              {contracts?.publicContract_getPublicContracts.result?.items?.map(
                (item) => (
                  <TableRow
                    sx={{
                      borderRadius: "1rem",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      // "&:nth-of-type(odd)": {
                      //   backgroundColor: "#f5f5f5",
                      // },
                      // "&:nth-of-type(even)": {
                      //   backgroundColor: "#fff",
                      // },
                      // center every cell
                      "&:hover": {
                        backgroundColor: "rgba(100,150,150,0.1)",
                        cursor: "pointer",
                      },
                      "& td": {
                        padding: "10px",
                        // borderRadius: "1rem",
                      },
                    }}
                    onClick={() => {
                      setAddModal({
                        ...addModal,
                        contractId: item?.id,
                      });
                      navigate(
                        `/complaints/${item?.id}/create/contractPageToFill/`
                      );
                    }}
                  >
                    <td>{item?.contractID}</td>
                    <td>{item?.executiveTitle}</td>
                    <td>{item?.fullName}</td>
                    <td>{item?.contractSubject}</td>
                    <td>
                      {item?.agreeDate &&
                        new Date(item?.agreeDate as string).toLocaleDateString(
                          "fa-IR"
                        )}
                    </td>
                    {/* <td>
                      {item?.createdDate &&
                        new Date(
                          item?.createdDate as string
                        ).toLocaleDateString("fa-IR")}
                    </td> */}
                  </TableRow>
                )
              )}
            </CTable>
          </Box>
          {/* <TableContainer
            sx={{
              gridColumn: {
                xs: "span 2",
                md: "span 2",
                lg: "span 4",
              },
            }}
          >
            <Table
              sx={{
                borderRadius: "1rem",
                overflow: "hidden",
                backgroundColor: backgroundDark,
                border: `1px solid ${secondaryLighter}`,
                "& th": {
                  backgroundColor: backgroundDark,
                  whiteSpace: "nowrap",
                  padding: "0.5rem",
                },
                "& tr": {
                  // add hover effect to each row
                  "& td": {
                    // borderLeft: `1px solid ${secondaryLight}`,
                    // borderRight: `1px solid ${secondaryLighter}`,
                    padding: "0.5rem",
                  },
                  "& td:first-child": {
                    borderLeft: "none",
                  },
                  "& td:last-child": {
                    borderRight: "none",
                  },
                },
                // add bottom border to each row except the last one
                "& tr:not(:last-child)": {
                  borderBottom: `1px solid ${secondary}`,
                },
                "& td": {
                  // backgroundColor: background,
                },
              }}
            >
              <thead>
                <tr>
                  <th>شماره قرارداد</th>
                  <th>نام شرکت</th>
                  <th>عنوان اجرا</th>
                  <th>تاریخ تایید</th>
                  <th>تاریخ ایجاد</th>
                </tr>
              </thead>
              <TableRow sx={{ backgroundColor: background }}>
                <td>
                  {" "}
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    value={addModal.idSearch}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        idSearch: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    value={addModal.executorSearch}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        executorSearch: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <TextField
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    value={addModal.titleSearch}
                    onChange={(e) =>
                      setAddModal({
                        ...addModal,
                        titleSearch: e.target.value,
                      })
                    }
                  />
                </td>
                <td></td>
                <td></td>
              </TableRow>
              {contracts?.publicContract_getPublicContracts.result?.items?.map(
                (item) => (
                  <TableRow
                    sx={{
                      backgroundColor: background,
                      "&:hover": {
                        backgroundColor: "rgba(100,150,150,0.1)",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setAddModal({
                        ...addModal,
                        contractId: item?.id,
                      });
                      navigate(
                        `/complaints/${item?.id}/create/contractPageToFill/`
                      );
                    }}
                  >
                    <td>{item?.contractID}</td>
                    <td>{item?.executiveTitle}</td>
                    <td>{item?.contractSubject}</td>
                    <td>
                      {item?.agreeDate &&
                        new Date(item?.agreeDate as string).toLocaleDateString(
                          "fa-IR"
                        )}
                    </td>
                    <td>
                      {item?.createdDate &&
                        new Date(
                          item?.createdDate as string
                        ).toLocaleDateString("fa-IR")}
                    </td>
                  </TableRow>
                )
              )}
            </Table>
          </TableContainer> */}
          {/* {contracts?.publicContract_getPublicContracts.result?.items?.map(
            (item) => (
              <Box
                display={"flex"}
                gridColumn={"span 2"}
                onClick={() => {
                  setAddModal({
                    ...addModal,
                    contractId: item?.id,
                  });
                  navigate(
                    `/complaints/${item?.id}/create/contractPageToFill/`
                  );
                }}
              >
                <ContractCard
                  type="small"
                  key={item?.id}
                  contractID={item?.contractID}
                  fullName={item?.contractSubject}
                  executiveTitle={item?.executiveTitle}
                  id={item?.id}
                  agreeDate={item?.agreeDate}
                  createdDate={item?.createdDate}
                  isDeleted={item?.isDeleted}
                />
              </Box>
            )
          )} */}
          {/* <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: Green,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
              height: "max-content",
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
                boxShadow: "none",
              },
            }}
            onClick={() => {
              void getContract({
                onCompleted(data: {
                  contract_getContract: {
                    result: string;
                    status: {
                      code: number;
                      value: string;
                    };
                  };
                }) {
                  console.log(data);

                  void addComplaint({
                    variables: {
                      contractId: parseInt(addModal.contractId),
                      userId: user.id,
                    },
                    onCompleted(data) {
                      console.log(data);

                      if (
                        data.complaint_addComplaint.status.code === 1
                      ) {
                        setAddModal({
                          ...addModal,
                          open: false,
                        });
                        navigate(
                          `/complaints/${addModal.contractId}/createContractPage/`
                        );
                      } else {
                        alert("قراردادی با این شماره وجود ندارد");
                      }
                    },
                    onError(error) {
                      console.error(error);
                    },
                  });
                },
                onError(error) {
                  console.error(error);
                },
              });
            }}
          >
            ادامه
          </Button> */}
        </Box>
      </NewModal>
    </>
  );
};

export default Complaints;
