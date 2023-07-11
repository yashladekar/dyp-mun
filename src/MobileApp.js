import React from "react";
import handleViewport from "react-in-viewport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommiteesMobile from "./pages/commiteesMobile";
import MobileHome from "./pages/MobileHome";



const MobileApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileHome />} />
        <Route path="/committees" element={<CommiteesMobile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MobileApp;
