// src/components/GameBoard.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Cell from "./Cell";
import WinMessage from "./WinMessage";

const emptyBoard = Array(9).fill(null);

const colors = {
  player1: "#F472B6", 
  player2: "#60A5FA", 
};

const GameBoard = ({ emojiSet, onRestart }) => {
  const [board, setBoard] = useState(emptyBoard);
  const [turn, setTurn] = useState(0);
  const [history, setHistory] = useState({ player1: [], player2: [] });
  const [winner, setWinner] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const currentPlayer = turn % 2 === 0 ? "player1" : "player2";
  const emojiList = emojiSet[currentPlayer];
  const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const prevMoves = history[currentPlayer];
    if (prevMoves.length === 3 && prevMoves[0] === index) return;

    const newBoard = [...board];
    const newHistory = { ...history };

    if (newHistory[currentPlayer].length === 3) {
      const removeIndex = newHistory[currentPlayer].shift();
      newBoard[removeIndex] = null;
    }

    newBoard[index] = randomEmoji;
    newHistory[currentPlayer].push(index);

    setBoard(newBoard);
    setHistory(newHistory);
    setTurn(turn + 1);
  };

  useEffect(() => {
    const checkWinner = () => {
      const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const [a, b, c] of winLines) {
        if (
          board[a] &&
          board[b] &&
          board[c] &&
          board[a] === board[b] &&
          board[b] === board[c]
        ) {
          if (
            emojiSet.player1.includes(board[a]) &&
            emojiSet.player1.includes(board[b]) &&
            emojiSet.player1.includes(board[c])
          ) {
            return "player1";
          }
          if (
            emojiSet.player2.includes(board[a]) &&
            emojiSet.player2.includes(board[b]) &&
            emojiSet.player2.includes(board[c])
          ) {
            return "player2";
          }
        }
      }
      return null;
    };

    const result = checkWinner();
    if (result) {
      setWinner(result);
    }
  }, [board, emojiSet]);

  return (
    <div className="max-w-md mx-auto text-center p-4 bg-yellow-50 rounded-2xl shadow-lg">
      {winner && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={150}
          recycle={false}
        />
      )}

      {!winner && (
        <motion.div
          key={currentPlayer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="mb-6 text-2xl font-bold flex items-center justify-center gap-3"
          style={{ color: colors[currentPlayer] }}
        >
          Turn: {currentPlayer === "player1" ? "🐰 Player 1" : "🍕 Player 2"}
        </motion.div>
      )}

      <div className="grid grid-cols-3 gap-3 mb-6 bg-white p-4 rounded-xl shadow-inner border-4 border-pink-200">
        {board.map((val, i) => (
          <Cell key={i} value={val} onClick={() => handleClick(i)} />
        ))}
      </div>
      {winner && (
        <WinMessage player={winner} onRestart={onRestart} />
      )}
    </div>
  );
};

export default GameBoard;
