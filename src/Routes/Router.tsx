/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "../layout/Error";
import MainLayout from "../layout/MainLayout";
import Root from "../layout/Root";
import UserManagement from "../pages/Admin/UserManager/UserManagement";
const Complaints = lazy(
  () => import("../pages/Complaints/Complaints")
);
const Home = lazy(() => import("../pages/Home/Home"));
const Protal = lazy(() => import("../pages/Portal/Protal"));
const Messages = lazy(
  () => import("../pages/Portal/Messages/Messages")
);
const ComplainAnswers = lazy(
  () => import("../pages/Portal/ComplainAnswers/ComplainAnswers")
);

const Test = lazy(() => import("../pages/Admin/Test/Test"));
const Contracts = lazy(() => import("../pages/Contracts/Contracts"));
const AddContract = lazy(
  () => import("../pages/Complaints/AddContract/AddContract")
);
const CreateContractPage = lazy(
  () => import("../pages/Complaints/AddContract/CreateContractPage")
);
const AddComplaint = lazy(
  () => import("../pages/Complaints/AddComplaints/AddComplaints")
);
const AddArgument = lazy(
  () => import("../pages/Complaints/AddArguements/AddArguements")
);
import "../index.css";
import ContractPage from "../pages/Contracts/ContractPage";
import UpdateContractAccuserPage from "../pages/Complaints/AddContract/UpdateContractAccuserPage";
import TablesPage from "../pages/Complaints/Tabels/TablesPage";
const UpdateContractPage = lazy(
  () => import("../pages/Complaints/AddContract/UpdateContractPage")
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="complaints" element={<Complaints />} />
        <Route
          path="complaints/addContract"
          element={<AddContract />}
        />
        <Route
          path="test"
          element={<Test />}
        />
        <Route
          path="complaints/createContractPage"
          element={<CreateContractPage />}
        />
        <Route
          path="complaints/:contractId/createContractPage"
          element={<CreateContractPage />}
        />
        <Route
          path="complaints/:contractId/:complaintId/UpdateContractPage"
          element={<UpdateContractPage />}
        />
        <Route
          path="complaints/:contractId/:complaintId/UpdateContractAccuserPage"
          element={<UpdateContractAccuserPage />}
        />
        <Route
          path="complaints/:contractId/:complaintId/addComplaint"
          element={<AddComplaint />}
        />
        <Route
          path="complaints/:contractId/:complaintId/addArguements/:state"
          element={<AddArgument />}
        />
        <Route
          path="complaints/:contractId/:complaintId/tablesPage"
          element={<TablesPage />}
        />

        <Route path="contracts" element={<Contracts />} />
        <Route path="portal" element={<Protal />} />
        <Route path="portal/messages" element={<Messages />} />
        <Route
          path="portal/employee_management"
          element={<Protal />}
        />
        <Route
          path="portal/complain_answers"
          element={<ComplainAnswers />}
        />
        <Route
          path="contract/:contractId/:complaintId"
          element={<ContractPage />}
        />
        <Route
          path="admin/usermanagement"
          element={<UserManagement />}
        />

        <Route path="test" element={<Test />} />
      </Route>
    </Route>
  )
);

export default router;
