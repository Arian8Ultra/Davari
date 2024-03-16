/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation } from "@apollo/client";
import { CancelRounded, CheckBoxRounded } from "@mui/icons-material";
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
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import {
  CREATE_ARBITRATION_TERMS_FORM
} from "../../../GraphQL/Complaints/Mutations";
import { GET_CONTRACT } from "../../../GraphQL/Contracts/Queries";
import { MutationWrapper } from "../../../GraphQL/MutationWrapper";
import { QueryWrapper } from "../../../GraphQL/QueryWrapper";
import BackButton from "../../../components/BackButton";
import FaTypography from "../../../components/FaComponents/FaTypography";
import FileBox from "../../../components/FileBox";
import TimeLine from "../../../components/TimeLine";
import {
  Green,
  Red,
  primary,
  primaryLight,
  secondary,
  secondaryDark
} from "../../../theme/color";
// @ts-ignore
import { API_FILE_SHIVENAME } from "../../../../config";
import {
  UpdateComplaintDocument,
  useGetComplaintsWithFilterQuery,
  useSmsComplaintAddedMutation
} from "../../../../generated-types";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import { ComplaintStateStatus } from "../../../gql/graphql";

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

  const complaints = JSON.parse(localStorage.getItem("complaints") || "{}");

  const { contractId, complaintId } = useParams();

  const { data, loading, error } = QueryWrapper(
    GET_CONTRACT,
    "contract_getContracts",
    { id: contractId && parseInt(contractId) }
  );
  console.log(data);

  const [sendSms] = useSmsComplaintAddedMutation({
    variables: {
      id: complaintId ? parseInt(complaintId) : 0,
    },
  });

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

  const { handleMutation: createFormMutation } = MutationWrapper(
    CREATE_ARBITRATION_TERMS_FORM,
    "arbitrationTermsForm_addArbitrationTermsForm"
  );

  React.useEffect(() => {
    if (complaints?.FisrtCondition && complaints?.ComplaintId == complaintId) {
      setFisrtCondition(complaints.FisrtCondition);
      setSecondCondition(complaints.SecondCondition);
      setThirdCondition(complaints.ThirdCondition);
      setFourthCondition(complaints.FourthCondition);
      setAgreeWithTerms(complaints.AgreeWithTerms);
    }
  }, []);

  const firstConditionItems = ["عمرانی (تملک دارایی سرمایه ای)", "غیرعمرانی"];
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
    "در دادگاه مطرح نشده. (در صورت انتخاب این گزینه، فایلی برای آپلود نیاز نیست)",
    "در دست رسیدگی در دادگاه میباشد.",
  ];

  const [updateCompaint] = useMutation(UpdateComplaintDocument, {
    variables: {
      id: complaintId ? parseInt(complaintId) : 0,
      complaintStateId:
        data?.items[0]?.accuserDepartmentUserId == user.id ||
        data?.items[0]?.accuserDepartmentUserId == user.parentId
          ? getComplaintStateWithEnum(
              ComplaintStateStatus.WaitingForAccuserToRegisterArguments
            ).id
          : getComplaintStateWithEnum(
              ComplaintStateStatus.WaitingForAccusedToAnswerArguments
            ).id,
    },
    onCompleted() {
      console.log(data);
      alert("ثبت شد");
      if (
        data?.items[0]?.accuserDepartmentUserId == user.id ||
        data?.items[0]?.accuserDepartmentUserId == user.parentId
      ) {
        navigate(`/complaints/${contractId}/${complaintId}/addArguements/0`);
        // sendSms();
      } else {
        navigate(`/complaints/${contractId}/${complaintId}/addArguements/1`);
      }
    },
  });

  const { data: complaintData } = useGetComplaintsWithFilterQuery({
    variables: {
      filter: {
        id: {
          eq: parseInt(complaintId || "") || 0,
        },
      },
    },
  });
  return (
    <>
      <TimeLine stage={4} />
      <BackButton
        to={`/complaints/${contractId}/${complaintId}/tablesPage`}
        label=" و ویرایش"
      />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"3rem"}
        my={"3rem"}
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
        {/* <Divider sx={{ gridColumn: "span 12" }} /> */}
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
              icon={
                <CancelRounded
                  sx={{
                    color: Red,
                  }}
                />
              }
              checkedIcon={
                <CheckBoxRounded
                  sx={{
                    color: Green,
                  }}
                />
              }
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <Box sx={{ gridColumn: "span 2" }}>
          <FileBox />
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
          label="شماره طرح"
          variant="outlined"
          sx={{
            gridColumn: "span 6",
            display: FisrtCondition.checked[0] ? "grid" : "none",
          }}
          value={ProjectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />

        <TextField
          label="شماره پروژه"
          variant="outlined"
          sx={{
            gridColumn: "span 6",
            display: FisrtCondition.checked[0] ? "grid" : "none",
          }}
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
              icon={
                <CancelRounded
                  sx={{
                    color: Red,
                  }}
                />
              }
              checkedIcon={
                <CheckBoxRounded
                  sx={{
                    color: Green,
                  }}
                />
              }
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <Box sx={{ gridColumn: "span 2" }}>
          <FileBox />
        </Box>
        <FormGroup
          sx={{
            gridColumn: "2/span 9",
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
            label={"طرفین پس از عقد قرارداد، بر داوری شورا تراضی نموده اند."}
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
            label={"فاقد تراضی روی داوری شورا در حین قرارداد یا پس از آن."}
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
              icon={
                <CancelRounded
                  sx={{
                    color: Red,
                  }}
                />
              }
              checkedIcon={
                <CheckBoxRounded
                  sx={{
                    color: Green,
                  }}
                />
              }
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
        {/* <Box sx={{ gridColumn: "span 2" }}>
          <FileBox />
        </Box> */}
        <FormGroup
          sx={{
            gridColumn: "2/span 8",
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

        <Box
          gridColumn={"span 2"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <FileBox title="صورت حساب نهایی" />
          <FileBox title="نامه ابلاغ" />
          <FileBox
            disabled={!(ThirdCondition.checked[2] || ThirdCondition.checked[1])}
            title="مستندات اعتراض پیمانکار"
          />
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
              icon={
                <CancelRounded
                  sx={{
                    color: Red,
                  }}
                />
              }
              checkedIcon={
                <CheckBoxRounded
                  sx={{
                    color: Green,
                  }}
                />
              }
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <FormGroup
          sx={{
            gridColumn: "2/span 8",
          }}
        >
          {/* <FormControlLabel
            label={
              "در دادگاه مطرح نشده. (در صورت انتخاب این گزینه، فایلی برای آپلود نیاز نیست)"
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[4] || false}
                onChange={(e) => {
                  setFourthCondition({
                    ...FourthCondition,
                    checked: [false, false, false,false, e.target.checked],
                  });
                }}
              />
            }
          /> */}
          <FormControlLabel
            label={"در دست رسیدگی در دادگاه میباشد."}
            control={
              <Checkbox
                checked={FourthCondition.checked[5] || false}
                onChange={(e) => {
                  setFourthCondition({
                    ...FourthCondition,
                    checked: [
                      false,
                      false,
                      false,
                      false,
                      false,
                      e.target.checked,
                    ],
                  });
                }}
              />
            }
          />
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
            label={"قرار عدم صلاحیت (استماع) توسط مراجع قضایی صادر شده است."}
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
          <FileBox disabled={!FourthCondition.checked[5]} />
          <div className=""></div>
          <div className=""></div>
          <FileBox disabled={!FourthCondition.checked[1]} />
          <FileBox disabled={!FourthCondition.checked[2]} />
          <FileBox disabled={!FourthCondition.checked[3]} />
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
        {/* خواهان خوانده نمیشه به دلیل شرایط */}
        <FormControlLabel
          label={`این ${
            complaintData?.complaint_getComplaints?.result?.items?.[0]?.contract
              ?.accuserDepartmentUserId == user.id
              ? "خواهان"
              : complaintData?.complaint_getComplaints?.result?.items?.[0]
                  ?.contract?.accuserDepartmentUserId == user.parentId
              ? "خواهان"
              : "خوانده"
          } شیوه نامه داوری شورای عالی فنی را مطالعه نموده و موافقت خود را با آن اعلام می دارد.`}
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
          variant="text"
          sx={{
            gridColumn: "10 / span 3",
            width: "max-content",
            justifySelf: "center",
            textDecoration: "underline",
          }}
          href={`${API_FILE_SHIVENAME}`}
        >
          دانلود شیوه نامه داوری شورای عالی فنی
        </Button>

        <Typography
          variant="body1"
          sx={{ gridColumn: "span 12", textAlign: "start" }}
        >
          با توجه به اظهار{" "}
          {complaintData?.complaint_getComplaints?.result?.items?.[0]?.contract
            ?.accuserDepartmentUserId == user.id ||
          complaintData?.complaint_getComplaints?.result?.items?.[0]?.contract
            ?.accuserDepartmentUserId == user.parentId
            ? "خواهان"
            : "خوانده"}
          ،{" "}
          <span
            style={{
              color:
                (FourthCondition.checked[0] || FourthCondition.checked[3]) &&
                (ThirdCondition.checked[0] ||
                  ThirdCondition.checked[1] ||
                  ThirdCondition.checked[2]) &&
                (SecondCondition.checked[0] || SecondCondition.checked[1]) &&
                FisrtCondition.checked[0]
                  ? Green
                  : Red,
            }}
          >
            {(FourthCondition.checked[0] || FourthCondition.checked[3]) &&
            (ThirdCondition.checked[0] ||
              ThirdCondition.checked[1] ||
              ThirdCondition.checked[2]) &&
            (SecondCondition.checked[0] || SecondCondition.checked[1]) &&
            FisrtCondition.checked[0]
              ? "حائز "
              : "فاقد "}
          </span>
          شرایط داوری است و نتیجه قطعی پس از بررسی های لازم اعلام خواهد شد.
        </Typography>

        <Box
          sx={{
            gridColumn: "span 12",
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              justifySelf: "center",
              padding: "0.5rem 3rem",
              borderRadius: "2rem",
              boxShadow: "none",
              // "&:hover": {
              //   background: secondaryLight,
              //   color: primary,
              // },
            }}
            onClick={() => {
              localStorage.setItem(
                "complaints",
                JSON.stringify({
                  ComplaintId: complaintId,
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
              background: primary,
              color: secondaryDark,
              borderRadius: "2rem",
              boxShadow: "none",
              justifySelf: "center",
              padding: "0.5rem 3rem",
              fontWeight: "bold",
              "&:hover": {
                background: primaryLight,
                color: secondaryDark,
                boxShadow: "none",
              },
            }}
            onClick={() => {
              localStorage.setItem(
                "complaints",
                JSON.stringify({
                  ComplaintId: complaintId,
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
                firstConditionItems[FisrtCondition.checked.indexOf(true)]
              );
              console.log("SecondCondition", SecondCondition);
              console.log(
                "SecondConditionSelected",
                secondConditionItems[SecondCondition.checked.indexOf(true)]
              );
              console.log("ThirdCondition", ThirdCondition);
              console.log(
                "ThirdConditionSelected",
                thirdConditionItems[ThirdCondition.checked.indexOf(true)]
              );
              console.log("FourthCondition", FourthCondition);
              console.log(
                "FourthConditionSelected",
                fourthConditionItems[FourthCondition.checked.indexOf(true)]
              );
              console.log("AgreeWithTerms", AgreeWithTerms);
              contractId &&
                complaintId &&
                void createFormMutation({
                  variables: {
                    complaintId: complaintId && parseInt(complaintId),
                    userId: user.id,
                    filledBy:
                      data?.items[0]?.accuserDepartmentUserId == user.id ||
                      data?.items[0]?.accuserDepartmentUserId == user.parentId
                        ? "ACCUSER"
                        : "ACCUSED",
                    firstCondition:
                      firstConditionItems[FisrtCondition.checked.indexOf(true)],
                    firstConditionFileName:
                      FisrtCondition.fileName || undefined,
                    secondCondition:
                      secondConditionItems[
                        SecondCondition.checked.indexOf(true)
                      ],
                    secondConditionFileName:
                      SecondCondition.fileName || undefined,
                    thirdCondition:
                      thirdConditionItems[ThirdCondition.checked.indexOf(true)],
                    // thirdConditionFileName:
                    //   ThirdCondition.fileName || undefined,
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
                  }
                });
            }}
          >
            ادامه
          </Button>
        </Box>

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
