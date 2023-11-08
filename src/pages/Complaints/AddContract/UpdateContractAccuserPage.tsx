/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
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
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../Context/UserStore";
import { UPDATE_COMPLAINT } from "../../../GraphQL/Complaints/Mutations";
import {
  ContractSmall,
  UPDATE_CONTRACT_BY_ACCUSED,
  UPDATE_CONTRACT_BY_ACCUSER,
} from "../../../GraphQL/Contracts/Mutations";
import { GET_CONTRACT } from "../../../GraphQL/Contracts/Queries";
import BackButton from "../../../components/BackButton";
import FaTextField from "../../../components/FaComponents/FaTextField";
import FaTypography from "../../../components/FaComponents/FaTypography";
import FileBox from "../../../components/FileBox";
import countries from "../../../static/Countries";
import states from "../../../static/states.json";
import {
  Green,
  GreenLight,
  primary,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import {
  States,
  newStates,
  newStatesObj,
} from "../../../static/States";
import {
  GET_ALL_ORGANIZATION_USERS,
  GET_USER_QUERIABLE,
} from "../../../GraphQL/Users/Queries";
import DateButton from "../../../components/DateButton";
import fehrestbaha from "../../../static/fehrestbaha.json";
import TimeLine from "../../../components/TimeLine";
import TreeChart from "../../../components/TreeChart";

const UpdateContractAccuserPage = () => {
  const user = useUserStore((state) => state.user);
  const { complaintId, contractId } = useParams();
  const [stage, setStage] = useState(1);
  const [Employer, setEmployer] = React.useState<string>();
  const [Employee, setEmployee] = React.useState<string>();
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
  const [hasIncOrDec, setHasIncOrDec] = useState(false);
  const [finalAmount, setFinalAmount] = useState<number>();
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
    CircularDate?: Date;
  }>({
    contratTypes: [""],
    CircularDate: undefined,
    CircularNumber: undefined,
    CircularTitle: undefined,
    other: false,
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
    React.useState<string>();
  const [ContractNumberError, setContractNumberError] =
    React.useState({
      error: false as boolean,
      text: "" as string,
    });
  const [ContractDate, setContractDate] = React.useState<Date>();
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
  ] = React.useState<string>();

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
    date: Date;
  }>();
  const [AdjustmentError, setAdjustmentError] = useState({
    error: false as boolean,
    text: "" as string,
  });
  const [BaseIndexPeriod, setBaseIndexPeriod] = React.useState<{
    isQuarter: boolean;
    quarter: string;
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
    React.useState<Date>();
  const [OperationStartDateError, setOperationStartDateError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [
    PhysicalProgressInArbitrationDate,
    setPhysicalProgressInArbitrationDate,
  ] = React.useState<number>();
  const [
    PhysicalProgressInArbitrationDateError,
    setPhysicalProgressInArbitrationDateError,
  ] = React.useState({ error: false as boolean, text: "" as string });
  const [
    FinancialProgressInArbitrationDateAccuser,
    setFinancialProgressInArbitrationDateAccuser,
  ] = React.useState<number>();
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
    date: Date;
  }>();
  const [FinalDelivery, setFinalDelivery] = useState<{
    checked: boolean;
    date: Date;
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
    React.useState<number>();
  const [AuthorizedDelaysError, setAuthorizedDelaysError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [UnauthorizedDelays, setUnauthorizedDelays] =
    React.useState<number>();
  const [UnauthorizedDelaysError, setUnauthorizedDelaysError] =
    React.useState({ error: false as boolean, text: "" as string });
  const [AccusedDepartmentId, setAccusedDepartmentId] =
    React.useState<string>();
  React.useState({ error: false as boolean, text: "" as string });
  const [AccuserDepartmentId, setAccuserDepartmentId] =
    React.useState<string>();
  const [AccusedDepartmentIdError, setAccusedDepartmentIdError] =
    React.useState<{ error: boolean; text: string }>();
  const [FileNames, setFileNames] = useState<string[]>();
  const [Files, SetFiles] = useState<File[]>();

  const [departments, setDepartments] = React.useState<
    {
      label: string;
      id: string;
      type:
        | "INDIVIDUAL"
        | "ORGANIZATION"
        | "CONTRACTOR_OR_CONSULTANT";
    }[]
  >([]);
  useQuery(GET_ALL_ORGANIZATION_USERS, {
    onCompleted(data) {
      console.log(data);
      // remove department that id is e7a85297-91d4-4f27-a4b2-ff394fe71dd3
      setDepartments(
        data?.user_getUsers?.result?.items?.map(
          (item: {
            id: number;
            fullName: string;
            userType:
              | "INDIVIDUAL"
              | "ORGANIZATION"
              | "CONTRACTOR_OR_CONSULTANT";
          }) => ({
            label: item.fullName,
            id: item.id,
            type: item.userType,
          })
        )
      );
    },
    onError(error) {
      console.log(error);
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
    if (!ContractDate) {
      setContractDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!InitialBudget) {
      setInitialBudgetError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!InitialTimePeriod) {
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

    if (BaseIndexPeriod && !BaseIndexPeriod.month) {
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

    if (!OperationStartDate) {
      setOperationStartDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!PhysicalProgressInArbitrationDate) {
      setPhysicalProgressInArbitrationDateError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!FinancialProgressInArbitrationDateAccuser) {
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

    if (!AuthorizedDelays) {
      setAuthorizedDelaysError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!UnauthorizedDelays) {
      setUnauthorizedDelaysError({
        error: true,
        text: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AccusedDepartmentId) {
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
  // @ts-ignore
  const [createContractMutation, { data, loading }] = useMutation(
    UPDATE_CONTRACT_BY_ACCUSER,
    {
      variables: {
        AccuserRelatedPeople: JSON.stringify(RelatedPeopleByAccusser),
        AccusedRelatedPeople: JSON.stringify(RelatedPeopleByAccussed),
        AccuserNationality: Nationality,
        ContractType: contratDetails && contratDetails.contratTypes,
        CircularNumber:
          contratDetails && contratDetails.CircularNumber,
        CircularDate: contratDetails && contratDetails.CircularDate,
        ContractSubject: ContractSubject && ContractSubject,
        // ContractNumber: ContractNumber,
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
        UnauthorizedDelaysAccuser: UnauthorizedDelays || undefined,
        id: contractId ? parseInt(contractId) : 0,
        AccusedDepartmentId: AccusedDepartmentId,
        AccuserDepartmentId:
          user.userType == "CONTRACTOR_OR_CONSULTANT"
            ? user.id
            : user.parentId,
      },
    }
  );

  //
  //
  //
  const [treeViewObject, setTreeViewObject] = useState<{
    fullName: string;
    id: string;
    parent?: {
      fullName: string;
      id: string;
    };
  }>();
  //
  //
  const [getUser] = useLazyQuery(GET_USER_QUERIABLE, {
    variables: {
      id: AccusedDepartmentId,
    },
  });
  //
  //
  //
  //

  const handleParent = (
    parent: {
      fullName: string;
      id: string;
      parent?: {
        fullName: string;
        id: string;
      };
    },
    oldObject: {
      fullName: string;
      id: string;
      parent?: {
        fullName: string;
        id: string;
      };
    }
  ) => {
    console.log(parent);

    const object = {
      fullName: parent.fullName,
      id: parent.id,
      children: [oldObject],
    };
    console.log("object", object);

    if (parent.parent) {
      handleParent(parent.parent, object);
    } else {
      setTreeViewObject(object);
    }
  };
  //
  //
  //
  //
  //
  //
  //

  useQuery(GET_CONTRACT, {
    variables: {
      id: contractId ? parseInt(contractId) : 0,
    },
    onCompleted(data) {
      console.log("GET_CONTRACT", data);
      const contract = data.contract_getContracts.result
        .items[0] as ContractSmall;
      console.log(contract);
      setContratDetails({
        ...contratDetails,
        contratTypes: contract.contractTypeByAccuser || [""],
        CircularNumber: contract.circularNumberByAccuser || undefined,
        CircularDate: contract.circularDateByAccuser || undefined,
        CircularTitle: contract.contractSubjectByAccuser || undefined,
        other:
          contract.circularDateByAccuser ||
          contract.circularNumberByAccuser ||
          contract.contractSubjectByAccuser
            ? true
            : false,
      });
      setContractSubject(contract.contractSubjectByAccuser);
      setAccusedDepartmentId(contract.accusedDepartmentUserId);
      setAccuserDepartmentId(contract.accuserDepartmentUserId);
      setContractNumber(contract.contractNumberByAccuser);
      setContractDate(contract.contractDateByAccuser);
      setInitialBudget(contract.initialBudgetByAccuser);
      setInitialTimePeriod(
        contract.initialTimePeriodByAccuser || undefined
      );
      setPriceListOfBasicUnitOfField(
        JSON.parse(
          contract.priceListOfBasicUnitOfFieldByAccuser || ""
        )
      );
      setIsSpecialPriceListAttachedToContract(
        contract.isSpecialPriceListAttachedToContractByAccuser
      );
      contract.accuserRelatedPeopleByAccuser &&
        setRelatedPeopleByAccusser(
          JSON.parse(contract.accuserRelatedPeopleByAccuser)
        );
      contract.accusedRelatedPeopleByAccuser &&
        setRelatedPeopleByAccussed(
          JSON.parse(contract.accusedRelatedPeopleByAccuser)
        );
      setRecommendedCoefficient(
        contract.recommendedCoefficientByAccuser
      );
      setNationality(contract.accuserNationality);
      setAssigningType(contract.assigningTypeByAccuser);
      setDoesContainAdjustment(
        contract.doesContainAdjustmentByAccuser == "true"
      );
      setBaseIndexPeriod(
        JSON.parse(contract.baseIndexPeriodByAccuser || "")
      );
      setOperationStartDate(
        contract.operationStartDateByAccuser || new Date()
      );
      setFinancialProgressInArbitrationDateAccuser(
        contract.financialProgressInArbitrationDateByAccuser
      );
      setContractStatusInArbitration(
        JSON.parse(
          contract.contractStatusAndDateInArbitrationByAccuser || ""
        )
      );
      setSupervisionDepartment(
        contract.supervisionDepartmentByAccuser
      );
      setContractNumber(contractId);
      setAssigningType(contract.assigningTypeByAccuser);
      setAuthorizedDelays(
        contract.authorizedDelaysByAccuser
          ? contract.authorizedDelaysByAccuser
          : undefined
      );
      setUnauthorizedDelays(contract.unauthorizedDelaysByAccuser);
      setContractNumber(contract.contractNumberByAccuser);
    },
  });

  //
  //
  //
  //
  //
  //
  //

  const navigate = useNavigate();
  const [updateCompaint] = useMutation(UPDATE_COMPLAINT, {
    variables: {
      id: complaintId ? parseInt(complaintId) : 0,
      complaintState:
        newStatesObj.waitingForAccusedToRegisterArbitrationTerms.cap,
    },
    onCompleted(data) {
      console.log("state", states.AccusedCompletedContract);
      console.log(data);
      alert("ثبت شد");
      navigate(
        `/complaints/${contractId}/${complaintId}/addComplaint`
      );
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

  return (
    <>
      <Box position={"relative"} width={"100%"}>
        <BackButton to="/complaints" />
        <TimeLine stage={stage} />
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(6, 1fr)"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          padding={"2rem"}
          paddingTop={"0"}
          border={`2px solid ${stage == 1 ? secondary : primary}`}
          borderRadius={"1rem"}
          position={"relative"}
          marginY={"3rem"}
          paddingX={"25%"}
        >
          <Box
            gridColumn={"span 6"}
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
          <FaTextField
            label="عنوان قرارداد: "
            variant="outlined"
            sx={{
              gridColumn: "span 6",
            }}
            value={ContractSubject}
            focused={ContractSubject ? true : false}
            onChange={(e) => {
              setContractSubject(e.target.value);
            }}
            error={ContractSubjectError.error}
            helperText={ContractSubjectError.text}
          />
          <div
            style={{
              gridColumn: "span 6",
            }}
          />
          <TextField
            label="شماره قرارداد: "
            variant="outlined"
            sx={{
              gridColumn: "span 3",
            }}
            value={ContractNumber}
            type="number"
            focused={ContractNumber ? true : false}
            onChange={(e) => {
              setContractNumber(String(e.target.value));
            }}
            error={ContractNumberError.error}
            helperText={ContractNumberError.text}
          />
          <DateButton
            date={ContractDate}
            setDate={setContractDate}
            sx={{
              gridColumn: "span 3",
            }}
            label="تاریخ انعقاد قرارداد"
          />
          <div
            style={{
              gridColumn: "span 6",
            }}
          />
          <TextField
            label="کارفرما"
            sx={{
              width: "100%",
              gridColumn: "span 3",
            }}
            value={
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "ORGANIZATION"
                ? departments.find((d) => {
                    return d.id === user.parentId;
                  })!.label
                : user.userType == "ORGANIZATION"
                ? user.fullName
                : Employer
            }
            onChange={(e) => {
              setEmployer(e.target.value);
              if (e) {
                console.log(e.target.value);
                setAccusedDepartmentId(e.target.value);
                void getUser({
                  variables: {
                    id: e.target.value,
                  },
                  onCompleted(data) {
                    console.log(data);
                    if (
                      data?.user_getUserQueryable?.result?.items[0]
                        ?.parent
                    ) {
                      handleParent(
                        data?.user_getUserQueryable?.result?.items[0]
                          ?.parent,
                        {
                          fullName:
                            data?.user_getUserQueryable?.result
                              ?.items[0]?.fullName,
                          id: data?.user_getUserQueryable?.result
                            .items[0]?.id,
                        }
                      );
                    } else {
                      setTreeViewObject({
                        fullName:
                          data?.user_getUserQueryable?.result
                            ?.items[0]?.fullName,
                        id: data?.user_getUserQueryable?.result
                          .items[0]?.id,
                      });
                    }
                  },
                });
              }
            }}
            select={
              user.userType == "ORGANIZATION" ||
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "ORGANIZATION"
                ? false
                : true
            }
            disabled={
              user.userType == "ORGANIZATION" ||
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "ORGANIZATION"
                ? true
                : false
            }
            //   disabled
          >
            {departments.map((item) => (
              <MenuItem value={item.id}>{item.label}</MenuItem>
            ))}
          </TextField>
          <FaTextField
            label="طرف قرارداد"
            sx={{
              width: "100%",
              gridColumn: "span 3",
            }}
            value={
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "CONTRACTOR_OR_CONSULTANT"
                ? departments.find((d) => {
                    return d.id === user.parentId;
                  })!.label
                : user.userType == "CONTRACTOR_OR_CONSULTANT"
                ? user.fullName
                : Employee
            }
            onChange={(e) => {
              setEmployee(e.target.value);
              {
                setEmployer(e.target.value);
                if (e) {
                  console.log(e.target.value);
                  setAccusedDepartmentId(e.target.value);
                  void getUser({
                    variables: {
                      id: e.target.value,
                    },
                    onCompleted(data) {
                      console.log(data);
                      if (
                        data?.user_getUserQueryable?.result?.items[0]
                          ?.parent
                      ) {
                        handleParent(
                          data?.user_getUserQueryable?.result
                            ?.items[0]?.parent,
                          {
                            fullName:
                              data?.user_getUserQueryable?.result
                                ?.items[0]?.fullName,
                            id: data?.user_getUserQueryable?.result
                              .items[0]?.id,
                          }
                        );
                      } else {
                        setTreeViewObject({
                          fullName:
                            data?.user_getUserQueryable?.result
                              ?.items[0]?.fullName,
                          id: data?.user_getUserQueryable?.result
                            .items[0]?.id,
                        });
                      }
                    },
                  });
                }
              }
            }}
            select={
              user.userType == "CONTRACTOR_OR_CONSULTANT" ||
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "CONTRACTOR_OR_CONSULTANT"
                ? false
                : true
            }
            disabled={
              user.userType == "CONTRACTOR_OR_CONSULTANT" ||
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "CONTRACTOR_OR_CONSULTANT"
                ? true
                : false
            }
          >
            {departments.map((item) => (
              <MenuItem value={item.id}>{item.label}</MenuItem>
            ))}
          </FaTextField>
          <div
            style={{
              gridColumn: "span 6",
            }}
          />
          <FaTextField
            label="مبلغ اوليه/ حق‌الزحمه قرارداد: "
            variant="outlined"
            type="number"
            focused={InitialBudget ? true : false}
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
          <FaTextField
            label="مدت اوليه قرارداد: "
            variant="outlined"
            focused={InitialTimePeriod ? true : false}
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
              gridColumn: "span 6",
            }}
          />
          <FormControlLabel
            label={"ابلاغ افزایش / کاهش مبلغ"}
            sx={{
              gridColumn: "span 3",
            }}
            control={
              <Checkbox
                checked={hasIncOrDec}
                onChange={(e) => {
                  setHasIncOrDec(e.target.checked);
                }}
              />
            }
          />
          <FaTextField
            label="مبلغ نهایی قرارداد"
            variant="outlined"
            type="number"
            InputProps={{
              endAdornment: "ریال",
            }}
            sx={{
              gridColumn: "span 3",
            }}
            value={finalAmount}
            onChange={(e) => {
              setFinalAmount(parseInt(e.target.value));
            }}
            disabled={!hasIncOrDec}
          />

          {/* check box ابلاغ افزایش / کاهش مبلغ => وقتی انتخاب کرد یه باکس به اسم مبلغ نهایی قرارداد اضاف بشه */}

          <div
            style={{
              gridColumn: "span 6",
            }}
          />

          <Button
            sx={{
              color: secondary,
              backgroundColor: primary,
              borderRadius: "0.5rem",
              gridColumn: "5/span 2",
              display: stage == 1 ? "flex" : "none",
            }}
            onClick={() => {
              setStage(2);
            }}
          >
            ثبت و ادامه
          </Button>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(12, 1fr)"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          rowGap={"2rem"}
          padding={"2rem"}
          paddingTop={"0"}
          border={`2px solid ${secondary}`}
          borderRadius={"1rem"}
          position={"relative"}
          marginY={"3rem"}
          paddingX={"25%"}
          sx={{
            opacity: stage == 2 ? "100%" : 0,
            height: stage == 2 ? "max-content" : 0,
            overflow: stage == 2 ? "unset" : "hidden",
            transition: "all 0.2s ease-in-out",
          }}
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
              فرم تکمیلی اطلاعات قرارداد
            </FaTypography>
          </Box>

          {/* 


      1- طرفین قرارداد


  
  */}
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            طرفین قرارداد
          </FaTypography>

          <FaTextField
            label="نام  خواهان"
            sx={{
              width: "100%",
              gridColumn: "span 6",
            }}
            value={
              departments.find((item) => {
                return item.id === AccuserDepartmentId;
              })?.label
            }
            placeholder={
              departments.find((item) => {
                return item.id === AccuserDepartmentId;
              })?.label
            }
            focused
            //   disabled
          />
          <FaTextField
            label="نام خوانده"
            sx={{
              width: "100%",
              gridColumn: "span 6",
            }}
            value={
              departments.find(
                (item) =>
                  AccusedDepartmentId &&
                  item.id === AccusedDepartmentId
              )?.label
            }
            placeholder={
              departments.find(
                (item) =>
                  AccusedDepartmentId &&
                  item.id === AccusedDepartmentId
              )?.label
            }
            focused
            //   disabled
          />
          {/* <Autocomplete
        disablePortal
        options={departments.filter(
          (item: { id: string }) =>
            item.id !== "e7a85297-91d4-4f27-a4b2-ff394fe71dd3"
        )}
        sx={{
          width: "100%",
          gridColumn: "span 3",
        }}
        renderInput={(params) => (
          <FaTextField
            {...params}
            label="نام  خوانده"
            error={
              AccusedDepartmentIdError &&
              AccusedDepartmentIdError.error
            }
            helperText={
              AccusedDepartmentIdError &&
              AccusedDepartmentIdError.text
            }
            value={
              departments.find(
                (item) =>
                  AccusedDepartmentId && item.id === AccusedDepartmentId
              )?.label
            }
            placeholder={
              departments.find(
                (item) =>
                  AccusedDepartmentId && item.id === AccusedDepartmentId
              )?.label
            }
          />
        )}
        onChange={(_e, value) => {
          if (value) {
            console.log(value);
            setAccusedDepartmentId(value.id.toString());
            void getUser({
              variables: {
                id: value.id.toString(),
              },
              onCompleted(data) {
                console.log(data);
                if (
                  data?.user_getUserQueryable?.result?.items[0]
                    ?.parent
                ) {
                  handleParent(
                    data?.user_getUserQueryable?.result?.items[0]
                      ?.parent,
                    {
                      fullName:
                        data?.user_getUserQueryable?.result
                          ?.items[0]?.fullName,
                      id: data?.user_getUserQueryable?.result
                        .items[0]?.id,
                    }
                  );
                } else {
                  setTreeViewObject({
                    fullName:
                      data?.user_getUserQueryable?.result?.items[0]
                        ?.fullName,
                    id: data?.user_getUserQueryable?.result.items[0]
                      ?.id,
                  });
                }
              },
            });
          }
        }}
        value={departments.find(
          (item) =>
            AccusedDepartmentId && item.id === AccusedDepartmentId
        )}
      /> */}
          {/* {AccusedDepartmentId} */}
          {/* <TreeChart gridColumn={"span 12"} object={treeViewObject} /> */}

          {/* <Divider
        orientation="horizontal"
        sx={{
          gridColumn: "span 12",
        }}
      /> */}

          <TreeChart gridColumn={"span 12"} object={treeViewObject} />

          <div
            style={{
              gridColumn: "span 12",
            }}
          />

          {/* 


      2- تابعيت

    
    */}
          {/* <div
        style={{
          gridColumn: "span 4",
        }}
      /> */}
          <FaTypography
            variant="h5"
            gridColumn={"span 6"}
            textAlign={"center"}
          >
            تابعيت
          </FaTypography>
          <FaTextField
            label="تابعيت : "
            variant="outlined"
            sx={{
              gridColumn: "span 6",
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

          {/* <div
        style={{
          gridColumn: "span 4",
        }}
      /> */}

          {/* 


    3- مشخصات خوانده (امضاکننده قرارداد)

  
  */}

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />

          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            افراد مطلع و مرتبط با پروژه
          </FaTypography>
          <Box
            gridColumn={"span 6"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={2}
          >
            <FaTypography variant="body1" gridColumn={"span 12"}>
              اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه
              از طرف خواهان:
            </FaTypography>
            {RelatedPeopleByAccusser &&
              RelatedPeopleByAccusser.map((item, index) => (
                <Box
                  key={index}
                  display={"grid"}
                  gridTemplateColumns={"repeat(12,1fr)"}
                >
                  <Box
                    gridColumn={"span 12"}
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
                backgroundColor: primary,
                color: "white",
                "&:hover": {
                  backgroundColor: GreenLight,
                  color: secondaryDark,
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
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={2}
          >
            <FaTypography variant="body1" gridColumn={"span 12"}>
              اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه
              از طرف خوانده:
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
                      lg: "span 12",
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
                justifySelf: "center",
                backgroundColor: primary,
                color: "white",
                "&:hover": {
                  backgroundColor: GreenLight,
                  color: secondaryDark,
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
          {/* 
      <div
        style={{
          gridColumn: "span 12",
        }}
      /> */}

          {/* 


    4- مشخصات قرارداد

  
  */}

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            مشخصات قرارداد
          </FaTypography>
          <FaTypography
            variant="h6"
            gridColumn={"span 12"}
            textAlign={"justify"}
          >
            {
              "در این قسمت لازم است انواع قرارداد همسان سازمان برنامه و بودجه کشور که مورد استفاده قرار گرفته است، انتخاب شود:"
            }
          </FaTypography>

          <FormGroup
            sx={{
              gridColumn: "span 12",
              gap: "1rem",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={
                <FaTypography>
                  موافقتنامه و شرایط عمومی و شرایط خصوصی پیمان‌ها-
                  نشریه شماره ۴۳۱۱ – بخشنامه شماره 842/54-1088/102
                  مورخ ۱۳۷۸/۰۳/۰۳
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
                  انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع-
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
                  انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع-
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
                  انعقاد پیمان بر اساس فهرست بهای تجمیع شده راه، باند
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
              label="	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره - نشریه شماره ۴۳۱۸- بخشنامه شماره ۱۰۵/۸۴۲-۵۴/۲۴۶۰- مورخ ۱۳۷۹/۰۴/۲۹ "
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
              label="	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره پژوهشی - نشریه شماره 3419- بخشنامه شماره 2753/54-1670/102 مورخ ۱۳۷۹/۰5/۲۴ "
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
              label="	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مدیریت طرح- نشریه شماره ۲۴۱۲۱ مورخ ۱۳۸۰/۰۱/۲۸ "
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
              label="	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های مهندسی، تأمین کالا و تجهیزات، ساختمان و نصب به صورت توأم (EPC) برای کارهای صنعتی - نشریه شماره ۵۴۹۰ مورخ ۰۱/۰۳/۱۳۸۱ "
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
              label="	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های تامین کالا و تجهیزات، ساختمان و نصب به صورت توام  (PC)، برای کارهای صنعتی مورخ  ۱۸/۱۲/۱۳۸۳ "
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
              label="	قرارداد همسان طرح و ساخت (EPC غیر صنعتی)- 85428/101 مورخ ۱۵/۰۵/۱۳۸۴ "
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
              label="	موافقت‌نامه مشارکت عمومی- خصوصی (PPP) بخشنامه شماره ۹۳/۱۷۲۸۰۴-مورخ ۲۶/۱۲/۱۳۹۳ "
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
              label="	موافقتنامه ساخت، بهره‌برداری، واگذاری  (BOT)- نشریه شماره ۴۶۹ مورخ ۲۴/۱۰/۱۳۸۷ "
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
              label="   سایر "
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
          <DateButton
            date={contratDetails && contratDetails.CircularDate}
            setDate={(date) => {
              //@ts-ignore
              setContratDetails((prevState) => ({
                ...prevState,
                CircularDate: date,
              }));
            }}
            sx={{
              gridColumn: "span 2",
              display:
                contratDetails && contratDetails.other
                  ? "block"
                  : "none",
            }}
            label={"تاریخ بخشنامه"}
          />
          <div
            style={{
              gridColumn: "span 12",
            }}
          />

          {/* 


    4-1- موضوع قرارداد

  
  */}
          {/* <FaTypography variant="h5" gridColumn={"span 1"}>
        4-1-
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
      /> */}

          {/* 


    4-2

  
  */}
          {/* <FaTypography variant="h6" gridColumn={"span 12"}>
        4-2- قرارداد شماره و تاريخ:
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
      /> */}
          {/* 


    4-3

  
  */}
          {/* <FaTypography variant="h6" gridColumn={"span 1"}>
        4-3-
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
      /> */}

          {/* 


    4-4

  
  */}
          {/* <FaTypography variant="h6" gridColumn={"span 1"}>
        4-4-
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
      /> */}

          {/* 


    4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار

  
  */}

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            فهرست‌هاي پايه منضم به پيمان و سال انتشار
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
                    lg: "span 12",
                  }}
                  display={"grid"}
                  gridTemplateColumns={"repeat(2,1fr)"}
                  columnGap={"2rem"}
                  padding={"0rem 2rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
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
                    // select
                    // SelectProps={{
                    //   MenuProps: {
                    //     sx: {
                    //       maxHeight: "20rem",
                    //     },
                    //   },
                    // }}
                  >
                    {/* {[
                      "1370",
                      "1371",
                      "1372",
                      "1373",
                      "1374",
                      "1375",
                      "1376",
                      "1377",
                      "1378",
                      "1379",
                      "1380",
                      "1381",
                      "1382",
                      "1383",
                      "1384",
                      "1385",
                      "1386",
                      "1387",
                      "1388",
                      "1389",
                      "1390",
                      "1391",
                      "1392",
                      "1393",
                      "1394",
                      "1395",
                      "1396",
                      "1397",
                      "1398",
                      "1399",
                      "1400",
                      "1401",
                      "1402",
                      "1403",
                    ].map((y) => (
                      <MenuItem value={y}>{y}</MenuItem>
                    ))} */}
                  </FaTextField>
                  <TextField
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
                    select
                    SelectProps={{
                      MenuProps: {
                        sx: {
                          maxHeight: "20rem",
                        },
                      },
                    }}
                  >
                    {fehrestbaha.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
            ))}

          <IconButton
            sx={{
              gridColumn: "span 12",
              justifySelf: "center",
              backgroundColor: primary,
              color: "white",
              "&:hover": {
                backgroundColor: GreenLight,
                color: secondaryDark,
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

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          {/* <div
        style={{
          gridColumn: "span 12",
        }}
      /> */}

          {/* 


    4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان

  
  */}
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            فهرست بهاي خاص (غيرپايه) منضم به پيمان:
          </FaTypography>

          <RadioGroup
            defaultValue={IsSpecialPriceListAttachedToContract}
            name="radio-buttons-group"
            row
            sx={{
              gridColumn: "span 12",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="دارد"
              defaultChecked
              checked={
                IsSpecialPriceListAttachedToContract === "دارد"
              }
              onChange={() => {
                // @ts-ignore
                setIsSpecialPriceListAttachedToContract("دارد");
              }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="ندارد"
              checked={
                IsSpecialPriceListAttachedToContract === "ندارد"
              }
              onChange={() => {
                // @ts-ignore
                setIsSpecialPriceListAttachedToContract("ندارد");
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
            fullWidth
            sx={{
              gridColumn: "span 4",
              display:
                IsSpecialPriceListAttachedToContract === "دارد"
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
            fullWidth
            sx={{
              gridColumn: "span 4",
              display:
                IsSpecialPriceListAttachedToContract === "دارد"
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
                  CircularDate: prevState.CircularDate
                    ? new Date(prevState.CircularDate)
                    : new Date(),
                };
              });
            }}
            error={contratDetailsError.error}
            helperText={contratDetailsError.text}
          />
          <DateButton
            date={contratDetails && contratDetails.CircularDate}
            setDate={(date) => {
              //@ts-ignore
              setContratDetails((prevState) => ({
                ...prevState,
                CircularDate: date,
              }));
            }}
            sx={{
              gridColumn: "span 4",
              display:
                IsSpecialPriceListAttachedToContract === "دارد"
                  ? "block"
                  : "none",
            }}
            label={"تاریخ بخشنامه"}
          />

          {/* 

          TODO :
          add use state to this shit

    */}

          {/* <div
        style={{
          gridColumn: "span 12",
        }}
      /> */}
          {/* <Divider
        sx={{
          gridColumn: "span 6",
        }}
      /> */}
          {/* <div
        style={{
          gridColumn: "span 12",
        }}
      /> */}

          {/* 


    4-7- "ضريب پيشنهادي

  
  */}

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          <FaTypography
            variant="h5"
            gridColumn={"span 3"}
            textAlign={"center"}
          >
            ضريب پيشنهادی
          </FaTypography>

          <TextField
            label="ضريب پيشنهادي: "
            sx={{
              gridColumn: "span 6",
            }}
            type="number"
            value={RecommendedCoefficient}
            onChange={(e) => {
              setRecommendedCoefficient(parseFloat(e.target.value));
            }}
          />

          <FaTypography variant="h6" gridColumn={"span 4"}>
            {RecommendedCoefficient
              ? RecommendedCoefficient > 1
                ? (RecommendedCoefficient * 100 - 100).toPrecision(
                    2
                  ) + "% پلوس"
                : (100 - RecommendedCoefficient * 100).toPrecision(
                    2
                  ) + "% مینوس"
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
          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />

          {/* 


    4-8- نحوه واگذاري كار

  
  */}

          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            نحوه واگذاري كار
          </FaTypography>

          <FormControl
            sx={{
              gridColumn: "span 12",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <FormLabel id="demo-row-radio-buttons-group-label">
          نحوه واگذاري كار
        </FormLabel> */}
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
                value="سایر"
                checked={AssigningType === "سایر"}
                control={<Radio />}
                label="سایر"
                onChange={(e) => {
                  // @ts-ignore
                  setAssigningType(e.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <FaTextField
                    label="سایر"
                    disabled={AssigningType !== "سایر"}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          {/* <Divider
        sx={{
          gridColumn: "span 6",
        }}
      />
      <div
        style={{
          gridColumn: "span 12",
        }}
      /> */}

          {/* 


    4-9- پيمان مشمول تعديل

  
  */}

          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            پيمان مشمول تعديل
          </FaTypography>
          <FormControl
            sx={{
              gridColumn: "span 12",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <FormLabel id="demo-row-radio-buttons-group-label">
          پيمان مشمول تعديل
        </FormLabel> */}
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
              gridColumn: "span 6",
              display: DoesContainAdjustment ? "block" : "none",
            }}
            value={Adjustment && Adjustment.number}
            onChange={(e) => {
              setAdjustment((prevAdjustment) => ({
                ...prevAdjustment,
                number: parseInt(e.target.value),
                date: prevAdjustment?.date || new Date(),
              }));
            }}
            fullWidth
            error={AdjustmentError.error}
            helperText={AdjustmentError.text}
          />

          <DateButton
            date={Adjustment && Adjustment.date}
            setDate={(date) => {
              setAdjustment(
                (prevAdjustment) =>
                  ({
                    ...prevAdjustment,
                    date: date,
                    number: date
                      ? prevAdjustment?.number || 0
                      : undefined,
                  } as unknown as
                    | { number: number; date: Date }
                    | undefined)
              );
            }}
            sx={{
              gridColumn: "span 6",
              display: DoesContainAdjustment ? "block" : "none",
            }}
            label="تاریخ"
          />
          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />

          {/* 


    4-10- دوره شاخص مبنا

  
  */}
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            دوره شاخص مبنا
          </FaTypography>

          <FormControl
            sx={{
              gridColumn: "span 12",
              justifyContent: "center",
              alignItems: "center",
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
                    quarter: prevBaseIndexPeriod?.quarter || "",
                    month: "",
                    year: "",
                  }));
                }}
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="ماهانه"
                checked={
                  BaseIndexPeriod && !BaseIndexPeriod.isQuarter
                }
                onChange={() => {
                  setBaseIndexPeriod((prevBaseIndexPeriod) => ({
                    ...prevBaseIndexPeriod,
                    isQuarter: false,
                    quarter: prevBaseIndexPeriod?.quarter || "",
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
              gridColumn: "span 4",
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
                quarter: prevBaseIndexPeriod?.quarter || "",
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
              gridColumn: "span 4",
              display:
                BaseIndexPeriod && BaseIndexPeriod.isQuarter
                  ? "block"
                  : "none",
            }}
            value={BaseIndexPeriod?.quarter || ""}
            onChange={(e) => {
              setBaseIndexPeriod((prevBaseIndexPeriod) => {
                if (!prevBaseIndexPeriod) return prevBaseIndexPeriod;
                return {
                  ...prevBaseIndexPeriod,
                  quarter: e.target.value,
                };
              });
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
            <MenuItem value={"اول"}>اول</MenuItem>
            <MenuItem value={"دوم"}>دوم</MenuItem>
            <MenuItem value={"سوم"}>سوم</MenuItem>
            <MenuItem value={"چهارم"}>چهارم</MenuItem>
          </FaTextField>
          <FaTextField
            label="سال"
            type="number"
            sx={{
              gridColumn: "span 4",
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
            select
            SelectProps={{
              MenuProps: {
                sx: {
                  maxHeight: "20rem",
                },
              },
            }}
          >
            {[
              "1370",
              "1371",
              "1372",
              "1373",
              "1374",
              "1375",
              "1376",
              "1377",
              "1378",
              "1379",
              "1380",
              "1381",
              "1382",
              "1383",
              "1384",
              "1385",
              "1386",
              "1387",
              "1388",
              "1389",
              "1390",
              "1391",
              "1392",
              "1393",
              "1394",
              "1395",
              "1396",
              "1397",
              "1398",
              "1399",
              "1400",
              "1401",
              "1402",
              "1403",
            ].map((y) => (
              <MenuItem value={y}>{y}</MenuItem>
            ))}
          </FaTextField>

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />

          {/* 


    4-11- تاريخ شروع كار

  
  */}
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            تاريخ شروع كار
          </FaTypography>

          <div
            style={{
              gridColumn: "span 4",
            }}
          />

          <DateButton
            date={OperationStartDate}
            setDate={setOperationStartDate}
            sx={{
              gridColumn: "span 4",
            }}
            label="تاريخ شروع كار "
          />
          {/* 


    4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري

  
  */}
          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          <FaTypography
            variant="h6"
            gridColumn={"span 6"}
            textAlign={"center"}
          >
            پيشرفت فيزيكي كار در تاريخ درخواست داوري
          </FaTypography>

          {/* <div
        style={{
          gridColumn: "span 4",
        }}
      /> */}

          <FaTextField
            label="خواهان"
            type="number"
            InputProps={{
              endAdornment: "درصد",
            }}
            sx={{
              gridColumn: "span 6",
            }}
            value={PhysicalProgressInArbitrationDate}
            onChange={(e) => {
              setPhysicalProgressInArbitrationDate(
                parseInt(e.target.value)
              );
            }}
            error={PhysicalProgressInArbitrationDateError.error}
            helperText={PhysicalProgressInArbitrationDateError.text}
          />
          {/* 


    4-13- پيشرفت ریالی كار در تاريخ درخواست داوري

  
  */}
          <FaTypography
            variant="h6"
            gridColumn={"span 6"}
            textAlign={"center"}
          >
            پيشرفت ریالی كار در تاريخ درخواست داوري:
          </FaTypography>

          {/* <div
        style={{
          gridColumn: "span 4",
        }}
      /> */}

          <FaTextField
            label="خواهان"
            type="number"
            InputProps={{
              endAdornment: "درصد",
            }}
            sx={{
              gridColumn: "span 6",
            }}
            value={FinancialProgressInArbitrationDateAccuser}
            onChange={(e) => {
              setFinancialProgressInArbitrationDateAccuser(
                parseInt(e.target.value)
              );
            }}
            error={
              FinancialProgressInArbitrationDateAccuserError.error
            }
            helperText={
              FinancialProgressInArbitrationDateAccuserError.text
            }
          />

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />

          {/* 


    4-14- وضعیت قرارداد در تاریخ درخواست داوری

  
  */}
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            وضعیت قرارداد در تاریخ درخواست داوری
          </FaTypography>

          <FormControl
            sx={{
              gridColumn: "span 12",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioGroup
              row
              // aria-labelledby="demo-row-radio-buttons-group-label"
              // name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="ابلاغ خاتمه"
                control={<Radio />}
                label="ابلاغ خاتمه"
                checked={
                  ContractStatusInArbitration === "ابلاغ خاتمه"
                }
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
                  ? undefined
                  : "none",
              gridColumn: "span 12",
              justifyContent: "center",
              alignItems: "center",
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
          </FormGroup>

          <DateButton
            date={TemporaryDelivery && TemporaryDelivery.date}
            setDate={(date) => {
              setTemporaryDelivery({
                ...TemporaryDelivery,
                // @ts-ignore
                date: date,
              });
            }}
            sx={{
              gridColumn: "span 6",
              display: TemporaryDelivery?.checked ? "block" : "none",
            }}
            label="تاریخ تحویل موقت"
          />

          <DateButton
            date={FinalDelivery && FinalDelivery.date}
            setDate={(date) => {
              setFinalDelivery({
                ...FinalDelivery,
                // @ts-ignore
                date: date,
              });
            }}
            sx={{
              gridColumn: "span 6",
              display: FinalDelivery?.checked ? "block" : "none",
            }}
            label="تاریخ تحویل قطعی"
          />

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />

          {/* 


    4-15- دستگاه نظارت (مهندس مشاور) 

  
  */}

          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            دستگاه نظارت (مهندس مشاور)
          </FaTypography>

          <FaTextField
            label={"دستگاه نظارت (مهندس مشاور) :"}
            sx={{
              gridColumn: "span 12",
            }}
            value={SupervisionDepartment}
            onChange={(e) => {
              setSupervisionDepartment(e.target.value);
            }}
            error={SupervisionDepartmentError.error}
            helperText={SupervisionDepartmentError.text}
          />
          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          {/* 


    4-16- تاخیرات

  
  */}
          <FaTypography
            variant="h6"
            gridColumn={"span 12"}
            textAlign={"center"}
          >
            تاخیرات
          </FaTypography>
          <FaTypography
            variant="body1"
            gridColumn={"span 2"}
            textAlign={"center"}
          >
            مجاز
          </FaTypography>
          <FaTextField
            label={"از نظر خواهان:"}
            sx={{
              gridColumn: "span 4",
            }}
            InputProps={{
              endAdornment: "روز",
            }}
            value={AuthorizedDelays}
            type="number"
            onChange={(e) => {
              setAuthorizedDelays(parseInt(e.target.value));
            }}
            error={AuthorizedDelaysError.error}
            helperText={AuthorizedDelaysError.text}
          />
          <FaTypography
            variant="body1"
            gridColumn={"span 2"}
            textAlign={"center"}
          >
            غیر مجاز
          </FaTypography>
          <FaTextField
            label={"از نظر خواهان:"}
            sx={{
              gridColumn: "span 4",
            }}
            InputProps={{
              endAdornment: "روز",
            }}
            value={UnauthorizedDelays}
            type="number"
            onChange={(e) => {
              setUnauthorizedDelays(parseInt(e.target.value));
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
              background: primary,
              color: secondaryDark,
              boxShadow: "none",
              borderRadius: 3,
              "&:hover": {
                backgroundColor: GreenLight,
                color: secondaryDark,
                boxShadow: "none",
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
                    console.log(data);
                    alert("قرارداد با موفقیت تکمیل شد");
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

          {data?.contract_updateContract?.result && (
            <Alert
              severity="success"
              sx={{
                gridColumn: "span 6",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>قرارداد با موفقیت تکمیل شد</Typography>

              <Button
                onClick={() => {
                  void updateCompaint();
                }}
              >
                ادامه و تکمیل درخواست داوری
              </Button>
            </Alert>
          )}
        </Box>
      </Box>
    </>
    //     <>
    //       <BackButton to="/complaints" />
    //       <TimeLine stage={1} />
    //       <Box
    //         display={"grid"}
    //         gridTemplateColumns={"repeat(6, 1fr)"}
    //         alignItems={"center"}
    //         justifyContent={"center"}
    //         gap={2}
    //         padding={"2rem"}
    //         paddingTop={"0"}
    //         border={`2px solid ${secondary}`}
    //         borderRadius={"1rem"}
    //         position={"relative"}
    //         marginY={"3rem"}
    //         paddingX={"25%"}
    //       >
    //         <Box
    //           gridColumn={"span 12"}
    //           borderRadius={"1rem"}
    //           sx={{
    //             position: "sticky",
    //             top: 100,
    //             left: "50%",
    //             transform: "translateY(-50%) translateX(-50%)",
    //             background: primary,
    //             padding: "0.5rem 1rem",
    //             userSelect: "none",
    //             width: "max-content",
    //             zIndex: 1000,
    //           }}
    //         >
    //           <FaTypography variant="h6" textAlign={"center"}>
    //             اطلاعات قرارداد
    //           </FaTypography>
    //         </Box>
    //         <FaTextField
    //           label="عنوان قرارداد: "
    //           variant="outlined"
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //           value={ContractSubject}
    //           onChange={(e) => {
    //             setContractSubject(e.target.value);
    //           }}
    //           error={ContractSubjectError.error}
    //           helperText={ContractSubjectError.text}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <TextField
    //           label="شماره قرارداد: "
    //           variant="outlined"
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           value={ContractNumber}
    //           onChange={(e) => {
    //             setContractNumber(String(e.target.value));
    //           }}
    //           error={ContractNumberError.error}
    //           helperText={ContractNumberError.text}
    //           focused
    //         />
    //         <DateButton
    //           date={ContractDate}
    //           setDate={setContractDate}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           label="تاریخ انعقاد قرارداد"
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <TextField
    //           label="کارفرما"
    //           sx={{
    //             width: "100%",
    //             gridColumn: "span 3",
    //           }}
    //           value={
    //             departments.find((d) => {
    //               return d.id === AccuserDepartmentId;
    //             })?.type === "ORGANIZATION"
    //               ? departments.find((d) => {
    //                   return d.id === AccuserDepartmentId;
    //                 })!.label
    //               : departments.find((d) => {
    //                   return d.id === AccusedDepartmentId;
    //                 })?.type === "ORGANIZATION"
    //               ? departments.find((d) => {
    //                   return d.id === AccusedDepartmentId;
    //                 })!.label
    //               : ""
    //           }
    //           onChange={(e) => {
    //             setEmployer(e.target.value);
    //           }}
    //           disabled={true}
    //           //   disabled
    //         >
    //           {departments.map((item) => (
    //             <MenuItem value={item.id}>{item.label}</MenuItem>
    //           ))}
    //         </TextField>
    //         <TextField
    //           label="طرف قرارداد"
    //           sx={{
    //             width: "100%",
    //             gridColumn: "span 3",
    //           }}
    //           value={
    //             departments.find((d) => {
    //               return d.id === AccusedDepartmentId;
    //             })?.type === "CONTRACTOR_OR_CONSULTANT"
    //               ? departments.find((d) => {
    //                   return d.id === AccusedDepartmentId;
    //                 })!.label
    //               : departments.find((d) => {
    //                   return d.id === AccuserDepartmentId;
    //                 })?.type === "CONTRACTOR_OR_CONSULTANT"
    //               ? departments.find((d) => {
    //                   return d.id === AccusedDepartmentId;
    //                 })!.label
    //               : ""
    //           }
    //           disabled={true}
    //         >
    //           {departments.map((item) => (
    //             <MenuItem value={item.id}>{item.label}</MenuItem>
    //           ))}
    //         </TextField>
    //         <div
    //           style={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <FaTextField
    //           label="مبلغ اوليه/ حق‌الزحمه قرارداد: "
    //           variant="outlined"
    //           type="number"
    //           InputProps={{
    //             endAdornment: "ریال",
    //           }}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           value={InitialBudget}
    //           focused={InitialBudget ? true : false}
    //           onChange={(e) => {
    //             setInitialBudget(parseInt(e.target.value));
    //           }}
    //           error={InitialBudgetError.error}
    //           helperText={InitialBudgetError.text}
    //         />
    //         <FaTextField
    //           label="مدت اوليه قرارداد: "
    //           variant="outlined"
    //           type="text"
    //           InputProps={{
    //             endAdornment: "ماه",
    //           }}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           value={InitialTimePeriod}
    //           onChange={(e) => {
    //             setInitialTimePeriod(parseInt(e.target.value));
    //           }}
    //           focused={InitialTimePeriod ? true : false}
    //           error={InitialTimePeriodError.error}
    //           helperText={InitialTimePeriodError.text}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 6",
    //           }}
    //         />

    //         <Button
    //           sx={{
    //             color: secondary,
    //             backgroundColor: primary,
    //             borderRadius: "0.5rem",
    //             gridColumn: "5/span 2",
    //           }}
    //         >
    //           تایید اطلاعات
    //         </Button>
    //       </Box>
    //       <Box
    //         display={"grid"}
    //         gridTemplateColumns={"repeat(12, 1fr)"}
    //         alignItems={"center"}
    //         justifyContent={"center"}
    //         gap={2}
    //         padding={"2rem"}
    //         paddingTop={"0rem"}
    //         border={`2px solid ${secondary}`}
    //         borderRadius={"1rem"}
    //         position={"relative"}
    //         marginY={"1rem"}
    //       >
    //         <Box
    //           gridColumn={"span 12"}
    //           borderRadius={"1rem"}
    //           sx={{
    //             position: "sticky",
    //             top: 100,
    //             left: "50%",
    //             transform: "translateY(-50%) translateX(-50%)",
    //             background: primary,
    //             padding: "0.5rem 1rem",
    //             userSelect: "none",
    //             width: "max-content",
    //             zIndex: 1000,
    //           }}
    //         >
    //           <FaTypography variant="h6" textAlign={"center"}>
    //             فرم تکمیل اطلاعات قرارداد
    //           </FaTypography>
    //         </Box>

    //         {/*

    //         1- طرفین قرارداد

    //     */}
    //         <FaTypography variant="h5" gridColumn={"span 12"}>
    //           طرفین قرارداد:
    //         </FaTypography>
    //         <FaTextField
    //           label="نام خواهان"
    //           sx={{
    //             width: "100%",
    //             gridColumn: "span 3",
    //           }}
    //           value={
    //             departments.find(
    //               (item) =>
    //                 AccuserDepartmentId && item.id === AccuserDepartmentId
    //             )?.label
    //           }
    //           placeholder={
    //             departments.find(
    //               (item) =>
    //                 AccuserDepartmentId && item.id === AccuserDepartmentId
    //             )?.label
    //           }
    //           focused
    //           //   disabled
    //         />
    //         {/* {JSON.stringify(departments)}
    //         <br/>
    //         <br/>
    //         <br/>
    //         {AccusedDepartmentId} */}
    //         <FaTextField
    //           label="نام خوانده"
    //           sx={{
    //             width: "100%",
    //             gridColumn: "span 3",
    //           }}
    //           value={
    //             departments.find(
    //               (item) =>
    //                 AccusedDepartmentId && item.id === AccusedDepartmentId
    //             )?.label
    //           }
    //           placeholder={
    //             departments.find(
    //               (item) =>
    //                 AccusedDepartmentId && item.id === AccusedDepartmentId
    //             )?.label || ""
    //           }
    //           focused
    //           // disabled
    //         />

    //         <Divider
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       2- تابعيت

    //     */}
    //         <FaTypography variant="h5" gridColumn={"span 12"}>
    //           {"تابعيت خوانده: "}
    //         </FaTypography>
    //         <FaTextField
    //           label="تابعيت : "
    //           variant="outlined"
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           select
    //           SelectProps={{
    //             MenuProps: {
    //               sx: {
    //                 maxHeight: "20rem",
    //               },
    //             },
    //           }}
    //           value={Nationality}
    //           onChange={(e) => {
    //             setNationality(e.target.value);
    //           }}
    //           error={NationalityError.error}
    //           helperText={NationalityError.text}
    //         >
    //           {countries.map((item, index) => (
    //             <MenuItem key={index} value={item.name_fa}>
    //               {item.name_fa}
    //             </MenuItem>
    //           ))}
    //         </FaTextField>

    //         <Divider
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       3- مشخصات خوانده (امضاکننده قرارداد)

    //     */}

    //         <FaTypography variant="h5" gridColumn={"span 12"}>
    //           {"افراد مطلع و مرتبط با پروژه: "}
    //         </FaTypography>
    //         <Box
    //           gridColumn={"span 6"}
    //           display={"grid"}
    //           gridTemplateColumns={"repeat(1,1fr)"}
    //           rowGap={2}
    //         >
    //           <FaTypography variant="body1" gridColumn={"span 12"}>
    //             اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه از
    //             طرف خواهان:
    //           </FaTypography>
    //           {RelatedPeopleByAccusser &&
    //             RelatedPeopleByAccusser.map((item, index) => (
    //               <Box
    //                 key={index}
    //                 display={"grid"}
    //                 gridTemplateColumns={"repeat(12,1fr)"}
    //               >
    //                 <Box
    //                   gridColumn={{
    //                     xs: "span 12",
    //                     lg: "span 8",
    //                   }}
    //                   display={"grid"}
    //                   gridTemplateColumns={"repeat(2,1fr)"}
    //                   columnGap={"2rem"}
    //                   padding={"0rem 0rem"}
    //                 >
    //                   <FaTextField
    //                     label="نام و نام خانوادگی"
    //                     variant="outlined"
    //                     autoComplete="name"
    //                     type="text"
    //                     sx={{
    //                       gridColumn: "span 1",
    //                     }}
    //                     value={item.name}
    //                     onChange={(e) => {
    //                       const newPeoples = [
    //                         ...RelatedPeopleByAccusser,
    //                       ] as [
    //                         {
    //                           name: string;
    //                           phone: string;
    //                         }
    //                       ];
    //                       newPeoples[index].name = e.target.value;
    //                       setRelatedPeopleByAccusser(newPeoples);
    //                       console.log(RelatedPeopleByAccusser);
    //                     }}
    //                   ></FaTextField>
    //                   <FaTextField
    //                     label="تلفن"
    //                     variant="outlined"
    //                     type="number"
    //                     autoComplete="phone"
    //                     sx={{
    //                       gridColumn: "span 1",
    //                     }}
    //                     value={item.phone}
    //                     onChange={(e) => {
    //                       const newPeoples = [
    //                         ...RelatedPeopleByAccusser,
    //                       ] as [
    //                         {
    //                           name: string;
    //                           phone: string;
    //                         }
    //                       ];
    //                       newPeoples[index].phone = e.target.value;
    //                       setRelatedPeopleByAccusser(newPeoples);
    //                       console.log(RelatedPeopleByAccusser);
    //                     }}
    //                   ></FaTextField>
    //                 </Box>
    //               </Box>
    //             ))}
    //           <IconButton
    //             sx={{
    //               gridColumn: "span 12",
    //               justifySelf: "start",
    //               backgroundColor: Green,
    //               color: "white",
    //               "&:hover": {
    //                 backgroundColor: GreenLight,
    //                 color: Green,
    //               },
    //               margin: "0rem 2rem",
    //             }}
    //             onClick={() => {
    //               // @ts-ignore
    //               setRelatedPeopleByAccusser([
    //                 // @ts-ignore
    //                 ...RelatedPeopleByAccusser,
    //                 {
    //                   name: "",
    //                   phone: "",
    //                 },
    //               ]);
    //             }}
    //           >
    //             <Add />
    //           </IconButton>
    //         </Box>
    //         <Box
    //           gridColumn={"span 6"}
    //           display={"flex"}
    //           flexDirection={"column"}
    //           justifyContent={"start"}
    //           alignItems={"flex-start"}
    //           rowGap={2}
    //         >
    //           <FaTypography variant="body1" gridColumn={"span 12"}>
    //             اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه از
    //             طرف خوانده:
    //           </FaTypography>
    //           {RelatedPeopleByAccussed &&
    //             RelatedPeopleByAccussed.map((item, index) => (
    //               <Box
    //                 key={index}
    //                 display={"grid"}
    //                 gridTemplateColumns={"repeat(12,1fr)"}
    //               >
    //                 <Box
    //                   gridColumn={{
    //                     xs: "span 12",
    //                     lg: "span 8",
    //                   }}
    //                   display={"grid"}
    //                   gridTemplateColumns={"repeat(2,1fr)"}
    //                   columnGap={"2rem"}
    //                   padding={"0rem 0rem"}
    //                 >
    //                   <FaTextField
    //                     label="نام و نام خانوادگی"
    //                     variant="outlined"
    //                     autoComplete="name"
    //                     type="text"
    //                     sx={{
    //                       gridColumn: "span 1",
    //                     }}
    //                     value={item.name}
    //                     onChange={(e) => {
    //                       const newPeoples = [
    //                         ...RelatedPeopleByAccussed,
    //                       ] as [
    //                         {
    //                           name: string;
    //                           phone: string;
    //                         }
    //                       ];
    //                       newPeoples[index].name = e.target.value;
    //                       setRelatedPeopleByAccussed(newPeoples);
    //                       console.log(RelatedPeopleByAccussed);
    //                     }}
    //                   ></FaTextField>
    //                   <FaTextField
    //                     label="تلفن"
    //                     variant="outlined"
    //                     type="number"
    //                     autoComplete="phone"
    //                     sx={{
    //                       gridColumn: "span 1",
    //                     }}
    //                     value={item.phone}
    //                     onChange={(e) => {
    //                       const newPeoples = [
    //                         ...RelatedPeopleByAccussed,
    //                       ] as [
    //                         {
    //                           name: string;
    //                           phone: string;
    //                         }
    //                       ];
    //                       newPeoples[index].phone = e.target.value;
    //                       setRelatedPeopleByAccussed(newPeoples);
    //                       console.log(RelatedPeopleByAccussed);
    //                     }}
    //                   ></FaTextField>
    //                 </Box>
    //               </Box>
    //             ))}
    //           <IconButton
    //             sx={{
    //               gridColumn: "span 12",
    //               justifySelf: "start",
    //               backgroundColor: Green,
    //               color: "white",
    //               "&:hover": {
    //                 backgroundColor: GreenLight,
    //                 color: Green,
    //               },
    //               margin: "0rem 2rem",
    //             }}
    //             onClick={() => {
    //               // @ts-ignore
    //               setRelatedPeopleByAccussed([
    //                 // @ts-ignore
    //                 ...RelatedPeopleByAccussed,
    //                 {
    //                   name: "",
    //                   phone: "",
    //                 },
    //               ]);
    //             }}
    //           >
    //             <Add />
    //           </IconButton>
    //         </Box>

    //         <Divider
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4- مشخصات قرارداد

    //     */}
    //         <FaTypography variant="h5" gridColumn={"span 12"}>
    //           {"مشخصات قرارداد: "}
    //         </FaTypography>
    //         <FaTypography variant="h6" gridColumn={"span 12"}>
    //           {
    //             "در این قسمت لازم است نوع قرارداد همسان سازمان برنامه و بودجه کشور که مورد استفاده قرار گرفته علامت زده شود:"
    //           }
    //         </FaTypography>
    //         {/* {String(contratDetails.contratTypes)} */}

    //         <FormGroup
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         >
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label={
    //               <FaTypography>
    //                 موافقتنامه و شرایط عمومی و شرایط خصوصی پیمان‌ها- نشریه
    //                 شماره ۴۳۱۱ – بخشنامه شماره 842/54-1088/102 مورخ
    //                 ۱۳۷۸/۰۳/۰۳
    //               </FaTypography>
    //             }
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[0] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label={
    //               <FaTypography>
    //                 انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع-
    //                 بخشنامه شماره ۹۶/۱۲۹۹۱۸۸ مورخ 1396/05/04
    //               </FaTypography>
    //             }
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[1] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label={
    //               <FaTypography>
    //                 انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع-
    //                 بخشنامه شماره 100/6405 مورخ 1389/02/04
    //               </FaTypography>
    //             }
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[2] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label={
    //               <FaTypography>
    //                 انعقاد پیمان بر اساس فهرست بهای تجمیع شده راه، باند
    //                 فرودگاه و زیرسازی راه آهن – شماره 65637/100 مورخ
    //                 1391/08/14
    //               </FaTypography>
    //             }
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[3] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره - نشریه شماره ۴۳۱۸- بخشنامه شماره ۱۰۵/۸۴۲-۵۴/۲۴۶۰- مورخ ۱۳۷۹/۰۴/۲۹ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[4] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره پژوهشی - نشریه شماره 3419- بخشنامه شماره 2753/54-1670/102 مورخ ۱۳۷۹/۰5/۲۴ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[5] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مدیریت طرح- نشریه شماره ۲۴۱۲۱ مورخ ۱۳۸۰/۰۱/۲۸ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[6] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های مهندسی، تأمین کالا و تجهیزات، ساختمان و نصب به صورت توأم (EPC) برای کارهای صنعتی - نشریه شماره ۵۴۹۰ مورخ ۰۱/۰۳/۱۳۸۱ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[7] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های تامین کالا و تجهیزات، ساختمان و نصب به صورت توام  (PC)، برای کارهای صنعتی مورخ  ۱۸/۱۲/۱۳۸۳ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[8] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	قرارداد همسان طرح و ساخت (EPC غیر صنعتی)- 85428/101 مورخ ۱۵/۰۵/۱۳۸۴ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[9] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقت‌نامه مشارکت عمومی- خصوصی (PPP) بخشنامه شماره ۹۳/۱۷۲۸۰۴-مورخ ۲۶/۱۲/۱۳۹۳ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[10] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="	موافقتنامه ساخت، بهره‌برداری، واگذاری  (BOT)- نشریه شماره ۴۶۹ مورخ ۲۴/۱۰/۱۳۸۷ "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 contratTypes: e.target.checked
    //                   ? // @ts-ignore
    //                     [...contratDetails.contratTypes, e.target.value]
    //                   : contratDetails &&
    //                     contratDetails.contratTypes.filter(
    //                       // @ts-ignore
    //                       (item) => item !== e.target.value
    //                     ),
    //               });
    //             }}
    //             checked={contratDetails.contratTypes[11] == "on"}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="    سایر "
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContratDetails({
    //                 ...contratDetails,
    //                 // @ts-ignore
    //                 other: e.target.checked,
    //               });
    //             }}
    //             checked={contratDetails.other}
    //           />
    //         </FormGroup>
    //         <FaTextField
    //           label={"عنوان بخشنامه"}
    //           variant={"outlined"}
    //           sx={{
    //             gridColumn: "span 2",
    //             display:
    //               contratDetails && contratDetails.other
    //                 ? "block"
    //                 : "none",
    //           }}
    //           value={contratDetails && contratDetails.CircularTitle}
    //           onChange={(e) => {
    //             // @ts-ignore
    //             setContratDetails({
    //               ...contratDetails,
    //               CircularTitle: e.target.value,
    //             });
    //           }}
    //           error={contratDetailsError.error}
    //           helperText={contratDetailsError.text}
    //         />
    //         <FaTextField
    //           label={"شماره بخشنامه"}
    //           variant={"outlined"}
    //           sx={{
    //             gridColumn: "span 2",
    //             display:
    //               contratDetails && contratDetails.other
    //                 ? "block"
    //                 : "none",
    //           }}
    //           value={contratDetails && contratDetails.CircularNumber}
    //           onChange={(e) => {
    //             // @ts-ignore
    //             setContratDetails({
    //               ...contratDetails,
    //               CircularNumber: e.target.value,
    //             });
    //           }}
    //           error={contratDetailsError.error}
    //           helperText={contratDetailsError.text}
    //         />
    //         {/* <TextField
    //           label={"تاریخ بخشنامه"}
    //           variant={"outlined"}
    //           type={"date"}
    //           focused
    //           sx={{
    //             gridColumn: "span 2",
    //             display:
    //               contratDetails && contratDetails.other
    //                 ? "block"
    //                 : "none",
    //           }}
    //           value={contratDetails && contratDetails.CircularDate}
    //           onChange={(e) => {
    //             //@ts-ignore
    //             setContratDetails({
    //               ...contratDetails,
    //               CircularDate: e.target.value,
    //             });
    //           }}
    //           error={contratDetailsError.error}
    //           helperText={contratDetailsError.text}
    //         /> */}
    //         <DateButton
    //           date={contratDetails && contratDetails.CircularDate}
    //           setDate={(date) => {
    //             setContratDetails({
    //               ...contratDetails,
    //               // @ts-ignore
    //               CircularDate: date,
    //             });
    //           }}
    //           sx={{
    //             gridColumn: "span 2",
    //             display:
    //               contratDetails && contratDetails.other
    //                 ? "block"
    //                 : "none",
    //             border: contratDetailsError.error
    //               ? "1px solid red"
    //               : undefined,
    //           }}
    //           label="تاریخ بخشنامه"
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         {/*

    //       4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 12"}>
    //           فهرست‌هاي پايه منضم به پيمان و سال انتشار
    //         </FaTypography>

    //         {/*

    //       4-5-1- فهرست بهاي واحد پايه رشته

    //     */}

    //         {PriceListOfBasicUnitOfField &&
    //           PriceListOfBasicUnitOfField.map((item, index) => (
    //             <Box
    //               key={index}
    //               gridColumn={{
    //                 xs: "span 12",
    //                 lg: "span 12",
    //               }}
    //               display={"grid"}
    //               gridTemplateColumns={"repeat(12,1fr)"}
    //             >
    //               <Box
    //                 gridColumn={{
    //                   xs: "span 12",
    //                   lg: "span 6",
    //                 }}
    //                 display={"grid"}
    //                 gridTemplateColumns={"repeat(2,1fr)"}
    //                 columnGap={"2rem"}
    //                 padding={"0rem 2rem"}
    //               >
    //                 <FaTextField
    //                   label="سال"
    //                   variant="outlined"
    //                   autoComplete="name"
    //                   type="text"
    //                   sx={{
    //                     gridColumn: "span 1",
    //                   }}
    //                   value={item.year}
    //                   onChange={(e) => {
    //                     const newPeoples = [
    //                       ...PriceListOfBasicUnitOfField,
    //                     ] as [
    //                       {
    //                         year: string;
    //                         price: string;
    //                       }
    //                     ];
    //                     newPeoples[index].year = e.target.value;
    //                     setPriceListOfBasicUnitOfField(newPeoples);
    //                     console.log(PriceListOfBasicUnitOfField);
    //                   }}
    //                   select
    //                   SelectProps={{
    //                     MenuProps: {
    //                       sx: {
    //                         maxHeight: "20rem",
    //                       },
    //                     },
    //                   }}
    //                 >
    //                   {[
    //                     "1370",
    //                     "1371",
    //                     "1372",
    //                     "1373",
    //                     "1374",
    //                     "1375",
    //                     "1376",
    //                     "1377",
    //                     "1378",
    //                     "1379",
    //                     "1380",
    //                     "1381",
    //                     "1382",
    //                     "1383",
    //                     "1384",
    //                     "1385",
    //                     "1386",
    //                     "1387",
    //                     "1388",
    //                     "1389",
    //                     "1390",
    //                     "1391",
    //                     "1392",
    //                     "1393",
    //                     "1394",
    //                     "1395",
    //                     "1396",
    //                     "1397",
    //                     "1398",
    //                     "1399",
    //                     "1400",
    //                     "1401",
    //                     "1402",
    //                     "1403",
    //                   ].map((y) => (
    //                     <MenuItem value={y}>{y}</MenuItem>
    //                   ))}
    //                 </FaTextField>
    //                 <TextField
    //                   label="فهرست بهاي واحد پايه رشته"
    //                   variant="outlined"
    //                   type="number"
    //                   autoComplete="phone"
    //                   sx={{
    //                     gridColumn: "span 1",
    //                   }}
    //                   value={item.price}
    //                   onChange={(e) => {
    //                     const newPeoples = [
    //                       ...PriceListOfBasicUnitOfField,
    //                     ] as [
    //                       {
    //                         year: string;
    //                         price: string;
    //                       }
    //                     ];
    //                     newPeoples[index].price = e.target.value;
    //                     setPriceListOfBasicUnitOfField(newPeoples);
    //                     console.log(PriceListOfBasicUnitOfField);
    //                   }}
    //                   select
    //                 >
    //                   {fehrestbaha.map((item, index) => (
    //                     <MenuItem key={index} value={item}>
    //                       {item}
    //                     </MenuItem>
    //                   ))}
    //                 </TextField>
    //               </Box>
    //             </Box>
    //           ))}

    //         <IconButton
    //           sx={{
    //             gridColumn: "span 12",
    //             justifySelf: "start",
    //             backgroundColor: Green,
    //             color: "white",
    //             "&:hover": {
    //               backgroundColor: GreenLight,
    //               color: Green,
    //             },
    //             margin: "0rem 2rem",
    //           }}
    //           onClick={() => {
    //             // @ts-ignore
    //             setPriceListOfBasicUnitOfField([
    //               ...(PriceListOfBasicUnitOfField || []),
    //               {
    //                 year: "",
    //                 price: "",
    //               },
    //             ] as { year: string; price: string }[]);
    //           }}
    //         >
    //           <Add />
    //         </IconButton>

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 12"}>
    //           فهرست بهاي خاص (غيرپايه) منضم به پيمان:
    //         </FaTypography>

    //         <RadioGroup
    //           defaultValue={IsSpecialPriceListAttachedToContract}
    //           name="radio-buttons-group"
    //           row
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         >
    //           <FormControlLabel
    //             value={true}
    //             control={<Radio />}
    //             label="دارد"
    //             defaultChecked
    //             checked={IsSpecialPriceListAttachedToContract === "دارد"}
    //             onChange={() => {
    //               setIsSpecialPriceListAttachedToContract("دارد");
    //             }}
    //           />
    //           <FormControlLabel
    //             value={false}
    //             control={<Radio />}
    //             label="ندارد"
    //             checked={IsSpecialPriceListAttachedToContract === "ندارد"}
    //             onChange={() => {
    //               // @ts-ignore
    //               setIsSpecialPriceListAttachedToContract("ندارد");
    //             }}
    //           />
    //         </RadioGroup>

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //             TODO :
    //             add use state to this shit

    // */}
    //         <FaTextField
    //           label={"عنوان بخشنامه"}
    //           variant={"outlined"}
    //           sx={{
    //             gridColumn: "span 2",
    //             display: IsSpecialPriceListAttachedToContract
    //               ? "block"
    //               : "none",
    //           }}
    //           value={contratDetails && contratDetails.CircularTitle}
    //           onChange={(e) => {
    //             setContratDetails((prevState) => {
    //               if (!prevState) return prevState;
    //               return {
    //                 ...prevState,
    //                 CircularTitle: e.target.value,
    //               };
    //             });
    //           }}
    //           error={contratDetailsError.error}
    //           helperText={contratDetailsError.text}
    //         />
    //         <FaTextField
    //           label={"شماره بخشنامه"}
    //           variant={"outlined"}
    //           sx={{
    //             gridColumn: "span 2",
    //             display: IsSpecialPriceListAttachedToContract
    //               ? "block"
    //               : "none",
    //           }}
    //           value={contratDetails?.CircularNumber || ""}
    //           onChange={(e) => {
    //             setContratDetails((prevState) => {
    //               if (!prevState) return prevState;
    //               return {
    //                 ...prevState,
    //                 CircularNumber: e.target.value,
    //                 contratTypes: prevState.contratTypes || [],
    //                 other: prevState.other || false,
    //                 CircularTitle: prevState.CircularTitle || "",
    //                 CircularDate: prevState.CircularDate || undefined,
    //               };
    //             });
    //           }}
    //           error={contratDetailsError.error}
    //           helperText={contratDetailsError.text}
    //         />
    //         {/* <TextField
    //           label={"تاریخ بخشنامه"}
    //           variant={"outlined"}
    //           type={"date"}
    //           focused
    //           sx={{
    //             gridColumn: "span 2",
    //             display: IsSpecialPriceListAttachedToContract
    //               ? "block"
    //               : "none",
    //           }}
    //           value={contratDetails && contratDetails.CircularDate}
    //           onChange={(e) => {
    //             setContratDetails((prevState) => {
    //               if (!prevState) return prevState;
    //               return {
    //                 ...prevState,
    //                 CircularDate: e.target.value,
    //               };
    //             });
    //           }}
    //           error={contratDetailsError.error}
    //           helperText={contratDetailsError.text}
    //         /> */}

    //         <DateButton
    //           date={contratDetails && contratDetails.CircularDate}
    //           setDate={(date) => {
    //             setContratDetails({
    //               ...contratDetails,
    //               // @ts-ignore
    //               CircularDate: date,
    //             });
    //           }}
    //           sx={{
    //             gridColumn: "span 2",
    //             display: IsSpecialPriceListAttachedToContract
    //               ? "block"
    //               : "none",
    //             border: contratDetailsError.error
    //               ? "1px solid red"
    //               : undefined,
    //           }}
    //           label="تاریخ بخشنامه"
    //         />

    //         {/*

    //             TODO :
    //             add use state to this shit

    //       */}

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-7- "ضريب پيشنهادي

    //     */}
    //         <TextField
    //           label="ضريب پيشنهادي: "
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           type="number"
    //           value={RecommendedCoefficient}
    //           onChange={(e) => {
    //             setRecommendedCoefficient(parseFloat(e.target.value));
    //           }}
    //         />

    //         <FaTypography variant="h6" gridColumn={"span 1"}>
    //           {RecommendedCoefficient
    //             ? RecommendedCoefficient > 1
    //               ? (RecommendedCoefficient * 100 - 100).toPrecision(2) +
    //                 "% پلوس"
    //               : (100 - RecommendedCoefficient * 100).toPrecision(2) +
    //                 "% مینوس"
    //             : ""}
    //         </FaTypography>
    //         {/* <RadioGroup defaultValue={CoefficientType} row>
    //         <FormControlLabel
    //           value="درصدپلوس"
    //           control={<Radio />}
    //           label="درصدپلوس"
    //           defaultChecked
    //           checked={CoefficientType === "درصدپلوس"}
    //           onChange={(e) => {
    //             // @ts-ignore
    //             setCoefficientType(e.target.value);
    //           }}
    //         />
    //         <FormControlLabel
    //           value="مينوس"
    //           control={<Radio />}
    //           label="مينوس"
    //           checked={CoefficientType === "مينوس"}
    //           onChange={(e) => {
    //             // @ts-ignore
    //             setCoefficientType(e.target.value);
    //           }}
    //         />
    //       </RadioGroup> */}

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-8- نحوه واگذاري كار

    //     */}

    //         <FormControl
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         >
    //           <FormLabel id="demo-row-radio-buttons-group-label">
    //             نحوه واگذاري كار
    //           </FormLabel>
    //           <RadioGroup
    //             row
    //             aria-labelledby="demo-row-radio-buttons-group-label"
    //             name="row-radio-buttons-group"
    //           >
    //             <FormControlLabel
    //               value="مناقصه عمومی"
    //               checked={AssigningType === "مناقصه عمومی"}
    //               control={<Radio />}
    //               label="مناقصه عمومی"
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setAssigningType(e.target.value);
    //               }}
    //             />
    //             <FormControlLabel
    //               value="مناقصه محدود"
    //               checked={AssigningType === "مناقصه محدود"}
    //               control={<Radio />}
    //               label="مناقصه محدود"
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setAssigningType(e.target.value);
    //               }}
    //             />
    //             <FormControlLabel
    //               value="ترك مناقصه"
    //               checked={AssigningType === "ترك مناقصه"}
    //               control={<Radio />}
    //               label="ترك مناقصه  "
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setAssigningType(e.target.value);
    //               }}
    //             />
    //             <FormControlLabel
    //               value="سایر"
    //               checked={AssigningType === "سایر"}
    //               control={<Radio />}
    //               label="سایر"
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setAssigningType(e.target.value);
    //               }}
    //             />
    //             <FormControlLabel
    //               control={
    //                 <FaTextField
    //                   label="سایر"
    //                   disabled={AssigningType !== "سایر"}
    //                 />
    //               }
    //               label=""
    //             />
    //           </RadioGroup>
    //         </FormControl>

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-9- پيمان مشمول تعديل

    //     */}
    //         <FormControl
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         >
    //           <FormLabel id="demo-row-radio-buttons-group-label">
    //             پيمان مشمول تعديل
    //           </FormLabel>
    //           <RadioGroup row>
    //             <FormControlLabel
    //               value={true}
    //               control={<Radio />}
    //               label="مي‌باشد"
    //               checked={DoesContainAdjustment}
    //               onChange={() => {
    //                 // @ts-ignore
    //                 setDoesContainAdjustment(true);
    //               }}
    //             />
    //             <FormControlLabel
    //               value={false}
    //               control={<Radio />}
    //               label="نمي‌باشد"
    //               checked={!DoesContainAdjustment}
    //               onChange={() => {
    //                 // @ts-ignore
    //                 setDoesContainAdjustment(false);
    //               }}
    //             />
    //           </RadioGroup>
    //         </FormControl>

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         <FaTextField
    //           label="شماره"
    //           type="number"
    //           sx={{
    //             gridColumn: "span 3",
    //             display: DoesContainAdjustment ? "block" : "none",
    //           }}
    //           value={Adjustment && Adjustment.number}
    //           onChange={(e) => {
    //             setAdjustment((prevAdjustment) => ({
    //               ...prevAdjustment,
    //               number: parseInt(e.target.value),
    //               date: prevAdjustment?.date || new Date(),
    //             }));
    //           }}
    //           fullWidth
    //           error={AdjustmentError.error}
    //           helperText={AdjustmentError.text}
    //         />
    //         {/* <FaTextField
    //           label="تاریخ"
    //           type="date"
    //           focused
    //           sx={{
    //             gridColumn: "span 3",
    //             display: DoesContainAdjustment ? "block" : "none",
    //           }}
    //           value={BaseIndexPeriod && BaseIndexPeriod.month}
    //           onChange={(e) => {
    //             setAdjustment(
    //               (prevAdjustment) =>
    //                 ({
    //                   ...prevAdjustment,
    //                   date: e.target.value,
    //                   number: e.target.value
    //                     ? prevAdjustment?.number || 0
    //                     : undefined,
    //                 } as { number: number; date: string } | undefined)
    //             );
    //           }}
    //           fullWidth
    //           error={AdjustmentError.error}
    //           helperText={AdjustmentError.text}
    //         /> */}

    //         <DateButton
    //           date={Adjustment && Adjustment.date}
    //           setDate={(date) => {
    //             setAdjustment({
    //               ...Adjustment,
    //               // @ts-ignore
    //               date: date,
    //             });
    //           }}
    //           sx={{
    //             gridColumn: "span 3",
    //             display: DoesContainAdjustment ? "block" : "none",
    //             border: AdjustmentError.error
    //               ? "1px solid red"
    //               : undefined,
    //           }}
    //           label="تاریخ بخشنامه"
    //         />

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-10- دوره شاخص مبنا

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 2"}>
    //           دوره شاخص مبنا
    //         </FaTypography>

    //         <FormControl
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         >
    //           <FormLabel id="demo-row-radio-buttons-group-label">
    //             نوع دوره شاخص مبنا
    //           </FormLabel>
    //           <RadioGroup row>
    //             <FormControlLabel
    //               value={true}
    //               control={<Radio />}
    //               label="سه ماهه"
    //               checked={BaseIndexPeriod && BaseIndexPeriod.isQuarter}
    //               onChange={() => {
    //                 setBaseIndexPeriod((prevBaseIndexPeriod) => ({
    //                   ...prevBaseIndexPeriod,
    //                   isQuarter: true,
    //                   quarter: prevBaseIndexPeriod?.quarter || "",
    //                   month: "",
    //                   year: "",
    //                 }));
    //               }}
    //             />
    //             <FormControlLabel
    //               value={false}
    //               control={<Radio />}
    //               label="ماهانه"
    //               checked={BaseIndexPeriod && !BaseIndexPeriod.isQuarter}
    //               onChange={() => {
    //                 setBaseIndexPeriod((prevBaseIndexPeriod) => ({
    //                   ...prevBaseIndexPeriod,
    //                   isQuarter: false,
    //                   quarter: prevBaseIndexPeriod?.quarter || "",
    //                   month: prevBaseIndexPeriod?.month || "",
    //                   year: prevBaseIndexPeriod?.year || "",
    //                 }));
    //               }}
    //             />
    //           </RadioGroup>
    //         </FormControl>

    //         <FaTextField
    //           label="ماه"
    //           type="number"
    //           sx={{
    //             gridColumn: "span 2",
    //             display:
    //               BaseIndexPeriod && !BaseIndexPeriod.isQuarter
    //                 ? "block"
    //                 : "none",
    //           }}
    //           value={BaseIndexPeriod && BaseIndexPeriod.month}
    //           onChange={(e) => {
    //             setBaseIndexPeriod((prevBaseIndexPeriod) => ({
    //               ...prevBaseIndexPeriod,
    //               month: e.target.value,
    //               isQuarter: prevBaseIndexPeriod?.isQuarter || false,
    //               quarter: prevBaseIndexPeriod?.quarter || "",
    //               year: prevBaseIndexPeriod?.year || "",
    //             }));
    //           }}
    //           error={BaseIndexPeriodError.error}
    //           helperText={BaseIndexPeriodError.text}
    //           select
    //           SelectProps={{
    //             MenuProps: {
    //               sx: {
    //                 maxHeight: "20rem",
    //               },
    //             },
    //           }}
    //           fullWidth
    //         >
    //           {[
    //             "فروردین",
    //             "اردیبهشت",
    //             "خرداد",
    //             "تیر",
    //             "مرداد",
    //             "شهریور",
    //             "مهر",
    //             "آبان",
    //             "آذر",
    //             "دی",
    //             "بهمن",
    //             "اسفند",
    //           ].map((m) => (
    //             <MenuItem value={m}>{m}</MenuItem>
    //           ))}
    //         </FaTextField>
    //         <FaTextField
    //           label="سه ماهه"
    //           sx={{
    //             gridColumn: "span 2",
    //             display:
    //               BaseIndexPeriod && BaseIndexPeriod.isQuarter
    //                 ? "block"
    //                 : "none",
    //           }}
    //           value={BaseIndexPeriod?.quarter || ""}
    //           onChange={(e) => {
    //             setBaseIndexPeriod((prevBaseIndexPeriod) => {
    //               if (!prevBaseIndexPeriod) return prevBaseIndexPeriod;
    //               return {
    //                 ...prevBaseIndexPeriod,
    //                 quarter: e.target.value,
    //               };
    //             });
    //           }}
    //           fullWidth
    //           error={BaseIndexPeriodError.error}
    //           helperText={BaseIndexPeriodError.text}
    //           select
    //           SelectProps={{
    //             MenuProps: {
    //               sx: {
    //                 maxHeight: "20rem",
    //               },
    //             },
    //           }}
    //         >
    //           <MenuItem value={"اول"}>اول</MenuItem>
    //           <MenuItem value={"دوم"}>دوم</MenuItem>
    //           <MenuItem value={"سوم"}>سوم</MenuItem>
    //           <MenuItem value={"چهارم"}>چهارم</MenuItem>
    //         </FaTextField>
    //         <FaTextField
    //           label="سال"
    //           type="number"
    //           sx={{
    //             gridColumn: "span 2",
    //           }}
    //           value={BaseIndexPeriod?.year || ""}
    //           onChange={(e) => {
    //             setBaseIndexPeriod((prevBaseIndexPeriod) => ({
    //               ...prevBaseIndexPeriod!,
    //               year: e.target.value,
    //             }));
    //           }}
    //           error={BaseIndexPeriodError.error}
    //           helperText={BaseIndexPeriodError.text}
    //           select
    //           SelectProps={{
    //             MenuProps: {
    //               sx: {
    //                 maxHeight: "20rem",
    //               },
    //             },
    //           }}
    //         >
    //           {[
    //             "1370",
    //             "1371",
    //             "1372",
    //             "1373",
    //             "1374",
    //             "1375",
    //             "1376",
    //             "1377",
    //             "1378",
    //             "1379",
    //             "1380",
    //             "1381",
    //             "1382",
    //             "1383",
    //             "1384",
    //             "1385",
    //             "1386",
    //             "1387",
    //             "1388",
    //             "1389",
    //             "1390",
    //             "1391",
    //             "1392",
    //             "1393",
    //             "1394",
    //             "1395",
    //             "1396",
    //             "1397",
    //             "1398",
    //             "1399",
    //             "1400",
    //             "1401",
    //             "1402",
    //             "1403",
    //           ].map((y) => (
    //             <MenuItem value={y}>{y}</MenuItem>
    //           ))}
    //         </FaTextField>

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-11- تاريخ شروع كار

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 2"}>
    //           تاريخ شروع كار:
    //         </FaTypography>

    //         <DateButton
    //           date={OperationStartDate}
    //           setDate={setOperationStartDate}
    //           sx={{
    //             gridColumn: "span 3",
    //             border: OperationStartDateError.error
    //               ? "1px solid red"
    //               : undefined,
    //           }}
    //           label="تاريخ شروع كار "
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         {/*

    //       4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 5"}>
    //           پيشرفت فيزيكي كار در تاريخ درخواست داوري:
    //         </FaTypography>

    //         <FaTextField
    //           label="خوانده"
    //           type="number"
    //           InputProps={{
    //             endAdornment: "درصد",
    //           }}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           value={PhysicalProgressInArbitrationDate}
    //           onChange={(e) => {
    //             setPhysicalProgressInArbitrationDate(
    //               parseInt(e.target.value)
    //             );
    //           }}
    //           error={PhysicalProgressInArbitrationDateError.error}
    //           helperText={PhysicalProgressInArbitrationDateError.text}
    //         />
    //         {/*

    //       4-13- پيشرفت ریالی كار در تاريخ درخواست داوري

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 5"}>
    //           پيشرفت ریالی كار در تاريخ درخواست داوري:
    //         </FaTypography>

    //         <FaTextField
    //           label="خوانده"
    //           type="number"
    //           InputProps={{
    //             endAdornment: "درصد",
    //           }}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           value={FinancialProgressInArbitrationDateAccuser}
    //           onChange={(e) => {
    //             setFinancialProgressInArbitrationDateAccuser(
    //               parseInt(e.target.value)
    //             );
    //           }}
    //           error={FinancialProgressInArbitrationDateAccuserError.error}
    //           helperText={
    //             FinancialProgressInArbitrationDateAccuserError.text
    //           }
    //         />

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-14- وضعیت قرارداد در تاریخ درخواست داوری

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 4"}>
    //           وضعیت قرارداد در تاریخ درخواست داوری:
    //         </FaTypography>

    //         <FormControl
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         >
    //           <RadioGroup
    //             row
    //             aria-labelledby="demo-row-radio-buttons-group-label"
    //             name="row-radio-buttons-group"
    //           >
    //             <FormControlLabel
    //               value="ابلاغ خاتمه"
    //               control={<Radio />}
    //               label="ابلاغ خاتمه"
    //               checked={ContractStatusInArbitration === "ابلاغ خاتمه"}
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setContractStatusInArbitration(e.target.value);
    //               }}
    //             />
    //             <FormControlLabel
    //               value="ابلاغ فسخ"
    //               control={<Radio />}
    //               label="ابلاغ فسخ"
    //               checked={ContractStatusInArbitration === "ابلاغ فسخ"}
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setContractStatusInArbitration(e.target.value);
    //               }}
    //             />
    //             <FormControlLabel
    //               value="جاری"
    //               control={<Radio />}
    //               label="جاری"
    //               checked={ContractStatusInArbitration === "جاری"}
    //               onChange={(e) => {
    //                 // @ts-ignore
    //                 setContractStatusInArbitration(e.target.value);
    //               }}
    //             />

    //             {/* <FormControlLabel
    //             control={
    //               <FaTextField label={"تاریخ"} type="date" focused />
    //             }
    //             label=""
    //             value={ContractStatusInArbitrationDate}
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setContractStatusInArbitrationDate(e.target.value);
    //             }}
    //           /> */}
    //           </RadioGroup>
    //         </FormControl>

    //         <FormGroup
    //           sx={{
    //             display:
    //               ContractStatusInArbitration === "ابلاغ فسخ" ||
    //               ContractStatusInArbitration === "ابلاغ خاتمه"
    //                 ? "block"
    //                 : "none",
    //             gridColumn: "span 12",
    //           }}
    //         >
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="تحویل موقت"
    //             value={TemporaryDelivery?.checked}
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setTemporaryDelivery({
    //                 ...TemporaryDelivery,
    //                 // @ts-ignore
    //                 checked: e.target.checked,
    //               });
    //             }}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox />}
    //             label="تحویل قطعی"
    //             onChange={(e) => {
    //               // @ts-ignore
    //               setFinalDelivery({
    //                 ...FinalDelivery,
    //                 // @ts-ignore
    //                 checked: e.target.checked,
    //               });
    //             }}
    //             value={FinalDelivery?.checked}
    //           />
    //         </FormGroup>

    //         <DateButton
    //           date={TemporaryDelivery && TemporaryDelivery.date}
    //           setDate={(date) => {
    //             setTemporaryDelivery({
    //               ...TemporaryDelivery,
    //               // @ts-ignore
    //               date: date,
    //             });
    //           }}
    //           sx={{
    //             gridColumn: "span 2",
    //             display: TemporaryDelivery?.checked ? "block" : "none",
    //           }}
    //           label="تاریخ تحویل موقت"
    //         />

    //         <DateButton
    //           date={FinalDelivery && FinalDelivery.date}
    //           setDate={(date) => {
    //             setFinalDelivery({
    //               ...FinalDelivery,
    //               // @ts-ignore
    //               date: date,
    //             });
    //           }}
    //           sx={{
    //             gridColumn: "span 2",
    //             display: FinalDelivery?.checked ? "block" : "none",
    //           }}
    //           label="تاریخ تحویل قطعی"
    //         />

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />

    //         {/*

    //       4-15- دستگاه نظارت (مهندس مشاور)

    //     */}
    //         <FaTextField
    //           label={"دستگاه نظارت (مهندس مشاور) :"}
    //           sx={{
    //             gridColumn: "span 4",
    //           }}
    //           value={SupervisionDepartment}
    //           onChange={(e) => {
    //             setSupervisionDepartment(e.target.value);
    //           }}
    //           error={SupervisionDepartmentError.error}
    //           helperText={SupervisionDepartmentError.text}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         {/*

    //       4-16- تاخیرات

    //     */}
    //         <FaTypography variant="h6" gridColumn={"span 12"}>
    //           تاخیرات
    //         </FaTypography>
    //         <FaTypography variant="body1" gridColumn={"span 2"}>
    //           مجاز
    //         </FaTypography>
    //         <FaTextField
    //           label={"از نظر خوانده:"}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           InputProps={{
    //             endAdornment: "روز",
    //           }}
    //           type="number"
    //           value={AuthorizedDelays}
    //           onChange={(e) => {
    //             setAuthorizedDelays(parseInt(e.target.value));
    //           }}
    //           error={AuthorizedDelaysError.error}
    //           helperText={AuthorizedDelaysError.text}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 2",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <FaTypography variant="body1" gridColumn={"span 2"}>
    //           غیر مجاز
    //         </FaTypography>
    //         <FaTextField
    //           label={"از نظر خوانده:"}
    //           sx={{
    //             gridColumn: "span 3",
    //           }}
    //           InputProps={{
    //             endAdornment: "روز",
    //           }}
    //           type="number"
    //           value={UnauthorizedDelays}
    //           onChange={(e) => {
    //             setUnauthorizedDelays(parseInt(e.target.value));
    //           }}
    //           error={UnauthorizedDelaysError.error}
    //           helperText={UnauthorizedDelaysError.text}
    //         />
    //         <Divider
    //           sx={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         {/*

    //       توجهات

    //     */}
    //         <FaTypography
    //           variant="h5"
    //           fontWeight={800}
    //           gridColumn={"span 12"}
    //         >
    //           توجه مهم: چنانچه در خصوص تاخیرات و یا تبعات ناشی از آن
    //           اختلافی وجود دارد، لازم است موارد زیر ارسال شوند:
    //         </FaTypography>
    //         <FaTypography
    //           variant="h6"
    //           fontWeight={800}
    //           gridColumn={"span 12"}
    //         >
    //           گزارش توجیهی تاخیرات قرارداد شامل:
    //         </FaTypography>
    //         <List
    //           sx={{
    //             gridColumn: "span 6",
    //           }}
    //         >
    //           <Box
    //             display={"flex"}
    //             justifyContent={"space-between"}
    //             paddingY={"1rem"}
    //           >
    //             <FaTypography variant="body1">
    //               برنامه های زمان‏بندی اولیه و اصلاحی ابلاغ شده
    //             </FaTypography>
    //             <FileBox />
    //           </Box>
    //           <Box
    //             display={"flex"}
    //             justifyContent={"space-between"}
    //             paddingY={"1rem"}
    //           >
    //             <FaTypography variant="body1">
    //               گزارش تهیه شده توسط پیمانکار (به همراه کلیه مستندات و
    //               پیوست‏ها)
    //             </FaTypography>
    //             <FileBox />
    //           </Box>
    //           <Box
    //             display={"flex"}
    //             justifyContent={"space-between"}
    //             paddingY={"1rem"}
    //           >
    //             <FaTypography variant="body1">
    //               گزارش رسیدگی به تاخیرات توسط مهندس مشاور
    //             </FaTypography>
    //             <FileBox />
    //           </Box>
    //           <Box
    //             display={"flex"}
    //             justifyContent={"space-between"}
    //             paddingY={"1rem"}
    //           >
    //             <FaTypography variant="body1">
    //               مستندات ابلاغ نتایج رسیدگی به تاخیرات به پیمانکار توسط
    //               کارفرما
    //             </FaTypography>
    //             <FileBox />
    //           </Box>
    //         </List>

    //         <div
    //           style={{
    //             gridColumn: "span 12",
    //           }}
    //         />
    //         <div
    //           style={{
    //             gridColumn: "span 6",
    //           }}
    //         />
    //         <Button
    //           variant="contained"
    //           //   disabled={loading}
    //           sx={{
    //             gridColumn: "span 6",
    //             fontSize: "1.1rem",
    //             width: "max-content",
    //             padding: "0.5rem 2rem",
    //             justifySelf: "flex-end",
    //             "&:hover": {
    //               backgroundColor: GreenLight,
    //               color: Green,
    //             },
    //           }}
    //           onClick={() => {
    //             if (handleErrors()) {
    //               void createContractMutation({
    //                 onCompleted(data, clientOptions) {
    //                   alert("قرارداد با موفقیت ثبت شد");
    //                 },
    //                 onError(error, clientOptions) {
    //                   console.log(clientOptions);
    //                   console.error(error);
    //                 },
    //               });
    //             } else {
    //               void createContractMutation({
    //                 onCompleted(data, clientOptions) {
    //                   console.log(data);
    //                   alert("قرارداد با موفقیت تکمیل شد");
    //                 },
    //                 onError(error, clientOptions) {
    //                   console.log(clientOptions);
    //                   console.error(error);
    //                 },
    //               });
    //               // navigate("/complaints/addComplaint");
    //             }
    //           }}
    //         >
    //           ثبت
    //         </Button>

    //         {data?.contract_updateContract?.result && (
    //           <Alert
    //             severity="success"
    //             sx={{
    //               gridColumn: "span 6",
    //               display: "flex",
    //               justifyContent: "space-between",
    //             }}
    //           >
    //             <Typography>قرارداد با موفقیت تکمیل شد</Typography>

    //             <Button
    //               onClick={() => {
    //                 void updateCompaint();
    //               }}
    //             >
    //               ادامه و تکمیل درخواست داوری
    //             </Button>
    //           </Alert>
    //         )}
    //       </Box>
    //     </>
  );
};

export default UpdateContractAccuserPage;
