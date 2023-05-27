import { Component } from '@angular/core';
import {LieuDAtterrissage} from "./lieu-d-atterrissage/lieu-d-atterrissage";

@Component({
  selector: 'app-nouveaute',
  templateUrl: './nouveaute.component.html',
  styleUrls: ['./nouveaute.component.scss']
})
export class NouveauteComponent {
  lieuDAtterrissageList: LieuDAtterrissage[] = [
    {
      id: 1,
      name: 'Capsule',
      city: 'Appolo 11',
      state: 'ST',
      photo: 'assets/space-capsule-516048_1280.jpg',
      availableUnits: 88,
      wifi: true,
      laundry: true,
    },
    {
      id: 3,
      name: 'Scaphandre',
      city: 'Appolo 11',
      state: 'ST',
      photo: 'assets/astronaut-11080_1280.jpg',
      availableUnits: 18,
      wifi: true,
      laundry: true,
    },
    {
      id: 4,
      name: 'Navette',
      city: 'Appolo 11',
      state: 'ST',
      photo: 'assets/rocket-launch-67721_1280.jpg',
      availableUnits: 13,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'Propergol',
      city: 'Appolo 11',
      state: 'ST',
      photo: 'assets/kazakhstan-189927_1280.jpg',
      availableUnits: 88,
      wifi: true,
      laundry: true,
    }
  ];
}
