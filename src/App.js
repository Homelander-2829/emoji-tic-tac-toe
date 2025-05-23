// src/App.jsx
import React, { useState } from "react";
import EmojiSelector from "./components/EmojiSelector";
import GameBoard from "./components/GameBoard";
import HelpModal from "./components/HelpModal";

const App = () => {
  const [players, setPlayers] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [resetKey, setResetKey] = useState(0); 

  const handleRestart = () => {
    const keep = window.confirm("🎉 Do you want to keep the same emoji categories?");
    if (keep) {
      setResetKey(prev => prev + 1); 
    } else {
      setPlayers(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-200 via-pink-200 to-purple-300 flex flex-col items-center justify-center relative font-fun px-4 py-8">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-700 mb-6 text-center drop-shadow-md">
        🧠 Emoji Tic Tac Toe!
      </h1>

      <button
        className="absolute top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
        onClick={() => setShowHelp(true)}
      >
        ❓ Help
      </button>

      {!players ? (
        <EmojiSelector onStart={setPlayers} />
      ) : (
        <GameBoard
          key={resetKey} 
          emojiSet={players}
          onRestart={handleRestart}
        />
      )}

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
};

export default App;
