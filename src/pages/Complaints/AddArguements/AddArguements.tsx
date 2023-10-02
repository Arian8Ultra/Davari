/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ArgumentHeader from "../../../components/Arguments/ArgumentHeader";
import { BsPlusCircleDotted } from "react-icons/bs";
import {
  Green,
  primary,
  primaryGreyLightTransparent,
  primaryGrey,
  primaryGreyTransparent,
  primaryLightTransparent,
} from "../../../theme/color";
import { grey } from "@mui/material/colors";
import {
  Argument,
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../../static/Types";
import ArgumentModal from "../../../components/Arguments/ArgumentModal";
import { GET_COMPLAINT_ARGUMENTS } from "../../../GraphQL/Complaints/Queries";
import { useQuery } from "@apollo/client";

const AddArgument = () => {
  const { contractId, state } = useParams();
  const contractIdInt = contractId && parseInt(contractId);
  const stateInt = state ? parseInt(state) : 0;
  const [arguements, setArguements] = React.useState<
    OptionalArgument[]
  >([]);
  const [addModal, setAddModal] = React.useState({
    open: false,
    Argument: {} as Argument,
  });
  const [selectedArgument, setSelectedArgument] =
    React.useState<OptionalArgument>({} as OptionalArgument);

  const { data, loading } = useQuery(GET_COMPLAINT_ARGUMENTS, {
    variables: {
      id: contractIdInt,
    },
    onCompleted(data: {
      complaintArgument_getComplaintArguments: {
        result: {
          items: OptionalArgumentSamll[];
        };
      };
    }) {
      console.log(data);
    },
  });
  return (
    <>
      <Box>
        <Box
          sx={{
            borderRadius: "0.5rem",
            outline: `2px solid ${primary}`,
            // padding: "0.1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Table
            sx={{
              // backgroundColor: primaryGreyLightTransparent,
              borderRadius: "0.5rem",
            }}
          >
            <ArgumentHeader state={stateInt} />
            <TableBody>
              {stateInt == 0 &&
                data?.complaintArgument_getComplaintArguments
                  ?.result &&
                data?.complaintArgument_getComplaintArguments?.result?.items?.map(
                  (arguement, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        background:
                          index % 2 == 0
                            ? primaryGreyLightTransparent
                            : primaryLightTransparent,
                        borderBottom: `1px solid ${primaryGreyTransparent}`,
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          background: primaryGreyTransparent,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        setSelectedArgument(arguement);
                        setAddModal({
                          ...addModal,
                          open: true,
                        });
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell
                        sx={{
                          borderInline:
                            index % 2 == 0
                              ? `1px solid ${primaryGreyTransparent}`
                              : `1px solid ${primaryLightTransparent}`,
                        }}
                      >
                        {arguement.summary}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderInline:
                            index % 2 == 0
                              ? `1px solid ${primaryGreyTransparent}`
                              : `1px solid ${primaryLightTransparent}`,
                        }}
                      >
                        {arguement.description}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderInline:
                            index % 2 == 0
                              ? `1px solid ${primaryGreyTransparent}`
                              : `1px solid ${primaryLightTransparent}`,
                        }}
                      >
                        {arguement.suggestedAmount
                          ? arguement.suggestedAmount
                              ?.toString()
                              .replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                              ) || ""
                          : "ندارد"}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderLeft: `1px solid ${primaryGreyTransparent}`,
                        }}
                      >
                        {arguement.fileName}
                      </TableCell>
                    </TableRow>
                  )
                )}
              {stateInt == 1 &&
                data?.complaintArgument_getComplaintArguments
                  ?.result &&
                data?.complaintArgument_getComplaintArguments?.result?.items?.map(
                  (arguement, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        background:
                          index % 2 == 0
                            ? primaryGreyLightTransparent
                            : primaryLightTransparent,
                        borderBottom: `1px solid ${primaryGreyTransparent}`,
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          background: primaryGreyTransparent,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        setSelectedArgument(arguement);
                        setAddModal({
                          ...addModal,
                          open: true,
                        });
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell
                        sx={{
                          borderInline:
                            index % 2 == 0
                              ? `1px solid ${primaryGreyTransparent}`
                              : `1px solid ${primaryLightTransparent}`,
                        }}
                      >
                        {arguement.summary}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderInline:
                            index % 2 == 0
                              ? `1px solid ${primaryGreyTransparent}`
                              : `1px solid ${primaryLightTransparent}`,
                        }}
                      >
                        {arguement.accuserResponse}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderLeft:
                            index % 2 == 0
                              ? `1px solid ${primaryGreyTransparent}`
                              : `1px solid ${primaryLightTransparent}`,
                        }}
                      >
                        {arguement.accuserResponseFileName}
                      </TableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
          <IconButton
            onClick={() => {
              setAddModal({
                open: true,
                Argument: {} as Argument,
              });
              console.log(addModal);
            }}
            sx={{
              background: Green,
              margin: "1rem",
            }}
          >
            <BsPlusCircleDotted />
          </IconButton>
        </Box>
      </Box>
      <ArgumentModal
        argumentId={
          selectedArgument.id ? parseInt(selectedArgument.id) : 0
        }
        complaintId={contractIdInt || 0}
        state={stateInt}
        open={addModal.open}
        onClose={() => {
          setAddModal({
            open: false,
            Argument: {} as Argument,
          });
        }}
        AddArgument={(data) => {
          setArguements([...arguements, data.Argument]);
          console.log(data);
          setAddModal({
            open: false,
            Argument: {} as Argument,
          });
        }}
        ArgumentFromParent={selectedArgument}
      />
    </>
  );
};

export default AddArgument;
