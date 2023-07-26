import { useState } from "react";
import ComplaintsList from "../../components/Complaints/ComplaintsList";
import NewModal from "../../components/Modals";
import { Box, Button, TextField } from "@mui/material";
import { Green, GreenLight, background } from "../../theme/color";
import { AiFillFileAdd } from "react-icons/ai";

const Complaints = () => {
  const [addModal, setAddModal] = useState({
    open: false,
    projectId: "",
    projectTitle: "",
    projectDescription: "",
    projectManager: "",
    projectStartDate: "",
    projectEndDate: "",
    projectStatus: "",
    projectDepartment: "",
    complaintTitle: "",
    complaintDescription: "",
    complaintCategory: "",
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
          variant='contained'
          endIcon={<AiFillFileAdd />}
          onClick={() => [setAddModal({ ...addModal, open: true })]}
          sx={{
            "borderRadius": 2,
            "backgroundColor": Green,
            "fontWeight": 700,
            "fontStyle": "normal",
            "fontSize": "1rem",
            "boxShadow": "none",
            "&:hover": {
              backgroundColor: GreenLight,
            },
          }}
        >
          افزودن شکایت
        </Button>
      </Box>
      <ComplaintsList />

      <NewModal
        name='ثبت شکایت'
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
            gap: 2,
          }}
        >
          <TextField
            label='عنوان پروژه'
            variant='outlined'
            value={addModal.projectTitle}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectTitle: e.target.value,
              })
            }
          />
          <TextField
            label='توضیحات پروژه'
            variant='outlined'
            value={addModal.projectDescription}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectDescription: e.target.value,
              })
            }
          />
          <TextField
            label='مدیر پروژه'
            variant='outlined'
            value={addModal.projectManager}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectManager: e.target.value,
              })
            }
          />
          <TextField
            label='تاریخ شروع پروژه'
            variant='outlined'
            value={addModal.projectStartDate}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectStartDate: e.target.value,
              })
            }
          />
          <TextField
            label='تاریخ پایان پروژه'
            variant='outlined'
            value={addModal.projectEndDate}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectEndDate: e.target.value,
              })
            }
          />
          <TextField
            label='وضعیت پروژه'
            variant='outlined'
            value={addModal.projectStatus}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectStatus: e.target.value,
              })
            }
          />
          <TextField
            label='دپارتمان'
            variant='outlined'
            value={addModal.projectDepartment}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                projectDepartment: e.target.value,
              })
            }
          />
          <TextField
            label='عنوان شکایت'
            variant='outlined'
            value={addModal.complaintTitle}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                complaintTitle: e.target.value,
              })
            }
          />
          <TextField
            label='توضیحات شکایت'
            variant='outlined'
            value={addModal.complaintDescription}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                complaintDescription: e.target.value,
              })
            }
          />
          <TextField
            label='دسته بندی شکایت'
            variant='outlined'
            value={addModal.complaintCategory}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                complaintCategory: e.target.value,
              })
            }
          />

          <Button
            variant='contained'
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
          >
            ثبت شکایت
          </Button>
        </Box>
      </NewModal>
    </>
  );
};

export default Complaints;
