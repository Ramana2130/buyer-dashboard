import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Sidebar";
import { LoadingSpinnerFull } from "@/components/ui/LoadingSpinner";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen h-full overflow-hidden">
      <div className="shrink-0">
        <Sidebar />
      </div>
      <div className="w-full bg-muted/40 relative">
        <Suspense fallback={<LoadingSpinnerFull />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
