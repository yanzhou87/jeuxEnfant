import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {ColorsRandomPrecedent} from "../outils/ColorsRandomButtonPrecedent";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";
import {UtilisateurService} from "../services/services.component";

@Component({
  selector: 'app-page-apprendre-pour-type-francais',
  templateUrl: './page-apprendre-pour-type-francais.component.html',
  styleUrls: ['./page-apprendre-pour-type-francais.component.css']
})
export class PageApprendrePourTypeFrancaisComponent {
  chiffresEnFrancais = ["Un","Deux","Trois","Quatre","Cinq","Six","Sept","Huit","Neuf","Dix"];
  chiffreCourant = 0;
  chiffreCourantEnMot = "Un";
  randomColorBackground: string = this.getRandomColorBackground();
  randomColorButtonPrecedent: string = this.getRandomColorButtonPrecedent();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();

  constructor(private utilisateurService: UtilisateurService) {

  }

  getRandomColorBackground(): string {
    let colorsBackground = Object.values(ColorsRandomBackground);
    let randomIndex = Math.floor(Math.random() * colorsBackground.length);
    return colorsBackground[randomIndex].valueOf().toString();
  }

  getRandomColorButtonPrecedent(): string {
    let colorsPrecedent = Object.values(ColorsRandomPrecedent);
    let randomIndex = Math.floor(Math.random() * colorsPrecedent.length);
    return colorsPrecedent[randomIndex].valueOf().toString();
  }

  getRandomColorButtonProchain(): string {
    let colorsProchain = Object.values(ColorsRandomProchain);
    let randomIndex = Math.floor(Math.random() * colorsProchain.length);
    return colorsProchain[randomIndex].valueOf().toString();
  }

  setChiffresPrecedent(){
    if(this.chiffreCourant != 0){
      this.chiffreCourant -= 1 ;
      this.chiffreCourantEnMot = this.chiffresEnFrancais[this.chiffreCourant];
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }

  setChiffresProchain(){
    if(this.chiffreCourant != 9){
      this.chiffreCourant += 1 ;
      this.chiffreCourantEnMot = this.chiffresEnFrancais[this.chiffreCourant];
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }
}
