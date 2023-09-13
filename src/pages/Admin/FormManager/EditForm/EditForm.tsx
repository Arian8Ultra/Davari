/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import "./ViewForm.css";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  GET_COMPLAINT_ANSWER_FORM,
  GET_COMPLAINT_FORM,
} from "../../../../GraphQL/Form/Queries";
import {
  FormObj,
  FormObjComplete,
  GET_FORM_OBJ,
} from "../../../../GraphQL/FormObj/Queries";
import FormObjPreview from "../../../../components/FormObj/FormObjPreview";
import {
  Green,
  GreenLight,
  background,
  primary,
} from "../../../../theme/color";
import FormObjPreviewWithQuery from "../../../../components/FormObj/FormObjPreviewWithQuery";
import BackButton from "../../../../components/BackButton";
import { FormTitle } from "../../../../GraphQL/Form/Titles/Queies";
import Title from "../../../../components/Forms/Title/Title";
import TitleWithGrid from "../../../../components/Forms/Title/TitleWithGrid";
import {
  CREATE_FORM_TITLE,
  DELETE_FORM_TITLE,
} from "../../../../GraphQL/Form/Titles/Mutations";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { VscAdd } from "react-icons/vsc";
import NewModal from "../../../../components/Modals";
const EditForm = () => {
  const { formId, fromType } = useParams<{
    formId: string;
    fromType: string;
  }>();
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

  const [getCompalintForm, { data: complaintData, refetch }] =
    useLazyQuery(GET_COMPLAINT_FORM, {
      variables: {
        id: formId && parseInt(formId),
      },
      onCompleted(data) {
        console.log(data);
        data.complaintForm_getComplaintForm.result.formObjectComplaintForms.map(
          (item: {
            formObjectId: number;
            gridColumn: number;
            gridRow: number;
            gridColumnStart: number;
          }) => {
            console.log(item);
          }
        );
      },
    });

  const [getCompalintResponseForm, { data: responseData }] =
    useLazyQuery(GET_COMPLAINT_ANSWER_FORM, {
      variables: {
        id: formId && parseInt(formId),
      },
      onCompleted(data) {
        console.log(data);
      },
    });

  const [getFormObj, { data: formObjByIdData }] = useLazyQuery(
    GET_FORM_OBJ,
    {
      onCompleted(data) {
        console.log("data", data);
      },
      onError(error) {
        console.error(error);
      },
    }
  );
  const [deleteTitle] = useMutation(DELETE_FORM_TITLE);

  const handleDeleteTitle = (id: number) => {
    void deleteTitle({
      variables: {
        id: id,
      },
      onCompleted(data) {
        console.log(data);
        void refetch();
      },
    });
  };

  React.useEffect(() => {
    if (fromType === "complaint") {
      void getCompalintForm();
    } else if (fromType === "response") {
      void getCompalintResponseForm();
    }
  }, [fromType, getCompalintForm, getCompalintResponseForm]);

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
            gridAutoRows:'1fr',
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
              void addTitle({
                onCompleted(data) {
                  console.log(data);
                  void refetch()
                },
              });
              setAddTitleModal({ ...addTitleModal, open: false });
            }}
          >
            افزودن
          </Button>
        </Box>
      </NewModal>
      <BackButton to="/admin/formanager" />
      <div className="main_grid_view">
        {fromType === "complaint" &&
          complaintData?.complaintForm_getComplaintForm?.result?.formTitles?.map(
            (item: FormTitle, index: number) => {
              return (
                <TitleWithGrid
                  key={index}
                  id={item.id}
                  row={index + 1}
                  onDelete={handleDeleteTitle}
                  // setValue={setValue}
                  // value={value}
                />
                // <FormObjPreviewWithQuery
                //   key={index}
                //   formObjectId={item.formObjectId}
                //   gridColumn={item.gridColumn}
                //   gridRow={item.gridRow}
                //   girdColumnStart={item.gridColumnStart}
                // />
              );
            }
          )}

        {fromType === "response" &&
          responseData?.complaintForm_getComplaintAnswerForm?.result?.formObjectComplaintResponseForms?.map(
            (item: FormObjComplete, index: number) => {
              void getFormObj({
                variables: {
                  id: item.id,
                },
                onCompleted(data) {
                  return (
                    <FormObjPreview
                      key={index}
                      id={item.id}
                      formObjectType={item.formObjectType}
                      gridColumn={item.gridColumn}
                      gridRow={item.gridRow}
                      girdColumnStart={item.gridColumnStart}
                      label={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.label
                      }
                      name={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.name
                      }
                      unit={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.unit
                      }
                      stickyText={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.stickyText
                      }
                      color={primary}
                    />
                  );
                },
              });
            }
          )}
        <IconButton
          sx={{
            gridRow:
              complaintData?.complaintForm_getComplaintForm?.result
                ?.formTitles?.length + 1,
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
              row:
                complaintData?.complaintForm_getComplaintForm?.result
                  ?.formTitles?.length + 1,
            });
          }}
        >
          <VscAdd />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default EditForm;
