import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";

const Layout = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
};

export default Layout;
