import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Order from "./components/Order.jsx";

const App = () => {
  return (
    <div className="flex flex-col text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/order" element={<Order />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
