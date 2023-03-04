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
    this.type = utilisateurService.getTypePrincipal()
  }

  setTypeDeChoix(type : TypeDeChoix ){
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
