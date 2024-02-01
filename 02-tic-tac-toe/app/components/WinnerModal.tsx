import { Square } from "./Square";
export const WinnerModal = ({
  winner,
  resteGame,
}: {
  winner: string | null | false;
  resteGame: () => void;
}) => {
  if (winner === null) return null;
  return (
    <section className="grid absolute w-screen h-screen top-0 left-0 place-items-center bg-[rgba(0,0,0,0.7)]">
      <div className="bg[#111] h-[300px] w-[320px] border border-white rounded-md flex flex-col justify-center items-center gap-5 bg-[#111]">
        <h2>{winner === false ? "Empate" : "Ganó:"}</h2>
        <header className="m-[0 auto] w-fit border border-white rounded-lg flex gap-4">
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button
            onClick={resteGame}
            className="py-[8px] px-[12px] m-[25px] w-[200px] bg-transparent border border-white rounded-md duration-[0.2s] font-bold hover:bg-white hover:text-black"
          >
            Empezar de nuevo
          </button>
        </footer>
      </div>
    </section>
  );
};
