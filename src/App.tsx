import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./components/Top.tsx";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Top />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
