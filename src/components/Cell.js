// src/components/Cell.jsx
import React from "react";
import { motion } from "framer-motion";

const Cell = ({ value, onClick }) => {
  return (
    <motion.div
      className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-4 border-pink-300 bg-yellow-50 cursor-pointer rounded-xl shadow-lg hover:scale-110 hover:border-pink-500 transition-transform duration-300"
      onClick={onClick}
      whileTap={{ scale: 0.9, rotate: -10 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      layout
    >
      {value && (
        <motion.span
          key={value}
          initial={{ scale: 0, rotate: 180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="text-4xl md:text-5xl select-none"
        >
          {value}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Cell;
