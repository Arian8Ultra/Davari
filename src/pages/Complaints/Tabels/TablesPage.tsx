/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import InstallmentTable from "../../../components/Tables/Installment/InstallmentTable";
import AdjustmentStatementTable from "../../../components/Tables/AdjustmentStatement/AdjustmentStatementTable";
import TimeLine from "../../../components/TimeLine";
import BackButton from "../../../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import WorkConditionStatementTable from "../../../components/Tables/WorkConditionStatement/WorkConditionStatementTable";
import { Box, Button } from "@mui/material";
import {
  primary,
  secondaryDark,
  GreenLight,
} from "../../../theme/color";

const TablesPage = () => {
  const { contractId, complaintId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <TimeLine stage={3} />
      <BackButton
        to={`/complaints/${contractId}/${complaintId}/UpdateContractAccuserPage`}
        label=" و ویرایش"
      />

      <InstallmentTable />
      <AdjustmentStatementTable />
      <WorkConditionStatementTable />
      <Box display={'grid'} gridTemplateColumns={'repeat(6,1fr)'} my={'2rem'}>
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
