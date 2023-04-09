import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageprincipalComponent} from "./pageprincipal/pageprincipal.component";
import {PagemenuComponent} from "./pagemenu/pagemenu.component";
import {
  PageApprendrePourTypeChiffresComponent
} from "./page-apprendre-pour-type-chiffres/page-apprendre-pour-type-chiffres.component";
import {
  PageApprendrePourTypeFrancaisComponent
} from "./page-apprendre-pour-type-francais/page-apprendre-pour-type-francais.component";
import {PageJeuPourTypeChiffresComponent} from "./page-jeu-pour-type-chiffres/page-jeu-pour-type-chiffres.component";
import {PageJeuPourTypeFrancaisComponent} from "./page-jeu-pour-type-francais/page-jeu-pour-type-francais.component";

const routes: Routes = [
  { path: '', component: PageprincipalComponent, pathMatch:'full'},
  { path: 'menu', component: PagemenuComponent},
  { path: 'apprendreavecletypechiffres', component: PageApprendrePourTypeChiffresComponent},
  { path: 'apprendreavecletypefrancais', component: PageApprendrePourTypeFrancaisComponent},
  { path: 'jeuavecletypechiffres', component: PageJeuPourTypeChiffresComponent},
  { path: 'jeuavecletypefrancais', component: PageJeuPourTypeFrancaisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
