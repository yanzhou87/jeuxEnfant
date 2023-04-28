import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";
import {ListChiffresEnFrancais} from "../outils/ListChiffresEnFrancais";
import {max} from "rxjs";

@Component({
  selector: 'app-page-jeu-pour-type-francais',
  templateUrl: './page-jeu-pour-type-francais.component.html',
  styleUrls: ['./page-jeu-pour-type-francais.component.css']
})
export class PageJeuPourTypeFrancaisComponent {

  randomColorBackground: string = this.getRandomColorBackground();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();

  mot : string = '';
  numbreRandom : number = 0;
  max : number = 21;
  min : number = 0;

  bonRepondre : number = 0;
  nbRandomPourCard1: number = 0;
  nbRandomPourCard2: number = 0;
  nbRandomPourCard3: number = 0;

  myicon : string = ""

  resultat : boolean = false;

  listMots : ListChiffresEnFrancais = new ListChiffresEnFrancais()

  constructor(private utilisateurService: UtilisateurService) {
    (async () => {
      try {
        this.bonRepondre = await this.utilisateurService.getBonRepondre();
        console.log("bonRepondre :" + this.bonRepondre)
        this.min = utilisateurService.getNombreMinEnMot()
        this.max = utilisateurService.getNombreMaxEnMot()
        this.listMots = await utilisateurService.getChiffreEnMot(this.max,this.min)
        console.log("listMots : " + this.listMots.maListChiffreEnMot)
        this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        console.log("Random : " + this.numbreRandom)
        this.mot = this.listMots.maListChiffreEnMot[this.numbreRandom-1]
        console.log("mot : " + this.mot)
        console.log("max111 : " + this.max + " : " + this.min)
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
    console.log("choisirLesRepondses"+this.bonRepondre)
    console.log("max : "+this.max)
    if (this.bonRepondre == 1){
      this.nbRandomPourCard1 = this.numbreRandom
      this.nbRandomPourCard2 = this.nbFaux()
      this.nbRandomPourCard3 = this.nbFaux()
      while (this.nbRandomPourCard3 == this.nbRandomPourCard2){
        this.nbRandomPourCard3 = this.nbFaux()
      }
    }
    if (this.bonRepondre == 2){
      this.nbRandomPourCard1 = this.nbFaux()
      this.nbRandomPourCard2 = this.numbreRandom
      this.nbRandomPourCard3 = this.nbFaux()
      while (this.nbRandomPourCard1 == this.nbRandomPourCard3){
        this.nbRandomPourCard3 = this.nbFaux()
      }
    }
    if (this.bonRepondre == 3){
      this.nbRandomPourCard1 = this.nbFaux()
      this.nbRandomPourCard2 = this.nbFaux()
      this.nbRandomPourCard3 = this.numbreRandom
      while (this.nbRandomPourCard1 == this.nbRandomPourCard2){
        this.nbRandomPourCard2 = this.nbFaux()
      }
    }
    console.log("choisirLesRepondses"+this.bonRepondre)
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
          console.log("bonRepondre :" + this.bonRepondre)
          this.resultat = true
          console.log("listMots : " + this.listMots.maListChiffreEnMot)
          this.numbreRandom = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
          this.mot = this.listMots.maListChiffreEnMot[this.numbreRandom-1]
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
