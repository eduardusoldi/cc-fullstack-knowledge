import { createBrowserRouter } from "react-router-dom";
import PostLayout from "../components/PostLayout";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import MyProfile from "../pages/MyProfile";
import RegisterPage from "../pages/RegisterPage";
import Setting from "../pages/Setting";
import WriteArticle from "../pages/WriteArticle";

const router = createBrowserRouter([
  {
    element: <PostLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/new-article",
        element: <WriteArticle />,
      },
      {
        path: "/settings",
        element: <Setting />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
