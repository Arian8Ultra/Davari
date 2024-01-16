/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../index.css";
import LoginLayout from "../layout/LoginLayout";
import MainLayout from "../layout/MainLayout";
import Root from "../layout/Root";
import UserManagement from "../pages/Admin/UserManager/UserManagement";
import UpdateContractAccuserPage from "../pages/Complaints/AddContract/UpdateContractAccuserPage";
import CouncilListPage from "../pages/Complaints/CouncilList/CouncilListPage";
import FilePage from "../pages/Complaints/Files/FilesPage";
import AddMeetingPage from "../pages/Complaints/Meeting/AddMeetingPage";
import PaymentPage from "../pages/Complaints/Payment/PaymentPage";
import TablesPage from "../pages/Complaints/Tabels/TablesPage";
import ContractDetailsPage from "../pages/Contracts/ContractDetailsPage";
import ContractPage from "../pages/Contracts/ContractPage";
import ExpertPortal from "../pages/Expert/ExpertPortal";
import ForgetPassword from "../pages/Login/ForgetPassword";
import OTPpage from "../pages/Login/OTPpage";
import SignIn from "../pages/Login/SignIn";
import CaseExpertSignUp from "../pages/Login/SignUp/CaseExpertSignUp";
import ConfirmUser from "../pages/Login/SignUp/ConfirmUser";
import PersonInfo from "../pages/Login/SignUp/PersonInfo";
import SignUp from "../pages/Login/SignUp/SignUp";
import { useUserStore } from "../Context/UserStore";
import DeterminingCaseExpert from "../pages/Complaints/DeterminingCaseExpert/DeterminingCaseExpert";
import RequestDocs from "../pages/Expert/Docs/RequestDocs";
import UploadDocs from "../pages/Expert/Docs/UploadDocs";
import ReviewCase from "../pages/Expert/ReviewCase";
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
const UpdateContractPage = lazy(
  () => import("../pages/Complaints/AddContract/UpdateContractPage")
);
const user = useUserStore.getState().user;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="login" element={<LoginLayout />}>
        <Route path="" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="otp" element={<OTPpage />} />
        <Route path="forgotPassword" element={<ForgetPassword />} />
      </Route>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="complaints" element={<Complaints />} />
        <Route
          path="complaints/addContract"
          element={<AddContract />}
        />
        <Route path="signUp" element={<SignUp />}>
          <Route path="" element={<PersonInfo />} />
          <Route
            path=":userName/:password"
            element={<ConfirmUser />}
          />

          <Route
            path="determiningCaseExpert/newUser/:complaintId"
            element={<CaseExpertSignUp />}
          />

        </Route>



        <Route
          path="determiningCaseExpert/:complaintId"
          element={<DeterminingCaseExpert />}
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
        <Route
          path="complaints/:contractId/:complaintId/tables"
          element={<TablesPage />}
        />
        <Route
          path="complaints/:complaintId/files"
          element={<FilePage />}
        />
        <Route
          path="complaints/:complaintId/pay/:amount"
          element={<PaymentPage />}
        />
        <Route
          path="complaints/:complaintId/pay"
          element={<PaymentPage />}
        />
        <Route
          path="complaints/:complaintId/setMeeting"
          element={<AddMeetingPage />}
        />
        <Route
          path="complaints/:complaintId/docReq"
          element={<RequestDocs />}
        />
        <Route
          path="complaints/:complaintId/docUpload"
          element={<UploadDocs />}
        />
        <Route
          path="complaints/:complaintId/expertReview"
          element={<ReviewCase />}
        />

        <Route path="contracts" element={<Contracts />} />
        <Route path="portal" element={<Protal />} />
        <Route path="portal/messages" element={<Messages />} />
        <Route
          path="portal/employee_management"
          element={<Protal />}
        />
        <Route
          path="portal/council_List"
          element={<CouncilListPage />}
        />
        <Route
          path="portal/complain_answers"
          element={<ComplainAnswers />}
        />
        <Route
          path="contract/:contractId/:complaintId"
          element={<ContractDetailsPage />}
        />
        <Route
          path="contract/:contractId/:complaintId/old"
          element={<ContractPage />}
        />
        <Route
          path="contract/:contractId/:complaintId/details"
          element={<ContractDetailsPage />}
        />
        <Route
          path="admin/usermanagement"
          element={<UserManagement />}
        />

        <Route path="expertPortal" element={<ExpertPortal />} />

        <Route path="test" element={<Test />} />
      </Route>
    </Route>
  ),
  {
    future: {
      v7_normalizeFormMethod: true,
    },
    basename: "/",
  }
);

export default router;
