import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DinePage from "../Pages/DinePage";
import LandingPage from "../Pages/LandingPage";
import Layout from "../Layout/Layout";
import ThePlacePage from "../Pages/ThePlacePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="theplacepage" element={<ThePlacePage />} />
          <Route path="dinepage" element={<DinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
