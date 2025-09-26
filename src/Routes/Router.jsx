import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>

          {/* <Rout>              </Rout> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
