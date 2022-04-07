import { useRoutes, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/dashboardLayout/DashboardLayout";
import LoginLayout from "./layout/LoginLayout";
import DashboardApp from "./pages/DashboardApp";
import User from "./pages/User";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Navigate to="dashboard/app" /> },
        { path: "dashboard/app", element: <DashboardApp /> },
        { path: "dashboard/user", element: <User /> },
        { path: "dashboard/products", element: <Product /> },
        { path: "dashboard/blog", element: <Blog /> },
      ],
    },
    {
      path: "/dashboard",
      element: <LoginLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
};
