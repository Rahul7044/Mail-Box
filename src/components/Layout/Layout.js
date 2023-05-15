import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../pages/SideBar";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Navbar />
      {isLogin && <Sidebar />}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;