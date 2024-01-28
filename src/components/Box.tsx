// Box.tsx
import React from "react";
import "../styles/Box.css";

interface BoxProps {
  title: string;
  image: string;
  price: number;
  quantity: number;
  subtotal: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  removeItem: () => void;
}

const Box: React.FC<BoxProps> = ({
  title,
  image,
  price,
  quantity,
  subtotal,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <div className="box">
      <img src={image} alt={title} />
      <div className="box-details">
        <h3>{title}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <button onClick={increaseQuantity}>+</button>
        {quantity > 1 ? (
          <button onClick={decreaseQuantity}>-</button>
        ) : (
          <button onClick={removeItem}>🗑️</button>
        )}
      </div>
    </div>
  );
};

export default Box;
