import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";

const Homepage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className=" min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-textColor">
            Welcome to
            <br />
            <span className="gradient-text text-purple-300 ">
              Exotica Bites
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            At Exotica Bites, we bring flavors and traditions together to create
            memorable experiences. Whether it's a small gathering or a grand
            celebration, our caterers offer the best in food and service.
          </p>

          {isAuthenticated ? (
            <div className="flex gap-4">
              {" "}
              <Link to={"/order"}>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-sora text-xl bg-textColor w-fit text-primary font-black p-4 pl-8 pr-8 rounded-full"
                  >
                    Try Something New
                  </motion.button>
                </div>
              </Link>
              <Link to={"/myOrders"}>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-sora text-xl bg-textColor w-fit text-primary font-black p-4 pl-8 pr-8 rounded-full"
                  >
                    My Orders
                  </motion.button>
                </div>
              </Link>
            </div>
          ) : (
            <Link to={"/login"}>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-sora text-xl bg-textColor w-fit text-primary font-black p-4 pl-8 pr-8 rounded-full"
                >
                  Sign in
                </motion.button>
              </div>
            </Link>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          {/* <div className="bg-gradient-to-b from-blue-500/10 to-transparent absolute inset-0 rounded-xl" />
          <img
            src="/platform-preview.png"
            alt="Platform Interface"
            className="w-full rounded-xl shadow-2xl"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
