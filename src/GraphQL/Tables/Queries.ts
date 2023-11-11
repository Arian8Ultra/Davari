import { gql } from "@apollo/client";

export const GET_INSTALLMENT_TABLE = gql`
  query GetInstallmentTable($id: Int!) {
    installmentTable_getInstallmentTable(entityId: $id) {
      result {
        id
        createdDate
        lastModifiedDate
        contractId
        paymentTotal
        remainingPayment
        filledBy
        user {
          parentId
          id
          userType
        }
        userId
        installments {
          installmentTableId
          title
          amount
          date
          filledBy
          id
          installmentParts {
            amount
            date
            filledBy
            id
          }
        }
      }
      status {
        code
        value
      }
    }
  }
`;
export const GET_INSTALLMENT_TABLE_BY_CONTRACT_ID = gql`
  query GetInstallmentTables($id: Int!) {
    installmentTable_getInstallmentTables{
      result (where: {contractId: {eq: $id}}){
        items{
        id
        createdDate
        lastModifiedDate
        contractId
        paymentTotal
        remainingPayment
        filledBy
        user {
          parentId
          id
          userType
        }
        userId
        installments {
          installmentTableId
          title
          amount
          date
          filledBy
          id
          installmentParts {
            amount
            date
            filledBy
            id
          }
        }
        }
      }
      status
    }
  }
`;

export const GET_INSTALLMENT = gql`
  query GetInstallment($id: Int!) {
    installment_getInstallment(entityId: $id) {
      result {
        id
        createdDate
        lastModifiedDate
        installmentTableId
        title
        amount
        date
        filledBy
        installmentParts {
          amount
          date
          filledBy
          id
        }
      }
      status {
        code
        value
      }
    }
  }
`;

export const GET_INSTALLMENT_PART = gql`
  query GetInstallmentPart($id: Int!) {
    installmentPart_getInstallmentPart(entityId: $id) {
      result {
        id
        createdDate
        lastModifiedDate
        installmentId
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

export const GET_ADJUSTMENT_STATEMENT_TABLE = gql`
  query GetAdjustmentStatementTable($id: Int!) {
    adjustmentStatementTable_getAdjustmentStatementTable(
      entityId: $id
    ) {
      result {
        id
        createdDate
        lastModifiedDate
        contractId
        filledBy
        user {
          parentId
          id
          userType
        }
        userId
        adjustmentStatements {
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
      }
      status {
        code
        value
      }
    }
  }
`;

export const GET_ADJUSTMENT_STATEMENT = gql`
  query GetAdjustmentStatement($id: Int!) {
    adjustmentStatement_getAdjustmentStatement(entityId: $id) {
      result {
        id
        createdDate
        lastModifiedDate
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

export const GET_ADJUSTMENT_STATEMENT_PART = gql`
  query GetAdjustmentStatementPart($id: Int!) {
    adjustmentStatementPart_getAdjustmentStatementPart(
      entityId: $id
    ) {
      result {
        id
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

export const GET_WORK_CONDITION_STATEMENT_TABLE = gql`
  query GetWorkConditionStatementTable($id: Int!) {
    workConditionStatementTable_getWorkConditionStatementTable(
      entityId: $id
    ) {
      result {
        id
        createdDate
        lastModifiedDate
        contractId
        filledBy
        user {
          parentId
          id
          userType
        }
        userId
        workConditionStatements {
          id
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
          title
        }
      }
      status {
        code
        value
      }
    }
  }
`;

export const GET_WORK_CONDITION_STATEMENT = gql`
  query GetWorkConditionStatement($id: Int!) {
    workConditionStatement_getWorkConditionStatement(entityId: $id) {
      result {
        id
        createdDate
        lastModifiedDate
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
        title
      }
      status {
        code
        value
      }
    }
  }
`;

export const GET_WORK_CONDITION_STATEMENT_PART = gql`
  query GetWorkConditionStatementPart($id: Int!) {
    workConditionStatementPart_getWorkConditionStatementPart(
      entityId: $id
    ) {
      result {
        id
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
