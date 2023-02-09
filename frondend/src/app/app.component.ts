import { Component } from '@angular/core';
import {UtilisateurService} from "./services/services.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeux Enfant';

  constructor(private utilisateurService:UtilisateurService) {
  }
}
