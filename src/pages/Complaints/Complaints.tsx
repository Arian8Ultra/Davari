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
import { useLazyQuery, useQuery } from "@apollo/client";

const Complaints = () => {
  const [addModal, setAddModal] = useState({
    open: false,
    contractId: 0,
  });
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const [getContract] = useLazyQuery(GET_CONTRACT, {
    variables: {
      id: addModal.contractId,
    },
  });
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingY={1}
      >
        <Button
          variant="contained"
          endIcon={<AiFillFileAdd />}
          onClick={() => [setAddModal({ ...addModal, open: true })]}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: GreenLight,
            },
          }}
        >
          افزودن شکایت
        </Button>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
        }}
      >
        <ComplaintsList
          type="accuser"
          departmentId={user.departmentId}
        />
        <ComplaintsList
          type="accused"
          departmentId={user.departmentId}
        />
      </Box>

      <NewModal
        name="ثبت شکایت"
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
          <TextField
            label="شماره قرارداد"
            variant="outlined"
            value={addModal.contractId}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                contractId: parseInt(e.target.value),
              })
            }
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: Yellow,
              fontWeight: 700,
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
              navigate("addContract");
            }}
          >
            نداشتن کد قرارداد و ادامه
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: Green,
              fontWeight: 700,
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

                  if (data.contract_getContract.status.code == 1) {
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
