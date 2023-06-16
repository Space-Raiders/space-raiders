import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LieuDAtterrissage} from "../../-interfaces/lieu-d-atterrissage";
import {LieuDAtterrissageService} from "src/app/-services/lieu-d-atterrissage.service";
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
    nomEtPrenom: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    motDePasse: new FormControl('', {nonNullable: true})
  });

  submitApplication() {
    this.lieuDAtterrissageService.submitApplication(
      this.applyForm.value.nomEtPrenom ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.motDePasse ?? ''
    )
  }

  protected readonly name = name;
}
