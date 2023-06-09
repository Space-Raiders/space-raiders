import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  planetName = "api";

  constructor(private api: ConfigService) {

  }
  ngOnInit() {
    this.api.apiCall().subscribe((data: any) => {
      console.warn("get api data", data);
      this.planetName = data['id = 2295434']
    })
  }
}
