/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from "@apollo/client";
import {
  Box,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import { BsCheck, BsPlusCircleDotted } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { GET_COMPLAINT_ARGUMENTS } from "../../../GraphQL/Complaints/Queries";
import ArgumentCard from "../../../components/Arguments/ArgumentCard";
import ArgumentHeader from "../../../components/Arguments/ArgumentHeader";
import ArgumentModal from "../../../components/Arguments/ArgumentModal";
import {
  Argument,
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../../static/Types";
import { Green, GreenLight, primary } from "../../../theme/color";

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
                    })
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
              display: stateInt != 0 ? "none" : "block",
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
