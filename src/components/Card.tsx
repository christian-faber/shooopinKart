import React from "react";
import "../styles/Card.css";
import { useCart } from "react-use-cart";

interface CardProps {
  id: string;
  image: string;
  category: string;
  description: string;
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, image, title, price }) => {
  const { addItem } = useCart();

  return (
    <div className="shop-card">
      <div className="card-content">
        <img className="product-image" src={image} alt={title} />
        <h3 className="product-name">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <div className="add-to-cart">
        <button
          onClick={() => addItem({ id, title, price, image, quantity: 1 })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
