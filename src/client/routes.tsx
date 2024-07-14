import React from "react";

import { createBrowserRouter, Outlet } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            Component: React.lazy(() => import("./components/Dashboard")),
          },
          {
            path: "/product",
            element: <Outlet />,
            children: [
              {
                path: "/product",
                Component: React.lazy(() => import("./components/Product")),
              },
              {
                path: "/product/edit",
                Component: React.lazy(() => import("./components/EditProduct")),
              },
            ],
          },
          {
            path: "/settings",
            Component: React.lazy(() => import("./layouts/SettingsLayout")),
            children: [
              {
                path: "/settings",
                Component: React.lazy(() => import("./components/ProfileForm")),
              },
              {
                path: "/settings/account",
                Component: React.lazy(
                  () => import("./components/account/Page")
                ),
              },
              {
                path: "/settings/appearance",
                Component: React.lazy(
                  () => import("./components/appearance/Page")
                ),
              },
              {
                path: "/settings/notifications",
                Component: React.lazy(
                  () => import("./components/notifications/Page")
                ),
              },
              {
                path: "/settings/display",
                Component: React.lazy(
                  () => import("./components/display/Page")
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
