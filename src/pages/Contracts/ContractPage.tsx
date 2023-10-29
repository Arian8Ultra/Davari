/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GET_CONTRACT } from "../../GraphQL/Contracts/Queries";
import {
  ContractSmall,
  UPDATE_CONTRACT_BY_EXPERT,
} from "../../GraphQL/Contracts/Mutations";
import BackButton from "../../components/BackButton";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  List,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  primary,
  secondary,
} from "../../theme/color";
import FaTypography from "../../components/FaComponents/FaTypography";
import FaTextField from "../../components/FaComponents/FaTextField";
import FileBox from "../../components/FileBox";
import { Add } from "@mui/icons-material";
import DateButton from "../../components/DateButton";
import { GET_ALL_ORGANIZATION_USERS } from "../../GraphQL/Users/Queries";
import { UPDATE_COMPLAINT } from "../../GraphQL/Complaints/Mutations";
import states from "../../static/states.json";

const ContractPage = () => {
  const { contractId, complaintId } = useParams<{
    contractId: string;
    complaintId: string;
  }>();
  const [contract, setContract] = useState<ContractSmall>();
  const navigate = useNavigate();
  const [isApproved, setIsApproved] = useState<boolean>(false);
  useQuery(GET_CONTRACT, {
    variables: {
      id: contractId ? parseInt(contractId) : undefined,
    },
    onCompleted(data) {
      const contract = data.contract_getContracts.result
        .items[0] as ContractSmall;
      setContract(contract);
    },
  });

  const [departments, setDepartments] = React.useState<
    { label: string; id: string }[]
  >([]);
  useQuery(GET_ALL_ORGANIZATION_USERS, {
    onCompleted(data) {
      console.log(data);
      setDepartments(
        data?.user_getUsers?.result?.items?.map(
          (item: { id: number; fullName: string }) => ({
            label: item.fullName,
            id: item.id,
          })
        )
      );
    },
    onError(error) {
      console.log(error);
    },
  });

  const [updateByExpert] = useMutation(UPDATE_CONTRACT_BY_EXPERT, {
    variables: {
      isExecutive: isApproved,
      id: contractId ? parseInt(contractId) : undefined,
    },
  });

  const [updateCompaint] = useMutation(UPDATE_COMPLAINT, {
    variables: {
      id: complaintId ? parseInt(complaintId) : undefined,
      complaintState: states.AccuserApprovedArguments.cap,
    },
    onCompleted(data) {
      console.log(data);
      alert("ثبت شد");
    },
  });

  return (
    <>
      <BackButton to="/complaints" />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(6, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"2rem"}
        paddingTop={"0"}
        border={`2px solid ${secondary}`}
        borderRadius={"1rem"}
        position={"relative"}
        marginY={"3rem"}
        paddingX={"25%"}
      >
        <Box
          gridColumn={"span 12"}
          borderRadius={"1rem"}
          sx={{
            position: "sticky",
            top: 100,
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            zIndex: 1000,
          }}
        >
          <FaTypography variant="h6" textAlign={"center"}>
            اطلاعات قرارداد
          </FaTypography>
        </Box>

        <FaTypography
          variant="h6"
          textAlign={"center"}
          sx={{
            gridColumn: "span 6",
          }}
        >
          عنوان قرارداد: {contract?.contractSubjectByAccuser}(خواهان)
        </FaTypography>
        <FaTypography
          variant="h6"
          textAlign={"center"}
          sx={{
            gridColumn: "span 6",
          }}
        >
          عنوان قرارداد: {contract?.contractSubjectByAccused}(خوانده)
        </FaTypography>

        <TextField
          label="شماره قرارداد: "
          variant="outlined"
          sx={{
            gridColumn: "span 3",
          }}
          value={contractId}
          focused
        />
        <Typography
          sx={{
            gridColumn: "span 4",
          }}
        >
          تاریخ انعقاد قرارداد(خواهان) :
          {contract?.contractDateByAccuser
            ? new Date(
                contract.contractDateByAccuser
              ).toLocaleDateString("fa-IR")
            : ""}
        </Typography>
        <Typography
          sx={{
            gridColumn: "span 4",
          }}
        >
          تاریخ انعقاد قرارداد(خوانده) :
          {contract?.contractDateByAccused
            ? new Date(
                contract.contractDateByAccused
              ).toLocaleDateString("fa-IR")
            : ""}
        </Typography>
        <FaTextField
          label="کارفرما"
          sx={{
            width: "100%",
            gridColumn: "span 3",
          }}
          //   disabled
        />
        <FaTextField
          label="طرف قرارداد"
          sx={{
            width: "100%",
            gridColumn: "span 3",
          }}
          //   disabled
        />

        <FaTextField
          label="مبلغ اوليه/ حق‌الزحمه قرارداد: (خوانده)"
          variant="outlined"
          type="text"
          InputProps={{
            endAdornment: "ماه",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={contract?.initialBudgetByAccused}
        />
        <FaTextField
          label="مبلغ اوليه/ حق‌الزحمه قرارداد: (خواهان)"
          variant="outlined"
          type="text"
          InputProps={{
            endAdornment: "ماه",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={contract?.initialBudgetByAccuser}
        />
        <FaTextField
          label="مدت اوليه قرارداد: (خوانده)"
          variant="outlined"
          type="text"
          InputProps={{
            endAdornment: "ماه",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={contract?.initialTimePeriodByAccused}
        />
        <FaTextField
          label="مدت اوليه قرارداد: (خواهان)"
          variant="outlined"
          type="text"
          InputProps={{
            endAdornment: "ماه",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={contract?.initialTimePeriodByAccuser}
        />
        <div
          style={{
            gridColumn: "span 6",
          }}
        />
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"2rem"}
        paddingTop={"0rem"}
        border={`2px solid ${secondary}`}
        borderRadius={"1rem"}
        position={"relative"}
        marginY={"1rem"}
      >
        <Box
          gridColumn={"span 12"}
          borderRadius={"1rem"}
          sx={{
            position: "sticky",
            top: 100,
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            background: primary,
            padding: "0.5rem 1rem",
            userSelect: "none",
            width: "max-content",
            zIndex: 1000,
          }}
        >
          <FaTypography variant="h6" textAlign={"center"}>
            فرم تکمیل اطلاعات قرارداد
          </FaTypography>
        </Box>

        {/* 
    
    
            1- طرفین قرارداد
    
    
        
        */}
        <FaTypography variant="h5" gridColumn={"span 12"}>
          طرفین قرارداد:
        </FaTypography>
        <FaTextField
          label="نام خواهان"
          sx={{
            width: "100%",
            gridColumn: "span 3",
          }}
          value={
            departments.find(
              (item) =>
                contract?.accuserDepartmentUserId &&
                item.id === contract?.accuserDepartmentUserId
            )?.label
          }
          focused
          //   disabled
        />
        {/* {JSON.stringify(departments)}
            <br/>
            <br/>
            <br/>
            {AccusedDepartmentId} */}
        <FaTextField
          label="نام خوانده"
          sx={{
            width: "100%",
            gridColumn: "span 3",
          }}
          value={
            departments.find(
              (item) =>
                contract?.accusedDepartmentUserId &&
                item.id === contract?.accusedDepartmentUserId
            )?.label
          }
          focused
          // disabled
        />

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />
        <FaTypography variant="h5" gridColumn={"span 12"}>
          {"تابعيت خوانده: "}
        </FaTypography>
        <FaTextField
          label="تابعيت : "
          variant="outlined"
          sx={{
            gridColumn: "span 3",
          }}
          SelectProps={{
            MenuProps: {
              sx: {
                maxHeight: "20rem",
              },
            },
          }}
          value={contract?.accuserNationality}
        ></FaTextField>

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          3- مشخصات خوانده (امضاکننده قرارداد)
    
        
        */}

        <FaTypography variant="h5" gridColumn={"span 12"}>
          {"افراد مطلع و مرتبط با پروژه: "}
        </FaTypography>
        <Box
          gridColumn={"span 6"}
          display={"grid"}
          gridTemplateColumns={"repeat(1,1fr)"}
          rowGap={2}
        >
          <FaTypography variant="body1" gridColumn={"span 12"}>
            اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه از
            طرف خواهان:
          </FaTypography>
          <IconButton
            sx={{
              gridColumn: "span 12",
              justifySelf: "start",
              backgroundColor: Green,
              color: "white",
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
              margin: "0rem 2rem",
            }}
          >
            <Add />
          </IconButton>
        </Box>
        <Box
          gridColumn={"span 6"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"flex-start"}
          rowGap={2}
        >
          <FaTypography variant="body1" gridColumn={"span 12"}>
            اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه از
            طرف خوانده:
          </FaTypography>
          {contract?.accusedRelatedPeopleByAccuser &&
            JSON.parse(contract?.accusedRelatedPeopleByAccuser).map(
              (
                item: { name: string },
                index: React.Key | null | undefined
              ) => (
                <Box
                  key={index}
                  display={"grid"}
                  gridTemplateColumns={"repeat(12,1fr)"}
                >
                  <Box
                    gridColumn={{
                      xs: "span 12",
                      lg: "span 8",
                    }}
                    display={"grid"}
                    gridTemplateColumns={"repeat(2,1fr)"}
                    columnGap={"2rem"}
                    padding={"0rem 0rem"}
                  >
                    <FaTypography>{item.name}</FaTypography>
                  </Box>
                </Box>
              )
            )}
        </Box>

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          4- مشخصات قرارداد
    
        
        */}

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          4-7- "ضريب پيشنهادي
    
        
        */}
        <TextField
          label="ضريب پيشنهادي: "
          sx={{
            gridColumn: "span 3",
          }}
          type="number"
          value={contract?.recommendedCoefficientByAccuser}
        />

        <FaTypography variant="h6" gridColumn={"span 1"}>
          {contract?.recommendedCoefficientByAccuser
            ? contract?.recommendedCoefficientByAccuser > 1
              ? (
                  contract?.recommendedCoefficientByAccuser * 100 -
                  100
                ).toPrecision(2) + "% پلوس"
              : (
                  100 -
                  contract?.recommendedCoefficientByAccuser * 100
                ).toPrecision(2) + "% مینوس"
            : ""}
        </FaTypography>
        {/* <RadioGroup defaultValue={CoefficientType} row>
            <FormControlLabel
              value="درصدپلوس"
              control={<Radio />}
              label="درصدپلوس"
              defaultChecked
              checked={CoefficientType === "درصدپلوس"}
              onChange={(e) => {
                // @ts-ignore
                setCoefficientType(e.target.value);
              }}
            />
            <FormControlLabel
              value="مينوس"
              control={<Radio />}
              label="مينوس"
              checked={CoefficientType === "مينوس"}
              onChange={(e) => {
                // @ts-ignore
                setCoefficientType(e.target.value);
              }}
            />
          </RadioGroup> */}

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          4-8- نحوه واگذاري كار
    
        
        */}

        <FormControl
          sx={{
            gridColumn: "span 6",
          }}
        >
          <FormLabel id="demo-row-radio-buttons-group-label">
            نحوه واگذاري كار
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="مناقصه عمومی"
              checked={
                contract?.assigningTypeByAccuser === "مناقصه عمومی"
              }
              control={<Radio />}
              label="مناقصه عمومی"
            />
            <FormControlLabel
              value="مناقصه محدود"
              checked={
                contract?.assigningTypeByAccuser === "مناقصه محدود"
              }
              control={<Radio />}
              label="مناقصه محدود"
            />
            <FormControlLabel
              value="ترك مناقصه"
              checked={
                contract?.assigningTypeByAccuser === "ترك مناقصه"
              }
              control={<Radio />}
              label="ترك مناقصه  "
            />
            <FormControlLabel
              control={<FaTextField label="سایر" />}
              label=""
              value={
                contract?.assigningTypeByAccuser !== "مناقصه " &&
                contract?.assigningTypeByAccuser !== "ترك مناقصه"
                  ? contract?.assigningTypeByAccuser
                  : ""
              }
            />
          </RadioGroup>
        </FormControl>

        {/* 
    
    
          4-10- دوره شاخص مبنا
    
        
        */}

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          4-11- تاريخ شروع كار
    
        
        */}
        <FaTypography variant="h6" gridColumn={"span 2"}>
          تاريخ شروع كار:
        </FaTypography>
        <TextField
          label="تاريخ شروع كار خواهان"
          type="date"
          focused
          sx={{
            gridColumn: "span 3",
          }}
          value={contract?.operationStartDateByAccuser}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        {/* 
    
    
          4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري
    
        
        */}
        <FaTypography variant="h6" gridColumn={"span 5"}>
          پيشرفت فيزيكي كار در تاريخ درخواست داوري:
        </FaTypography>

        <FaTextField
          label="خوانده"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={contract?.physicalProgressInArbitrationDateByAccuser}
        />
        {/* 
    
    
          4-13- پيشرفت ریالی كار در تاريخ درخواست داوري
    
        
        */}
        <FaTypography variant="h6" gridColumn={"span 5"}>
          پيشرفت ریالی كار در تاريخ درخواست داوري:
        </FaTypography>

        <FaTextField
          label="خوانده"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={
            contract?.financialProgressInArbitrationDateByAccuser
          }
        />

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          4-14- وضعیت قرارداد در تاریخ درخواست داوری
    
        
        */}
        <FaTypography variant="h6" gridColumn={"span 4"}>
          وضعیت قرارداد در تاریخ درخواست داوری:
        </FaTypography>

        <FormControl
          sx={{
            gridColumn: "span 12",
          }}
        >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="ابلاغ خاتمه"
              control={<Radio />}
              label="ابلاغ خاتمه"
              checked={contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                "ابلاغ خاتمه"
              )}
            />
            <FormControlLabel
              value="ابلاغ فسخ"
              control={<Radio />}
              label="ابلاغ فسخ"
              checked={contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                "ابلاغ فسخ"
              )}
            />
            <FormControlLabel
              value="جاری"
              control={<Radio />}
              label="جاری"
              checked={contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                "جاری"
              )}
            />
          </RadioGroup>
        </FormControl>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 
    
    
          4-15- دستگاه نظارت (مهندس مشاور) 
    
        
        */}
        <FaTypography variant="body1" gridColumn={"span 2"}>
          غیر مجاز
        </FaTypography>

        <FaTypography variant="body1" gridColumn={"span 5"}>
          خواهان : {contract?.supervisionDepartmentByAccuser}
        </FaTypography>

        <FaTypography variant="body1" gridColumn={"span 5"}>
          خوانده : {contract?.supervisionDepartmentByAccused}
        </FaTypography>
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 6",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        {/* 
    
    
          4-16- تاخیرات
    
        
        */}
        <FaTypography variant="h6" gridColumn={"span 12"}>
          تاخیرات
        </FaTypography>

        <FaTypography variant="body1" gridColumn={"span 2"}>
          غیر مجاز
        </FaTypography>

        <FaTypography variant="body1" gridColumn={"span 5"}>
          خواهان : {contract?.authorizedDelaysByAccuser}
        </FaTypography>

        <FaTypography variant="body1" gridColumn={"span 5"}>
          خوانده : {contract?.authorizedDelaysByAccused}
        </FaTypography>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider
          sx={{
            gridColumn: "span 2",
          }}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <FaTypography variant="body1" gridColumn={"span 2"}>
          غیر مجاز
        </FaTypography>
        <FaTypography variant="body1" gridColumn={"span 5"}>
          خواهان : {contract?.unauthorizedDelaysByAccuser}
        </FaTypography>
        <FaTypography variant="body1" gridColumn={"span 5"}>
          خوانده : {contract?.unauthorizedDelaysByAccused}
        </FaTypography>
        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />
        {/* 
    
    
          توجهات
    
        
        */}
        <FaTypography
          variant="h5"
          fontWeight={800}
          gridColumn={"span 12"}
        >
          توجه مهم: چنانچه در خصوص تاخیرات و یا تبعات ناشی از آن
          اختلافی وجود دارد، لازم است موارد زیر ارسال شوند:
        </FaTypography>
        <FaTypography
          variant="h6"
          fontWeight={800}
          gridColumn={"span 12"}
        >
          گزارش توجیهی تاخیرات قرارداد شامل:
        </FaTypography>
        <List
          sx={{
            gridColumn: "span 6",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingY={"1rem"}
          >
            <FaTypography variant="body1">
              برنامه های زمان‏بندی اولیه و اصلاحی ابلاغ شده
            </FaTypography>
            <FileBox />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingY={"1rem"}
          >
            <FaTypography variant="body1">
              گزارش تهیه شده توسط پیمانکار (به همراه کلیه مستندات و
              پیوست‏ها)
            </FaTypography>
            <FileBox />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingY={"1rem"}
          >
            <FaTypography variant="body1">
              گزارش رسیدگی به تاخیرات توسط مهندس مشاور
            </FaTypography>
            <FileBox />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingY={"1rem"}
          >
            <FaTypography variant="body1">
              مستندات ابلاغ نتایج رسیدگی به تاخیرات به پیمانکار توسط
              کارفرما
            </FaTypography>
            <FileBox />
          </Box>
        </List>
        <Box
          gridColumn={"span 12"}
          display={"grid"}
          gridTemplateColumns={"1fr 1fr"}
          gap={"2rem"}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: Red,
              color: "white",
              "&:hover": {
                backgroundColor: RedLight,
                color: Red,
              },
            }}
            onClick={() => {
              void updateByExpert({
                variables: {
                  isExecutive: false,
                  id: contractId ? parseInt(contractId) : undefined,
                },
                onCompleted(data, clientOptions) {
                  void updateCompaint({
                    variables: {
                      complaintState:
                        states.NotAcceptedForBeingConstructive.cap,
                      id: complaintId
                        ? parseInt(complaintId)
                        : undefined,
                    },
                    onCompleted(data, clientOptions) {
                      console.log(data);
                      alert("ثبت شد");
                      navigate("/portal")
                    },
                  });
                },
              });
            }}
          >
            عدم تاییدعمرانی بودن
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: Green,
              color: "white",
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
            onClick={() => {
              void updateByExpert({
                variables: {
                  isExecutive: true,
                  id: contractId ? parseInt(contractId) : undefined,
                },
                onCompleted(data, clientOptions) {
                  void updateCompaint({
                    variables: {
                      complaintState:
                        states.AddingToComplaintList.cap,
                      id: complaintId
                        ? parseInt(complaintId)
                        : undefined,
                    },
                    onCompleted(data, clientOptions) {
                      console.log(data);
                      alert("ثبت شد");
                      navigate("/portal")
                    },
                  });
                },
              });
            }}
          >
            تایید عمرانی بودن
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContractPage;
