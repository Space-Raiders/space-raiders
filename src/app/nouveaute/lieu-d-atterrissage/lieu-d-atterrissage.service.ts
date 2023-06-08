import {Injectable} from "@angular/core";
import {LieuDAtterrissage} from "src/app/nouveaute/lieu-d-atterrissage/lieu-d-atterrissage";

@Injectable({
  providedIn: 'root'
})
export class LieuDAtterrissageService {
  lieuDAtterrissageList: LieuDAtterrissage[] = [
    {
      id: 1,
      name: "Premier pat sur la lune",
      city: "Appolo 11",
      state: 'Mer de tranquillité - USA',
      photo: 'assets/images/astronaut-11080.jpg',
      availableUnits: 405500,
      wifi: 3500000,
      laundry: "Premium - 2600000 € | Business - 1600000 € | Economy - Inclus",
    },
    {
      id: 2,
      name: 'La sonde soviétique',
      city: 'Luna 9',
      state: 'Mer des tempêtes - URSS',
      photo: 'assets/images/pexels-pixabay-41006.jpg',
      availableUnits:  384400,
      wifi: 2500000,
      laundry: "Premium - 2500000 € | Business - 1500000 € | Economy - Inclus",
    },
    {
      id: 3,
      name: 'Mission chinoise',
      city: "Chang'e III",
      state: 'Mer des pluies - Chine',
      photo: 'assets/images/kazakhstan-189927_1280.jpg',
      availableUnits: 356410,
      wifi: 1500000,
      laundry: "Premium - 2400000 € | Business - 1400000 € | Economy - Inclus",
    },
    {
      id: 4,
      name: 'Visite complète',
      city: 'Space Raiders',
      state: 'Deux semaines - France',
      photo: 'assets/images/rocket-launch-67721_1280.jpg',
      availableUnits: 356410,
      wifi: 7500000,
      laundry: "Premium - 3500000 € | Business - 2500000 € | Economy - Inclus",
    }
  ];

  getAllLieuDAtterrissage(): LieuDAtterrissage[] {
    return this.lieuDAtterrissageList;
  }

  getLieuDAtterrissageById(id: number): LieuDAtterrissage | undefined {
    return this.lieuDAtterrissageList.find(lieuDAtterrissage => lieuDAtterrissage.id === id);
  }

  submitApplication(nom: string, prenom: string, email: string) {
    console.log(`Demande d'autorisation reçue : Nom ${nom}, Prénom : ${prenom}, email : ${email}`);
  }
}
