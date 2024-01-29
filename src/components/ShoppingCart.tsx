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

  // Calculate total quantity and total price
  const totalQuantity = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  const totalPrice = items.reduce(
    (total, item) => total + (item.quantity || 0) * item.price,
    0
  );

  return (
    <div className="shopping-cart">
      <div className="cart-overlay" onClick={handleToggleCart}></div>
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        <div className="cart-space">
          <div className="products-cart">
            {items.map((item) => (
              <Box
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity || 0}
                subtotal={item.quantity ? item.quantity * item.price : 0}
                increaseQuantity={() =>
                  handleQuantityChange(item.id, (item.quantity || 0) + 1)
                }
                decreaseQuantity={() =>
                  handleQuantityChange(item.id, (item.quantity || 0) - 1)
                }
                removeItem={() => removeItem(item.id)}
              />
            ))}
          </div>
          <div className="totals">
            <h1>Number of items: {totalQuantity}</h1>
            <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
