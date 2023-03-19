import { Component } from '@angular/core';
import {UtilisateurService} from "../services/services.component";
import {NavigationEnd, Router} from "@angular/router";
import {ColorsRandomProchain} from "../outils/ColorsRandomButtonProchain";
import {filter} from "rxjs";

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent {

  nombreMin : number = 0;
  nombreMax : number = 0;
  erreurMax : boolean = false;
  randomColorButtonProchain: string = this.getRandomColorButtonProchain();

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        // 执行自动刷新逻辑
        location.reload();
      });
  }

  getRandomColorButtonProchain(): string {
    let colorsProchain = Object.values(ColorsRandomProchain);
    let randomIndex = Math.floor(Math.random() * colorsProchain.length);
    return colorsProchain[randomIndex].valueOf().toString();
  }

  saveChanges() {
    console.log(this.erreurMax)
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
