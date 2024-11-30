import React from "react";
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils className="text-4xl text-textColor" />,
    title: "Mayuri Caterers",
    description: "The best caterers in Bhopal",
    address: "Shop No.88, Harshawardhan Shopping Complex, Link Rd Number 2, Mata Mandir, TT Nagar, Bhopal, Madhya Pradesh 462003",
    contact: "098260 25364",
    specialties: "Wedding, Birthday Party, Farewell Party, Anniversary Celebration, etc.",
    menuLink: "mayuri-menu.html"
  },
  {
    icon: <FaUtensils className="text-4xl text-textColor" />,
    title: "CRCL Caterers",
    description: "The best price to quality ratio",
    address: "Plot No 15/16/17, 2nd Floor, Vision Towers, Yogam Garden, Brindavan Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087",
    contact: "044 2486 7536",
    specialties: "Wedding, Retirement Party, Corporate Party, Anniversary Celebration, etc.",
    menuLink: "crcl-menu.html"
  },
  {
    icon: <FaUtensils className="text-4xl text-textColor" />,
    title: "Safal Caterers",
    description: "The best in Non-Veg Food Category",
    address: "near Trikal factory, Dudauli Rd, Prabhat Puram, Madiyanva, Lucknow, Uttar Pradesh 226020",
    contact: "N/A",
    specialties: "Farewell Party, Corporate Party, Birthday Party, etc.",
    menuLink: "safal-menu.html"
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textColor mb-6">
            Featured Caterers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover top-notch catering services tailored for every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-textColor mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Description:</span> {feature.description}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Address:</span> {feature.address}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Contact:</span> {feature.contact}
              </p>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold">Best in:</span> {feature.specialties}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
