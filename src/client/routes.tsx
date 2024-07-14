import React from "react";

import { createBrowserRouter, Outlet } from "react-router-dom";

import { Settings } from "./components/Setting";
import { ProfileForm } from "./components/ProfileForm";
import { LoginForm } from "./components/Login";
import { RegisterForm } from "./components/RegisterForm";

import SettingsAccountPage from "./components/account/Page";
import SettingsAppearancePage from "./components/appearance/Page";
import SettingsNotificationsPage from "./components/notifications/Page";
import SettingsDisplayPage from "./components/display/Page";

import DashboardLayout from "./layouts/DashboardLayout";
import SettingsLayout from "./layouts/SettingsLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
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
            Component: React.lazy(() => import("./components/account/Page")),
          },
          {
            path: "/settings/appearance",
            Component: React.lazy(() => import("./components/appearance/Page")),
          },
          {
            path: "/settings/notifications",
            Component: React.lazy(
              () => import("./components/notifications/Page")
            ),
          },
          {
            path: "/settings/display",
            Component: React.lazy(() => import("./components/display/Page")),
          },
        ],
      },
    ],
  },
]);

export default router;
