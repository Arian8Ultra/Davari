/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RoundedCorner } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BsUpload } from "react-icons/bs";
import BackButton from "../../../components/BackButton";
import FileButton from "../../../components/FileButton";
import {
  Green,
  GreenLight,
  primary,
  secondary,
  secondaryLight,
} from "../../../theme/color";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CONTRACT } from "../../../GraphQL/Contracts/Queries";
import {
  CREATE_ARBITRATION_TERMS_FORM,
  UPDATE_COMPLAINT,
} from "../../../GraphQL/Complaints/Mutations";
import { useUserStore } from "../../../Context/UserStore";
import FaTypography from "../../../components/FaComponents/FaTypography";
import FileBox from "../../../components/FileBox";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { newStates, newStatesObj } from "../../../static/States";
import TimeLine from "../../../components/TimeLine";

const AddComplaint = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [graphError, setGraphError] = React.useState({
    message: "",
  });
  const [ProjectName, setProjectName] = React.useState("");
  const [ProjectNumber, setProjectNumber] = React.useState("");
  const [FisrtCondition, setFisrtCondition] = React.useState({
    checked: [] as boolean[],
    fileName: "",
  });
  const [SecondCondition, setSecondCondition] = React.useState({
    checked: [] as boolean[],
    fileName: "",
  });
  const [ThirdCondition, setThirdCondition] = React.useState({
    checked: [] as boolean[],
    fileName: "",
  });
  const [FourthCondition, setFourthCondition] = React.useState({
    checked: [] as boolean[],
    fileName: "",
  });
  const [AgreeWithTerms, setAgreeWithTerms] = React.useState(false);

  const complaints = JSON.parse(
    localStorage.getItem("complaints") || "{}"
  );

  const { contractId, complaintId } = useParams();

  const { data, loading, error } = QueryWrapper(
    GET_CONTRACT,
    "contract_getContracts",
    { id: contractId && parseInt(contractId) }
  );
  console.log(data);

  const [createForm] = useMutation(CREATE_ARBITRATION_TERMS_FORM, {
    variables: {
      complaintId: complaintId && parseInt(complaintId),
      userId: user.id,
      filledBy:
        data?.items[0]?.accuserDepartmentUserId == user.id ||
        data?.items[0]?.accuserDepartmentUserId == user.parentId
          ? "ACCUSER"
          : "ACCUSED",
      firstCondition: FisrtCondition.checked.indexOf(true) !== -1,
      firstConditionFileName: FisrtCondition.fileName,
      secondCondition: SecondCondition.checked.indexOf(true) !== -1,
      secondConditionFileName: SecondCondition.fileName,
      thirdCondition: ThirdCondition.checked.indexOf(true) !== -1,
      thirdConditionFileName: ThirdCondition.fileName,
      fourthCondition: FourthCondition.checked.indexOf(true) !== -1,
      fourthConditionFileName: FourthCondition.fileName,
      projectName: ProjectName,
      projectNumber: ProjectNumber,
      hasReadAgreement: true,
    },
  });

  const {
    handleMutation: createFormMutation,
    loading: createFormLoadingMutation,
  } = MutationWrapper(
    CREATE_ARBITRATION_TERMS_FORM,
    "arbitrationTermsForm_addArbitrationTermsForm"
  );

  React.useEffect(() => {
    if (complaints?.FisrtCondition) {
      setFisrtCondition(complaints.FisrtCondition);
      setSecondCondition(complaints.SecondCondition);
      setThirdCondition(complaints.ThirdCondition);
      setFourthCondition(complaints.FourthCondition);
      setAgreeWithTerms(complaints.AgreeWithTerms);
    }
  }, []);

  const firstConditionItems = [
    "عمرانی (تملک دارایی سرمایه ای)",
    "غیرعمرانی",
  ];
  const secondConditionItems = [
    "در ماده حل اختلاف قرارداد، داوری شورای عالی فنی درج شده است.",
    "طرفین پس از عقد قرارداد، بر داوری شورا تراضی نموده اند.",
    "فاقد تراضی روی داوری شورا در حین قرارداد یا پس از آن.",
  ];

  const thirdConditionItems = [
    "صورتحساب نهایی توسط پیمانکار امضا نشده است.",
    "صورتحساب نهایی بدون امضای پیمانکار، به پیمانکار ابلاغ شده است؛ اما پیمانکار ظرف مهلت مقرر در قرارداد به آن اعتراض نموده است.",
    "صورتحساب نهایی توسط پیمانکار امضا شده است اما صرفا دعاوی مربوط به آزادسازی ضمانتنامه ها مورد درخواست است.",
    "هیچ یک از موارد فوق.",
  ];

  const fourthConditionItems = [
    "رای قطعی در خصوص دعاوی مورد درخواست توسط مراجع قضایی و شورا صادر نشده است.",
    "رای قطعی در خصوص دعاوی مورد درخواست توسط مراجع قضایی صادر شده است.",
    "رای قطعی در خصوص دعاوی مورد درخواست توسط شورا صادر شده است.",
    "قرار عدم صلاحیت (استماع) توسط مراجع قضایی صادر شده است.",
  ];

  const [updateCompaint] = useMutation(UPDATE_COMPLAINT, {
    variables: {
      id: complaintId ? parseInt(complaintId) : 0,
      complaintState:
        data?.items[0]?.accuserDepartmentUserId == user.id ||
        data?.items[0]?.accuserDepartmentUserId == user.parentId
          ? newStatesObj.waitingForAccuserToRegisterArguments.cap
          : newStatesObj.waitingForAccusedToAnswerArguments.cap,
    },
    onCompleted() {
      console.log(
        "state",
        data?.items[0]?.accuserDepartmentUserId == user.id ||
          data?.items[0]?.accuserDepartmentUserId == user.parentId
          ? newStatesObj.waitingForAccuserToRegisterArguments.cap
          : newStatesObj.waitingForAccusedToAnswerArguments.cap
      );
      console.log(data);
      alert("ثبت شد");
      if (
        data?.items[0]?.accuserDepartmentUserId == user.id ||
        data?.items[0]?.accuserDepartmentUserId == user.parentId
      ) {
        navigate(
          `/complaints/${contractId}/${complaintId}/addArguements/0`
        );
      }else{
        navigate(
          `/complaints/${contractId}/${complaintId}/addArguements/1`
        );
      }
    },
  });
  return (
    <>
      <BackButton />
      <TimeLine stage={3} />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"3rem"}
        my={'3rem'}
        border={`2px solid ${secondary}`}
        borderRadius={"1rem"}
        position={"relative"}
      >
        <Box
          gridColumn={"span 12"}
          borderRadius={"1rem"}
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
          }}
        >
          <FaTypography variant="h4" textAlign={"center"}>
            {"فرم احراز شرایط داوری توسط " +
              (data?.items[0]?.accuserDepartmentUserId == user.id ||
              data?.items[0]?.accuserDepartmentUserId == user.parentId
                ? "خواهان"
                : "خوانده")}
          </FaTypography>
        </Box>
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FormControlLabel
          label="شرط اول (عمرانی بودن محل اعتبار طرح)"
          sx={{
            cursor: "default",
            gridColumn: "span 9",
          }}
          control={
            <Checkbox
              checked={FisrtCondition.checked[0] || false}
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              icon={<RoundedCorner />}
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <Box sx={{ gridColumn: "span 3" }}>
          <FileButton
            text="افزودن مستندات"
            textColor={primary}
            borderRadius="0.5rem"
          >
            <BsUpload
              style={{
                marginInline: "0.5rem",
              }}
            />
          </FileButton>
        </Box>
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={"عمرانی (تملک دارایی سرمایه ای)"}
            control={
              <Checkbox
                checked={FisrtCondition.checked[0] || false}
                onChange={(e) => {
                  setFisrtCondition({
                    ...FisrtCondition,
                    checked: [e.target.checked, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={"غیرعمرانی"}
            control={
              <Checkbox
                checked={FisrtCondition.checked[1] || false}
                onChange={(e) => {
                  setFisrtCondition({
                    ...FisrtCondition,
                    checked: [false, e.target.checked, false],
                  });
                }}
              />
            }
          />
        </FormGroup>

        
        <TextField
          label="نام پروژه"
          variant="outlined"
          sx={{ gridColumn: "span 6",display: FisrtCondition.checked[0]? "grid" : "none"}}
          value={ProjectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />

        <TextField
          label="شماره پروژه"
          variant="outlined"
          sx={{ gridColumn: "span 6",display: FisrtCondition.checked[0]? "grid" : "none"}}
          value={ProjectNumber}
          onChange={(e) => {
            setProjectNumber(e.target.value);
          }}
        />

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FormControlLabel
          label="شرط دوم (تراضی بر داوری شورا)"
          sx={{
            cursor: "default",
            gridColumn: "span 9",
          }}
          control={
            <Checkbox
              checked={
                SecondCondition.checked[0] ||
                SecondCondition.checked[1] ||
                false
              }
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              icon={<RoundedCorner />}
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <Box sx={{ gridColumn: "span 3" }}>
          <FileButton
            text="افزودن مستندات"
            textColor={primary}
            borderRadius="0.5rem"
          >
            <BsUpload
              style={{
                marginInline: "0.5rem",
              }}
            />
          </FileButton>
        </Box>
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={
              "در ماده حل اختلاف قرارداد، داوری شورای عالی فنی درج شده است."
            }
            control={
              <Checkbox
                checked={SecondCondition.checked[0] || false}
                onChange={(e) => {
                  setSecondCondition({
                    ...SecondCondition,
                    checked: [e.target.checked, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "طرفین پس از عقد قرارداد، بر داوری شورا تراضی نموده اند."
            }
            control={
              <Checkbox
                checked={SecondCondition.checked[1] || false}
                onChange={(e) => {
                  setSecondCondition({
                    ...SecondCondition,
                    checked: [false, e.target.checked, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "فاقد تراضی روی داوری شورا در حین قرارداد یا پس از آن."
            }
            control={
              <Checkbox
                checked={SecondCondition.checked[2] || false}
                onChange={(e) => {
                  setSecondCondition({
                    ...SecondCondition,
                    checked: [false, false, e.target.checked],
                  });
                }}
              />
            }
          />
        </FormGroup>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FormControlLabel
          label="شرط سوم (عدم تسویه حساب)"
          sx={{
            cursor: "default",
            gridColumn: "span 9",
          }}
          control={
            <Checkbox
              checked={
                ThirdCondition.checked[0] ||
                ThirdCondition.checked[1] ||
                ThirdCondition.checked[2] ||
                false
              }
              icon={<RoundedCorner />}
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <Box sx={{ gridColumn: "span 3" }}>
          <FileButton
            text="افزودن مستندات"
            textColor={primary}
            borderRadius="0.5rem"
          >
            <BsUpload
              style={{
                marginInline: "0.5rem",
              }}
            />
          </FileButton>
        </Box>
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={"صورتحساب نهایی توسط پیمانکار امضا نشده است."}
            control={
              <Checkbox
                checked={ThirdCondition.checked[0] || false}
                onChange={(e) => {
                  setThirdCondition({
                    ...ThirdCondition,
                    checked: [e.target.checked, false, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "صورتحساب نهایی بدون امضای پیمانکار، به پیمانکار ابلاغ شده است؛ اما پیمانکار ظرف مهلت مقرر در قرارداد به آن اعتراض نموده است."
            }
            control={
              <Checkbox
                checked={ThirdCondition.checked[1] || false}
                onChange={(e) => {
                  setThirdCondition({
                    ...ThirdCondition,
                    checked: [false, e.target.checked, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "صورتحساب نهایی توسط پیمانکار امضا شده است اما صرفا دعاوی مربوط به آزادسازی ضمانتنامه ها مورد درخواست است."
            }
            control={
              <Checkbox
                checked={ThirdCondition.checked[2] || false}
                onChange={(e) => {
                  setThirdCondition({
                    ...ThirdCondition,
                    checked: [false, false, e.target.checked, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={"هیچ یک از موارد فوق."}
            control={
              <Checkbox
                checked={ThirdCondition.checked[3] || false}
                onChange={(e) => {
                  setThirdCondition({
                    ...ThirdCondition,
                    checked: [false, false, false, e.target.checked],
                  });
                }}
              />
            }
          />
        </FormGroup>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FormControlLabel
          label="شرط چهارم (عدم طرح در مراجع قضایی یا داوری)"
          sx={{
            cursor: "default",
            gridColumn: "span 9",
          }}
          control={
            <Checkbox
              checked={
                FourthCondition.checked[0] ||
                FourthCondition.checked[3] ||
                false
              }
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              icon={<RoundedCorner />}
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <Box sx={{ gridColumn: "span 3" }}>
          <FileButton
            text="افزودن مستندات"
            textColor={primary}
            borderRadius="0.5rem"
          >
            <BsUpload
              style={{
                marginInline: "0.5rem",
              }}
            />
          </FileButton>
        </Box>
        <FormGroup
          sx={{
            gridColumn: "2/span 7",
          }}
        >
          <FormControlLabel
            label={
              "رای قطعی در خصوص دعاوی مورد درخواست توسط مراجع قضایی و شورا صادر نشده است."
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[0] || false}
                onChange={(e) => {
                  setFourthCondition({
                    ...FourthCondition,
                    checked: [e.target.checked, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "رای قطعی در خصوص دعاوی مورد درخواست توسط مراجع قضایی صادر شده است."
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[1] || false}
                onChange={(e) => {
                  setFourthCondition({
                    ...FourthCondition,
                    checked: [false, e.target.checked],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "رای قطعی در خصوص دعاوی مورد درخواست توسط شورا صادر شده است."
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[2] || false}
                onChange={(e) => {
                  setFourthCondition({
                    ...FourthCondition,
                    checked: [false, false, e.target.checked],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "قرار عدم صلاحیت (استماع) توسط مراجع قضایی صادر شده است."
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[3] || false}
                onChange={(e) => {
                  setFourthCondition({
                    ...FourthCondition,
                    checked: [false, false, false, e.target.checked],
                  });
                }}
              />
            }
          />
        </FormGroup>

        <Box
          gridColumn={"span 2"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <FileBox disabled={!FourthCondition.checked[1]} />
          <FileBox disabled={!FourthCondition.checked[2]} />
        </Box>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FormControlLabel
          label={
            "این خواهان/خوانده شیوه نامه داوری شورای عالی فنی را مطالعه نموده و موافقت خود را با آن اعلام می دارد."
          }
          sx={{
            gridColumn: "span 6",
          }}
          control={
            <Checkbox
              checked={AgreeWithTerms}
              onChange={(e) => {
                setAgreeWithTerms(e.target.checked);
              }}
            />
          }
        />

        <Button
          variant="contained"
          sx={{
            gridColumn: "10 / span 3",
            width: "max-content",
            justifySelf: "center",
          }}
        >
          دانلود شیوه نامه داوری شورای عالی فنی
        </Button>

        <Button
          variant="contained"
          sx={{
            gridColumn: "span 6",
            background: secondary,
            color: "white",
            width: "max-content",
            justifySelf: "center",
            padding: "0.5rem 3rem",
            "&:hover": {
              background: secondaryLight,
              color: primary,
            },
          }}
          onClick={() => {
            localStorage.setItem(
              "complaints",
              JSON.stringify({
                FisrtCondition,
                SecondCondition,
                ThirdCondition,
                FourthCondition,
                AgreeWithTerms,
              })
            );
            alert("ذخیره شد");
          }}
        >
          ذخیره موقت
        </Button>
        <Button
          variant="contained"
          sx={{
            gridColumn: "span 6",
            background: Green,
            color: "white",
            width: "max-content",
            justifySelf: "center",
            padding: "0.5rem 3rem",
            "&:hover": {
              background: GreenLight,
              color: Green,
            },
          }}
          onClick={() => {
            localStorage.setItem(
              "complaints",
              JSON.stringify({
                FisrtCondition,
                SecondCondition,
                ThirdCondition,
                FourthCondition,
                AgreeWithTerms,
              })
            );
            console.log("FisrtCondition", FisrtCondition);
            console.log(
              "FisrtConditionSelected",
              firstConditionItems[
                FisrtCondition.checked.indexOf(true)
              ]
            );
            console.log("SecondCondition", SecondCondition);
            console.log(
              "SecondConditionSelected",
              secondConditionItems[
                SecondCondition.checked.indexOf(true)
              ]
            );
            console.log("ThirdCondition", ThirdCondition);
            console.log(
              "ThirdConditionSelected",
              thirdConditionItems[
                ThirdCondition.checked.indexOf(true)
              ]
            );
            console.log("FourthCondition", FourthCondition);
            console.log(
              "FourthConditionSelected",
              fourthConditionItems[
                FourthCondition.checked.indexOf(true)
              ]
            );
            console.log("AgreeWithTerms", AgreeWithTerms);
            contractId &&
              complaintId &&
              void createFormMutation({
                variables: {
                  complaintId: complaintId && parseInt(complaintId),
                  userId: user.id,
                  filledBy:
                    data?.items[0]?.accuserDepartmentUserId ==
                      user.id ||
                    data?.items[0]?.accuserDepartmentUserId ==
                      user.parentId
                      ? "ACCUSER"
                      : "ACCUSED",
                  firstCondition:
                    firstConditionItems[
                      FisrtCondition.checked.indexOf(true)
                    ],
                  firstConditionFileName:
                    FisrtCondition.fileName || undefined,
                  secondCondition:
                    secondConditionItems[
                      SecondCondition.checked.indexOf(true)
                    ],
                  secondConditionFileName:
                    SecondCondition.fileName || undefined,
                  thirdCondition:
                    thirdConditionItems[
                      ThirdCondition.checked.indexOf(true)
                    ],
                  thirdConditionFileName:
                    ThirdCondition.fileName || undefined,
                  fourthCondition:
                    fourthConditionItems[
                      FourthCondition.checked.indexOf(true)
                    ],
                  fourthConditionFileName:
                    FourthCondition.fileName || undefined,
                  projectName: ProjectName,
                  projectNumber: ProjectNumber,
                  hasReadAgreement: AgreeWithTerms,
                },
                options: {
                  onCompleted(data, clientOptions) {
                    console.log(data);
                  },
                },
              }).then((res: any) => {
                if (res instanceof Error) {
                  setGraphError({
                    message: res.message,
                  });
                } else {
                  void updateCompaint();
                  // navigate(
                  //   `/complaints/${contractId}/${complaintId}/addArguements/0`
                  // );
                }
              });
            // void createForm({
            //   onCompleted(data, clientOptions) {
            //     navigate(
            //       `/complaints/${contractId}/${complaintId}/addArguements/0`
            //     );
            //   },
            //   onError(error) {
            //     console.log(error);
            //     navigate(
            //       `/complaints/${contractId}/${complaintId}/addArguements/0`
            //     );
            //   },
            // });
          }}
        >
          ادامه
        </Button>
        {graphError.message && (
          <Typography
            variant="body1"
            sx={{
              gridColumn: "span 12",
              color: "red",
              textAlign: "center",
            }}
          >
            {graphError.message}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default AddComplaint;
