import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Green, GreenLight, background } from "../../../theme/color";
import useLayoutStore from "../../../Context/LayoutStore";
import FormList from "../../../components/Forms/FormList";
import NewModal from "../../../components/Modals";

const FormManager = () => {
  const setPageTitle = useLayoutStore((state) => state.setPageTitle);
  const [addModal, setAddModal] = React.useState({
    open: false,
    title: "",
    description: "",
    type: "",
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
          gridTemplateColumns: "repeat(2, 1fr)",
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
        height={'80dvh'}
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
            <MenuItem value={"complaint"}>شکایت</MenuItem>
            <MenuItem value={"response"}>پاسخ به شکایت</MenuItem>
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
              navigate("addform");
              setAddModal({
                ...addModal,
                open: false,
              });
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
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
          >
            ادامه
          </Button>
        </Stack>
      </NewModal>
    </React.Fragment>
  );
};

export default FormManager;
