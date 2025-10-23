import { createBrowserRouter, Navigate } from "react-router";
import HomeRoot from "../Layout/HomeRoot";
import Home from "../Components/Home/Home";
import AuthLogin from "../Components/Auth/AuthLogin";
import AuthRegister from "../Components/Auth/AuthRegister";
import AuthProvider from "../Contexts/AuthProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/Genre/:id",
        Component: Home,
      },
      {
        path: "/Auth",
        element: <Navigate to="/Auth/Login"/>,
      },
      {
        path: "/Auth/Login",
        Component: AuthLogin,
      },
      {
        path: "/Auth/Register",
        Component: AuthRegister,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>404 Error Page</h1>,
  },
]);
