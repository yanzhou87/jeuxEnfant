import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageprincipalComponent} from "./pageprincipal/pageprincipal.component";

const routes: Routes = [
  { path: '', component: PageprincipalComponent, pathMatch:'full'},
  { path: 'chiffres', component: PageprincipalComponent, pathMatch:'full'},
  { path: 'francais', component: PageprincipalComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
