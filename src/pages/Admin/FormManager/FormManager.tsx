/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Green, GreenLight, background } from "../../../theme/color";
import useLayoutStore from "../../../Context/LayoutStore";
import FormList from "../../../components/Forms/FormList";
import NewModal from "../../../components/Modals";
import { useMutation } from "@apollo/client";
import {
  CREATE_COMPLAINT_FORM,
  CREATE_COMPLAINT_RESPONSE_FORM,
} from "../../../GraphQL/Form/Mutations";

const FormManager = () => {
  const setPageTitle = useLayoutStore((state) => state.setPageTitle);
  const [addModal, setAddModal] = React.useState({
    open: false,
    title: "",
    description: "",
    type: "",
  });

  const [
    addComplaintForm,
    { data: complaintData, loading: complaintLoading },
  ] = useMutation(CREATE_COMPLAINT_FORM, {
    variables: {
      title: addModal.title,
      description: addModal.description,
    },
    onCompleted(data, clientOptions) {
      console.log(data);
      navigate(
        `addform/${data.complaintForm_addComplaintForm.result.id}/complaint`,
        {
          state: {
            formId: data?.complaintForm_addComplaintForm?.result?.id,
          },
        }
      );
      setAddModal({
        ...addModal,
        open: false,
      });
    },
  });

  const [
    addComplaintResponseForm,
    {
      data: complaintResponseData,
      loading: complaintResponseLoading,
    },
  ] = useMutation(CREATE_COMPLAINT_RESPONSE_FORM, {
    variables: {
      title: addModal.title,
      description: addModal.description,
    },
    onCompleted(data, clientOptions) {
      console.log(data);
      navigate(
        `addform/${data.complaintResponseForm_addComplaintResponseForm.result.id}/response`,
        {
          state: {
            formId:
              data?.complaintResponseForm_addComplaintResponseForm
                ?.result?.id,
          },
        }
      );
      setAddModal({
        ...addModal,
        open: false,
      });
    },
  });

  const navigate = useNavigate();
  return (
    <React.Fragment>
      {/* <div>FormManager</div> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          endIcon={<BsDatabaseAdd />}
          onClick={() => {
            setPageTitle("افزودن فرم جدید");
            setAddModal({
              ...addModal,
              open: true,
            });
            // navigate("addform");
          }}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
        >
          افزودن فرم جدید
        </Button>
      </Box>
      <Box
        display={"grid"}
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          },
          gap: "1rem",
        }}
      >
        <FormList type="complaint" />
        <FormList type="response" />
      </Box>
      <NewModal
        name="فرم جدید"
        backgroundColor={background}
        color={Green}
        onClose={() => {
          setAddModal({
            ...addModal,
            open: false,
          });
        }}
        open={addModal.open}
        isCloseable
        height={"80dvh"}
      >
        <Stack spacing={2} mt={"1rem"} width={"100%"}>
          <TextField
            fullWidth
            label={"نوع"}
            variant={"outlined"}
            autoComplete="firstName"
            value={addModal.type}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            select
            onChange={(e) =>
              setAddModal({ ...addModal, type: e.target.value })
            }
          >
            <MenuItem value={"complaint"}>درخواست داوری</MenuItem>
            <MenuItem value={"response"}>پاسخ به درخواست داوری</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label={"عنوان"}
            variant={"outlined"}
            autoComplete="firstName"
            value={addModal.title}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, title: e.target.value })
            }
          />
          <TextField
            fullWidth
            label={"توضیحات"}
            variant={"outlined"}
            autoComplete="description"
            value={addModal.description}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                description: e.target.value,
              })
            }
            multiline
            minRows={4}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (addModal.type == "complaint") {
                void addComplaintForm();
              } else {
                void addComplaintResponseForm();
              }
            }}
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
              display: "flex",
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
          >
            {complaintLoading || complaintResponseLoading ? (
              <CircularProgress />
            ) : (
              ""
            )}
            ادامه
          </Button>
        </Stack>
      </NewModal>
    </React.Fragment>
  );
};

export default FormManager;
