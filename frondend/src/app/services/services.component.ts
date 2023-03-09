import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {TypeDeChoix} from "../outils/typedechoix";
import {Typeprincipal} from "../outils/typeprincipal";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UtilisateurService {
  private apiServiceUrl = environment.apiBaseUrl;
  private typePrincipal : string = "";
  private typeDeChoix : string = "";
  private nombreMax : number = 0 ;
  private nombreMin : number = 0;

  constructor(private http: HttpClient, private router: Router) {

  }

  public setTypePrincipal(type : Typeprincipal):void{
    if(type){
      localStorage.setItem("TypePrincipal", type.toString());
    }

    this.http.put<string>(`${this.apiServiceUrl}/menu`, {
      type : type.toString()
    });
  }

  public setTypeDeChoix(type : TypeDeChoix):void{
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

  public setNombreMax():void{
    this.http.get<number>(`${this.apiServiceUrl}/max`).subscribe(
      {
        next:value =>{
          localStorage.setItem("Max", value.toString());
          this.nombreMax = value
        }
      }
    )
  }

  public getNombreMax():number{
    this.setNombreMax()
    this.nombreMax = Number(localStorage.getItem("Max"));
    return this.nombreMax;
  }

  public setNombreMin():void{
    this.http.get<number>(`${this.apiServiceUrl}/min`).subscribe(
      {
        next:value =>{
          localStorage.setItem("Min", value.toString());
          this.nombreMin = value
        }
      }
    )
  }

  public getNombreMin():number{
    this.setNombreMin()
    this.nombreMin = Number(localStorage.getItem("Min"));
    return this.nombreMin;
  }
}
