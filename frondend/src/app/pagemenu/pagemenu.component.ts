import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";

@Component({
  selector: 'app-pagemenu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.css']
})
export class PagemenuComponent {

  type : string = "";
  constructor(private utilisateurService: UtilisateurService) {

  }

  setType(type : string){
    this.utilisateurService.setType(type);
    this.getType()
  }

  getType(){
    this.type = this.utilisateurService.getType()
  }
}
