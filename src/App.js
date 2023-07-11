import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommiteesPage from "./pages/commitees";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committees" element={<CommiteesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
