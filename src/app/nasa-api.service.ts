import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INasaForDate } from './interfases/INasaForDate';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiKey = 'TU_API_KEY';
  constructor(private http: HttpClient) { }

  getImages() {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }

  // getPokeList(limit?: number, page?:number): Observable<IPokeEncyclopedia> {
  //   const url = (limit) ? `${this.urlBase}?limit=${limit}` : `${this.urlBase}`;
  //   if (page){
  //     //url = url.concat()
  //   }
  //   return this.http.get<IPokeEncyclopedia>(url);
  // }

  getNasaForDate(date: string): Observable<INasaForDate> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`; //2023-09-18
    return this.http.get<INasaForDate>(`${url}`);
  }
}
