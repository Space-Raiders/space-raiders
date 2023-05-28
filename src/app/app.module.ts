import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NouveauteComponent } from './nouveaute/nouveaute.component';
import { BestdestinationsComponent } from './bestdestinations/bestdestinations.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuDAtterrissageComponent } from './nouveaute/lieu-d-atterrissage/lieu-d-atterrissage.component';
import { LieuDAtterrissageDetailsComponent } from './nouveaute/lieu-d-atterrissage-details/lieu-d-atterrissage-details.component';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NouveauteComponent,
    BestdestinationsComponent,
    InscriptionComponent,
    LieuDAtterrissageComponent,
    LieuDAtterrissageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
