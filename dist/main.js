import { Board } from "./Board.js";
function bodyBackground(pairsCount) {
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
const levels = [
    { pairs: 3, className: "body-easy" },
    { pairs: 6, className: "body-easy" },
    { pairs: 10, className: "body-medium" },
    { pairs: 15, className: "body-hard" },
    { pairs: 22, className: "body-hard" },
];
let currentLevelIndex = 0;
const board = new Board("game-board"); // Crée le plateau une fois
function launchLevel() {
    const level = levels[currentLevelIndex];
    const body = document.body;
    // Nettoie les anciennes classes
    body.classList.remove("body-easy", "body-medium", "body-hard");
    // Ajoute la classe correspondant au niveau
    body.classList.add(level.className);
    // fonction pour générer le plateau
    board.start(level.pairs);
}
// Quand on gagne un niveau
function goToNextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
        launchLevel();
    }
    else {
        showVictoryMessage();
    }
}
function showVictoryMessage() {
    alert("message jeu terminé, félicitation!");
    // bouton retour au menu ou recharger la page
}
window.addEventListener("DOMContentLoaded", () => {
    launchLevel();
    board.start(3); // Démarre avec n paires 
});
//gérer la taille de mes cartes en fonction du nombres de paires
// peu de paires => plus grandes cartes 
