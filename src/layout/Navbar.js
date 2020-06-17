import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "./../utils/utils-context";

import "./Navbar.scss";

export const Navbar = () => {
  const context = useContext(GlobalContext);
  const cartData = context.state.itemQuantity;

  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/">Home</Link>
        <Link to="/menu1">Menu 1</Link>
        <Link to="/menu2">Menu 2</Link>
        <Link to="/menu3">Menu 3</Link>
      </div>
      <div className="right-navbar">
        <Link to="/cart" className="cart">
          {cartData}
        </Link>
      </div>
    </div>
  );
};
