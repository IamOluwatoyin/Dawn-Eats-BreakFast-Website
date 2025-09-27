import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Layout from "../Layout/Layout";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/layout" element={<Layout />}></Route>

          {/* <Rout>              </Rout> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
