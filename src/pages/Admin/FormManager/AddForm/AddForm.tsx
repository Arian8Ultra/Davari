/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { VscAdd } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import {
  ADD_FORM_OBJ_TO_COMPLAINT_FORM,
  ADD_FORM_OBJ_TO_COMPLAINT_RESPONSE_FORM,
  CREATE_FORM_OBJ,
  DELETE_FORM_OBJ,
  DELETE_FORM_OBJ_FROM_COMPLAINT_FORM,
  DELETE_FORM_OBJ_FROM_COMPLAINT_RESPONSE_FORM,
} from "../../../../GraphQL/FormObj/Mutation";
import {
  FormObj,
  FormObjComplete,
  FormObjTypeEnum,
  GET_FORM_OBJ,
  GET_FORM_OBJS,
  GET_FORM_OBJS_BY_SEARCH,
} from "../../../../GraphQL/FormObj/Queries";
import BackButton from "../../../../components/BackButton";
import FormObjPreview from "../../../../components/FormObj/FormObjPreview";
import NewModal from "../../../../components/Modals";
import {
  Green,
  GreenLight,
  background
} from "../../../../theme/color";
import "./AddForm.css";
const AddForm = () => {
  const { formId, fromType } = useParams<{
    formId: string;
    fromType: string;
  }>();
  const [lastRow, setLastRow] = React.useState(1);
  const [lastColumn, setLastColumn] = React.useState(0);
  const [addModal, setAddModal] = React.useState({
    open: false,
    label: "",
    type: 0,
    stickyText: "",
    required: false,
    gridRow: 0,
    gridColumn: 4,
    girdColumnStart: 0,
    id: 511315,
    selected: 0,
    search: "",
  });

  const [createFormObjModal, setCreateFormObjModal] = React.useState({
    open: false,
    color: null as string | null,
    formObjectType: "" as unknown as FormObjTypeEnum,
    isRequired: false,
    label: null as string | null,
    name: null as string | null,
    stickyText: null as string | null,
    unit: null as string | null,
  });
  const [table, setTable] = React.useState([0]);
  const [formList, setFormList] = React.useState(
    // list of objects as FormObjComplete type
    [] as FormObjComplete[]
  );

  const { data: formObjData, refetch } = useQuery(GET_FORM_OBJS, {
    onCompleted(data) {
      console.log("data", data);
    },
    onError(error) {
      console.error(error);
    },
  });
  
  const [getFormObjBySearch, { data: formObjBySearchData }] =useLazyQuery(GET_FORM_OBJS_BY_SEARCH,{
    variables:{
      search:addModal.search
    },
    onCompleted(data) {
      console.log("data", data);
    },
    onError(error) {
      console.error(error);
    }
  })

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

  const [createFormObj] = useMutation(CREATE_FORM_OBJ, {
    variables: {
      formObjectType: createFormObjModal.formObjectType,
      label: createFormObjModal.label,
      name: createFormObjModal.name,
      stickyText: createFormObjModal.stickyText,
      unit: createFormObjModal.unit,
      isRequired: false,
      // color: createFormObjModal.color,
    },
    onCompleted(data) {
      console.log(data);
      void refetch();
    },
  });

  const [deleteFormObj] = useMutation(DELETE_FORM_OBJ, {
    onCompleted(data) {
      console.log(data);
      void refetch();
    },
    onError(error) {
      console.error(error);
      void refetch();
    },
  });

  const [addFormObjToComplaintForm] = useMutation(
    ADD_FORM_OBJ_TO_COMPLAINT_FORM,
    {
      onCompleted(data) {
        console.log(data);
        void refetch();
      },
      onError(error) {
        console.error(error);
        void refetch();
      },
    }
  );
  const [addFormObjToComplaintResponseForm] = useMutation(
    ADD_FORM_OBJ_TO_COMPLAINT_RESPONSE_FORM,
    {
      onCompleted(data) {
        console.log(data);
        void refetch();
      },
    }
  );

  const [deleteFormObjToComplaintForm]=useMutation(DELETE_FORM_OBJ_FROM_COMPLAINT_FORM,{
    onCompleted(data) {
      alert("فیلد مورد نظر حذف شد");
      console.log(data);
      void refetch();
    }
  })

  const[deleteFormObjToComplaintResponseForm]=useMutation(DELETE_FORM_OBJ_FROM_COMPLAINT_RESPONSE_FORM,{
    onCompleted(data) {
      alert("فیلد مورد نظر حذف شد");
      console.log(data);
      void refetch();
    }
  })
  const handleDeleteFormObj = (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    gridColumnStart: number | undefined,
    id:number|undefined,
  ) => {
    setFormList(
      formList.filter(
        (item) =>
          item.gridRow != gridRow ||
          item.gridColumn != gridColumn ||
          item.gridColumnStart != gridColumnStart
      )
    );

    if (fromType == "response") {
      void deleteFormObjToComplaintResponseForm({
        variables:{
          id:id
        }
      })
    }else{
      void deleteFormObjToComplaintForm({
        variables:{
          id:id
        }
      })
    }

    if (gridRow && table[gridRow - 1] == 0) {
      // @ts-ignore
      table[gridRow - 1] = table[gridRow - 1] - gridColumn;
      setTable([...table]);
    }
    if (gridRow && table[gridRow - 1] > 0) {
      // @ts-ignore
      table[gridRow - 1] = table[gridRow - 1] - gridColumn;
      setTable([...table]);
    }
  };

  useEffect(() => {
    console.log("formList", formList);
  }, [formList]);


  useEffect(() => {
    void getFormObjBySearch();
  },[addModal.search, getFormObjBySearch])

  return (
    <React.Fragment>
      <BackButton steps={-2} />
      <NewModal
        name="افزودن فیلد"
        open={addModal.open}
        onClose={() => {
          setAddModal({ ...addModal, open: false });
        }}
        backgroundColor={background}
        isCloseable={true}
        color={Green}
        height={"80vh"}
        width={{
          xs: "100%",
          md: "50%",
        }}
      >
        <Box
          width={"100%"}
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              position: "sticky",
              top: "0px",
              zIndex: 400,
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              width: "105%",
              transform: "translateX(-2.5%)",
            }}
          >
            <Button
              sx={{
                backgroundColor: Green,
                color: "white",
                "&:hover": {
                  backgroundColor: GreenLight,
                  color: Green,
                },
              }}
              onClick={() => {
                setCreateFormObjModal({
                  ...createFormObjModal,
                  open: true,
                });
              }}
            >
              ساخت فیلد جدید
            </Button>
            <TextField
              label="اندازه فیلد"
              value={addModal.gridColumn}
              type="number"
              size="small"
              onChange={(e) => {
                setAddModal({
                  ...addModal,
                  gridColumn: parseInt(e.target.value),
                });
              }}
            />
            <TextField
              label="جستجو"
              value={addModal.search}
              type="text"
              security="true"
              size="small"
              sx={{
                gridColumn: "span 2",
              }}
              onChange={(e) => {
                setAddModal({
                  ...addModal,
                  search: e.target.value,
                });
              }}
            />
          </Box>
          <Stack width={"100%"} height={"50%"}>
            {addModal.search != "" && formObjBySearchData?.formObject_getFormObjects?.result?.items.map(
              (item: FormObj, index: number) => {
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      setAddModal({
                        ...addModal,
                        selected: item.id,
                      });
                    }}
                    sx={{
                      width: "100%",
                      height: "max-content",
                      padding: "0.6rem",
                      backgroundColor: "white",
                      borderRadius: "1rem",
                      boxShadow: `0 0 10px ${
                        addModal.selected == item.id
                          ? GreenLight
                          : "rgba(0,0,0,0.2)"
                      }`,
                      marginBottom: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all ease 100ms",
                      position: "relative",
                      outline: `${
                        addModal.selected == item.id ? "2px" : 0
                      } solid ${Green}`,
                      userSelect: "none",
                      "&: hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="caption" sx={{
                      textAlign:"start",
                      width:"100%",
                    }}>
                      نام فیلد: {item.name}
                    </Typography>
                    <Divider sx={{ width: "100%" }} />
                    <FormObjPreview
                      color={
                        addModal.selected == item.id
                          ? Green
                          : item.color
                      }
                      formObjectType={item.formObjectType}
                      stickyText={item.stickyText}
                      label={item.label}
                      unit={item.unit}
                      id={item.id}
                      name={item.label}
                      key={item.id}
                      isDeletable={true}
                      handleDelete={() => {
                        void deleteFormObj({
                          variables: {
                            id: item.id,
                          },
                        });
                      }}
                    />
                  </Box>
                );
              }
            )}
            {addModal.search=="" && formObjData?.formObject_getFormObjects?.result.items.map(
              (item: FormObj, index: number) => {
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      setAddModal({
                        ...addModal,
                        selected: item.id,
                      });
                    }}
                    sx={{
                      width: "100%",
                      height: "max-content",
                      padding: "0.6rem",
                      backgroundColor: "white",
                      borderRadius: "1rem",
                      boxShadow: `0 0 10px ${
                        addModal.selected == item.id
                          ? GreenLight
                          : "rgba(0,0,0,0.2)"
                      }`,
                      marginBottom: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all ease 100ms",
                      position: "relative",
                      outline: `${
                        addModal.selected == item.id ? "2px" : 0
                      } solid ${Green}`,
                      userSelect: "none",
                      "&: hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="caption" sx={{
                      textAlign:"start",
                      width:"100%",
                    }}>
                      نام فیلد: {item.name}
                    </Typography>
                    <Divider sx={{ width: "100%" }} />
                    <FormObjPreview
                      color={
                        addModal.selected == item.id
                          ? Green
                          : item.color
                      }
                      formObjectType={item.formObjectType}
                      stickyText={item.stickyText}
                      label={item.label}
                      unit={item.unit}
                      id={item.id}
                      name={item.label}
                      key={item.id}
                      isDeletable={true}
                      handleDelete={() => {
                        void deleteFormObj({
                          variables: {
                            id: item.id,
                          },
                        });
                      }}
                    />
                  </Box>
                );
              }
            )}
          </Stack>
          <Button
            sx={{
              backgroundColor: Green,
              color: "white",
              position: "sticky",
              zIndex: 400,
              bottom: 0,
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
            onClick={() => {
              void getFormObj({
                variables: {
                  id: addModal.selected,
                },
                onCompleted(data) {
                  console.log("data", data);
                  if (fromType == "complaint") {
                    void addFormObjToComplaintForm({
                      variables: {
                        complaintFormId: formId && parseInt(formId),
                        formObjectId:
                          data?.formObject_getFormObject?.result?.id,
                        gridColumn: data?.formObject_getFormObject =="TITLE_H1"?12:addModal.gridColumn,
                        gridRow: addModal.gridRow,
                        gridColumnStart: addModal.girdColumnStart,
                      },
                      onCompleted(addFormObjToComplaintFormData) {
                        setAddModal({
                          ...addModal,

                          open: false,
                          label:
                            formObjByIdData?.formObject_getFormObject
                              ?.result?.label,
                          id: addFormObjToComplaintFormData
                            ?.formObjectComplaintForm_addFormObjectComplaintForm
                            ?.result?.id,
                          type: formObjByIdData
                            ?.formObject_getFormObject?.result
                            ?.formObjectType,
                          stickyText:
                            formObjByIdData?.formObject_getFormObject
                              ?.result?.stickyText,
                        });

                        setFormList([
                          ...formList,
                          {
                            gridRow: addModal.gridRow,
                            gridColumn:
                              data?.formObject_getFormObject?.result
                                ?.formObjectType == "TITLE_H1"
                                ? 12
                                : addModal.gridColumn,
                            gridColumnStart: addModal.girdColumnStart,
                            label:
                              data?.formObject_getFormObject?.result
                                ?.label,
                            formObjectType:
                              data?.formObject_getFormObject?.result
                                ?.formObjectType,
                            stickyText:
                              data?.formObject_getFormObject?.result
                                ?.stickyText,
                            required: false,
                            unit: data?.formObject_getFormObject
                              ?.result?.unit,
                            id: addFormObjToComplaintFormData
                              ?.formObjectComplaintForm_addFormObjectComplaintForm
                              ?.result?.id,
                            formObjectId:
                              data?.formObject_getFormObject?.result
                                ?.id,
                            color:
                              data?.formObject_getFormObject?.result
                                ?.color,
                          },
                        ]);
                      },
                    });
                  } else if (fromType == "response") {
                    void addFormObjToComplaintResponseForm({
                      variables: {
                        complaintResponseFormId:
                          formId && parseInt(formId),
                        formObjectId:
                          data?.formObject_getFormObject?.result?.id,
                        gridColumn: addModal.gridColumn,
                        gridRow: addModal.gridRow,
                        gridColumnStart: addModal.girdColumnStart,
                      },
                      onCompleted(addFormObjToComplaintResponseFormData) {
                        setAddModal({
                          ...addModal,

                          open: false,
                          label:
                            formObjByIdData?.formObject_getFormObject
                              ?.result?.label,
                          id: addFormObjToComplaintResponseFormData
                            ?.formObjectComplaintForm_addFormObjectComplaintForm
                            ?.result?.id,
                          type: formObjByIdData
                            ?.formObject_getFormObject?.result
                            ?.formObjectType,
                          stickyText:
                            formObjByIdData?.formObject_getFormObject
                              ?.result?.stickyText,
                        });

                        setFormList([
                          ...formList,
                          {
                            gridRow: addModal.gridRow,
                            gridColumn:
                              data?.formObject_getFormObject?.result
                                ?.formObjectType == "TITLE_H1"
                                ? 12
                                : addModal.gridColumn,
                            gridColumnStart: addModal.girdColumnStart,
                            label:
                              data?.formObject_getFormObject?.result
                                ?.label,
                            formObjectType:
                              data?.formObject_getFormObject?.result
                                ?.formObjectType,
                            stickyText:
                              data?.formObject_getFormObject?.result
                                ?.stickyText,
                            required: false,
                            unit: data?.formObject_getFormObject
                              ?.result?.unit,
                            id: addFormObjToComplaintResponseFormData
                              ?.formObjectComplaintForm_addFormObjectComplaintForm
                              ?.result?.id,
                            formObjectId:
                              data?.formObject_getFormObject?.result
                                ?.id,
                            color:
                              data?.formObject_getFormObject?.result
                                ?.color,
                          },
                        ]);
                      },
                    });
                  }

                  if (table[addModal.gridRow - 1] == undefined) {
                    table[addModal.gridRow - 1] =
                      data?.formObject_getFormObject?.result
                        ?.formObjectType == "TITLE_H1"
                        ? 12
                        : addModal.gridColumn;
                    setTable([...table]);
                  } else if (table[addModal.gridRow - 1] == 0) {
                    table[addModal.gridRow - 1] =
                      table[addModal.gridRow - 1] +
                      (data?.formObject_getFormObject?.result
                        ?.formObjectType == "TITLE_H1"
                        ? 12
                        : addModal.gridColumn);
                    setTable([...table]);
                  } else {
                    table[addModal.gridRow - 1] =
                      table[addModal.gridRow - 1] +
                      (data?.formObject_getFormObject?.result
                        ?.formObjectType == "TITLE_H1"
                        ? 12
                        : addModal.gridColumn);
                    setTable([...table]);
                  }
                },
                onError(error) {
                  console.error(error);
                },
              });
            }}
          >
            افزودن
            {/* {formObjByIdData?.formObject_getFormObject?.result?.label} */}
          </Button>
        </Box>
      </NewModal>

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
        {formList.map((item: FormObjComplete) => {
          if (item.gridRow != 0) {
            if (item.gridRow > lastRow) setLastRow(item.gridRow);
          }
          if (item.gridColumn != 0) {
            if (item.gridColumn > lastColumn)
              setLastColumn(item.gridColumn);
          }

          if (table[item.gridRow - 1] == undefined) {
            setTable([...table, item.gridColumn]);
          }
          if (table[item.gridRow - 1] == 0) {
            table[item.gridRow - 1] = item.gridColumn;
            setTable([...table]);
          }

          return (
            // <TextField
            //   key={index}
            //   // label={item.label}
            //   required={item.required}
            //   value={`row: ${item.gridRow} col: ${item.gridColumn} table: ${table}`}
            //   InputProps={{
            //     endAdornment: (
            //       <div className="sticky_text">{item.stickyText}</div>
            //     ),
            //   }}
            //   sx={{
            //     gridRow: item.gridRow,
            //     // gridColumn: `span ${item.gridColumn}`,
            //     gridColumnStart: item.girdColumnStart,
            //     gridColumnEnd: item.girdColumnStart + item.gridColumn,
            //     height: "max-content",
            //   }}
            // />
            <FormObjPreview
              color={item.color}
              formObjectType={item.formObjectType}
              stickyText={item.stickyText}
              label={item.label}
              unit={item.unit}
              id={item.id}
              name={item.label}
              girdColumnStart={item.gridColumnStart}
              gridColumn={item.gridColumn}
              gridRow={item.gridRow}
              key={item.id}
              isDeletable={true}
              handleDelete={handleDeleteFormObj}
            />
          );
        })}

        {table.map((_item, index) => {
          return (
            <IconButton
              sx={{
                gridRow: index + 1,
                gridColumn: `${table[index] + 1}/span 1`,
                height: "max-content",
                width: "max-content",
                padding: "1rem",
                color: "white",
                display: table[index] + 3 >= 12 ? "none" : "flex",
                // aspectRatio: "1/1",
                backgroundColor: Green,
                "&:hover": {
                  backgroundColor: GreenLight,
                  color: Green,
                },
              }}
              onClick={() => {
                setAddModal({
                  ...addModal,
                  open: true,
                  gridRow: index + 1,
                  girdColumnStart: table[index] + 1,
                });
              }}
            >
              <VscAdd />
            </IconButton>
          );
        })}

        {/* new icon buton for last row */}

        {table[0] > 0 && (
          <IconButton
            sx={{
              gridRow: table.length + 1,
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
              setLastRow(lastRow + 1);
              setAddModal({
                ...addModal,
                open: true,
                gridRow: lastRow + 1,
                girdColumnStart: 1,
              });
            }}
          >
            <VscAdd />
          </IconButton>
        )}
      </div>
      <NewModal
        open={createFormObjModal.open}
        onClose={() => {
          setCreateFormObjModal({
            ...createFormObjModal,
            open: false,
          });
        }}
        name="ساخت فیلد جدید"
        backgroundColor={background}
        color={Green}
        isCloseable={true}
        height={"80vh"}
        width={{
          xs: "100%",
          md: "50%",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          <TextField
            label="نوع فیلد"
            value={createFormObjModal.formObjectType}
            onChange={(e) => {
              console.log("e.target.value", e.target.value);

              setCreateFormObjModal({
                ...createFormObjModal,
                formObjectType: e.target
                  .value as unknown as FormObjTypeEnum,
              });
            }}
            sx={{
              gridColumn: "span 2",
            }}
            select
          >
            <MenuItem value={FormObjTypeEnum[2].toUpperCase()}>
              عنوان اصلی
            </MenuItem>
            <MenuItem value={FormObjTypeEnum[3].toUpperCase()}>
              عنوان فرعی
            </MenuItem>
            <MenuItem value={FormObjTypeEnum[0].toUpperCase()}>
              متن
            </MenuItem>
            <MenuItem value={FormObjTypeEnum[1].toUpperCase()}>
              متن با فایل
            </MenuItem>
          </TextField>
          <TextField
            label="نام فیلد"
            value={createFormObjModal.name}
            disabled={
              createFormObjModal.formObjectType.toString() == ""
            }
            onChange={(e) => {
              setCreateFormObjModal({
                ...createFormObjModal,
                name: e.target.value,
              });
            }}
          />
          <TextField
            label="عنوان فیلد"
            value={createFormObjModal.label}
            disabled={
              createFormObjModal.formObjectType.toString() == ""
            }
            onChange={(e) => {
              setCreateFormObjModal({
                ...createFormObjModal,
                label: e.target.value,
              });
            }}
          />
          <TextField
            label="متن چسبیده"
            value={createFormObjModal.stickyText}
            disabled={
              createFormObjModal.formObjectType.toString() == "" ||
              createFormObjModal.formObjectType.toString() ==
                "TITLE_H2" ||
              createFormObjModal.formObjectType.toString() ==
                "TITLE_H1"
            }
            onChange={(e) => {
              setCreateFormObjModal({
                ...createFormObjModal,
                stickyText: e.target.value,
              });
            }}
          />
          <TextField
            label="واحد"
            value={createFormObjModal.unit}
            disabled={
              createFormObjModal.formObjectType.toString() == "" ||
              createFormObjModal.formObjectType.toString() ==
                "TITLE_H2" ||
              createFormObjModal.formObjectType.toString() ==
                "TITLE_H1"
            }
            onChange={(e) => {
              setCreateFormObjModal({
                ...createFormObjModal,
                unit: e.target.value,
              });
            }}
          />

          <Button
            sx={{
              gridColumn: "span 2",
              backgroundColor: Green,
              color: "white",
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
            onClick={() => {
              // setAddModal({
              //   ...addModal,
              //   open: true,
              //   label: createFormObjModal.label,
              //   type: createFormObjModal.formObjectType,
              //   stickyText: createFormObjModal.stickyText,
              //   required: createFormObjModal.isRequired,
              //   id: 511315,
              // });
              void createFormObj();
              setCreateFormObjModal({
                ...createFormObjModal,
                open: false,
              });
            }}
          >
            افزودن
          </Button>
        </Box>
      </NewModal>
    </React.Fragment>
  );
};

export default AddForm;
