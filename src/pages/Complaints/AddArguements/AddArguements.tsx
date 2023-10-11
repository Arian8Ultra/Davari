/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsCheck, BsPlusCircleDotted } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  GET_COMPLAINT,
  GET_COMPLAINTS,
  GET_COMPLAINT_ARGUMENTS,
} from "../../../GraphQL/Complaints/Queries";
import ArgumentCard from "../../../components/Arguments/ArgumentCard";
import ArgumentHeader from "../../../components/Arguments/ArgumentHeader";
import ArgumentModal from "../../../components/Arguments/ArgumentModal";
import {
  Argument,
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../../static/Types";
import {
  Green,
  GreenLight,
  onSecondary,
  primary,
  primaryGrey,
  secondary,
} from "../../../theme/color";
import { useUserStore } from "../../../Context/UserStore";
import NoAccess from "../../../layout/NoAccess";
import ArgumentInfoModal from "../../../components/Arguments/ArgumentInfoModal";

const AddArgument = () => {
  const { contractId, state } = useParams();
  const contractIdInt = contractId && parseInt(contractId);
  const user = useUserStore((state) => state.user);
  const stateInt = state ? parseInt(state) : 0;
  const [arguements, setArguements] = React.useState<
    OptionalArgument[]
  >([]);
  const [addModal, setAddModal] = React.useState({
    open: false,
    Argument: {} as Argument,
    editMode: false as boolean,
  });
  const [noAccess, setNoAccess] = useState(false);
  const [selectedArgument, setSelectedArgument] =
    React.useState<OptionalArgument>({} as OptionalArgument);

  const [viewMoreModal, setViewMoreModal] = React.useState({
    open: false,
    argument: {} as OptionalArgument,
  });

  const { data, loading, refetch } = useQuery(
    GET_COMPLAINT_ARGUMENTS,
    {
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
    }
  );

  const { data: compaint, loading: compaintLoading } = useQuery(
    GET_COMPLAINT,
    {
      variables: {
        id: contractId && parseInt(contractId),
      },
      onCompleted(data) {
        console.log("compaint", data);
        if (
          state &&
          parseInt(state) == 1 &&
          user.departmentId ==
            data?.complaint_getComplaint?.result?.contract
              ?.accuserDepartmentId
        ) {
          console.log(
            "accuserDepartmentId",
            data?.complaint_getComplaint.result.contract
              ?.accuserDepartmentId
          );
          setNoAccess(true);
          return <NoAccess />;
        } else {
          setNoAccess(false);

          console.log(
            "accuserDepartmentId",
            data?.complaint_getComplaint.result.contract
              ?.accuserDepartmentId
          );
        }
        if (
          state &&
          parseInt(state) == 0 &&
          user.departmentId ==
            data?.complaint_getComplaint?.result?.contract
              ?.accusedDepartmentId
        ) {
          console.log(
            "accusedDepartmentId",
            data?.complaint_getComplaint.result.contract
              ?.accusedDepartmentId
          );
          setNoAccess(true);
          return <NoAccess />;
        } else {
          setNoAccess(false);

          console.log(
            "accusedDepartmentId",
            data?.complaint_getComplaint.result.contract
              ?.accusedDepartmentId
          );
        }
      },
      onError(error) {
        console.log("compaint", error);
      },
    }
  );

  const [DeleteArgument] = useMutation(
    gql`
      mutation DeleteArgument($id: Int!) {
        complaintArgument_deleteComplaintArgument(entityId: $id) {
          result {
            id
          }
          status {
            code
            value
          }
        }
      }
    `,
    {
      onCompleted(data) {
        console.log(data);
        void refetch();
      },
    }
  );

  return (
    <>
      <Box display={!compaintLoading && noAccess ? "none" : "block"}>
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
              {loading && <Skeleton />}
              {data?.complaintArgument_getComplaintArguments
                ?.result &&
                data?.complaintArgument_getComplaintArguments?.result?.items?.map(
                  (arguement, index) =>
                    ArgumentCard({
                      state: stateInt,
                      addModal: addModal,
                      arguement: arguement,
                      id: index,
                      setAddModal: setAddModal,
                      setSelectedArgument: setSelectedArgument,
                      deleteArgument(id) {
                        void DeleteArgument({
                          variables: {
                            id: id,
                          },
                        });
                      },
                      setVewMoreModal: setViewMoreModal,
                    })
                )}
            </TableBody>
          </Table>
          <IconButton
            onClick={() => {
              setAddModal({
                open: true,
                Argument: {} as Argument,
                editMode: false,
              });
              console.log(addModal);
            }}
            sx={{
              background: primary,
              margin: "1rem",
              display: stateInt != 0 ? "none" : "flex",
              width: "50px",
              aspectRatio: "1/1",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: secondary,
                color: onSecondary,
              },
            }}
          >
            <BsPlusCircleDotted />
          </IconButton>
        </Box>
        <IconButton
          sx={{
            background: Green,
            color: "white",
            position: "fixed",
            bottom: 10,
            right: 10,
            fontSize: "3rem",
            borderRadius: "1.5rem",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
        >
          <BsCheck />
          <Typography
            fontSize={"1.2rem"}
            sx={{
              marginInline: "1rem",
            }}
          >
            ثبت
          </Typography>
        </IconButton>
      </Box>
      <Box display={!compaintLoading && noAccess ? "block" : "none"}>
        <NoAccess/>
      </Box>
      <ArgumentInfoModal
        open={viewMoreModal.open}
        handleClose={() => {
          setViewMoreModal({
            ...viewMoreModal,
            open: false,
          });
        }}
        argument={viewMoreModal.argument}
        state={stateInt}
      />
      <ArgumentModal
        argumentId={
          selectedArgument.id ? parseInt(selectedArgument.id) : 0
        }
        complaintId={contractIdInt || 0}
        state={stateInt}
        open={addModal.open}
        onClose={() => {
          setAddModal({
            editMode: false,
            open: false,
            Argument: {} as Argument,
          });
        }}
        AddArgument={(data) => {
          setArguements([...arguements, data.Argument]);
          console.log(data);
          setAddModal({
            editMode: false,
            open: false,
            Argument: {} as Argument,
          });
        }}
        editMode={addModal.editMode}
        ArgumentFromParent={selectedArgument}
      />
    </>
  );
};

export default AddArgument;
