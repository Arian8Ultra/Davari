/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect } from "react";
import "./AddForm.css";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import {
  Green,
  GreenLight,
  background,
  primary,
} from "../../../../theme/color";
import { VscAdd, VscDiffAdded } from "react-icons/vsc";
import NewModal from "../../../../components/Modals";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  FormObj,
  FormObjComplete,
  GET_FORM_OBJ,
  GET_FORM_OBJS,
} from "../../../../GraphQL/FormObj/Queries";
import FormObjPreview from "../../../../components/FormObj/FormObjPreview";
import { TextFields } from "@mui/icons-material";
const AddForm = () => {
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
  });
  const [ColumnAddButton, setColumnAddButton] = React.useState([
    {
      gridRow: 1,
    },
  ]);
  const [table, setTable] = React.useState([0]);
  const [formList, setFormList] = React.useState(
    // list of objects as FormObjComplete type
    [] as FormObjComplete[]
  );

  const { data: formObjData } = useQuery(GET_FORM_OBJS, {
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

  const handleDeleteFormObj = (
    gridRow: number | undefined,
    gridColumn: number | undefined,
    gridColumnStart: number | undefined
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

  useEffect(() => {
    console.log("formList", formList);
  }, [formList]);

  return (
    <React.Fragment>
      {/* {`table: ${table}`} */}
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
          <Stack width={"100%"} height={"80%"}>
            {formObjData?.formObject_getFormObjects?.result.items.map(
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
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all ease 100ms",
                      outline: `${
                        addModal.selected == item.id ? "2px" : 0
                      } solid ${Green}`,
                      userSelect: "none",
                      "&: hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
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
                    id: formObjByIdData?.formObject_getFormObject
                      ?.result?.id,
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
                      id: data?.formObject_getFormObject?.result?.id,
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

              // if (table[addModal.gridRow-1] < addModal.gridColumn) {
              //   table[addModal.gridRow-1] = addModal.gridColumn;
              //   setTable([...table]);
              // }
              // if(!table[addModal.gridRow-1]){
              //   table[addModal.gridRow-1] = addModal.gridColumn;
              //   setTable([...table]);
              // }
            }}
          >
            افزودن
            {formObjByIdData?.formObject_getFormObject?.result?.label}
          </Button>
        </Box>
      </NewModal>

      <div className="ruler">
        {[...Array(12)].map((item, index) => {
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
          // else if(table[item.gridRow] < item.gridColumn){
          //   table[item.gridRow] = item.gridColumn +2
          //   setTable([...table])
          // }

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

        {table.map((item, index) => {
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
                // if (lastColumn + 4 > 12) {
                //   setLastRow(lastRow + 1);
                //   setLastColumn(0);
                // } else {
                //   setLastColumn(lastColumn + 4);
                // }
                // if (table[index] == 0) {
                //   table[index] = table[index] + 4;
                //   setTable([...table]);
                // } else {
                //   table[index] = table[index] + 4;
                //   setTable([...table]);
                // }

                // setFormList([
                //   {
                //     gridRow: index + 1,
                //     gridColumn: 4,
                //     girdColumnStart: table[index] - 3,
                //     label: "test",
                //     type: 0,
                //     stickyText: "sticky",
                //     required: false,
                //   },
                //   ...formList,
                // ]);

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
    </React.Fragment>
  );
};

export default AddForm;
