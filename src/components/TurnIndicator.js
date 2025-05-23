// src/components/TurnIndicator.jsx
import React from "react";

const TurnIndicator = ({ currentPlayer }) => {
  return (
    <div className="mb-4 text-center text-xl font-semibold">
      {`Current Turn: ${currentPlayer === "player1" ? "Player 1" : "Player 2"}`}
    </div>
  );
};

export default TurnIndicator;
