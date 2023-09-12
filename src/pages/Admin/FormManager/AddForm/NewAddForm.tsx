/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { VscAdd } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { CREATE_FORM_TITLE, DELETE_FORM_TITLE } from "../../../../GraphQL/Form/Titles/Mutations";
import BackButton from "../../../../components/BackButton";
import TitleWithGrid from "../../../../components/Forms/Title/TitleWithGrid";
import NewModal from "../../../../components/Modals";
import {
  Green,
  GreenLight,
  background,
  primary,
} from "../../../../theme/color";
import { GET_COMPLAINT_FORM } from "../../../../GraphQL/Form/Queries";

const NewAddForm = () => {
  const { formId, fromType } = useParams<{
    formId: string;
    fromType: string;
  }>();

  console.log(formId, fromType);
  const [table, setTable] = React.useState([
    {
      id: 0,
      title: "",
      row: 0,
      content: "",
    },
  ]);

  const [lastRow, setLastRow] = React.useState(1);
  const [addTitleModal, setAddTitleModal] = React.useState({
    open: false,
    content: "",
    id: 1,
    row: 0,
  });

  const [addTitle] = useMutation(CREATE_FORM_TITLE, {
    variables: {
      content: addTitleModal.content,
      complaintFormId:
        fromType === "complaint" ? formId && parseInt(formId) : null,
      complaintResponseFormId:
        fromType === "response" ? formId && parseInt(formId) : null,
      row: addTitleModal.row,
    },
  });

  const [deleteTitle] = useMutation(DELETE_FORM_TITLE)
  const {data:complainFormOldData}= useQuery(GET_COMPLAINT_FORM,{
    variables:{
      id:formId && parseInt(formId)
    },onCompleted(data) {
      console.log('complainFormOldData :', data);
      
      if(fromType==="complaint"){
        setTable(data.complaintForm_getComplaintForm.result.formTitles)
      }
    },
  })

  const handleDeleteTitle = (id: number) => {
    void deleteTitle({
      variables: {
        id: id,
      },
      onCompleted(data) {
        console.log(data);
        setTable(table.filter((item) => item.id !== id));
        lastRow > 1 && setLastRow(lastRow - 1);
        console.log(table);
      },
    });

  };

  return (
    <React.Fragment>
      <NewModal
        name="افزودن تیتر جدید"
        open={addTitleModal.open}
        onClose={() => {
          setAddTitleModal({ ...addTitleModal, open: false });
        }}
        background={background}
        isCloseable
        color={primary}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box sx={{ gridColumn: "1/span 2" }}>
            <TextField
              fullWidth
              label="عنوان"
              variant="outlined"
              value={addTitleModal.content}
              onChange={(e) => {
                setAddTitleModal({
                  ...addTitleModal,
                  content: e.target.value,
                });
              }}
            />
          </Box>

          <Button
            sx={{
              gridColumn: "2/span 1",
              backgroundColor: Green,
              color: "white",
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
            onClick={() => {
              if (table[0]?.id === 0) {
                void addTitle({
                  onCompleted(data) {
                    console.log(data);
                    setTable([
                      {
                        id: data.formTitle_addFormTitle.result.id                        ,
                        title: addTitleModal.content,
                        row: addTitleModal.row,
                        content: addTitleModal.content,
                      },
                    ]);
                  },
                });
              }else{
                void addTitle({
                  onCompleted(data) {
                    console.log(data);
                    setTable(
                      [...table,
                      {
                        id: data.formTitle_addFormTitle.result.id                        ,
                        title: addTitleModal.content,
                        row: addTitleModal.row,
                        content: addTitleModal.content,
                      },
                    ]);
                  },
                });
              }
              setAddTitleModal({ ...addTitleModal, open: false });
            }}
          >
            افزودن
          </Button>
        </Box>
      </NewModal>
      <BackButton to="/admin/formanager" />
      {/* {JSON.stringify(table)} */}
      <div className="ruler">
        {[...Array(12)].map((_item, index) => {
          return (
            <div
              key={index}
              className="ruler_item"
              style={{ gridColumn: index + 1 }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <div className="main_grid">
        {table.map((item, index) => {
          if (table[0].id === 0) return null;
          return (
            <TitleWithGrid
              key={index}
              id={item.id}
              title={item.content}
              row={item.row}
              onDelete={handleDeleteTitle}
            />
              
          );
        })}
        <IconButton
          sx={{
            gridRow: lastRow + 1,
            gridColumn: `0/span 1`,
            height: "max-content",
            width: "max-content",
            padding: "1rem",
            color: "white",
            // aspectRatio: "1/1",
            backgroundColor: Green,
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
          onClick={() => {
            setAddTitleModal({
              ...addTitleModal,
              open: true,
              row: lastRow,
            });
            setLastRow(lastRow + 1);
          }}
        >
          <VscAdd />
        </IconButton>
      </div>
      
    </React.Fragment>
  );
};

export default NewAddForm;
