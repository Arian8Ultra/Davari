import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Error from "../layout/Error";
import MainLayout from "../layout/MainLayout";
import Root from "../layout/Root";
import UserManagement from "../pages/Admin/UserManager/UserManagement";
import Complaints from "../pages/Complaints/Complaints";
import Home from "../pages/Home/Home";
import Protal from "../pages/Portal/Protal";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="portal" element={<Protal />} />
          <Route path="portal/messages" element={<Protal />} />
          <Route path="portal/employee_management" element={<Protal />} />

          <Route path="admin/usermanagement" element={<UserManagement />} />


        </Route>
      </Route>
    )
  );
  
  export default router;