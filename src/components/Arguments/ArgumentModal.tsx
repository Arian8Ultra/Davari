/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  RegistrarType,
  useAddArgumentToComplaintMutation,
  useAddNonFeasibleArgumentMutation,
  useUpdateArgumentFullMutation,
} from "../../../generated-types";
import { useUserStore } from "../../Context/UserStore";
import { UPDATE_COMPLAINT } from "../../GraphQL/Complaints/Mutations";
import { UPLOAD_FILE } from "../../api/upload";
import { getComplaintStateWithEnum } from "../../functions/ComplaintStatesFunc";
import {
  ComplaintArgument,
  ComplaintStateStatus,
  FinancialStatus,
} from "../../gql/graphql";
import {
  Green,
  GreenLight,
  background,
  primary,
  secondaryDark,
} from "../../theme/color";
import FileBox from "../FileBox";
import NewModal from "../Modals";

interface Props {
  state?: number;
  open: boolean;
  onClose: () => void;
  setArgumentModal?: React.Dispatch<React.SetStateAction<ComplaintArgument>>;
  ArgumentFromParent?: ComplaintArgument;
  AddArgument?: ({ Argument }: { Argument: ComplaintArgument }) => void;

  argumentId?: number;
  complaintId?: number;
  editMode?: boolean;
  refetch?: () => void;
  isFirst?: boolean;
}
const ArgumentModal = (props: Props) => {
  const user = useUserStore((state) => state.user);
  const [Argument, setArgument] = React.useState<ComplaintArgument>(
    {} as ComplaintArgument
  );
  const [files, setFiles] = React.useState<File>();
  const [nonFissible, setNonFissible] = React.useState<boolean>(false);
  const [financialSituation, setFinancialSituation] = useState<{
    title?: "withFinancialEffects" | "withoutFinancialEffects";
    subtitle?: string;
    enum?: FinancialStatus;
  }>();
  //   set argument from parent if exists
  React.useEffect(() => {
    if (props.ArgumentFromParent) {
      setArgument(props.ArgumentFromParent);
    }
  }, [props.ArgumentFromParent]);

  const financialSituationWithFinancialEffects = [
    {
      title:
        "پرداخت مطالبات تایید شده توسط کارفرما (بدون اختلاف در میزان مطالبات)",
      description: "قابل طرح در شورای عالی فنی نیست.",
      feildEnabled: false,
      nonFissible: true,
      enum: FinancialStatus.PaymentOfClaimsApprovedByTheEmployer,
    },
    {
      title:
        "پرداخت مطالبات کارهای انجام شده مازاد بر 125 درصد مبلغ اولیه قرارداد (بدون قرارداد مجزا)",
      description:
        "در شورای عالی فنی موضوعیت ندارد. بدیهی است مبالغی که مورد تایید کارفرما است، با طی مراحل قانونی قابل پرداخت است.",
      feildEnabled: false,
      nonFissible: true,
      enum: FinancialStatus.PaymentOfClaimsForCompletedWorksInExcessOf125PercentOfTheInitialContractAmount,
    },
    {
      title: "خسارت دیرکرد در پرداخت مطالبات (پیش¬بینی نشده در قرارداد)",
      description:
        "قابل رسیدگی در شورای عالی فنی نمیباشد و میتواند مطابق مفاد ماده¬های 515 و 522 قانون آیین دادرسی مدنی اقدام شود.",
      feildEnabled: false,
      nonFissible: true,
      enum: FinancialStatus.UnpredictedDamagesForLatePaymentOfClaims,
    },
    {
      title: "خسارت دیرکرد در پرداخت مطالبات (پیش¬بینی شده در قرارداد)",
      description: "",
      feildEnabled: true,
      nonFissible: false,
      enum: FinancialStatus.PredictedDamagesForLatePaymentOfClaims,
    },
    {
      title:
        "اوراق مالی اسلامی (مازاد بر حفظ قدرت خرید پیش¬بینی شده در تصویب¬نامه¬های هیات محترم وزیران نافذ در مورد قرارداد)",
      description: "قابل طرح در شورای عالی فنی نیست.",
      feildEnabled: false,
      nonFissible: true,
      enum: FinancialStatus.MoreThanPurchasingPowerIslamicFinancialBonds,
    },
    {
      title:
        "اوراق مالی اسلامی (با حفظ قدرت خرید پیش¬بینی شده در تصویب¬نامه¬های هیات محترم وزیران نافذ در مورد قرارداد)",
      description: "",
      feildEnabled: true,
      nonFissible: false,
      enum: FinancialStatus.PurchasingPowerIslamicFinancialBonds,
    },
    {
      title: "سایر",
      description: "",
      feildEnabled: true,
      nonFissible: false,
      enum: FinancialStatus.Other,
    },
  ];

  const financialSituationWithoutFinancialEffects = [
    {
      title: "رسیدگی به لایحه تاخیرات",
      description: "",
      feildEnabled: true,
      nonFissible: false,
    },
    {
      title: "تحویل موقت پروژه",
      description: "",
      feildEnabled: true,
      nonFissible: false,
    },
    {
      title: "تحویل دائم پروژه",
      description: "",
      feildEnabled: true,
      nonFissible: false,
    },
  ];

  const [AddArgument] = useAddArgumentToComplaintMutation({
    onCompleted(data) {
      console.log(data);
      props.onClose();
      setArgument({} as ComplaintArgument);
      setFiles(undefined);
      props.isFirst &&
        void updateCompaint({
          variables: {
            id: props.complaintId,
            complaintState: getComplaintStateWithEnum(
              ComplaintStateStatus.WaitingForAccuserToApproveArguments
            ).id,
          },
        });
      props.refetch && props.refetch();
    },
  });
  const [AddNonFeasibleArgument] = useAddNonFeasibleArgumentMutation({
    variables: {
      input: {
        financialSituation: JSON.stringify(financialSituation),
        complaintId: props.complaintId as number,
        userId: user.id,
        summary: Argument?.summary,
        description: Argument?.description,
      },
    },
    onCompleted(data, clientOptions) {
      console.log(data);
      props.onClose();
      setArgument({} as ComplaintArgument);
      setFiles(undefined);
      setNonFissible(false);
      props.refetch && props.refetch();
    },
  });
  const [UpdateArgument] = useUpdateArgumentFullMutation({
    onCompleted(data) {
      console.log(data);
      props.onClose();
      setArgument({} as ComplaintArgument);
      props.refetch && props.refetch();
    },
  });

  const [updateCompaint] = useMutation(UPDATE_COMPLAINT);

  const { data, loading } = useQuery(
    gql`
      query getArgument($id: Int!) {
        complaintArgument_getComplaintArgument(entityId: $id) {
          result {
            id
            summary
            description
            suggestedAmount
            accusedResponse
            complaintId
            councilOpinion
            netCouncilApprovedAmount
            grossCouncilApprovedAmount
            accuserAnswerToAccusedResponse
            accuserAnswerToAccusedResponseFileName
            expertOpinion
            expertOpinionFileName
            expertVerdict
            netApprovedAmount
            grossApprovedAmount
            financialSituation
          }
        }
      }
    `,
    {
      variables: {
        id: props.argumentId,
      },
      onCompleted(data) {
        setFinancialSituation(
          JSON.parse(
            data?.complaintArgument_getComplaintArgument.result
              .financialSituation
          )
        );
      },
    }
  );

  useEffect(() => {
    if (props.argumentId) {
      setArgument(data?.complaintArgument_getComplaintArgument.result);
    }
  }, [data, props.argumentId]);

  loading && <Skeleton variant="rectangular" width={"100%"} height={118} />;
  switch (props.state) {
    case -1:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"پاسخ"}
              variant={"outlined"}
              focused={Argument?.accuserAnswerToAccusedResponse != ""}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.accuserAnswerToAccusedResponse}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  accuserAnswerToAccusedResponse: e.target.value,
                });
              }}
            />

            <Button
              onClick={() => {
                void UpdateArgument({
                  variables: {
                    input: {
                      id: props.argumentId,
                      accuserAnswerToAccusedResponse:
                        Argument?.accuserAnswerToAccusedResponse,
                    },
                  },
                });
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
    case 0:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <RadioGroup
              row
              aria-label="financialSituation"
              name="row-radio-buttons-group"
              value={financialSituation?.title}
              onChange={(e) => {
                setFinancialSituation({
                  title:
                    e.target.value == "withFinancialEffects"
                      ? "withFinancialEffects"
                      : "withoutFinancialEffects",
                  subtitle: undefined,
                  enum: undefined,
                });
              }}
            >
              <FormControlLabel
                value="withFinancialEffects"
                control={<Radio />}
                label="مالی"
              />
              <FormControlLabel
                value="withoutFinancialEffects"
                control={<Radio />}
                label="بدون بار مالی"
              />
            </RadioGroup>

            <TextField
              label={"نوع"}
              variant={"outlined"}
              focused={financialSituation?.subtitle != ""}
              select
              value={financialSituation?.subtitle}
              onChange={(e) => {
                setNonFissible(
                  (financialSituation?.title == "withFinancialEffects" &&
                    financialSituationWithFinancialEffects?.find(
                      (a) => a.title == e.target.value
                    )?.nonFissible) ||
                    false
                );
                setFinancialSituation({
                  ...financialSituation,
                  subtitle: e.target.value,
                  enum:
                    financialSituation?.title == "withFinancialEffects"
                      ? financialSituationWithFinancialEffects?.find(
                          (a) => a.title == e.target.value
                        )?.enum
                      : undefined,
                });
              }}
            >
              {financialSituation?.title == "withFinancialEffects"
                ? financialSituationWithFinancialEffects?.map((a) => (
                    <MenuItem key={a.title} value={a.title}>
                      {a.title}
                    </MenuItem>
                  ))
                : financialSituationWithoutFinancialEffects?.map((a) => (
                    <MenuItem key={a.title} value={a.title}>
                      {a.title}
                    </MenuItem>
                  ))}
            </TextField>

            {financialSituation?.title == "withFinancialEffects" &&
              financialSituationWithFinancialEffects.find(
                (a) => a.title == financialSituation.subtitle
              )?.description && (
                <Typography
                  sx={{
                    color: Green,
                    gridColumn: "span 2",
                    textAlign: "center",
                  }}
                >
                  {
                    financialSituationWithFinancialEffects.find(
                      (a) => a.title == financialSituation.subtitle
                    )?.description
                  }
                </Typography>
              )}
            <TextField
              label={"خلاصه ادعا"}
              variant={"outlined"}
              focused={Argument?.summary != ""}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
                display:
                  financialSituation?.title && financialSituation.subtitle
                    ? financialSituation?.title == "withFinancialEffects"
                      ? financialSituationWithFinancialEffects?.find(
                          (a) => a.title == financialSituation.subtitle
                        )?.feildEnabled
                        ? "block"
                        : "none"
                      : financialSituationWithoutFinancialEffects?.find(
                          (a) => a.title == financialSituation.subtitle
                        )?.feildEnabled
                      ? "block"
                      : "none"
                    : "none",
                gridColumn: "1/3",
              }}
              fullWidth
              value={Argument?.summary}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  summary: e.target.value,
                });
              }}
            />
            <TextField
              label={"مشروح ادعا"}
              variant={"outlined"}
              focused={Argument?.description != ""}
              sx={{
                borderRadius: "1rem",
                display:
                  financialSituation?.title && financialSituation.subtitle
                    ? financialSituation?.title == "withFinancialEffects"
                      ? financialSituationWithFinancialEffects?.find(
                          (a) => a.title == financialSituation.subtitle
                        )?.feildEnabled
                        ? "flex"
                        : "none"
                      : financialSituationWithoutFinancialEffects?.find(
                          (a) => a.title == financialSituation.subtitle
                        )?.feildEnabled
                      ? "flex"
                      : "none"
                    : "none",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
                gridColumn: "1/3",
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.description}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  description: e.target.value,
                });
              }}
            />

            {financialSituation?.title == "withFinancialEffects" && (
              <TextField
                label={"مبلغ ادعا"}
                variant={"outlined"}
                focused={Argument?.suggestedAmount != 0}
                sx={{
                  borderRadius: "1rem",
                  display:
                    financialSituation?.title && financialSituation.subtitle
                      ? financialSituation?.title == "withFinancialEffects"
                        ? financialSituationWithFinancialEffects?.find(
                            (a) => a.title == financialSituation.subtitle
                          )?.feildEnabled
                          ? "flex"
                          : "none"
                        : financialSituationWithoutFinancialEffects?.find(
                            (a) => a.title == financialSituation.subtitle
                          )?.feildEnabled
                        ? "flex"
                        : "none"
                      : "none",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.5rem",
                  },
                }}
                fullWidth
                type="number"
                InputProps={{
                  endAdornment: "ریال",
                }}
                value={
                  Argument?.suggestedAmount == 0
                    ? ""
                    : Argument?.suggestedAmount
                }
                onChange={(e) => {
                  setArgument({
                    ...Argument,
                    suggestedAmount: parseFloat(e.target.value),
                  });
                }}
              />
            )}
            <FileBox
              sx={{
                height: "100%",
                gridRow: "span 2",
                gridColumn: "span 1",
                display:
                  financialSituation?.title && financialSituation.subtitle
                    ? financialSituation?.title == "withFinancialEffects"
                      ? financialSituationWithFinancialEffects?.find(
                          (a) => a.title == financialSituation.subtitle
                        )?.feildEnabled
                        ? "flex"
                        : "none"
                      : financialSituationWithoutFinancialEffects?.find(
                          (a) => a.title == financialSituation.subtitle
                        )?.feildEnabled
                      ? "flex"
                      : "none"
                    : "none",
              }}
              setFiles={setFiles}
              fileTypes={["pdf", "jpeg"]}
              files={files}
            >
              آپلود مستندات
            </FileBox>
            {/* {String(financialSituationWithFinancialEffects?.find(
                        (a) => a.title == financialSituation?.subtitle
                      )?.nonFissible)} */}
            {nonFissible && (
              <Button
                onClick={() => {
                  void AddNonFeasibleArgument({
                    variables: {
                      input: {
                        complaintId: props.complaintId || 0,
                        userId: user.id,
                        financialSituation: JSON.stringify(financialSituation),
                        summary: "",
                        description: "",
                        financialStatus:
                          financialSituationWithFinancialEffects?.find(
                            (a) => a.title == financialSituation?.subtitle
                          )?.enum,
                      },
                    },
                  });
                }}
                sx={{
                  background: primary,
                  color: secondaryDark,
                  borderRadius: "0.5rem",
                  // width: "50%",
                  "&:hover": {
                    background: GreenLight,
                  },
                }}
                variant={"contained"}
              >
                ثبت ادعاهای غیر قابل مطرح
              </Button>
            )}
            {/* 








 */}

            {!nonFissible && (
              <Button
                onClick={() => {
                  if (props.editMode) {
                    if (files) {
                      void UPLOAD_FILE({
                        file: files ? files : undefined,
                        // @ts-ignore
                        token: localStorage.getItem("token")
                          ? localStorage.getItem("token")
                          : undefined,
                        onSuccess(res) {
                          console.log(res);
                          void UpdateArgument({
                            variables: {
                              input: {
                                id: props.argumentId,
                                summary: Argument?.summary,
                                description: Argument?.description,
                                suggestedAmount: Argument.suggestedAmount,
                                // @ts-ignore
                                fileName: res.result[0].newFileName,
                              },
                            },
                          });
                        },
                      });
                    } else {
                      void UpdateArgument({
                        variables: {
                          input: {
                            id: props.argumentId,
                            summary: Argument?.summary,
                            description: Argument?.description,
                            suggestedAmount: Argument.suggestedAmount,
                          },
                        },
                      });
                    }
                  } else if (files)
                    void UPLOAD_FILE({
                      file: files ? files : undefined,
                      // @ts-ignore
                      token: localStorage.getItem("token")
                        ? localStorage.getItem("token")
                        : undefined,
                      onSuccess(res) {
                        console.log(res);
                        void AddArgument({
                          variables: {
                            input: {
                              complaintId: props.complaintId,
                              summary: Argument?.summary,
                              description: Argument?.description,
                              suggestedAmount: Argument.suggestedAmount || 0,
                              fileName: res.result[0].newFileName,
                              userId: user.id,
                              filledBy: RegistrarType.Accuser,
                              financialSituation:
                                JSON.stringify(financialSituation),
                            },
                          },
                        });
                      },
                    });
                  else {
                    void AddArgument({
                      variables: {
                        input: {
                          complaintId: props.complaintId,
                          summary: Argument?.summary,
                          description: Argument?.description,
                          suggestedAmount: Argument.suggestedAmount || 0,
                          userId: user.id,
                          filledBy: RegistrarType.Accuser,
                          financialSituation:
                            JSON.stringify(financialSituation),
                        },
                      },
                    });
                  }
                }}
                sx={{
                  background: primary,
                  color: secondaryDark,
                  borderRadius: "0.5rem",
                  // width: "50%",
                  "&:hover": {
                    background: GreenLight,
                  },
                }}
                variant={"contained"}
              >
                ثبت
              </Button>
            )}
          </Box>
        </NewModal>
      );
    case 1:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"پاسخ"}
              variant={"outlined"}
              focused={Argument?.accusedResponse != ""}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.accusedResponse}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  accusedResponse: e.target.value,
                });
              }}
            />
            <FileBox
              sx={{
                height: "100%",
                gridRow: "span 2",
                gridColumn: "span 1",
              }}
              setFiles={setFiles}
              files={files}
              fileTypes={["pdf", "jpeg"]}
            >
              آپلود مستندات
            </FileBox>

            <Button
              onClick={() => {
                if (files)
                  void UPLOAD_FILE({
                    file: files ? files : undefined,
                    // @ts-ignore
                    token: localStorage.getItem("token")
                      ? localStorage.getItem("token")
                      : undefined,
                    onSuccess(res) {
                      console.log(res);
                      void UpdateArgument({
                        variables: {
                          input: {
                            id: props.argumentId,
                            accusedResponse: Argument?.accusedResponse,
                            accusedResponseFileName: res.result[0].newFileName,
                          },
                        },
                      });
                    },
                  });
                else {
                  void UpdateArgument({
                    variables: {
                      input: {
                        id: props.argumentId,
                        accuserAnswerToAccusedResponse:
                          Argument?.accusedResponse,
                      },
                    },
                  });
                }
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
    case 2:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"نظر کمیته فنی تخصصی به طور مفصل"}
              variant={"outlined"}
              focused={Argument?.expertOpinion != ""}
              sx={{
                borderRadius: "1rem",
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.expertOpinion}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  expertOpinion: e.target.value,
                });
              }}
            />
            <TextField
              label={"متن رای پیشنهادی کمیته فنی تخصصی"}
              variant={"outlined"}
              focused={Argument?.expertVerdict != ""}
              sx={{
                borderRadius: "1rem",
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.expertVerdict}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  expertVerdict: e.target.value,
                });
              }}
            />

            <TextField
              label={"مبلغ خالص مورد تایید کارشناس"}
              variant={"outlined"}
              focused={Argument?.netMailRoomExpertApprovedAmount != 0}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              type="number"
              InputProps={{
                endAdornment: "ریال",
              }}
              value={
                Argument?.netMailRoomExpertApprovedAmount == 0
                  ? ""
                  : Argument?.netMailRoomExpertApprovedAmount
              }
              onChange={(e) => {
                if (
                  Argument?.netMailRoomExpertApprovedAmount >
                  Argument?.suggestedAmount
                ) {
                  alert(
                    "مبلغ خالص مورد تایید کارشناس نمیتواند بیشتر از مبلغ پیشنهادی باشد."
                  );
                  return;
                }
                setArgument({
                  ...Argument,
                  netMailRoomExpertApprovedAmount: parseFloat(e.target.value),
                });
              }}
            />
            <TextField
              label={"مبلغ ناخالص مورد تایید کارشناس"}
              variant={"outlined"}
              focused={Argument?.grossMailRoomExpertApprovedAmount != 0}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              type="number"
              InputProps={{
                endAdornment: "ریال",
              }}
              value={
                Argument?.grossMailRoomExpertApprovedAmount == 0
                  ? ""
                  : Argument?.grossMailRoomExpertApprovedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  grossMailRoomExpertApprovedAmount: parseFloat(e.target.value),
                });
              }}
            />
            <FileBox
              sx={{
                height: "100%",
                gridRow: "span 2",
                gridColumn: "span 1",
              }}
              setFiles={setFiles}
              files={files}
              fileTypes={["pdf", "jpeg"]}
            >
              آپلود مستندات
            </FileBox>

            <Button
              onClick={() => {
                if (files)
                  void UPLOAD_FILE({
                    file: files ? files : undefined,
                    // @ts-ignore
                    token: localStorage.getItem("token")
                      ? localStorage.getItem("token")
                      : undefined,
                    onSuccess(res) {
                      console.log(res);
                      void UpdateArgument({
                        variables: {
                          input: {
                            id: props.argumentId,
                            expertOpinion: Argument?.expertOpinion,
                            expertVerdict: Argument?.expertVerdict,
                            netMailRoomExpertApprovedAmount:
                              Argument.netMailRoomExpertApprovedAmount,
                            grossMailRoomExpertApprovedAmount:
                              Argument.grossMailRoomExpertApprovedAmount,
                            expertOpinionFileName: res.result[0].newFileName,
                          },
                        },
                      });
                    },
                  });
                else {
                  void UpdateArgument({
                    variables: {
                      input: {
                        id: props.argumentId,
                        accuserAnswerToAccusedResponse:
                          Argument?.accusedResponse,
                      },
                    },
                  });
                }
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
    case 6:
      return (
        <NewModal
          open={props.open}
          onClose={props.onClose}
          title={"ثبت ادعا"}
          width={"50vw"}
          height={"80vh"}
          isCloseable={true}
          backgroundColor={background}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              label={"متن رای شورا"}
              variant={"outlined"}
              focused={Argument?.expertOpinion != ""}
              sx={{
                borderRadius: "1rem",
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              multiline
              rows={4}
              value={Argument?.councilOpinion}
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  councilOpinion: e.target.value,
                });
              }}
            />

            <TextField
              label={"مبلغ خالص مورد تایید شورا"}
              variant={"outlined"}
              focused={Argument?.netCouncilApprovedAmount != 0}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              type="number"
              InputProps={{
                endAdornment: "ریال",
              }}
              value={
                Argument?.netCouncilApprovedAmount == 0
                  ? ""
                  : Argument?.netCouncilApprovedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  netCouncilApprovedAmount: parseFloat(e.target.value),
                });
              }}
            />
            <TextField
              label={"مبلغ نا خالص مورد تایید شورا"}
              variant={"outlined"}
              focused={Argument?.grossCouncilApprovedAmount != 0}
              sx={{
                borderRadius: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                },
              }}
              fullWidth
              type="number"
              InputProps={{
                endAdornment: "ریال",
              }}
              value={
                Argument?.grossCouncilApprovedAmount == 0
                  ? ""
                  : Argument?.grossCouncilApprovedAmount
              }
              onChange={(e) => {
                setArgument({
                  ...Argument,
                  grossCouncilApprovedAmount: parseFloat(e.target.value),
                });
              }}
            />

            <Button
              onClick={() => {
                void UpdateArgument({
                  variables: {
                    input: {
                      id: props.argumentId,
                      councilOpinion: Argument?.councilOpinion,
                      netCouncilApprovedAmount:
                        Argument.netCouncilApprovedAmount,
                      grossCouncilApprovedAmount:
                        Argument.grossCouncilApprovedAmount,
                    },
                  },
                  onCompleted(data) {
                    console.log(data);
                    props.onClose();
                    setArgument({} as ComplaintArgument);
                    props.refetch && props.refetch();
                  },
                });
              }}
              sx={{
                background: primary,
                color: secondaryDark,
                borderRadius: "0.5rem",
                display: "flex",
                gap: 3,
                width: "100%",
                "&:hover": {
                  background: GreenLight,
                },
              }}
              variant={"contained"}
            >
              <FaCheck />
              ثبت
            </Button>
          </Box>
        </NewModal>
      );
  }
};

export default ArgumentModal;
