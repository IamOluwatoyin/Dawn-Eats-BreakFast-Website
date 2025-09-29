import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Layout from "../Layout/Layout";
import ThePlacePage from "../Pages/ThePlacePage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route element={<Layout />}>
           <Route path="theplacepage" element={<ThePlacePage />} />
          </Route>


          {/* <Rout>              </Rout> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
