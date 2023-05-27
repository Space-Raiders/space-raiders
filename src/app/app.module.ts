import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NouveauteComponent } from './nouveaute/nouveaute.component';
import { BestdestinationsComponent } from './bestdestinations/bestdestinations.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuDAtterrissageComponent } from './nouveaute/lieu-d-atterrissage/lieu-d-atterrissage.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveauteComponent,
    BestdestinationsComponent,
    InscriptionComponent,
    LieuDAtterrissageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
