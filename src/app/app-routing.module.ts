import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NouveauteComponent} from "src/app/nouveaute/nouveaute.component";
import {
  LieuDAtterrissageDetailsComponent
} from "src/app/nouveaute/lieu-d-atterrissage-details/lieu-d-atterrissage-details.component";

const routes: Routes = [
  {
    path: '',
    component: NouveauteComponent,
    title: 'Nouveauté'
  },
  {
    path: 'details/:id',
    component: LieuDAtterrissageDetailsComponent,
    title: 'Détails'
  }
];

export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
