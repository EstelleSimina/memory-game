//plateau du jeu, gestion des cartes 
import { Card } from "./Card.js";
export class Board {
    constructor(boardId) {
        this.cards = [];
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false; //empêche de cliquer sur d'autres cartes quand 2 sont retournées
        this.boardElement = document.getElementById(boardId);
    }
    //fonction qui mélange les éléments de manière aléatoire du tableau 
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    start(pairsCount) {
        this.boardElement.innerHTML = ""; // Vide le plateau au départ
        this.boardElement.classList.remove("board-easy", "board-medium", "board-hard");
        if (pairsCount === 3 || pairsCount === 6) {
            this.boardElement.classList.add("board-easy");
        }
        if (pairsCount === 10 || pairsCount === 15) {
            this.boardElement.classList.add("board-medium");
        }
        if (pairsCount === 22) {
            this.boardElement.classList.add("board-hard");
        }
        const values = [];
        for (let i = 1; i <= pairsCount; i++) {
            values.push(`assets/card_arcane/card${i}.png`);
            values.push(`assets/card_arcane/card${i}.png`);
        }
        const shuffled = this.shuffle(values);
        this.cards = [];
        shuffled.forEach((value) => {
            const card = new Card(value);
            // Ajout du clic on appelle handleCardClick
            card.element.addEventListener("click", () => this.handleCardClick(card));
            this.cards.push(card);
            this.boardElement.appendChild(card.element);
        });
    }
    handleCardClick(card) {
        if (this.lockBoard || card.isFlipped || card.isFound)
            return;
        card.flip();
        if (!this.firstCard) {
            this.firstCard = card;
        }
        else {
            this.secondCard = card;
            this.lockBoard = true;
            if (this.firstCard.value === this.secondCard.value) {
                // bonne paire
                this.firstCard.markAsFound();
                this.secondCard.markAsFound();
                this.resetSelection();
            }
            else {
                // mauvaise paire
                setTimeout(() => {
                    this.firstCard.hide();
                    this.secondCard.hide();
                    this.resetSelection();
                }, 1000);
            }
        }
    }
    resetSelection() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
    }
}
