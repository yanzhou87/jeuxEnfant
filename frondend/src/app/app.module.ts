import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageprincipalComponent } from './pageprincipal/pageprincipal.component';
import { UtilisateurService } from './services/services.component';
import { HttpClientModule } from "@angular/common/http";
import { PagemenuComponent } from './pagemenu/pagemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageprincipalComponent,
    PagemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
