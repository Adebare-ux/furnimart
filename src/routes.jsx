import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router";
import FurnitureView from "./pages/Furniture/View";
import HomeLayout from "./layouts/Home";

// Main App component that combines Home and Middle components

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="furniture/view/:id" element={<FurnitureView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
