import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileApp from "./MobileApp";
import CommiteesCardss from "./mobileComponents/commitiesCard";

const MobileRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileApp />} />
        <Route path="/committees" element={<CommiteesCardss />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MobileRouter;
