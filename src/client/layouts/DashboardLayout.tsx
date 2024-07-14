import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen h-full overflow-hidden">
      <div className="shrink-0">
        <Sidebar />
      </div>
      <div className="w-full bg-muted/40 relative">
        <Suspense
          fallback={
            <div className="grid place-it ems-center h-full w-full">
              <span>Loading...</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
