import React from "react";
import logo from "../../assets/images/Logo_ML@2x.png";
import glassIcon from "../../assets/images/ic_Search.png";

const Navbar = () => (
  <nav>
    <img src={logo} alt="" />
    <form>
      <input type="text" />
      <button type="submit">
        <img src={glassIcon} alt="Search" />
      </button>
    </form>
  </nav>
);

export default Navbar;
