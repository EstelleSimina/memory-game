import { Board } from "./Board.js";

const levels = [
  {pairs : 3, className: "body-easy"},
  {pairs : 6, className: "body-easy"},
  {pairs : 9, className: "body-medium"},
  {pairs : 12, className: "body-hard"},
  {pairs : 16, className: "body-hard"},
];

let currentLevelIndex = 0;

const startBtn = document.getElementById("start-button")!;
const menu = document.getElementById("main-menu")!;
const boardElement = document.getElementById("game-board")!;

const board = new Board("game-board"); // Crée le plateau une fois

function updateBoardClass(pairsCount: number): void {
  const boardElement = document.getElementById("game-board")!;
  boardElement.classList.remove("board-easy-3", "board-easy-6", "board-medium-9", "board-medium-12","board-hard");

  if (pairsCount === 3)  {
    boardElement.classList.add("board-easy-3");
  }
  if (pairsCount === 6){
    boardElement.classList.add("board-easy-6");
  }
  if (pairsCount === 9){
    boardElement.classList.add("board-medium-9");
  }
  if (pairsCount === 12) {
    boardElement.classList.add("board-medium-12");
  }
  if (pairsCount === 16) {
    boardElement.classList.add("board-hard");
  }
}

// lance un niveau
function launchLevel(): void {
  const level = levels[currentLevelIndex];
  updateBoardClass(level.pairs);
  // applique la classe CSS selon le nombre de paires
  bodyBackground(level.pairs);

  // Génère le plateau
  board.start(level.pairs);
}

// Quand le joueur gagne un niveau
export function goToNextLevel(): void {
  currentLevelIndex++;
  if (currentLevelIndex < levels.length) {
    launchLevel();
  } else {
    showVictoryMessage();
  }
}

// message de fin
function showVictoryMessage(): void {
  alert("🎉 Jeu terminé, félicitations !");
}


function bodyBackground(pairsCount:number): void {
  const body = document.body; // sélectionne la balise <body>
  body.classList.remove("body-easy", "body-medium", "body-hard"); // on enlève toutes les anciennes classes
  if (pairsCount === 3 || pairsCount === 6) {
    body.classList.add("body-easy");
  }
  if (pairsCount === 9 || pairsCount === 12) {
  body.classList.add("body-medium");
  }
  if (pairsCount === 16) {
    body.classList.add("body-hard");
  }
}


// démarrage au clic sur "Start"
startBtn.addEventListener("click", () => {
  menu.style.display = "none";
  boardElement.style.display = "grid"; // ou "flex", selon ton CSS
  launchLevel(); // démarre le premier niveau
});

// démarrage automatique si besoin
window.addEventListener("DOMContentLoaded", () => {});





