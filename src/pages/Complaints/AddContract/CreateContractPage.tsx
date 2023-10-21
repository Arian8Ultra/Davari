/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation } from "@apollo/client";
import { Add } from "@mui/icons-material";
import {
  Alert,
  Autocomplete,
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
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import { CREATE_COMPLAINT } from "../../../GraphQL/Complaints/Mutations";
import { CREATE_CONTRACT } from "../../../GraphQL/Contracts/Mutations";
import BackButton from "../../../components/BackButton";
import FaTextField from "../../../components/FaComponents/FaTextField";
import FaTypography from "../../../components/FaComponents/FaTypography";
import FileBox from "../../../components/FileBox";
import countries from "../../../static/Countries";
import {
  Green,
  GreenLight,
  primary,
  secondary,
} from "../../../theme/color";

const CreateContractPage = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const [RelatedPeopleByAccusser, setRelatedPeopleByAccusser] =
    React.useState<
      [
        {
          name: string;
          phone: string;
        }
      ]
    >([
      {
        name: "",
        phone: "",
      },
    ]);
  const [
    RelatedPeopleByAccusserError,
    setRelatedPeopleByAccusserError,
  ] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [RelatedPeopleByAccussed, setRelatedPeopleByAccussed] =
    React.useState<
      [
        {
          name: string;
          phone: string;
        }
      ]
    >([
      {
        name: "",
        phone: "",
      },
    ]);
  const [
    RelatedPeopleByAccussedError,
    setRelatedPeopleByAccussedError,
  ] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [Nationality, setNationality] = React.useState<string>();
  const [NationalityError, setNationalityError] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [AccusedNationality, setAccusedNationality] =
    React.useState("");
  const [AccusedNationalityError, setAccusedNationalityError] =
    React.useState({
      error: false as boolean,
      text: "" as string,
    });
  const [contratDetails, setContratDetails] = React.useState<{
    contratTypes: string[];
    other: boolean;
    CircularTitle?: string;
    CircularNumber?: string;
    CircularDate?: string;
  }>({
    contratTypes:[''],
    CircularDate:undefined,
    CircularNumber:undefined,
    CircularTitle:undefined,
    other:false
  });
  const [contratDetailsError, setContratDetailsError] =
    React.useState({
      error: false as boolean,
      text: "" as string,
    });
  const [ContractSubject, setContractSubject] =
    React.useState<string>();
  const [ContractSubjectError, setContractSubjectError] =
    React.useState({
      error: false as boolean,
      text: "" as string,
    });
  const [ContractNumber, setContractNumber] =
    React.useState<number>();
  const [ContractNumberError, setContractNumberError] =
    React.useState({
      error: false as boolean,
      text: "" as string,
    });
  const [ContractDate, setContractDate] = React.useState<number>();
  const [ContractDateError, setContractDateError] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [InitialBudget, setInitialBudget] = React.useState<number>();
  const [InitialBudgetError, setInitialBudgetError] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [InitialTimePeriod, setInitialTimePeriod] =
    React.useState<number>();
  const [InitialTimePeriodError, setInitialTimePeriodError] =
    React.useState({
      error: false as boolean,
      text: "" as string,
    });
  const [
    PriceListOfBasicUnitOfField,
    setPriceListOfBasicUnitOfField,
  ] = React.useState<
    [
      {
        year: string;
        price: string;
      }
    ]
  >();
  const [
    PriceListOfBasicUnitOfFieldError,
    setPriceListOfBasicUnitOfFieldError,
  ] = React.useState([
    {
      error: false as boolean,
      text: "" as string,
    },
  ]);

  const [
    IsSpecialPriceListAttachedToContract,
    setIsSpecialPriceListAttachedToContract,
  ] = React.useState(false);

  const [RecommendedCoefficient, setRecommendedCoefficient] =
    React.useState<number>();
  const [AssigningType, setAssigningType] = React.useState<string>();
  const [AssigningTypeError, setAssigningTypeError] = React.useState([
    {
      error: false as boolean,
      text: "" as string,
    },
  ]);
  const [DoesContainAdjustment, setDoesContainAdjustment] =
    React.useState<boolean>(true);
  const [DoesContainAdjustmentEror] = React.useState({
    error: false as boolean,
    text: "" as string,
  });
  const [Adjustment, setAdjustment] = useState<{
    number: number;
    date: string;
  }>();
  const [AdjustmentError, setAdjustmentError] = useState({
    error: false as boolean,
    text: "" as string,
  });
  const [BaseIndexPeriod, setBaseIndexPeriod] = React.useState<{
    isQuarter: boolean;
    quarter: number;
    month: string;
    year: string;
  }>();
  const [BaseIndexPeriodError, setBaseIndexPeriodError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [OperationStartDateAccuser, setOperationStartDateAccuser] =
    React.useState<string>();
  const [
    OperationStartDateAccuserError,
    setOperationStartDateAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [OperationStartDate, setOperationStartDate] =
    React.useState<string>();
  const [OperationStartDateError, setOperationStartDateError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [
    PhysicalProgressInArbitrationDate,
    setPhysicalProgressInArbitrationDate,
  ] = React.useState<string>();
  const [
    PhysicalProgressInArbitrationDateError,
    setPhysicalProgressInArbitrationDateError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    FinancialProgressInArbitrationDateAccuser,
    setFinancialProgressInArbitrationDateAccuser,
  ] = React.useState<string>();
  const [
    FinancialProgressInArbitrationDateAccuserError,
    setFinancialProgressInArbitrationDateAccuserError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    ContractStatusInArbitration,
    setContractStatusInArbitration,
  ] = React.useState<string>();

  const [TemporaryDelivery, setTemporaryDelivery] = useState<{
    checked: boolean;
    date: string;
  }>();
  const [FinalDelivery, setFinalDelivery] = useState<{
    checked: boolean;
    date: string;
  }>();
  const [
    ContractStatusInArbitrationError,
    setContractStatusInArbitrationError,
  ] = React.useState<[{ error: boolean; text: string }]>();
  const [
    ContractStatusInArbitrationDate,
    setContractStatusInArbitrationDate,
  ] = React.useState<string>();
  const [
    ContractStatusInArbitrationDateError,
    setContractStatusInArbitrationDateError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [SupervisionDepartment, setSupervisionDepartment] =
    React.useState<string>();
  const [SupervisionDepartmentError, setSupervisionDepartmentError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [AuthorizedDelays, setAuthorizedDelays] =
    React.useState<string>();
  const [AuthorizedDelaysError, setAuthorizedDelaysError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [UnauthorizedDelays, setUnauthorizedDelays] =
    React.useState<string>();
  const [UnauthorizedDelaysError, setUnauthorizedDelaysError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [AccusedDepartmentId, setAccusedDepartmentId] =
    React.useState<string>();
  const [AccusedDepartmentIdError, setAccusedDepartmentIdError] =
    React.useState<{ error: boolean; text: string }>();
  const [FileNames, setFileNames] = useState<string[]>();
  const [Files, SetFiles] = useState<File[]>();

  const [departments, setDepartments] = React.useState<
    { label: string; id: number }[]
  >([]);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const handleErrors = () => {
    if (
      RelatedPeopleByAccussed &&
      RelatedPeopleByAccussed.length <= 0
    ) {
      setRelatedPeopleByAccussedError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (Nationality && Nationality.length <= 0) {
      setNationalityError({
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
    if (contratDetails && contratDetails?.contratTypes?.length <= 0) {
      setContratDetailsError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractSubject && ContractSubject.length <= 0) {
      setContractSubjectError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractNumber) {
      setContractNumberError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractDate) {
      setContractDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (InitialBudget) {
      setInitialBudgetError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (InitialTimePeriod) {
      setInitialTimePeriodError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    PriceListOfBasicUnitOfField &&
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

    if (AssigningType && AssigningType.length <= 0) {
      setAssigningTypeError([
        {
          error: true,
          text: "مقدار فیلد نباید خالی باشد",
        },
      ]);
    }

    if (BaseIndexPeriod && BaseIndexPeriod.month.length <= 0) {
      setBaseIndexPeriodError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (BaseIndexPeriod && BaseIndexPeriod.year.length <= 0) {
      setBaseIndexPeriodError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (
      OperationStartDateAccuser &&
      OperationStartDateAccuser.length <= 0
    ) {
      setOperationStartDateAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (OperationStartDate && OperationStartDate.length <= 0) {
      setOperationStartDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (
      PhysicalProgressInArbitrationDate &&
      PhysicalProgressInArbitrationDate.length <= 0
    ) {
      setPhysicalProgressInArbitrationDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (
      FinancialProgressInArbitrationDateAccuser &&
      FinancialProgressInArbitrationDateAccuser.length <= 0
    ) {
      setFinancialProgressInArbitrationDateAccuserError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (
      ContractStatusInArbitration &&
      ContractStatusInArbitration.length <= 0
    ) {
      setContractStatusInArbitrationError([
        {
          error: true,
          text: "مقدار فیلد نباید خالی باشد",
        },
      ]);
    }

    if (
      ContractStatusInArbitrationDate &&
      ContractStatusInArbitrationDate.length <= 0
    ) {
      setContractStatusInArbitrationDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (SupervisionDepartment && SupervisionDepartment.length <= 0) {
      setSupervisionDepartmentError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AuthorizedDelays && AuthorizedDelays.length <= 0) {
      setAuthorizedDelaysError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (UnauthorizedDelays && UnauthorizedDelays.length <= 0) {
      setUnauthorizedDelaysError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AccusedDepartmentId && AccusedDepartmentId.length <= 0) {
      setAccusedDepartmentIdError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    return (
      RelatedPeopleByAccussedError.error ||
      AccusedNationalityError.error ||
      contratDetailsError.error ||
      ContractSubjectError.error ||
      ContractNumberError.error ||
      ContractDateError.error ||
      InitialBudgetError.error ||
      InitialTimePeriodError.error ||
      PriceListOfBasicUnitOfFieldError.some((item) => item.error) ||
      AssigningTypeError.some((item) => item.error) ||
      DoesContainAdjustmentEror.error ||
      BaseIndexPeriodError.error ||
      OperationStartDateAccuserError.error ||
      OperationStartDateError.error ||
      PhysicalProgressInArbitrationDateError.error ||
      FinancialProgressInArbitrationDateAccuserError.error ||
      ContractStatusInArbitrationError?.some((item) => item.error) ||
      ContractStatusInArbitrationDateError.error ||
      SupervisionDepartmentError.error ||
      AuthorizedDelaysError.error ||
      UnauthorizedDelaysError.error ||
      AccusedDepartmentIdError?.error
    );
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const [createContractMutation, { data, loading }] = useMutation(
    CREATE_CONTRACT,
    {
      variables: {
        AccuserRelatedPeople: JSON.stringify(RelatedPeopleByAccusser),
        AccusedRelatedPeople: JSON.stringify(RelatedPeopleByAccussed),
        AccuserNationality: Nationality,
        ContractType: contratDetails && contratDetails.contratTypes,
        CircularNumber:
          contratDetails && contratDetails.CircularNumber,
        CircularDate: contratDetails && contratDetails.CircularDate,
        ContractSubject:
          contratDetails && contratDetails.CircularTitle,
        ContractNumber: ContractNumber,
        ContractDate: ContractDate,
        InitialBudget: InitialBudget,
        InitialTimePeriod: InitialTimePeriod,
        PriceListOfBasicUnitOfField: JSON.stringify(
          PriceListOfBasicUnitOfField
        ),
        IsSpecialPriceListAttachedToContract: String(
          IsSpecialPriceListAttachedToContract
        ),
        RecommendedCoefficient: RecommendedCoefficient,
        CoefficientType:
          RecommendedCoefficient && RecommendedCoefficient > 1
            ? "پلوس"
            : "مینوس",
        AssigningType: AssigningType,
        DoesContainAdjustment: String(DoesContainAdjustment),
        BaseIndexPeriod: JSON.stringify(BaseIndexPeriod),
        OperationStartDateAccuser: OperationStartDateAccuser,
        PhysicalProgressInArbitrationDateAccuser:
          PhysicalProgressInArbitrationDate,
        FinancialProgressInArbitrationDateAccuser:
          FinancialProgressInArbitrationDateAccuser,
        ContractStatusInArbitration: [
          JSON.stringify([
            ContractStatusInArbitration,
            ContractStatusInArbitrationDate,
          ]),
          JSON.stringify({ "تحویل موقت": TemporaryDelivery }),
          JSON.stringify({ "تحویل قطعی": FinalDelivery }),
        ],
        SupervisionDepartment: SupervisionDepartment,
        AuthorizedDelaysAccuser: AuthorizedDelays,
        UnauthorizedDelaysAccuser: UnauthorizedDelays,
        AccusedDepartmentId: AccusedDepartmentId,
        AccuserDepartmentId: user.departmentId,
      },
    }
  );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const [createComplaint] = useMutation(CREATE_COMPLAINT, {
    variables: {
      contractId: data?.contract_addContract?.result.id,
      userId: user.id,
    },
  });
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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
        paddingTop={"4rem"}
        border={`2px solid ${secondary}`}
        borderRadius={"1rem"}
        position={"relative"}
        marginY={"1rem"}
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
            فرم اطلاعات قرارداد
          </FaTypography>
        </Box>

        {/* 


        1- طرفین قرارداد


    
    */}
        <FaTypography variant="h5" gridColumn={"span 12"}>
          1- طرفین قرارداد:
        </FaTypography>
        <Autocomplete
          disablePortal
          options={departments}
          sx={{
            width: "100%",
            gridColumn: "span 3",
          }}
          renderInput={(params) => (
            <FaTextField
              {...params}
              label="نام بخش خوانده"
              error={
                AccusedDepartmentIdError &&
                AccusedDepartmentIdError.error
              }
              helperText={
                AccusedDepartmentIdError &&
                AccusedDepartmentIdError.text
              }
            />
          )}
          onChange={(_e, value) => {
            console.log(value);
            // @ts-ignore
            setAccusedDepartmentId(value.id);
          }}
          value={departments.find(
            (item) =>
              AccusedDepartmentId &&
              item.id === parseInt(AccusedDepartmentId)
          )}
        />
        <FaTextField
          label="نام بخش خواهان"
          sx={{
            width: "100%",
            gridColumn: "span 3",
          }}
          value={
            departments?.find(
              (item: { id: number; label: string }) =>
                item.id === user.departmentId
            )?.label
          }
          placeholder={
            departments?.find((item) => item.id === user.departmentId)
              ?.label
          }
          focused
          //   disabled
        />

        <Divider
          orientation="vertical"
          sx={{
            gridColumn: "span 1",
          }}
        />

        {/* 


      2- تابعيت

    
    */}
        <FaTypography variant="h5" gridColumn={"span 2"}>
          {"2- تابعيت خواهان: "}
        </FaTypography>
        <FaTextField
          label="تابعيت : "
          variant="outlined"
          sx={{
            gridColumn: "span 3",
          }}
          select
          SelectProps={{
            MenuProps: {
              sx: {
                maxHeight: "20rem",
              },
            },
          }}
          value={Nationality}
          onChange={(e) => {
            setNationality(e.target.value);
          }}
          error={NationalityError.error}
          helperText={NationalityError.text}
        >
          {countries.map((item, index) => (
            <MenuItem key={index} value={item.name_fa}>
              {item.name_fa}
            </MenuItem>
          ))}
        </FaTextField>

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 


      3- مشخصات خوانده (امضاکننده قرارداد)

    
    */}

        <FaTypography variant="h5" gridColumn={"span 12"}>
          {"3- افراد مطلع و مرتبط با پروژه: "}
        </FaTypography>
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
            طرف خواهان:
          </FaTypography>
          {RelatedPeopleByAccusser &&
            RelatedPeopleByAccusser.map((item, index) => (
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
                  <FaTextField
                    label="نام و نام خانوادگی"
                    variant="outlined"
                    autoComplete="name"
                    type="text"
                    sx={{
                      gridColumn: "span 1",
                    }}
                    value={item.name}
                    onChange={(e) => {
                      const newPeoples = [
                        ...RelatedPeopleByAccusser,
                      ] as [
                        {
                          name: string;
                          phone: string;
                        }
                      ];
                      newPeoples[index].name = e.target.value;
                      setRelatedPeopleByAccusser(newPeoples);
                      console.log(RelatedPeopleByAccusser);
                    }}
                  ></FaTextField>
                  <FaTextField
                    label="تلفن"
                    variant="outlined"
                    type="number"
                    autoComplete="phone"
                    sx={{
                      gridColumn: "span 1",
                    }}
                    value={item.phone}
                    onChange={(e) => {
                      const newPeoples = [
                        ...RelatedPeopleByAccusser,
                      ] as [
                        {
                          name: string;
                          phone: string;
                        }
                      ];
                      newPeoples[index].phone = e.target.value;
                      setRelatedPeopleByAccusser(newPeoples);
                      console.log(RelatedPeopleByAccusser);
                    }}
                  ></FaTextField>
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
              // @ts-ignore
              setRelatedPeopleByAccusser([
                // @ts-ignore
                ...RelatedPeopleByAccusser,
                {
                  name: "",
                  phone: "",
                },
              ]);
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
          {RelatedPeopleByAccussed &&
            RelatedPeopleByAccussed.map((item, index) => (
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
                  <FaTextField
                    label="نام و نام خانوادگی"
                    variant="outlined"
                    autoComplete="name"
                    type="text"
                    sx={{
                      gridColumn: "span 1",
                    }}
                    value={item.name}
                    onChange={(e) => {
                      const newPeoples = [
                        ...RelatedPeopleByAccussed,
                      ] as [
                        {
                          name: string;
                          phone: string;
                        }
                      ];
                      newPeoples[index].name = e.target.value;
                      setRelatedPeopleByAccussed(newPeoples);
                      console.log(RelatedPeopleByAccussed);
                    }}
                  ></FaTextField>
                  <FaTextField
                    label="تلفن"
                    variant="outlined"
                    type="number"
                    autoComplete="phone"
                    sx={{
                      gridColumn: "span 1",
                    }}
                    value={item.phone}
                    onChange={(e) => {
                      const newPeoples = [
                        ...RelatedPeopleByAccussed,
                      ] as [
                        {
                          name: string;
                          phone: string;
                        }
                      ];
                      newPeoples[index].phone = e.target.value;
                      setRelatedPeopleByAccussed(newPeoples);
                      console.log(RelatedPeopleByAccussed);
                    }}
                  ></FaTextField>
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
              // @ts-ignore
              setRelatedPeopleByAccussed([
                // @ts-ignore
                ...RelatedPeopleByAccussed,
                {
                  name: "",
                  phone: "",
                },
              ]);
            }}
          >
            <Add />
          </IconButton>
        </Box>

        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 


      4- مشخصات قرارداد

    
    */}
        <FaTypography variant="h5" gridColumn={"span 12"}>
          {"4- مشخصات قرارداد: "}
        </FaTypography>
        <FaTypography variant="h6" gridColumn={"span 12"}>
          {
            "در این قسمت لازم است نوع قرارداد همسان سازمان برنامه و بودجه کشور که مورد استفاده قرار گرفته علامت زده شود:"
          }
        </FaTypography>

        <FormGroup
          sx={{
            gridColumn: "span 12",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <FaTypography>
                • موافقتنامه و شرایط عمومی و شرایط خصوصی پیمان‌ها-
                نشریه شماره ۴۳۱۱ – بخشنامه شماره 842/54-1088/102 مورخ
                ۱۳۷۸/۰۳/۰۳
              </FaTypography>
            }
            onChange={(e) => {
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <FaTypography>
                • انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع-
                بخشنامه شماره ۹۶/۱۲۹۹۱۸۸ مورخ 1396/05/04
              </FaTypography>
            }
            onChange={(e) => {
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <FaTypography>
                • انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع-
                بخشنامه شماره 100/6405 مورخ 1389/02/04
              </FaTypography>
            }
            onChange={(e) => {
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
                      // @ts-ignore
                      (item) => item !== e.target.value
                    ),
              });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <FaTypography>
                • انعقاد پیمان بر اساس فهرست بهای تجمیع شده راه، باند
                فرودگاه و زیرسازی راه آهن – شماره 65637/100 مورخ
                1391/08/14
              </FaTypography>
            }
            onChange={(e) => {
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                contratTypes: e.target.checked
                  ? // @ts-ignore
                    [...contratDetails.contratTypes, e.target.value]
                  : contratDetails &&
                    contratDetails.contratTypes.filter(
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
              // @ts-ignore
              setContratDetails({
                ...contratDetails,
                // @ts-ignore
                other: e.target.checked,
              });
            }}
          />
        </FormGroup>
        <FaTextField
          label={"عنوان بخشنامه"}
          variant={"outlined"}
          sx={{
            gridColumn: "span 2",
            display:
              contratDetails && contratDetails.other
                ? "block"
                : "none",
          }}
          value={contratDetails && contratDetails.CircularTitle}
          onChange={(e) => {
            // @ts-ignore
            setContratDetails({
              ...contratDetails,
              CircularTitle: e.target.value,
            });
          }}
          error={contratDetailsError.error}
          helperText={contratDetailsError.text}
        />
        <FaTextField
          label={"شماره بخشنامه"}
          variant={"outlined"}
          sx={{
            gridColumn: "span 2",
            display:
              contratDetails && contratDetails.other
                ? "block"
                : "none",
          }}
          value={contratDetails && contratDetails.CircularNumber}
          onChange={(e) => {
            // @ts-ignore
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
            display:
              contratDetails && contratDetails.other
                ? "block"
                : "none",
          }}
          value={contratDetails && contratDetails.CircularDate}
          onChange={(e) => {
            //@ts-ignore
            setContratDetails({
              ...contratDetails,
              CircularDate: e.target.value,
            });
          }}
          error={contratDetailsError.error}
          helperText={contratDetailsError.text}
        />
        <Divider
          sx={{
            gridColumn: "span 12",
          }}
        />

        {/* 


      4-1- موضوع قرارداد

    
    */}
        <FaTypography variant="h5" gridColumn={"span 1"}>
          4-1-
        </FaTypography>

        <FaTextField
          label="موضوع قرارداد: "
          variant="outlined"
          sx={{
            gridColumn: "span 3",
          }}
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


      4-2

    
    */}
        <FaTypography variant="h6" gridColumn={"span 12"}>
          4-2- قرارداد شماره و تاريخ:
        </FaTypography>
        <FaTextField
          label="شماره: "
          variant="outlined"
          sx={{
            gridColumn: "span 3",
          }}
          value={ContractNumber}
          onChange={(e) => {
            setContractNumber(parseInt(e.target.value));
          }}
          error={ContractNumberError.error}
          helperText={ContractNumberError.text}
        />
        <TextField
          label="تاریخ: "
          variant="outlined"
          type="date"
          focused
          sx={{
            gridColumn: "span 3",
          }}
          value={ContractDate}
          onChange={(e) => {
            const date = new Date(e.target.value);
            setContractDate(date.getTime());
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


      4-3

    
    */}
        <FaTypography variant="h6" gridColumn={"span 1"}>
          4-3-
        </FaTypography>
        <FaTextField
          label="مبلغ اوليه/ حق‌الزحمه: "
          variant="outlined"
          type="number"
          InputProps={{
            endAdornment: "ریال",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={InitialBudget}
          onChange={(e) => {
            setInitialBudget(parseInt(e.target.value));
          }}
          error={InitialBudgetError.error}
          helperText={InitialBudgetError.text}
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


      4-4

    
    */}
        <FaTypography variant="h6" gridColumn={"span 1"}>
          4-4-
        </FaTypography>
        <FaTextField
          label="مدت اوليه: "
          variant="outlined"
          type="text"
          InputProps={{
            endAdornment: "ماه",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={InitialTimePeriod}
          onChange={(e) => {
            setInitialTimePeriod(parseInt(e.target.value));
          }}
          error={InitialTimePeriodError.error}
          helperText={InitialTimePeriodError.text}
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


      4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار

    
    */}
        <FaTypography variant="h6" gridColumn={"span 12"}>
          4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار
        </FaTypography>

        {/* 


      4-5-1- فهرست بهاي واحد پايه رشته

    
    */}

        {PriceListOfBasicUnitOfField &&
          PriceListOfBasicUnitOfField.map((item, index) => (
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
                <FaTextField
                  label="سال"
                  variant="outlined"
                  autoComplete="name"
                  type="text"
                  sx={{
                    gridColumn: "span 1",
                  }}
                  value={item.year}
                  onChange={(e) => {
                    const newPeoples = [
                      ...PriceListOfBasicUnitOfField,
                    ] as [
                      {
                        year: string;
                        price: string;
                      }
                    ];
                    newPeoples[index].year = e.target.value;
                    setPriceListOfBasicUnitOfField(newPeoples);
                    console.log(PriceListOfBasicUnitOfField);
                  }}
                ></FaTextField>
                <FaTextField
                  label="فهرست بهاي واحد پايه رشته"
                  variant="outlined"
                  type="number"
                  autoComplete="phone"
                  sx={{
                    gridColumn: "span 1",
                  }}
                  value={item.price}
                  onChange={(e) => {
                    const newPeoples = [
                      ...PriceListOfBasicUnitOfField,
                    ] as [
                      {
                        year: string;
                        price: string;
                      }
                    ];
                    newPeoples[index].price = e.target.value;
                    setPriceListOfBasicUnitOfField(newPeoples);
                    console.log(PriceListOfBasicUnitOfField);
                  }}
                ></FaTextField>
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
            // @ts-ignore
            setPriceListOfBasicUnitOfField([
              ...(PriceListOfBasicUnitOfField || []),
              {
                year: "",
                price: "",
              },
            ] as { year: string; price: string }[]);
          }}
        >
          <Add />
        </IconButton>

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


      4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان

    
    */}
        <FaTypography variant="h6" gridColumn={"span 12"}>
          4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان:
        </FaTypography>

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
            onChange={() => {
              // @ts-ignore
              setIsSpecialPriceListAttachedToContract(true);
            }}
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="ندارد"
            checked={!IsSpecialPriceListAttachedToContract}
            onChange={() => {
              // @ts-ignore
              setIsSpecialPriceListAttachedToContract(false);
            }}
          />
        </RadioGroup>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        {/* 

            TODO :
            add use state to this shit


*/}
        <FaTextField
          label={"عنوان بخشنامه"}
          variant={"outlined"}
          sx={{
            gridColumn: "span 2",
            display: IsSpecialPriceListAttachedToContract
              ? "block"
              : "none",
          }}
          value={contratDetails && contratDetails.CircularTitle}
          onChange={(e) => {
            setContratDetails((prevState) => {
              if (!prevState) return prevState;
              return {
                ...prevState,
                CircularTitle: e.target.value,
              };
            });
          }}
          error={contratDetailsError.error}
          helperText={contratDetailsError.text}
        />
        <FaTextField
          label={"شماره بخشنامه"}
          variant={"outlined"}
          sx={{
            gridColumn: "span 2",
            display: IsSpecialPriceListAttachedToContract
              ? "block"
              : "none",
          }}
          value={contratDetails?.CircularNumber || ""}
          onChange={(e) => {
            setContratDetails((prevState) => {
              if (!prevState) return prevState;
              return {
                ...prevState,
                CircularNumber: e.target.value,
                contratTypes: prevState.contratTypes || [],
                other: prevState.other || false,
                CircularTitle: prevState.CircularTitle || "",
                CircularDate: prevState.CircularDate || "",
              };
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
            display: IsSpecialPriceListAttachedToContract
              ? "block"
              : "none",
          }}
          value={contratDetails && contratDetails.CircularDate}
          onChange={(e) => {
            setContratDetails((prevState) => {
              if (!prevState) return prevState;
              return {
                ...prevState,
                CircularDate: e.target.value,
              };
            });
          }}
          error={contratDetailsError.error}
          helperText={contratDetailsError.text}
        />

        {/* 

            TODO :
            add use state to this shit

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


      4-7- "ضريب پيشنهادي

    
    */}
        <FaTypography variant="h6" gridColumn={"span 1"}>
          4-7-
        </FaTypography>

        <TextField
          label="ضريب پيشنهادي: "
          sx={{
            gridColumn: "span 3",
          }}
          type="number"
          value={RecommendedCoefficient}
          onChange={(e) => {
            setRecommendedCoefficient(parseFloat(e.target.value));
          }}
        />

        <FaTypography variant="h6" gridColumn={"span 1"}>
          {RecommendedCoefficient
            ? RecommendedCoefficient > 1
              ? (RecommendedCoefficient * 100 - 100).toPrecision(2) +
                "% پلوس"
              : (100 - RecommendedCoefficient * 100).toPrecision(2) +
                "% مینوس"
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
        <FaTypography variant="h6" gridColumn={"span 1"}>
          4-8-
        </FaTypography>

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
              checked={AssigningType === "مناقصه عمومی"}
              control={<Radio />}
              label="مناقصه عمومی"
              onChange={(e) => {
                // @ts-ignore
                setAssigningType(e.target.value);
              }}
            />
            <FormControlLabel
              value="مناقصه محدود"
              checked={AssigningType === "مناقصه محدود"}
              control={<Radio />}
              label="مناقصه محدود"
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
              control={<FaTextField label="سایر" />}
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


      4-9- پيمان مشمول تعديل

    
    */}
        <FaTypography variant="h6" gridColumn={"span 1"}>
          4-9-
        </FaTypography>
        <FormControl
          sx={{
            gridColumn: "span 6",
          }}
        >
          <FormLabel id="demo-row-radio-buttons-group-label">
            پيمان مشمول تعديل
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="مي‌باشد"
              checked={DoesContainAdjustment}
              onChange={() => {
                // @ts-ignore
                setDoesContainAdjustment(true);
              }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="نمي‌باشد"
              checked={!DoesContainAdjustment}
              onChange={() => {
                // @ts-ignore
                setDoesContainAdjustment(false);
              }}
            />
          </RadioGroup>
        </FormControl>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FaTextField
          label="شماره"
          type="number"
          sx={{
            gridColumn: "span 3",
            display: DoesContainAdjustment ? "block" : "none",
          }}
          value={BaseIndexPeriod && BaseIndexPeriod.month}
          onChange={(e) => {
            setAdjustment((prevAdjustment) => ({
              ...prevAdjustment,
              number: parseInt(e.target.value),
              date: prevAdjustment?.date || "",
            }));
          }}
          fullWidth
          error={AdjustmentError.error}
          helperText={AdjustmentError.text}
        />
        <FaTextField
          label="تاریخ"
          type="date"
          focused
          sx={{
            gridColumn: "span 3",
            display: DoesContainAdjustment ? "block" : "none",
          }}
          value={BaseIndexPeriod && BaseIndexPeriod.month}
          onChange={(e) => {
            setAdjustment(
              (prevAdjustment) =>
                ({
                  ...prevAdjustment,
                  date: e.target.value,
                  number: e.target.value
                    ? prevAdjustment?.number || 0
                    : undefined,
                } as { number: number; date: string } | undefined)
            );
          }}
          fullWidth
          error={AdjustmentError.error}
          helperText={AdjustmentError.text}
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


      4-10- دوره شاخص مبنا

    
    */}
        <FaTypography variant="h6" gridColumn={"span 2"}>
          4-10- دوره شاخص مبنا
        </FaTypography>

        <FormControl
          sx={{
            gridColumn: "span 12",
          }}
        >
          <FormLabel id="demo-row-radio-buttons-group-label">
            نوع دوره شاخص مبنا
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="سه ماهه"
              checked={BaseIndexPeriod && BaseIndexPeriod.isQuarter}
              onChange={() => {
                setBaseIndexPeriod((prevBaseIndexPeriod) => ({
                  ...prevBaseIndexPeriod,
                  isQuarter: true,
                  quarter: prevBaseIndexPeriod?.quarter || 0,
                  month: "",
                  year: "",
                }));
              }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="ماهانه"
              checked={BaseIndexPeriod && !BaseIndexPeriod.isQuarter}
              onChange={() => {
                setBaseIndexPeriod((prevBaseIndexPeriod) => ({
                  ...prevBaseIndexPeriod,
                  isQuarter: false,
                  quarter: prevBaseIndexPeriod?.quarter || 0,
                  month: prevBaseIndexPeriod?.month || "",
                  year: prevBaseIndexPeriod?.year || "",
                }));
              }}
            />
          </RadioGroup>
        </FormControl>

        <FaTextField
          label="ماه"
          type="number"
          sx={{
            gridColumn: "span 2",
            display:
              BaseIndexPeriod && !BaseIndexPeriod.isQuarter
                ? "block"
                : "none",
          }}
          value={BaseIndexPeriod && BaseIndexPeriod.month}
          onChange={(e) => {
            setBaseIndexPeriod((prevBaseIndexPeriod) => ({
              ...prevBaseIndexPeriod,
              month: e.target.value,
              isQuarter: prevBaseIndexPeriod?.isQuarter || false,
              quarter: prevBaseIndexPeriod?.quarter || 0,
              year: prevBaseIndexPeriod?.year || "",
            }));
          }}
          error={BaseIndexPeriodError.error}
          helperText={BaseIndexPeriodError.text}
          select
          SelectProps={{
            MenuProps: {
              sx: {
                maxHeight: "20rem",
              },
            },
          }}
          fullWidth
        >
          {[
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
          ].map((m) => (
            <MenuItem value={m}>{m}</MenuItem>
          ))}
        </FaTextField>
        <FaTextField
          label="سه ماهه"
          sx={{
            gridColumn: "span 2",
            display:
              BaseIndexPeriod && BaseIndexPeriod.isQuarter
                ? "block"
                : "none",
          }}
          value={BaseIndexPeriod?.quarter || ""}
          onChange={(e) => {
            setBaseIndexPeriod((prevBaseIndexPeriod) => ({
              ...prevBaseIndexPeriod,
              quarter: parseInt(e.target.value),
              isQuarter: prevBaseIndexPeriod?.isQuarter || false,
              month: prevBaseIndexPeriod?.month || "",
              year: prevBaseIndexPeriod?.year || "",
            }));
          }}
          fullWidth
          error={BaseIndexPeriodError.error}
          helperText={BaseIndexPeriodError.text}
          select
          SelectProps={{
            MenuProps: {
              sx: {
                maxHeight: "20rem",
              },
            },
          }}
        >
          <MenuItem value={1}>اول</MenuItem>
          <MenuItem value={2}>دوم</MenuItem>
          <MenuItem value={3}>سوم</MenuItem>
        </FaTextField>
        <FaTextField
          label="سال"
          type="number"
          sx={{
            gridColumn: "span 2",
          }}
          value={BaseIndexPeriod?.year || ""}
          onChange={(e) => {
            setBaseIndexPeriod((prevBaseIndexPeriod) => ({
              ...prevBaseIndexPeriod!,
              year: e.target.value,
            }));
          }}
          error={BaseIndexPeriodError.error}
          helperText={BaseIndexPeriodError.text}
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


      4-11- تاريخ شروع كار

    
    */}
        <FaTypography variant="h6" gridColumn={"span 2"}>
          4-11- تاريخ شروع كار:
        </FaTypography>
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
          label="تاريخ شروع كار "
          type="date"
          focused
          sx={{
            gridColumn: "span 3",
          }}
          value={OperationStartDate}
          onChange={(e) => {
            setOperationStartDate(e.target.value);
          }}
          error={OperationStartDateError.error}
          helperText={OperationStartDateError.text}
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
          4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري:
        </FaTypography>

        <FaTextField
          label="خواهان"
          type="number"
          InputProps={{
            endAdornment: "درصد",
          }}
          sx={{
            gridColumn: "span 3",
          }}
          value={PhysicalProgressInArbitrationDate}
          onChange={(e) => {
            setPhysicalProgressInArbitrationDate(e.target.value);
          }}
          error={PhysicalProgressInArbitrationDateError.error}
          helperText={PhysicalProgressInArbitrationDateError.text}
        />
        {/* 


      4-13- پيشرفت ریالی كار در تاريخ درخواست داوري

    
    */}
        <FaTypography variant="h6" gridColumn={"span 5"}>
          4-13- پيشرفت ریالی كار در تاريخ درخواست داوري:
        </FaTypography>

        <FaTextField
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
          4-14- وضعیت قرارداد در تاریخ درخواست داوری:
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

            {/* <FormControlLabel
            control={
              <FaTextField label={"تاریخ"} type="date" focused />
            }
            label=""
            value={ContractStatusInArbitrationDate}
            onChange={(e) => {
              // @ts-ignore
              setContractStatusInArbitrationDate(e.target.value);
            }}
          /> */}
          </RadioGroup>
        </FormControl>

        <FormGroup
          sx={{
            display:
              ContractStatusInArbitration === "ابلاغ فسخ" ||
              ContractStatusInArbitration === "ابلاغ خاتمه"
                ? "block"
                : "none",
            gridColumn: "span 12",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="تحویل موقت"
            value={TemporaryDelivery?.checked}
            onChange={(e) => {
              // @ts-ignore
              setTemporaryDelivery({
                ...TemporaryDelivery,
                // @ts-ignore
                checked: e.target.checked,
              });
            }}
          />
          <TextField
            label="تاریخ تحویل موقت"
            disabled={!TemporaryDelivery?.checked}
            value={TemporaryDelivery?.date}
            onChange={(e) => {
              // @ts-ignore
              setTemporaryDelivery({
                ...TemporaryDelivery,
                date: e.target.value,
              });
            }}
            type="date"
            focused
            sx={{
              gridColumn: "span 3",
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="تحویل قطعی"
            onChange={(e) => {
              // @ts-ignore
              setFinalDelivery({
                ...FinalDelivery,
                // @ts-ignore
                checked: e.target.checked,
              });
            }}
            value={FinalDelivery?.checked}
          />
          <TextField
            label="تاریخ تحویل موقت"
            disabled={!FinalDelivery?.checked}
            value={FinalDelivery?.date}
            onChange={(e) => {
              // @ts-ignore
              setFinalDelivery({
                ...FinalDelivery,
                date: e.target.value,
              });
            }}
            type="date"
            focused
            sx={{
              gridColumn: "span 3",
            }}
          />
        </FormGroup>

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
        <FaTypography variant="h6" gridColumn={"span 1"}>
          4-15-
        </FaTypography>
        <FaTextField
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
          4-16- تاخیرات
        </FaTypography>
        <FaTypography variant="body1" gridColumn={"span 2"}>
          4-16-1- مجاز
        </FaTypography>
        <FaTextField
          label={"از نظر خواهان:"}
          sx={{
            gridColumn: "span 3",
          }}
          InputProps={{
            endAdornment: "روز",
          }}
          value={AuthorizedDelays}
          onChange={(e) => {
            setAuthorizedDelays(e.target.value);
          }}
          error={AuthorizedDelaysError.error}
          helperText={AuthorizedDelaysError.text}
        />
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
          4-16-2- غیر مجاز
        </FaTypography>
        <FaTextField
          label={"از نظر خواهان:"}
          sx={{
            gridColumn: "span 3",
          }}
          InputProps={{
            endAdornment: "روز",
          }}
          value={UnauthorizedDelays}
          onChange={(e) => {
            setUnauthorizedDelays(e.target.value);
          }}
          error={UnauthorizedDelaysError.error}
          helperText={UnauthorizedDelaysError.text}
        />
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
          • گزارش توجیهی تاخیرات قرارداد شامل:
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
              • برنامه های زمان‏بندی اولیه و اصلاحی ابلاغ شده
            </FaTypography>
            <FileBox />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingY={"1rem"}
          >
            <FaTypography variant="body1">
              • گزارش تهیه شده توسط پیمانکار (به همراه کلیه مستندات و
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
              • گزارش رسیدگی به تاخیرات توسط مهندس مشاور
            </FaTypography>
            <FileBox />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingY={"1rem"}
          >
            <FaTypography variant="body1">
              • مستندات ابلاغ نتایج رسیدگی به تاخیرات به پیمانکار توسط
              کارفرما
            </FaTypography>
            <FileBox />
          </Box>
        </List>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <div
          style={{
            gridColumn: "span 6",
          }}
        />
        <Button
          variant="contained"
          //   disabled={loading}
          sx={{
            gridColumn: "span 6",
            fontSize: "1.1rem",
            width: "max-content",
            padding: "0.5rem 2rem",
            justifySelf: "flex-end",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
          disabled={data?.contract_addContract?.result}
          onClick={() => {
            if (handleErrors()) {
              void createContractMutation({
                onCompleted(data, clientOptions) {
                  alert("قرارداد با موفقیت ثبت شد");
                },
                onError(error, clientOptions) {
                  console.log(clientOptions);
                  console.error(error);
                },
              });
            } else {
              void createContractMutation({
                onCompleted(data, clientOptions) {
                  alert("قرارداد با موفقیت ثبت شد");
                  console.log(data);
                },
                onError(error, clientOptions) {
                  console.log(clientOptions);
                  console.error(error);
                },
              });
              // navigate("/complaints/addComplaint");
            }
          }}
        >
          ثبت و ادامه
        </Button>

        {data?.contract_addContract?.result && (
          <Alert
            severity="success"
            sx={{
              gridColumn: "span 6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            قرارداد با موفقیت ثبت شد
            <Button
              onClick={() => {
                void createComplaint({
                  onCompleted(d,clientOptions) {
                    console.log('data', d);
                    console.log("clientOptions", clientOptions);
                    navigate(
                      `/complaints/${data?.contract_addContract?.result.id}/${d?.complaint_addComplaint?.result?.id}/addArguements/0`
                    );
                  },
                });
              }}
            >
              ادامه و ثبت درخواست داوری
            </Button>
          </Alert>
        )}
      </Box>
    </>
  );
};

export default CreateContractPage;
