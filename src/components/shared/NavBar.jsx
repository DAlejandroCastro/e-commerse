import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import "./styles/navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar_title"><Link to= '/'>e-commerce</Link></h1>
      <ul className="navbar_list">
        <li className="navbar_item">
          <Link to={"/login"}><FaUser /></Link>
        </li>
        <li className="navbar_item">
          <Link to={"/purchases"}><FaBoxOpen /></Link>
        </li>
        <li className="navbar_item">
          <Link to={"/cart"}><FaShoppingCart /></Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
