import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class UtilisateurService {
  private apiServiceUrl = environment.apiBaseUrl;
  private type = localStorage.getItem("type")

  constructor(private http: HttpClient, private router: Router) {

  }

  public setType():void{
    this.http.get<string>(`${this.apiServiceUrl}/chiffres`).subscribe(
      {
        next: type => {
          if(type){
            localStorage.setItem("type", type);
          }
        }
      }
    );
  }

  public setTypeFrancais():void{
    this.http.get<string>(`${this.apiServiceUrl}/francais`).subscribe(
      {
        next: type => {
          if(type){
            localStorage.setItem("type", type);
          }
        }
      }
    );
  }

  public getType():string{
    if(this.type == null){
      return "";
    }
    return this.type;
  }
}
