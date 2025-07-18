//plateau du jeu, gestion des cartes 
import { Card } from "./Card.js"; //.ts
import { goToNextLevel } from "./main.js";
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
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    start(pairsCount) {
        this.boardElement.innerHTML = ""; // Vide le plateau au départ
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
            if (pairsCount === 3 || pairsCount === 6) {
                card.element.classList.add("card-size-easy");
            }
            if (pairsCount === 9 || pairsCount === 12) {
                card.element.classList.add("card-size-medium");
            }
            if (pairsCount === 16) {
                card.element.classList.add("card-size-hard");
            }
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
                const allFound = this.cards.every((card) => card.isFound); //vérifie si toutes les paires sont trouvées
                if (allFound) {
                    setTimeout(() => {
                        goToNextLevel();
                    }, 1000);
                }
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
