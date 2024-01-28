import React, { useEffect, useState } from "react";
import { useShoppingCart } from "react-use-cart";

const CartButton: React.FC = () => {
  const { cart, addItem, removeItem } = useShoppingCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Use the cart total items to update the counter
    const itemCount = cart.cartTotalItems;
    // Update the count in your state or wherever needed
    console.log("Cart Count:", itemCount);
  }, [cart]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <button onClick={toggleCart}>Toggle Cart</button>
      {/* Display the counter */}
      <div className="cart-counter">{Object.keys(cart).length}</div>
      {/* Render the cart content based on the showCart state */}
      {showCart && (
        <div className="cart-content">
          {/* Render your cart items here */}
          {Object.values(cart).map((item) => (
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
