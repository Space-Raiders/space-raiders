import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  apiCall() {
    return this.http.get('https://api.le-systeme-solaire.net/rest.php/bodies/moon');
  }
}
