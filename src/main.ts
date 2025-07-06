import { Board } from "./Board.js";

//fichier qui va servir à créer mes niveaux de difficultés


window.addEventListener("DOMContentLoaded", () => {
  const board = new Board("game-board");  // L’id de la div dans ton HTML
  board.start(3); // Démarre avec 3 paires par exemple
});








