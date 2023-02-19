import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {TypeDeChoix} from "../outils/typedechoix";

@Component({
  selector: 'app-pagemenu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.css']
})
export class PagemenuComponent {

  type : string = "";
  typeApprendre : TypeDeChoix = TypeDeChoix.APPRENDRE;
  typeJeux : TypeDeChoix = TypeDeChoix.JEUX;
  typeDefaut : TypeDeChoix = TypeDeChoix.DEFAUT;

  constructor(private utilisateurService: UtilisateurService) {

  }

  setType(type : TypeDeChoix ){
    this.utilisateurService.setType(type);
    this.getType()
  }

  getType(){
    this.type = this.utilisateurService.getType()
  }
}
