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
const FormManager = lazy(
  () => import("../pages/Admin/FormManager/FormManager")
);
const AddForm = lazy(
  () => import("../pages/Admin/FormManager/AddForm/AddForm")
);
const ViewForm = lazy(
  () => import("../pages/Admin/FormManager/ViewForm/ViewForm")
);
const Test = lazy(() => import("../pages/Admin/Test/Test"));
const EditForm = lazy(
  () => import("../pages/Admin/FormManager/EditForm/EditForm")
);
const NewAddForm = lazy(
  () => import("../pages/Admin/FormManager/AddForm/NewAddForm")
);
const Contracts = lazy(() => import("../pages/Contracts/Contracts"));
const ViewFormAll = lazy(
  () => import("../pages/Contracts/ViewForm/ViewForm")
);
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
          path="complaints/createContractPage"
          element={<CreateContractPage />}
        />
        <Route
          path="complaints/:contractId/:complaintId/UpdateContractPage"
          element={<UpdateContractPage />}
        />
        <Route
          path="complaints/:contractId/addComplaint"
          element={<AddComplaint />}
        />
        <Route
          path="complaints/:contractId/:complaintId/addArguements/:state"
          element={<AddArgument />}
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
          path="admin/usermanagement"
          element={<UserManagement />}
        />
        <Route path="admin/formanager" element={<FormManager />} />
        <Route
          path="admin/formanager/addForm"
          element={<AddForm />}
        />
        <Route
          path="admin/formanager/addForm/:formId/:fromType"
          element={<NewAddForm />}
        />
        {/* <Route
          path="admin/formanager/addForm/:formId/:fromType"
          element={<AddForm />}
        /> */}
        <Route
          path="admin/formanager/viewForm/:formId/:fromType"
          element={<ViewForm />}
        />
        <Route
          path="/viewForm/:formId/:fromType"
          element={<ViewFormAll />}
        />
        <Route
          path="admin/formanager/editForm/:formId/:fromType"
          element={<EditForm />}
        />

        <Route path="test" element={<Test />} />
      </Route>
    </Route>
  )
);

export default router;
