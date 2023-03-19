import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageprincipalComponent } from './pageprincipal/pageprincipal.component';
import { UtilisateurService } from './services/services.component';
import { HttpClientModule } from "@angular/common/http";
import { PagemenuComponent } from './pagemenu/pagemenu.component';
import { PageApprendrePourTypeChiffresComponent } from './page-apprendre-pour-type-chiffres/page-apprendre-pour-type-chiffres.component';
import { PageApprendrePourTypeFrancaisComponent } from './page-apprendre-pour-type-francais/page-apprendre-pour-type-francais.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PageprincipalComponent,
    PagemenuComponent,
    PageApprendrePourTypeChiffresComponent,
    PageApprendrePourTypeFrancaisComponent,
    HeaderComponent,
    MyModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
