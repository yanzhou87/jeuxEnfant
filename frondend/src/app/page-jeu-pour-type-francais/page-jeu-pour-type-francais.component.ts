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

  mot : string = 'Zero';
  numbreRandom : number = 0;
  max : number = 0;
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
        this.min = await utilisateurService.getNombreMinEnMot()
        this.max = await utilisateurService.getNombreMaxEnMot()
        this.listMots = await utilisateurService.getChiffreEnMot(this.max,this.min)
        if (this.listMots.maListChiffreEnMot.length == 0 && this.min == 0){
          this.numbreRandom = await Math.floor(Math.random() * (this.listMots.maListChiffreEnMot.length - this.min + 1) + this.min);
        } else{
          this.numbreRandom = await Math.floor(Math.random() * (this.listMots.maListChiffreEnMot.length - 1 - this.min + 1) + this.min);
        }
        this.mot = await this.listMots.maListChiffreEnMot[this.numbreRandom]
        this.myicon = await this.utilisateurService.getIcon()
        await this.choisirLesRepondses();
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
  }
  nbFaux() : number{
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (this.listMots.maListChiffreEnMot.length - this.min + 1) + this.min);
        console.log("randomNumber dans nbFaux: " + randomNumber)
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
          if (this.listMots.maListChiffreEnMot.length == 0 && this.min == 0){
            this.numbreRandom = await Math.floor(Math.random() * (this.listMots.maListChiffreEnMot.length - this.min + 1) + this.min);
          } else{
            this.numbreRandom = await Math.floor(Math.random() * (this.listMots.maListChiffreEnMot.length - 1 - this.min + 1) + this.min);
          }
          this.mot = this.listMots.maListChiffreEnMot[this.numbreRandom]
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
