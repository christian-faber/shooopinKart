// ShoppingCart.tsx
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "../styles/ShoppingCart.css";

const ShoppingCart: React.FC = () => {
  const { items, updateItemQuantity, removeItem } = useCart();
  const [showCart, setShowCart] = useState(true); // Make sure to initialize showCart state

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateItemQuantity(itemId, newQuantity);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className={`shopping-cart ${showCart ? "show" : ""}`}>
      <div className="cart-overlay" onClick={() => handleCloseCart()}></div>
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {Object.values(items).map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <p>{item.name}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              {item.quantity > 1 ? (
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
              ) : (
                <button onClick={() => removeItem(item.id)}>🗑️</button>
              )}
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
