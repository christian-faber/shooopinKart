import React from "react";
import Card from "../components/Card";

const Shop: React.FC = () => {
  // You can replace this with actual data fetching logic
  const dummyData = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
    { id: 4, name: "Product 4", price: 49.99 },
    { id: 5, name: "Product 5", price: 59.99 },
    { id: 6, name: "Product 6", price: 69.99 },
    { id: 7, name: "Product 7", price: 79.99 },
    { id: 8, name: "Product 8", price: 89.99 },
  ];

  return (
    <div>
      <h2>Shop</h2>
      <div className="card-container">
        {dummyData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
