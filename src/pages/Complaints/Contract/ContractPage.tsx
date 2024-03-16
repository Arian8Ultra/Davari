/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Add, CancelRounded } from "@mui/icons-material";
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
  colors,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ComplaintStateStatus,
  useCreate_Adjustment_Statement_TableMutation,
  useCreate_Installment_TableMutation,
  useCreate_Work_Condition_Statement_TableMutation,
  useGetContractQuery,
  useGetPublicContractsLazyQuery,
  useGetUserWithFilterLazyQuery,
  useUpdateComplaintFullMutation,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import {
  CREATE_COMPLAINT,
  UPDATE_COMPLAINT_FULL,
} from "../../../GraphQL/Complaints/Mutations";
import {
  GET_ALL_ORGANIZATION_USERS,
  GET_USER_QUERIABLE,
} from "../../../GraphQL/Users/Queries";
import BackButton from "../../../components/BackButton";
import DateButton from "../../../components/DateButton";
import FaTextField from "../../../components/FaComponents/FaTextField";
import FaTypography from "../../../components/FaComponents/FaTypography";
import FileBox from "../../../components/FileBox";
import TimeLine from "../../../components/TimeLine";
import TreeChart from "../../../components/TreeChart";
import {
  ComplaintState,
  ContractGeneralType,
  Create_ContractDocument,
  RegistrarType,
  Update_Contract_By_AccusedDocument,
  UserType,
} from "../../../gql/graphql";
import countries from "../../../static/Countries";
import fehrestbaha from "../../../static/fehrestbaha.json";
import {
  GreenLight,
  primary,
  secondary,
  secondaryDark,
} from "../../../theme/color";
import { UPLOAD_FILE, UPLOAD_FILES } from "../../../api/upload";
import currencies from "../../../static/Currencies.json";
import { getComplaintStateWithEnum } from "../../../functions/ComplaintStatesFunc";
import { convertToPersianDigits } from "../../../functions/Functions";
import { provinces } from "../../../static/provinces.json";
import FilesBox from "../../../components/FilesBox";
import { useAlertStore } from "../../../Context/AlertStore";

interface inputError {
  message?: string;
  error?: boolean;
}

const NewContractPage = () => {
  const { setAlertMessage, setAlertOpen, setAlertType } = useAlertStore();
  const user = useUserStore((state) => state.user);
  const token = useUserStore.getState().token;
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  const { contractId, complaintId, type } = useParams<{
    contractId?: string;
    complaintId?: string;
    type?: string;
  }>();
  const [hasIncOrDec, setHasIncOrDec] = useState(false);
  const [finalAmount, setFinalAmount] = useState<number>();
  const [finalAmountError, setFinalAmountError] = React.useState<inputError>();
  const [hasBeenDirected, setHasBeenDirected] = useState(false);
  const [newEmployer, setNewEmployer] = useState<string>();
  const [Currency, setCurrency] = useState<string>("ریال ایران");
  const [Province, setProvince] = useState<string>("تهران");
  const [City, setCity] = useState<string>("تهران");
  const [CurrencyError, setCurrencyError] = React.useState<inputError>();
  const [ContractGeneralTypeInput, setContractGeneralTypeInput] =
    useState<ContractGeneralType>();

  const [AgreementFileName, setAgreementFileName] = useState<string>();
  const [GeneralConditionsFileName, setGeneralConditionsFileName] =
    useState<string>();
  const [PrivateTermsFileName, setPrivateTermsFileName] = useState<string>();
  const [OtherAttachmentsFileNames, setOtherAttachmentsFileNames] =
    useState<string[]>();

  const [AgreementFile, setAgreementFile] = useState<File>();
  const [GeneralConditionsFile, setGeneralConditionsFile] = useState<File>();
  const [PrivateTermsFile, setPrivateTermsFile] = useState<File>();
  const [OtherAttachmentsFiles, setOtherAttachmentsFiles] = useState<File[]>();

  const [tempPeopleFromAccuser, SetTempPeopleFromAccuser] = useState<{
    name?: string;
    phoneNumber?: string;
    position?: string;
  }>();

  const [tempPeopleFromAccused, SetTempPeopleFromAccused] = useState<{
    name?: string;
    phoneNumber?: string;
    position?: string;
  }>();

  const [RelatedPeopleByAccusser, setRelatedPeopleByAccusser] = React.useState<
    {
      name?: string;
      phone?: string;
      position?: string;
    }[]
  >([]);
  const [RelatedPeopleByAccusserError, setRelatedPeopleByAccusserError] =
    React.useState<inputError>();
  const [Employer, setEmployer] = React.useState<string>();
  const [EmployerError, setEmployerError] = React.useState<inputError>();
  const [Employee, setEmployee] = React.useState<string>();
  const [EmployeeError, setEmployeeError] = React.useState<inputError>();
  const [RelatedPeopleByAccussed, setRelatedPeopleByAccussed] = React.useState<
    {
      name?: string;
      phone?: string;
      position?: string;
    }[]
  >([]);
  const [RelatedPeopleByAccussedError, setRelatedPeopleByAccussedError] =
    React.useState<inputError>();
  const [Nationality, setNationality] = React.useState<string>();
  const [NationalityError, setNationalityError] = React.useState<inputError>();
  const [contractDetails, setContractDetails] = React.useState<{
    contratTypes: string[];
    other?: boolean;
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
    React.useState<inputError>();
  const [ContractSubject, setContractSubject] = React.useState<string>();
  const [ContractSubjectError, setContractSubjectError] =
    React.useState<inputError>();
  const [ContractNumber, setContractNumber] = React.useState<string>();
  const [ContractNumberError, setContractNumberError] =
    React.useState<inputError>();
  const [ContractDate, setContractDate] = React.useState<Date>();
  const [ContractDateError, setContractDateError] =
    React.useState<inputError>();
  const [InitialBudget, setInitialBudget] = React.useState<number>();
  const [InitialBudgetError, setInitialBudgetError] =
    React.useState<inputError>();
  const [InitialTimePeriod, setInitialTimePeriod] = React.useState<string>();
  const [InitialTimePeriodError, setInitialTimePeriodError] =
    React.useState<inputError>();
  const [PriceListOfBasicUnitOfField, setPriceListOfBasicUnitOfField] =
    React.useState<
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
  ] = React.useState<inputError>();

  const [
    IsSpecialPriceListAttachedToContract,
    setIsSpecialPriceListAttachedToContract,
  ] = React.useState<string>();
  const [
    IsSpecialPriceListAttachedToContractError,
    setIsSpecialPriceListAttachedToContractError,
  ] = React.useState<inputError>();

  const [RecommendedCoefficient, setRecommendedCoefficient] =
    React.useState<number>();
  const [AssigningType, setAssigningType] = React.useState<string>();
  const [AssigningTypeError, setAssigningTypeError] =
    React.useState<inputError>();
  const [DoesContainAdjustment, setDoesContainAdjustment] =
    React.useState<boolean>(true);
  const [DoesContainAdjustmentEror] = React.useState<inputError>();
  const [Adjustment, setAdjustment] = useState<{
    number: number;
    date: Date;
  }>();
  const [AdjustmentError, setAdjustmentError] = React.useState<inputError>();
  const [BaseIndexPeriod, setBaseIndexPeriod] = React.useState<{
    isQuarter: boolean;
    quarter: string;
    month: string;
    year: string;
  }>();
  const [BaseIndexPeriodError, setBaseIndexPeriodError] =
    React.useState<inputError>();
  const [OperationStartDateAccuser, setOperationStartDateAccuser] =
    React.useState<Date>();
  const [OperationStartDateAccuserError, setOperationStartDateAccuserError] =
    React.useState<inputError>();
  const [OperationStartDate, setOperationStartDate] = React.useState<Date>();
  const [OperationStartDateError, setOperationStartDateError] =
    React.useState<inputError>();
  const [
    PhysicalProgressInArbitrationDate,
    setPhysicalProgressInArbitrationDate,
  ] = React.useState<number>();
  const [
    PhysicalProgressInArbitrationDateError,
    setPhysicalProgressInArbitrationDateError,
  ] = React.useState<inputError>();
  const [
    FinancialProgressInArbitrationDateAccuser,
    setFinancialProgressInArbitrationDateAccuser,
  ] = React.useState<number>();
  const [
    FinancialProgressInArbitrationDateAccuserError,
    setFinancialProgressInArbitrationDateAccuserError,
  ] = React.useState<inputError>();
  const [ContractStatusInArbitration, setContractStatusInArbitration] =
    React.useState<{
      title: string;
      temp: Date | null;
      final: Date | null;
    }>({
      title: "",
      temp: null,
      final: null,
    });
  const [
    ContractStatusInArbitrationError,
    setContractStatusInArbitrationError,
  ] = React.useState<inputError>();

  const [TemporaryDelivery, setTemporaryDelivery] = useState<{
    checked: boolean;
    date: Date;
  }>();
  const [FinalDelivery, setFinalDelivery] = useState<{
    checked: boolean;
    date: Date;
  }>();
  const [TemporaryDeliveryError, setTemporaryDeliveryError] =
    React.useState<inputError>();
  const [FinalDeliveryError, setFinalDeliveryError] =
    React.useState<inputError>();
  const [
    ContractStatusInArbitrationDateError,
    setContractStatusInArbitrationDateError,
  ] = React.useState<inputError>();
  const [SupervisionDepartment, setSupervisionDepartment] =
    React.useState<string>();
  const [SupervisionDepartmentError, setSupervisionDepartmentError] =
    React.useState<inputError>();
  const [AuthorizedDelays, setAuthorizedDelays] = React.useState<number>();
  const [AuthorizedDelaysError, setAuthorizedDelaysError] =
    React.useState<inputError>();
  const [UnauthorizedDelays, setUnauthorizedDelays] = React.useState<number>();
  const [UnauthorizedDelaysError, setUnauthorizedDelaysError] =
    React.useState<inputError>();
  const [AccusedDepartmentId, setAccusedDepartmentId] =
    React.useState<string>();
  const [AccuserDepartmentId, setAccuserDepartmentId] =
    React.useState<string>();
  const [AccusedDepartmentIdError, setAccusedDepartmentIdError] =
    React.useState<inputError>();
  const [FileNames, setFileNames] = useState<string[]>([]);
  // const [Files, SetFiles] = useState<File[]>();
  const [firstFile, setFirstFile] = useState<File>();
  const [secondFile, setSecondFile] = useState<File>();
  const [thirdFile, setThirdFile] = useState<File>();
  const [fourthFile, setFourthFile] = useState<File>();
  const [treeViewObject, setTreeViewObject] = useState<{
    fullName: string;
    id: string;
    parent?: {
      fullName: string;
      id: string;
    };
  }>();

  const [departments, setDepartments] = React.useState<
    {
      label: string;
      id: string;
      type: "INDIVIDUAL" | "ORGANIZATION" | "CONTRACTOR_OR_CONSULTANT";
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

  const [getUser] = useLazyQuery(GET_USER_QUERIABLE, {
    variables: {
      id: AccusedDepartmentId,
    },
  });

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
  const [updateCompaint] = useUpdateComplaintFullMutation({
    variables: {
      input: {
        id: complaintId ? parseInt(complaintId) : 0,
        complaintStateId: getComplaintStateWithEnum(
          ComplaintStateStatus.WaitingForAccusedToRegisterArbitrationTerms
        ).id,
      },
    },
    onCompleted(data) {
      alert("ثبت شد");
      navigate(`/complaints/${contractId}/${complaintId}/tablesPage`);
    },
  });

  const [addInstallment] = useCreate_Installment_TableMutation({
    onCompleted(data, clientOptions) {
      console.log("🚀 ~ onCompleted ~ addInstallment:", data);
    },
  });
  const [addWorkCondition] = useCreate_Work_Condition_Statement_TableMutation({
    onCompleted(data, clientOptions) {
      console.log("🚀 ~ onCompleted ~ addWorkCondition:", data);
    },
  });
  const [addAdjustmentStatement] = useCreate_Adjustment_Statement_TableMutation(
    {
      onCompleted(data, clientOptions) {
        console.log("🚀 ~ onCompleted ~ addAdjustmentStatement:", data);
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
  //
  //
  //
  //

  const handleErrorsPartOne = () => {
    if (!ContractSubject) {
      setContractSubjectError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }

    if (!ContractNumber) {
      setContractNumberError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }

    if ((!finalAmount || finalAmount < 1) && !finalAmount && hasIncOrDec) {
      setFinalAmountError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }

    if (!InitialTimePeriod || InitialTimePeriod.length < 1) {
      setInitialTimePeriodError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }
    if (!InitialBudget || InitialBudget < 1) {
      setInitialBudgetError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }

    if (
      departments.find((d) => {
        return d.id === user.parentId;
      })?.type === "CONTRACTOR_OR_CONSULTANT"
        ? departments.find((d) => {
            return d.id === user.parentId;
          })!.label
        : user.userType == "CONTRACTOR_OR_CONSULTANT"
        ? false
        : true || !Employee
    ) {
      setEmployeeError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }

    if (
      departments.find((d) => {
        return d.id === user.parentId;
      })?.type === "ORGANIZATION"
        ? departments.find((d) => {
            return d.id === user.parentId;
          })!.label
        : user.userType == "ORGANIZATION"
        ? false
        : true || !Employee
    ) {
      setEmployerError({
        error: true,
        message: "مقدار فیلد نباید خالی یا منفی باشد",
      });
    }

    if (
      !InitialBudget ||
      !InitialTimePeriod ||
      (!finalAmount && hasIncOrDec) ||
      !ContractNumber ||
      !ContractSubject
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleErrors = () => {
    if (RelatedPeopleByAccussed && RelatedPeopleByAccussed.length <= 0) {
      setRelatedPeopleByAccussedError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (!Nationality) {
      setNationalityError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (contractDetails && contractDetails?.contratTypes?.length <= 0) {
      setContratDetailsError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (ContractSubject && ContractSubject.length <= 0) {
      setContractSubjectError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (!ContractNumber) {
      setContractNumberError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }
    if (!ContractDate) {
      setContractDateError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!InitialBudget) {
      setInitialBudgetError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!InitialTimePeriod) {
      setInitialTimePeriodError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!Currency) {
      setCurrencyError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    // PriceListOfBasicUnitOfField &&
    //   PriceListOfBasicUnitOfField.forEach((item, index) => {
    //     if (item.year.length <= 0 || item.price.length <= 0) {
    //       const newPriceListOfBasicUnitOfFieldError = [
    //         ...PriceListOfBasicUnitOfFieldError,
    //       ];
    //       newPriceListOfBasicUnitOfFieldError[index] = {
    //         error: true,
    //         text: "مقدار فیلد نباید خالی باشد",
    //       };
    //       setPriceListOfBasicUnitOfFieldError(
    //         newPriceListOfBasicUnitOfFieldError
    //       );
    //     }
    //   });

    if (AssigningType && AssigningType.length <= 0) {
      setAssigningTypeError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (BaseIndexPeriod && BaseIndexPeriod.month.length <= 0) {
      setBaseIndexPeriodError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (BaseIndexPeriod && BaseIndexPeriod.year.length <= 0) {
      setBaseIndexPeriodError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (OperationStartDateAccuser) {
      setOperationStartDateAccuserError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!OperationStartDate) {
      setOperationStartDateError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!PhysicalProgressInArbitrationDate) {
      setPhysicalProgressInArbitrationDateError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!FinancialProgressInArbitrationDateAccuser) {
      setFinancialProgressInArbitrationDateAccuserError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    // if (
    //   ContractStatusInArbitration &&
    //   ContractStatusInArbitration.length <= 0
    // ) {
    //   setContractStatusInArbitrationError([
    //     {
    //       error: true,
    //       text: "مقدار فیلد نباید خالی باشد",
    //     },
    //   ]);
    // }

    // if (
    //   ContractStatusInArbitrationDate &&
    //   ContractStatusInArbitrationDate.length <= 0
    // ) {
    //   setContractStatusInArbitrationDateError({
    //     error: true,
    //     text: "مقدار فیلد نباید خالی باشد",
    //   });
    // }

    if (SupervisionDepartment && SupervisionDepartment.length <= 0) {
      setSupervisionDepartmentError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!AuthorizedDelays) {
      setAuthorizedDelaysError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (!UnauthorizedDelays) {
      setUnauthorizedDelaysError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    if (AccusedDepartmentId && AccusedDepartmentId.length <= 0) {
      setAccusedDepartmentIdError({
        error: true,
        message: "مقدار فیلد نباید خالی باشد",
      });
    }

    return (
      RelatedPeopleByAccussedError?.error ||
      contratDetailsError?.error ||
      ContractSubjectError?.error ||
      ContractNumberError?.error ||
      ContractDateError?.error ||
      InitialBudgetError?.error ||
      InitialTimePeriodError?.error ||
      DoesContainAdjustmentEror?.error ||
      BaseIndexPeriodError?.error ||
      OperationStartDateAccuserError?.error ||
      OperationStartDateError?.error ||
      PhysicalProgressInArbitrationDateError?.error ||
      FinancialProgressInArbitrationDateAccuserError?.error ||
      ContractStatusInArbitrationDateError?.error ||
      SupervisionDepartmentError?.error ||
      AuthorizedDelaysError?.error ||
      UnauthorizedDelaysError?.error ||
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
    Create_ContractDocument,
    {
      variables: {
        AccuserRelatedPeople: JSON.stringify(RelatedPeopleByAccusser),
        AccusedRelatedPeople: JSON.stringify(RelatedPeopleByAccussed),
        AccuserNationality: Nationality,
        ContractType: contractDetails && contractDetails.contratTypes,
        CircularNumber: contractDetails && contractDetails.CircularNumber,
        CircularDate: contractDetails && contractDetails.CircularDate,
        ContractSubject: ContractSubject && ContractSubject,
        ContractNumber: ContractNumber,
        ContractDate: ContractDate,
        InitialBudget: InitialBudget,
        InitialTimePeriod: parseInt(InitialTimePeriod || "0"),
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
        ContractStatusInArbitration: JSON.stringify(
          ContractStatusInArbitration
        ),
        SupervisionDepartment: SupervisionDepartment,
        AuthorizedDelaysAccuser: AuthorizedDelays,
        UnauthorizedDelaysAccuser: UnauthorizedDelays,
        AccusedDepartmentId: AccusedDepartmentId,
        AccuserDepartmentId:
          user.userType == "CONTRACTOR_OR_CONSULTANT" ? user.id : user.parentId,
        Currency: Currency,
        fileNamesByAccuser: FileNames ? JSON.stringify(FileNames) : null,
        agreementFileName: AgreementFileName,
        generalConditionsFileName: GeneralConditionsFileName,
        otherAttachmentFileName: OtherAttachmentsFileNames,
        privateTermsFileName: PrivateTermsFileName,
        ContractGeneralType: ContractGeneralTypeInput,
      },
    }
  );

  const [updateContractMutation, { data: updateData, loading: updateLoading }] =
    useMutation(Update_Contract_By_AccusedDocument, {
      variables: {
        AccuserRelatedPeople: JSON.stringify(RelatedPeopleByAccusser),
        AccusedRelatedPeople: JSON.stringify(RelatedPeopleByAccussed),
        AccuserNationality: Nationality,
        ContractType: contractDetails.contratTypes,
        CircularNumber: contractDetails.CircularNumber,
        CircularDate: contractDetails.CircularDate,
        ContractSubject: ContractSubject,
        // ContractNumber: ContractNumber,
        ContractDate: ContractDate,
        InitialBudget: InitialBudget,
        InitialTimePeriod: parseInt(InitialTimePeriod || "0"),
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
        ContractStatusInArbitration: JSON.stringify(
          ContractStatusInArbitration
        ),
        SupervisionDepartment: SupervisionDepartment,
        AuthorizedDelaysAccuser: AuthorizedDelays,
        UnauthorizedDelaysAccuser: UnauthorizedDelays || undefined,
        id: contractId ? parseInt(contractId) : 0,
        Currency: Currency,
        fileNamesByAccused: JSON.stringify(FileNames),
        agreementFileName: AgreementFileName,
        generalConditionsFileName: GeneralConditionsFileName,
        otherAttachmentFileName: OtherAttachmentsFileNames,
        privateTermsFileName: PrivateTermsFileName,
      },
    });

  //
  //
  //
  //
  const { data: contractData } = useGetContractQuery({
    variables: {
      id: parseInt(contractId || "") || 0,
    },
    onCompleted(data) {
      if (type != "update") return;

      const contract = data?.contract_getContracts.result?.items?.[0];
      void GetAccused({
        variables: {
          filter: {
            id: {
              eq: contract?.accusedDepartmentUserId,
            },
          },
        },
      });
      void GetAccuser({
        variables: {
          filter: {
            id: {
              eq: contract?.accuserDepartmentUserId,
            },
          },
        },
      });
      setContractDetails({
        contratTypes: contract?.contractTypeByAccuser || [""],
        CircularNumber: contract?.circularNumberByAccuser || "",
        CircularDate: contract?.circularDateByAccuser || new Date(),
      });
      setCurrency(contract?.currencyByAccuser || "ریال");
      setContractSubject(contract?.contractSubjectByAccuser || "");
      setContractNumber(contract?.contractNumberByAccuser || "");
      setContractDate(new Date(contract?.contractDateByAccuser) || new Date());
      setInitialBudget(contract?.initialBudgetByAccuser || 0);
      setInitialTimePeriod(String(contract?.initialTimePeriodByAccuser || 0));
      setPriceListOfBasicUnitOfField(
        JSON.parse(contract?.priceListOfBasicUnitOfFieldByAccuser || "") || []
      );
      setIsSpecialPriceListAttachedToContract(
        contract?.isSpecialPriceListAttachedToContractByAccuser || ""
      );
      setRecommendedCoefficient(contract?.recommendedCoefficientByAccuser || 0);
      setAssigningType(contract?.assigningTypeByAccuser || "");
      setDoesContainAdjustment(
        contract?.doesContainAdjustmentByAccuser == "true" ? true : false
      );
      setBaseIndexPeriod(
        JSON.parse(contract?.baseIndexPeriodByAccuser || "") || {}
      );
      setOperationStartDateAccuser(
        new Date(contract?.operationStartDateByAccuser) || new Date()
      );
      setPhysicalProgressInArbitrationDate(
        contract?.physicalProgressInArbitrationDateByAccuser || 0
      );
      setFinancialProgressInArbitrationDateAccuser(
        contract?.financialProgressInArbitrationDateByAccuser || 0
      );
      setContractStatusInArbitration(
        JSON.parse(
          contract?.contractStatusAndDateInArbitrationByAccuser || ""
        ) || {}
      );
      setSupervisionDepartment(contract?.supervisionDepartmentByAccuser || "");
      setAuthorizedDelays(contract?.authorizedDelaysByAccuser || 0);
      setUnauthorizedDelays(contract?.unauthorizedDelaysByAccuser || 0);
      setAccusedDepartmentId(contract?.accusedDepartmentUserId || "");
      setAccuserDepartmentId(contract?.accuserDepartmentUserId || "");
    },
  });

  const [GetAccuser, { data: AccuserData }] = useGetUserWithFilterLazyQuery({
    variables: {
      filter: {
        id: {
          eq: contractData?.contract_getContracts.result?.items?.[0]
            ?.accuserDepartmentUserId,
        },
      },
    },
    onCompleted(data) {
      console.log("🚀 ~ onCompleted ~ GetAccuser:", data);
    },
  });

  const [GetAccused, { data: AccusedData }] = useGetUserWithFilterLazyQuery({
    variables: {
      filter: {
        id: {
          eq: contractData?.contract_getContracts.result?.items?.[0]
            ?.accusedDepartmentUserId,
        },
      },
    },
  });
  //
  //
  //
  const contract_details_items = [
    {
      id: 1,
      generalType: ContractGeneralType.Contractor,
      title:
        "موافقتنامه و شرایط عمومی و شرایط خصوصی پیمان‌ها- نشریه شماره ۴۳۱۱ – بخشنامه شماره ۸۴۲/۵۴-۱۰۸۸/۱۰۲ مورخ ۱۳۷۸/۰۳/۰۳",
      children: [
        {
          id: 2,
          title:
            "انعقاد قرارداد اجرای کارهای ساختمانی به صورت سرجمع- بخشنامه شماره ۹۶/۱۲۹۹۱۸۸ مورخ ۱۳۹۶/۰۵/۰۴",
        },
        {
          id: 3,
          title:
            "انعقاد قرارداد اجرای کارهای ساختمانی به صورت سرجمع- بخشنامه شماره ۱۰۰/۶۴۰۵ مورخ ۱۳۸۹/۰۲/۰۴",
        },
        {
          id: 4,
          title:
            "انعقاد قرارداد بر اساس فهرست بهای تجمیع شده راه، باند فرودگاه و زیرسازی راه آهن – شماره ۶۵۶۳۷/۱۰۰ مورخ ۱۳۹۱/۰۸/۱۴",
        },
        {
          id: 0,
          title: "هیچکدام",
        },
      ],
    },
    {
      id: 5,
      generalType: ContractGeneralType.Consultant,
      title:
        "موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره - نشریه شماره ۴۳۱۸- بخشنامه شماره ۱۰۵/۸۴۲-۵۴/۲۴۶۰- مورخ ۱۳۷۹/۰۴/۲۹",
    },
    {
      id: 6,
      generalType: ContractGeneralType.Consultant,
      title:
        "موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره پژوهشی - نشریه شماره ۳۴۱۹- بخشنامه شماره ۲۷۵۳/۵۴-۱۶۷۰/۱۰۲ مورخ ۱۳۷۹/۰۵/۲۴",
    },
    {
      id: 7,
      generalType: ContractGeneralType.PlanAndExecution,
      title:
        "موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مدیریت طرح- نشریه شماره ۲۴۱۲۱ مورخ ۱۳۸۰/۰۱/۲۸",
    },
    {
      id: 8,
      generalType: ContractGeneralType.Contractor,
      title:
        "موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های تامین کالا و تجهیزات، ساختمان و نصب به صورت توام (PC)، برای کارهای صنعتی مورخ ۱۸/۱۲/۱۳۸۳",
    },
    {
      id: 9,
      generalType: ContractGeneralType.PlanAndExecution,
      title:
        "قرارداد همسان طرح و ساخت (EPC غیر صنعتی)- 85428/101 مورخ ۱۵/۰۵/۱۳۸۴",
    },
    {
      id: 10,
      generalType: ContractGeneralType.PlanAndExecution,
      title:
        "موافقت‌نامه مشارکت عمومی- خصوصی (PPP) بخشنامه شماره ۹۳/۱۷۲۸۰۴-مورخ ۲۶/۱۲/۱۳۹۳",
    },
    {
      id: 10,
      generalType: ContractGeneralType.PlanAndExecution,
      title:
        "موافقتنامه ساخت، بهره‌برداری، واگذاری (BOT)- نشریه شماره ۴۶۹ مورخ ۲۴/۱۰/۱۳۸۷",
    },
  ];

  const [createComplaint] = useMutation(CREATE_COMPLAINT, {
    variables: {
      contractId: data?.contract_addContract?.result?.id,
      userId: user.id,
      complaintStateId: getComplaintStateWithEnum(
        ComplaintStateStatus.WaitingForAccusedToRegisterArbitrationTerms
      ).id,
    },
  });
  //
  //
  //

  const [getPublicContract, { data: contract, loading: contractLoading }] =
    useGetPublicContractsLazyQuery({
      variables: {
        take: 1,
      },
    });

  useEffect(() => {
    if (contractId && type == "create") {
      void getPublicContract({
        variables: {
          filter: {
            id: {
              eq: parseInt(contractId),
            },
          },
        },
        onCompleted(data) {
          setContractNumber(
            String(
              data?.publicContract_getPublicContracts?.result?.items?.[0]
                ?.contractID
            )
          );
          setContractSubject(
            data?.publicContract_getPublicContracts?.result?.items?.[0]
              ?.contractSubject || ""
          );
          setContractDate(
            new Date(
              data?.publicContract_getPublicContracts?.result?.items?.[0]
                ?.agreeDate || ""
            )
          );
          setInitialBudget(
            data.publicContract_getPublicContracts.result?.items?.[0]
              ?.agreeAmountRial
          );
        },
      });
    }
  }, [contractId, getPublicContract, type]);

  //
  //
  //

  const uploadDocs = async () => {
    try {
      if (GeneralConditionsFile) {
        await UPLOAD_FILE({
          file: GeneralConditionsFile,
          onSuccess(res) {
            setGeneralConditionsFileName(res.result?.[0]?.newFileName);
          },
        });
      }
      if (AgreementFile) {
        await UPLOAD_FILE({
          file: AgreementFile,
          onSuccess(res) {
            setAgreementFileName(res.result?.[0]?.newFileName);
          },
        });
      }
      if (OtherAttachmentsFiles) {
        await UPLOAD_FILES({
          files: OtherAttachmentsFiles,
          onSuccess(res: {
            result: [
              {
                newFileName: string;
              }
            ];
          }) {
            setOtherAttachmentsFileNames(
              res.result?.map((item) => item.newFileName) || []
            );
          },
        });
      }
      if (PrivateTermsFile) {
        await UPLOAD_FILE({
          file: PrivateTermsFile,
          onSuccess(res) {
            setPrivateTermsFileName(res.result?.[0]?.newFileName);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box position={"relative"} width={"100%"}>
        <BackButton to="/complaints" />
        <TimeLine stage={stage} />
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
            lg: "repeat(6, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          padding={"2rem"}
          paddingTop={"0"}
          border={`2px solid ${stage == 1 ? secondary : primary}`}
          borderRadius={"1rem"}
          position={"relative"}
          marginY={"3rem"}
          width={{
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            xl: "66%",
          }}
          sx={{
            background: colors.grey[50],
            display: stage == 1 ? "grid" : "none",
          }}
          marginX={"auto"}
        >
          <Box
            gridColumn={{
              xs: "span 3",
              sm: "span 3",
              md: "span 6",
              lg: "span 6",
              xl: "span 6",
            }}
            borderRadius={"1rem"}
            sx={{
              position: "absolute",
              top: "0",
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
              gridColumn: {
                xs: "span 3",
                sm: "span 3",
                md: "span 6",
                lg: "span 6",
                xl: "span 6",
              },
              mt: "50px",
            }}
            value={ContractSubject}
            focused={ContractSubject ? true : false}
            onChange={(e) => {
              setContractSubject(e.target.value);
            }}
            error={ContractSubjectError?.error}
            helperText={ContractSubjectError?.message}
          />
          <TextField
            label="شناسه قرارداد : "
            variant="outlined"
            sx={{
              gridColumn: "span 3",
            }}
            value={ContractNumber}
            type="text"
            focused={ContractNumber ? true : false}
            onChange={(e) => {
              setContractNumber(String(e.target.value));
            }}
            error={ContractNumberError?.error}
            helperText={ContractNumberError?.message}
          />

          <DatePicker
            label="تاریخ انعقاد قرارداد"
            sx={{
              gridColumn: "span 3",
            }}
            value={new Date(ContractDate || new Date())}
            onChange={(date) => {
              setContractDate(date || new Date());
            }}
          />

          {type == "update" && (
            <>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  gridColumn: "span 3",
                  border: "1px solid #ccc",
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                }}
              >
                کارفرما :{" "}
                {AccuserData?.user_getUsers?.result?.items?.[0]?.userType ==
                UserType.Organization
                  ? AccuserData?.user_getUsers?.result?.items?.[0]?.fullName
                  : AccusedData?.user_getUsers?.result?.items?.[0]?.fullName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  gridColumn: "span 3",
                  border: "1px solid #ccc",
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                }}
              >
                طرف قرارداد :{" "}
                {AccuserData?.user_getUsers?.result?.items?.[0]?.userType ==
                UserType.ContractorOrConsultant
                  ? AccuserData?.user_getUsers?.result?.items?.[0]?.fullName
                  : AccusedData?.user_getUsers?.result?.items?.[0]?.fullName}
              </Typography>
            </>
          )}

          {type == "create" && (
            <>
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
                          data?.user_getUserQueryable?.result?.items[0]?.parent
                        ) {
                          handleParent(
                            data?.user_getUserQueryable?.result?.items[0]
                              ?.parent,
                            {
                              fullName:
                                data?.user_getUserQueryable?.result?.items[0]
                                  ?.fullName,
                              id: data?.user_getUserQueryable?.result.items[0]
                                ?.id,
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
                              data?.user_getUserQueryable?.result?.items[0]
                                ?.parent,
                              {
                                fullName:
                                  data?.user_getUserQueryable?.result?.items[0]
                                    ?.fullName,
                                id: data?.user_getUserQueryable?.result.items[0]
                                  ?.id,
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
            </>
          )}
          <FaTextField
            label="استان محل اجرای پروژه"
            variant="outlined"
            // type="number"
            sx={{
              gridColumn: "span 3",
            }}
            value={Province}
            onChange={(e) => {
              setProvince(e.target.value);
            }}
            focused={Province ? true : false}
            select
          >
            {provinces.map((c) => (
              <MenuItem value={c.persian_name}>{c.persian_name}</MenuItem>
            ))}
          </FaTextField>
          <FaTextField
            label="شهر محل اجرای پروژه"
            variant="outlined"
            // type="number"
            sx={{
              gridColumn: "span 3",
            }}
            value={City}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            focused={City ? true : false}
            // defaultValue={"ریال"}
            // select
          >
            {/* {currencies.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))} */}
          </FaTextField>
          <FaTextField
            label="نوع ارز قرارداد"
            variant="outlined"
            // type="number"
            sx={{
              gridColumn: "span 1",
            }}
            value={Currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
            focused={Currency ? true : false}
            error={CurrencyError?.error}
            helperText={CurrencyError?.message}
            // defaultValue={"ریال"}
            select
          >
            {currencies.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))}
          </FaTextField>
          <FaTextField
            label="مبلغ اوليه/ حق‌الزحمه قرارداد: "
            variant="outlined"
            // type="number"
            InputProps={{
              endAdornment: String(Currency),
            }}
            sx={{
              gridColumn: "span 2",
            }}
            value={InitialBudget}
            onChange={(e) => {
              setInitialBudget(parseInt(e.target.value || "") || 0);
            }}
            focused={InitialBudget ? true : false}
            error={InitialBudgetError?.error}
            helperText={InitialBudgetError?.message}
          />
          <Typography
            variant="body1"
            sx={{
              gridColumn: "span 3",
              color: secondary,
            }}
          >
            مبلغ اولیه :{"  "}
            {
              // add 3 digit separator
              convertToPersianDigits(
                InitialBudget?.toLocaleString("fa-IR").replace(/,/g, "،")
              )
            }{" "}
            {Currency}
          </Typography>
          <FaTextField
            label="مدت اوليه قرارداد: "
            variant="outlined"
            type="text"
            InputProps={{
              endAdornment: "ماه",
            }}
            sx={{
              gridColumn: "span 3",
            }}
            value={InitialTimePeriod}
            focused={InitialTimePeriod ? true : false}
            onChange={(e) => {
              setInitialTimePeriod(e.target.value);
            }}
            error={InitialTimePeriodError?.error}
            helperText={InitialTimePeriodError?.message}
          />
          {InitialTimePeriod?.length ? (
            <Typography
              variant="body1"
              sx={{
                gridColumn: "span 3",
                color: secondary,
              }}
            >
              {convertToPersianDigits(InitialTimePeriod?.split(".")[0]) ||
                convertToPersianDigits(0)}
              /
              {convertToPersianDigits(InitialTimePeriod?.split(".")[1]) ||
                convertToPersianDigits(0)}{" "}
              ماه معادل{" "}
              {convertToPersianDigits(
                Math.floor(
                  parseInt(InitialTimePeriod?.split(".")[0]) / 12
                ).toString()
              )}{" "}
              سال و{" "}
              {convertToPersianDigits(
                Math.floor(
                  parseInt(InitialTimePeriod?.split(".")[0]) % 12
                ).toString()
              )}{" "}
              ماه و{" "}
              {convertToPersianDigits(
                Math.floor(
                  (parseInt(
                    InitialTimePeriod?.split(".")[1] ||
                      convertToPersianDigits(0)
                  ) /
                    10) *
                    30 || 0
                ).toString()
              )}{" "}
              روز
            </Typography>
          ) : (
            <div
              className=""
              style={{
                gridColumn: "span 3",
              }}
            ></div>
          )}

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
              endAdornment: Currency,
            }}
            sx={{
              gridColumn: "span 3",
            }}
            value={finalAmount}
            onChange={(e) => {
              setFinalAmount(parseInt(e.target.value));
            }}
            error={finalAmountError?.error}
            helperText={finalAmountError?.message}
            disabled={!hasIncOrDec}
          />

          {/* check box ابلاغ افزایش / کاهش مبلغ => وقتی انتخاب کرد یه باکس به اسم مبلغ نهایی قرارداد اضاف بشه */}
          <FormControlLabel
            label={"قرارداد دارای انتقال میباشد"}
            sx={{
              gridColumn: "span 3",
            }}
            control={
              <Checkbox
                checked={hasBeenDirected}
                onChange={(e) => {
                  setHasBeenDirected(e.target.checked);
                }}
                disabled={
                  user.userType == "ORGANIZATION" ||
                  departments.find((d) => {
                    return d.id === user.parentId;
                  })?.type === "ORGANIZATION"
                    ? false
                    : false
                }
              />
            }
          />
          <FaTextField
            label="کارفرمای جدید"
            variant="outlined"
            sx={{
              gridColumn: "span 3",
            }}
            value={newEmployer}
            onChange={(e) => {
              setNewEmployer(e.target.value);
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
                        data?.user_getUserQueryable?.result?.items[0]?.parent
                      ) {
                        handleParent(
                          data?.user_getUserQueryable?.result?.items[0]?.parent,
                          {
                            fullName:
                              data?.user_getUserQueryable?.result?.items[0]
                                ?.fullName,
                            id: data?.user_getUserQueryable?.result.items[0]
                              ?.id,
                          }
                        );
                      } else {
                        setTreeViewObject({
                          fullName:
                            data?.user_getUserQueryable?.result?.items[0]
                              ?.fullName,
                          id: data?.user_getUserQueryable?.result.items[0]?.id,
                        });
                      }
                    },
                  });
                }
              }
            }}
            select={
              user.userType == "ORGANIZATION" ||
              departments.find((d) => {
                return d.id === user.parentId;
              })?.type === "ORGANIZATION"
                ? true
                : true
            }
            disabled={!hasBeenDirected}
          >
            {departments.map((item) => (
              <MenuItem value={item.id}>{item.label}</MenuItem>
            ))}
          </FaTextField>
          <div
            style={{
              gridColumn: "span 3",
            }}
          />
          {/* 
          <FaTextField
            label="نوع قرارداد"
            variant="outlined"
            sx={{
              gridColumn: "span 3",
            }}
            value={ContractGeneralTypeInput}
            onChange={(e) => {
              // @ts-ignore
              setContractGeneralTypeInput(e.target.value);
            }}
            focused={ContractGeneralTypeInput ? true : false}
            select
            >
              <MenuItem value={ContractGeneralType.Contractor}>پیمانکار</MenuItem>
              <MenuItem value={ContractGeneralType.Consultant}>مشاور</MenuItem>
              <MenuItem value={ContractGeneralType.PlanAndExecution}>طرح و ساخت</MenuItem>
            </FaTextField> */}

          {/* check box ابلاغ افزایش / کاهش مبلغ => وقتی انتخاب کرد یه باکس به اسم مبلغ نهایی قرارداد اضاف بشه */}

          {/* <div
            style={{
              gridColumn: "span 6",
            }}
          /> */}
        </Box>
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
          width={{
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            xl: "66%",
          }}
          sx={{
            background: colors.grey[50],
            display: stage == 1 ? "grid" : "none",
          }}
          marginX={"auto"}
        >
          <Box
            gridColumn={"span 6"}
            borderRadius={"1rem"}
            sx={{
              position: "absolute",
              top: "0",
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
              پیوست ها
            </FaTypography>
          </Box>

          <FaTypography
            sx={{
              gridColumn: "span 3",
              mt: "50px",
            }}
          >
            فایل موافقتنامه
          </FaTypography>
          <FileBox
            sx={{
              gridColumn: "span 3",
              mt: "50px",
            }}
            title="فایل موافقتنامه"
            files={AgreementFile}
            setFiles={setAgreementFile}
          />
          <FaTypography
            sx={{
              gridColumn: "span 3",
            }}
          >
            فایل شرایط عمومی
          </FaTypography>
          <FileBox
            sx={{
              gridColumn: "span 3",
            }}
            title="فایل شرایط عمومی"
            files={GeneralConditionsFile}
            setFiles={setGeneralConditionsFile}
          />
          <FaTypography
            sx={{
              gridColumn: "span 3",
            }}
          >
            فایل شرایط خصوصی
          </FaTypography>
          <FileBox
            sx={{
              gridColumn: "span 3",
            }}
            title="فایل شرایط خصوصی"
            files={PrivateTermsFile}
            setFiles={setPrivateTermsFile}
          />
          <FaTypography
            sx={{
              gridColumn: "span 3",
            }}
          >
            سایر پیوست‌ ها
          </FaTypography>
          <FilesBox
            sx={{
              gridColumn: "span 3",
            }}
            // multiple={true}
            files={OtherAttachmentsFiles}
            setFiles={(files) => {
              setOtherAttachmentsFiles(files as unknown as File[]);
            }}
            title="سایر پیوست‌ ها"
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
              void uploadDocs().then(() => {
                if (handleErrorsPartOne()) {
                  setStage(2);
                } else {
                  setStage(2);
                }
              });
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
          width={{
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            xl: "66%",
          }}
          marginX={"auto"}
          sx={{
            opacity: stage == 2 ? "100%" : 0,
            height: stage == 2 ? "max-content" : 0,
            overflow: stage == 2 ? "unset" : "hidden",
            transition: "all 0.2s ease-in-out",
            background: colors.grey[50],
          }}
        >
          <Box
            gridColumn={"span 6"}
            borderRadius={"1rem"}
            sx={{
              position: "absolute",
              top: "0",
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
          <Button
            sx={{
              color: secondary,
              backgroundColor: primary,
              borderRadius: "0.75rem",
              gridColumn: "span 2",
              display: stage == 2 ? "flex" : "none",
              position: "absolute",
              top: "0",
              left: "1%",
              transform: "translateY(-50%)",
              padding: "0.5rem 1rem",
              userSelect: "none",
              width: "max-content",
              zIndex: 1000,
            }}
            onClick={() => {
              setStage(1);
            }}
          >
            بازگشت به مرحله قبل
          </Button>
          <FaTypography
            variant="h5"
            gridColumn={"span 12"}
            textAlign={"center"}
            sx={{
              mt: "50px",
            }}
          >
            طرفین قرارداد
          </FaTypography>

          {type == "update" && (
            <>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  gridColumn: "span 6",
                  border: "1px solid #ccc",
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                }}
              >
                نام خواهان :{" "}
                {AccuserData?.user_getUsers?.result?.items?.[0]?.fullName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  gridColumn: "span 6",
                  border: "1px solid #ccc",
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                }}
              >
                نام خوانده :{" "}
                {AccusedData?.user_getUsers?.result?.items?.[0]?.fullName}
              </Typography>
            </>
          )}
          {type == "create" && (
            <>
              <FaTextField
                label="نام  خواهان"
                sx={{
                  width: "100%",
                  gridColumn: "span 6",
                }}
                value={
                  user.userType == "ORGANIZATION" ||
                  user.userType == "CONTRACTOR_OR_CONSULTANT"
                    ? departments.find((d) => {
                        return d.id === user.id;
                      })?.label
                    : departments.find((d) => {
                        return d.id === user.parentId;
                      })?.label
                }
                placeholder={
                  user.userType == "ORGANIZATION" ||
                  user.userType == "CONTRACTOR_OR_CONSULTANT"
                    ? departments.find((d) => {
                        return d.id === user.id;
                      })?.label
                    : departments.find((d) => {
                        return d.id === user.parentId;
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
                      AccusedDepartmentId && item.id === AccusedDepartmentId
                  )?.label
                }
                placeholder={
                  departments.find(
                    (item) =>
                      AccusedDepartmentId && item.id === AccusedDepartmentId
                  )?.label
                }
                focused
                //   disabled
              />

              {/* {AccusedDepartmentId} */}
              <TreeChart gridColumn={"span 12"} object={treeViewObject} />
            </>
          )}

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
          <FaTypography variant="h5" gridColumn={"span 6"} textAlign={"center"}>
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
            error={NationalityError?.error}
            helperText={NationalityError?.message}
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
              اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه از طرف
              خواهان:
            </FaTypography>
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr 1fr 1fr 50px"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaTextField
                label="نام"
                variant="outlined"
                sx={{
                  gridColumn: "span 1",
                }}
                value={tempPeopleFromAccuser?.name}
                onChange={(e) => {
                  SetTempPeopleFromAccuser({
                    ...tempPeopleFromAccuser,
                    name: e.target.value,
                  });
                }}
              />
              <FaTextField
                label="تلفن"
                variant="outlined"
                sx={{
                  gridColumn: "span 1",
                }}
                value={tempPeopleFromAccuser?.phoneNumber}
                onChange={(e) => {
                  SetTempPeopleFromAccuser({
                    ...tempPeopleFromAccuser,
                    phoneNumber: e.target.value,
                  });
                }}
              />
              <FaTextField
                label="سمت"
                variant="outlined"
                sx={{
                  gridColumn: "span 1",
                }}
                value={tempPeopleFromAccuser?.position}
                onChange={(e) => {
                  SetTempPeopleFromAccuser({
                    ...tempPeopleFromAccuser,
                    position: e.target.value,
                  });
                }}
              />
              <IconButton
                sx={{
                  alignSelf: "center",
                  aspectRatio: "1/1",
                }}
                onClick={() => {
                  setRelatedPeopleByAccusser([
                    ...RelatedPeopleByAccusser,
                    {
                      name: tempPeopleFromAccuser?.name,
                      phone: tempPeopleFromAccuser?.phoneNumber,
                      position: tempPeopleFromAccuser?.position,
                    },
                  ]);
                  SetTempPeopleFromAccuser({
                    name: "",
                    phoneNumber: "",
                    position: "",
                  });
                }}
              >
                <Add />
              </IconButton>
              {RelatedPeopleByAccusser.map((person) => (
                <>
                  <Typography>{person.name}</Typography>
                  <Typography>{person.phone}</Typography>
                  <Typography>{person.position}</Typography>
                  <IconButton
                    sx={{
                      alignSelf: "center",
                      aspectRatio: "1/1",
                    }}
                    onClick={() => {
                      setRelatedPeopleByAccusser(
                        RelatedPeopleByAccusser.filter(
                          (item) => item.name !== person.name
                        )
                      );
                      SetTempPeopleFromAccuser({
                        name: "",
                        phoneNumber: "",
                        position: "",
                      });
                    }}
                  >
                    <CancelRounded />
                  </IconButton>
                </>
              ))}
            </Box>
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
              اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه از طرف
              خوانده:
            </FaTypography>
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr 1fr 1fr 50px"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaTextField
                label="نام"
                variant="outlined"
                sx={{
                  gridColumn: "span 1",
                }}
                value={tempPeopleFromAccused?.name}
                onChange={(e) => {
                  SetTempPeopleFromAccused({
                    ...tempPeopleFromAccused,
                    name: e.target.value,
                  });
                }}
              />
              <FaTextField
                label="تلفن"
                variant="outlined"
                sx={{
                  gridColumn: "span 1",
                }}
                value={tempPeopleFromAccused?.phoneNumber}
                onChange={(e) => {
                  SetTempPeopleFromAccused({
                    ...tempPeopleFromAccused,
                    phoneNumber: e.target.value,
                  });
                }}
              />
              <FaTextField
                label="سمت"
                variant="outlined"
                sx={{
                  gridColumn: "span 1",
                }}
                value={tempPeopleFromAccused?.position}
                onChange={(e) => {
                  SetTempPeopleFromAccused({
                    ...tempPeopleFromAccused,
                    position: e.target.value,
                  });
                }}
              />
              <IconButton
                sx={{
                  alignSelf: "center",
                  aspectRatio: "1/1",
                }}
                onClick={() => {
                  setRelatedPeopleByAccussed([
                    ...RelatedPeopleByAccussed,
                    {
                      name: tempPeopleFromAccused?.name,
                      phone: tempPeopleFromAccused?.phoneNumber,
                      position: tempPeopleFromAccused?.position,
                    },
                  ]);
                  SetTempPeopleFromAccused({
                    name: "",
                    phoneNumber: "",
                    position: "",
                  });
                }}
              >
                <Add />
              </IconButton>
              {RelatedPeopleByAccussed.map((person) => (
                <>
                  <Typography>{person.name}</Typography>
                  <Typography>{person.phone}</Typography>
                  <Typography>{person.position}</Typography>
                  <IconButton
                    sx={{
                      alignSelf: "center",
                      aspectRatio: "1/1",
                    }}
                    onClick={() => {
                      setRelatedPeopleByAccussed(
                        RelatedPeopleByAccussed.filter(
                          (item) => item.name !== person.name
                        )
                      );
                      SetTempPeopleFromAccuser({
                        name: "",
                        phoneNumber: "",
                        position: "",
                      });
                    }}
                  >
                    <CancelRounded />
                  </IconButton>
                </>
              ))}
            </Box>
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

          <TextField
            onChange={(e) => {
              setContractDetails({
                ...contractDetails,
                contratTypes: [e.target.value],
              });
              setContractGeneralTypeInput(
                contract_details_items.find(
                  (item) => item.title === e.target.value
                )?.generalType
              );
            }}
            select
            error={contratDetailsError?.error}
            helperText={contratDetailsError?.message}
            label={"نوع قرارداد"}
            sx={{
              gridColumn: "span 12",
              display: contractDetails.other ? "none" : "grid",
            }}
            SelectProps={{
              MenuProps: {
                sx: {
                  maxHeight: "20rem",
                },
              },
            }}
          >
            {contract_details_items.map((item, index) => (
              <MenuItem key={index} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </TextField>
          {contract_details_items.find(
            (item) => item.title === contractDetails.contratTypes?.[0]
          )?.children && (
            <TextField
              label={"نوع قرارداد به صورت خاص"}
              error={contratDetailsError?.error}
              helperText={contratDetailsError?.message}
              onChange={(e) => {
                setContractDetails({
                  ...contractDetails,
                  // @ts-ignore
                  contratTypes: [
                    ...contractDetails.contratTypes,
                    e.target.value,
                  ],
                });
              }}
              select
              sx={{
                gridColumn: "span 12",
                display: contractDetails.other ? "none" : "grid",
              }}
              SelectProps={{
                MenuProps: {
                  sx: {
                    maxHeight: "20rem",
                  },
                },
              }}
            >
              {contract_details_items
                .find(
                  (item) => item.title === contractDetails.contratTypes?.[0]
                )
                ?.children?.map((item, index) => (
                  <MenuItem key={index} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
            </TextField>
          )}
          <FormGroup
            sx={{
              gridColumn: "span 12",
              gap: "1rem",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="   سایر "
              onChange={(e) => {
                // @ts-ignore
                setContractDetails({
                  ...contractDetails,
                  contratTypes: [""],
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
                contractDetails && contractDetails.other ? "block" : "none",
            }}
            value={contractDetails && contractDetails.CircularTitle}
            onChange={(e) => {
              // @ts-ignore
              setContractDetails({
                ...contractDetails,
                CircularTitle: e.target.value,
              });
            }}
            error={contratDetailsError?.error}
            helperText={contratDetailsError?.message}
          />
          <FaTextField
            label={"شماره بخشنامه"}
            variant={"outlined"}
            sx={{
              gridColumn: "span 2",
              display:
                contractDetails && contractDetails.other ? "block" : "none",
            }}
            value={contractDetails && contractDetails.CircularNumber}
            onChange={(e) => {
              // @ts-ignore
              setContractDetails({
                ...contractDetails,
                CircularNumber: e.target.value,
              });
            }}
            error={contratDetailsError?.error}
            helperText={contratDetailsError?.message}
          />
          <DatePicker
            value={new Date(contractDetails?.CircularDate || "")}
            onChange={(date) => {
              setContractDetails(() => ({
                ...contractDetails,
                CircularDate: date || new Date(),
              }));
            }}
            sx={{
              gridColumn: "span 2",
              display:
                contractDetails && contractDetails.other ? "block" : "none",
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
                    // type="text"
                    sx={{
                      gridColumn: "span 1",
                    }}
                    value={item.year}
                    onChange={(e) => {
                      console.log(e);
                      const newPeoples = [...PriceListOfBasicUnitOfField] as [
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
                    SelectProps={{
                      MenuProps: {
                        sx: {
                          maxHeight: "20rem",
                        },
                      },
                    }}
                  ></FaTextField>
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
                      const newPeoples = [...PriceListOfBasicUnitOfField] as [
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
              checked={IsSpecialPriceListAttachedToContract === "دارد"}
              onChange={() => {
                // @ts-ignore
                setIsSpecialPriceListAttachedToContract("دارد");
              }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="ندارد"
              checked={IsSpecialPriceListAttachedToContract === "ندارد"}
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
            value={contractDetails && contractDetails.CircularTitle}
            onChange={(e) => {
              setContractDetails((prevState) => {
                if (!prevState) return prevState;
                return {
                  ...prevState,
                  CircularTitle: e.target.value,
                };
              });
            }}
            error={contratDetailsError?.error}
            helperText={contratDetailsError?.message}
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
            value={contractDetails?.CircularNumber || ""}
            onChange={(e) => {
              setContractDetails((prevState) => {
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
            error={contratDetailsError?.error}
            helperText={contratDetailsError?.message}
          />
          <DateButton
            date={contractDetails && contractDetails.CircularDate}
            setDate={(date) => {
              //@ts-ignore
              setContractDetails((prevState) => ({
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


      4-7- "ضريب پيشنهادي

    
    */}

          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          <FaTypography variant="h5" gridColumn={"span 3"} textAlign={"center"}>
            ضريب پيشنهادی
          </FaTypography>

          <TextField
            label="ضريب پيشنهادي: "
            sx={{
              gridColumn: "span 6",
            }}
            type="number"
            focused={RecommendedCoefficient ? true : false}
            value={RecommendedCoefficient}
            onChange={(e) => {
              setRecommendedCoefficient(parseFloat(e.target.value));
            }}
          />

          <FaTypography variant="h6" gridColumn={"span 3"}>
            {RecommendedCoefficient
              ? RecommendedCoefficient > 1
                ? (RecommendedCoefficient * 100 - 100).toPrecision(2) + "% پلوس"
                : (100 - RecommendedCoefficient * 100).toPrecision(2) +
                  "% مینوس"
              : ""}
          </FaTypography>

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
            error={AdjustmentError?.error}
            helperText={AdjustmentError?.message}
          />

          <DateButton
            date={Adjustment && Adjustment.date}
            setDate={(date) => {
              setAdjustment(
                (prevAdjustment) =>
                  ({
                    ...prevAdjustment,
                    date: date,
                    number: date ? prevAdjustment?.number || 0 : undefined,
                  } as unknown as { number: number; date: Date } | undefined)
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
                checked={BaseIndexPeriod && !BaseIndexPeriod.isQuarter}
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
            error={BaseIndexPeriodError?.error}
            helperText={BaseIndexPeriodError?.message}
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
                BaseIndexPeriod && BaseIndexPeriod.isQuarter ? "block" : "none",
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
            error={BaseIndexPeriodError?.error}
            helperText={BaseIndexPeriodError?.message}
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
            error={BaseIndexPeriodError?.error}
            helperText={BaseIndexPeriodError?.message}
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

          <DatePicker
            value={new Date(OperationStartDate || "")}
            onChange={(date) => {
              setOperationStartDate(date || new Date());
            }}
            sx={{
              gridColumn: "span 4",
            }}
            label="تاريخ شروع كار "
          />
          <div
            style={{
              gridColumn: "span 4",
            }}
          />
          <FileBox
            title={"مستندات مربوطه"}
            sx={{
              gridColumn: "span 4",
            }}
          />
          {/* 


      4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري

    
    */}
          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          <FaTypography variant="h6" gridColumn={"span 6"} textAlign={"center"}>
            پيشرفت فيزيكي كار در تاريخ درخواست داوري
          </FaTypography>

          {/* <div
          style={{
            gridColumn: "span 4",
          }}
        /> */}

          <FaTextField
            label="پيشرفت فيزيكی"
            type="number"
            InputProps={{
              endAdornment: "درصد",
            }}
            sx={{
              gridColumn: "span 6",
            }}
            focused={
              PhysicalProgressInArbitrationDate?.toString() ? true : false
            }
            value={PhysicalProgressInArbitrationDate}
            onChange={(e) => {
              if (Number(e.target.value) > 100) {
                setPhysicalProgressInArbitrationDateError({
                  error: true,
                  message: "پیشرفت فیزیکی نمی تواند بیشتر از 100 درصد باشد",
                });
              } else if (Number(e.target.value) < 0) {
                setPhysicalProgressInArbitrationDateError({
                  error: true,
                  message: "پیشرفت فیزیکی نمی تواند کمتر از 0 درصد باشد",
                });
              } else {
                setPhysicalProgressInArbitrationDateError({
                  error: false,
                  message: "",
                });
              }
              setPhysicalProgressInArbitrationDate(parseInt(e.target.value));
            }}
            error={PhysicalProgressInArbitrationDateError?.error}
            helperText={PhysicalProgressInArbitrationDateError?.message}
          />
          {/* 


      4-13- پيشرفت ریالی كار در تاريخ درخواست داوري

    
    */}
          <FaTypography variant="h6" gridColumn={"span 6"} textAlign={"center"}>
            پيشرفت مالی كار در تاريخ درخواست داوري:
          </FaTypography>

          <FaTextField
            label="پيشرفت مالی كار"
            type="number"
            InputProps={{
              endAdornment: "درصد",
            }}
            sx={{
              gridColumn: "span 6",
            }}
            value={FinancialProgressInArbitrationDateAccuser}
            onChange={(e) => {
              if (Number(e.target.value) > 100) {
                setFinancialProgressInArbitrationDateAccuserError({
                  error: true,
                  message: "پیشرفت مالی نمی تواند بیشتر از 100 درصد باشد",
                });
              } else if (Number(e.target.value) < 0) {
                setFinancialProgressInArbitrationDateAccuserError({
                  error: true,
                  message: "پیشرفت مالی نمی تواند کمتر از 0 درصد باشد",
                });
              } else {
                setFinancialProgressInArbitrationDateAccuserError({
                  error: false,
                  message: "",
                });
              }
              setFinancialProgressInArbitrationDateAccuser(
                parseInt(e.target.value)
              );
            }}
            focused={
              FinancialProgressInArbitrationDateAccuser?.toString()
                ? true
                : false
            }
            error={FinancialProgressInArbitrationDateAccuserError?.error}
            helperText={FinancialProgressInArbitrationDateAccuserError?.message}
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
                checked={ContractStatusInArbitration?.title === "ابلاغ خاتمه"}
                onChange={(e) => {
                  setContractStatusInArbitration({
                    ...ContractStatusInArbitration,
                    title: "ابلاغ خاتمه",
                  });
                }}
              />
              <FormControlLabel
                value="ابلاغ فسخ"
                control={<Radio />}
                label="ابلاغ فسخ"
                checked={ContractStatusInArbitration.title === "ابلاغ فسخ"}
                onChange={(e) => {
                  setContractStatusInArbitration({
                    ...ContractStatusInArbitration,
                    title: "ابلاغ فسخ",
                  });
                }}
              />
              <FormControlLabel
                value="جاری"
                control={<Radio />}
                label="جاری"
                checked={ContractStatusInArbitration.title === "جاری"}
                onChange={(e) => {
                  setContractStatusInArbitration({
                    ...ContractStatusInArbitration,
                    title: "جاری",
                  });
                }}
              />
            </RadioGroup>
          </FormControl>
          <FormGroup
            sx={{
              display:
                ContractStatusInArbitration.title === "ابلاغ فسخ" ||
                ContractStatusInArbitration.title === "ابلاغ خاتمه"
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

          <DatePicker
            value={new Date(ContractStatusInArbitration?.temp || "")}
            onChange={(date) => {
              setContractStatusInArbitration({
                ...ContractStatusInArbitration,
                temp: date,
              });
            }}
            label="تاریخ تحویل موقت"
            sx={{
              gridColumn: "span 6",
              display: TemporaryDelivery?.checked ? "block" : "none",
            }}
          />
          <DatePicker
            value={new Date(ContractStatusInArbitration?.final || "")}
            onChange={(date) => {
              setContractStatusInArbitration({
                ...ContractStatusInArbitration,
                final: date,
              });
            }}
            label="تاریخ تحویل قطعی"
            sx={{
              gridColumn: "span 6",
              display: FinalDelivery?.checked ? "block" : "none",
            }}
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
            focused={SupervisionDepartment?.toString() ? true : false}
            error={SupervisionDepartmentError?.error}
            helperText={SupervisionDepartmentError?.message}
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
            label={"تاخیرات مجاز"}
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
            focused={AuthorizedDelays?.toString() ? true : false}
            error={AuthorizedDelaysError?.error}
            helperText={AuthorizedDelaysError?.message}
          />
          <FaTypography
            variant="body1"
            gridColumn={"span 2"}
            textAlign={"center"}
          >
            غیر مجاز
          </FaTypography>
          <FaTextField
            label={"تاخیرات غیرمجاز"}
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
            focused={UnauthorizedDelays?.toString() ? true : false}
            error={UnauthorizedDelaysError?.error}
            helperText={UnauthorizedDelaysError?.message}
          />
          <Divider
            sx={{
              gridColumn: "span 12",
            }}
          />
          {/* 


      توجهات

    
    */}
          <FaTypography variant="h5" fontWeight={800} gridColumn={"span 12"}>
            توجه مهم: چنانچه در خصوص تاخیرات و یا تبعات ناشی از آن اختلافی وجود
            دارد، لازم است موارد زیر ارسال شوند:
          </FaTypography>
          <FaTypography variant="h6" fontWeight={800} gridColumn={"span 12"}>
            گزارش توجیهی تاخیرات قرارداد شامل:
          </FaTypography>
          <List
            sx={{
              gridColumn: "span 7",
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
              <FileBox
                // fileTypes={["pdf", "jpeg"]}
                setFiles={setFirstFile}
                files={firstFile}
                title="زمان بندی اصلاحی"
              />
              <FileBox
                // fileTypes={["pdf", "jpeg"]}
                setFiles={setFirstFile}
                title="زمان بندی اولیه"
                files={firstFile}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              paddingY={"1rem"}
            >
              <FaTypography variant="body1">
                گزارش تهیه شده توسط پیمانکار (به همراه کلیه مستندات و پیوست‏ها)
              </FaTypography>
              <FileBox
                fileTypes={["pdf", "jpeg"]}
                setFiles={setSecondFile}
                files={secondFile}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              paddingY={"1rem"}
            >
              <FaTypography variant="body1">
                گزارش رسیدگی به تاخیرات توسط مهندس مشاور
              </FaTypography>
              <FileBox
                fileTypes={["pdf", "jpeg"]}
                setFiles={setThirdFile}
                files={thirdFile}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              paddingY={"1rem"}
            >
              <FaTypography variant="body1">
                مستندات ابلاغ نتایج رسیدگی به تاخیرات به پیمانکار توسط کارفرما
              </FaTypography>
              <FileBox
                fileTypes={["pdf", "jpeg"]}
                setFiles={setFourthFile}
                files={fourthFile}
              />
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
            disabled={data?.contract_addContract?.result ? true : false}
            onClick={() => {
              // if (handleErrors()) {
              if (type == "create") {
                if (!firstFile || !secondFile || !thirdFile || !fourthFile) {
                  // alert("لطفا تمامی فایل ها را آپلود کنید");
                  void createContractMutation({
                    onCompleted(data, clientOptions) {
                      if (data?.contract_addContract?.status?.code == 1) {
                        setAlertMessage("قرارداد با موفقیت ثبت شد");
                        setAlertType("success");
                        setAlertOpen(true);
                        void addAdjustmentStatement({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            filledBy: RegistrarType.Accuser,
                            userId: user.id || "",
                          },
                        });
                        void addAdjustmentStatement({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            filledBy: RegistrarType.Accused,
                            userId: user.id || "",
                          },
                        });
                        void addInstallment({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            registrarType: RegistrarType.Accuser,
                            userId: user.id || "",
                          },
                        });
                        void addInstallment({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            registrarType: RegistrarType.Accused,
                            userId: user.id || "",
                          },
                        });
                        void addWorkCondition({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            filledBy: RegistrarType.Accuser,
                            userId: user.id || "",
                          },
                        });
                        void addWorkCondition({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            filledBy: RegistrarType.Accused,
                            userId: user.id || "",
                          },
                        });
                        void createComplaint({
                          variables: {
                            contractId: data?.contract_addContract?.result?.id,
                            userId: user.id,
                            complaintStateId: getComplaintStateWithEnum(
                              ComplaintStateStatus.WaitingForAccusedToRegisterArbitrationTerms
                            ).id,
                          },
                          onCompleted(d) {
                            console.log("🚀 ~ createComplaint ~~:", d);
                            navigate(
                              `/complaints/${data?.contract_addContract?.result?.id}/${d?.complaint_addComplaint?.result?.id}/tablesPage`
                            );
                          },
                        });
                      } else {
                        setAlertMessage("خطا در ثبت قرارداد");
                        setAlertType("error");
                        setAlertOpen(true);
                      }
                    },
                    onError(error, clientOptions) {
                      console.log(clientOptions);
                      console.error(error);
                      setAlertMessage("خطا در تکمیل قرارداد" + error.message);
                      setAlertType("error");
                      setAlertOpen(true);
                    },
                  });
                  return;
                }
                [firstFile, secondFile, thirdFile, fourthFile].forEach(
                  (file) => {
                    void UPLOAD_FILE({
                      file: file,
                      token: token,
                      onSuccess(res) {
                        setFileNames([...FileNames, res.result[0].newFileName]);
                      },
                      onFail(err) {
                        console.log(err);
                      },
                    });
                  }
                );
                void createContractMutation({
                  onCompleted(data, clientOptions) {
                    if (data?.contract_addContract?.status?.code == 1) {
                      setAlertMessage("قرارداد با موفقیت ثبت شد");
                      setAlertType("success");
                      setAlertOpen(true);
                      void addAdjustmentStatement({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          filledBy: RegistrarType.Accuser,
                          userId: user.id || "",
                        },
                      });
                      void addAdjustmentStatement({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          filledBy: RegistrarType.Accused,
                          userId: user.id || "",
                        },
                      });
                      void addInstallment({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          registrarType: RegistrarType.Accuser,
                          userId: user.id || "",
                        },
                      });
                      void addInstallment({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          registrarType: RegistrarType.Accused,
                          userId: user.id || "",
                        },
                      });
                      void addWorkCondition({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          filledBy: RegistrarType.Accuser,
                          userId: user.id || "",
                        },
                      });
                      void addWorkCondition({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          filledBy: RegistrarType.Accused,
                          userId: user.id || "",
                        },
                      });
                      void createComplaint({
                        variables: {
                          contractId: data?.contract_addContract?.result?.id,
                          userId: user.id,
                          complaintStateId: getComplaintStateWithEnum(
                            ComplaintStateStatus.WaitingForAccusedToRegisterArbitrationTerms
                          ).id,
                        },
                        onCompleted(d) {
                          console.log("🚀 ~ createComplaint ~~:", d);
                          navigate(
                            `/complaints/${data?.contract_addContract?.result?.id}/${d?.complaint_addComplaint?.result?.id}/tablesPage`
                          );
                        },
                      });
                    } else {
                      setAlertMessage("خطا در ثبت قرارداد");
                      setAlertType("error");
                      setAlertOpen(true);
                    }
                  },
                  onError(error, clientOptions) {
                    console.log(clientOptions);
                    console.error(error);
                    setAlertMessage("خطا در تکمیل قرارداد" + error.message);
                    setAlertType("error");
                    setAlertOpen(true);
                  },
                });
              } else if (type == "update") {
                void updateContractMutation({
                  onCompleted(data, clientOptions) {
                    if (data?.contract_updateContract?.status?.code == 1) {
                      setAlertMessage("قرارداد با موفقیت تکمیل شد");
                      setAlertType("success");
                      setAlertOpen(true);
                      void updateCompaint();
                    } else {
                      setAlertMessage("خطا در تکمیل قرارداد");
                      setAlertType("error");
                      setAlertOpen(true);
                    }
                  },
                  onError(error, clientOptions) {
                    console.log(clientOptions);
                    console.error(error);
                    setAlertMessage("خطا در تکمیل قرارداد" + error.message);
                    setAlertType("error");
                    setAlertOpen(true);
                  },
                });
                // }
              }
            }}
          >
            ثبت و ادامه
          </Button>

          {/* {data?.contract_addContract?.result && (
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
                  void addAdjustmentStatement({
                    variables: {
                      contractId: data?.contract_addContract?.result?.id,
                      filledBy: RegistrarType.Accuser,
                      userId: user.id || "",
                    },
                  });
                  void addAdjustmentStatement({
                    variables: {
                      contractId: data?.contract_addContract?.result?.id,
                      filledBy: RegistrarType.Accused,
                      userId: user.id || "",
                    },
                  });
                  void addInstallment({
                    variables: {
                      contractId: data?.contract_addContract?.result?.id,
                      registrarType: RegistrarType.Accuser,
                      userId: user.id || "",
                    },
                  });
                  void addInstallment({
                    variables: {
                      contractId: data?.contract_addContract?.result?.id,
                      registrarType: RegistrarType.Accused,
                      userId: user.id || "",
                    },
                  });
                  void addWorkCondition({
                    variables: {
                      contractId: data?.contract_addContract?.result?.id,
                      filledBy: RegistrarType.Accuser,
                      userId: user.id || "",
                    },
                  });
                  void addWorkCondition({
                    variables: {
                      contractId: data?.contract_addContract?.result?.id,
                      filledBy: RegistrarType.Accused,
                      userId: user.id || "",
                    },
                  });
                  void createComplaint({
                    onCompleted(d) {
                      console.log("🚀 ~ createComplaint ~~:", d);
                      navigate(
                        `/complaints/${data?.contract_addContract?.result?.id}/${d?.complaint_addComplaint?.result?.id}/tablesPage`
                      );
                    },
                  });
                }}
              >
                ادامه و ثبت درخواست داوری
              </Button>
            </Alert>
          )}

          {updateData?.contract_updateContract?.result && (
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
                ثبت و ادامه
              </Button>
            </Alert>
          )} */}
        </Box>
      </Box>
      {/* <InstallmentTable/> */}
    </>
  );
};

export default NewContractPage;
