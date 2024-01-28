import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./components/Top.tsx";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
