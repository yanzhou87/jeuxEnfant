import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {ChoixDeType} from "../outils/choixDeType";
import {TypePrincipal} from "../outils/typePrincipal";
import {Observable} from "rxjs";
import {MonNombre} from "../outils/MonNombre";
import {Utilisateur} from "../outils/Utilisateur";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({providedIn: 'root'})
export class UtilisateurService {
  private apiServiceUrl = environment.apiBaseUrl;
  private typePrincipal : string = "";
  private typeDeChoix : string = "";
  private nombreMax : number = 0 ;
  private nombreMin : number = 0;
  private repondre : number = 0;
  constructor(private http: HttpClient, private router: Router) {

  }

  public setTypePrincipal(type : TypePrincipal):void{
    if(type){
      localStorage.setItem("TypePrincipal", type.toString());
    }

    this.http.put<string>(`${this.apiServiceUrl}/menu`, {
      type : type.toString()
    });
  }

  public setTypeDeChoix(type : ChoixDeType):void{
    if(type){
      localStorage.setItem("TypeDeChoix", type.toString());
    }
    this.http.get<string>(`${this.apiServiceUrl}/menu/${type.toString().toLowerCase()}`)
  }

  public getTypePrincipal():string{
    const typePrincipal = localStorage.getItem("TypePrincipal")
    if(typePrincipal){
       return  this.typePrincipal = typePrincipal;
    }
    return "";
  }

  public getTypeDeChoix():string{
    const typeDeChoix = localStorage.getItem("TypeDeChoix")
    if(typeDeChoix){
      return  this.typeDeChoix = typeDeChoix;
    }
    return "";
  }

  public getNombreMax():number{
    this.nombreMax = Number(localStorage.getItem("Max"));
    return this.nombreMax;
  }

  public getNombreMin():number{
    this.nombreMin = Number(localStorage.getItem("Min"));
    return this.nombreMin;
  }

  public changeNombre(nombreMax : number, nombreMin : number):Observable<MonNombre>{
    localStorage.setItem("Min", nombreMin.toString());
    localStorage.setItem("Max", nombreMax.toString());
   return  this.http.put<MonNombre>(`${this.apiServiceUrl}/nombre`, {
      max : nombreMax,
      min : nombreMin
    })
  }

  public getBonRepondre():void{
    this.http.get<Utilisateur>(`${this.apiServiceUrl}/repondre`).subscribe(
      {
        next: value => {
          localStorage.setItem("repondre", value.repondre.toString());
          this.repondre = Number(localStorage.getItem("repondre"));
        },
        error: err => {
          console.log("err : " + err)
        }
      }
    )
  }

  public getBonResultat():number{
    return this.repondre;
  }
}
