import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  getInfo(filter: string, value: string): Observable<any[]> {
    let pagintation = filter == 'pokemon' ? '?limit=20&offset=20': '0'
    let url = this.apiUrl + '/' + filter + '/';
    if (value == '') {
      url = url + '/' + pagintation;
    } else {
      url = url + '/' + value
    }
    return this.http.get<any[]>(url);
  }

  getPokemonInfo(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
  
}
