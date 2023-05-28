import {Component, Input} from '@angular/core';
import {LieuDAtterrissage} from "./lieu-d-atterrissage";

@Component({
  selector: 'app-lieu-d-atterrissage',
  templateUrl: './lieu-d-atterrissage.component.html',
  styleUrls: ['./lieu-d-atterrissage.component.scss']
})
export class LieuDAtterrissageComponent {
  @Input () lieuDAtterrissage!: LieuDAtterrissage;
}

