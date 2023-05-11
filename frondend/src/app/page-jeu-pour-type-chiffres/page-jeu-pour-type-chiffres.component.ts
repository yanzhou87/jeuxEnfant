import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {UtilisateurService} from "../services/services.component";
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

  myicon : string = ""

  resultat : boolean = false;

  constructor(private utilisateurService: UtilisateurService) {
    (async () => {
      try {
        this.bonRepondre = await this.utilisateurService.getBonRepondre();
        this.min = this.utilisateurService.getNombreMin();
        this.max = this.utilisateurService.getNombreMax();
        this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        this.myicon = this.utilisateurService.getIcon()
        this.choisirLesRepondses();
      } catch (err) {
        console.error(err);
      }
    })();
  }

  getRandomColorBackground(): string {
    let colorsBackground = Object.values(ColorsRandomBackground);
    let randomIndex = Math.floor(Math.random() * colorsBackground.length);
    return colorsBackground[randomIndex].valueOf().toString();
  }

  choisirLesRepondses(){
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
    } while (randomNumber == this.numbreRandom);
    return randomNumber;
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  getRandomColorButtonProchain(): string {
    let colorsProchain = Object.values(ColorsRandomProchain);
    let randomIndex = Math.floor(Math.random() * colorsProchain.length);
    return colorsProchain[randomIndex].valueOf().toString();
  }

  getRepondre(choix : number): void {

     if(this.bonRepondre == choix){
       (async () => {
         try {
           this.bonRepondre = await this.utilisateurService.getBonRepondre();
           this.resultat = true
           this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
           this.myicon = this.utilisateurService.getIcon()
           this.randomColorBackground = this.getRandomColorBackground();
           this.randomColorButtonProchain = this.getRandomColorButtonProchain();
           this.utilisateurService.setBonResultatDeTonChoix(true)
           this.choisirLesRepondses();
         } catch (err) {
           console.error(err);
         }
       })();
     } else {
       this.resultat = false
       this.utilisateurService.setBonResultatDeTonChoix(false)
     }
  }
}
