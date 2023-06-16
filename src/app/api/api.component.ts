import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';
// import { ConfigService } from '../config.service';

interface Body {
  englishName: string;
  // Add other properties as needed
}

interface Response {
  bodies: Body[];
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  planetDetails: any;
  planetName = '';


  constructor(private solarSystemService: ConfigService) { }

  searchPlanet(): void {
    this.solarSystemService.getPlanetDetails(this.planetName).subscribe(
      (data) => {
        this.planetDetails = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  /////////////////////////////////
}


// import { Component } from '@angular/core';
// import { ConfigService } from '../config.service';
// import { ApiContent } from '../api-content';


// @Component({
//   selector: 'app-api',
//   templateUrl: './api.component.html',
//   styleUrls: ['./api.component.scss']
// })
// export class ApiComponent {
//   planetName = "api";


//   constructor(private api: ConfigService) {


//   }


//   lstApiContent: ApiContent[] | undefined;


//   ngOnInit() {
//     this.api.apiCall().subscribe((data: any) => {
//       this.lstApiContent = data;
//     })
//   }
// }


// // ngOnInit() {
// //   this.api.apiCall().subscribe((data: any) => {
// //     this.lstApiContent = data;
// //   })
// // }



