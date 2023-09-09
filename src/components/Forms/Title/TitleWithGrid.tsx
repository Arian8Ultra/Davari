/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { VscAdd } from "react-icons/vsc";
import { DELETE_FORM_OBJ } from "../../../GraphQL/FormObj/Mutation";
import {
    FormObj,
    FormObjComplete,
    FormObjTypeEnum,
    GET_FORM_OBJ,
    GET_FORM_OBJS,
    GET_FORM_OBJS_BY_SEARCH,
} from "../../../GraphQL/FormObj/Queries";
import {
    Green,
    GreenLight,
    background,
    primary
} from "../../../theme/color";
import FormObjPreview from "../../FormObj/FormObjPreview";
import NewModal from "../../Modals";
interface Props {
  title?: string;
  id: string;
  children?: React.ReactNode;
  value?:boolean
}
const TitleWithGrid = (props: Props) => {
//   const formType = "response";
  const [table, setTable] = React.useState([0]);
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
    color: null as string | null,
    formObjectType: "" as unknown as FormObjTypeEnum,
    isRequired: false,
    label: null as string | null,
    name: null as string | null,
    stickyText: null as string | null,
    unit: null as string | null,
  });

  const handleDeleteFormObj = (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    gridColumnStart: number | undefined,
    // id: number | undefined
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
  };

  const [getFormObjBySearch, { data: formObjBySearchData }] =
    useLazyQuery(GET_FORM_OBJS_BY_SEARCH, {
      variables: {
        search: addModal.search,
      },
      onCompleted(data) {
        console.log("data", data);
      },
      onError(error) {
        console.error(error);
      },
    });

  const { data: formObjData, refetch } = useQuery(GET_FORM_OBJS, {
    onCompleted(data) {
      console.log("data", data);
    },
    onError(error) {
      console.error(error);
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

  useEffect(() => {
    console.log("formList", formList);
  }, [formList]);

  useEffect(() => {
    void getFormObjBySearch();
  }, [addModal.search, getFormObjBySearch]);

  return (
    <React.Fragment>
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
                  console.log("data", data);
                  setAddModal({
                    ...addModal,
                    open: false,
                    label:
                      formObjByIdData?.formObject_getFormObject
                        ?.result?.label,
                    id: 12312323,
                    type: formObjByIdData?.formObject_getFormObject
                      ?.result?.formObjectType,
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
                        data?.formObject_getFormObject?.result?.label,
                      formObjectType:
                        data?.formObject_getFormObject?.result
                          ?.formObjectType,
                      stickyText:
                        data?.formObject_getFormObject?.result
                          ?.stickyText,
                      required: false,
                      unit: data?.formObject_getFormObject?.result
                        ?.unit,
                      id: 213213123123,
                      formObjectId:
                        data?.formObject_getFormObject?.result?.id,
                      color:
                        data?.formObject_getFormObject?.result?.color,
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
            }}
          >
            افزودن
            {/* {formObjByIdData?.formObject_getFormObject?.result?.label} */}
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
          gap: "1rem",
        }}
      >
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
          {props.title}
        </Typography>
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
                display: table[index] + 3 >= 12 || (table[index] == 0 && index != 0)
                 ? "none" : "flex",
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
    </React.Fragment>
  );
};

export default TitleWithGrid;
