import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LandingPage from "../Pages/LandingPage";
import DinePage from "../Pages/DinePage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/" element={<DinePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
