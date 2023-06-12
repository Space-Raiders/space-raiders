import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bestdestinations',
  templateUrl: './bestdestinations.component.html',
  styleUrls: ['./bestdestinations.component.scss']
})
export class BestdestinationsComponent {
  title = 'pixabay-app';
  API_KEY = '36745863-3668c0d43cabb91e96c01249b';
  // perPage = '4';
  URL = "https://pixabay.com/api/?key=" + this.API_KEY + "&q=" + encodeURIComponent('moon+space') + "&per_page=" + encodeURIComponent('4');
  hits: any[] = [];
  searchQuery: string = '';


  constructor(private http: HttpClient) {
    this.http.get(this.URL).subscribe((data: any) => {
      if (parseInt(data.totalHits) > 0)
        this.hits = data.hits;
      else
        console.log('No hits');
    });
  }

  searchImages() {
    this.http.get("https://pixabay.com/api/?key=" + this.API_KEY + "&q=" + encodeURIComponent(this.searchQuery) + "&per_page=" + encodeURIComponent('4')).subscribe((data: any) => {
      if (parseInt(data.totalHits) > 0)
        this.hits = data.hits;
      else
        console.log('No hits');
    });
  }
}
