import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HelpModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full mx-4"
          >
            <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 justify-center text-pink-600">
              🎮 How to Play
            </h2>
            <ul className="list-disc list-inside mb-4 text-left space-y-2 text-gray-700 text-lg leading-relaxed">
              <li>The game is played on a <span className="font-bold text-pink-500">3x3 grid</span>.</li>
              <li>Each player picks an <span role="img" aria-label="emoji">😄</span> emoji category before starting.</li>
              <li>Players take turns placing a random emoji from their category.</li>
              <li>Only <span className="font-semibold text-blue-500">3 emojis</span> per player can be on the board at once.</li>
              <li>When placing the 4th, the oldest emoji disappears.</li>
              <li>You can't place a new emoji where the oldest was.</li>
              <li>First to get 3 in a row wins — no draws!</li>
            </ul>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-pink-600 transition"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
