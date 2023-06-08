import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  Inscription = new FormControl
  updateInscription() {
    this.Inscription.setValue("Dadou - Franck - Mohammed");
  }
}
