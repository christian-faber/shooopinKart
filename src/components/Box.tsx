import React from "react";
import "../styles/Box.css";

interface BoxProps {
  title: string;
  image: string; // Replace with the actual type for image
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
      <p>{title}</p>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <div className="control">
        <button onClick={removeItem}>🗑️</button>
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

export default Box;
