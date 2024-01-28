// ShoppingCart.tsx
import React from "react";
import { useCart } from "react-use-cart";
import Box from "./Box";
import "../styles/ShoppingCart.css";

interface ShoppingCartProps {
  handleToggleCart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ handleToggleCart }) => {
  const { items, updateItemQuantity, removeItem } = useCart();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateItemQuantity(itemId, newQuantity);
  };

  return (
    <div className="shopping-cart">
      <div className="cart-overlay" onClick={handleToggleCart}></div>
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {Object.values(items).map((item) => (
          <Box
            key={item.id}
            title={item.name}
            image={item.image} // Replace with your image property
            price={item.price}
            quantity={item.quantity}
            subtotal={item.quantity * item.price}
            increaseQuantity={() =>
              handleQuantityChange(item.id, item.quantity + 1)
            }
            decreaseQuantity={() =>
              handleQuantityChange(item.id, item.quantity - 1)
            }
            removeItem={() => removeItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
