import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
