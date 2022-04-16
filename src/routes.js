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
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "user", element: <User /> },
        { path: "products", element: <Product /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: <LoginLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
};
