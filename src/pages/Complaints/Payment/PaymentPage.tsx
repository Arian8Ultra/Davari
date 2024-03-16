/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { BsCashStack } from "react-icons/bs";
import { useParams } from "react-router-dom";
import FileBox from "../../../components/FileBox";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import { convertToPersianDigits } from "../../../functions/Functions";
import {
  ComplaintStateStatus,
  CouncilListStatus,
  GetArgumentsWithFilterDocument,
  UpdateComplaintFullDocument
} from "../../../gql/graphql";
import { background, primary, secondary } from "../../../theme/color";

const PaymentPage = () => {
  const { complaintId } = useParams();
  const { turn } = useParams();
  // const user = useUserStore((state) => state.user);
  const [paymentModal, setPaymentModal] = React.useState(false);
  // const [totalAmount, setTotalAmount] = React.useState(0);
  // const { data } = useQuery(GetComplaintDocument, {
  //   variables: {
  //     id: parseInt(complaintId || "0"),
  //   },
  //   onCompleted(data) {
  //     console.log(data);
  //   },
  // });

  const { data: args } = useQuery(GetArgumentsWithFilterDocument, {
    variables: {
      filter: {
        complaintId: {
          eq: parseInt(complaintId || "0"),
        },
      },
      take: 20000,
      skip: 0,
    },
  });

  const [updateComplaint] = useMutation(UpdateComplaintFullDocument, {
    variables: {
      input: {
        complaintStateId:
          turn === "1"
            ? getComplaintStateWithEnum(ComplaintStateStatus.WaitingForRegisteringHandlingType).id
            : turn === "2"
            ? getComplaintStateWithEnum(ComplaintStateStatus.WaitingForMailRoomExpertToDownloadDecree).id
            : getComplaintStateWithEnum(ComplaintStateStatus.ComplaintDetermined).id,
        id: parseInt(complaintId || "0"),
        isFirstPaymentPaid: turn === "1" ? true : false,
        councilListStatus: CouncilListStatus.AfterCouncilList,
      },
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Typography variant={"h6"}>مبلغ پرداختی :</Typography>
      <Typography variant={"h6"}>
        {/* add every argument amout to each other */}

        {convertToPersianDigits(
          args?.complaintArgument_getComplaintArguments.result?.items
            ?.reduce((acc, item) => {
              return acc + item.suggestedAmount;
            }, 0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        ) + " ریال"}
        {}
      </Typography>
      <FileBox
        title={"پرداخت"}
        sx={{
          width: "20%",
          aspectRatio: "1/1",
        }}
      />
      <Typography variant={"h6"}>آپلود رسید</Typography>

      <Button
        variant={"contained"}
        onClick={() => {
          setPaymentModal(true);
        }}
        sx={{
          background: primary,
          gap: 2,
          color: secondary,
          fontSize: "1.2rem",
          "&:hover": {
            background: secondary,
            color: primary,
          },
        }}
      >
        پرداخت از طریق درگاه
        <BsCashStack />
      </Button>
      <Modal
        open={paymentModal}
        onClose={() => {
          setPaymentModal(false);
        }}
        aria-labelledby="پرداخت"
        aria-describedby="پرداخت"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            minWidth: "20dvw",
            background: background,
            padding: "2rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
          }}
        >
          <Button
            variant={"contained"}
            onClick={() => {
              setPaymentModal(false);
              void updateComplaint();
              // go back
              window.history.back();
            }}
            sx={{
              background: primary,
              gap: 2,
              color: secondary,
              fontSize: "1.2rem",
              "&:hover": {
                background: secondary,
                color: primary,
              },
            }}
          >
            پرداخت
            <BsCashStack />
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default PaymentPage;
