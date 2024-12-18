import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext.jsx";
import axios from "axios";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { login, logout, currentUser, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/purchase/user-orders",
          {
            withCredentials: true,
          }
        );
        setOrders(response.data.orders);
        setLoading(false);
        
        
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="relative top-[12vh] flex flex-col w-full h-[88vh] p-4 items-center justify-center">
        <p className="text-xl font-bold text-textColor">
          Loading your orders...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100px"
          viewBox="0 -960 960 960"
          width="100px"
          fill="#F0ECE5"
        >
          <path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" />
        </svg>
        <h3 className="w-[50%] text-[2rem] font-bold tracking-wide mb-4 text-center">
          Please Login First to view Content...!
        </h3>
      </div>
    );
  }

  return (
    <div className="relative top-[12vh] flex flex-col w-full h-[88vh] p-4">
      <h1 className="text-center text-3xl text-textColor font-bold">
        My Orders
      </h1>
      {orders.length > 0 ? (
        <div className="flex flex-col mt-4 space-y-4 lg:mx-[30vw]">
          {orders.map((order) => (
            <div
              key={order._id}
              className="p-4 bg-secondary text-white rounded-lg shadow-lg"
            >
              <p className="">OrderID : {order._id}</p>
              <div className="flex justify-between my-4">
                <h2 className="text-2xl font-bold">{order.itemName}</h2>
                <p className="text-2xl font-bold text-gray-400">
                  ₹{order.itemPrice}
                </p>
              </div>
              <p className="flex ">
                Status:{" "}
                {order.verified ? (
                  <span className="ml-1 text-green-600"> Confirmed</span>
                ) : (
                  <span className="ml-1 text-red-500">
                    
                    Pending Verification
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-textColor mt-4">
          You have no orders yet.
        </p>
      )}
    </div>
  );
};

export default MyOrder;
