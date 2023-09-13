/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { CancelOutlined } from "@mui/icons-material";
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
import { VscAdd, VscPlug } from "react-icons/vsc";
import {
  ADD_FORM_OBJ_TO_TITLE,
  CREATE_FORM_OBJ,
  DELETE_FORM_OBJ,
  DELETE_FORM_OBJ_FROM_TITLE,
  MenuItemType,
} from "../../../GraphQL/FormObj/Mutation";
import {
  FormObj,
  FormObjComplete,
  FormObjTypeArray,
  FormObjTypeEnum,
  GET_FORM_OBJ,
  GET_FORM_OBJS,
  GET_FORM_OBJS_BY_SEARCH,
} from "../../../GraphQL/FormObj/Queries";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  background,
  primary,
} from "../../../theme/color";
import FormObjPreview from "../../FormObj/FormObjPreview";
import FormObject from "../../FormObj/FormObject";
import NewModal from "../../Modals";
import { GET_TITLE } from "../../../GraphQL/Form/Titles/Queies";
import FormObjectWihQuery from "../../FormObj/FormObjectWihQuery";
import {
  BsDashCircle,
  BsNodeMinus,
  BsPlusCircle,
} from "react-icons/bs";
interface Props {
  title?: string;
  id: number;
  children?: React.ReactNode;
  value?: boolean;
  row?: number;
  onDelete?: (id: number) => void;
}
const TitleWithGrid = (props: Props) => {
  //   const formType = "response";
  const [table, setTable] = React.useState([0]);
  const [isExist, setIsExist] = React.useState(false);
  const [oldFormList, setOldFormList] = React.useState(
    [] as FormObjComplete[]
  );
  const [formList, setFormList] = React.useState(
    // list of objects as FormObjComplete type
    [] as FormObjComplete[]
  );
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
    color: "" as string | null,
    formObjectType: "" as unknown as FormObjTypeEnum,
    isRequired: false,
    label: "" as string | null,
    name: "" as string | null,
    stickyText: "" as string | null,
    unit: "" as string | null,
    menuItems: [] as MenuItemType[],
    menuItemText: "" as string,
  });

  const [createFormObj] = useMutation(CREATE_FORM_OBJ, {
    variables: {
      formObjectType: createFormObjModal.formObjectType,
      label: createFormObjModal.label,
      name: createFormObjModal.name,
      stickyText: createFormObjModal.stickyText,
      unit: createFormObjModal.unit,
      isRequired: false,
      menuItems: createFormObjModal.menuItems.map((item) =>
        JSON.stringify(item)
      ),
      // color: createFormObjModal.color,
    },
    onCompleted(data) {
      // console.log(data);
      void refetch();
    },
  });

  const { data: dataTitle ,refetch:refetchTitle} = useQuery(GET_TITLE, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log("dataTitle :", data);
    },
  });

  const handleDeleteFormObj = (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    gridColumnStart: number | undefined,
    id: number | undefined
  ) => {
    setFormList(
      formList.filter(
        (item) =>
          item.gridRow != gridRow ||
          item.gridColumn != gridColumn ||
          item.gridColumnStart != gridColumnStart
      )
    );
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

    void deleteFormObjFromTitle({
      variables: {
        id: id,
      },
      onCompleted(data) {
        console.log("deleteFormObjFromTitleData :", data);
      },
    });
  };

  const [getFormObjBySearch, { data: formObjBySearchData }] =
    useLazyQuery(GET_FORM_OBJS_BY_SEARCH, {
      variables: {
        search: addModal.search,
      },
      onCompleted(data) {
        // console.log("data", data);
      },
      onError(error) {
        console.error(error);
      },
    });

  const { data: formObjData, refetch } = useQuery(GET_FORM_OBJS, {
    onCompleted(data) {
      // console.log("data", data);
    },
    onError(error) {
      console.error(error);
    },
  });

  const [getFormObj, { data: formObjByIdData }] = useLazyQuery(
    GET_FORM_OBJ,
    {
      onCompleted(data) {
        // console.log("data", data);
      },
      onError(error) {
        console.error(error);
      },
    }
  );

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

  const [addFormObjToTitle] = useMutation(ADD_FORM_OBJ_TO_TITLE);
  const [deleteFormObjFromTitle] = useMutation(
    DELETE_FORM_OBJ_FROM_TITLE
  );

  useEffect(() => {
    // console.log("formList", formList);
  }, [formList]);

  useEffect(() => {
    void getFormObjBySearch();
  }, [addModal.search, getFormObjBySearch]);

  return (
    <Box
      sx={{
        gridRow: props.row && `${props.row}`,
        gridColumn: "1/span 12",
      }}
    >
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
            {addModal.search != "" &&
              formObjBySearchData?.formObject_getFormObjects?.result?.items.map(
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
                      <Typography
                        variant="caption"
                        sx={{
                          textAlign: "start",
                          width: "100%",
                        }}
                      >
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
                        //   isDeletable={true}
                        //   handleDelete={() => {
                        //     void deleteFormObj({
                        //       variables: {
                        //         id: item.id,
                        //       },
                        //     });
                        //   }}
                      />
                    </Box>
                  );
                }
              )}
            {addModal.search == "" &&
              formObjData?.formObject_getFormObjects?.result.items.map(
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
                      <Typography
                        variant="caption"
                        sx={{
                          textAlign: "start",
                          width: "100%",
                        }}
                      >
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
                  console.log("getFormObjData :", data);

                  void addFormObjToTitle({
                    variables: {
                      formObjectId:
                        data?.formObject_getFormObject?.result?.id,
                      formTitleId: props.id,
                      gridRow: addModal.gridRow,
                      gridColumn:
                        data?.formObject_getFormObject?.result
                          ?.formObjectType == "TITLE"
                          ? 12
                          : addModal.gridColumn,
                      gridColumnStart: addModal.girdColumnStart,
                    },
                    onCompleted(
                      formObjectFormTitle_addFormObjectFormTitle
                    ) {
                      console.log(
                        "addFormObjToTitleData :",
                        formObjectFormTitle_addFormObjectFormTitle
                      );

                      void refetchTitle()
                      
                      setAddModal({
                        ...addModal,
                        open: false,
                        label:
                          formObjByIdData?.formObject_getFormObject
                            ?.result?.label,
                        id: formObjectFormTitle_addFormObjectFormTitle
                          .formObjectFormTitle_addFormObjectFormTitle
                          .result.id,
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
                              ?.formObjectType == "TITLE"
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
                          unit: data?.formObject_getFormObject?.result
                            ?.unit,
                          id: formObjectFormTitle_addFormObjectFormTitle
                            .formObjectFormTitle_addFormObjectFormTitle
                            .result.id,
                          formObjectId:
                            data?.formObject_getFormObject?.result
                              ?.id,
                          color:
                            data?.formObject_getFormObject?.result
                              ?.color,

                          menuItems:
                            data?.formObject_getFormObject?.result
                              ?.menuItems,
                        },
                      ]);

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
                },
                onError(error) {
                  console.error(error);
                },
              });
            }}
          >
            افزودن
          </Button>
        </Box>
      </NewModal>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "1rem",
          outline: `1px solid ${primary}`,
          borderRadius: "15px",
          marginBlock: "2rem",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows:'max-content',
          gap: "0.3rem",
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <IconButton
          onClick={() => {
            props.onDelete && props.onDelete(props.id);
          }}
          sx={{
            position: "absolute",
            top: "-15px",
            right: "-15px",
            backgroundColor: Red,
            // paddingInline: "10px",
            color: "white",
            "&:hover": {
              backgroundColor: RedLight,
              color: Red,
              boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            },
          }}
        >
          <CancelOutlined />
        </IconButton>
        {/* {JSON.stringify(formList)} */}
        {/* {JSON.stringify(oldFormList)} */}
        {/* {JSON.stringify(table)} */}
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            top: "-15px",
            left: "15px",
            backgroundColor: "white",
            paddingInline: "10px",
            color: primary,
          }}
        >
          {props.title} - {props.id}
        </Typography>
        {dataTitle?.formTitle_getFormTitle?.result?.formObjectFormTitles.map((item: {
          formObjectId: number;
          formTitleId: number;
          gridColumn: number;
          gridColumnStart: number;
          gridRow: number;
          id: number;
        }) => {
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
          else if (table[item.gridRow - 1] == 0) {
            table[item.gridRow - 1] = item.gridColumn;
            setTable([...table]);
          }
          else if(table[item.gridRow - 1] < item.gridColumnStart +item.gridColumn -1){
            table[item.gridRow -1] = item.gridColumnStart +item.gridColumn -1
            setTable([...table])
          }

          console.log("item", item);

          return (
            <FormObjectWihQuery
            id={item.formObjectId}
            deleteId={item.id}
            gridColumn={item.gridColumn}
            gridRow={item.gridRow}
            girdColumnStart={item.gridColumnStart}
            key={item.id}
            name=""
            isDeletable
          />
            // <Box
            // sx={{
            //   gridColumn: `${item.gridColumnStart}/span ${ item.gridColumn}`,
            //   gridRow: item.gridRow,
            //   outline: `1px solid ${primary}`,
            // }}>
            // {item.label}
            // </Box>
          );
        })}

        {/* {isExist &&
          oldFormList.map((item: FormObjComplete) => (
            <FormObjectWihQuery
              color={item.color}
              formObjectType={item.formObjectType}
              stickyText={item.stickyText}
              label={item.label}
              unit={item.unit}
              id={item.formObjectId}
              name={item.label}
              girdColumnStart={item.gridColumnStart}
              gridColumn={item.gridColumn}
              gridRow={item.gridRow}
              key={item.id}
              isDeletable={true}
              handleDelete={handleDeleteFormObj}
            />
          ))} */}

        {table.map((_item, index) => {
          return (
            <IconButton
              key={index}
              sx={{
                gridRow: index + 1,
                gridColumn: `${table[index] + 1}/span 1`,
                height: "max-content",
                width: "max-content",
                padding: "1rem",
                color: "white",
                display:
                  table[index] + 3 >= 12 ||
                  (table[index] == 0 && index != 0)
                    ? "none"
                    : "flex",
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
      </Box>
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
            {FormObjTypeArray.map(
              (
                item: {
                  id: number;
                  name: string;
                  faName: string;
                },
                index: number
              ) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.faName}
                </MenuItem>
              )
            )}
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
                "TITLE_H1" ||
              createFormObjModal.formObjectType.toString() == "FILE"
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
                "TITLE_H1" ||
              createFormObjModal.formObjectType.toString() == "FILE"
            }
            onChange={(e) => {
              setCreateFormObjModal({
                ...createFormObjModal,
                unit: e.target.value,
              });
            }}
          />
          <TextField
            label="گزینه"
            disabled={
              createFormObjModal.formObjectType.toString() != "SELECT"
            }
            value={createFormObjModal.menuItemText}
            onChange={(e) => {
              setCreateFormObjModal({
                ...createFormObjModal,
                menuItemText: e.target.value,
              });
            }}
            InputProps={{
              endAdornment: (
                <IconButton
                  disabled={
                    createFormObjModal.formObjectType.toString() !=
                    "SELECT"
                  }
                  onClick={() => {
                    setCreateFormObjModal({
                      ...createFormObjModal,
                      menuItems: [
                        ...createFormObjModal.menuItems,
                        {
                          id: createFormObjModal.menuItems.length,
                          label: createFormObjModal.menuItemText,
                          value: true,
                        },
                      ],
                    });
                  }}
                >
                  <VscAdd />
                </IconButton>
              ),
            }}
          />

          <Box
            sx={{
              gridColumn: "span 2",
              outline: `1px solid ${primary}`,
            }}
          >
            {createFormObjModal.menuItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.5rem",
                  backgroundColor:
                    item.value == true ? GreenLight : RedLight,
                  borderRadius: "15px",
                  marginBottom: "1rem",
                }}
              >
                <Typography>{item.label}</Typography>
                <IconButton
                  onClick={() => {
                    setCreateFormObjModal({
                      ...createFormObjModal,
                      menuItems: createFormObjModal.menuItems.filter(
                        (item2) => item2.id != item.id
                      ),
                    });
                  }}
                >
                  <CancelOutlined />
                </IconButton>

                {/* adding positive and negetive button to change the value of the menu item */}
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setCreateFormObjModal({
                        ...createFormObjModal,
                        menuItems: createFormObjModal.menuItems.map(
                          (item2) => {
                            if (item2.id == item.id) {
                              item2.value = true;
                            }
                            return item2;
                          }
                        ),
                      });
                    }}
                    sx={{
                      background: Green,
                      color: "white",
                      aspectRatio: "1/1",
                      "&:hover": {
                        background: GreenLight,
                        color: Green,
                      },
                    }}
                  >
                    <BsPlusCircle />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setCreateFormObjModal({
                        ...createFormObjModal,
                        menuItems: createFormObjModal.menuItems.map(
                          (item2) => {
                            if (item2.id == item.id) {
                              item2.value = false;
                            }
                            return item2;
                          }
                        ),
                      });
                    }}
                    sx={{
                      background: Red,
                      color: "white",
                      aspectRatio: "1/1",
                      "&:hover": {
                        background: RedLight,
                        color: Red,
                      },
                    }}
                  >
                    <BsDashCircle />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>

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
    </Box>
  );
};

export default TitleWithGrid;
