/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import ComplaintsList from "../../components/Complaints/ComplaintsList";
import NewModal from "../../components/Modals";
import { Box, Button, TextField } from "@mui/material";
import {
  Green,
  GreenLight,
  Yellow,
  YellowLight,
  background,
} from "../../theme/color";
import { AiFillFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../Context/UserStore";
import { GET_CONTRACT } from "../../GraphQL/Contracts/Queries";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { CREATE_COMPLAINT } from "../../GraphQL/Complaints/Mutations";
import FaTextField from "../../components/FaComponents/FaTextField";
import theme from "../../theme/theme";

const Complaints = () => {
  const [addModal, setAddModal] = useState({
    open: false as boolean,
    contractId: "" as string,
  });
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const [getContract] = useLazyQuery(GET_CONTRACT, {
    variables: {
      id: parseFloat(addModal.contractId),
    },
  });

  const [addComplaint] = useMutation(CREATE_COMPLAINT, {
    onCompleted(data, clientOptions) {
      console.log(data);
    },
  });
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingY={1}
        position={'relative'}
      >
        <Button
          variant="contained"
          endIcon={<AiFillFileAdd />}
          onClick={() => [setAddModal({ ...addModal, open: true })]}
          sx={{
            borderRadius: 5,
            backgroundColor: Green,
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "1.2rem",
            boxShadow: "none",
            position: "fixed",
            top: theme.spacing(10),
            right: 20,
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
            display: user?.userRoles?.some(
              (role) => role.roleType === "SENIOR_USER"
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
            departmentId={user.id}
          />
        )}

        {user?.userRoles?.some(
          (role) => role.roleType === "SENIOR_USER"
        ) && (
          <ComplaintsList
            type="accused"
            departmentId={user.id}
          />
        )}

        {user?.userRoles?.some(
          (role) => role.roleType === "EXPERT"
        ) && (
          <ComplaintsList
            type="assigned"
            departmentId={user.id}
            userId={user.id}
          />
        )}
      </Box>

      <NewModal
        name="ثبت درخواست داوری"
        width={{
          xs: "90%",
          sm: "60%",
          md: "40%",
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
              lg: "repeat(2, 1fr)",
            },
            justifyContent: "center",
            alignItems: "stretch",
            gap: 2,
          }}
        >
          <FaTextField
            label="شماره قرارداد"
            variant="outlined"
            value={addModal.contractId}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                contractId: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: Yellow,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              // height: "max-content",
              color: "black",
              "&:hover": {
                backgroundColor: YellowLight,
              },
            }}
            onClick={() => {
              navigate("createContractPage");
            }}
          >
            نداشتن کد قرارداد و ادامه
          </Button>
          <Button
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
                          `/complaints/${addModal.contractId}/addComplaint/`
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
          </Button>
        </Box>
      </NewModal>
    </>
  );
};

export default Complaints;
