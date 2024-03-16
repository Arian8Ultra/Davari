/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  ContractGeneralType,
  useGetContractQuery,
} from "../../../../generated-types";
import { useUserStore } from "../../../Context/UserStore";
import BackButton from "../../../components/BackButton";
import AdjustmentStatementTable from "../../../components/Tables/AdjustmentStatement/AdjustmentStatementTable";
import InstallmentTable from "../../../components/Tables/Installment/InstallmentTable";
import WorkConditionStatementTable from "../../../components/Tables/WorkConditionStatement/WorkConditionStatementTable";
import TimeLine from "../../../components/TimeLine";
import { GreenLight, primary, secondaryDark } from "../../../theme/color";

const TablesPage = () => {
  const { contractId, complaintId } = useParams();
  const { user } = useUserStore();
  const navigate = useNavigate();

  const { data: contractData } = useGetContractQuery({
    variables: {
      id: parseInt(contractId || "") || 0,
    },
  });

  return (
    <>
      <TimeLine stage={3} />
      <BackButton
        to={`/complaints/${contractId}/${complaintId}/create/contractPageToFill/`}
        label=" و ویرایش"
      />

      <InstallmentTable
        type={
          contractData?.contract_getContracts?.result?.items?.[0]
            ?.accusedDepartmentUserId === user.id ||
          contractData?.contract_getContracts?.result?.items?.[0]
            ?.accusedDepartmentUserId === user.parentId
            ? "ACCUSED"
            : "ACCUSER"
        }
      />

      {(user.id ==
        contractData?.contract_getContracts.result?.items?.[0]
          ?.accuserDepartmentUserId ||
        user.parentId ==
          contractData?.contract_getContracts.result?.items?.[0]
            ?.accuserDepartmentUserId) &&
      (contractData?.contract_getContracts.result?.items?.[0]
        ?.contractGeneralTypeByAccuser == ContractGeneralType.Consultant ||
        contractData?.contract_getContracts.result?.items?.[0]
          ?.contractGeneralTypeByAccuser ==
          ContractGeneralType.PlanAndExecution) ? (
        <WorkConditionStatementTable
          isConsultant={true}
          type={
            contractData?.contract_getContracts?.result?.items?.[0]
              ?.accusedDepartmentUserId === user.id ||
            contractData?.contract_getContracts?.result?.items?.[0]
              ?.accusedDepartmentUserId === user.parentId
              ? "ACCUSED"
              : "ACCUSER"
          }
        />
      ) : (
        ""
      )}

      {(user.id ==
        contractData?.contract_getContracts.result?.items?.[0]
          ?.accuserDepartmentUserId ||
        user.parentId ==
          contractData?.contract_getContracts.result?.items?.[0]
            ?.accuserDepartmentUserId) &&
      contractData?.contract_getContracts.result?.items?.[0]
        ?.contractGeneralTypeByAccuser == ContractGeneralType.Contractor ? (
        <WorkConditionStatementTable
          isConsultant={false}
          type={
            contractData?.contract_getContracts?.result?.items?.[0]
              ?.accusedDepartmentUserId === user.id ||
            contractData?.contract_getContracts?.result?.items?.[0]
              ?.accusedDepartmentUserId === user.parentId
              ? "ACCUSED"
              : "ACCUSER"
          }
        />
      ) : (
        ""
      )}
      {(user.id ==
        contractData?.contract_getContracts.result?.items?.[0]
          ?.accuserDepartmentUserId ||
        user.parentId ==
          contractData?.contract_getContracts.result?.items?.[0]
            ?.accuserDepartmentUserId) &&
      contractData?.contract_getContracts.result?.items?.[0]
        ?.contractGeneralTypeByAccuser == ContractGeneralType.Contractor ? (
        <AdjustmentStatementTable
          isConsultant={false}
          type={
            contractData?.contract_getContracts?.result?.items?.[0]
              ?.accusedDepartmentUserId === user.id ||
            contractData?.contract_getContracts?.result?.items?.[0]
              ?.accusedDepartmentUserId === user.parentId
              ? "ACCUSED"
              : "ACCUSER"
          }
        />
      ) : (
        ""
      )}

      <Box display={"grid"} gridTemplateColumns={"repeat(6,1fr)"} my={"2rem"}>
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
            borderRadius: 10,
            "&:hover": {
              backgroundColor: GreenLight,
              color: secondaryDark,
              boxShadow: "none",
            },
          }}
          onClick={() => {
            navigate(`/complaints/${contractId}/${complaintId}/addComplaint`);
          }}
        >
          ثبت و ادامه
        </Button>
      </Box>
    </>
  );
};

export default TablesPage;
