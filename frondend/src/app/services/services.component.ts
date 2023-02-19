import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {TypeDeChoix} from "../outils/typedechoix";

@Injectable({providedIn: 'root'})
export class UtilisateurService {
  private apiServiceUrl = environment.apiBaseUrl;
  private type : string = "";

  constructor(private http: HttpClient, private router: Router) {

  }

  public setType(type : TypeDeChoix):void{
    if(type){
      localStorage.setItem("typeDeChoix", type.toString());
    }
    this.http.get<string>(`${this.apiServiceUrl}/menu/${type.toString().toLowerCase()}`)
  }

  public getType():string{
    const typeDeChoix = localStorage.getItem("typeDeChoix")
    if(typeDeChoix){
       return  this.type = typeDeChoix;
    }
    return "";
  }
}
