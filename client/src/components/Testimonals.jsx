import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aman Sharma',
    image: 'https://api.multiavatar.com/01.svg',
    quote: "Exotica Bites elevated our event with their mouthwatering dishes and impeccable service. Every bite was a delight!",
    rating: 5,
  },
  {
    name: 'Priya Khanna',
    image: 'https://api.multiavatar.com/02.svg',
    quote: "The food from Exotica Bites was the highlight of our celebration. Perfectly balanced flavors and top-notch presentation!",
    rating: 5,
  },
  {
    name: 'Rahul Gupta',
    image: 'https://api.multiavatar.com/03.svg',
    quote: "The team at Exotica Bites delivered a dining experience that left everyone asking for seconds. Truly exceptional!",
    rating: 5,
  },
  {
    name: 'Neha Verma',
    image: 'https://api.multiavatar.com/04.svg',
    quote: "From appetizers to desserts, Exotica Bites crafted a menu that impressed every guest. Their attention to detail is amazing!",
    rating: 5,
  },
  {
    name: 'Ramesh Patil',
    image: 'https://api.multiavatar.com/05.svg',
    quote: "Exotica Bites provided incredible food and professional service that made our event unforgettable. Highly recommend!",
    rating: 4,
  },
  {
    name: 'Simran Kaur',
    image: 'https://api.multiavatar.com/06.svg',
    quote: "The flavors were rich, the dishes were beautifully presented, and the service was flawless. Exotica Bites is simply outstanding!",
    rating: 5,
  },
];

const Testimonials = () => {
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
          <h2 className="text-4xl font-bold text-textColor mb-6">What Our Customers Say</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the joy of flavorful food and outstanding service. Here's what our satisfied clients have to say about Exotica Bites!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <div className="text-yellow-400 flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-textColor italic mb-4">"{testimonial.quote}"</p>
              <h3 className="font-bold text-gray-300">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
