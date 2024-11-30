import React, { useState } from "react";
import { motion } from "framer-motion";

const caterers = {
  "Mayuri Caterers": {
    dishes: [
      { name: "Paneer Butter Masala", price: 250 },
      { name: "Dal Tadka", price: 180 },
      { name: "Mix Veg Curry", price: 200 },
      { name: "Shahi Paneer Masala", price: 250 },
      { name: "Tandoori Paneer Masala", price: 250 },
      { name: "Paneer do pyaaza Masala", price: 250 },
      { name: "Chhole Bhature", price: 150 },
      { name: "Chhole Masala", price: 180 },
      { name: "Chhole Kulcche", price: 200 },
      { name: "Dal Makhani", price: 160 },
      { name: "Curry Pakoda", price: 110 },
      { name: "Aloo Gobhi", price: 100 },
      { name: "Dum Aloo", price: 100 },
      { name: "Rajma Gharwala", price: 120 },
      { name: "Aloo Bhindi", price: 90 },
      { name: "Mix Veg", price: 80 },
      { name: "Butter Naan", price: 40 },
      { name: "Garlic Naan", price: 50 },
      { name: "Missi Roti", price: 30 },
      { name: "Tandoori Aloo Parantha", price: 50 },
      { name: "Paneer Kulccha", price: 80 },
      { name: "Butter Kulccha", price: 40 },
      { name: "Laccha Parantha", price: 40 },
      { name: "Basic Thaali", price: 300 },
      { name: "Deluxe Thaali", price: 500 },
      { name: "Royal Thaali", price: 700 },
    ],
  },
  "CRCL Caterers": {
    dishes: [
      { name: "Paneer Butter Masala", price: 150 },
      { name: "Dal Tadka", price: 80 },
      { name: "Mix Veg Curry", price: 100 },
      { name: "Shahi Paneer Masala", price: 150 },
      { name: "Tandoori Paneer Masala", price: 150 },
      { name: "Paneer do pyaaza Masala", price: 150 },
      { name: "Chhole Bhature", price: 60 },
      { name: "Chhole Masala", price: 80 },
      { name: "Chhole Kulcche", price: 100 },
      { name: "Dal Makhani", price: 60 },
      { name: "Curry Pakoda", price: 40 },
      { name: "Aloo Gobhi", price: 30 },
      { name: "Dum Aloo", price: 40 },
      { name: "Rajma Gharwala", price: 60 },
      { name: "Aloo Bhindi", price: 45 },
      { name: "Mix Veg", price: 40 },
      { name: "Butter Naan", price: 20 },
      { name: "Garlic Naan", price: 20 },
      { name: "Missi Roti", price: 10 },
      { name: "Tandoori Aloo Parantha", price: 20 },
      { name: "Paneer Kulccha", price: 30 },
      { name: "Butter Kulccha", price: 30 },
      { name: "Laccha Parantha", price: 40 },
      { name: "Basic Thaali", price: 200 },
      { name: "Deluxe Thaali", price: 350 },
      { name: "Deluxe Plus Thaali", price: 450 },
      { name: "Royal Thaali", price: 600 },
    ],
  },
  "Safal Caterers": {
    dishes: [
      { name: "Paneer Butter Masala", price: 150 },
      { name: "Dal Tadka", price: 80 },
      { name: "Mix Veg Curry", price: 100 },
      { name: "Shahi Paneer Masala", price: 150 },
      { name: "Tandoori Paneer Masala", price: 150 },
      { name: "Paneer do pyaaza Masala", price: 150 },
      { name: "Chhole Bhature", price: 60 },
      { name: "Chhole Masala", price: 80 },
      { name: "Chhole Kulcche", price: 100 },
      { name: "Dal Makhani", price: 60 },
      { name: "Curry Pakoda", price: 40 },
      { name: "Aloo Gobhi", price: 30 },
      { name: "Dum Aloo", price: 40 },
      { name: "Rajma Gharwala", price: 60 },
      { name: "Aloo Bhindi", price: 45 },
      { name: "Mix Veg", price: 40 },
      { name: "Butter Naan", price: 20 },
      { name: "Garlic Naan", price: 20 },
      { name: "Missi Roti", price: 10 },
      { name: "Tandoori Aloo Parantha", price: 20 },
      { name: "Paneer Kulccha", price: 30 },
      { name: "Butter Kulccha", price: 30 },
      { name: "Laccha Parantha", price: 40 },
      { name: "Butter Chicken", price: 140 },
      { name: "Tandoori Chicken", price: 150 },
      { name: "Hyderabadi Chicken", price: 160 },
      { name: "Tandoori dry Chicken", price: 170 },
      { name: "Chicken Lababdar", price: 210 },
      { name: "Shawarma", price: 30 },
      { name: "Chicken Biriyani", price: 100 },
      { name: "Basic Thaali", price: 200 },
      { name: "Deluxe Thaali", price: 350 },
      { name: "Deluxe Plus Thaali", price: 450 },
      { name: "Royal Thaali", price: 600 },
      { name: "Non-Veg Thaali", price: 350 },
      { name: "Non-Veg Royal Thaali", price: 700 },
      { name: "Non-Veg Deluxe Thaali", price: 550 },
    ],
  },
};

const Order = () => {
  const [selectedCaterer, setSelectedCaterer] = useState("Mayuri Caterers");

  const catererMenu = caterers[selectedCaterer].dishes;

  return (
    <section className="py-12 bg-primary flex flex-col items-center relative top-[12vh]">
      <div className="">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold text-textColor mb-6">
            Select Caterer Menu
          </h1>
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(caterers).map((caterer) => (
              <motion.button
                key={caterer}
                className={`px-4 py-2 rounded-lg ${
                  selectedCaterer === caterer
                    ? "bg-white text-primary"
                    : "bg-secondary text-white border border-secondary"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCaterer(caterer)}
              >
                {caterer}
              </motion.button>
            ))}
            
          </div>
            <h1 className="text-3xl m-8 font-black">
                {selectedCaterer}
            </h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {catererMenu.map((item, index) => (
              <motion.div
                key={index}
                className="bg-secondary text-textColor p-6 rounded-lg shadow-lg "
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                
              >
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.name}
                </h2>
                <p className="text-textColor mb-4">Price: ₹{item.price}</p>
                <button className="px-4 py-2 bg-white text-black font-bold hover:bg-gray-200 rounded-full">
                  Try Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Order;
