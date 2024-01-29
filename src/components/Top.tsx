import React from "react";
import { Link } from "react-router-dom";
import "../styles/Top.css";
import CartButton from "../components/CartButton.tsx";

interface TopProps {
  handleToggleCart: () => void;
}

const Top: React.FC<TopProps> = ({
  handleToggleCart,
  pageName,
  setPageName,
}) => {
  return (
    <nav className="navbar">
      <div className="title">
        <h1>{pageName}</h1>
      </div>
      <div className="nav-list-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setPageName("Home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/shop"
              className="nav-link"
              onClick={() => setPageName("Shop")}
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <CartButton onClick={handleToggleCart} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Top;
