import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  const { items } = useCart();
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
    <div>
      <button onClick={toggleCart}>Toggle Cart</button>
      <div className="cart-counter">{Object.keys(items).length}</div>
    </div>
  );
};

export default CartButton;
