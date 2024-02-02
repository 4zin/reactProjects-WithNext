"use client";
import { openSans } from "./ui/fonts";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

//components
import { Square } from "./components/Square";

import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./storage";

export default function Home() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState<string | null | false>(null);

  useEffect(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    const turnFromStorage = window.localStorage.getItem("turn");

    setBoard(
      boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    );
    setTurn(turnFromStorage || TURNS.X);
  }, []);

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  return (
    <main className="w-fit m-[40px auto] text-center">
      <h1 className={`text-5xl font-semibold ${openSans.className} mb-[16px]`}>
        Tic tac toe
      </h1>
      <button
        onClick={resetGame}
        className="py-[8px] px-[12px] m-[25px] w-[200px] bg-transparent border border-white rounded-md duration-[0.2s] font-bold hover:bg-white hover:text-black"
      >
        Reset game
      </button>
      <section className="grid grid-cols-3 gap-[10px]">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              isSelected={false}
              updateBoard={updateBoard}
              hasBorder={true}
            >
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="grid grid-cols-2 place-items-center gap-[10px] mt-5">
        <Square isSelected={turn === TURNS.X} hasBorder={false}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} hasBorder={false}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resteGame={resetGame} winner={winner} />
    </main>
  );
}
