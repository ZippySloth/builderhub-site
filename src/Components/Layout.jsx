import React from "react";
import Navbar from "./Navbar/Navbar"; // Ensure the correct path
import Footer from "./Footer/Footer"; 

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
    
      <main className="min-h-screen">{children}</main>
    
      <Footer />
    </>
  );
};

export default Layout;
