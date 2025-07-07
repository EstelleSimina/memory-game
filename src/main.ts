import { Board } from "./Board.js";
import { Card } from "./Card.js";
//fichier qui va servir à créer mes niveaux de difficultés

function bodyBackground(pairsCount:number): void {
  const body = document.body; // sélectionne la balise <body>
  body.classList.remove("body-easy", "body-medium", "body-hard"); // on enlève toutes les anciennes classes
  if (pairsCount === 3 || pairsCount === 6) {
    body.classList.add("body-easy");
  }
  if (pairsCount === 10 || pairsCount === 15) {
  body.classList.add("body-medium");
  }
  if (pairsCount === 22) {
    body.classList.add("body-hard");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const board = new Board("game-board");  // l’id de la div dans HTML
  const pairsCount = 3;
  bodyBackground(pairsCount); // 🔹 Applique le bon fond
  
  board.start(3); // Démarre avec n paires 
});

//gérer la taille de mes cartes en fonction du nombres de paires
// peu de paires => plus grandes cartes 






