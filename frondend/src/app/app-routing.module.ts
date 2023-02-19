import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageprincipalComponent} from "./pageprincipal/pageprincipal.component";
import {PagemenuComponent} from "./pagemenu/pagemenu.component";
import {
  PageApprendrePourTypeChiffresComponent
} from "./page-apprendre-pour-type-chiffres/page-apprendre-pour-type-chiffres.component";

const routes: Routes = [
  { path: '', component: PageprincipalComponent, pathMatch:'full'},
  { path: 'menu', component: PagemenuComponent},
  { path: 'apprendre', component: PageApprendrePourTypeChiffresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
