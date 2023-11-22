/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_ORGANIZATION_USERS } from "../../GraphQL/Users/Queries";
import { GET_ARBITRATION_TERMS_FORM_BY_COMPLAINT_ID } from "../../GraphQL/Complaints/Queries";
import { QueryWrapper } from "../../GraphQL/QueryWrapper";
import { useNavigate, useParams } from "react-router-dom";
import { ContractSmall } from "../../GraphQL/Contracts/Mutations";
import { GET_CONTRACT } from "../../GraphQL/Contracts/Queries";
import BackButton from "../../components/BackButton";
import { primary, secondary } from "../../theme/color";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FaTypography from "../../components/FaComponents/FaTypography";

const ContractDetailsPage = () => {
  const { contractId, complaintId } = useParams<{
    contractId: string;
    complaintId: string;
  }>();
  const [contract, setContract] = useState<ContractSmall>();
  const [
    arbitrationTermsFormAccuser,
    setArbitrationTermsFormAccuser,
  ] = useState<{
    firstCondition: string;
    firstConditionFileName: string;
    secondCondition: string;
    secondConditionFileName: string;
    thirdCondition: string;
    thirdConditionFileName: string;
    fourthCondition: string;
    fourthConditionFileName: string;
    filledBy: "ACCUSER" | "ACCUSED";
  }>();
  const [
    arbitrationTermsFormAccused,
    setArbitrationTermsFormAccused,
  ] = useState<{
    firstCondition: string;
    firstConditionFileName: string;
    secondCondition: string;
    secondConditionFileName: string;
    thirdCondition: string;
    thirdConditionFileName: string;
    fourthCondition: string;
    fourthConditionFileName: string;
    filledBy: "ACCUSER" | "ACCUSED";
  }>();
  const navigate = useNavigate();
  const [isApproved, setIsApproved] = useState<boolean>(false);
  useQuery(GET_CONTRACT, {
    variables: {
      id: contractId ? parseInt(contractId) : undefined,
    },
    onCompleted(data) {
      console.log(
        "Contract",
        data.contract_getContracts.result.items[0]
      );

      const contract = data.contract_getContracts.result
        .items[0] as ContractSmall;
      setContract(contract);
    },
  });
  const { data: arbitrationTermsData } = QueryWrapper(
    GET_ARBITRATION_TERMS_FORM_BY_COMPLAINT_ID,
    "arbitrationTermsForm_getArbitrationTermsForms",
    {
      id: complaintId ? parseInt(complaintId) : undefined,
    },
    {
      onCompleted(data) {
        console.log(
          "GET_ARBITRATION_TERMS_FORM_BY_COMPLAINT_ID",
          data
        );
      },
    }
  );

  console.log(
    "GET_ARBITRATION_TERMS_FORM_BY_COMPLAINT_ID",
    arbitrationTermsData
  );

  useEffect(() => {
    setArbitrationTermsFormAccused(
      arbitrationTermsData?.items?.find(
        (item: { filledBy: string }) => item.filledBy === "ACCUSED"
      )
    );
    setArbitrationTermsFormAccuser(
      arbitrationTermsData?.items?.find(
        (item: { filledBy: string }) => item.filledBy === "ACCUSER"
      )
    );
  }, [arbitrationTermsData]);

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

  return (
    <>
      <BackButton to="/complaints" />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        // padding={"2rem"}
        // paddingTop={"0"}
        border={`2px solid ${secondary}`}
        borderRadius={"1rem"}
        position={"relative"}
        marginY={"3rem"}
        // paddingX={"25%"}
      >
        <TableContainer
          sx={{
            gridColumn: "1 / span 12",
            // outline: "2px solid #000",
            // change the table head background color
            borderRadius: "1rem",
            "& .MuiTableCell-head": {
              backgroundColor: secondary,
              color: primary,
              outline: `1px solid ${primary}`,
            },
            // give each cell border
            "& .MuiTableCell-root": {
              border: `1px solid ${secondary}`,
            },

            // change the color of first column
            "& .MuiTableCell-body:first-child": {
              // backgroundColor: secondary,
              // outline: `1px solid ${primary}`,
              borderRight: `3px solid ${secondary}`,
              // color: primary,
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    width: "20%",
                    minHeight: "max-content",
                  }}
                >
                  عنوان
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    width: "40%",
                  }}
                >
                  خواهان
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    width: "40%",
                  }}
                >
                  خوانده
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  عنوان قرارداد
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractSubjectByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractSubjectByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  شماره قرارداد
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractNumberByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractNumberByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  تاریخ انعقاد قرارداد
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractDateByAccuser
                    ? new Date(
                        contract.contractDateByAccuser
                      ).toLocaleDateString("fa-IR")
                    : "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractDateByAccused
                    ? new Date(
                        contract.contractDateByAccused
                      ).toLocaleDateString("fa-IR")
                    : "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  مبلغ اوليه/ حق‌الزحمه قرارداد
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.initialBudgetByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.initialBudgetByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  مدت اوليه قرارداد
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.initialTimePeriodByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.initialTimePeriodByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  طرفین قرارداد
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {departments.find(
                    (item) =>
                      contract?.accuserDepartmentUserId &&
                      item.id === contract?.accuserDepartmentUserId
                  )?.label || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {departments.find(
                    (item) =>
                      contract?.accusedDepartmentUserId &&
                      item.id === contract?.accusedDepartmentUserId
                  )?.label || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  تابعيت
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.accuserNationality || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.accusedNationality || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  افراد مطلع و مرتبط با پروژه( از طرف خواهان)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.accuserRelatedPeopleByAccuser &&
                    JSON.parse(
                      contract?.accuserRelatedPeopleByAccuser
                    ).map(
                      (
                        item: {
                          name: string;
                          phone: string;
                        },
                        index: React.Key | null | undefined
                      ) => (
                        <Box key={index} display={"flex"}>
                          {item.name}
                          {item.phone}
                        </Box>
                      )
                    )}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.accuserRelatedPeopleByAccused &&
                    JSON.parse(
                      contract?.accuserRelatedPeopleByAccused
                    ).map(
                      (
                        item: {
                          name: string;
                          phone: string;
                        },
                        index: React.Key | null | undefined
                      ) => (
                        <Box key={index} display={"flex"}>
                          {item.name}
                          {item.phone}
                        </Box>
                      )
                    )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  افراد مطلع و مرتبط با پروژه( از طرف خوانده)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.accusedRelatedPeopleByAccuser
                    ? JSON.parse(
                        contract?.accusedRelatedPeopleByAccuser
                      ).map(
                        (
                          item: {
                            name: string;
                            phone: string;
                          },
                          index: React.Key | null | undefined
                        ) => (
                          <Box key={index} display={"flex"}>
                            {item.name}
                            {item.phone}
                          </Box>
                        )
                      )
                    : "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.accusedRelatedPeopleByAccused
                    ? JSON.parse(
                        contract?.accusedRelatedPeopleByAccused
                      ).map(
                        (
                          item: {
                            name: string;
                            phone: string;
                          },
                          index: React.Key | null | undefined
                        ) => (
                          <Box key={index} display={"flex"}>
                            {item.name}
                            {item.phone}
                          </Box>
                        )
                      )
                    : "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  ضريب پيشنهادی
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.recommendedCoefficientByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.recommendedCoefficientByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  تاريخ شروع كار
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.operationStartDateByAccuser
                    ? new Date(
                        contract.operationStartDateByAccuser
                      ).toLocaleDateString("fa-IR")
                    : "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.operationStartDateByAccused
                    ? new Date(
                        contract.operationStartDateByAccused
                      ).toLocaleDateString("fa-IR")
                    : "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  پيشرفت فيزيكي كار در تاريخ درخواست داوری
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.physicalProgressInArbitrationDateByAccuser ||
                    "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.physicalProgressInArbitrationDateByAccused ||
                    "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  پيشرفت ریالی كار در تاريخ درخواست داوری
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.financialProgressInArbitrationDateByAccuser ||
                    "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.financialProgressInArbitrationDateByAccused ||
                    "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  وضعیت قرارداد در تاریخ درخواست داوری
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractStatusAndDateInArbitrationByAccuser?.includes(
                    "ابلاغ خاتمه"
                  )
                    ? "ابلاغ خاتمه"
                    : contract?.contractStatusAndDateInArbitrationByAccuser?.includes(
                        "ابلاغ فسخ"
                      )
                    ? "ابلاغ فسخ"
                    : contract?.contractStatusAndDateInArbitrationByAccuser?.includes(
                        "جاری"
                      )
                    ? "جاری"
                    : "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                    "ابلاغ خاتمه"
                  )
                    ? "ابلاغ خاتمه"
                    : contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                        "ابلاغ فسخ"
                      )
                    ? "ابلاغ فسخ"
                    : contract?.contractStatusAndDateInArbitrationByAccused?.includes(
                        "جاری"
                      )
                    ? "جاری"
                    : "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  دستگاه نظارت (مهندس مشاور)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.supervisionDepartmentByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.supervisionDepartmentByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  تاخیرات مجاز
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.authorizedDelaysByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.authorizedDelaysByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  تاخیرات غیر مجاز
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.unauthorizedDelaysByAccuser || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {contract?.unauthorizedDelaysByAccused || "-"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    backgroundColor: secondary,
                    color: primary,
                  }}
                  colSpan={3}
                >
                  احراز شرایط داوری
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  شرط اول (عمرانی بودن محل اعتبار طرح)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccuser?.firstCondition}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccused?.firstCondition}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  شرط دوم (تراضی بر داوری شورا)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccuser?.secondCondition}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccused?.secondCondition}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  شرط سوم (عدم تسویه حساب)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccuser?.thirdCondition}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccused?.thirdCondition}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  شرط چهارم (عدم طرح در مراجع قضایی یا داوری)
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccuser?.fourthCondition}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {arbitrationTermsFormAccused?.fourthCondition}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ContractDetailsPage;
