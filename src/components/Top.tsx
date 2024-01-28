import React from "react";
import { Link } from "react-router-dom";
import "../styles/Top.css";
import CartButton from "../components/CartButton.tsx";

const Top: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};

export default Top;
