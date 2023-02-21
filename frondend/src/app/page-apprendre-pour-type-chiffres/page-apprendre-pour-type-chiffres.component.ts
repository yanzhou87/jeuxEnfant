import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {ColorsRandomPrecedent} from "../outils/ColorsRandomButtonPrecedent";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";

@Component({
  selector: 'app-page-apprendre-pour-type-chiffres',
  templateUrl: './page-apprendre-pour-type-chiffres.component.html',
  styleUrls: ['./page-apprendre-pour-type-chiffres.component.css']
})
export class PageApprendrePourTypeChiffresComponent {

  chiffers: number = 0;
  randomColorBackground: string = this.getRandomColorBackground();
  randomColorButtonPrecedent: string = this.getRandomColorButtonPrecedent();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();

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
    if(this.chiffers != 0){
      this.chiffers -= 1;
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }

  setChiffresProchain(){
    if(this.chiffers != 10){
      this.chiffers += 1;
      this.randomColorBackground = this.getRandomColorBackground();
    }
  }
}
