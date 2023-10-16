import { Skeleton } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Root;
