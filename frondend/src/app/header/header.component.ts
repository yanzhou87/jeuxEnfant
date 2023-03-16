import { Component } from '@angular/core';
import {ColorsRandomPrecedent} from "../outils/ColorsRandomButtonPrecedent";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";
import {UtilisateurService} from "../services/services.component";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  randomColorButtonPrecedent: string = this.getRandomColorButtonPrecedent();
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();

  nombreMin : number = 0;
  nombreMax : number = 0;

  typePrincipe: string = ""
  erreurMax : boolean = false;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    this.typePrincipe = this.utilisateurService.getTypePrincipal();
  }
  getRandomColorButtonPrecedent(): string {
    let colorsPrecedent = Object.values(ColorsRandomPrecedent);
    let randomIndex = Math.floor(Math.random() * colorsPrecedent.length);
    return colorsPrecedent[randomIndex].valueOf().toString();
  }

  getRandomColorButtonProchain(): string {
    let colorsProchain = Object.values(ColorsRandomProchain);
    let randomIndex = Math.floor(Math.random() * colorsProchain.length);
    return colorsProchain[randomIndex].valueOf().toString();
  }

  saveChanges() {
    console.log(this.erreurMax)
    this.router.navigateByUrl('/apprendreavecletypechiffres');
    if(this.nombreMax < this.nombreMin) {
      this.erreurMax = true;
      console.log(this.erreurMax)
    }else {
      this.utilisateurService.changeNombre(this.nombreMax,this.nombreMin).subscribe({
          next: value => {
            this.nombreMax = value.max
            this.nombreMin = value.min
          }
        }
      );
    }
  }
}
