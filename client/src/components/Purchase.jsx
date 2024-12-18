import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qrcode from "../assets/payment_qr.jpeg";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../utils/AuthContext.jsx";

const Purchase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, price, selectedCaterer } = location.state || {};
  const [transactionID, setTransactionID] = useState("");
  const { isAuthenticated } = useAuth();

  let toastTriggered = false;

  useEffect(() => {
    if (!isAuthenticated && !toastTriggered) {
      toast.error("Please log in to proceed!");
      toastTriggered = true;
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!transactionID.trim()) {
      alert("Please enter a valid transaction ID!");
      return;
    }

    const data = {
      name,
      price,
      transactionID,
      confirmed: false,
    };

    try {
      const response = await axios.post(
        "http://localhost:7000/api/purchase/confirm",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/myOrders");
      } else {
        toast.error(response.data.message || "An error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong...!");
    }
  };

  return (
    <>
      {isAuthenticated ? (
        name ? (
          <div className="relative top-[12vh] flex w-full justify-evenly h-[88vh] items-center">
            <div className="bg-primary text-white flex flex-col items-start">
              <div className="bg-secondary p-16 px-40 rounded-full border-2 border-gray-800">
                <h3 className="text-md font-semibold text-gray-400">
                  {selectedCaterer}
                </h3>
                <h2 className="text-5xl font-semibold mb-2">{name}</h2>
                <p className="text-4xl mb-4">₹{price}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="w-96 text-center font-bold mb-4 bg-green-800 p-4 rounded-2xl">
                Please pay ₹{price} by scanning this QR Code and paste your
                Transaction ID below.
              </h2>
              <img
                className="w-80 rounded-3xl mb-4"
                src={qrcode}
                alt="QR Code for payment"
              />
              <form
                onSubmit={handleSubmit}
                className="p-4 bg-secondary w-full flex flex-row items-center rounded-3xl border border-textColor"
              >
                <label htmlFor="transaction" className="sr-only">
                  Transaction ID
                </label>
                <input
                  type="text"
                  id="transaction"
                  name="transaction"
                  placeholder="Transaction ID"
                  value={transactionID}
                  onChange={(e) => setTransactionID(e.target.value)}
                  className="bg-gray-900 focus:outline-none border-none p-2 rounded-xl px-4 flex-1"
                />
                <button
                  type="submit"
                  className="ml-4 px-4 py-2 bg-white text-black font-bold hover:bg-gray-200 rounded-full"
                >
                  Confirm Purchase
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="relative text-4xl font-black text-center p-8 bg-primary text-white flex flex-col items-center top-[50vh]">
            Please select an item from the order menu first.
          </div>
        )
      ) : (
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
      )}
    </>
  );
};

export default Purchase;
