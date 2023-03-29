import { Component } from '@angular/core';
import {ColorsRandomBackground} from "../outils/ColorsRandomBackground";
import {UtilisateurService} from "../services/services.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent {
  randomColorBackground: string = this.getRandomColorBackground();
  reussi : boolean = false;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
   this.reussi = utilisateurService.getBonResultatDeTonChoix()
  }

  getRandomColorBackground(): string {
    let colorsBackground = Object.values(ColorsRandomBackground);
    let randomIndex = Math.floor(Math.random() * colorsBackground.length);
    return colorsBackground[randomIndex].valueOf().toString();
  }

  changePage(){
    this.utilisateurService.setEstAfficheResultat(false)
  }
}
