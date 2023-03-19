import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {ChoixDeType} from "../outils/choixDeType";

@Component({
  selector: 'app-pagemenu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.css']
})
export class PagemenuComponent {

  type : string = "";
  typeApprendre : ChoixDeType = ChoixDeType.APPRENDRE;
  typeJeux : ChoixDeType = ChoixDeType.JEUX;
  typeDefaut : ChoixDeType = ChoixDeType.DEFAUT;

  constructor(private utilisateurService: UtilisateurService) {
    this.type = utilisateurService.getTypePrincipal()
  }

  setTypeDeChoix(type : ChoixDeType ){
    this.utilisateurService.setTypeDeChoix(type);
    this.getType()
  }

  getType(){
    this.type = this.utilisateurService.getTypeDeChoix();
  }

  estTypeChiffre() : boolean{
    if (this.type == "chiffres"){
      return true;
    }
    return false
  }

  estTypeFrancais() : boolean{
    if (this.type == "francais"){
      return true;
    }
    return false
  }
}
