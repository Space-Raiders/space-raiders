import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiUrl = 'https://api.le-systeme-solaire.net/rest.php/bodies';

  constructor(private http: HttpClient) { }

  getPlanetDetails(planetName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${planetName}`);
  }

}