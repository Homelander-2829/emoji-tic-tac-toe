// src/components/WinMessage.jsx
import React from "react";

const WinMessage = ({ player, onRestart }) => {
  return (
    <div className="p-4 bg-green-200 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">
        {player === "player1" ? "Player 1 Wins!" : "Player 2 Wins!"}
      </h2>
      <button
        onClick={onRestart}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Restart Game
      </button>
    </div>
  );
};

export default WinMessage;
