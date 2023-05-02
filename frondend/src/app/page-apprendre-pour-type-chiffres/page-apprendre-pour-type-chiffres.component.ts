import {Component, OnInit} from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {ColorsRandomPrecedent} from "../outils/ColorsRandomButtonPrecedent";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";
import {UtilisateurService} from "../services/services.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-apprendre-pour-type-chiffres',
  templateUrl: './page-apprendre-pour-type-chiffres.component.html',
  styleUrls: ['./page-apprendre-pour-type-chiffres.component.css']
})
export class PageApprendrePourTypeChiffresComponent implements OnInit {

  randomColorBackground: string = this.getRandomColorBackground();
  randomColorButtonPrecedent: string = this.getRandomColorButtonPrecedent();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();
  nombreMax: number;
  nombreMin: number;
  chiffers: number = 0;
  erreurMax : boolean = false;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
       this.nombreMax = utilisateurService.getNombreMax();
       this.nombreMin = utilisateurService.getNombreMin();
       this.chiffers = this.nombreMin
  }

  ngOnInit() {
    this.erreurMax = false;
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
    if(this.chiffers != this.nombreMin){
      this.chiffers -= 1;
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }

  setChiffresProchain(){
    if(this.chiffers != this.nombreMax){
      this.chiffers += 1;
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }

  saveChanges() {
    if(this.nombreMax < this.nombreMin) {
      this.erreurMax = true;
    }else {
      this.utilisateurService.changeNombre(this.nombreMax,this.nombreMin).subscribe({
          next: value => {
            this.nombreMax = value.max
            this.nombreMin = value.min
            this.chiffers = value.min
            this.erreurMax = false;
          }
        }
      );
    }
  }
}
