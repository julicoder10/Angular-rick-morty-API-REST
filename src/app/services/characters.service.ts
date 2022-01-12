import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  url:string = 'https://rickandmortyapi.com/api/character'
  
  constructor(private http: HttpClient) { }
  getCharacters():Observable<any>{
    return this.http.get(this.url)
  }
}
