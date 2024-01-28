import React from "react";
import Card from "../components/Card.tsx";
import { useQuery } from "@tanstack/react-query";

const fetchItems = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

interface Item {
  id: number;
  image: string;
  category: string;
  description: string;
  title: string;
  price: number;
}

const Shop: React.FC = () => {
  //   const dummyData = [
  //     { id: 1, name: "Product 1", price: 19.99 },
  //     { id: 2, name: "Product 2", price: 29.99 },
  //     { id: 3, name: "Product 3", price: 39.99 },
  //     { id: 4, name: "Product 4", price: 49.99 },
  //     { id: 5, name: "Product 5", price: 59.99 },
  //     { id: 6, name: "Product 6", price: 69.99 },
  //     { id: 7, name: "Product 7", price: 79.99 },
  //     { id: 8, name: "Product 8", price: 89.99 },
  //   ];

  const {
    data: items,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => fetchItems(),
    queryKey: ["items"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Shop</h2>
      <div className="card-container">
        {items.map((item: Item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
