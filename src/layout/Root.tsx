import { Skeleton } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const Root = () => {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <Outlet />
        </LocalizationProvider>
      </Suspense>
    </>
  );
};

export default Root;
