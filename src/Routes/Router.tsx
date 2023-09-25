import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "../layout/Error";
import MainLayout from "../layout/MainLayout";
import Root from "../layout/Root";
import UserManagement from "../pages/Admin/UserManager/UserManagement";
import Complaints from "../pages/Complaints/Complaints";
import Home from "../pages/Home/Home";
import Protal from "../pages/Portal/Protal";
import Messages from "../pages/Portal/Messages/Messages";
import ComplainAnswers from "../pages/Portal/ComplainAnswers/ComplainAnswers";
import FormManager from "../pages/Admin/FormManager/FormManager";
import AddForm from "../pages/Admin/FormManager/AddForm/AddForm";
import ViewForm from "../pages/Admin/FormManager/ViewForm/ViewForm";
import Test from "../pages/Admin/Test/Test";
import EditForm from "../pages/Admin/FormManager/EditForm/EditForm";
import NewAddForm from "../pages/Admin/FormManager/AddForm/NewAddForm";
import Contracts from "../pages/Contracts/Contracts";
import ViewFormAll from "../pages/Contracts/ViewForm/ViewForm";
import AddContract from "../pages/Complaints/AddContract/AddContract";
import "../index.css"
import AddComplaint from "../pages/Complaints/AddComplaints/AddComplaints";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error/>} >
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="complaints/addContract" element={<AddContract />} />
        <Route path="complaints/addComplaint" element={<AddComplaint />} />

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

        <Route path="test" element={<Test/>} />
      </Route>
    </Route>
  )
);

export default router;
