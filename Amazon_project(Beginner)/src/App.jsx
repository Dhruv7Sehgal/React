import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Navbar />
  );
};

export default App;
