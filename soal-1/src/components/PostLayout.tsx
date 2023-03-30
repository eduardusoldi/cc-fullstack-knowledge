import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function PostLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default PostLayout;
