import {Component, inject} from '@angular/core';
import {LieuDAtterrissage} from "./lieu-d-atterrissage/lieu-d-atterrissage";
import {LieuDAtterrissageService} from "./lieu-d-atterrissage/lieu-d-atterrissage.service";

@Component({
  selector: 'app-nouveaute',
  templateUrl: './nouveaute.component.html',
  styleUrls: ['./nouveaute.component.scss']
})

export class NouveauteComponent {
  lieuDAtterrissageList: LieuDAtterrissage[] = [];
  lieuDAtterrissageService: LieuDAtterrissageService = inject(LieuDAtterrissageService);
  filtrerLieuDAtterrissageList: LieuDAtterrissage[] = [];

  constructor() {
    this.lieuDAtterrissageList = this.lieuDAtterrissageService.getAllLieuDAtterrissage();
    this.filtrerLieuDAtterrissageList = this.lieuDAtterrissageList;
  }

  filtrerResultats(text: string) {
    if (!text) {
      this.filtrerLieuDAtterrissageList = this.lieuDAtterrissageList;
    }

    this.filtrerLieuDAtterrissageList = this.lieuDAtterrissageList.filter(
      lieuDAtterrissage => lieuDAtterrissage?.state.toLowerCase().includes(text.toLowerCase())
    );
  }
}
