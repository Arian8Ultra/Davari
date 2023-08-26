import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Error from "../layout/Error";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="complaints" element={<Complaints />} />
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
          path="admin/formanager/addForm/:formId"
          element={<AddForm />}
        />
      </Route>
    </Route>
  )
);

export default router;
