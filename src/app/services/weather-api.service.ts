import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  private base_url = 'https://api.weatherapi.com/v1';
  private API_KEY = '4edba3442f5e4a8aac270325230707';

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(this.base_url + '/current.json', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams()
        .set('key', this.API_KEY)
        .set('q', city)
        .set('days', 5),
    });
  }
}
