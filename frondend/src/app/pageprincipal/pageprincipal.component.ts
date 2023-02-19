import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {TypeDeChoix} from "../outils/typedechoix";

@Component({
  selector: 'app-pageprincipal',
  templateUrl: './pageprincipal.component.html',
  styleUrls: ['./pageprincipal.component.css']
})
export class PageprincipalComponent {

  typeFrancais : TypeDeChoix = TypeDeChoix.FRANCAIS;
  typeChiffres : TypeDeChoix = TypeDeChoix.CHIFFRES;

  constructor(private utilisateurService: UtilisateurService) {

  }

  setType(type : TypeDeChoix){
    this.utilisateurService.setType(type);
  }
}
