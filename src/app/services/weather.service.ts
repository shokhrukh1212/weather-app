import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment, WeatherData } from '../environment/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.base_url, {
      headers: new HttpHeaders()
        .set(
          environment.rapidApiHostHeaderName,
          environment.rapidApiHostHeaderValue
        )
        .set(
          environment.rapidApiKeyHeaderName,
          environment.rapidApiKeyHeaderValue
        ),
      params: new HttpParams().set('city', cityName),
    });
  }
}
