import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import "../styles/CartButton.css";
import { FaCartShopping } from "react-icons/fa6";

interface CartButtonProps {
  handleToggleCart: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ handleToggleCart }) => {
  const { items } = useCart();

  useEffect(() => {
    const itemCount = Object.keys(items).length;
    console.log("Cart Count:", itemCount);
  }, [items]);

  return (
    <div className="cart-btn-container">
      <button className="toggle-cart-btn" onClick={handleToggleCart}>
        <FaCartShopping />
      </button>
      <div className="cart-counter">{Object.keys(items).length}</div>
    </div>
  );
};

export default CartButton;
