import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LieuDAtterrissage} from "../lieu-d-atterrissage/lieu-d-atterrissage";
import {LieuDAtterrissageService} from "src/app/nouveaute/lieu-d-atterrissage/lieu-d-atterrissage.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-lieu-d-atterrissage-details',
  templateUrl: './lieu-d-atterrissage-details.component.html',
  styleUrls: ['./lieu-d-atterrissage-details.component.scss']
})
export class LieuDAtterrissageDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  lieuDAtterrissageService = inject(LieuDAtterrissageService)
  lieuDAtterrissage: LieuDAtterrissage | undefined;
  /*lieuDAtterrissageId = -1*/

  constructor() {
    /*this.lieuDAtterrissageId = Number(this.route.snapshot.params['id']);*/
    const lieuDAtterrissageId = Number(this.route.snapshot.params['id']);
    this.lieuDAtterrissage = this.lieuDAtterrissageService.getLieuDAtterrissageById(lieuDAtterrissageId);
  }

  applyForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    this.lieuDAtterrissageService.submitApplication(
      this.applyForm.value.nom ?? '',
      this.applyForm.value.prenom ?? '',
      this.applyForm.value.email ?? ''
    )
  }

  protected readonly name = name;
}
