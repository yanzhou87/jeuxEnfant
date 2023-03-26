import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";

@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent {
  randomColorBackground: string = this.getRandomColorBackground();
  reussi : boolean = false;
  pasreussi : boolean = false;

  getRandomColorBackground(): string {
    let colorsBackground = Object.values(ColorsRandomBackground);
    let randomIndex = Math.floor(Math.random() * colorsBackground.length);
    return colorsBackground[randomIndex].valueOf().toString();
  }
}
