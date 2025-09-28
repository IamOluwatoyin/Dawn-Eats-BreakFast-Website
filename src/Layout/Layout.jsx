import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header.jsx"; 

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};

export default Layout;
