import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrixComponent } from './prix/prix.component';
import { ApiComponent } from './api/api.component';
import { FooterComponent } from './footer/footer.component';

import { NouveauteComponent } from './nouveaute/nouveaute.component';
import { BestdestinationsComponent } from './bestdestinations/bestdestinations.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuDAtterrissageComponent } from './nouveaute/lieu-d-atterrissage/lieu-d-atterrissage.component';
import { LieuDAtterrissageDetailsComponent } from './nouveaute/lieu-d-atterrissage-details/lieu-d-atterrissage-details.component';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,

    PrixComponent,
    ApiComponent,
    FooterComponent

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
