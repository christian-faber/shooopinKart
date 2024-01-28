// Card.tsx
import React from "react";
import "../styles/Card.css";

interface CardProps {
  id: number;
  image: string;
  category: string;
  description: string;
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <div className="shop-card">
      <div className="card-content">
        <img className="product-image" src={image}></img>
        <h3 className="product-name">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <div className="add-to-cart">
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
