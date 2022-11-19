import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { Resliqi } from "./components/Projects/Resliqi";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resliqi" element={<Resliqi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
