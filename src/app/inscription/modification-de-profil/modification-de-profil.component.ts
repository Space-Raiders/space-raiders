import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modification-de-profil',
  templateUrl: './modification-de-profil.component.html',
  styleUrls: ['./modification-de-profil.component.scss']
})
export class ModificationDeProfilComponent {
  profilForm = this.modelePratiquePourGenererDesModeles.group({
    nom : ['', Validators.required],
    prenom : ['', Validators.required],
    adresse : this.modelePratiquePourGenererDesModeles.group({
      adresse : ['', Validators.required],
      commune: ['', Validators.required],
      pays : ['', Validators.required],
      codePostal : ['', Validators.required],
    }),
    aliases: this.modelePratiquePourGenererDesModeles.array([
      this.modelePratiquePourGenererDesModeles.control('')
    ])
  });

  get aliases() {
    return this.profilForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.modelePratiquePourGenererDesModeles.control(''));
  }

  onSubmit() {
    console.warn(this.profilForm.value);
  }

  updateProfil() {
    this.profilForm.patchValue({
      nom: 'dadou - franck - mohammed',
      prenom: 'dadou',
      adresse: {
        adresse: ' 39 rue pajol',
        commune: 'paris',
        pays: 'france',
        codePostal: '75018',
      }
    })
  }

  protected readonly onsubmit = onsubmit;

  constructor(private modelePratiquePourGenererDesModeles: FormBuilder) {
  }
}
