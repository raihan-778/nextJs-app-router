import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen text-2xl">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default layout;
