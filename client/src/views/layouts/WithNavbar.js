import React from "react";
import Navbar from "../../components/Navbar";

const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default WithNavbar;
