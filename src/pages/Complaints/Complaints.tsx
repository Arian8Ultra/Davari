/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import ComplaintsList from "../../components/Complaints/ComplaintsList";
import NewModal from "../../components/Modals";
import { Box, Button, Skeleton, TextField } from "@mui/material";
import {
  Green,
  GreenLight,
  Yellow,
  YellowLight,
  background,
  primary,
  secondary,
  secondaryDark,
} from "../../theme/color";
import { AiFillFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../Context/UserStore";
import { GET_CONTRACT } from "../../GraphQL/Contracts/Queries";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { CREATE_COMPLAINT } from "../../GraphQL/Complaints/Mutations";
import FaTextField from "../../components/FaComponents/FaTextField";
import theme from "../../theme/theme";
import { useGetPublicContractsLazyQuery } from "../../../generated-types";
import ContractCard from "../../components/Contract/ContractCard";

const Complaints = () => {
  const [addModal, setAddModal] = useState({
    open: false as boolean,
    contractId: 0 as number,
    search: "" as string,
  });
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  // const [getContract] = useLazyQuery(GET_CONTRACT, {
  //   variables: {
  //     id: parseFloat(addModal.contractId),
  //   },
  // });

  const [addComplaint] = useMutation(CREATE_COMPLAINT, {
    onCompleted(data, clientOptions) {
      console.log(data);
    },
  });

  const [getPublicContract, { data: contracts, loading }] =
    useGetPublicContractsLazyQuery({
      variables: {
        take: 1000,
        filter: {
          or: [
            { fullName: { contains: addModal.search } },
            { contractID: { contains: addModal.search } },
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
                role.roleType === "SENIOR_USER" ||
                role.roleType === "EXPERT"
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
        {user?.userRoles?.some(
          (role) => role.roleType === "SENIOR_USER"
        ) && (
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

        {user?.userRoles?.some(
          (role) => role.roleType === "SENIOR_USER"
        ) && (
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

        {user?.userRoles?.some(
          (role) => role.roleType === "EXPERT"
        ) && (
          <ComplaintsList
            type="assigned"
            departmentId={user.parentId}
            userId={user.id}
          />
        )}
        {user?.userRoles?.some(
          (role) => role.roleType === "SUPER_ADMIN"
        ) && <ComplaintsList type="all" />}
      </Box>

      <NewModal
        name="ثبت درخواست داوری"
        width={{
          xs: "90%",
          sm: "90%",
          md: "80%",
          lg: "60%",
          xl: "50%",
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
                  take: 100,
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
                xs: 'span 1',
                md: 'span 2',
                lg: 'span 3',
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
                xs: 'span 1',
                md: 'span 2',
                lg: 'span 1',
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
                  take: 100,
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
                xs: 'span 1',
                md: 'span 2',
                lg: 'span 4',
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
          {contracts?.publicContract_getPublicContracts.result?.items?.map(
            (item) => (
              <Box
                display={"flex"}
                gridColumn={"span 2"}
                onClick={() => {
                  setAddModal({
                    ...addModal,
                    contractId: item?.id,
                  });
                  navigate(`/complaints/${item?.id}/create/contractPageToFill/`);
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
          )}
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
