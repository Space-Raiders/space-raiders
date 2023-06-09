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
    return this.http.get('https://pixabay.com/api/?key=36745863-3668c0d43cabb91e96c01249b&q=yellow+flowers&image_type=photo&pretty=true');
  }
}
