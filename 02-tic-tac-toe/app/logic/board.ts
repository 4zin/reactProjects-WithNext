import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck: string[]) => {
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

export const checkEndGame = (newBoard: string[]) => {
  //revisamos si hay empate
  //si no hay más espacios vacíos
  //en el juego
  return newBoard.every((square) => square !== null);
};
