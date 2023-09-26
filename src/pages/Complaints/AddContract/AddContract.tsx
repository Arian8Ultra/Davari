/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation } from "@apollo/client";
import { Add } from "@mui/icons-material";
import {
  Alert,
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
import React from "react";
import { CREATE_CONTRACT } from "../../../GraphQL/Contracts/Mutations";
import BackButton from "../../../components/BackButton";
import countries from "../../../static/Countries";
import { Green, GreenLight, primary } from "../../../theme/color";
import { useNavigate } from "react-router-dom";

const AddContract = () => {
  const navigate = useNavigate();
  const [RelatedPeople, setRelatedPeople] = React.useState([
    { name: "" as string, phone: "" as string },
  ]);
  const [RelatedPeopleError, setRelatedPeopleError] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [AccuserNationality, setAccuserNationality] =
    React.useState("");
  const [AccuserNationalityError, setAccuserNationalityError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [AccusedNationality, setAccusedNationality] =
    React.useState("");
  const [AccusedNationalityError, setAccusedNationalityError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [contratDetails, setContratDetails] = React.useState({
    contratTypes: [] as string[],
    other: false as boolean,
    CircularNumber: "" as string,
    CircularDate: "" as string,
  });
  const [contratDetailsError, setContratDetailsError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [ContractSubject, setContractSubject] = React.useState("");
  const [ContractSubjectError, setContractSubjectError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [ContractNumber, setContractNumber] = React.useState("");
  const [ContractNumberError, setContractNumberError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [ContractDate, setContractDate] = React.useState("");
  const [ContractDateError, setContractDateError] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [InitialBudget, setInitialBudget] = React.useState("");
  const [InitialBudgetError, setInitialBudgetError] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [InitialTimePeriod, setInitialTimePeriod] =
    React.useState("");
  const [InitialTimePeriodError, setInitialTimePeriodError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [
    PriceListOfBasicUnitOfField,
    setPriceListOfBasicUnitOfField,
  ] = React.useState([{ year: "" as string, price: "" as string }]);
  const [
    PriceListOfBasicUnitOfFieldError,
    setPriceListOfBasicUnitOfFieldError,
  ] = React.useState([
    { error: false as boolean, text: "" as string },
  ]);

  const [
    IsSpecialPriceListAttachedToContract,
    setIsSpecialPriceListAttachedToContract,
  ] = React.useState(false);

  const [RecommendedCoefficient, setRecommendedCoefficient] =
    React.useState("");
  const [
    RecommendedCoefficientError,
    setRecommendedCoefficientError,
  ] = React.useState([
    { error: false as boolean, text: "" as string },
  ]);

  const [CoefficientType, setCoefficientType] = React.useState("");
  const [CoefficientTypeError, setCoefficientTypeError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [AssigningType, setAssigningType] = React.useState("");
  const [AssigningTypeError, setAssigningTypeError] = React.useState([
    { error: false as boolean, text: "" as string },
  ]);
  const [DoesContainAdjustment, setDoesContainAdjustment] =
    React.useState(true);
  const [DoesContainAdjustmentEror] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [BaseIndexPeriod, setBaseIndexPeriod] = React.useState({
    month: "",
    year: "",
  });
  const [BaseIndexPeriodError, setBaseIndexPeriodError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [OperationStartDateAccuser, setOperationStartDateAccuser] =
    React.useState("");
  const [
    OperationStartDateAccuserError,
    setOperationStartDateAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [OperationStartDateAccused, setOperationStartDateAccused] =
    React.useState("");
  const [
    OperationStartDateAccusedError,
    setOperationStartDateAccusedError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    PhysicalProgressInArbitrationDateAccuser,
    setPhysicalProgressInArbitrationDateAccuser,
  ] = React.useState("");
  const [
    PhysicalProgressInArbitrationDateAccuserError,
    setPhysicalProgressInArbitrationDateAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    PhysicalProgressInArbitrationDateAccused,
    setPhysicalProgressInArbitrationDateAccused,
  ] = React.useState("");
  const [
    PhysicalProgressInArbitrationDateAccusedError,
    setPhysicalProgressInArbitrationDateAccusedError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    FinancialProgressInArbitrationDateAccuser,
    setFinancialProgressInArbitrationDateAccuser,
  ] = React.useState("");
  const [
    FinancialProgressInArbitrationDateAccuserError,
    setFinancialProgressInArbitrationDateAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    FinancialProgressInArbitrationDateAccused,
    setFinancialProgressInArbitrationDateAccused,
  ] = React.useState("");
  const [
    FinancialProgressInArbitrationDateAccusedError,
    setFinancialProgressInArbitrationDateAccusedError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    ContractStatusInArbitration,
    setContractStatusInArbitration,
  ] = React.useState("");
  const [
    ContractStatusInArbitrationError,
    setContractStatusInArbitrationError,
  ] = React.useState([
    { error: false as boolean, text: "" as string },
  ]);
  const [
    ContractStatusInArbitrationDate,
    setContractStatusInArbitrationDate,
  ] = React.useState("");
  const [
    ContractStatusInArbitrationDateError,
    setContractStatusInArbitrationDateError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [SupervisionDepartment, setSupervisionDepartment] =
    React.useState("");
  const [SupervisionDepartmentError, setSupervisionDepartmentError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [AuthorizedDelaysAccuser, setAuthorizedDelaysAccuser] =
    React.useState("");
  const [
    AuthorizedDelaysAccuserError,
    setAuthorizedDelaysAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [AuthorizedDelaysAccused, setAuthorizedDelaysAccused] =
    React.useState("");
  const [
    AuthorizedDelaysAccusedError,
    setAuthorizedDelaysAccusedError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [UnauthorizedDelaysAccuser, setUnauthorizedDelaysAccuser] =
    React.useState("");
  const [
    UnauthorizedDelaysAccuserError,
    setUnauthorizedDelaysAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [UnauthorizedDelaysAccused, setUnauthorizedDelaysAccused] =
    React.useState("");
  const [
    UnauthorizedDelaysAccusedError,
    setUnauthorizedDelaysAccusedError,
  ] = React.useState({ error: false as boolean, text: "" as string });

  const handleErrors = () => {
    if (RelatedPeople.length <= 0) {
      setRelatedPeopleError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (AccuserNationality.length <= 0) {
      setAccuserNationalityError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (AccusedNationality.length <= 0) {
      setAccusedNationalityError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (contratDetails.contratTypes.length <= 0) {
      setContratDetailsError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractSubject.length <= 0) {
      setContractSubjectError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractNumber.length <= 0) {
      setContractNumberError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractDate.length <= 0) {
      setContractDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (InitialBudget.length <= 0) {
      setInitialBudgetError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (InitialTimePeriod.length <= 0) {
      setInitialTimePeriodError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    PriceListOfBasicUnitOfField.forEach((item, index) => {
      if (item.year.length <= 0 || item.price.length <= 0) {
        const newPriceListOfBasicUnitOfFieldError = [
          ...PriceListOfBasicUnitOfFieldError,
        ];
        newPriceListOfBasicUnitOfFieldError[index] = {
          error: true,
          text: "مقدار فیلد نباید خالی باشد",
        };
        setPriceListOfBasicUnitOfFieldError(
          newPriceListOfBasicUnitOfFieldError
        );
      }
    });

    if (RecommendedCoefficient.length <= 0) {
      setRecommendedCoefficientError([
        { error: true, text: "مقدار فیلد نباید خالی باشد" },
      ]);
    }

    if (CoefficientType.length <= 0) {
      setCoefficientTypeError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AssigningType.length <= 0) {
      setAssigningTypeError([
        { error: true, text: "مقدار فیلد نباید خالی باشد" },
      ]);
    }

    if (BaseIndexPeriod.month.length <= 0) {
      setBaseIndexPeriodError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (BaseIndexPeriod.year.length <= 0) {
      setBaseIndexPeriodError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (OperationStartDateAccuser.length <= 0) {
      setOperationStartDateAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (OperationStartDateAccused.length <= 0) {
      setOperationStartDateAccusedError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (PhysicalProgressInArbitrationDateAccuser.length <= 0) {
      setPhysicalProgressInArbitrationDateAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (PhysicalProgressInArbitrationDateAccused.length <= 0) {
      setPhysicalProgressInArbitrationDateAccusedError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (FinancialProgressInArbitrationDateAccuser.length <= 0) {
      setFinancialProgressInArbitrationDateAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (FinancialProgressInArbitrationDateAccused.length <= 0) {
      setFinancialProgressInArbitrationDateAccusedError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (ContractStatusInArbitration.length <= 0) {
      setContractStatusInArbitrationError([
        { error: true, text: "مقدار فیلد نباید خالی باشد" },
      ]);
    }

    if (ContractStatusInArbitrationDate.length <= 0) {
      setContractStatusInArbitrationDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (SupervisionDepartment.length <= 0) {
      setSupervisionDepartmentError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AuthorizedDelaysAccuser.length <= 0) {
      setAuthorizedDelaysAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AuthorizedDelaysAccused.length <= 0) {
      setAuthorizedDelaysAccusedError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (UnauthorizedDelaysAccuser.length <= 0) {
      setUnauthorizedDelaysAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (UnauthorizedDelaysAccused.length <= 0) {
      setUnauthorizedDelaysAccusedError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    return (
      RelatedPeopleError.error ||
      AccuserNationalityError.error ||
      AccusedNationalityError.error ||
      contratDetailsError.error ||
      ContractSubjectError.error ||
      ContractNumberError.error ||
      ContractDateError.error ||
      InitialBudgetError.error ||
      InitialTimePeriodError.error ||
      PriceListOfBasicUnitOfFieldError.some((item) => item.error) ||
      RecommendedCoefficientError.some((item) => item.error) ||
      CoefficientTypeError.error ||
      AssigningTypeError.some((item) => item.error) ||
      DoesContainAdjustmentEror.error ||
      BaseIndexPeriodError.error ||
      OperationStartDateAccuserError.error ||
      OperationStartDateAccusedError.error ||
      PhysicalProgressInArbitrationDateAccuserError.error ||
      PhysicalProgressInArbitrationDateAccusedError.error ||
      FinancialProgressInArbitrationDateAccuserError.error ||
      FinancialProgressInArbitrationDateAccusedError.error ||
      ContractStatusInArbitrationError.some((item) => item.error) ||
      ContractStatusInArbitrationDateError.error ||
      SupervisionDepartmentError.error ||
      AuthorizedDelaysAccuserError.error ||
      AuthorizedDelaysAccusedError.error ||
      UnauthorizedDelaysAccuserError.error ||
      UnauthorizedDelaysAccusedError.error
    );
  };
  const [createContractMutation, { data, loading }] = useMutation(
    CREATE_CONTRACT,
    {
      variables: {
        RelatedPeople,
        AccuserNationality,
        AccusedNationality,
        ContractType: contratDetails.contratTypes,
        CircularNumber: contratDetails.CircularNumber,
        CircularDate: contratDetails.CircularDate,
        ContractSubject,
        ContractNumber,
        ContractDate,
        InitialBudget,
        InitialTimePeriod,
        PriceListOfBasicUnitOfField,
        IsSpecialPriceListAttachedToContract,
        RecommendedCoefficient,
        CoefficientType,
        AssigningType,
        DoesContainAdjustment,
        BaseIndexPeriod,
        OperationStartDateAccuser,
        OperationStartDateAccused,
        PhysicalProgressInArbitrationDateAccuser,
        PhysicalProgressInArbitrationDateAccused,
        FinancialProgressInArbitrationDateAccuser,
        FinancialProgressInArbitrationDateAccused,
        ContractStatusInArbitration,
        ContractStatusInArbitrationDate,
        SupervisionDepartment,
        AuthorizedDelaysAccuser,
        AuthorizedDelaysAccused,
        UnauthorizedDelaysAccuser,
        UnauthorizedDelaysAccused,
      },
      onCompleted(data) {
        console.log(data);
      },
    }
  );

  countries.sort((a, b) => {
    if (a.name_fa < b.name_fa) {
      return -1;
    }
    if (a.name_fa > b.name_fa) {
      return 1;
    }
    return 0;
  });
  return (
    <>
      <BackButton to="/complaints" />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"2rem"}
        border={`2px solid ${primary}`}
        borderRadius={"1rem"}
      >
        <Typography
          variant="h4"
          gridColumn={"span 12"}
          textAlign={"center"}
          sx={
            {
              // borderBottom: `2px solid ${primary}`,
            }
          }
        >
          فرم اطلاعات قرارداد
        </Typography>

        {/* 


      1-4- نمايندگان (وكلا)


      
      */}
        <Typography variant="h5" gridColumn={"span 12"}>
          {"1-4- نمايندگان (وكلا): "}
        </Typography>

        <Typography variant="body1" gridColumn={"span 12"}>
          {
            "حداکثر دو نفر نماینده معرفی شده صرفا دارای سمت در شرکت/دستگاه اجرایی یا در پروژه محل اختلاف (که یک نفر از آنها می تواند وکیل دادگستری (با وکالتنامه رسمی) باشد."
          }
        </Typography>

        <List sx={{ gridColumn: "span 12" }}>
          <Typography variant="body1">
            {"	الف) شركت در جلسه و امضاي قرارنامه داوري"}
          </Typography>
          <Typography variant="body1">
            {"ب) شركت در جلسات كارشناسي"}
          </Typography>
          <Typography variant="body1">
            {"پ) شركت در جلسه استماع"}
          </Typography>
          <Typography variant="body1">
            {"ت) دریافت رای داوری "}
          </Typography>
          <Typography variant="body1">
            {"ث) ساير همكاري‌هاي لازم و مرتبط با موضوع اختلاف"}
          </Typography>
        </List>

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        2- تابعيت

      
      */}
        <Typography variant="h5" gridColumn={"span 12"}>
          {"2- تابعيت: "}
        </Typography>
        <TextField
          label="تابعيت خواهان: "
          variant="outlined"
          sx={{ gridColumn: "span 4" }}
          select
          value={AccuserNationality}
          onChange={(e) => {
            setAccuserNationality(e.target.value);
          }}
          error={AccuserNationalityError.error}
          helperText={AccuserNationalityError.text}
        >
          {countries.map((item, index) => (
            <MenuItem key={index} value={item.name_fa}>
              {item.name_fa}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="تابعيت خوانده: "
          variant="outlined"
          sx={{ gridColumn: "8 /span 4" }}
          select
          value={AccusedNationality}
          onChange={(e) => {
            setAccusedNationality(e.target.value);
          }}
          error={AccusedNationalityError.error}
          helperText={AccusedNationalityError.text}
        >
          {countries.map((item, index) => (
            <MenuItem key={index} value={item.name_fa}>
              {item.name_fa}
            </MenuItem>
          ))}
        </TextField>

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        3- مشخصات خوانده (امضاکننده قرارداد)

      
      */}

        <Typography variant="h5" gridColumn={"span 12"}>
          {"3- مشخصات خوانده (امضاکننده قرارداد): "}
        </Typography>
        <Typography variant="body1" gridColumn={"span 12"}>
          اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه:
        </Typography>

        {RelatedPeople.map((item, index) => (
          <Box
            key={index}
            gridColumn={{
              xs: "span 12",
              lg: "span 12",
            }}
            display={"grid"}
            gridTemplateColumns={"repeat(12,1fr)"}
          >
            <Box
              gridColumn={{
                xs: "span 12",
                lg: "span 6",
              }}
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              columnGap={"2rem"}
              padding={"0rem 2rem"}
            >
              <TextField
                label="نام و نام خانوادگی"
                variant="outlined"
                autoComplete="name"
                type="text"
                sx={{ gridColumn: "span 1" }}
                value={item.name}
                onChange={(e) => {
                  const newPeoples = [...RelatedPeople];
                  newPeoples[index].name = e.target.value;
                  setRelatedPeople(newPeoples);
                  console.log(RelatedPeople);
                }}
              ></TextField>
              <TextField
                label="تلفن"
                variant="outlined"
                type="number"
                autoComplete="phone"
                sx={{ gridColumn: "span 1" }}
                value={item.phone}
                onChange={(e) => {
                  const newPeoples = [...RelatedPeople];
                  newPeoples[index].phone = e.target.value;
                  setRelatedPeople(newPeoples);
                  console.log(RelatedPeople);
                }}
              ></TextField>
            </Box>
          </Box>
        ))}
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
          onClick={() => {
            setRelatedPeople([
              ...RelatedPeople,
              { name: "", phone: "" },
            ]);
          }}
        >
          <Add />
        </IconButton>

        <Divider sx={{ gridColumn: "span 12" }} />

        {/* 


        4- مشخصات قرارداد

      
      */}
        <Typography variant="h5" gridColumn={"span 12"}>
          {"4- مشخصات قرارداد: "}
        </Typography>
        <Typography variant="h6" gridColumn={"span 12"}>
          {
            "در این قسمت لازم است نوع قرارداد همسان سازمان برنامه و بودجه کشور که مورد استفاده قرار گرفته علامت زده شود:"
          }
        </Typography>

        <FormGroup
          sx={{
            gridColumn: "span 12",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه و شرایط عمومی و شرایط خصوصی پیمان‌ها- نشریه شماره ۴۳۱۱ – بخشنامه شماره 842/54-1088/102 مورخ ۱۳۷۸/۰۳/۰۳ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع- بخشنامه شماره ۹۶/۱۲۹۹۱۸۸ مورخ 1396/05/04 "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع- بخشنامه شماره 100/6405  مورخ 1389/02/04 "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	انعقاد پیمان بر اساس فهرست بهای تجمیع شده راه، باند فرودگاه و زیرسازی راه آهن – شماره 65637/100 مورخ 1391/08/14 "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره - نشریه شماره ۴۳۱۸- بخشنامه شماره ۱۰۵/۸۴۲-۵۴/۲۴۶۰- مورخ ۱۳۷۹/۰۴/۲۹ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره پژوهشی - نشریه شماره 3419- بخشنامه شماره 2753/54-1670/102 مورخ ۱۳۷۹/۰5/۲۴ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مدیریت طرح- نشریه شماره ۲۴۱۲۱ مورخ ۱۳۸۰/۰۱/۲۸ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های مهندسی، تأمین کالا و تجهیزات، ساختمان و نصب به صورت توأم (EPC) برای کارهای صنعتی - نشریه شماره ۵۴۹۰ مورخ ۰۱/۰۳/۱۳۸۱ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های تامین کالا و تجهیزات، ساختمان و نصب به صورت توام  (PC)، برای کارهای صنعتی مورخ  ۱۸/۱۲/۱۳۸۳ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	قرارداد همسان طرح و ساخت (EPC غیر صنعتی)- 85428/101 مورخ ۱۵/۰۵/۱۳۸۴ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقت‌نامه مشارکت عمومی- خصوصی (PPP) بخشنامه شماره ۹۳/۱۷۲۸۰۴-مورخ ۲۶/۱۲/۱۳۹۳ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•	موافقتنامه ساخت، بهره‌برداری، واگذاری  (BOT)- نشریه شماره ۴۶۹ مورخ ۲۴/۱۰/۱۳۸۷ "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="•    سایر "
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                other: e.target.checked,
              });
            }}
          />
        </FormGroup>
        <TextField
          label={"شماره بخشنامه"}
          variant={"outlined"}
          sx={{
            gridColumn: "span 2",
            display: contratDetails.other ? "block" : "none",
          }}
          value={contratDetails.CircularNumber}
          onChange={(e) => {
            setContratDetails({
              ...contratDetails,
              CircularNumber: e.target.value,
            });
          }}
          error={contratDetailsError.error}
          helperText={contratDetailsError.text}
        />
        <TextField
          label={"تاریخ بخشنامه"}
          variant={"outlined"}
          type={"date"}
          focused
          sx={{
            gridColumn: "span 2",
            display: contratDetails.other ? "block" : "none",
          }}
          value={contratDetails.CircularDate}
          onChange={(e) => {
            setContratDetails({
              ...contratDetails,
              CircularDate: e.target.value,
            });
          }}
          error={contratDetailsError.error}
          helperText={contratDetailsError.text}
        />
        <Divider sx={{ gridColumn: "span 12" }} />

        {/* 


        4-1- موضوع قرارداد

      
      */}
        <Typography variant="h5" gridColumn={"span 1"}>
          4-1-
        </Typography>

        <TextField
          label="موضوع قرارداد: "
          variant="outlined"
          sx={{ gridColumn: "span 3" }}
          value={ContractSubject}
          onChange={(e) => {
            setContractSubject(e.target.value);
          }}
          error={ContractSubjectError.error}
          helperText={ContractSubjectError.text}
        />

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-2

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-2-
        </Typography>
        <TextField
          label="شماره: "
          variant="outlined"
          sx={{ gridColumn: "span 3" }}
          value={ContractNumber}
          onChange={(e) => {
            setContractNumber(e.target.value);
          }}
          error={ContractNumberError.error}
          helperText={ContractNumberError.text}
        />
        <TextField
          label="تاریخ: "
          variant="outlined"
          type="date"
          focused
          sx={{ gridColumn: "span 3" }}
          value={ContractDate}
          onChange={(e) => {
            setContractDate(e.target.value);
          }}
          error={ContractDateError.error}
          helperText={ContractDateError.text}
        />

        {/* <Divider sx={{ gridColumn: "span 3" }} /> */}
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        {/* 


        4-3

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-3-
        </Typography>
        <TextField
          label="مبلغ اوليه/ حق‌الزحمه: "
          variant="outlined"
          type="number"
          InputProps={{
            endAdornment: "ریال",
          }}
          sx={{ gridColumn: "span 3" }}
          value={InitialBudget}
          onChange={(e) => {
            setInitialBudget(e.target.value);
          }}
          error={InitialBudgetError.error}
          helperText={InitialBudgetError.text}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-4

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-4-
        </Typography>
        <TextField
          label="مدت اوليه: "
          variant="outlined"
          type="text"
          InputProps={{
            endAdornment: "ماه",
          }}
          sx={{ gridColumn: "span 3" }}
          value={InitialTimePeriod}
          onChange={(e) => {
            setInitialTimePeriod(e.target.value);
          }}
          error={InitialTimePeriodError.error}
          helperText={InitialTimePeriodError.text}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار

      
      */}
        <Typography variant="h6" gridColumn={"span 12"}>
          4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار{" "}
        </Typography>

        {/* 


        4-5-1- فهرست بهاي واحد پايه رشته

      
      */}

        {PriceListOfBasicUnitOfField.map((item, index) => (
          <Box
            key={index}
            gridColumn={{
              xs: "span 12",
              lg: "span 12",
            }}
            display={"grid"}
            gridTemplateColumns={"repeat(12,1fr)"}
          >
            <Box
              gridColumn={{
                xs: "span 12",
                lg: "span 6",
              }}
              display={"grid"}
              gridTemplateColumns={"repeat(2,1fr)"}
              columnGap={"2rem"}
              padding={"0rem 2rem"}
            >
              <TextField
                label="سال"
                variant="outlined"
                autoComplete="name"
                type="text"
                sx={{ gridColumn: "span 1" }}
                value={item.year}
                onChange={(e) => {
                  const newPeoples = [...PriceListOfBasicUnitOfField];
                  newPeoples[index].year = e.target.value;
                  setPriceListOfBasicUnitOfField(newPeoples);
                  console.log(PriceListOfBasicUnitOfField);
                }}
              ></TextField>
              <TextField
                label="فهرست بهاي واحد پايه رشته"
                variant="outlined"
                type="number"
                autoComplete="phone"
                sx={{ gridColumn: "span 1" }}
                value={item.price}
                onChange={(e) => {
                  const newPeoples = [...PriceListOfBasicUnitOfField];
                  newPeoples[index].price = e.target.value;
                  setPriceListOfBasicUnitOfField(newPeoples);
                  console.log(PriceListOfBasicUnitOfField);
                }}
              ></TextField>
            </Box>
          </Box>
        ))}

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
          onClick={() => {
            setPriceListOfBasicUnitOfField([
              ...PriceListOfBasicUnitOfField,
              { year: "", price: "" },
            ]);
          }}
        >
          <Add />
        </IconButton>

        {/* <Typography variant="body1" gridColumn={"span 1"}>
          4-5-1-
        </Typography>
        <TextField
          label="فهرست بهاي واحد پايه رشته :"
          InputProps={{
            endAdornment: "سال",
          }}
          sx={{ gridColumn: "span 3" }}
        /> */}
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان

      
      */}
        <Typography variant="h6" gridColumn={"span 12"}>
          4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان:
        </Typography>

        <RadioGroup
          defaultValue={IsSpecialPriceListAttachedToContract}
          name="radio-buttons-group"
          row
          sx={{
            gridColumn: "span 6",
          }}
        >
          <FormControlLabel
            value={true}
            control={<Radio />}
            label="دارد"
            defaultChecked
            checked={IsSpecialPriceListAttachedToContract}
            onChange={(e) => {
              // @ts-ignore
              setIsSpecialPriceListAttachedToContract(e.target.value);
            }}
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="ندارد"
            checked={IsSpecialPriceListAttachedToContract}
            onChange={(e) => {
              // @ts-ignore
              setIsSpecialPriceListAttachedToContract(e.target.value);
            }}
          />
        </RadioGroup>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-7- "ضريب پيشنهادي

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-7-{" "}
        </Typography>

        <TextField
          label="ضريب پيشنهادي: "
          sx={{ gridColumn: "span 3" }}
          value={RecommendedCoefficient}
          onChange={(e) => {
            setRecommendedCoefficient(e.target.value);
          }}
        />
        <RadioGroup defaultValue={CoefficientType} row>
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
        </RadioGroup>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-8- نحوه واگذاري كار

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-8-
        </Typography>

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
              value="مناقصه "
              checked={AssigningType === "مناقصه "}
              control={<Radio />}
              label="مناقصه "
              onChange={(e) => {
                // @ts-ignore
                setAssigningType(e.target.value);
              }}
            />
            <FormControlLabel
              value="ترك مناقصه"
              checked={AssigningType === "ترك مناقصه"}
              control={<Radio />}
              label="ترك مناقصه  "
              onChange={(e) => {
                // @ts-ignore
                setAssigningType(e.target.value);
              }}
            />
            <FormControlLabel
              control={<TextField />}
              label=""
              value={
                AssigningType !== "مناقصه " &&
                AssigningType !== "ترك مناقصه"
                  ? AssigningType
                  : ""
              }
              onChange={(e) => {
                // @ts-ignore
                setAssigningType(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-9- پيمان مشمول تعديل

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-9-
        </Typography>
        <FormControl
          sx={{
            gridColumn: "span 6",
          }}
        >
          <FormLabel id="demo-row-radio-buttons-group-label">
            پيمان مشمول تعديل{" "}
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="مي‌باشد"
              checked={DoesContainAdjustment}
              onChange={(e) => {
                // @ts-ignore
                setDoesContainAdjustment(e.target.value);
              }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="نمي‌باشد"
              checked={!DoesContainAdjustment}
              onChange={(e) => {
                // @ts-ignore
                setDoesContainAdjustment(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-10- دوره شاخص مبنا

      
      */}
        <Typography variant="h6" gridColumn={"span 2"}>
          4-10- دوره شاخص مبنا
        </Typography>
        <TextField
          label="ماه"
          type="number"
          sx={{
            gridColumn: "span 2",
          }}
          value={BaseIndexPeriod.month}
          onChange={(e) => {
            setBaseIndexPeriod({
              ...BaseIndexPeriod,
              month: e.target.value,
            });
          }}
          error={BaseIndexPeriodError.error}
          helperText={BaseIndexPeriodError.text}
        />
        <TextField
          label="سال"
          type="number"
          sx={{
            gridColumn: "span 2",
          }}
          value={BaseIndexPeriod.year}
          onChange={(e) => {
            setBaseIndexPeriod({
              ...BaseIndexPeriod,
              year: e.target.value,
            });
          }}
          error={BaseIndexPeriodError.error}
          helperText={BaseIndexPeriodError.text}
        />

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-11- تاريخ شروع كار

      
      */}
        <Typography variant="h6" gridColumn={"span 2"}>
          4-11- تاريخ شروع كار:
        </Typography>
        <TextField
          label="تاريخ شروع كار خواهان"
          type="date"
          focused
          sx={{
            gridColumn: "span 3",
          }}
          value={OperationStartDateAccuser}
          onChange={(e) => {
            setOperationStartDateAccuser(e.target.value);
          }}
          error={OperationStartDateAccuserError.error}
          helperText={OperationStartDateAccuserError.text}
        />
        <TextField
          label="تاريخ شروع كار خوانده"
          type="date"
          focused
          sx={{
            gridColumn: "span 3",
          }}
          value={OperationStartDateAccused}
          onChange={(e) => {
            setOperationStartDateAccused(e.target.value);
          }}
          error={OperationStartDateAccusedError.error}
          helperText={OperationStartDateAccusedError.text}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        {/* 


        4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري

      
      */}
        <Typography variant="h6" gridColumn={"span 5"}>
          4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري:{" "}
        </Typography>

        <TextField
          label="خواهان"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={PhysicalProgressInArbitrationDateAccuser}
          onChange={(e) => {
            setPhysicalProgressInArbitrationDateAccuser(
              e.target.value
            );
          }}
          error={PhysicalProgressInArbitrationDateAccuserError.error}
          helperText={
            PhysicalProgressInArbitrationDateAccuserError.text
          }
        />
        <TextField
          label="خوانده"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={PhysicalProgressInArbitrationDateAccused}
          onChange={(e) => {
            setPhysicalProgressInArbitrationDateAccused(
              e.target.value
            );
          }}
          error={PhysicalProgressInArbitrationDateAccusedError.error}
          helperText={
            PhysicalProgressInArbitrationDateAccusedError.text
          }
        />
        {/* 


        4-13- پيشرفت ریالی كار در تاريخ درخواست داوري

      
      */}
        <Typography variant="h6" gridColumn={"span 5"}>
          4-13- پيشرفت ریالی كار در تاريخ درخواست داوري:{" "}
        </Typography>

        <TextField
          label="خواهان"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={FinancialProgressInArbitrationDateAccuser}
          onChange={(e) => {
            setFinancialProgressInArbitrationDateAccuser(
              e.target.value
            );
          }}
          error={FinancialProgressInArbitrationDateAccuserError.error}
          helperText={
            FinancialProgressInArbitrationDateAccuserError.text
          }
        />
        <TextField
          label="خوانده"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={FinancialProgressInArbitrationDateAccused}
          onChange={(e) => {
            setFinancialProgressInArbitrationDateAccused(
              e.target.value
            );
          }}
          error={FinancialProgressInArbitrationDateAccusedError.error}
          helperText={
            FinancialProgressInArbitrationDateAccusedError.text
          }
        />

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-14- وضعیت قرارداد در تاریخ درخواست داوری

      
      */}
        <Typography variant="h6" gridColumn={"span 4"}>
          4-14- وضعیت قرارداد در تاریخ درخواست داوری:
        </Typography>

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
              checked={ContractStatusInArbitration === "ابلاغ خاتمه"}
              onChange={(e) => {
                // @ts-ignore
                setContractStatusInArbitration(e.target.value);
              }}
            />
            <FormControlLabel
              value="ابلاغ فسخ"
              control={<Radio />}
              label="ابلاغ فسخ"
              checked={ContractStatusInArbitration === "ابلاغ فسخ"}
              onChange={(e) => {
                // @ts-ignore
                setContractStatusInArbitration(e.target.value);
              }}
            />
            <FormControlLabel
              value="جاری"
              control={<Radio />}
              label="جاری"
              checked={ContractStatusInArbitration === "جاری"}
              onChange={(e) => {
                // @ts-ignore
                setContractStatusInArbitration(e.target.value);
              }}
            />
            <FormControlLabel
              value="تحویل موقت"
              control={<Radio />}
              label="تحویل موقت"
              checked={ContractStatusInArbitration === "تحویل موقت"}
              onChange={(e) => {
                // @ts-ignore
                setContractStatusInArbitration(e.target.value);
              }}
            />
            <FormControlLabel
              value="تحویل قطعی"
              control={<Radio />}
              label="تحویل قطعی"
              checked={ContractStatusInArbitration === "تحویل قطعی"}
              onChange={(e) => {
                // @ts-ignore
                setContractStatusInArbitration(e.target.value);
              }}
            />
            <FormControlLabel
              control={
                <TextField label={"تاریخ"} type="date" focused />
              }
              label=""
              value={ContractStatusInArbitrationDate}
              onChange={(e) => {
                // @ts-ignore
                setContractStatusInArbitrationDate(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 


        4-15- دستگاه نظارت (مهندس مشاور) 

      
      */}
        <Typography variant="h6" gridColumn={"span 1"}>
          4-15-
        </Typography>
        <TextField
          label={"دستگاه نظارت (مهندس مشاور) :"}
          sx={{
            gridColumn: "span 4",
          }}
          value={SupervisionDepartment}
          onChange={(e) => {
            setSupervisionDepartment(e.target.value);
          }}
          error={SupervisionDepartmentError.error}
          helperText={SupervisionDepartmentError.text}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 6" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        {/* 


        4-16- تاخیرات

      
      */}
        <Typography variant="h6" gridColumn={"span 12"}>
          4-16- تاخیرات
        </Typography>
        <Typography variant="body1" gridColumn={"span 2"}>
          4-16-1- مجاز
        </Typography>
        <TextField
          label={"از نظر خواهان:"}
          sx={{
            gridColumn: "span 3",
          }}
          InputProps={{
            endAdornment: "روز",
          }}
          value={AuthorizedDelaysAccuser}
          onChange={(e) => {
            setAuthorizedDelaysAccuser(e.target.value);
          }}
          error={AuthorizedDelaysAccuserError.error}
          helperText={AuthorizedDelaysAccuserError.text}
        />
        <TextField
          label={"از نظر خوانده:"}
          sx={{
            gridColumn: "span 3",
          }}
          InputProps={{
            endAdornment: "روز",
          }}
          value={AuthorizedDelaysAccused}
          onChange={(e) => {
            setAuthorizedDelaysAccused(e.target.value);
          }}
          error={AuthorizedDelaysAccusedError.error}
          helperText={AuthorizedDelaysAccusedError.text}
        />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 2" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Typography variant="body1" gridColumn={"span 2"}>
          4-16-2- غیر مجاز
        </Typography>
        <TextField
          label={"از نظر خواهان:"}
          sx={{
            gridColumn: "span 3",
          }}
          InputProps={{
            endAdornment: "روز",
          }}
          value={UnauthorizedDelaysAccuser}
          onChange={(e) => {
            setUnauthorizedDelaysAccuser(e.target.value);
          }}
          error={UnauthorizedDelaysAccuserError.error}
          helperText={UnauthorizedDelaysAccuserError.text}
        />
        <TextField
          label={"از نظر خوانده:"}
          sx={{
            gridColumn: "span 3",
          }}
          InputProps={{
            endAdornment: "روز",
          }}
          value={UnauthorizedDelaysAccused}
          onChange={(e) => {
            setUnauthorizedDelaysAccused(e.target.value);
          }}
          error={UnauthorizedDelaysAccusedError.error}
          helperText={UnauthorizedDelaysAccusedError.text}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        {/* 


        توجهات

      
      */}
        <Typography
          variant="h5"
          fontWeight={800}
          gridColumn={"span 12"}
        >
          توجه مهم: چنانچه در خصوص تاخیرات و یا تبعات ناشی از آن
          اختلافی وجود دارد، لازم است موارد زیر ارسال شوند:
        </Typography>
        <Typography
          variant="h6"
          fontWeight={800}
          gridColumn={"span 12"}
        >
          • گزارش توجیهی تاخیرات قرارداد شامل:
        </Typography>
        <List sx={{ gridColumn: "span 12" }}>
          <Typography variant="body1">
            • برنامه های زمان‏بندی اولیه و اصلاحی ابلاغ شده
          </Typography>
          <Typography variant="body1">
            • گزارش تهیه شده توسط پیمانکار (به همراه کلیه مستندات و
            پیوست‏ها)
          </Typography>
          <Typography variant="body1">
            • گزارش رسیدگی به تاخیرات توسط مهندس مشاور
          </Typography>
          <Typography variant="body1">
            • مستندات ابلاغ نتایج رسیدگی به تاخیرات به پیمانکار توسط
            کارفرما
          </Typography>
        </List>

        <Button
          variant="contained"
          disabled={loading}
          sx={{
            gridColumn: "span 12",
            // justifySelf: "center",
            backgroundColor: Green,
            color: "white",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
          onClick={() => {
            if (handleErrors()) {
              void createContractMutation();
              navigate("/complaints/addComplaint");
            } else {
              void createContractMutation();
              navigate("/complaints/addComplaint");
            }
          }}
        >
          ثبت و ادامه
        </Button>

        {data?.contract_addContract?.result && (
          <Alert severity="success">قرارداد با موفقیت ثبت شد</Alert>
        )}
      </Box>
    </>
  );
};

export default AddContract;
