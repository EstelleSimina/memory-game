//class Card représente une carte individuelle dans le jeu 
export class Card {
  element: HTMLDivElement;
  imgElement : HTMLImageElement;
  value: string;
  isFlipped: boolean = false; //Indique si la carte est actuellement retournée (face visible)
  isFound: boolean = false; //Indique si la carte a été trouvée (fait partie d'une paire déjà découverte)

  constructor(value: string) {
    this.value = value;

    // Crée l'élement principal
    this.element = document.createElement("div");
    this.element.className = "card";

    // Crée l'image (face cachée)
    this.imgElement = document.createElement("img");
    this.imgElement.src = "assets/card_back/card_back_arcane.png"; //The ID of the image to use for the card.
    this.imgElement.className= "card-img";

    this.element.appendChild(this.imgElement);
  }

  flip() : void {
    if(this.isFlipped || this.isFound) return;
    this.isFlipped = true;
    this.element.classList.add("flipped");
    this.imgElement.src = this.value; // affiche la bonne image 
  }
 
  hide(): void {
    this.isFlipped = false;
    this.element.classList.remove("flipped");
    this.imgElement.src = "assets/card_back/card_back_arcane.png"; //on affiche le dos de la carte
  } 
  
  markAsFound(): void {
    this.isFound = true;
    this.element.classList.add('found');
  }
}
