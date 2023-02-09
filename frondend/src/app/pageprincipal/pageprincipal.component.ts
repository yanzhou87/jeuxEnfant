import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";

@Component({
  selector: 'app-pageprincipal',
  templateUrl: './pageprincipal.component.html',
  styleUrls: ['./pageprincipal.component.css']
})
export class PageprincipalComponent {

  constructor(private utilisateurService: UtilisateurService) {

  }

  setTypeChiffres(){
    this.utilisateurService.setType();
  }

  setTypeFrancais(){
    this.utilisateurService.setTypeFrancais();
  }
}
