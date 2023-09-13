import { gql } from "@apollo/client";
import { FormTitle } from "../Form/Titles/Queies";

export const GET_COMPLAINTS = gql`
  query GetComplaints {
    complaint_getComplaints {
      result {
        items {
          department {
            title
            id
            departments {
              id
              title
            }
          }
          complaintForm {
            title
            id
            description
            formTitles {
              row
              value
              content
            }
          }
          userId
          id
          accuserDepartmentId
          accusedDepartmentId
          contractId
          assignedUserId
          complaintFormId
          complaintResponseFormId
          complaintCode
          complaintState
        }
      }
    }
  }
`;

export type Complaint = {
  id: number;
  accuserDepartmentId: number;
  accusedDepartmentId: number;
  contractId: number;
  assignedUserId: string;
  complaintFormId: number;
  complaintResponseFormId: number;
  complaintCode: string;
  complaintState: string;
  department: Department;
  complaintForm: ComplaintForm;
};

export type Department = {
  title: string;
  id: number;
  departments: Department[];
};

export type ComplaintForm = {
  title: string;
  id: number;
  description: string;
  formTitles: FormTitle[];
};
