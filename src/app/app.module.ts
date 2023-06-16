import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NouveauteComponent } from './nouveaute/nouveaute.component';
import { BestdestinationsComponent } from './bestdestinations/bestdestinations.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuDAtterrissageComponent } from './nouveaute/lieu-d-atterrissage/lieu-d-atterrissage.component';
import { LieuDAtterrissageDetailsComponent } from './nouveaute/lieu-d-atterrissage-details/lieu-d-atterrissage-details.component';
import { NgOptimizedImage } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ModificationDeProfilComponent } from './inscription/modification-de-profil/modification-de-profil.component';
import { PrixComponent } from "./prix/prix.component";
import { ApiComponent } from "./api/api.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { ValidationReactiveComponent } from './inscription/validation-reactive/validation-reactive.component';
import { NgOptimizedImageDirective } from './-directives/ng-optimized-image.directive';
import { ImagesComponent } from './-directives/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveauteComponent,
    BestdestinationsComponent,
    InscriptionComponent,
    LieuDAtterrissageComponent,
    LieuDAtterrissageDetailsComponent,
    ModificationDeProfilComponent,
    ApiComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    NewsletterComponent,
    PrixComponent,
    ValidationReactiveComponent,
    NgOptimizedImageDirective,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
