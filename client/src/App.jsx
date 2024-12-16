import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Order from "./components/Order.jsx";

const App = () => {
  return (
    <div className="flex flex-col text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
