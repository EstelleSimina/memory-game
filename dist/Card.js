//class Card représente une carte individuelle dans le jeu 
export class Card {
    constructor(value) {
        this.isFlipped = false; //Indique si la carte est actuellement retournée (face visible)
        this.isFound = false; //Indique si la carte a été trouvée (fait partie d'une paire déjà découverte)
        this.value = value; //value renomme en imgrsc 
        // Crée l'élement principal
        this.element = document.createElement("div");
        this.element.className = "card";
        // Crée l'image (face cachée)
        this.imgElement = document.createElement("img");
        this.imgElement.src = "assets/card_back/card_back_arcane.png";
        this.imgElement.className = "card-img";
        this.element.appendChild(this.imgElement);
    }
    flip() {
        if (this.isFlipped || this.isFound)
            return;
        this.isFlipped = true;
        this.element.classList.add("flipped");
        this.imgElement.src = this.value; // affiche la bonne image 
    }
    hide() {
        this.isFlipped = false;
        this.element.classList.remove("flipped");
        this.imgElement.src = "assets/card_back/card_back_arcane.png"; //on affiche le dos de la carte
    }
    markAsFound() {
        this.isFound = true;
        this.element.classList.add('found');
    }
}
