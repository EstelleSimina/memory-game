import { Board } from "./Board.js";

const levels = [
  {pairs : 3, className: "body-easy"},
  {pairs : 6, className: "body-easy"},
  {pairs : 9, className: "body-medium"},
  {pairs : 12, className: "body-hard"},
  {pairs : 15, className: "body-hard"},
];

let currentLevelIndex = 0;

const startBtn = document.getElementById("start-button")!;
const menu = document.getElementById("main-menu")!;
const boardElement = document.getElementById("game-board")!;

const board = new Board("game-board"); // Crée le plateau une fois


// 🟢 Lance un niveau
function launchLevel(): void {
  const level = levels[currentLevelIndex];

  // Applique la classe CSS selon le nombre de paires
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

// Message de fin
function showVictoryMessage(): void {
  alert("🎉 Jeu terminé, félicitations !");
  // Ici, tu peux aussi proposer un bouton "Retour au menu" ou "Rejouer"
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
  if (pairsCount === 15) {
    body.classList.add("body-hard");
  }
}


// ▶️ Démarrage au clic sur "Start"
startBtn.addEventListener("click", () => {
  menu.style.display = "none";
  boardElement.style.display = "grid"; // ou "flex", selon ton CSS
  launchLevel(); // démarre le premier niveau
});

// 🚀 Démarrage automatique si besoin
window.addEventListener("DOMContentLoaded", () => {
  // rien à faire ici si tu veux attendre le clic sur Start
});





