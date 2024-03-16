import { Skeleton } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SAlert from "../components/Alert/SAlert";
import "../index.css";
const Root = () => {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <Outlet />
          <SAlert />
        </LocalizationProvider>
      </Suspense>
    </>
  );
};

export default Root;
