import {MonNombre} from "./MonNombre";
import {ChoixDeType} from "./choixDeType";
import {TypePrincipal} from "./typePrincipal";

export class Utilisateur {
  choixDeType : ChoixDeType = ChoixDeType.DEFAUT
  typePrincipal : TypePrincipal = TypePrincipal.CHIFFRES
  nombre : MonNombre = {max : 0,min : 0};
  repondre : number = 0;
}

