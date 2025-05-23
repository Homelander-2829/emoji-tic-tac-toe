// src/components/EmojiSelector.jsx
import React, { useState } from "react";

const categories = {
  Animals: ["🐶", "🐱", "🐵", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"],
  Sports: ["⚽", "🏀", "🏈", "🎾"]
};

const EmojiSelector = ({ onStart }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleStart = () => {
    if (player1 && player2 && player1 !== player2) {
      onStart({
        player1: categories[player1],
        player2: categories[player2]
      });
    } else {
      alert("🎯 Both players must choose different categories!");
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-4 border-pink-200 max-w-md w-full text-center animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-pink-700">🎨 Choose Your Emoji Style!</h2>

      <div className="flex flex-col sm:flex-row justify-between gap-6">
        {/* Player 1 */}
        <div className="w-full">
          <h3 className="font-semibold mb-1 text-purple-600">Player 1</h3>
          <select
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            className="w-full bg-yellow-100 p-2 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Choose Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat} {categories[cat][0]}
              </option>
            ))}
          </select>
        </div>

        {/* Player 2 */}
        <div className="w-full">
          <h3 className="font-semibold mb-1 text-purple-600">Player 2</h3>
          <select
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            className="w-full bg-yellow-100 p-2 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Choose Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat} {categories[cat][1]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleStart}
        className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition transform hover:scale-105 shadow-md"
      >
        🚀 Start Game
      </button>
    </div>
  );
};

export default EmojiSelector;
