import { createBrowserRouter, redirect } from "react-router-dom";
import PostLayout from "../components/PostLayout";
import ArticleDetail from "../pages/ArticleDetail";
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
    loader: async () => {
      if (!localStorage.token) {
        return redirect("/login");
      }
      return null
    },
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/article/:slug",
        element: <ArticleDetail />,
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
    path: "/",
    loader: async () => {
      if (localStorage.token) {
        return redirect("/home");
      }
      return null
    },
    element: <LandingPage />,
  },
  {
    path: "/login",
    loader: async () => {
      if (localStorage.token) {
        return redirect("/home");
      }
      return null
    },
    element: <LoginPage />,
  },
  {
    path: "/register",
    loader: async () => {
      if (localStorage.token) {
        return redirect("/home");
      }
      return null
    },
    element: <RegisterPage />,
  },
]);

export default router;
