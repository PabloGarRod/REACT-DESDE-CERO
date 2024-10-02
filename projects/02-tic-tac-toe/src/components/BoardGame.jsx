import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS, RESULTS } from "../constants";
import { Square } from "./Square";
import { WinnerModal } from "./WinnerModal";
import { checkEndGame, checkWinnerFrom } from "../logic/board";
import { resetStorage, saveGameToStorage } from "../logic/storage";

export const BoardGame = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  // null no hay ganador, false empate
  const [winner, setWinner] = useState(RESULTS.NULL);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
    resetStorage();
  };

  const updateBoard = (index) => {
    // evitar sobreescribir
    if (board[index] || winner) return;
    // actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // guardar partida
    saveGameToStorage({ board: newBoard, turn: newTurn });
    // revisar ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>RESET</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
};
