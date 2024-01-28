import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { items, removeItem } = useCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const itemCount = Object.keys(items).length;
    console.log("Cart Count:", itemCount);
  }, [items]);

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
    // Invoke the onClick function when toggling the cart
    onClick();
  };

  return (
    <div>
      <button onClick={toggleCart}>Toggle Cart</button>
      <div className="cart-counter">{Object.keys(items).length}</div>
      {showCart && (
        <div className="cart-content">
          {Object.values(items).map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartButton;
