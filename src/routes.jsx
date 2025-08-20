import React from "react";

import Home from "./pages/home";
import Middle from "./pages/home/Main";
import "./index.css"; // Ensure the CSS file is imported for styling
import { BrowserRouter, Route, Routes } from "react-router";
import FurnitureView from "./pages/Furniture/View";

// Main App component that combines Home and Middle components

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/furniture/view/:id" element={<FurnitureView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
