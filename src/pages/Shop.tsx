import React from "react";
import Card from "../components/Card.tsx";
import { useQuery } from "@tanstack/react-query";
import "../styles/Shop.css";

const fetchItems = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

interface Item {
  id: string;
  image: string;
  category: string;
  description: string;
  title: string;
  price: number;
}

const Shop: React.FC = () => {
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
      <div className="card-container">
        {items.map((item: Item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
