import { createBrowserRouter } from "react-router-dom";
import PostLayout from "../components/PostLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    element: <PostLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  
]);

export default router
