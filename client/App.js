import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { Resliqi } from "./components/Projects/Resliqi";
import { ContactMe } from "./components/ContactMe";
import { Library } from "./components/Library/Library";
import { About } from "./components/About";
import { NavBarMain } from "./components/NavBar/NavBarMain";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="resliqi" element={<Resliqi />} />
          <Route path="about" element={<About />} />
          <Route path="library" element={<Library />} />
          <Route path="contactme" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
