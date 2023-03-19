import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {UtilisateurService} from "../services/services.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-jeu-pour-type-chiffres',
  templateUrl: './page-jeu-pour-type-chiffres.component.html',
  styleUrls: ['./page-jeu-pour-type-chiffres.component.css']
})
export class PageJeuPourTypeChiffresComponent {

  randomColorBackground: string = this.getRandomColorBackground();

  numbreRandom : number = 0;
  max : number = 0;
  min : number = 0;

  bonRepondre : number = 0;
  nbRandomPourCard1: number = 0;
  nbRandomPourCard2: number = 0;
  nbRandomPourCard3: number = 0;

  constructor(private utilisateurService: UtilisateurService) {
    utilisateurService.getBonRepondre();
    this.bonRepondre = utilisateurService.getBonResultat()
    this.min = utilisateurService.getNombreMin();
    this.max = utilisateurService.getNombreMax();
    this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.choisirLesRepondses()
  }

  getRandomColorBackground(): string {
    let colorsBackground = Object.values(ColorsRandomBackground);
    let randomIndex = Math.floor(Math.random() * colorsBackground.length);
    return colorsBackground[randomIndex].valueOf().toString();
  }

  choisirLesRepondses(){
    console.log(this.bonRepondre)
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
    return Math.floor(Math.random() * (this.max + 10 - this.max + 1) + this.max);
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
}
