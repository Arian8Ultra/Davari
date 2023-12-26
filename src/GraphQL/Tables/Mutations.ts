import { gql } from "@apollo/client";

export const CREATE_INSTALLMENT_TABLE = gql`
  mutation CREATE_INSTALLMENT_TABLE(
    $contractId: Int
    $paymentTotal: Decimal
    $registrarType: RegistrarType
    $remainingPayment: Decimal
    $userId: String
  ) {
    installmentTable_addInstallmentTable(
      input: {
        contractId: $contractId
        paymentTotal: $paymentTotal
        registrarType: $registrarType
        remainingPayment: $remainingPayment
        userId: $userId
      }
    ) {
      result {
        id
        userId
        contractId
        paymentTotal
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_INSTALLMENT_TABLE = gql`
  mutation UPDATE_INSTALLMENT_TABLE(
    $contractId: Int
    $paymentTotal: Decimal
    $registrarType: RegistrarType
    $remainingPayment: Decimal!
    $userId: String
    $id: Int!
  ) {
    installmentTable_updateInstallmentTable(
      input: {
        contractId: $contractId
        paymentTotal: $paymentTotal
        registrarType: $registrarType
        remainingPayment: $remainingPayment
        userId: $userId
        id: $id
      }
    ) {
      result {
        userId
        contractId
        paymentTotal
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_INSTALLMENT_TABLE = gql`
  mutation DELETE_INSTALLMENT_TABLE($id: Int!) {
    installmentTable_deleteInstallmentTable(entityId: $id) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type InstallmentTable = {
  contractId: number;
  paymentTotal: number;
  registrarType: "ACCUSED" | "ACCUSER";
  remainingPayment: number;
  userId: string;
  id: number;
};

export const CREATE_INSTALLMENT = gql`
  mutation CREATE_INSTALLMENT(
    $installmentTableId: Int!
    $amount: Decimal
    $date: Date
    $registrarType: RegistrarType
    $title: String
  ) {
    installment_addInstallment(
      input: {
        installmentTableId: $installmentTableId
        amount: $amount
        date: $date
        registrarType: $registrarType
        title: $title
        
      }
    ) {
      result {
        id
        amount
        date
        filledBy
        title
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_INSTALLMENT = gql`
  mutation UPDATE_INSTALLMENT(
    $installmentTableId: Int!
    $amount: Decimal
    $date: Date
    $registrarType: RegistrarType
    $title: String
    $id: Int!
  ) {
    installment_updateInstallment(
      input: {
        installmentTableId: $installmentTableId
        amount: $amount
        date: $date
        registrarType: $registrarType
        title: $title
        id: $id
      }
    ) {
      result {
        id
        amount
        date
        filledBy
        title
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_INSTALLMENT = gql`
  mutation DELETE_INSTALLMENT($id: Int!) {
    installment_deleteInstallment(entityId: $id) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type Installment = {
  installmentTableId: number;
  amount: number;
  date: Date;
  filledBy: "ACCUSER" | "ACCUSED";
  title: string;
  id?: number;
  registrarType?: "ACCUSER" | "ACCUSED";
  installmentParts?: InstallmentPart[];
};

export const CREATE_INSTALLMENT_PART = gql`
  mutation CREATE_INSTALLMENT_PART(
    $installmentId: Int!
    $amount: Decimal
    $date: Date
    $registrarType: RegistrarType
  ) {
    installmentPart_addInstallmentPart(
      input: {
        installmentId: $installmentId
        amount: $amount
        date: $date
        registrarType: $registrarType
      }
    ) {
      result {
        id
        amount
        date
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_INSTALLMENT_PART = gql`
  mutation UPDATE_INSTALLMENT_PART(
    $installmentId: Int!
    $amount: Decimal
    $date: Date
    $registrarType: RegistrarType
    $id: Int!
  ) {
    installmentPart_updateInstallmentPart(
      input: {
        installmentId: $installmentId
        amount: $amount
        date: $date
        registrarType: $registrarType
        id: $id
      }
    ) {
      result {
        id
        amount
        date
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_INSTALLMENT_PART = gql`
  mutation DELETE_INSTALLMENT_PART($id: Int!) {
    installmentPart_deleteInstallmentPart(entityId: $id) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type InstallmentPart = {
  installmentId: number;
  amount: number;
  date: Date;
  filledBy: "ACCUSER" | "ACCUSED";
  id: number;
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
//
//
//
export const CREATE_ADJUSTMENT_STATEMENT_TABLE = gql`
  mutation CREATE_ADJUSTMENT_STATEMENT_TABLE(
    $contractId: Int
    $filledBy: RegistrarType
    $userId: String
  ) {
    adjustmentStatementTable_addAdjustmentStatementTable(
      input: {
        contractId: $contractId
        filledBy: $filledBy
        userId: $userId
      }
    ) {
      result {
        id
        contractId
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_ADJUSTMENT_STATEMENT_TABLE = gql`
  mutation UPDATE_ADJUSTMENT_STATEMENT_TABLE(
    $contractId: Int
    $filledBy: RegistrarType
    $userId: String
    $id: Int!
  ) {
    adjustmentStatementTable_updateAdjustmentStatementTable(
      input: {
        contractId: $contractId
        filledBy: $filledBy
        userId: $userId
        id: $id
      }
    ) {
      result {
        id
        contractId
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_ADJUSTMENT_STATEMENT_TABLE = gql`
  mutation DELETE_ADJUSTMENT_STATEMENT_TABLE($id: Int!) {
    adjustmentStatementTable_deleteAdjustmentStatementTable(
      entityId: $id
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type AdjustmentStatementTable = {
  id: number;
  contractId: number;
  filledBy: "ACCUSER" | "ACCUSED";
  userId: string;
};

export const CREATE_ADJUSTMENT_STATEMENT = gql`
  mutation CREATE_ADJUSTMENT_STATEMENT(
    $adjustmentStatementTableId: Int!
    $filledBy: RegistrarType
    $title: String
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
  ) {
    adjustmentStatement_addAdjustmentStatement(
      input: {
        adjustmentStatementTableId: $adjustmentStatementTableId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
        title: $title
      }
    ) {
      result {
        id
        adjustmentStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
        title
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_ADJUSTMENT_STATEMENT = gql`
  mutation UPDATE_ADJUSTMENT_STATEMENT(
    $adjustmentStatementTableId: Int!
    $filledBy: RegistrarType
    $title: String
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $id: Int!
  ) {
    adjustmentStatement_updateAdjustmentStatement(
      input: {
        adjustmentStatementTableId: $adjustmentStatementTableId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
        title: $title
        id: $id
      }
    ) {
      result {
        id
        adjustmentStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
        title
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_ADJUSTMENT_STATEMENT = gql`
  mutation DELETE_ADJUSTMENT_STATEMENT($id: Int!) {
    adjustmentStatement_deleteAdjustmentStatement(entityId: $id) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type AdjustmentStatement = {
  adjustmentStatementTableId: number;
  amountApprovedByEmployer: number;
  amountConfirmedByConsultant: number;
  amountPaid: number;
  amountProvidedByContractor: number;
  dateApprovedByEmployer: Date;
  dateConfirmedByConsultant: Date;
  datePaid: Date;
  dateProvidedByContractor: Date;
  operationPeriodEndDate: Date;
  operationPeriodStartDate: Date;
  filledBy: "ACCUSER" | "ACCUSED";
  title: string;
  id: number;
};

export const CREATE_ADJUSTMENT_STATEMENT_PART = gql`
  mutation CREATE_ADJUSTMENT_STATEMENT_PART(
    $adjustmentStatementId: Int!
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $filledBy: RegistrarType
  ) {
    adjustmentStatementPart_addAdjustmentStatementPart(
      input: {
        adjustmentStatementId: $adjustmentStatementId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
      }
    ) {
      result {
        id
        adjustmentStatementId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_ADJUSTMENT_STATEMENT_PART = gql`
  mutation UPDATE_ADJUSTMENT_STATEMENT_PART(
    $adjustmentStatementId: Int!
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $filledBy: RegistrarType
    $id: Int!
  ) {
    adjustmentStatementPart_updateAdjustmentStatementPart(
      input: {
        adjustmentStatementId: $adjustmentStatementId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
        id: $id
      }
    ) {
      result {
        id
        adjustmentStatementId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_ADJUSTMENT_STATEMENT_PART = gql`
  mutation DELETE_ADJUSTMENT_STATEMENT_PART($id: Int!) {
    adjustmentStatementPart_deleteAdjustmentStatementPart(
      entityId: $id
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type AdjustmentStatementPart = {
  adjustmentStatementId: number;
  amountApprovedByEmployer: number;
  amountConfirmedByConsultant: number;
  amountPaid: number;
  amountProvidedByContractor: number;
  dateApprovedByEmployer: Date;
  dateConfirmedByConsultant: Date;
  datePaid: Date;
  dateProvidedByContractor: Date;
  operationPeriodEndDate: Date;
  operationPeriodStartDate: Date;
  filledBy: "ACCUSER" | "ACCUSED";
  id: number;
};

export const CREATE_WORK_CONDITION_STATEMENT_TABLE = gql`
  mutation CREATE_WORK_CONDITION_STATEMENT_TABLE(
    $contractId: Int
    $filledBy: RegistrarType
    $userId: String
  ) {
    workConditionStatementTable_addWorkConditionStatementTable(
      input: {
        contractId: $contractId
        filledBy: $filledBy
        userId: $userId
      }
    ) {
      result {
        id
        contractId
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_WORK_CONDITION_STATEMENT_TABLE = gql`
  mutation UPDATE_WORK_CONDITION_STATEMENT_TABLE(
    $contractId: Int
    $filledBy: RegistrarType
    $userId: String
    $id: Int!
  ) {
    workConditionStatementTable_updateWorkConditionStatementTable(
      input: {
        contractId: $contractId
        filledBy: $filledBy
        userId: $userId
        id: $id
      }
    ) {
      result {
        id
        contractId
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_WORK_CONDITION_STATEMENT_TABLE = gql`
  mutation DELETE_WORK_CONDITION_STATEMENT_TABLE($id: Int!) {
    workConditionStatementTable_deleteWorkConditionStatementTable(
      entityId: $id
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type WorkConditionStatementTable = {
  contractId: number;
  userId: string;
  filledBy: "ACCUSER" | "ACCUSED";
  id: number;
};

export const CREATE_WORK_CONDITION_STATEMENT = gql`
  mutation CREATE_WORK_CONDITION_STATEMENT(
    $workConditionStatementTableId: Int!
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $filledBy: RegistrarType
    $title: String
  ) {
    workConditionStatement_addWorkConditionStatement(
      input: {
        workConditionStatementTableId: $workConditionStatementTableId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
        title: $title
      }
    ) {
      result {
        workConditionStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_WORK_CONDITION_STATEMENT = gql`
  mutation UPDATE_WORK_CONDITION_STATEMENT(
    $workConditionStatementTableId: Int!
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $filledBy: RegistrarType
    $id: Int!
  ) {
    workConditionStatement_updateWorkConditionStatement(
      input: {
        workConditionStatementTableId: $workConditionStatementTableId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
        id: $id
      }
    ) {
      result {
        workConditionStatementTableId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_WORK_CONDITION_STATEMENT = gql`
  mutation DELETE_WORK_CONDITION_STATEMENT($id: Int!) {
    workConditionStatement_deleteWorkConditionStatement(
      entityId: $id
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type WorkConditionStatement = {
  title: string;
  workConditionStatementTableId: number;
  amountApprovedByEmployer: number;
  amountConfirmedByConsultant: number;
  amountPaid: number;
  amountProvidedByContractor: number;
  dateApprovedByEmployer: Date;
  dateConfirmedByConsultant: Date;
  datePaid: Date;
  dateProvidedByContractor: Date;
  operationPeriodEndDate: Date;
  operationPeriodStartDate: Date;
  filledBy: "ACCUSER" | "ACCUSED";
  id: number;
};

export const CREATE_WORK_CONDITION_STATEMENT_PART = gql`
  mutation CREATE_WORK_CONDITION_STATEMENT_PART(
    $workConditionStatementId: Int!
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $filledBy: RegistrarType
  ) {
    workConditionStatementPart_addWorkConditionStatementPart(
      input: {
        workConditionStatementId: $workConditionStatementId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
      }
    ) {
      result {
        id
        workConditionStatementId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const UPDATE_WORK_CONDITION_STATEMENT_PART = gql`
  mutation UPDATE_WORK_CONDITION_STATEMENT_PART(
    $workConditionStatementId: Int!
    $amountApprovedByEmployer: Decimal
    $amountConfirmedByConsultant: Decimal
    $amountPaid: Decimal
    $amountProvidedByContractor: Decimal
    $dateApprovedByEmployer: Date
    $dateConfirmedByConsultant: Date
    $datePaid: Date
    $dateProvidedByContractor: Date
    $operationPeriodEndDate: Date
    $operationPeriodStartDate: Date
    $filledBy: RegistrarType
    $id: Int!
  ) {
    workConditionStatementPart_updateWorkConditionStatementPart(
      input: {
        workConditionStatementId: $workConditionStatementId
        amountApprovedByEmployer: $amountApprovedByEmployer
        amountConfirmedByConsultant: $amountConfirmedByConsultant
        amountPaid: $amountPaid
        amountProvidedByContractor: $amountProvidedByContractor
        dateApprovedByEmployer: $dateApprovedByEmployer
        dateConfirmedByConsultant: $dateConfirmedByConsultant
        datePaid: $datePaid
        dateProvidedByContractor: $dateProvidedByContractor
        operationPeriodEndDate: $operationPeriodEndDate
        operationPeriodStartDate: $operationPeriodStartDate
        filledBy: $filledBy
        id: $id
      }
    ) {
      result {
        id
        workConditionStatementId
        amountApprovedByEmployer
        amountConfirmedByConsultant
        amountPaid
        amountProvidedByContractor
        dateApprovedByEmployer
        dateConfirmedByConsultant
        datePaid
        dateProvidedByContractor
        operationPeriodEndDate
        operationPeriodStartDate
        filledBy
      }
      status {
        code
        value
      }
    }
  }
`;

export const DELETE_WORK_CONDITION_STATEMENT_PART = gql`
  mutation DELETE_WORK_CONDITION_STATEMENT_PART($id: Int!) {
    workConditionStatementPart_deleteWorkConditionStatementPart(
      entityId: $id
    ) {
      result {
        id
      }
      status {
        code
        value
      }
    }
  }
`;

export type WorkConditionStatementPart = {
  workConditionStatementId: number;
  amountApprovedByEmployer: number;
  amountConfirmedByConsultant: number;
  amountPaid: number;
  amountProvidedByContractor: number;
  dateApprovedByEmployer: Date;
  dateConfirmedByConsultant: Date;
  datePaid: Date;
  dateProvidedByContractor: Date;
  operationPeriodEndDate: Date;
  operationPeriodStartDate: Date;
  filledBy: "ACCUSER" | "ACCUSED";
  id: number;
};
