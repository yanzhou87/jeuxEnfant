import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {Typeprincipal} from "../outils/typeprincipal";

@Component({
  selector: 'app-pageprincipal',
  templateUrl: './pageprincipal.component.html',
  styleUrls: ['./pageprincipal.component.css']
})
export class PageprincipalComponent {

  typeFrancais : Typeprincipal = Typeprincipal.FRANCAIS;
  typeChiffres : Typeprincipal = Typeprincipal.CHIFFRES;

  constructor(private utilisateurService: UtilisateurService) {

  }

  setTypePrincipal(type : Typeprincipal){
    this.utilisateurService.setTypePrincipal(type);
  }
}
