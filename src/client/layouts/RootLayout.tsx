import { Suspense } from "react";
import { Outlet } from "react-router";

// Context
import { AuthProvider } from "../context/AuthContext.jsx";

// Component
import { LoadingSpinnerFull } from "../components/ui/LoadingSpinner.jsx";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingSpinnerFull />}>
        {/* This where your components will get rendered */}
        <Outlet />
      </Suspense>
    </AuthProvider>
  );
};

export default RootLayout;
