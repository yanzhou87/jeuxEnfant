import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {UtilisateurService} from "../services/services.component";
import {IconsListe} from "../outils/iconsListe";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";

@Component({
  selector: 'app-page-jeu-pour-type-chiffres',
  templateUrl: './page-jeu-pour-type-chiffres.component.html',
  styleUrls: ['./page-jeu-pour-type-chiffres.component.css']
})
export class PageJeuPourTypeChiffresComponent {

  randomColorBackground: string = this.getRandomColorBackground();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();

  numbreRandom : number = 0;
  max : number = 0;
  min : number = 0;

  bonRepondre : number = 0;
  nbRandomPourCard1: number = 0;
  nbRandomPourCard2: number = 0;
  nbRandomPourCard3: number = 0;

  myicon : string = this.getIcon()

  resultat : boolean = false;

  constructor(private utilisateurService: UtilisateurService) {
    utilisateurService.getBonRepondre();
    this.bonRepondre = utilisateurService.getBonResultat()
    this.min = utilisateurService.getNombreMin();
    this.max = utilisateurService.getNombreMax();
    this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.choisirLesRepondses()
    console.log(this.myicon)
  }

  getRandomColorBackground(): string {
    let colorsBackground = Object.values(ColorsRandomBackground);
    let randomIndex = Math.floor(Math.random() * colorsBackground.length);
    return colorsBackground[randomIndex].valueOf().toString();
  }

  choisirLesRepondses(){
    console.log("choisirLesRepondses"+this.bonRepondre)
    if (this.bonRepondre == 1){
      this.nbRandomPourCard1 = this.numbreRandom
      this.nbRandomPourCard2 = this.nbFaux()
      this.nbRandomPourCard3 = this.nbFaux()
    }
    if (this.bonRepondre == 2){
      this.nbRandomPourCard1 = this.nbFaux()
      this.nbRandomPourCard2 = this.numbreRandom
      this.nbRandomPourCard3 = this.nbFaux()
    }
    if (this.bonRepondre == 3){
      this.nbRandomPourCard1 = this.nbFaux()
      this.nbRandomPourCard2 = this.nbFaux()
      this.nbRandomPourCard3 = this.numbreRandom
    }
  }
  nbFaux() : number{
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      console.log("randomNumber : "+randomNumber)
    } while (randomNumber == this.numbreRandom);
    return randomNumber;
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  getIcon(): string {
    let monIcon = Object.values(IconsListe);
    let randomIndex = Math.floor(Math.random() * monIcon.length);
    return monIcon[randomIndex].valueOf().toString();
  }

  getRandomColorButtonProchain(): string {
    let colorsProchain = Object.values(ColorsRandomProchain);
    let randomIndex = Math.floor(Math.random() * colorsProchain.length);
    return colorsProchain[randomIndex].valueOf().toString();
  }

  getRepondre(choix : number): void {
     if(this.bonRepondre == choix){
       this.resultat = true;
       this.bonRepondre = this.utilisateurService.getBonResultat()
       this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
       this.myicon = this.getIcon()
       this.randomColorBackground = this.getRandomColorBackground();
       this.randomColorButtonProchain = this.getRandomColorButtonProchain();
       this.choisirLesRepondses()
     } else {
       this.resultat = true;
     }
     console.log(this.resultat)
  }
}
