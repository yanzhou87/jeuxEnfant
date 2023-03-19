import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {TypePrincipal} from "../outils/typePrincipal";

@Component({
  selector: 'app-pageprincipal',
  templateUrl: './pageprincipal.component.html',
  styleUrls: ['./pageprincipal.component.css']
})
export class PageprincipalComponent {

  typeFrancais : TypePrincipal = TypePrincipal.FRANCAIS;
  typeChiffres : TypePrincipal = TypePrincipal.CHIFFRES;

  constructor(private utilisateurService: UtilisateurService) {

  }

  setTypePrincipal(type : TypePrincipal){
    this.utilisateurService.setTypePrincipal(type);
  }
}
