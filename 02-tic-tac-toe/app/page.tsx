"use client";
import { openSans } from "./ui/fonts";
import { useState } from "react";

type SquareProps = {
  children?: string;
  index?: number;
  isSelected?: boolean;
  hasBorder?: boolean;
  updateBoard?: (index: number) => void;
};

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({
  children,
  index,
  isSelected,
  hasBorder,
  updateBoard,
}: SquareProps) => {
  const className = `${isSelected ? "bg-slate-500" : ""} ${
    hasBorder ? "border-[2px] border-white" : "text-xl w-[80px] h-[80px]"
  }`;

  const handleClick = () => {
    updateBoard && updateBoard(index as number);
  };

  return (
    <div
      onClick={handleClick}
      className={`${className} w-[100px] h-[100px] grid place-items-center cursor-pointer text-5xl rounded-lg`}
    >
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState<string | null | false>(null);

  const checkWinner = (boardToCheck: string[]) => {
    for (const combo of WINNER_COMBOS) {
      //recuperamos las posiciones
      const [a, b, c] = combo;
      if (
        //*verificamos si en la posicion a existe algo
        boardToCheck[a] &&
        //*verificamos si lo que hay en a === lo que hay en b
        boardToCheck[a] === boardToCheck[b] &&
        //*verificamos si lo que hay en b === lo que hay en c
        boardToCheck[a] === boardToCheck[c]
      ) {
        //*devolvemos al ganador que será el que esté en la posición a
        return boardToCheck[a];
      }
    }
    //*si no hay ganador
    return null;
  };

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  return (
    <main className="w-fit m-[40px auto] text-center">
      <h1 className={`text-5xl font-semibold ${openSans.className} mb-[16px]`}>
        Tic tac toe
      </h1>
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

      {winner !== null && (
        <section className="grid absolute w-screen h-screen top-0 left-0 place-items-center bg-[rgba(0,0,0,0.7)]">
          <div className="bg[#111] h-[300px] w-[320px] border border-white rounded-md flex flex-col justify-center items-center gap-5 bg-[#111]">
            <h2>{winner === false ? "Empate" : "Ganó:"}</h2>
            <header className="m-[0 auto] w-fit border border-white rounded-lg flex gap-4">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button className="py-[8px] px-[12px] m-[25px] w-[200px] bg-transparent border border-white rounded-md duration-[0.2s] font-bold hover:bg-white hover:text-black">
                Empezar de nuevo
              </button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}
