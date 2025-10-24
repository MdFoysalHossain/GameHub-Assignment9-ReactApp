import { createBrowserRouter, Navigate } from "react-router";
import HomeRoot from "../Layout/HomeRoot";
import Home from "../Components/Home/Home";
import AuthLogin from "../Components/Auth/AuthLogin";
import AuthRegister from "../Components/Auth/AuthRegister";
import AuthProvider from "../Contexts/AuthProvider";
import Post from "../Components/Post/Post";
import ProtectedRoute from "../Routes/ProtectedRoute";
import Error404 from "../Components/Error/Error404";
import MyProfile from "../Components/MyProfile/MyProfile";
import UpdateInfo from "../Components/MyProfile/UpdateInfo";
import AuthForgot from "../Components/Auth/AuthForgot";
import AboutUs from "../Components/AboutUs/AboutUs";

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
        path: "/About",
        Component: AboutUs,
      },
      {
        path: "/Genre/:id",
        Component: Home,
      },
      {
        path: "/Auth",
        element: <Navigate to="/Auth/Login" />,
      },
      {
        path: "/Auth/Login",
        Component: AuthLogin,
      },
      {
        path: "/Auth/Forgot",
        Component: AuthForgot,
      },
      {
        path: "/Auth/Register",
        Component: AuthRegister,
      },
      {
        path: "/Post/:id",
        element:
          <ProtectedRoute>
            <Post></Post>
          </ProtectedRoute>
      },
      {
        path: "/MyProfile",
        element:
          <ProtectedRoute>
            <MyProfile></MyProfile>
          </ProtectedRoute>,
      },
      {
        path: "/UpdateInfo",
        element:
          <ProtectedRoute>
            <UpdateInfo></UpdateInfo>
          </ProtectedRoute>,
      }
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);
