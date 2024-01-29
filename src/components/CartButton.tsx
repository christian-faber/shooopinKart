import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import "../styles/CartButton.css";
import { FaCartShopping } from "react-icons/fa6";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  const { items, removeItem } = useCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const itemCount = Object.keys(items).length;
    console.log("Cart Count:", itemCount);
  }, [items]);

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
    onClick();
  };

  return (
    <div className="cart-btn-container">
      <button className="toggle-cart-btn" onClick={toggleCart}>
        <FaCartShopping />
      </button>
      <div className="cart-counter">{Object.keys(items).length}</div>
    </div>
  );
};

export default CartButton;
