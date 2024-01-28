import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./components/Top.tsx";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx"; // Import the ShoppingCart component
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [showCart, setShowCart] = useState(false); // Manage the cart visibility state

  const handleToggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Top handleToggleCart={handleToggleCart} />
        {showCart && <ShoppingCart handleToggleCart={handleToggleCart} />}
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
