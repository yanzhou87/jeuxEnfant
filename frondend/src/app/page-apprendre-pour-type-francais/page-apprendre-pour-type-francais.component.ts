import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {ColorsRandomPrecedent} from "../outils/ColorsRandomButtonPrecedent";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";
import {ListChiffresEnFrancais} from "../outils/ListChiffresEnFrancais";
import {UtilisateurService} from "../services/services.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-apprendre-pour-type-francais',
  templateUrl: './page-apprendre-pour-type-francais.component.html',
  styleUrls: ['./page-apprendre-pour-type-francais.component.css']
})
export class PageApprendrePourTypeFrancaisComponent {
  monChiffresEnFrancais : ListChiffresEnFrancais = new ListChiffresEnFrancais();
  chiffreCourant = 0;
  chiffreCourantEnMot = "Zero";
  randomColorBackground: string = this.getRandomColorBackground();
  randomColorButtonPrecedent: string = this.getRandomColorButtonPrecedent();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();
  nombreMaxPourChiffreEnMot: number = 0;
  nombreMinPourChiffreEnMot: number = 0;
  erreurMaxPourChiffreEnMot : boolean = false;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    (async () => {
      try {
        await this.utilisateurService.getChiffreEnMot(this.nombreMaxPourChiffreEnMot,this.nombreMinPourChiffreEnMot);
        this.monChiffresEnFrancais.maListChiffreEnMot = await this.utilisateurService.getChiffreEnFrancais();
        console.log("app : "+this.monChiffresEnFrancais.maListChiffreEnMot)

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
      this.chiffreCourantEnMot = this.monChiffresEnFrancais.maListChiffreEnMot[this.chiffreCourant];
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }

  setChiffresProchain(){
    if(this.chiffreCourant != this.monChiffresEnFrancais.maListChiffreEnMot.length-1){
      this.chiffreCourant += 1 ;
      this.chiffreCourantEnMot = this.monChiffresEnFrancais.maListChiffreEnMot[this.chiffreCourant];
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }

  saveChangesPourChiffreEnMot() {
    if((this.nombreMaxPourChiffreEnMot < this.nombreMinPourChiffreEnMot) ||
      this.nombreMaxPourChiffreEnMot < 0 || this.nombreMinPourChiffreEnMot < 0) {
      console.log("avant erreur" + this.erreurMaxPourChiffreEnMot)
      this.erreurMaxPourChiffreEnMot = true;
      console.log(" erreur"+this.erreurMaxPourChiffreEnMot)
    }else {
      (async () => {
        try {
          await this.utilisateurService.getChiffreEnMot(this.nombreMaxPourChiffreEnMot,this.nombreMinPourChiffreEnMot);
          this.monChiffresEnFrancais.maListChiffreEnMot = this.utilisateurService.getChiffreEnFrancais();
          this.chiffreCourantEnMot = this.monChiffresEnFrancais.maListChiffreEnMot[0]
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }
}
