import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageprincipalComponent} from "./pageprincipal/pageprincipal.component";
import {PagemenuComponent} from "./pagemenu/pagemenu.component";

const routes: Routes = [
  { path: '', component: PageprincipalComponent, pathMatch:'full'},
  { path: 'menu', component: PagemenuComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
