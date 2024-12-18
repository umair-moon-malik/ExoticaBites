import React , {useEffect} from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Order from "./components/Order.jsx";
import axios from "axios";
import { useAuth } from "./utils/AuthContext.jsx";
import Purchase from "./components/Purchase.jsx";
import MyOrder from "./components/MyOrder.jsx";
import Profile from './components/Profile.jsx'

const App = () => {
  const { login, logout, currentUser, isAuthenticated } = useAuth();

  const API_URL = "http://localhost:7000";

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/validate-token`, {
          withCredentials: true,
        });

        if (response.data.valid) {
          login(response.data.username);
        } else {
          logout();
          console.warn(response.data.message);
        }
      } catch (error) {
        console.error("Error validating token", error.message);
      }
    };

    validateToken();
  }, []);

  return (
    <div className="flex flex-col text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/myOrders" element={<MyOrder />} />
      </Routes>
    </div>
  );
};

export default App;
